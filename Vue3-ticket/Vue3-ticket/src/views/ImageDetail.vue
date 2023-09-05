<template>
  <div class="c-view">
    <div class="view-content">
      <vs-image :src="avatarUrl" alt="img" v-if="avatarUrl" />
      <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
    </div>
    <div class="user-content">
      <div class="user-info" @click="handleHomepage">
        <vs-image :src="authoravatar" alt="img" v-if="authoravatar" class="user-avatar" />
        <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
        <span>{{ authorNickname }}</span>
        <button class="trand" v-if="!isFollow" @click.stop="handleTrand">+ 关注</button>
        <button class="tranded" v-else @click.stop="handleTrand">已关注</button>
      </div>
      <p>{{ description }}</p>
      <div class="button-group">
        <span class="like-button" @click="handleLike" :class="{ 'like-button-active': isLike }"
          ><span>{{ likeCount }}</span>
        </span>
        <span
          class="collect-button"
          @click="handleCollect"
          :class="{ 'collect-button-active': isCollect }"
        >
          <span>{{ collectCount }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, toRaw } from 'vue'
import {
  doCancelTrand,
  doDetail,
  doTrand,
  doUserDetails,
  doLike,
  doCancellike,
  doCollect,
  doCancelCollect
} from '@/api'
import { useRoute } from 'vue-router'
import { showFailToast, showSuccessToast } from 'vant'
import router from '@/router'

const detailList = ref<any>('')
const avatarUrl = ref()
const authoravatar = ref()
const authorNickname = ref()
const authorId = ref()
const authorInfo = ref()
const description = ref()
const isLike = ref(false)
const likeCount = ref(0)
const collectCount = ref(0)
const isCollect = ref(false)
const isFollow = ref()
const pictureId = ref()
const route = useRoute()

onBeforeMount(() => {
  handleDetail()
})
//获取图片详情
const handleDetail = () => {
  pictureId.value = route.query.id
  doDetail(pictureId.value)
    .then((result) => {
      detailList.value = result
      description.value = detailList.value.description // 描述
      isLike.value = detailList.value.isLike // 是否点赞
      likeCount.value = detailList.value.likeCount // 点赞数
      isCollect.value = detailList.value.isCollect // 是否收藏
      collectCount.value = detailList.value.collectCount // 收藏数
      avatarUrl.value = 'https://img.daysnap.cn/' + detailList.value.file.filepath // 图片
      authoravatar.value = 'https://img.daysnap.cn/' + detailList.value.user.avatar.filepath // 作者头像
      authorNickname.value = detailList.value.user.nickname // 作者用户名
      authorId.value = detailList.value.user.id // 作者Id
      handleUserDetail()
    })
    .catch((error) => {
      console.log(error)
    })
}
//获取作者详情
const handleUserDetail = () => {
  doUserDetails(authorId.value)
    .then((result) => {
      authorInfo.value = result
      isFollow.value = authorInfo.value.isFollow // 是否关注
    })
    .catch((error) => {
      console.log(error)
    })
}
//关注
const handleTrand = () => {
  if (!isFollow.value) {
    doTrand({
      followUserId: authorId.value
    })
      .then(() => {
        handleUserDetail()
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    doCancelTrand({
      followUserId: authorId.value
    })
      .then(() => {
        handleUserDetail()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
//点赞
const handleLike = () => {
  if (!isLike.value) {
    doLike({
      pictureId: pictureId.value
    })
      .then(() => {
        handleDetail()
        showSuccessToast('点赞成功')
      })
      .catch(() => {
        showFailToast('点赞失败')
      })
  } else {
    doCancellike({
      pictureId: pictureId.value
    })
      .then(() => {
        handleDetail()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
//收藏
const handleCollect = () => {
  if (!isCollect.value) {
    doCollect({
      pictureId: pictureId.value
    })
      .then(() => {
        handleDetail()
        showSuccessToast('收藏成功')
      })
      .catch(() => {
        showFailToast('收藏失败')
      })
  } else {
    doCancelCollect({
      pictureId: pictureId.value
    })
      .then(() => {
        handleDetail()
      })
      .catch((error) => {
        console.dir(error)
      })
  }
}
//跳转用户中心
const handleHomepage = () => {
  router.push({
    path: 'homepage',
    query: {
      id: authorId.value
    }
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.c-view {
  padding: j(10);
  height: 100vh;
}
.view-content {
  margin-bottom: j(20);
  img {
    width: 100%;
    height: 100%;
  }
}
.user-content {
  display: flex;
  flex-direction: column;
  p {
    font-size: j(18);
    margin-bottom: j(20);
  }
}
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: j(20);
  position: relative;
  img {
    display: block;
    width: j(50);
    height: j(50);
    border-radius: 50%;
    margin-right: j(30);
  }
}
.trand,
.tranded {
  position: absolute;
  right: j(20);
  width: j(80);
  height: j(30);
  font-size: j(16);
}
.trand {
  background-color: rgb(250, 114, 152);
  color: #fff;
}
.tranded {
  background-color: #ccc;
  color: #000;
}
.button-group {
  display: flex;
  justify-content: space-around;
  span {
    display: flex;
    flex-direction: column;
  }
}
.like-button {
  display: block;
  width: j(30);
  height: j(30);
  background: url(@/assets/images/like.svg);
  background-size: auto;
}
.like-button-active {
  background: url(@/assets/images/likeactive.svg);
}
.collect-button {
  display: block;
  width: j(30);
  height: j(30);
  background: url(@/assets/images/collect.svg);
  background-size: auto;
}
.collect-button-active {
  background: url(@/assets/images/collectactive.svg);
}
</style>

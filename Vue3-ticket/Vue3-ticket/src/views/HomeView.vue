<template>
  <div class="home-view">
    <!-- 头部搜索 -->
    <div class="home-header">
      <router-link to="user">
        <vs-image :src="avatarUrl" wr="50" class="header-avatar" />
      </router-link>
      <div class="search-form">
        <van-search
          v-model="keyword"
          show-action
          placeholder="请输入搜索关键词"
          @search="handleSearch"
          shape="round"
        >
          <template #action>
            <div class="search-button" @click="handleSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
    <!-- 图片列表 -->
    <van-pull-refresh class="content" v-model="refreshing" @refresh="handleRefresh" ref="view">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad"
        class="image-list"
      >
        <van-cell
          v-for="item in list"
          :key="item.id"
          @click="handleImageDetail(item.id)"
          class="image-item"
        >
          <vs-image :src="item.file.filepath" wr="200" alt="img" />
          <div class="detail-content">
            <span>{{ item.description }}</span>
            <span><i></i>{{ item.user.nickname }}</span>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, toRaw } from 'vue'
import { showConfirmDialog, showSuccessToast, showFailToast } from 'vant'
import {
  doCancelCollect,
  doCancellike,
  doCollect,
  doDelete,
  doLike,
  doTabulation
} from '@/api/index'
import VsImage from '@/components/VsImage.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const keyword = ref('')
const keyword1 = ref('')
const imageList = ref<any>([])
const list = ref(toRaw(imageList))
let current1 = 0
const loading = ref(false)
const finished = ref(false)
const error = ref(false)
const refreshing = ref(false)
const view = ref()
const avatarUrl = ref()
onBeforeMount(() => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  avatarUrl.value = 'https://img.daysnap.cn/' + userInfo.avatar.filepath
})
// 点赞
const handleLike = (id: any, isLike: any) => {
  if (!isLike) {
    doLike({
      pictureId: id
    })
      .then((result) => {
        handleRefresh()
        showSuccessToast('点赞成功')
        console.log(result)
      })
      .catch((error) => {
        showFailToast('点赞失败')
        console.dir(error)
      })
  } else {
    doCancellike({
      pictureId: id
    })
      .then((result) => {
        handleRefresh()
        console.log(result)
      })
      .catch((error) => {
        console.dir(error)
      })
  }
}
// 收藏
const handleCollect = (id: any, isCollect: any) => {
  if (!isCollect) {
    doCollect({
      pictureId: id
    })
      .then((result) => {
        handleRefresh()
        showSuccessToast('收藏成功')
        console.log(result)
      })
      .catch((error) => {
        showFailToast('收藏失败')
        console.dir(error)
      })
  } else {
    doCancelCollect({
      pictureId: id
    })
      .then((result) => {
        handleRefresh()
        console.log(result)
      })
      .catch((error) => {
        console.dir(error)
      })
  }
}
//更新
const handleUpdataImage = (item: any) => {
  const data = toRaw(item)
  router.push({
    path: '/imagecreate',
    query: {
      id: data.id,
      title: data.title,
      description: data.description,
      type: data.type,
      fileId: data.file.id,
      imgUrl: data.file.filepath
    }
  })
}
//删除
const handleDeleteImage = (id: any) => {
  showConfirmDialog({
    title: '温馨提示',
    message: '确认要删除吗'
  })
    .then(() => {
      doDelete(id)
        .then(() => {
          reqDataList(1)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch(() => {
      // on cancel
    })
}
//跳转图片详情
const handleImageDetail = (id: any) => {
  router.push({
    path: '/imagedetail',
    query: {
      id
    }
  })
}
//获取图片列表
const reqDataList = (current: number) => {
  doTabulation({
    current: current,
    length: 10,
    keyword: keyword1.value
  })
    .then((result) => {
      const { list, count } = result
      imageList.value = current === 1 ? list : [...imageList.value, ...list]
      finished.value = imageList.value.length >= count
      current1 = current
    })
    .catch((error) => {
      console.log(error)
      error.value = true
    })
    .finally(() => {
      loading.value = false
      refreshing.value = false
    })
}
//下拉刷新
const handleRefresh = () => {
  reqDataList(1)
  view.value.$el.scrollTop = 0
}
//上拉加载
const handleLoad = () => {
  reqDataList(current1 + 1)
}
//搜索
const handleSearch = () => {
  keyword1.value = keyword.value
  handleRefresh()
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: j(10);
}
.home-header {
  display: flex;
  flex-direction: row;
}
.header-avatar {
  display: block;
  width: j(50);
  height: j(50);
  border-radius: 50%;
}
.search-form {
  flex: 1;
}
.search-button {
  width: j(40);
  height: j(24);
  line-height: j(24);
  text-align: center;
  border-radius: j(10);
  background-color: red;
  color: #fff;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.image-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: j(100);
  position: relative;
  .van-list-finished-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: j(60);
  }
}
.image-item {
  width: 50%;
  padding: j(5);
  display: flex;
  flex-direction: column;
  img {
    display: block;
    width: 100%;
    height: j(100);
  }
}
.detail-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  span {
    white-space: nowrap;
    &:last-child {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  i {
    display: block;
    width: j(20);
    height: j(20);
    background: url(@/assets/images/UP.svg);
    background-size: 100% 100%;
  }
}
</style>

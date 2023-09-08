<template>
  <div class="homepage-view">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="header-content">
        <img src="@/assets/images/desktop_4.jpg" alt="img" />
        <i class="iconfont back" @click="handleBack">&#xe60c;</i>
        <i class="iconfont search" @click="handleSearch">&#xe600;</i>
        <van-cell @click="showShare = true"><i class="iconfont share">&#xe605;</i></van-cell>
        <van-share-sheet
          v-model:show="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
        />
        <div></div>
      </div>
      <div class="homepage-content">
        <div class="info-header">
          <vs-image :src="avatarUrl" wr="100" class="avatar-info" v-if="avatarUrl" />
          <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
          <div class="info-header-content">
            <div class="info-header-item">
              <router-link
                replace
                :to="{ path: '/followfans/fans', query: { id: authorId || id } }"
              >
                <div class="fans">
                  <span>{{ fans }}</span>
                  <p>粉丝</p>
                </div>
              </router-link>
              <router-link
                replace
                :to="{ path: '/followfans/follow', query: { id: authorId || id } }"
              >
                <div class="follow">
                  <span>{{ follow }}</span>
                  <p>关注</p>
                </div>
              </router-link>
              <div class="like">
                <span>{{ like }}</span>
                <p>获赞</p>
              </div>
            </div>
            <router-link to="/edit" class="edit-button" v-if="!authorId || authorId === id">
              <button>编辑资料</button>
            </router-link>
            <div class="trand-button" v-else>
              <button class="trand" v-if="!isFollow" @click.stop="handleTrand">+ 关注</button>
              <button class="tranded" v-else @click.stop="handleTrand">已关注</button>
            </div>
          </div>
        </div>
        <div class="info-nickname">
          <p>{{ nickname }}</p>
        </div>
        <div class="info-signature">
          <p>{{ signature }}</p>
          <span>详情</span>
        </div>
      </div>
      <div class="list">
        <van-tabs v-model:active="activeName" class="title-group" routes>
          <van-tab title="主页" name="/homepage/myhome" replace to="/homepage/myhome"></van-tab>
          <van-tab
            title="动态"
            name="/homepage/mytrand"
            replace
            :to="{
              path: '/homepage/mytrand',
              query: {
                id: id
              }
            }"
          ></van-tab>
          <van-tab
            title="收藏"
            name="/homepage/mycollect"
            replace
            to="/homepage/mycollect"
          ></van-tab>
        </van-tabs>
        <router-view></router-view>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { showToast } from 'vant'
import { onBeforeMount } from 'vue'
import { ref } from 'vue'
import { doCancelTrand, doTrand, doUserDetails } from '@/api'
const route = useRoute()
const router = useRouter()
const fans = ref('-')
const follow = ref('-')
const like = ref('-')
const nickname = ref('昵称')
const signature = ref('')
const avatarUrl = ref()
const userInfo = ref()
const activeName = ref()
const loading = ref(false)
const authorId = ref()
const id = ref()
const authorInfo = ref()
const isFollow = ref()

const onRefresh = () => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
onBeforeMount(() => {
  authorId.value = route.query.id
  activeName.value = route.path
  id.value = window.localStorage.getItem('userId')
  if (authorId.value) {
    if (authorId.value === id.value) {
      userDetail()
    } else {
      handleUserDetail()
    }
  } else {
    userDetail()
  }
})

const userDetail = () => {
  userInfo.value = JSON.parse(window.localStorage.getItem('userInfo'))
  nickname.value = userInfo.value.nickname
  signature.value = userInfo.value.signature || '个性签名'
  follow.value = userInfo.value.followingCount
  fans.value = userInfo.value.followerCount
  if (userInfo.value.avatar) {
    avatarUrl.value = 'https://img.daysnap.cn/' + userInfo.value.avatar.filepath
  }
}
//获取作者详情
const handleUserDetail = () => {
  doUserDetails(authorId.value)
    .then((result) => {
      authorInfo.value = result
      nickname.value = authorInfo.value.nickname
      signature.value = authorInfo.value.signature || '个性签名'
      follow.value = authorInfo.value.followingCount
      fans.value = authorInfo.value.followerCount
      isFollow.value = authorInfo.value.isFollow // 是否关注
      if (authorInfo.value.avatar) {
        avatarUrl.value = 'https://img.daysnap.cn/' + authorInfo.value.avatar.filepath
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
//返回
const handleBack = () => {
  router.go(-1)
}
//搜索
const handleSearch = () => {
  router.push({
    path: '/mysearch',
    query: {
      id: authorId.value
    }
  })
}
//分享
const showShare = ref(false)
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' }
]
const onSelect = (option: any) => {
  showToast(option.name)
  showShare.value = false
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
</script>
<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.homepage-view {
  background-color: #f1f1f1;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: j(200);
}
.header-content {
  position: relative;
  img {
    display: block;
    width: 100vh;
    height: j(150);
  }
}
.back,
.search,
.share {
  position: fixed;
  top: j(40);
  width: j(30);
  height: j(30);
  background-color: #000;
  color: #fff;
  font-size: j(30);
  text-align: center;
  opacity: 0.3;
  border-radius: 50%;
}
.back {
  left: j(10);
}
.search {
  right: j(50);
}
.share {
  right: j(10);
  font-size: j(30);
}
.homepage-content {
  background-color: #fff;
}
.info-header {
  padding: j(10);
  display: flex;
  img {
    display: block;
    width: j(100);
    height: j(100);
    border-radius: 50%;
    margin-top: j(-20);
  }
}
.info-header-content {
  margin-left: j(50);
  width: 100%;
  display: flex;
  flex-direction: column;
  button {
    flex: 1;
    width: 100%;
    height: 100%;
    border: #ff80af 1px solid;
    background-color: #fff;
    color: #ff80af;
    font-size: j(14);
  }
}
.edit-button {
  flex: 1;
  margin-top: j(10);
}
.info-header-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
}
.fans,
.follow,
.like {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-bottom: j(6);
  }
  p {
    color: #ccc;
  }
}
.follow {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 0 j(30);
}
.info-nickname {
  margin: j(10);
  p {
    font-size: j(20);
    color: #666;
  }
}
.info-signature {
  padding: j(10);
  display: flex;
  justify-content: space-between;
  p {
    font-size: j(12);
    color: #aaa;
  }
  span {
    color: #5078cf;
  }
}
.list {
  position: relative;
}
.title-group {
  position: sticky;
  top: j(300);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: j(20);
  color: #999;
  border-top: 1px solid #f1f1f1;
}
.trand-button {
  height: j(30);
  .trand,
  .tranded {
    height: j(30);
    font-size: j(16);
  }
  .trand {
    background-color: rgb(250, 114, 152);
    color: #fff;
  }
  .tranded {
    border: none;
    background-color: #ccc;
    color: #000;
  }
}
</style>

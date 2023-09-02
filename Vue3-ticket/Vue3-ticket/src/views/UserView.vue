<template>
  <div class="c-view">
    <div class="header-content" @click="handleLogin">
      <div class="login-view" v-if="!isToken">
        <img src="@/assets/images/imageUpload.jpg" alt="img" />
        <span>点击登录</span>
        <i>></i>
      </div>
      <div class="user-avatar" v-else>
        <vs-image :src="avatarUrl" wr="50" alt="img" v-if="avatarUrl" class="avatar-info" />
        <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
        <span>{{ nickname }}</span>
        <i>空间</i>
      </div>
      <div class="user-info" @click.stop="handleTrand">
        <div class="user-trend">
          <span>{{ trend }}</span>
          <p>动态</p>
        </div>
        <div class="user-follow" @click.stop="handleFollow">
          <span>{{ follow }}</span>
          <p>关注</p>
        </div>
        <div class="user-fans" @click.stop="handleFans">
          <span>{{ fans }}</span>
          <p>粉丝</p>
        </div>
      </div>
      <div class="my-trand" @click.stop="handleCollect">
        <i></i>
        <span>我的收藏</span>
      </div>
    </div>
    <div class="more-srevice">
      <p>更多服务</p>
      <div class="set-up">
        <span @click="handleSetup">设置</span>
        <i>></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { doUserDetails } from '@/api'
import router from '@/router'
import { onBeforeMount, ref } from 'vue'

const trend = ref('-')
const follow = ref('-')
const fans = ref('-')
const isToken = ref<any>('')
const userDetail = ref()
const avatarUrl = ref('')
const nickname = ref('')
onBeforeMount(() => {
  isToken.value = window.localStorage.getItem('token')
  if (isToken.value) {
    handleUserDetail()
  }
})
//登录 / 个人中心
const handleLogin = () => {
  if (!isToken.value) {
    router.push('/login')
  } else {
    router.push('homepage')
  }
}
// 获取用户详情
const handleUserDetail = () => {
  const id = window.localStorage.getItem('userId')
  doUserDetails(id)
    .then((result) => {
      userDetail.value = result
      avatarUrl.value = 'https://img.daysnap.cn/' + userDetail.value.avatar.filepath
      nickname.value = userDetail.value.nickname
      trend.value = userDetail.value.pictureCount
      follow.value = userDetail.value.followingCount
      fans.value = userDetail.value.followerCount
    })
    .catch((error) => {
      console.log(error)
    })
}
//设置
const handleSetup = () => {
  router.push('setup')
}
//动态
const handleTrand = () => {
  if (isToken.value) {
    router.push('trand')
  } else {
    router.push('/login')
  }
}
//关注
const handleFollow = () => {
  if (isToken.value) {
    router.push('follow')
  } else {
    router.push('/login')
  }
}
//粉丝
const handleFans = () => {
  if (isToken.value) {
    router.push('fans')
  } else {
    router.push('/login')
  }
}
//我的收藏
const handleCollect = () => {
  if (isToken.value) {
    router.push('myCollect')
  } else {
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.c-view {
  padding: j(40) j(10);
}
.user-avatar,
.login-view {
  height: j(50);
  display: flex;
  align-items: center;
  img,
  .avatar-info {
    display: block;
    width: j(50);
    height: j(50);
    border-radius: 50%;
    margin-right: j(10);
  }
  span {
    font-size: j(20);
    color: #333;
    flex: 1;
  }
  i {
    font-size: j(20);
    color: #ccc;
  }
}
.user-avatar {
  i {
    font-size: j(12);
  }
  i::after {
    content: '>';
    font-size: j(16);
    margin-left: j(10);
  }
}
.user-info {
  margin-top: j(10);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: j(50);
}
.user-trend,
.user-follow,
.user-fans {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: j(12);
    color: #333;
    margin-bottom: j(10);
  }
  p {
    font-size: j(14);
    color: #ccc;
  }
}
.user-follow {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 0 j(50);
}
.my-trand {
  margin-top: j(10);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #666;
  i {
    display: block;
    width: j(25);
    height: j(25);
    background: url(@/assets/images/trand.svg) center center no-repeat;
    background-size: j(25) j(25);
    margin-bottom: j(6);
  }
}
.more-srevice {
  margin-top: j(20);
  display: flex;
  flex-direction: column;
  p {
    font-weight: 500;
    font-size: j(14);
    margin: j(20) 0;
  }
}
.set-up {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: j(10) 0;
  margin-left: j(10);
  span {
    display: flex;
    flex-direction: row;
    font-size: j(14);
    height: j(20);
    line-height: j(20);
    flex: 1;
  }
  span::before {
    content: '';
    display: block;
    width: j(20);
    height: j(20);
    background: url(@/assets/images/install.svg) center center no-repeat;
    background-size: j(20) j(20);
    margin-right: j(10);
  }
  i {
    font-size: j(20);
    color: #ccc;
  }
}
</style>

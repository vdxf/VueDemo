<template>
  <div class="setup-view">
    <van-nav-bar title="设置" left-arrow @click-left="handleBack" />
    <van-cell title="用户协议" is-link to="useragreement" />
    <van-cell title="隐私政策" is-link to="PrivacyPolicy" />
    <van-cell title="隐私权限设置" is-link to="help" />
    <button @click="handleExit" class="exit" v-if="isToken">退出登录</button>
  </div>
</template>
<script setup lang="ts">
import router from '@/router'

const isToken = window.localStorage.getItem('token')
//返回
const handleBack = () => {
  router.go(-1)
}
//退出登录
const handleExit = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('userId')
  window.localStorage.removeItem('userInfo')
  router.replace('/login')
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.exit {
  display: block;
  height: j(40);
  width: 50%;
  margin: j(20) auto;
  background-color: #ff80af;
  border: none;
  color: #fff;
  font-size: j(16);
}
</style>

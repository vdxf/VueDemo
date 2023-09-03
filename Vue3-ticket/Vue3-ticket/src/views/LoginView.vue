<template>
  <div class="login-view">
    <van-nav-bar title="密码登录" left-arrow @click-left="handleBack" />
    <img src="@/assets/images/desktop_1.jpg" alt="img" class="login-image" />
    <div class="login-input">
      <div class="account-input">
        <span>账号</span>
        <input type="text" placeholder="请输入邮箱" v-model="email" />
      </div>
      <div class="password-input">
        <span>密码</span>
        <input type="password" placeholder="请输入密码" v-model="password" />
        <i></i>
        <div class="forgot-password" @click.stop="handleRetrievePassword">忘记密码？</div>
      </div>
    </div>
    <div class="button-group">
      <button class="register-button" @click="handleRegister">注册</button>
      <button
        class="login-button"
        :class="{ 'login-button-active': email && password }"
        @click="handleLogin"
      >
        登录
      </button>
      <div class="help-info">
        <p>
          登录即代表你同意<span @click="UserAgreement">用户协议</span>和<span @click="PrivacyPolicy"
            >隐私政策</span
          >
        </p>
        <p>遇到问题？<span @click="handleHelp">查看帮助</span></p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { doLogin } from '@/api/index'
import router from '@/router'
import { doUserList } from '@/api'
import { ref, toRaw } from 'vue'

const email = ref('2532499815@qq.com')
const password = ref('123456789')
const userInfo = ref()
const userId = ref()
//返回
const handleBack = () => {
  router.go(-1)
}
// 找回密码
const handleRetrievePassword = () => {
  router.push('retrievePassword')
}
// 注册
const handleRegister = () => {
  router.push('register')
}
// 登录
const handleLogin = () => {
  doLogin({ email: email.value, password: password.value })
    .then((result) => {
      window.localStorage.setItem('token', result.token)
      router.replace('/home')
      handleUserList()
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
//获取用户列表
const handleUserList = () => {
  doUserList({
    current: 1,
    length: 10
  })
    .then((result) => {
      userInfo.value = result.list.find((item: any) => {
        return item.email === email.value
      })
      console.log(userInfo.value)
      userId.value = toRaw(userInfo.value).id
      window.localStorage.setItem('userId', userId.value)
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
//用户协议
const UserAgreement = () => {
  router.push('useragreement')
}
//隐私政策
const PrivacyPolicy = () => {
  router.push('PrivacyPolicy')
}
//查看帮助
const handleHelp = () => {
  router.push('help')
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.login-view {
  height: 100vh;
}
.login-image {
  width: 100%;
  height: j(100);
}
.login-input {
  display: flex;
  flex-direction: column;
  padding-left: j(10);
}
.account-input,
.password-input {
  display: flex;
  padding: j(10) 0;
  span {
    margin-right: j(40);
    font-size: j(16);
    color: #666;
  }
  input {
    flex: 1;
    font-size: j(14);
    margin-right: j(30);
  }
}
.forgot-password {
  font-size: j(12);
  color: #ff80af;
}
.password-input {
  border-top: 1px solid #ddd;
}
.button-group {
  height: 100%;
  background-color: #ddd;
  padding: j(10);
  button {
    width: 48%;
    height: j(40);
    font-size: j(16);
  }
}
.register-button {
  border: #ff80af 1px solid;
  color: #ff80af;
  margin-right: j(10);
}
.login-button {
  background-color: #ffb2d0;
  color: #fff;
  border: none;
}
.login-button-active {
  background-color: #ff80af;
  color: #fff;
  border: none;
}
.help-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  p {
    margin-top: j(20);
  }
  span {
    color: #ff80af;
  }
}
</style>

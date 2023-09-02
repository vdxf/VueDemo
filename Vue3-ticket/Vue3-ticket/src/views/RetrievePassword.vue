<template>
  <div class="retrieve-view">
    <van-nav-bar title="找回密码" left-arrow @click-left="handleBack" />
    <div class="bind-email">
      <span>绑定邮箱</span>
      <input type="email" placeholder="请输入绑定邮箱" v-model="email" />
    </div>
    <button
      class="retrieve-next"
      :class="{ 'retrieve-next-active': email }"
      @click="handleRetrievePassword"
    >
      下一步
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const email = ref()
const handleBack = () => {
  router.go(-1)
}
const handleRetrievePassword = () => {}
</script>
<style scoped lang="scss">
@import '@/assets/sass/define.scss';
.retrieve-view {
  height: 100vh;
  background-color: #ddd;
}
.bind-email {
  margin: j(10) 0;
  height: j(40);
  background-color: #fff;
  padding-left: j(10);
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: j(16);
  span {
    margin-right: j(20);
  }
}
.retrieve-next {
  height: j(40);
  margin: j(10);
  width: 94%;
  background-color: #ffb2d0;
  border: none;
  color: #fff;
  font-size: j(16);
}
.retrieve-next-active {
  background-color: #ff80af;
}
</style>

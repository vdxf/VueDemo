<template>
  <div class="main-view">
    <RouterView class="main-content" />
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o">用户</van-tabbar-item>
      <router-link class="image-add" to="/imagecreate">+</router-link>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.main-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-content {
  flex: 1;
}
.image-add {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: j(20);
  bottom: j(60);
  width: j(44);
  height: j(44);
  background-color: #eb1e23;
  box-shadow: 0 0 j(10) j(5) #0003;
  border-radius: 50%;
  color: #fff;
  font-size: j(14);
}
</style>

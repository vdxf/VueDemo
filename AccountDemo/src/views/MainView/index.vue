<template>
  <div class="main-view">
    <router-view class="main-content"></router-view>
    <van-tabbar v-model="active" route >
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/account">记账</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/bill">账单</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/chart">分析</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
  methods: {

  },
}
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
</style>
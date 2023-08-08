<template>
  <div>
    <transition :name="pageJumpName">
      <router-view class="view-wrap"></router-view>
    </transition>
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
    data () {
      return {
        pageJumpName: '',
        active: 0,
      }
    },
    watch: {
      $route ( to, from ) {
        if ( to.meta.station > from.meta.station ) {
          this.pageJumpName = 'pageJumpLeft'
        } else {
          this.pageJumpName = 'pageJumpRight'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/global.scss';
  .view-wrap{
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .pageJumpRight-enter-active,
  .pageJumpRight-leave-active,
  .pageJumpLeft-enter-active,
  .pageJumpLeft-leave-active {
    will-change: transform;
    transition: all .5s ease;
    position: absolute;
  }
  .pageJumpRight-enter,
  .pageJumpLeft-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .pageJumpRight-leave-active,
  .pageJumpLeft-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
</style>
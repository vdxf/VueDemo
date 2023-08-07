<template>
  <div class="main-view">
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
export default {
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
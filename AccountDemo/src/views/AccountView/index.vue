<template>
  <div class="account-wrap">
    <router-view></router-view>

    <div class="header-title">记账：</div>
    <div class="go-btn-box">
      <router-link to="/consumption" class="go-account go-consumption">消费</router-link>
      <router-link to="/entry" class="go-account go-entry">入账</router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.account-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: j(20);
}
.header-title {
  color: #1D8CE0;
  font-size: j(18);
  padding-bottom: j(20);
}
.go-btn-box {
  margin: auto;
}
.go-account {
  margin-bottom: j(20);
  width: j(150);
  height: j(35);
  font-size: j(14);
  line-height: j(35);
  border-radius: j(5);
  color: #fff;
  display: block;
  text-align: center;
}
.go-consumption {
  background-color: #FF4949;
  box-shadow: 0 3px 0 0 red;
}
.go-entry {
  background-color: #69ce72;
  box-shadow: 0 3px 0 0 #13CE66;
}
</style>
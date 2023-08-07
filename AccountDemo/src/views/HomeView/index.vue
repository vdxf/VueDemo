<template>
  <div class="container-view">
    <div class="home-wrap">
      <div class="balance-wrap">
        <div class="balance-icon">
        </div>
        <h2>可用余额</h2>
        <h1>{{ totalBalance }}.00</h1>
      </div>
      <div class="home-btn-wrap">
        <router-link to="/consumption" class="go-account go-consumption">消费</router-link>
        <router-link to="/entry" class="go-account go-entry">入账</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Util from '@/assets/lib/Util'
export default {
  data () {
    return {
      totalBalance: 0,
    }
  },
  created() {
    this.fetchBalance()
  },
  methods: {
    fetchBalance () {
      this.totalBalance = Util.TotalBalance.query()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.container-view {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  position: relative;
  padding-bottom: j(55);
  background-color: #F9FAFC;
}
.home-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.balance-wrap {
  position: relative;
  width: j(228);
  height: j(228);
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #999;
    position: absolute;
    font-size: j(12);
    top: 30%;
  }
  h1 {
    height: j(48);
    line-height: j(48);
    font-size: j(24);
    color: #58B7ff;
    &:after {
      content: '(￥)';
      color: #999;
      font-size: j(12);
      line-height: j(42);
    }
  }
}
.balance-icon {
  position: absolute;
  width: 50%;
  height: 50%;
  color: #ddd;
  background: url("@/assets/images/balance.png") center center no-repeat;
  background-size: 100% 100%;
  opacity: 0.1;
}
.home-btn-wrap {
  margin-top: j(40);
  display: flex;
  flex-direction: column;
}
.go-account {
  margin: 0 auto j(20);
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
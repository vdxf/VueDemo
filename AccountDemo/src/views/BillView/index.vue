<template>
  <div class="bill-wrap">
    <div class="header-title">
      账单：
      <i></i>
    </div>
    <div class="bill-content">
      <ul v-if="billArr.length" class="bill-list">
        <li class="bill-item" v-for="( billItem, billIndex ) in billArr" :key="billIndex">
          <span>
           <router-link :to='billItem.consumptionOrEntry ? "/consumption" : "/entry" '>
             <i class="bill-item-type" :class="{'entry-type': billItem.consumptionOrEntry === 1, 'consumption-type': billItem.consumptionOrEntry === 0}"></i>
           </router-link>
          </span>
          <div class="bill-item-content">
            <div class="bill-item-ico">
              <p>基本工资</p>
              <p>123123</p>
            </div>
            <div class="bill-item-time">
              <p>入账时间：2023-07-30</p>
              <button>取消</button>
            </div>
          </div>
        </li>
      </ul>
      <div class="bill-null-content" v-else>
        <p>没有相关账单</p>
      </div>
    </div>
  </div>
</template>

<script>
import Util from "@/assets/lib/Util";
export default {
  data () {
    return {
      billArr: [],
    }
  },
  created () {

  },
  methods: {
    fetchBalance() {
      // this.billArr =
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.bill-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: j(20);
}
.header-title {
  color: #1D8CE0;
  font-size: j(18);
  padding-bottom: j(20);
  display: flex;
  justify-content: space-between;
  i {
    display: block;
    width: j(20);
    height: j(20);
    background: url("@/assets/images/filter.png") center center no-repeat;
    background-size: j(20) j(20);
  }
}
.bill-null-content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: j(16);
}
.bill-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bill-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    width: j(50);
    height: j(50);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: j(10);
  }
}
.bill-item-content {
  flex: 1;
  padding-top: j(10);
  padding-bottom: j(20);
  border-bottom: 1px solid #ccc;
}
.bill-item-ico, .bill-item-time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bill-item-ico {
  p {
    line-height: j(30);
    color: #333;
    font-size: j(14);
    font-weight: bold;
    &:nth-child(2):after {
      content: "￥";
      margin-left: j(10);
    }
  }
}
.bill-item-time {
  justify-content: flex-end;
  p {
    height: j(20);
    line-height: j(20);
    color: #999;
    font-style: j(12);
  }
  button {
    border: none;
    background: #FF4949;
    color: #fff;
    border-radius: j(6);
    padding: 0 j(6);
    margin-left: j(10);
  }
}
.bill-item-type {
  display: block;
  width: j(30);
  height: j(30);
  background-size: j(30) j(30);
}
.entry-type {
  background: url("@/assets/images/balance.png") center center no-repeat;
}
.consumption-type {
  background: url("@/assets/images/consumption.png")  center center no-repeat;
}

</style>
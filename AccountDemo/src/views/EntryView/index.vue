<template>
  <div class="container-view">
    <div class="header-title">入账：</div>
    <ul class="input-warp">
      <li>
        <van-cell title="日期:" :value="dateValue" @click="show = true" />
        <van-calendar v-model="show" @confirm="handleOnConfirm" :min-date="minDate" :max-date="maxDate" :show-confirm="false"/>
      </li>
      <li>
        <van-cell is-link @click="handleTimePopup">时间: <span>{{timeValue}}</span></van-cell>
        <van-popup v-model="time" position="bottom">
          <van-datetime-picker
              class="time-wrap"
              @confirm="handleTime"
              @cancel="time = false"
              type="time"
              confirm-button-text="完成"
          />
        </van-popup>
      </li>
      <li>
        <van-cell is-link @click="handleConsumptionPopup">入账类型: <span>{{accountType}}</span></van-cell>
        <van-popup v-model="type" position="bottom">
          <van-picker
              show-toolbar
              :columns="columns"
              @confirm="handleTypeConfirm"
              @cancel="handleTypeCancel"
          />
        </van-popup>
      </li>
      <li>
        <van-field v-model="sumValue" type="number" label="金额（￥）：" />
      </li>
      <li>
        <van-field v-model="remarkValue" type="text" label="备注：" />
      </li>
    </ul>
    <button class="sure-btn" @click="handleSubBill" :class="{'sure-btn-active':sumValue}">确认</button>
  </div>
</template>

<script>
import {Toast} from "vant";
import Util from "@/assets/lib/Util";

export default {
  data(){
    return {
      dateValue: '',
      show: false,
      timeValue: '',
      time: false,
      columns: ['基本工资', '公司福利', '其它入账'],
      accountType: '基本工资',
      type: false,
      sumValue: '',
      remarkValue: '',
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(),
    }
  },
  methods: {
    formatDate (date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    handleOnConfirm (date) {
      this.show = false;
      this.dateValue = this.formatDate(date);
    },
    handleTimePopup () {
      this.time = true;
    },
    handleTime (value) {
      this.timeValue = value
      this.time = false
    },
    handleConsumptionPopup(){
      this.type = true;
    },
    handleTypeConfirm(value) {
      this.accountType = value
      this.type = false;
    },
    handleTypeCancel() {
      this.type = false;
    },
    handleSubBill () {
      if (!this.sumValue) {
        Toast('请填写入账金额')
      } else {
        const bill = {
          id: Date.parse(new Date()),
          sumValue: this.sumValue,
          dateValue: this.dateValue,
          timeValue: this.timeValue,
          remarkValue: this.remarkValue,
          accountType: this.accountType,
          billTypeNumber: this.billTypeNumber(this.accountType),
          consumptionOrEntry: 1,
        }
        Util.Bill.save(bill)
        Toast('记账成功')
        this.resetValue()
      }
    },
    resetValue () {
      this.sumValue = ''
      this.remarkValue = ''
      this.dateValue = ''
      this.timeValue = ''
    },
    billTypeNumber ( accountType ) {
      switch ( accountType ) {
        case '基本工资':
          accountType = 'jbgz';
          break;
        case '公司福利':
          accountType = 'gsfl';
          break;
        case '其它入账':
          accountType = 'qt';
          break;
      }
      return accountType
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.input-warp {
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: j(50);
    line-height: j(50);
    border-bottom: 1px solid #ccc;
    &:before {
      content: "*";
      color: red;
      font-size: j(14);
      margin-right: j(4);
    }
    &:last-child:before {
      content: " ";
    }
    &:nth-child(n+2) span {
      position: absolute;
      right: 0;
    }
  }
}
.van-cell {
  background: transparent;
  padding: 0;
}
.sure-btn-active {
  background-color: #69ce72;
  box-shadow: 0 3px 0 0 #13CE66;
}
</style>
<template>
  <div class="consumption-wrap">
    <div class="header-title">消费：</div>
    <ul class="input-warp">
      <li>
        <van-cell title="日期:" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="handleOnConfirm" :min-date="minDate" :max-date="maxDate" :show-confirm="false"/>
      </li>
      <li>
        <van-cell is-link @click="handleTimePopup">时间: <span>{{currentTime}}</span></van-cell>
        <van-popup v-model="time">
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
        <van-cell is-link @click="handleConsumptionPopup">消费类型: <span>{{columnsValue}}</span></van-cell>
        <van-popup v-model="type">
        <van-picker
            show-toolbar
            :columns="columns"
            @confirm="handleTypeConfirm"
            @cancel="handleTypeCancel"
        />
        </van-popup>
      </li>
      <li>
          <van-field v-model="money" type="number" label="金额（￥）：" />
      </li>
      <li>
          <van-field v-model="note" type="text" label="备注：" />
      </li>
    </ul>
    <button class="sure-btn" @click="handleSubBill">确认</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        date: '',
        show: false,
        currentTime: '',
        time: false,
        columns: ['水果零食','餐饮伙食', '出行旅游', '网上购物', '生活日常', '租房水电', '医疗药物','其它消费'],
        columnsValue: '',
        type: false,
        money: '',
        note: '',
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
        this.date = this.formatDate(date);
      },
      handleTimePopup () {
        this.time = true;
      },
      handleTime (value) {
        this.currentTime = value
        this.time = false
      },
      handleConsumptionPopup(){
        this.type = true;
      },
      handleTypeConfirm(value) {
        this.columnsValue = value
        this.type = false;
      },
      handleTypeCancel() {
        this.type = false;
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.consumption-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: j(20);
}
.header-title {
  color: #1D8CE0;
  font-size: j(18);
  padding-bottom: j(20);
  border-bottom: 1px solid #d9d9d9;
}
.input-warp {
  display: flex;
  flex-direction: column;
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
  padding: 0;
}
.sure-btn {
  border: none;
  margin-top: j(20);
  margin-bottom: j(40);
  height: j(40);
  line-height: j(40);
  border-radius: j(6);
  background-color: #bbb;
  box-shadow: 0 3px 0 0 #999;
  color: #fff;
  font-size: j(16);
}
</style>
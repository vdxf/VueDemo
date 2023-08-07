<template>
  <div class="container-view">
    <div class="bill-box">

      <div class="header-title">
        账单：
        <i @click="filterPopup = !filterPopup"></i>
      </div>

      <div class="filter-menu" v-show="filterPopup">
        <div class="header-title">
          筛选：
        </div>
        <ul class="input-warp">
          <li class="input-item">
            <van-cell is-link @click="handleYearPopup">年: <span>{{yearValue}}</span></van-cell>
            <van-popup v-model="year" position="bottom">
              <van-picker
                  show-toolbar
                  :columns="yearColumns"
                  @confirm="handleYearConfirm"
                  @cancel="handleYearCancel"
              />
            </van-popup>
          </li>
          <li class="input-item" v-show="yearValue">
            <van-cell is-link @click="handleMonthPopup">月: <span>{{monthValue}}</span></van-cell>
            <van-popup v-model="month" position="bottom">
              <van-picker
                  show-toolbar
                  :columns="monthColumns"
                  @confirm="handleMonthConfirm"
                  @cancel="handleMonthCancel"
              />
            </van-popup>
          </li>
          <li class="input-item" v-show="monthValue">
            <van-cell is-link @click="handleDayPopup">日: <span>{{dayValue}}</span></van-cell>
            <van-popup v-model="day" position="bottom">
              <van-picker
                  show-toolbar
                  :columns="dayColumns"
                  @confirm="handleDayConfirm"
                  @cancel="handleDayCancel"
              />
            </van-popup>
          </li>
        </ul>
        <div class="menu-type-wrap">
            <van-checkbox-group
                v-model="arr" class="checkbox-group"
            >
              <div v-for="( item, index ) in checkValue" :key="index" class="check-list">
                <van-checkbox
                    class="checkbox-item"
                    :name="item"
                    @click="handleCheckValue(item.value)"
                    ref="checkbox"
                >
                </van-checkbox>
                <span>{{item.value}}</span>
              </div>
            </van-checkbox-group>
        </div>
        <div class="menu-btn-wrap">
          <button @click="handleFilterBill">确认</button>
          <button @click="handleResetFilter">重置</button>
        </div>
      </div>

      <van-pull-refresh v-model="refreshing" @refresh="handleRefresh" class="bill-content">
        <van-list v-model="loading" @load="handleLoad" v-if="billArr.length">
          <van-cell v-for="( billItem, billIndex ) in billArr" :key="billIndex">
            <template>
              <div class="bill-list">
                <div class="bill-item">
                    <span>
                      <router-link :to='billItem.consumptionOrEntry ? "/entry" : "/consumption" '>
                        <i class="bill-item-type"
                           :class="{'entry-type': billItem.consumptionOrEntry === 1, 'consumption-type': billItem.consumptionOrEntry === 0}"></i>
                      </router-link>
                    </span>
                </div>
                <div class="bill-item-content">
                  <div class="bill-item-ico">
                    <p>{{ billItem.accountType }}</p>
                    <p>{{ billItem.sumValue }}</p>
                  </div>
                  <div class="bill-item-time">
                    <p>{{ billItem.consumptionOrEntry ? "入账" : "消费" }}时间：{{ billItem.dateValue }}</p>
                    <button @click.stop="handleDelete(billItem)">取消</button>
                  </div>
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
        <div class="bill-null-content" v-else>
          <p>没有相关账单</p>
        </div>
      </van-pull-refresh>

      <div class="bill-prompt-wrap">
        <div class="bill-prompt">
          <p>入账</p>
          <span class="bill-sum bill-sum-entry">{{ this.entrySum }}</span>
        </div>
        <span class="bill-reduce"></span>
        <div class="bill-prompt">
          <p>消费</p>
          <span class="bill-sum bill-sum-consumption">{{ this.consumptionSum }}</span>
        </div>
        <span class="bill-equal"></span>
        <div class="bill-prompt">
          <p>余额</p>
          <span class="bill-sum bill-sum-balance">{{ this.balanceSum }}</span>
        </div>
      </div>
    </div>

    <van-popup v-model="isCancel" closeable close-icon-position="top-right" class="bill-cancel-popup">
      <div class="bill-cancel">
        确认移除该条数据
      </div>
      <div class="bill-cancel-true" @click="handleDeleteTrue">
        √
      </div>
    </van-popup>

  </div>
</template>

<script>
import Util from "@/assets/lib/Util"

export default {
  data () {
    return {
      billArr: [],
      entrySum: 0,
      consumptionSum: 0,
      balanceSum: 0,
      isCancel: false,
      removeBill: '',
      loading: false,
      refreshing: false,
      filterPopup: false,
      yearColumns: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
      yearValue: '',
      year: false,
      monthColumns: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthValue: '',
      month: false,
      dayColumns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      dayValue: '',
      day: false,
      checkValue: [
        {'value': 'sgls'},
        {'value': 'cyhs'},
        {'value': 'cxly'},
        {'value': 'wsgw'},
        {'value': 'shrc'},
        {'value': 'cfsd'},
        {'value': 'ylyw'},
        {'value': 'jbgz'},
        {'value': 'gsfl'},
        {'value': 'qt'},
      ],
      checkValueArr: '',
      arr: [],
    }
  },
  created () {
    this.fetchBalance()
    this.countSum()
    this.balanceSum = this.entrySum - this.consumptionSum
  },
  methods: {
    handleCheckValue (value) {
      this.arr.concat(value)
      this.checkValueArr = this.arr.map( (item) => {
        return item.value
      })
    },
    handleYearConfirm (value) {
      this.yearValue = value
      this.year = false;
    },
    handleYearCancel () {
      this.year = false;
    },
    handleYearPopup () {
      this.year = true;
    },
    handleMonthConfirm (value) {
      this.monthValue = value
      this.month = false;
    },
    handleMonthCancel () {
      this.month = false;
    },
    handleMonthPopup () {
      this.month = true;
    },
    handleDayConfirm (value) {
      this.dayValue = value
      this.day = false;
    },
    handleDayCancel () {
      this.day = false;
    },
    handleDayPopup () {
      this.day = true;
    },
    handleRefresh () {
      this.loading = false
      this.refreshing = false
    },
    handleLoad () {
      this.loading = false
      this.refreshing = false
    },
    fetchBalance ( queryCondition ) {
      this.billArr = Util.Bill.query( queryCondition )
    },
    countSum () {
      this.billArr.forEach((item, index) => {
        if (item.consumptionOrEntry === 1) {
          this.entrySum = this.entrySum + (+item.sumValue)
        } else {
          this.consumptionSum = this.consumptionSum + (+item.sumValue)
        }
      })
    },
    handleDelete (bill) {
      this.isCancel = true
      this.removeBill = bill
    },
    handleDeleteTrue () {
      Util.Bill.remove(this.removeBill)
      this.fetchBalance()
      if (this.removeBill.consumptionOrEntry === 0) {
        this.consumptionSum = this.consumptionSum - (+this.removeBill.sumValue)
      } else {
        this.entrySum = this.entrySum - (+this.removeBill.sumValue)
      }
      this.isCancel = false
    },
    handleFilterBill () {
      const queryCondition = {
        yearValue: this.yearValue,
        monthValue: this.monthValue,
        dayValue: this.dayValue,
        checkValueArr: this.checkValueArr,
      }
      this.fetchBalance( queryCondition )
      this.countSum()
      this.filterPopup = false
    },
    handleResetFilter () {
      this.yearValue = '';
      this.monthValue = '';
      this.dayValue = '';
      this.checkValueArr = '';
      this.arr = [];
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.bill-box {
  position: relative;
  display: block;
  height: 100%;
  font-size: j(12);
}

.bill-content {
  height: 100%;
  overflow-y: auto;
}

.header-title {
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
  align-items: center;
}

.bill-item {
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
  padding-bottom: j(10);
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
  background: url("@/assets/images/consumption.png") center center no-repeat;
}

.bill-prompt-wrap {
  height: j(40);
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    width: j(12);
    margin: 0 j(4);
  }
}

.bill-prompt {
  padding-top: j(10);
  font-size: j(16);
  text-align: center;

  p {
    top: j(3);
    color: #58B7FF;
    font-size: j(12);
    text-align: center;
  }
}

.bill-sum {
  line-height: j(35);
  font-weight: bold;
}

.bill-sum-entry {
  color: #F7BA2A;
}

.bill-sum-consumption {
  color: #FF4949;
}

.bill-sum-balance {
  color: #13CE66;
}

.bill-reduce {
  height: j(2);
  margin-top: j(22);
  background-color: #58B7FF;
}

.bill-equal {
  height: j(6);
  margin-top: j(18);
  border-bottom: j(2) solid #58B7FF;
  border-top: j(2) solid #58B7FF;
}

.bill-cancel-popup {
  width: 80%;
  height: 15%;
  max-width: j(300);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bill-cancel {
  align-self: center;
  margin: j(20) auto;
}

.bill-cancel-true {
  width: 100%;
  height: 100%;
  background-color: #F9FAFC;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: j(20);
  color: #58B7FF;
}
.input-warp {
  height: auto !important;
  margin-bottom: j(20);
  border-bottom: 1px solid #ccc;
}
.input-item {
   span {
      position: absolute;
      right: 0;
    }
}
.menu-btn-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  button {
    width: 50%;
    height: j(40);
    line-height: j(40);
    font-size: j(14);
    border: none;
    color: #fff;
    &:first-child {
      background-color: #58B7FF;
    }
    &:last-child {
      background-color: #ccc;
    }
  }
}
.filter-menu {
  border-left: 1px solid #ccc;
  padding: 0 j(10);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 80%;
  height: 100%;
  background-color: #fff;
}
.input-warp {
  height: 100%;
}
.img-icon {
  height: 20px;
}
.van-cell {
  background: transparent;
}
.menu-type-wrap {
  padding: j(10);
}
.checkbox-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.check-list {
  width: j(50);
  height: j(50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.checkbox-item {
  display: flex;
  flex-direction: column;
}
</style>
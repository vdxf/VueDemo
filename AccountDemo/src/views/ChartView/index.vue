<template>
  <div class="container-view">
    <van-pull-refresh v-model="refreshing" @refresh="handleRefresh" class="content">
      <van-list v-model="loading" @load="handleLoad">
        <van-cell>
          <template>
            <div class="header-title">分析:</div>
            <div class="chart-con">
              <div class="chart-item">
                <h2 class="chart-title">消费状况：</h2>
                <canvas id="consumption-chart" width="400" height="400"></canvas>
              </div>
              <div class="chart-item">
                <h2 class="chart-title">入账状况：</h2>
                <canvas id="entry-chart" width="400" height="400"></canvas>
              </div>
            </div>
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Chart from '@/assets/lib/Chart'
import Util from "@/assets/lib/Util";

export default {
  data() {
    return {
      consumptionChartArr: [0, 0, 0, 0, 0, 0, 0, 0],
      entryChartArr: [0, 0, 0],
      loading: false,
      refreshing: false,
    }
  },
  created() {
    this.fetchBillData()
    this.$nextTick(() => {
      const consumptionData = {
        labels: [
          "水果零食",
          "餐饮伙食",
          "出行旅游",
          "网上购物",
          "生活日常",
          "租房水电",
          "医疗药物",
          "其它消费",
        ],
        datasets: [{
          data: this.consumptionChartArr,
          backgroundColor: [
            "#999933",
            "#FF9933",
            "#FF6666",
            "#36A2EB",
            "#666699",
            "#CCFF00",
            "#66CCCC",
            "#663366"
          ]
        }]
      }

      const entryData = {
        labels: [
          "基本工资",
          "公司福利",
          "其它入账"
        ],
        datasets: [{
          data: this.entryChartArr,
          backgroundColor: [
            "#13CE66",
            "#F7BA2A",
            "#FF4949"
          ]
        }]
      }

      let consumptionContext = document.getElementById('consumption-chart').getContext('2d')
      let entryContext = document.getElementById('entry-chart').getContext('2d')
      new Chart(consumptionContext, {
        type: 'pie',
        data: consumptionData,
      })
      new Chart(entryContext, {
        type: 'pie',
        data: entryData,
      })
    })
  },
  methods: {
    handleRefresh() {
      this.loading = false
      this.refreshing = false
    },
    handleLoad() {
      this.loading = false
      this.refreshing = false
    },
    fetchBillData() {
      let billArr = Util.Bill.query();
      billArr.forEach( ( item, index ) => {
        if (item.accountType === '水果零食') {
          this.consumptionChartArr[0] = this.consumptionChartArr[0] + (+item.sumValue);
        } else if (item.accountType === '餐饮伙食')
          this.consumptionChartArr[1] = this.consumptionChartArr[1] + (+item.sumValue);
        else if (item.accountType === '出行旅游')
          this.consumptionChartArr[2] = this.consumptionChartArr[2] + (+item.sumValue);
        else if (item.accountType === '网上购物')
          this.consumptionChartArr[3] = this.consumptionChartArr[3] + (+item.sumValue);
        else if (item.accountType === '生活日常')
          this.consumptionChartArr[4] = this.consumptionChartArr[4] + (+item.sumValue);
        else if (item.accountType === '租房水电')
          this.consumptionChartArr[5] = this.consumptionChartArr[5] + (+item.sumValue);
        else if (item.accountType === '医疗药物')
          this.consumptionChartArr[6] = this.consumptionChartArr[6] + (+item.sumValue);
        else if (item.accountType === '其它消费')
          this.consumptionChartArr[7] = this.consumptionChartArr[7] + (+item.sumValue);
        else if (item.accountType === '基本工资')
          this.entryChartArr[0] = this.entryChartArr[0] + (+item.sumValue);
        else if (item.accountType === '公司福利')
          this.entryChartArr[1] = this.entryChartArr[1] + (+item.sumValue);
        else if (item.accountType === '其它入账')
          this.entryChartArr[2] = this.entryChartArr[2] + (+item.sumValue);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.chart-item {
  padding: j(10);
}

.chart-title {
  color: #58B7FF;
  font-size: j(14);
}

.content {
  flex: 1;
  overflow-y: auto;
}
</style>
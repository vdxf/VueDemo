<template>
  <div class="home-view">
    <div class="home-nav">
      <div class="nav-info">
        <span>{商户名称}</span>
        <p>业务员名称</p>
        <div class="exit">
          <i></i>
          退出
        </div>
      </div>
      <div class="nav-search">
        <div class="search-form">
          <van-search
            v-model="keyword"
            show-action
            placeholder="请输入搜索关键词"
            @search="handleSearch"
            @cancel="handleCancel"
          />
        </div>
      </div>
    </div>

    <van-pull-refresh v-model="refreshing" @refresh="handleRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="handleLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'

const keyword = ref('')
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const reqDataList = (current) {
  doTabuLation({
    cu
  })
}
const handleSearch = (val: any) => showToast(val)
const handleCancel = () => showToast('取消')
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.home-view {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  position: relative;
  padding-bottom: j(50);
  background-color: #fafafa;
}
.home-nav {
  background-color: #eb1e23;
  position: relative;
}
.nav-info {
  display: flex;
  align-items: center;
  padding: 0 j(12);
  box-sizing: border-box;
  padding-bottom: j(10);
  span {
    height: j(24);
    font-size: j(18);
    font-weight: 500;
    color: #fff;
    line-height: j(24);
    margin-right: j(5);
  }
  p {
    flex: 1;
    height: j(20);
    font-size: j(15);
    font-weight: 500;
    color: #fff;
    line-height: j(20);
  }
}
.exit {
  display: flex;
  align-items: center;
  height: j(20);
  font-size: j(14);
  color: #ffffff;
  line-height: j(20);
  padding-left: j(3);
  i {
    display: block;
    width: j(16);
    height: j(16);
    background: url(@/assets/images/exit.png) left center no-repeat;
    background-size: j(16) j(16);
  }
}
.nav-search {
  height: j(60);
  background: rgba(255, 255, 255, 1);
  border-radius: j(20) j(20) 0 0;
  padding: j(12);
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.search-form {
  flex: 1;
  height: j(36);
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: j(8);
  display: flex;
  align-items: center;
  .van-search {
    flex: 1;
    background: transparent;
    padding: 0 !important;
    .van-search__action {
      height: j(24);
      line-height: j(24);
      font-size: j(12);
      border-radius: j(4);
      background-color: red;
      color: #fff;
      margin-right: j(10);
    }
  }
}
</style>

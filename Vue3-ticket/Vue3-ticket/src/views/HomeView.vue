<template>
  <div class="home-view">
    <div class="home-nav">
      <div class="nav-info">
        <span>{商户名称}</span>
        <p>业务员名称</p>
        <div class="exit" @click="handleExit">
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
          >
            <template #action>
              <div class="search-button" @click="handleSearch">搜索</div>
            </template>
          </van-search>
        </div>
      </div>
    </div>

    <van-pull-refresh class="content" v-model="refreshing" @refresh="handleRefresh" ref="view">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad"
      >
        <van-cell v-for="item in list" :key="item.id" @click="handleImageDetail(item.id)">
          <div class="image-detail">
            <vs-image :src="item.file.filepath" wr="200" alt="img" />
            <div class="detail-content">
              <span>{{ item.title }}</span>
              <span>{{ item.updatedAt }}</span>
              <span>{{ item.description }}</span>
            </div>
          </div>
          <div class="image-button-group">
            <button v-preventReClick @click.stop="handleUpdataImage(item)">更新</button>
            <button @click.stop="handleDeleteImage(item.id)">删除</button>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, watch } from 'vue'
import { showConfirmDialog } from 'vant'
import { doDelete, doTabulation } from '@/api/index'
import VsImage from '@/components/VsImage.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const keyword = ref('')
const keyword1 = ref('')
const imageList = ref<any>([])
const list = ref(toRaw(imageList))
let current1 = 0
const loading = ref(false)
const finished = ref(false)
const error = ref(false)
const refreshing = ref(false)
const view = ref()
const reqDataList = (current: number) => {
  doTabulation({
    current: current,
    length: 10,
    keyword: keyword1.value
  })
    .then((result) => {
      const { list, count } = result
      imageList.value = current === 1 ? list : [...imageList.value, ...list]
      finished.value = imageList.value.length >= count
      current1 = current
    })
    .catch((error) => {
      console.log(error)
      error.value = true
    })
    .finally(() => {
      loading.value = false
      refreshing.value = false
      view.value.$el.scrollTop = 0
    })
}
const handleExit = () => {
  window.localStorage.removeItem('token')
  router.replace('/login')
}
const handleRefresh = () => {
  reqDataList(1)
}
const handleLoad = () => {
  reqDataList(current1 + 1)
}
const handleSearch = () => {
  keyword1.value = keyword.value
  handleRefresh()
}
const handleUpdataImage = (item: any) => {
  const data = toRaw(item)
  router.push({
    path: '/imagecreate',
    state: {
      data
    }
  })
}
const handleImageDetail = (id: any) => {
  router.push({
    path: '/imagedetail',
    state: { id }
  })
}
const handleDeleteImage = (id: any) => {
  showConfirmDialog({
    title: '温馨提示',
    message: '确认要删除吗'
  })
    .then(() => {
      doDelete(id)
        .then(() => {
          reqDataList(1)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch(() => {
      // on cancel
    })
}
watch(keyword, (nv) => {
  keyword1.value = nv
  handleRefresh()
})
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
.content {
  flex: 1;
  overflow-y: auto;
}
.image-detail {
  display: flex;
  align-items: center;

  img {
    display: block;
    width: j(100);
    height: j(100);
    margin-right: j(10);
  }
}

.detail-content {
  display: flex;
  flex-direction: column;
  flex: 1;

  span {
    font-size: j(16);
    line-height: j(32);
    text-align: right;
    margin-bottom: j(10);
  }
}

.image-button-group {
  display: flex;
  margin-top: j(20);

  button {
    width: j(40);
    border: none;
    background-color: rgba(150, 250, 250, 0.99);
    border-radius: j(8);
    flex: 1;
  }

  button:last-child {
    margin-left: j(10);
  }
}
.van-list {
  margin-bottom: j(50);
}
.search-button {
  width: j(40);
  height: j(24);
  line-height: j(24);
  text-align: center;
  font-size: j(12);
  border-radius: j(4);
  background-color: red;
  color: #fff;
}
</style>

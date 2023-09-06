<template>
  <div class="home-view">
    <!-- 头部搜索 -->
    <div class="home-header">
      <router-link to="user">
        <vs-image :src="avatarUrl" wr="50" class="header-avatar" v-if="avatarUrl" />
        <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
      </router-link>
      <div class="search-form">
        <van-search
          v-model="keyword"
          placeholder="请输入搜索关键词"
          @focus="handleSearch"
          shape="round"
        >
        </van-search>
      </div>
    </div>
    <!-- 图片列表 -->
    <van-pull-refresh class="content" v-model="refreshing" @refresh="handleRefresh" ref="view">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad"
      >
        <div class="image-list">
          <van-cell
            v-for="item in list"
            :key="item.id"
            @click="handleImageDetail(item.id)"
            class="image-item"
          >
            <vs-image :src="item.file.filepath" wr="200" alt="img" v-if="item.file.filepath" />
            <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
            <div class="detail-content">
              <span>{{ item.description }}</span>
              <span><i></i>{{ item.user.nickname }}</span>
            </div>
          </van-cell>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, toRaw } from 'vue'
import { doTabulation } from '@/api/index'
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
const avatarUrl = ref()
onBeforeMount(() => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  avatarUrl.value = 'https://img.daysnap.cn/' + userInfo.avatar.filepath
})
//跳转图片详情
const handleImageDetail = (id: any) => {
  router.push({
    path: '/imagedetail',
    query: {
      id
    }
  })
}
//获取图片列表
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
    })
}
//下拉刷新
const handleRefresh = () => {
  reqDataList(1)
  view.value.$el.scrollTop = 0
}
//上拉加载
const handleLoad = () => {
  reqDataList(current1 + 1)
}
//搜索
const handleSearch = () => {
  router.push('search')
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding-top: j(10);
  padding-bottom: j(50);
}
.home-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: j(10);
}
.header-avatar {
  display: block;
  width: j(40);
  height: j(40);
  border-radius: 50%;
}
.search-form {
  flex: 1;
}
.content {
  margin-top: j(10);
  flex: 1;
  overflow-y: auto;
  background-color: #f1f1f1;
}
.image-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: j(40);
  position: relative;
}
.van-list_finished-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.image-item {
  width: 48%;
  margin: j(3);
  display: flex;
  flex-direction: column;
  padding: 0;
  img {
    display: block;
    width: 100%;
    height: j(100);
  }
}
.detail-content {
  height: j(70);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin: j(4);
  span {
    font-size: j(16);
    color: #000;
    &:first-child {
      white-space: pre-line;
      height: j(50);
      overflow: hidden;
    }
    &:last-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #ccc;
      font-size: j(12);
    }
  }
  i {
    display: block;
    width: j(16);
    height: j(16);
    background: url(@/assets/images/UP.svg);
    background-size: 100% 100%;
    margin-right: j(4);
  }
}
</style>

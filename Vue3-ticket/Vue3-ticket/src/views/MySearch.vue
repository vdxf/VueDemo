<template>
  <div class="mysearch-view">
    <van-search
      v-model="keyword"
      show-action
      placeholder="搜索"
      @search="handleSearch"
      shape="round"
    >
      <template #action>
        <div @click="handleSearch">搜索</div>
      </template>
    </van-search>

    <van-pull-refresh class="content" v-model="refreshing" @refresh="handleRefresh" ref="view">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad"
      >
        <van-cell v-for="item in list" :key="item.id">
          <div class="image-detail">
            <vs-image :src="item.file.filepath" alt="img" />
            <div class="detail-content">
              <span>标题：{{ item.title }}</span>
              <span>详情：{{ item.description }}</span>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue'
import { doTabulation } from '@/api/index'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
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
const authorId = ref()
const id = ref()

onBeforeMount(() => {
  authorId.value = route.query.id
  if (authorId.value) {
    id.value = authorId.value
  } else {
    id.value = window.localStorage.getItem('userId')
  }
})
const reqDataList = (current: number) => {
  doTabulation({
    current: current,
    length: 10,
    keyword: keyword1.value,
    userId: id.value
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
const handleRefresh = () => {
  reqDataList(1)
  view.value.$el.scrollTop = 0
}
const handleLoad = () => {
  reqDataList(current1 + 1)
}
const handleSearch = () => {
  keyword1.value = keyword.value
  handleRefresh()
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.mysearch-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.image-detail {
  display: flex;
  flex-direction: column;
  img {
    display: block;
    width: 100%;
    height: j(200);
  }
}

.detail-content {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>

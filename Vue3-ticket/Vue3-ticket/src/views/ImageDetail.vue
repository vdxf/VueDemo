<template>
  <div class="c-view">
    <div class="c-card">
      <div class="detail-group" v-if="detailList">
        <p>图片标题：{{ detailList.title }}</p>
        <p>类型：{{ detailList.type }}</p>
        <p>描述：{{ detailList.description }}</p>
        <p>粉丝数：{{ detailList.likeCount }}</p>
        <p>图片宽高：{{ file.width }} * {{ file.height }}</p>
        <p>图片主题颜色：{{ file.color }}</p>
        <p>创建时间：{{ detailList.createdAt }}</p>
        <p>更新时间：{{ detailList.updatedAt }}</p>
        <p>图片ID：{{ detailList.id }}</p>
        <p>图片大小： {{ file.size }} kb</p>
      </div>
      <van-loading size="24px" v-else>加载中...</van-loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { doDetail } from '@/api'

let id = ''
const detailList = ref<any>('')
const file = ref<any>('')
onMounted(() => {
  id = window.history.state.id
  console.log(id)
  doDetail(id)
    .then((result) => {
      detailList.value = result
      file.value = result.file
    })
    .catch((error) => {
      //
    })
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.c-view {
  padding: j(20) 0;
}

.detail-group {
  p {
    margin: j(10) 0;
  }
}
</style>

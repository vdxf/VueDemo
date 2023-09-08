<template>
  <div>
    <van-nav-bar title="我的好友" left-arrow @click-left="handleBack" />
    <van-tabs v-model:active="activeName" class="title-group" routes>
      <van-tab
        title="关注"
        name="/followfans/follow"
        replace
        :to="{ path: '/followfans/follow', query: { id: id } }"
      ></van-tab>
      <van-tab
        title="粉丝"
        name="/followfans/fans"
        replace
        :to="{ path: '/followfans/fans', query: { id: id } }"
      ></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeName = ref()
const id = ref()
const handleBack = () => {
  router.go(-1)
}
onBeforeMount(() => {
  id.value = route.query.id
  activeName.value = route.path
})
</script>
<style scoped lang="scss"></style>

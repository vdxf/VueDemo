<template>
  <div class="edit-view">
    <van-nav-bar title="账号资料" left-arrow @click-left="handleBack" class="edit-header" />
    <div class="edit-content">
      <label>
        <van-cell title="头像" is-link value="内容" />
        <input type="file" @change="handleFiles" />
      </label>
      <van-cell title="昵称" is-link value="内容" />
      <van-cell title="性别" is-link value="内容" />
      <van-cell title="出生年月" is-link value="内容" />
      <van-cell title="个性签名" is-link value="内容" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { doFile } from '@/api'

const fileId = ref<any>('')
const files = ref('')
const imgUrl = ref('')

//返回
const handleBack = () => {
  router.go(-1)
}
//选择头像
const handleFiles = (event: any) => {
  files.value = event.target.files
  let formData = new FormData()
  formData.append('file', files.value[0])

  doFile(formData)
    .then((result) => {
      fileId.value = result.id
      imgUrl.value = 'https://img.daysnap.cn/' + result.filepath
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.edit-view {
  height: 100vh;
  background-color: #f1f1f1;
}
.edit-header {
  box-shadow: -2px 2px 2px #ccc;
}
.edit-content {
  margin-top: j(20);
  input {
    display: none;
  }
}
</style>

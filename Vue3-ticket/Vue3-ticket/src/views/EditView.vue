<template>
  <div class="edit-view">
    <van-nav-bar title="账号资料" left-arrow @click-left="handleBack" class="edit-header" />
    <div class="edit-content">
      <label>
        <van-cell title="头像" is-link>
          <template #right-icon>
            <vs-image :src="avatarUrl" wr="50" class="avatar-info" />
          </template>
        </van-cell>
        <input type="file" @change="handleFiles" />
      </label>
      <van-cell title="昵称" is-link :value="nickname" />
      <van-cell title="性别" is-link :value="sex" />
      <van-cell title="个性签名" is-link :value="signature" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import router from '@/router'
import { doFile, doUpdateUserInformation, doUserDetails } from '@/api'

const fileId = ref<any>('')
const files = ref('')
const sex = ref()
const nickname = ref()
const signature = ref('')
const newnickname = ref('')
const newsignature = ref('')
const avatarUrl = ref()
const userInfo = ref()
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
      avatarUrl.value = 'https://img.daysnap.cn/' + result.filepath
      updata()
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
//更新用户信息
const updata = () => {
  doUpdateUserInformation({
    nickname: newnickname.value,
    signature: newsignature.value,
    sex: sex.value,
    avatarId: fileId.value
  })
    .then((result) => {
      const id = window.localStorage.getItem('userId')
      doUserDetails(id)
        .then((result) => {
          window.localStorage.setItem('userInfo', JSON.stringify(result))
        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      console.log(error)
    })
}
onBeforeMount(() => {
  userInfo.value = JSON.parse(window.localStorage.getItem('userInfo'))
  avatarUrl.value = 'https://img.daysnap.cn/' + userInfo.value.avatar.filepath
  nickname.value = userInfo.value.nickname
  signature.value = userInfo.value.signature || '个性签名'
  sex.value = userInfo.value.sex
})
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
.avatar-info {
  display: block;
  width: j(50);
  height: j(50);
  border-radius: 50%;
}
</style>

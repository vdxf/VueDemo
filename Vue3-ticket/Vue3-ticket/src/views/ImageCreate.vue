<template>
  <div class="c-view-wrap">
    <div class="c-card">
      <div class="section-content">
        <label class="choose-image">
          <vs-image :src="imgUrl" alt="img" v-if="imgUrl" />
          <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
          <input type="file" @change="handleFiles" style="opacity: 0" />
        </label>
        <div class="image-title">
          <input type="text" placeholder="请输入图片的标题" v-model="title" />
        </div>
        <div class="image-button-group">
          <label>
            <input
              type="radio"
              id="public"
              name="image"
              value="public"
              v-model="type"
              @change="handleType"
            />public
          </label>
          <label>
            <input
              type="radio"
              id="private"
              name="image"
              value="private"
              v-model="type"
              @change="handleType"
            />private
          </label>
        </div>
        <textarea
          class="picture-detail"
          style="resize: none"
          rows="4"
          placeholder=" 图片详细信息"
          v-model="description"
        >
        </textarea>
        <button type="submit" class="c-button" @click="handleUploadImage">提交</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { doFile, doGain, doUpdata } from '@/api'
import { reactive } from 'vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const title = ref<any>('')
const description = ref('')
const type = ref('')
const fileId = ref('')
const files = ref('')
const imgUrl = ref('')
const isLoading = ref(false)

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
const handleType = () => {}
const handleUploadImage = () => {
  if (window.history.state.data) {
    doUpdata({
      title: title.value,
      description: description.value,
      fileId: fileId.value,
      type: type.value,
      id: window.history.state.data.id
    })
      .then((result) => {
        router.replace('/home')
      })
      .catch((error) => {
        alert(error.data.msg)
      })
  } else {
    doGain({
      title: title.value,
      description: description.value,
      fileId: fileId.value,
      type: type.value
    })
      .then((result) => {
        router.replace('/home')
      })
      .catch((error) => {
        alert(error.data.msg)
      })
  }
}
onMounted(() => {
  if (window.history.state.data) {
    let datas = window.history.state.data
    title.value = datas.title
    description.value = datas.description
    type.value = datas.type
    fileId.value = datas.file.id
    imgUrl.value = 'https://img.daysnap.cn/' + datas.file.filepath
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.c-card {
  padding-bottom: j(80);
}

.section-content {
  display: flex;
  flex-direction: column;
}

.choose-image {
  img {
    display: block;
    width: j(160);
    height: j(160);
  }

  input {
    margin-top: j(10);
  }
}

.image-title {
  padding: j(10);
  border: 1px solid #000000;
  margin-top: j(20);
  margin-bottom: j(20);
  border-radius: j(4);
  display: flex;

  input {
    flex: 1;
    outline: none;
  }
}

.image-button-group {
  display: flex;
  align-items: center;
  height: j(40);
  flex-direction: row;
  margin-bottom: j(20);

  input {
    background-color: transparent;
  }
}

.picture-detail {
  border: 1px solid #333;
  border-radius: j(8);
  outline: none;
  margin-bottom: j(20);
}
</style>

<template>
  <div class="section-content">
    <i @click.stop="handleColse"></i>
    <label class="choose-image">
      <p>请选择要上传的图片：</p>
      <vs-image :src="imgUrl" alt="img" v-if="imgUrl" />
      <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
      <input type="file" @change="handleFiles" style="opacity: 0" />
    </label>
    <div class="image-title">
      <p>请填写图片的标题：</p>
      <input type="text" placeholder="请输入图片的标题" v-model="title" />
    </div>
    <div class="image-button-group">
      <p>请选择图片上传类型：</p>
      <div class="image-type">
        <label>
          <input
            type="radio"
            id="public"
            name="image"
            value="public"
            v-model="type"
            @change="handleType"
          />公开的
        </label>
        <label>
          <input
            type="radio"
            id="private"
            name="image"
            value="private"
            v-model="type"
            @change="handleType"
          />私密的
        </label>
      </div>
    </div>
    <div class="image-descraption">
      <p>请填写对图片的描述：</p>
      <textarea
        class="picture-detail"
        style="resize: none"
        rows="6"
        placeholder=" 图片详细信息"
        v-model="description"
      >
      </textarea>
    </div>
    <button type="submit" class="c-button" @click="handleUploadImage">提交</button>
  </div>
</template>
<script setup lang="ts">
import { doFile, doGain, doUpdata } from '@/api'
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const title = ref<any>('')
const description = ref<any>('')
const type = ref<any>('')
const fileId = ref<any>('')
const files = ref('')
const imgUrl = ref('')
const handleColse = () => {
  router.go(-1)
}
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
  if (route.query.id) {
    doUpdata({
      title: title.value,
      description: description.value,
      fileId: fileId.value,
      type: type.value,
      id: route.query.id
    })
      .then((result) => {
        console.log(result)
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
        console.log(result)
        router.replace('/home')
      })
      .catch((error) => {
        alert(error.data.msg)
      })
  }
}

const route = useRoute()
onBeforeMount(() => {
  if (route.query.id) {
    let datas = route.query
    title.value = datas.title
    description.value = datas.description
    type.value = datas.type
    fileId.value = datas.fileId
    imgUrl.value = 'https://img.daysnap.cn/' + datas.imgUrl
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.section-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  color: #fff;
  position: relative;
  i {
    position: fixed;
    top: j(20);
    left: j(20);
    display: block;
    width: j(15);
    height: j(15);
    background: url(@/assets/images/colse.svg) center center no-repeat;
    background-size: auto;
  }
}

.choose-image {
  margin-top: j(50);
  padding: j(10);
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    color: #fff;
    font-size: j(14);
    white-space: nowrap;
  }
  img {
    margin-left: j(30);
    display: block;
    width: 100%;
    height: 100%;
  }
}

.image-title {
  margin: j(10);
  display: flex;
  flex-direction: column;
  margin-top: j(20);
  p {
    font-size: j(14);
    color: #fff;
    padding-bottom: j(20);
  }
  input {
    padding: j(10);
    flex: 1;
    outline: none;
    background-color: #fff;
    color: #000000;
    border-radius: j(6);
  }
}

.image-button-group {
  display: flex;
  flex-direction: column;
  margin: j(10);
  p {
    font-size: j(14);
  }
}
.image-type {
  margin-top: j(20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    padding-bottom: j(10);
  }
}
.image-descraption {
  display: flex;
  flex-direction: column;
  margin: j(10);
  p {
    font-size: j(14);
  }
}
.picture-detail {
  margin: j(20) 0;
  border-radius: j(8);
  outline: none;
  color: #000;
  font-size: j(14);
}
</style>

<template>
  <div class="homepage-view">
    <div class="header-content">
      <img src="@/assets/images/desktop_4.jpg" alt="img" />
      <div class="back" @click="handleBack">&lt;</div>
      <div class="search"><i></i></div>
      <van-cell @click="showShare = true" class="share" />
      <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
      <div></div>
    </div>
    <div class="homepage-content">
      <div class="info-header">
        <img src="@/assets/images/desktop_6.jpg" alt="img" class="info-header-image" />
        <div class="info-header-content">
          <div class="info-header-item">
            <div class="fans">
              <span>{{ fans }}</span>
              <p>粉丝</p>
            </div>
            <div class="follow">
              <span>{{ follow }}</span>
              <p>关注</p>
            </div>
            <div class="like">
              <span>{{ like }}</span>
              <p>获赞</p>
            </div>
          </div>
          <button @click="handleEdit">编辑资料</button>
        </div>
      </div>
      <div class="info-nickname">
        <p>{{ nickname }}</p>
      </div>
      <div class="info-signature">
        <p>{{ signature }}</p>
        <span>详情</span>
      </div>
      <van-tabs v-model:active="active" class="title-group">
        <van-tab title="主页">主页</van-tab>
        <van-tab title="动态">动态</van-tab>
        <van-tab title="收藏">收藏</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { doUserDetails } from '@/api'
import router from '@/router'
import { showToast } from 'vant'
import { onBeforeMount } from 'vue'
import { ref } from 'vue'

const fans = ref('-')
const follow = ref('-')
const like = ref('-')
const nickname = ref('昵称')
const signature = ref('')

const active = ref(0)
onBeforeMount(() => {
  const id = window.localStorage.getItem('userId')
  doUserDetails(id)
    .then((result) => {
      const arr = result
      fans.value = arr.followerCount
      follow.value = arr.followingCount
      nickname.value = arr.nickname
      signature.value = arr.signature || '个性签名'
    })
    .catch((error) => {
      console.log(error)
    })
})
//编辑资料
const handleEdit = () => {
  router.push('edit')
}
//返回
const handleBack = () => {
  router.go(-1)
}
const showShare = ref(false)
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' }
]

const onSelect = (option: any) => {
  showToast(option.name)
  showShare.value = false
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/define.scss';
.homepage-view {
  background-color: #f1f1f1;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: j(200);
}
.header-content {
  position: relative;
  img {
    display: block;
    width: 100vh;
    height: j(150);
  }
}
.back,
.search,
.share {
  position: fixed;
  top: j(40);
  width: j(30);
  height: j(30);
  background-color: #000;
  color: #fff;
  font-size: j(30);
  text-align: center;
  opacity: 0.3;
  border-radius: 50%;
}
.back {
  left: j(10);
}
.search {
  right: j(50);
  i {
    display: block;
    width: 100%;
    height: 100%;
    background: url(@/assets/images/search.svg) center center no-repeat;
    background-size: j(25) j(25);
  }
}
.share {
  right: j(10);
  background: url(@/assets/images/more.svg) center center no-repeat;
  background-color: #000;
  background-size: j(25) j(25);
}
.homepage-content {
  background-color: #fff;
}
.info-header {
  padding: j(10);
  display: flex;
  img {
    display: block;
    width: j(100);
    height: j(100);
    border-radius: 50%;
    margin-top: j(-20);
  }
}
.info-header-content {
  margin-left: j(50);
  width: 100%;
  display: flex;
  flex-direction: column;
  button {
    margin-top: j(10);
    flex: 1;
    width: 100%;
    border: #ff80af 1px solid;
    background-color: #fff;
    color: #ff80af;
    font-size: j(14);
  }
}
.info-header-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
}
.fans,
.follow,
.like {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-bottom: j(6);
  }
  p {
    color: #ccc;
  }
}
.follow {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 0 j(30);
}
.info-nickname {
  margin: j(10);
  p {
    font-size: j(20);
    color: #666;
  }
}
.info-signature {
  margin: j(10);
  display: flex;
  justify-content: space-between;
  p {
    font-size: j(12);
    color: #aaa;
  }
  span {
    color: #5078cf;
  }
}
.title-group {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: j(20);
  color: #999;
  border-top: 1px solid #f1f1f1;
}
</style>

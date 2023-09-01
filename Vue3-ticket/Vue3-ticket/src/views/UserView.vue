<template>
  <div class="c-view">
    <div class="login-view" v-if="isToken">
      <img src="@/assets/images/imageUpload.jpg" alt="img" />
      <span>点击登录</span>
      <i>></i>
    </div>
    <div class="user-avatar" v-else>
      <vs-image :src="avatarUrl" wr="50" alt="img" v-if="avatarUrl" class="avatar-info" />
      <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
    </div>
    <div class="user-info">
      <div class="user-trend">
        <span>{{ trend }}</span>
        <p>动态</p>
      </div>
      <div class="user-follow">
        <span>{{ follow }}</span>
        <p>关注</p>
      </div>
      <div class="user-fans">
        <span>{{ fans }}</span>
        <p>粉丝</p>
      </div>
    </div>
    <div class="header-content">
      <button @click="handleCollectList">我的收藏</button>
      <button @click="handleUpdateUserInformation">更新用户信息</button>
      <button @click="handleUserList">用户列表</button>
      <button @click="handleUpdatePassword">修改密码</button>
      <button @click="handleResetPassword">重置密码</button>
    </div>

    <!--      我的收藏-->
    <van-pull-refresh
      class="popup-view"
      v-show="isCollectList"
      v-model="refreshing"
      @refresh="handleRefresh"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad"
      >
        <span>收藏数：{{ collectCount }}</span>
        <van-cell v-for="item in collectList" :key="item.id">
          <vs-image :src="item.picture.file.filepath" wr="300" alt="img" />
        </van-cell>
      </van-list>
      <div @click.stop="isCollectList = false" class="colse-collect">关闭</div>
    </van-pull-refresh>

    <!--      更新用户信息-->
    <div class="popup-view" v-show="isInformation" @click="isInformation = false">
      <div class="content" @click.stop="$emit('null')">
        <h1>更新用户信息</h1>
        <label class="choose-image">
          <p>选择头像:</p>
          <vs-image :src="imgUrl" alt="img" v-if="imgUrl" />
          <img src="@/assets/images/imageUpload.jpg" alt="img" v-else />
          <input type="file" @change="handleAvatarId" style="opacity: 0" />
        </label>
        <div class="item">
          <input type="text" v-model="nickname" placeholder="请输入昵称" />
        </div>
        <div class="item">
          <input type="text" v-model="signature" placeholder="请输入个性签名" />
        </div>
        <div class="item">
          <input type="number" v-model="sex" placeholder="请选择性别：1：男性  2：女性  3：其他 " />
        </div>
        <div class="c-button" @click="handleUpdateUser">提交</div>
      </div>
    </div>

    <!--      用户列表-->
    <div class="popup-view" v-show="isUserList" @click="isUserList = false">
      <div class="content" @click.stop="$emit('null')">
        <ul class="userlist">
          <li v-for="(item, index) in UserListInfo" :key="index" class="user-item">
            <p>用户{{ index + 1 }}： {{ item.nickname }}</p>
            <button @click="handleUserDetails(item.id)">用户详情</button>
          </li>
        </ul>
      </div>
    </div>

    <!--        用户详情-->
    <div class="popup-view" v-show="isUserDetails" @click="isUserDetails = false">
      <div class="content" @click.stop="$emit('null')">
        <div class="userlist">
          <p>用户名：{{ UserDetail.nickname }}</p>
          <p>性别：{{ UserDetail.sex }}</p>
          <p>个性签名：{{ UserDetail.signature }}</p>
          <p>邮箱：{{ UserDetail.email }}</p>
          <p>用户ID：{{ UserDetail.id }}</p>
          <p>用户创建时间：{{ UserDetail.createdAt }}</p>
          <p>用户最近上线时间：{{ UserDetail.updatedAt }}</p>
        </div>
      </div>
    </div>

    <!--        修改密码-->
    <div class="popup-view" v-show="isUpdatePassword" @click="isUpdatePassword = false">
      <div class="update-password" @click.stop="$emit('null')">
        <label>老密码：<input type="text" v-model="oldPassword" /></label>
        <label>新密码：<input type="text" v-model="password" /></label>
        <button @click.stop="handleUpdate">提交</button>
      </div>
    </div>

    <!--        重置密码-->
    <div class="popup-view" v-show="isResetPassword" @click="isResetPassword = false">
      <div class="reset-password" @click.stop="$emit('null')">
        <label>邮箱：<input type="email" v-model="email" /></label>
        <div class="captcha">
          邮箱验证码：<input type="text" v-model.trim="captcha" required maxlength="6" />
          <button @click="handleCode">发送验证码</button>
        </div>
        <label>密码：<input type="text" v-model="resetPassword" /></label>
        <button @click.stop="handleReset">提交</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  doCollectList,
  doEmailSend,
  doFile,
  doResetPassword,
  doUpdatePassword,
  doUpdateUserInformation,
  doUserList,
  doUserDetails
} from '@/api'
import { onBeforeMount, ref, toRaw } from 'vue'

const trend = ref('-')
const follow = ref('-')
const fans = ref('-')
const isToken = ref(false)
const nickname = ref('')
const signature = ref('')
const sex = ref<string>('')
const avatarId = ref('')
const imgUrl = ref('')
const avatarUrl = ref('')
const files = ref('')
const collectCount = ref()
const collectList = ref<any>('')
const collectInfo = ref<any>('')
const UserListInfo = ref<any>('')
const UserDetail = ref<any>('')
const oldPassword = ref('')
const password = ref('')
const email = ref('2532499815@qq.com')
const captcha = ref('')
const resetPassword = ref('')
const isCollectList = ref(false)
const isInformation = ref(false)
const isUserList = ref(false)
const isUpdatePassword = ref(false)
const isResetPassword = ref(false)
const isUserDetails = ref(false)
const refreshing = ref(false)
const loading = ref(false)
const finished = ref(false)
const error = ref(false)
let current1 = 0
// 我的收藏
const handleCollectList = () => {
  isCollectList.value = true
  handleRefresh()
}
const handleRefresh = () => {
  reqDataList(1)
}
const handleLoad = () => {
  reqDataList(current1 + 1)
}
const reqDataList = (current: number) => {
  doCollectList({
    current: current,
    length: 10
  })
    .then((result) => {
      const { list, count } = result
      collectCount.value = count
      collectList.value = current === 1 ? list : [...collectList.value, ...list]
      finished.value = collectList.value.length >= count
      collectInfo.value = toRaw(collectList.value)[0].user
      avatarUrl.value = 'https://img.daysnap.cn/' + collectInfo.value.avatar.filepath
    })
    .catch((error) => {
      error.value = true
      alert(error.data.msg)
    })
    .finally(() => {
      loading.value = false
      refreshing.value = false
    })
}
//更新用户信息
const handleUpdateUserInformation = () => {
  isInformation.value = true
}
//选择头像
const handleAvatarId = (event: any) => {
  files.value = event.target.files
  let formData = new FormData()
  formData.append('file', files.value[0])
  doFile(formData)
    .then((result) => {
      avatarId.value = result.id
      imgUrl.value = 'https://img.daysnap.cn/' + result.filepath
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
//提交更新
const handleUpdateUser = () => {
  let sexStr = sex.value + ''
  doUpdateUserInformation({
    nickname: nickname.value,
    signature: signature.value,
    sex: sexStr,
    avatarId: avatarId.value
  })
    .then((result) => {
      isInformation.value = false
      avatarUrl.value = imgUrl.value
      reqDataList(1)
      console.log(result)
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
//用户列表
const handleUserList = () => {
  isUserList.value = true
  doUserList({
    current: 1,
    length: 10
  })
    .then((result) => {
      UserListInfo.value = result.list
      console.log('UserListInfo.value =>', UserListInfo.value)
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
// 用户详情
const handleUserDetails = (id: any) => {
  doUserDetails(id)
    .then((result) => {
      isUserDetails.value = true
      UserDetail.value = result
    })
    .catch((error) => {
      console.dir(error)
    })
}
// 修改密码
const handleUpdatePassword = () => {
  isUpdatePassword.value = true
}
const handleUpdate = () => {
  doUpdatePassword({ oldPassword: oldPassword.value, password: password.value })
    .then((result) => {
      console.log(result)
      isUpdatePassword.value = false
    })
    .catch((error) => {
      alert(error.response.data.msg)
    })
    .finally(() => {
      oldPassword.value = ''
      password.value = ''
    })
}
// 重置密码
const handleResetPassword = () => {
  isResetPassword.value = true
}
const handleCode = () => {
  doEmailSend({ email: email.value, type: 'reset-password' })
    .then((result) => {
      isResetPassword.value = false
      console.log(result)
    })
    .catch((error) => {
      console.dir(error)
    })
}
const handleReset = () => {
  doResetPassword({
    email: email.value,
    captcha: captcha.value,
    resetPassword: resetPassword.value
  })
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.dir(error)
    })
}
onBeforeMount(() => {
  reqDataList(1)
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.c-view {
  padding: j(40) j(10);
}
.user-avatar,
.login-view {
  height: j(50);
  display: flex;
  align-items: center;
  img,
  .avatar-info {
    display: block;
    width: j(50);
    height: j(50);
    border-radius: 50%;
    margin-right: j(10);
  }
  span {
    font-size: j(20);
    color: #333;
    flex: 1;
  }
  i {
    font-size: j(20);
    color: #ccc;
  }
}
.user-info {
  margin-top: j(10);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: j(50);
}
.user-trend,
.user-follow,
.user-fans {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: j(12);
    color: #333;
    margin-bottom: j(10);
  }
  p {
    font-size: j(14);
    color: #ccc;
  }
}
.user-follow {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 0 j(50);
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: j(10) 0;
    border: none;
    background-color: #156533;
    color: #fff;
  }
}

.popup-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: j(50);
  background-color: #ddd;
  padding: j(20);
  flex: 1;
  overflow-y: auto;
  span {
    font-size: j(14);
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: j(40) j(20);
  border-radius: j(8);

  h1 {
    font-size: j(20);
    color: #ccc;
    margin-bottom: j(40);
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    margin-left: j(20);
    margin-bottom: j(20);

    input {
      margin-left: j(20);
    }
  }
}
.van-button {
  margin-top: j(40);
}

.item {
  width: 100%;
  padding: j(10) j(4);
  border: 1px solid #5e5e5e;
  margin-bottom: j(20);
  border-radius: j(8);
  display: flex;

  input {
    flex: 1;
  }
}

.c-button {
  width: 80%;
}

.userlist {
  display: flex;
  flex-direction: column;
  p {
    margin: j(20) 0;
  }
}

.update-password,
.reset-password {
  margin: j(40) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: j(8);
  padding-bottom: j(40);

  label {
    margin: j(20) 0;
    border: 1px solid #ddd;
    padding: j(10);
    border-radius: j(8);
  }
}

.captcha {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  padding: j(10);
  border-radius: j(8);
  white-space: nowrap;
}

.nav-button-group {
  height: j(40);
  background-color: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .home-button:after {
    content: '';
    position: fixed;
    border-radius: 50%;
    width: j(48);
    height: j(48);
    background-color: #fff;
    right: j(166);
    bottom: j(18);
  }

  .user-button:before {
    content: '';
    position: fixed;
    border-radius: 50%;
    width: j(48);
    height: j(48);
    background-color: #fff;
    left: j(166);
    bottom: j(18);
  }

  button {
    width: 50%;
    height: 100%;
    border: none;
  }

  .active {
    background-color: blue;
    color: #fff;
    font-weight: 500;
  }

  .image-add {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: j(166);
    bottom: j(20);
    width: j(44);
    height: j(44);
    background-color: #eb1e23;
    box-shadow: 0 0 j(10) j(5) #0003;
    border-radius: 50%;
    color: #fff;
    font-size: j(14);
  }
}
.choose-image {
  width: 100%;
  display: flex;
  flex-direction: row;
  img {
    display: block;
    width: j(80);
    height: j(80);
    margin-left: j(20);
  }
}
.colse-collect {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: j(20);
  width: j(100);
  height: j(50);
  background-color: #fff;
  border-radius: j(10);
}
.user-avatar {
  display: block;
  width: j(50);
  height: j(50);
}
.user-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: j(20);
  }
}
.user-item {
  display: flex;
  flex-direction: row;
  button {
    margin-left: j(40);
    border: none;
    border-radius: j(2);
    background-color: #fff;
    color: #333;
  }
}
</style>

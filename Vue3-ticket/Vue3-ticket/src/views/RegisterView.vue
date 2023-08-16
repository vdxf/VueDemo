<template>
  <div class="password-change">
    <div class="c-card">
      <div class="form-box">
        <div class="form-item">
          昵称<input type="text" placeholder="请输入昵称" v-model.trim="nickname" required />
        </div>
        <div class="form-item">
          邮箱<input type="text" placeholder="请输入邮箱" v-model.trim="email" required />
        </div>
        <div class="form-item">
          密码<input
            :type="type"
            id="pwd"
            placeholder="请输入密码"
            v-model.trim="password"
            required
          />
          <i
            class="eye-icon"
            :class="[type === 'password' ? 'closed-eye' : 'open-eye']"
            @click="type = type === 'password' ? 'text' : 'password'"
          ></i>
        </div>
        <div class="form-item">
          邮箱验证码<input
            type="text"
            placeholder="请输入邮箱验证码"
            v-model.trim="captcha"
            required
            maxlength="6"
          />
          <button @click="handleCode" v-if="!sendCode">发送验证码</button>
          <van-count-down
            :time="time"
            format="ss"
            @finish="handleFinish"
            class="send-code"
            v-else
          />
        </div>
      </div>
      <button class="c-button" @click="handleRegister">注册</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { doEmailSend, doRegister } from '@/api/index'
import { useRouter } from 'vue-router'

const router = useRouter()
const nickname = ref('')
const type = ref('password')
const email = ref('2532499815@qq.com')
const password = ref('')
const captcha = ref('')
let sendCode = ref(false)
const time = ref(60 * 1000)

const handleCode = () => {
  sendCode.value = true
  doEmailSend({ email: email.value, type: 'register' })
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}
const handleRegister = () => {
  doRegister({
    nickname: nickname.value,
    email: email.value,
    password: password.value,
    captcha: captcha.value
  })
    .then((result) => {
      router.push('login')
      console.log(result)
    })
    .catch((error) => {
      alert(error.data.msg)
    })
}

const handleFinish = () => {
  sendCode.value = false
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/define.scss';

.password-change {
  padding-top: j(116);
  background-color: #fafafa;
}

.c-card {
  padding: j(20);
}

.form-box {
  display: flex;
  flex-direction: column;
}

.form-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: j(30);
  margin-top: j(34);
  font-size: j(12);
  color: #666666;
  border-bottom: 1px solid #f5f5f5;

  input {
    position: absolute;
    flex: 1;
    margin-left: j(80);
  }

  .eye-icon {
    display: block;
    width: j(16);
    height: j(16);
    position: absolute;
    right: j(16);
  }

  .closed-eye {
    background: url('@/assets/images/eyeclose.png') center center no-repeat;
    background-size: j(16) j(16);
  }

  .open-eye {
    background: url('@/assets/images/eyeopen.png') center center no-repeat;
    background-size: j(16) j(16);
  }

  button {
    position: absolute;
    top: auto;
    right: 0;
    background-color: red;
    color: #fafafa;
    border: none;
  }

  &:first-child {
    margin-top: 0;
  }
}
.send-code {
  position: absolute;
  top: auto;
  right: 0;
  background-color: #ffffff;
}

.c-button {
  background-color: #f58287;
  margin-top: j(28);
}
</style>

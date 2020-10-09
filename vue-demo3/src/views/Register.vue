<template>
  <div>
    <!-- 头部 -->
    <hm-header>注 册</hm-header>
    <!-- logo -->
    <hm-logo></hm-logo>
    <!-- 输入框 -->
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      placeholder="请输入用户名"
      :error-message="usernameErrMsg"
      @input="checkUsername"
    />
    <van-field
      v-model="nickname"
      required
      clearable
      label="昵 称"
      placeholder="请输入昵称"
      :error-message="nicknameErrMsg"
      @input="checkNickname"
    />
    <van-field
      v-model="password"
      required
      clearable
      label="密 码"
      placeholder="请输入密码"
      :error-message="passwrodErrMsg"
      @input="checkPassword"
    />
    <!-- button -->
    <hm-button @click.native="startRegister">注 册</hm-button>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'

export default {
  data() {
    return {
      username: '', //用户名
      nickname: '', //昵称
      password: '', //密码
      usernameErrMsg: '', //用户名效验
      nicknameErrMsg: '', //昵称效验
      passwrodErrMsg: '', //密码效验
    }
  },
  methods: {
    // 用户名效验
    checkUsername() {
      const reg = /^1\d{3,5}$/
      if (reg.test(this.username)) {
        this.usernameErrMsg = ''
      } else {
        this.usernameErrMsg = '用户名格式错误'
      }
      // 如果用户名为空，提示不显示
      if (!this.username) {
        this.usernameErrMsg = ''
      }
    },
    // 昵称效验
    checkNickname() {
      const reg = /^[\u4e00-\u9fa5]{3,7}$/
      if (reg.test(this.nickname)) {
        this.nicknameErrMsg = ''
      } else {
        this.nicknameErrMsg = '昵称格式错误'
      }
      // 如果昵称格式错误，提示不显示
      if (!this.nickname) {
        this.nicknameErrMsg = ''
      }
    },
    // 密码效验
    checkPassword() {
      const reg = /^\d{3,12}$/
      if (reg.test(this.password)) {
        this.passwrodErrMsg = ''
      } else {
        this.passwrodErrMsg = '密码格式错误'
      }
      // 如果密码为空，提示不显示
      if (!this.password) {
        this.passwrodErrMsg = ''
      }
    },
    // 点击注册
    startRegister() {
      if (
        this.username !== '' &&
        this.nickname !== '' &&
        this.password !== '' &&
        this.usernameErrMsg === '' &&
        this.nicknameErrMsg === '' &&
        this.passwrodErrMsg === ''
      ) {
        this.$toast.success('效验成功')
        axios
          .post('http://localhost:3000/register', {
            username: this.username,
            nickname: this.nickname,
            password: this.password,
          })
          .then(res => {
            console.log(res)
            // res.data 解构
            const { statusCode, message } = res.data
            if (statusCode === 200) {
              // 提示
              this.$toast.success(message)
              // 跳转
              this.$router.push({
                path: '/login',
                query: {
                  username: this.username,
                  password: this.password,
                },
              })
            } else {
              // 提示
              this.$toast.fail(message)
            }
          })
      } else {
        this.$toast.fail('效验失败')
      }
    },
  },
}
</script>

<style></style>

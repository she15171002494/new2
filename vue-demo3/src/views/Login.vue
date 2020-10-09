<template>
  <div>
    <!-- 头部 -->
    <hm-header>登 录</hm-header>
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
      v-model="password"
      required
      clearable
      label="密 码"
      placeholder="请输入密码"
      :error-message="passwordErrMsg"
      @input="checkPassword"
    />
    <!-- button -->
    <hm-button @click.native="startLogin">登 录</hm-button>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'

export default {
  data() {
    return {
      username: '', //用户名
      password: '', //密码
      usernameErrMsg: '', //用户名效验
      passwordErrMsg: '', //密码效验
    }
  },
  created() {
    const { username, password } = this.$route.query
    if (username && password) {
      ;(this.username = username), (this.password = password)
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
    // 密码效验
    checkPassword() {
      const reg = /^\d{3,12}$/
      if (reg.test(this.password)) {
        this.passwordErrMsg = ''
      } else {
        this.passwordErrMsg = '密码格式错误'
      }
      // 如果密码为空，提示不显示
      if (!this.password) {
        this.passwordErrMsg = ''
      }
    },
    // 点击登录
    startLogin() {
      if (
        this.username !== '' &&
        this.password !== '' &&
        this.usernameErrMsg === '' &&
        this.passwordErrMsg === ''
      ) {
        this.$toast.success('效验成功')
        // 发送 axios 请求
        axios
          .post('http://localhost:3000/login', {
            username: this.username,
            password: this.password,
          })
          .then(res => {
            console.log(res)
            // res.data 解构
            const { statusCode, message, data } = res.data
            if (statusCode === 200) {
              // 存 token
              localStorage.setItem('token', data.token)
              // 提示
              this.$toast.success(message)
              // 跳转
              this.$router.push('/user')
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

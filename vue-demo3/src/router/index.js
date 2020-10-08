// 配置路由信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// 注册
Vue.use(VueRouter)

// 构造路由实例
const router = new VueRouter({
  routes: [
    { path: '/Login', component: Login },
    { path: '/register', component: Register },
  ],
})

// 导出
export default router

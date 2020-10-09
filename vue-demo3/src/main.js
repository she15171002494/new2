// 配置vue
import Vue from 'vue'
import App from './App.vue'

// 引入公共样式
import './assets/base.less'

// 引入字体图标
import './assets/iconfont.css'

// 引入自动屏幕适配
import 'lib-flexible'

// 导入路由
import router from './router/index.js'

// 导入子组件
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'

// 注册全局组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-button', HmButton)

// 引入 vant 组件的输入框
import { Field } from 'vant'

Vue.use(Field)

// 引入 vant 组件的轻提示
import { Toast } from 'vant'

Vue.use(Toast)

// 构造vue实例
new Vue({
  // 挂载
  router,
  render: h => h(App),
}).$mount('#app')

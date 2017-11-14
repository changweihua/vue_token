// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bcrypt from 'bcryptjs'
import sha256 from 'js-sha256'
import Footer from '@/components/layout/Footer'
import Banner from '@/components/layout/Banner'
import Loading from '@/components/modules/Loading'
import SearchBar from '@/components/modules/SearchBar'
import ActionSheet from '@/components/modules/ActionSheet'
import ActionBar from '@/components/layout/ActionBar'
import Icon from 'vue-svg-icon/Icon.vue'
import 'vue2-animate/dist/vue2-animate.min.css'
import {
  fetch
} from './util/http'
import MyPlugins from './plugins/plugin1.js'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'en-US',    // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('@/assets/langs/zh-cn.js'),   // 中文语言包
    'en-US': require('@/assets/langs/en-us.js')    // 英文语言包
  }
})

require('./util/mock')
require('./util/filter')

Vue.use(MyPlugins)
Vue.component('icon', Icon)
Vue.component(Footer.name, Footer)
Vue.component(Banner.name, Banner)
Vue.component(ActionBar.name, ActionBar)
Vue.component(Loading.name, Loading)
Vue.component(SearchBar.name, SearchBar)
Vue.component(ActionSheet.name, ActionSheet)

// 按需引入组件
// import { Button } from 'vant/lib/button'
// import 'vant/lib/vant-css/button.css'

// 导入所有组件
import vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(vant)

Vue.config.productionTip = false

Vue.prototype.$fetch = fetch

// 定义密码加密的计算强度,默认10
var salt = bcrypt.genSaltSync(12)
// 把自己的密码(this.registerForm.passWord)带进去,变量hash就是加密后的密码
var hash = bcrypt.hashSync('AAAAAAA', salt)

console.log(hash)
console.log(sha256('AAAAAAA'))

// JWT 用户权限校验，判断 TOKEN 是否在 localStorage 当中
router.beforeEach(({
  name
}, from, next) => {
  // 获取 JWT Token
  if (localStorage.getItem('JWT_TOKEN')) {
    // 如果用户在login页面
    if (name === 'login') {
      next('/')
    } else {
      // Todo: Check Token Is Valid
      next()
    }
  } else {
    if (name === 'login' || name === 'register') {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  // 不要忘记
  router,
  template: '<App/>',
  components: {
    App
  }
})

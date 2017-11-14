import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/pages/account/Login'
import Index from '@/components/pages/home/Index'
import Register from '@/components/pages/account/Register'
import ArticleList from '@/components/pages/article/List'
import Detail from '@/components/Detail'
import NotFound from '@/components/layout/NotFound'
import About from '@/components/pages/home/About'

Vue.use(Router)
// 实例化参数
Vue.use(require('vue-wechat-title'))

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: Index,
    subRoutes: {

    }
  },
  {
    path: '/hello',
    name: 'Hello',
    meta: {
      title: '测试页'
    },
    component: Hello
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '系统登录'
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '系统注册'
    },
    component: Register
  },
  {
    path: '/detail/:userId',
    name: 'detail',
    meta: {
      title: '详情'
    },
    component: Detail
  }, {
    path: '*',
    component: NotFound
  },
  {
    path: '/article/list/:pageIndex/:pageSize',
    name: 'articleList',
    meta: {
      title: '文章列表'
    },
    component: ArticleList
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于我'
    },
    component: About
  }]
})

import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import md5 from 'js-md5'

localStorage.API_PARTNER = 'partner'
localStorage.API_SIGN = 'sign'
localStorage.PARTNER_SIGN = md5('partner=partnersign')
console.log(localStorage.PARTNER_SIGN)

// Axios 全局设置
axios.defaults.baseURL = 'http://localhost:63400/api/'
axios.defaults.timeout = 5000
// axios.defaults.headers.common['Partner'] = 'partner'
// axios.defaults.headers['Sign'] = md5('partner=partner')
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true

// axios 全局配置拦截器 每次向后端请求携带 头信息
// http request 拦截器
// Start
axios.interceptors.request.use(
  config => {
    config.data = config.data
    if (localStorage.JWT_TOKEN) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${localStorage.JWT_TOKEN}`
    }
    // 有签名且API地址不为MockJS服务的地址
    if (localStorage.PARTNER_SIGN && config.url.indexOf('localhost:8080') === -1) {
      config.params = {
        Partner: localStorage.API_PARTNER,
        Sign: localStorage.PARTNER_SIGN
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      console.log('axios:' + error.response.status)
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          // store.commit('LOG_OUT')
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data)
  })

Vue.prototype.$http = axios
// End

/**
 * Get 方法
 * @param {*} url
 * @param {*} params
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * POST 方法
 * @param {*} url
 * @param {*} data
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * PATCH 方法封装
 * @param {*} url
 * @param {*} data
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * PUT 方法
 * @param {*} url
 * @param {*} data
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * PUT 方法
 * @param {*} url
 * @param {*} data
 */
export function all(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  install(Vue, options) {
    Vue.prototype.$myGlobalMethod = opts => {
      window.console.log(JSON.stringify(opts))
    }
  }
}

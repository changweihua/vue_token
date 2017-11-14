// 此处存放对于数据显示效果的处理
import Vue from 'vue'

Vue.filter("filterDate", function(value) {
  // value 就是要过滤的内容
  // 根据传进来的参数变成真实的时间
  var time = new Date(value)
  // console.log(time);
  // return "2017-6-29 12:42:00"
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
})

Vue.filter('txtSub', (text, length = 10) => {
  if (text) {
    return text.substring(0, length)
  }
  return ''
})

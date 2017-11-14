<template>
  <van-swipe auto-play>
    <van-swipe-item v-for="(img, index) in images" :key="index">
      <a href="https://youzan.com" target="_blank">
        <!-- <img :src="img" alt=""> -->
        <img v-lazy="img" alt="">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)

export default {
  name: 'banner',
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]
    }
  }
}
</script>

<style scoped>
.van-swipe {
  height: 200px;
  margin-bottom: 100px;
}

.van-swipe-item img {
  width: 100%;
  height: auto;
}
</style>

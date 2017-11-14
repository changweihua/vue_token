<template>
  <div>

    <div v-wechat-title="$route.meta.title"></div>

    <van-card :thumb="article.thumbnail_pic_s">
      <div class="van-card__row" slot="title">
        <h4 class="van-card__title">{{article.title}}</h4>
        <span class="van-card__price">¥ 2.00</span>
      </div>
      <div class="van-card__row" slot="desc">
        <span class="van-card__num">x {{ this.$route.params.userId }}
        </span>
      </div>
      <div class="van-card__footer" slot="footer">
        <van-button size="mini">按钮一</van-button>
        <van-button size="mini">按钮二</van-button>
        <icon name="favorite" scale="1.5"></icon>
      </div>
      <div slot="tags">
        <van-tag>标签</van-tag>
        <van-tag type="danger">标签</van-tag>
        <van-tag type="success">标签</van-tag>
        <van-tag type="primary">标签</van-tag>
      </div>
    </van-card>

    <van-loading type="gradient-circle" color="black"></van-loading>
    <van-loading type="gradient-circle" color="white"></van-loading>

  </div>
</template>

<script>
import Vue from "vue"
import { Card } from "vant"

Vue.component(Card.name, Card)

export default {
  name: "detail",
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$fetch("http://localhost:8080/api/detail").then(res => {
        this.article = res.article
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="weui-tab">
        <div class="weui-navbar">
            <div class="weui-navbar__item" @click="onNavItemClick(0)" :class="{'weui-bar__item_on': currentNavIndex === 0}">
                选项一
            </div>
            <div class="weui-navbar__item" @click="onNavItemClick(1)" :class="{'weui-bar__item_on': currentNavIndex === 1}">
                选项二
            </div>
            <div class="weui-navbar__item" @click="onNavItemClick(2)" :class="{'weui-bar__item_on': currentNavIndex === 2}">
                选项三
            </div>
        </div>
        <div class="weui-tab__panel">
            <component :is="currentNavItem"></component>
            <div>
              <!-- <van-card :thumb="article.thumbnail_pic_s">
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
              </van-card> -->
            </div>
            <div style="display:none">个人资料</div>
            <div style="display:none">Page 3</div>
        </div>
    </div>

    <actionSheet v-if="showActionSheet"></actionSheet>

    <a href="javascript:;" class="weui-btn weui-btn_default" @click="onActionSheetClick">关闭</a>
    <a href="javascript:;" class="weui-btn weui-btn_default" @click="onCloseClick">关闭</a>
  </div>
</template>

<script>
import Vue from "vue"
import { Card } from "vant"

import ArticleInfo from '@/components/pages/article/ArticleInfo'

Vue.component(Card.name, Card)

export default {
  name: "articleDetail",
  data() {
    return {
      showActionSheet: false,
      currentNavIndex: 1,
      currentNavItem: 'nav1',
      article: {}
    }
  },
  props: ['articleId'],
  created() {
    this.loadData()
  },
  components: {
    nav1: ArticleInfo
  },
  methods: {
    loadData() {
      console.log(this.articleId)
      this.$fetch("http://localhost:8080/api/detail").then(res => {
        this.article = res.article
      })
    },
    onCloseClick() {
      var vm = this
      vm.$emit('close')
    },
    onActionSheetClick() {
      var vm = this
      vm.showActionSheet = true
    },
    onNavItemClick(navIndex) {
      var vm = this
      switch (navIndex) {
        case 1:
          vm.currentNavItem = ArticleInfo
          break
        case 0:
        default:
          vm.currentNavItem = ArticleInfo
          break
      }
      vm.currentNavIndex = navIndex
    }
  }
}
</script>

<style scoped>

</style>

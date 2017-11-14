<template>
<transition
  name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight"
>
  <div>
      <div v-show="showList">
          <!-- <searchBar></searchBar> -->
          <div class="weui-form-preview" v-bind:key="item.id" v-for="(item, index) in items">
              <div class="weui-form-preview__hd">
                  <label class="weui-form-preview__label">付款金额</label>
                  <em class="weui-form-preview__value">¥2400.00</em>
              </div>
              <div class="weui-form-preview__bd">
                  <p>
                      <label class="weui-form-preview__label">商品</label>
                      <span class="weui-form-preview__value"><icon name="account" scale="1.5"></icon> {{ item.author_name }}</span>
                  </p>
                  <p>
                      <label class="weui-form-preview__label">商品</label>
                      <span class="weui-form-preview__value"><icon name="clock" scale="1.5"></icon> {{ item.date }}</span>
                  </p>
                  <p>
                      <label class="weui-form-preview__label">商品</label>
                      <span class="weui-form-preview__value">{{item.guid}}</span>
                  </p>
                  <p>
                      <label class="weui-form-preview__label">标题标题</label>
                      <span class="weui-form-preview__value">{{ item.title | txtSub }}</span>
                  </p>
                  <p>
                      <label class="weui-form-preview__label">标题标题</label>
                      <span class="weui-form-preview__value">{{ item.content }}</span>
                  </p>
              </div>
              <div class="weui-form-preview__ft">
                  <!-- <router-link class="weui-form-preview__btn weui-form-preview__btn_primary" :to="{ name: 'detail', params: { userId: item.id } }">操作
                  </router-link> -->
                  <a class="weui-form-preview__btn weui-form-preview__btn_primary" @click="onShowDetail" href="javascript:">操作</a>
              </div>
          </div>
          <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">
              <span class="weui-loadmore__tips"></span>
          </div>
          <div v-if="isLoading" class="weui-loadmore">
              <i class="weui-loading"></i>
              <span class="weui-loadmore__tips">正在加载</span>
          </div>
          <div v-if="isEmpty" class="weui-loadmore weui-loadmore_line">
              <span class="weui-loadmore__tips">暂无数据</span>
          </div>
          <a href="javascript:;" v-if="canLoadMore" @click="onLoadMoreClick" class="weui-btn weui-btn_primary">加载更多</a>
      </div>
      <div v-if="!showList">
          <component :is="detailView" :articleId="articleId" @close="closeDetail"></component>
      </div>
  </div>
</transition>
</template>

<script>

import ArticleDetail from '@/components/pages/article/ArticleDetail'

export default {
  name: 'articleList',
  data() {
    return {
      isLoading: false,
      showList: true,
      detailView: 'articleDetail',
      articleId: 0,
      pager: {
        isLastPage: false,
        pageIndex: 1,
        pageSize: 10
      },
      items: []
    }
  },
  mounted() {
    console.log('Index mounted')
  },
  created() {
    console.log('Index created')
    this.loadData()
  },
  methods: {
    goSearch(value) {
      alert(value)
    },
    loadData() {
      var vm = this
      vm.isLoading = true
      this.$fetch('http://localhost:8080/api/article').then(res => {
        setTimeout(() => {
          vm.items = res.articles
          vm.isLoading = false
          vm.pager.pageIndex++
        }, 2000)
      })
    },
    onLoadMoreClick() {
      var vm = this
      vm.loadData()
      // vm.$router.push("/article/list/1/10")
    },
    onShowDetail(articleId) {
      var vm = this
      vm.articleId = articleId
      vm.showList = false
      vm.$emit('openResultPage')
    },
    closeDetail() {
      var vm = this
      vm.articleId = 0
      vm.showList = true
    }
  },
  computed: {
    isEmpty() {
      var vm = this
      return !vm.isLoading && vm.items && vm.items.length === 0
    },
    canLoadMore() {
      var vm = this
      return !vm.isLoading && !vm.pager.isLastPage && vm.pager.pageIndex < 5
    }
  },
  watch: {
    '$route': 'loadData'
  },
  components: {
    articleDetail: ArticleDetail
  }
}
</script>

<style scoped>

</style>

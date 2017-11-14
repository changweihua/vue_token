<template>
<transition
  name="rotate"
  enter-active-class="rotateInLeft"
  leave-active-class="rotateOutRight"
>
  <div>
      <actionbar :showActionBar="showAB">
          <span slot="actionBarTitle">首页</span>
      </actionbar>
      <div v-wechat-title="$route.meta.title"></div>
      <div class="weui-tab">
          <div class="weui-tab__panel">
            <!-- <router-view></router-view> -->
            <component :is="currentView"></component>
          </div>
          <div class="weui-tabbar">
              <a href="javascript:;" :class="{'weui-bar__item_on': currentTabIndex === 0}" @click="onTabItemClick(0)" class="weui-tabbar__item">
                  <img src="../../../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                  <p class="weui-tabbar__label">文章</p>
              </a>
              <a href="javascript:;" :class="{'weui-bar__item_on': currentTabIndex === 1}" @click="onTabItemClick(1)" class="weui-tabbar__item">
                  <img src="../../../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                  <p class="weui-tabbar__label">通讯录</p>
              </a>
              <a href="javascript:;" :class="{'weui-bar__item_on': currentTabIndex === 2}" @click="onTabItemClick(2)" class="weui-tabbar__item">
                  <img src="../../../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                  <p class="weui-tabbar__label">发现</p>
              </a>
              <a href="javascript:;" :class="{'weui-bar__item_on': currentTabIndex === 3}" @click="onTabItemClick(3)" class="weui-tabbar__item">
                  <img src="../../../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                  <p class="weui-tabbar__label">{{$t('lang.about')}}</p>
              </a>
        </div>
      </div>
  </div>
</transition>
</template>

<script>

import { bus } from '@/util/bus.js'
import ArticleList from '@/components/pages/article/List'
import About from '@/components/pages/home/About'
import Hello from '@/components/Hello'

export default {
  name: 'index',
  data() {
    return {
      showActionBar: true,
      showAB: true,
      currentTabIndex: 0,
      currentView: 'tab0',
      items: []
    }
  },
  props: ['containerHeight'],
  mounted() {
    console.log('Index mounted')
    bus.$emit('toggleActionBar', this.showActionBar)
    // this.$parent.showAB = this.showActionBar
  },
  created() {
    console.log('Index created')
    this.$emit('toggleActionBar', this.showActionBar)
  },
  computed: {
    isTabActive() {
      var vm = this
      return {
        'weui-bar__item_on': vm.currentTabIndex === 0
      }
    }
  },
  methods: {
    onTabItemClick(tabIndex) {
      var vm = this
      vm.currentTabIndex = tabIndex
      switch (tabIndex) {
        case 1:
          vm.currentView = Hello
          break
        case 3:
          vm.currentView = About
          break
        case 0:
        default:
          vm.currentView = ArticleList
          break
      }
    }
  },
  components: {
    'tab0': ArticleList,
    'tab1': Hello
  }
}
</script>

<style scoped>
.weui-tab {
  margin-top: 45px;
}

.weui-tabbar {
    position: fixed;
    bottom: .0em;
    left: 0;
    right: 0;
}
</style>

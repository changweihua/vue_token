<template>
  <div class="outer-container">
      <div class="inner-container">
          <div id="app" class="app" @openResultPage="openResultPage">
              <!-- <img src="./assets/logo.png"> -->
              <router-view></router-view>
              <component v-if="showResultPage" :routerPath="routerPath" :is="resultView" @close="closeResultPage"></component>
              <!-- <loading :showLoading="showL"></loading> -->
          </div>
          <!-- <div class="weui-mask_transparent"></div> -->
      </div>
  </div>

</template>

<script>
import { bus } from "@/util/bus.js"
import ResultPage from '@/components/modules/ResultPage'

export default {
  name: "app",
  data() {
    return {
      showAB: false,
      showL: false,
      resultView: 'resultPage',
      showResultPage: false,
      resultPageUri: ''
    }
  },
  computed: {
    containerHeight() {
      var vm = this
      vm.$nextTick(() => {
        if (vm.showAB) {
          console.log(window.document.querySelector("div.action-bar"))
          var appHeight = window.document.querySelector("div#app").clientHeight
          console.log(appHeight)
          var abHeight = window.document.querySelector("div#container")
            .offsetTop
          console.log(abHeight)
          console.log(appHeight - abHeight + "px")
          return appHeight - abHeight// '400px'
        } else {
          return "100%"
        }
      })
    }
  },
  methods: {
    onToggleActionBar(flag) { },
    closeResultPage(flag) {
      var vm = this
      console.log(flag)
      vm.showResultPage = flag
    },
    openResultPage(flag, uri) {
      var vm = this
      if (flag && uri) {
        vm.resultPageUri = 'uri'
      }
      vm.showResultPage = flag
    }
  },
  mounted() {
    this.$myGlobalMethod({ code: 0, status: "success", msg: "成功" })
  },
  created() {
    var vm = this

    bus.$on("toggleActionBar", flag => {
      vm.showAB = flag
    })

    bus.$on("toggleLoading", flag => {
      vm.showL = flag
    })

    bus.$on("toggleInfo", (flag, uri) => {
      vm.openResultPage(flag, uri)
    })
  },
  components: {
    resultPage: ResultPage
  }
}
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background: #f8f8f8;
  width: 100%;
  height: 100%;
}

.outer-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.inner-container {
    position: absolute; left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
}

 /* for Chrome */
.inner-container::-webkit-scrollbar {
    display: none;
}

.weui-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}

</style>

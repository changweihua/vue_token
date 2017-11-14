<template>
    <div class="weui-flex action-bar" v-if="showActionBar">
        <div>
            <div class="placeholder">
                <span @click="onBackClick">
                    <icon name="back" scale="2"></icon>
                </span>
            </div>
        </div>
        <div class="weui-flex__item">
            <div class="placeholder">
                <div style="text-align:center;">
                    <slot name="actionBarTitle">&nbsp;</slot>
                </div>
            </div>
        </div>
        <div>
            <div class="placeholder">
                <span @click="onInfoClick">
                <icon name="info" scale="2"></icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

import { Toast } from "vant"
import { bus } from '@/util/bus.js'

export default {
  name: "actionbar",
  data() {
    return {}
  },
  props: ["showActionBar"],
  mounted() {
    var vm = this
    console.log(vm.$route.name)
  },
  methods: {
    nextStep() {
      if (++this.active > 2) this.active = 0
    },
    onInfoClick() {
      console.log('onInfoClick')
      bus.$emit('toggleInfo', true)
      var vm = this
      vm.$parent.showResultPage = true
    },
    onBackClick() {
      Toast("我是提示文案，建议不超过十五字~")
      var vm = this
      vm.$route.back()
      // vm.$route.go(-1)
    }
  },
  computed: {}
}
</script>

<style scoped>
.action-bar {
  padding: 10px 5px;
  position: fixed;
  top: .0em;
  left: 0;
  right: 0;
  z-index: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f8f8f8;
}
</style>

<template>
  <div id="loadingToast" v-if="showLoading">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="weui-loading weui-icon_toast"></i>
          <p class="weui-toast__content">数据加载中</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'loading',
  data() {
    return {

    }
  },
  props: ['showLoading'],
  mounted() {
    var vm = this
    console.log(vm.$route.name)
  },
  methods: {

  },
  computed: {
  }
}
</script>

<style scoped>

</style>

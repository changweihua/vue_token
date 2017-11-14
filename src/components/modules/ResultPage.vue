<template>
<transition
  name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight"
>
    <div class="weui-msg">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">操作成功</h2>
            <p class="weui-msg__desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a></p>
        </div>
        <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
                <a href="javascript:history.back();" class="weui-btn weui-btn_primary">推荐操作</a>
                <a href="javascript:;" class="weui-btn weui-btn_default" @click="onCloseClick">关闭</a>
            </p>
        </div>
        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">关于系统</a>
                </p>
                <p class="weui-footer__text">Copyright &copy; 2008-2017 weui.io</p>
            </div>
        </div>
    </div>
</transition>
</template>

<script>

export default {
  name: "resultPage",
  data() {
    return {}
  },
  mounted() {
    var vm = this
    console.log(vm.$route.name)
  },
  props: ['routerPath'],
  methods: {
    nextStep() {
    },
    onInfoClick() {

    },
    onBackClick() {

    },
    onCloseClick() {
      var vm = this
      vm.$emit('close', false)
    }
  },
  computed: {}
}
</script>

<style scoped>
.weui-msg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f8f8f8;
}
</style>

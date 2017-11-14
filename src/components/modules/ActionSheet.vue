<template>
<transition
  name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight"
>
    <div id="actionSheet_wrap">
        <div class="weui-mask_transparent actionsheet__mask" id="mask"></div>
        <div class="weui-actionsheet" id="weui-actionsheet">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" id="actionsheet_cancel">取消</div>
            </div>
        </div>

        <div class="weui-skin_android" id="weui-android-actionsheet" style="display: none">
            <div class="weui-mask"></div>
            <div class="weui-actionsheet">
                <div class="weui-actionsheet__menu">
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>

export default {
  name: "actionSheet",
  data() {
    return {}
  },
  mounted() {
    var vm = this
    console.log(vm.$route.name)
  },
  props: ['items', 'actionSheetStyle'],
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

</style>

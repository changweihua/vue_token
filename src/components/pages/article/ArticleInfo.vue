<template>
  <div>
    <div v-wechat-title="$route.meta.title"></div>

    <div class="weui-cells__title">文章信息</div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell weui-cell_warn">
            <div class="weui-cell__hd"><label class="weui-label">标题</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号"/>
            </div>
            <div class="weui-cell__ft">
                <i class="weui-icon-warn"></i>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">内容</label></div>
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                <div class="weui-textarea-counter"><span>0</span>/200</div>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">摘要</label></div>
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                <div class="weui-textarea-counter"><span>0</span>/200</div>
            </div>
        </div>
    </div>
    <div class="weui-cells__tips">底部说明文字底部说明文字</div>

    <label for="weuiAgree" class="weui-agree">
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
        <span class="weui-agree__text">
            阅读并同意<a href="javascript:void(0);">《相关条款》</a>
        </span>
    </label>

    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
    </div>
    <a href="javascript:;" class="weui-btn weui-btn_default" @click="onCloseClick">关闭</a>
  </div>
</template>

<script>

export default {
  name: "articleDetail",
  data() {
    return {
      showActionSheet: false,
      currentNavIndex: 0,
      currentNavItem: '',
      article: {}
    }
  },
  props: ['articleId'],
  created() {
    this.loadData()
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
    }
  }
}
</script>

<style scoped>

</style>

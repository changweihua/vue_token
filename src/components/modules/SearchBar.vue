<template>
  <div>
      <div class="weui-search-bar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
      <div class="weui-cells weui-cells_access search_show" id="search_show">
          <div class="weui-cell">
              <div class="weui-cell__bd weui-cell_primary">
                  <p>实时搜索文本</p>
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__bd weui-cell_primary">
                  <p>实时搜索文本</p>
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__bd weui-cell_primary">
                  <p>实时搜索文本</p>
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__bd weui-cell_primary">
                  <p>实时搜索文本</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'searchBar',
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

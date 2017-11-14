<template>
  <div class="cell">
    <div v-bind:key="item.id" v-for="(item, index) in items">
      <div class="weui-cells__title">{{item.title}}</div>
      <div class="weui-cells">
          <div class="weui-cell">
              <div class="weui-cell__bd">
                  <p>{{ item.content }} {{item.address}} {{item.guid }}</p>
              </div>
              <div class="weui-cell__ft">
                <icon name="clock" scale="1.5"></icon>
                {{ item.date }}
                <icon name="account" scale="1.5"></icon>
                {{ item.author_name }}
                <icon name="hot" :style="{color: item.iconColor}" scale="1.5"></icon>
              </div>
          </div>
      </div>
    </div>

      <van-tabs type="card">
      <van-tab title="列表页">
        <van-search placeholder="列表项搜索字段" @search="goSearch"></van-search>
        <van-row>
          <div v-bind:key="item.id" v-for="(item, index) in items">
            <van-panel>
              <div slot="header">


              </div>
              <div style="min-height: 75px;">

              </div>
              <div slot="footer">

                <van-button size="small">

                  <icon name="good" scale="1.5"></icon>

                </van-button>
                <router-link :to="{ name: 'detail', params: { userId: item.id } }">Detail
                </router-link>
                <!-- <router-link :to="{ name: 'detail', query: { userId: item.id } }">Detail</router-link> -->
              </div>
            </van-panel>
          </div>
        </van-row>
      </van-tab>
      <van-tab title="选项二">
        <van-row>
          内容二
        </van-row>
      </van-tab>
      <van-tab title="选项三">
        <van-row>
          内容三
        </van-row>
      </van-tab>
      <van-tab title="选项四">
        <van-row>
          内容四
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
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
      this.$fetch('http://localhost:8080/api/article').then(res => {
        this.items = res.articles
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
<transition
  name="fade"
  enter-active-class="fadeInDown"
  leave-active-class="fadeOutUp"
>
  <div>
    <h1 class="page_title">我</h1>
    <article class="weui_article">
            <h1>联系方式</h1>
            <section>
                <h2 class="title">章标题</h2>
                <section>
                    <h3>1.1 节标题</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute</p>
                </section>
                <section>
                    <h3>1.2 节标题</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </section>
        </article>
  </div>
</transition>
</template>

<script>

// import { bus } from '../../../util/bus.js'

export default {
  name: 'about',
  data() {
    return {

    }
  },
  props: [],
  mounted() {
    console.log('About mounted')
  },
  created() {
    console.log('About created')
  },
  computed: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.page_title {
    text-align: center;
    font-size: 34px;
    font-weight: 400;
    margin: 0 15%;
    color: #de7c23;
}
</style>

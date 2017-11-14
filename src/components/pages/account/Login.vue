
<template>
  <section>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="weui-flex">
      <div class="weui-flex__item" style="text-align:center;">
        <icon name="aislogo" scale="20"></icon>
      </div>
    </div>
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell__hd">
              <label class="weui-label">用户名</label>
            </div>
            <div class="weui-cell__bd">
              <!-- <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号" v-model.trim="username" required /> -->
              <input class="weui-input" type="text" placeholder="请输入用户名" v-model.trim="username" required />
            </div>
          </div>
          <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
              <label class="weui-label">密码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="password" placeholder="请输入密码" v-model.trim="userpwd" required />
            </div>
            <div class="weui-cell__ft">
              <a href="javascript:;" class="weui-vcode-btn">查看密码</a>
            </div>
          </div>
        </div>
        <div class="weui-cells__tips">
            <ul>
              <li v-for="err in errors" v-bind:key="err" v-text="err"></li>
            </ul>
        </div>
      </div>
    </div>

    <div style="margin-top: 100px;">
      <a href="javascript:;" @click="doLogin" class="weui-btn weui-btn_primary">登录</a>
      <a href="javascript:;" @click="toRegister" class="weui-btn weui-btn_primary">注册</a>
    </div>

    <div v-show="showDialog==true">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd">
          <strong class="weui-dialog__title">{{dialogTitle}}</strong>
        </div>
        <div class="weui-dialog__bd">
          {{ dialogContent }}
        </div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" @click="closeDialog" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
        </div>
      </div>
    </div>
    <cfooter></cfooter>
  </section>
</template>

<script>
import Vue from "vue"
import { Row, Col, Dialog } from "vant"
import Vuerify from "vuerify"

Vue.use(Vuerify)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

export default {
  name: "login",
  // props: ['username'],
  data() {
    return {
      showDialog: false,
      showLoading: false,
      dialogTitle: "",
      dialogContent: "",
      username: "",
      userpwd: "",
      showPwd: false
    }
  },
  vuerify: {
    username: {
      test: /\w{2,}/, // 自定义规则，可以是函数，正则或者全局注册的规则（填字符串）
      message: "至少 2 位字符"
    },
    password: "required" // 使用全局注册的规则
  },
  computed: {
    errors() {
      return this.$vuerify.$errors
    }
  },
  created() {
    this.HelloAxios()
  },
  mounted() {
    this.$nextTick(() => { })

    this.$http
      .get("http://localhost:8080/api/data")
      .then(m => console.log(m.data))
  },
  methods: {
    HelloAxios() {
      this.$fetch("errorlist").then(m => console.log(m.data))

      this.$http.post("http://localhost:8080/api/user/login").then(m => console.log(m.result))
    },
    onFieldBlur() {
      var vm = this
      console.log(vm.username)
    },
    onIconClick() {
      var vm = this
      vm.username = ""
    },
    toRegister() {
      var vm = this
      vm.$router.push("/register")
    },
    doLogin() {
      var vm = this
      vm.$vuerify.check()
      console.log(JSON.stringify(vm.$vuerify.$errors))
      if (vm.$vuerify.invalid) {
        vm.dialogTitle = "表单填写不完整"
        vm.dialogContent = ""
        vm.showDialog = true
        return
      }
      vm.$http.post("tpost").then(m => console.log(m.data))
      if (vm.username === "root" && vm.userpwd === "root") {
        localStorage.JWT_TOKEN = "AAA"
        vm.$router.push("/")
      } else {
        Dialog.alert({
          title: "登录提示",
          message: "当前用户名和密码不匹配。"
        }).then(action => {
          console.log(action)
        })
      }
    },
    closeDialog() {
      var vm = this
      vm.showDialog = false
    }
  }
}
</script>

<style scoped>
.weui-button_fixed-bottom {
  position: fixed;
  bottom: -0.35em;
  left: 0;
  right: 0;
}
</style>







































/* .van-col {
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
  background-clip: content-box;
}

.van-col:nth-child(odd) {
  background-color: #39a9ed;
}

.van-col:nth-child(2n) {
  background-color: #66c6f2;
} */
</style>

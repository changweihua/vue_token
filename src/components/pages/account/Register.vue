<template>
  <div>
    <van-steps :active="active" icon="contact" icon-class="steps-success" title="新用户申请" description="请耐心等待管理员的审批">
      <!-- <van-icon slot="icon" name="like"></van-icon> -->
      <p slot="message-extra">流程</p>
      <van-step>用户信息</van-step>
      <van-step>邮箱认证</van-step>
      <van-step>申请完成</van-step>
    </van-steps>
    <van-cell-group>
      <van-field type="text" label="用户名：" placeholder="请输入用户名" icon="clear" required></van-field>
      <van-field type="password" label="密码：" placeholder="请输入密码" required></van-field>
      <van-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍" required></van-field>
    </van-cell-group>
    <van-button @click="nextStep">下一步</van-button>

    <van-row>
      <van-col span="12" v-show="active=1">
        <van-button bottom-action>注册</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary" bottom-action>返回登录</van-button>
      </van-col>
    </van-row>

  </div>
</template>

<script>

import Vue from 'vue'

import { Step, Steps, Field } from 'vant'

Vue.component(Step.name, Step)
Vue.component(Steps.name, Steps)
Vue.component(Field.name, Field)

export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    nextStep() {
      if (++this.active > 2) this.active = 0
    }
  }
}
</script>

<style>

</style>

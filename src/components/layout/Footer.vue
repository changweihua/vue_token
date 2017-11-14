<template>
  <div class="weui-footer weui-footer_fixed-bottom">
    <img src="../../assets/icons/favicon-32x32.png" alt="logo" class="zanui-logo" />
    <icon name="chameleon" scale="20" id="animation"></icon>
    <icon name="sun" scale="20" spin></icon>
    <p class="weui-footer__links">
      <a href="javascript:home();" class="weui-footer__link">WeUI首页</a>
    </p>
    <p class="weui-footer__text">Copyright &copy; 2017-2020 cmono.net</p>
  </div>
</template>

<script>
export default {
  name: 'cfooter',
  data() {
    return {}
  }
}
</script>

<style scoped>
#animation {
  animation: changeColor 5s infinite step-end;
}

@keyframes changeColor {
  0% {
    color: red;
  }
  20% {
    color: yellow;
  }
  40% {
    color: blue;
  }
  60% {
    color: green;
  }
  80% {
    color: purple;
  }
  100% {
    color: gold;
  }
}


.footer.footer-fixed {
  position: absolute;
  bottom: 0;
  left: 0;
}

.footer {
  margin-top: 30px;
  width: 100%;
  padding: 10px 0 20px;
  background: #f8f8f8;
  text-align: center;
}

.zanui-logo {
  display: block;
  margin: 0 auto;
  height: 35px;
  display: none;
}
</style>

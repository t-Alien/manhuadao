<template>
  <!-- login 登录组件页面 -->
  <div class="page-login">
    <header class="header-photo">
      <router-link class="icon-back" to="/login"></router-link>
      <router-link class="icon-reg" to="/register">注册</router-link>
      <div class="header-pic"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Ligon'
}
</script>
<style lang="scss">
.page-login {
  width: 100%;
  height: 22.8744rem;
  padding: 3.29333333rem 0 0;
  margin: 0 auto;
  background: url(../../../public/img/img-bg1.png) no-repeat top;
  background-size: cover;
  position: relative;

  .icon-back {
    width: 1.5912rem;
    height: 0.8618rem;
    background: url(../../../public/img/back.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 1.5rem;
    left: 1rem;
  }
  .header-pic {
    height: 12.1998rem;
    width: 12.3988rem;
    margin: 0 auto;
    background: url(../../../public/img/pic.png) no-repeat 50%;
    background-size: cover;
    margin-top: 10rem;
  }
  .icon-reg {
    width: 5.6rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-weight: 600;
    background: url(../../../public/img/zc.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    color: #000;
  }
}
</style>

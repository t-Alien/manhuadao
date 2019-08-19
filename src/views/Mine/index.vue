<template>
  <!-- mine 我的组件页面 -->
  <div class="page-mine">
    <header class="header-normal">
      <router-link class="header-back" to="/"></router-link>
      <span class="header-title font-32">我的</span>
    </header>
    <section class="mine-login">
      <div class="login-pic"></div>
      <router-link class="login-btn font-30" to="/login">登录/注册</router-link>
    </section>
    <section class="mine-menu font-30">
      <router-link class="menu-item" to="/favorite">
        <span class="icon-fav"></span>
        <span class="item-text">收藏</span>
      </router-link>
      <router-link class="menu-item" to="/history">
        <span class="icon-clock"></span>
        <span class="item-text">历史</span>
      </router-link>
      <router-link class="menu-item" to="/about">
        <span class="icon-mhd"></span>
        <span class="item-text">关于漫画岛</span>
      </router-link>
      <router-link class="menu-item" to="/feedback">
        <span class="icon-pencil"></span>
        <span class="item-text">反馈</span>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Mine'
}
</script>

<style lang="scss">
.page-mine {
  .header-normal {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 10rem;
    height: 2.6rem;
    margin: 0 auto;
    background-color: #fff;
    position: relative;

    .header-back {
      width: 2rem;
      height: 1rem;
      background: url(../../../public/img/back.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 1rem;
      left: -7rem;
    }
  }
}
</style>

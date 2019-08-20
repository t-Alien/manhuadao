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
  background-color: #f4f4f4;

  font-size: 1.06rem;

  .header-normal {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 3rem;
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
      left: 1.4rem;
    }
  }

  .mine-login {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #dddde4;

    .login-pic {
      width: 5rem;
      height: 5rem;
      border: 1px solid #efefef;
      background: url(../../../public/img/wd.png) no-repeat 50%;
      background-size: contain;
      border-radius: 50%;
    }

    .login-btn {
      margin: 0 0 0 0.6rem;
      font-weight: 500;
      color: #000;
      text-decoration: none;
      font-size: 1.1rem;
    }
  }

  .mine-menu {
    width: 100%;
    margin: 0.6rem auto 0;
    background-color: #fff;
    border-top: 1px solid #dddde4;

    .menu-item {
      box-sizing: border-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      height: 3rem;
      padding: 0 0 0 1rem;
      border-bottom: 1px solid #d0d0d7;
      text-decoration: none;
      position: relative;

      :after {
        content: '';
        width: 0.6rem;
        height: 0.8rem;
        margin: auto;
        background: url(../../../public/img/jtr.png) no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0.7rem;
      }

      .icon-fav {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 0.8rem 0 0;
        background: url(../../../public/img/start.png) no-repeat;
        background-size: contain;
      }

      .item-text {
        color: #333;
      }

      .icon-clock {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 0.8rem 0 0;
        background: url(../../../public/img/ls.png) no-repeat;
        background-size: contain;
      }

      .icon-mhd {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 0.8rem 0 0;
        background: url(../../../public/img/mhd.png) no-repeat;
        background-size: contain;
      }
      .icon-pencil {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 0.8rem 0 0;
        background: url(../../../public/img/fk.png) no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>

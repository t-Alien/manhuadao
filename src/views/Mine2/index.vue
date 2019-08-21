<template>
  <!-- mine 我的组件页面 -->
  <div class="page-mine2">
    <header class="header-normal">
      <router-link class="header-back" to="/"></router-link>
      <span class="header-title font-32">我的</span>
    </header>
    <section class="mine-info">
      <!--头像-->
      <div class="info-pic"></div>
      <div class="info-user">
        <p class="user-name font-28">佛系桔宝兔</p>
        <p class="user-id font-20">ID:203528509</p>
        <p class="user-pay font-24">
          余额：
          <span class="icon-daodan"></span>
          <span class="num-red">0</span>
          岛蛋
          <span class="icon-ticket"></span>
          <span class="num-red">0</span>
          漫画券
        </p>
      </div>
    </section>
    <section class="mine-menu font-30">
      <a class="menu-item">
        <span class="icon-wallet"></span>
        <span class="item-text">我的账户</span>
      </a>
      <a class="menu-item" href="https://m.manhuadao.cn/mine-exchange.html?cpid=0">
        <span class="icon-wallet"></span>
        <span class="item-text">使用兑换码</span>
      </a>
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

    <router-link class="mine-logout font-30" to="/mine">退出登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'Mine2'
}
</script>

<style lang="scss">
body {
  // background-color: #f4f4f4;
}
.page-mine2 {
  background-color: #f4f4f4;
  font-size: 1.06rem;
  .header-normal {
    display: flex;
    justify-content: center;
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

  .mine-info {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 1.8rem 1.2rem;
    background-color: #fff;
    border-bottom: 1px solid #dddde4;

    .info-pic {
      width: 5rem;
      height: 5rem;
      border: 1px solid #efefef;
      background-size: cover;
      border-radius: 50%;
      position: relative;
      background: url(../../../public/img/g.jpg) no-repeat;
    }

    .info-user {
      margin: 0 0 0 0.5rem;

      .user-name {
        color: #333;
        font-size: 0.93rem;
        font-weight: 500;
      }

      .user-id {
        margin: 0.2rem 0 0;
        color: #666;
        font-size: 0.8rem;
        font-weight: 500;
      }

      .user-pay {
        display: flex;
        align-items: center;
        color: #333;
        font-size: 0.8rem;
        margin: 0.5rem 0 0;

        .icon-daodan {
          width: 0.9rem;
          height: 0.9rem;
          margin: 0 0.28rem;
          background: url(../../../public/img/egg.png) no-repeat;
          background-size: contain;
        }

        .num-red {
          color: #e7370c;
        }

        .icon-ticket {
          width: 0.9rem;
          height: 0.8rem;
          margin: 0 0.28rem;
          background: url(../../../public/img/quan.png) no-repeat;
          background-size: contain;
        }
        .num-red {
          color: #e7370c;
        }
      }
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
        right: 2rem;
      }
      .icon-wallet {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 0.8rem 0 0;
        background: url(../../../public/img/qianb.png) no-repeat;
        background-size: contain;
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
  .mine-logout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 2.4rem;
    margin: auto;
    color: #e7370c;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid #e7370c;
    border-radius: 6px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2rem;
  }
}
</style>

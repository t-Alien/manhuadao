<template>
  <!-- login 登录组件页面 -->
  <div class="page-login">
    <header class="header-photo">
      <router-link class="icon-back" to="/mine"></router-link>
      <router-link class="icon-reg" to="/register">注册</router-link>
      <div class="header-pic"></div>
    </header>

    <section class="login-main">
      <div class="input-group font-24">
        <label>邮 箱：</label>
        <input type="text" placeholder="请输入您的邮箱" />
      </div>
      <div class="input-group font-24 password">
        <label>密 码：</label>
        <input type="password" placeholder="请输入您的密码" />
        <span class="forget font-20">忘记密码?</span>
      </div>
      <div class="login-btn font-26">登录</div>
    </section>
    <footer class="login-third">
      <p class="third-title font-20">或者用以下方式登录</p>
      <div class="third-group">
        <router-link
          to="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101339421&response_type=token&scope=all&redirect_uri=https%3A%2F%2Fm.manhuadao.cn%2Flogin.html%3Flogintype%3Dqq%26backurl%3Dhttps%253A%252F%252Fm.manhuadao.cn%252Ffavorite.html%253Fcpid%253D0"
          class="login-qq"
        ></router-link>
        <router-link
          to="https://api.weibo.com/oauth2/authorize?client_id=1550699632&response_type=token&redirect_uri=https%3A%2F%2Fm.manhuadao.cn%2Flogin.html%3Flogintype%3Dweibo%26backurl%3Dhttps%253A%252F%252Fm.manhuadao.cn%252Ffavorite.html%253Fcpid%253D0&cpid=0"
          class="login-weibo"
        ></router-link>
      </div>
    </footer>
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
  height: 20.8744rem;
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
    margin-top: 8rem;
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
  .login-main {
    box-sizing: border-box;
    width: 24.864rem;
    margin: 1rem auto;
    padding: 0 2rem;

    .font-24 {
      font-size: 0.78rem;
    }
    .password {
      margin: 0.8rem 0 0;
    }

    .input-group {
      display: flex;
      align-items: center;
      padding: 0 0 0.24rem;
      border-bottom: 1px solid #ddd;
      position: relative;
      margin: 2rem 0 0;

      input {
        border: none;
        outline: none;
      }
      .forget {
        color: #5094f9;
        position: absolute;
        right: 0;
      }
    }
    .login-btn {
      height: 2.4rem;
      margin: 1.2rem 0 0;
      line-height: 2.4rem;
      text-align: center;
      color: #fff;
      background-color: #ff4c17;
      border-radius: 6px;
    }
  }
  .login-third {
    box-sizing: border-box;
    width: 10rem;
    margin: 0.74666667rem auto;
    padding: 0 1rem;
    position: relative;
    font-size: 0.68rem;

    .third-title {
      width: 10rem;
      // margin: auto;
      text-align: center;
      background-color: #fff;
      position: absolute;
      z-index: 999;
      top: -0.18666667rem;
      left: 0;
      right: 0;
    }
    .third-group {
      width: 15rem;
      display: flex;
      // justify-content: space-around;
      // -webkit-box-align: center;
      // align-items: center;
      text-align: center;
      padding: 3rem 0.06666667rem 0;

      .login-qq {
        width: 4rem;
        height: 4rem;
        background: url(../../../public/img/qq.png) no-repeat;
        background-size: contain;
        padding-right: 2rem;
      }

      .login-weibo {
        width: 4rem;
        height: 4rem;
        background: url(../../../public/img/weibo.png) no-repeat;
        background-size: contain;
        padding-right: 2rem;
      }
    }
  }
}
</style>

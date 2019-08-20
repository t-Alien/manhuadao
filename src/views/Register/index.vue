<template>
  <!-- register 注册组件页面 -->
  <div class="page-register">
    <header class="header-photo">
      <router-link class="icon-back" to="/login"></router-link>
      <div class="header-pic"></div>
    </header>
    <section class="register-main">
      <p class="input-group font-24">
        <label>
          邮
          <span class="hide">邮箱</span>
          箱：
        </label>
        <input type="text" placeholder="请输入你的邮箱" />
      </p>
      <p class="input-group font-24 password">
        <label>
          密
          <span class="hide">密码</span>
          码：
        </label>
        <input type="password" placeholder="请设置6-16位的字母、数字、符号的密码" />
      </p>
      <p class="input-group font-24 password">
        <label>确认密码：</label>
        <input type="password" placeholder="请再次输入你的密码" />
      </p>
      <div class="register-btn font-26">注册</div>
    </section>
    <footer class="register-footer">
      <p class="content font-24">
        已有账号？马上
        <router-link to="/login" class="go-login">登录</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss">
.page-register {
  width: 100%;
  height: 22.8744rem;
  padding: 1.29333333rem 0 0;
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
  .register-main {
    box-sizing: border-box;
    width: 24.864rem;
    margin: 2.1rem auto;
    padding: 0 2rem;

    .font-24 {
      font-size: 0.78rem;
    }

    .input-group {
      display: flex;
      align-items: center;
      padding: 0 0 0.22rem;
      border-bottom: 1px solid #ddd;
      position: relative;

      .hide {
        color: #fff;
      }
      input {
        width: 15.5298rem;
        border: none;
      }
    }
    .password {
      margin: 1.6rem 0 0;

      .input-group {
        display: flex;
        align-items: center;
        padding: 0 0 0.13333333rem;
        border-bottom: 1px solid #ddd;
        position: relative;
      }
    }
    .register-btn {
      height: 2.4rem;
      margin: 1.6rem 0 0;
      line-height: 2.4rem;
      text-align: center;
      color: #fff;
      background-color: #ff4c17;
      border-radius: 6px;
    }
  }
  .register-footer {
    box-sizing: border-box;
    width: 10rem;
    margin: 0 auto;
    // padding: 0 0.1rem 1rem;
    font-size: 0.8rem;
    margin-right: 2.4rem;
  }
  .content {
    text-align: right;
  }
  .go-login {
    color: #5094f7;
    width: 3rem;
    height: 1.6rem;
  }
}
</style>

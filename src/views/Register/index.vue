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
        <input type="text" placeholder="请输入你的邮箱" v-model="userInfo.user" class="input" @blur="a" />
      </p>
      <span class="tiShi">{{tiShi.tishi1}}</span>
      <p class="input-group font-24 password">
        <label>
          密
          <span class="hide">密码</span>
          码：
        </label>
        <input
          type="password"
          placeholder="请设置6-16位的字母、数字、符号的密码"
          v-model="userInfo.password1"
          class="input"
          @blur="b"
        />
      </p>
      <span class="tiShi">{{ tiShi.tishi2 }}</span>
      <p class="input-group font-24 password">
        <label>确认密码：</label>
        <input
          type="password"
          placeholder="请再次输入你的密码"
          v-model="userInfo.password2"
          class="input"
          @blur="c"
        />
      </p>
      <span class="tiShi">{{ tiShi.tishi3}}</span>
      <div class="register-btn font-26" id="btd" @click="flag" :disabled="btn">注册</div>
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
  name: 'Register',

  data() {
    return {
      isReturn: false,
      btn: false,
      tiShi: {
        tiShi1: '',
        tishi2: '',
        tishi3: ''
      },
      userInfo: {
        user: '',
        password1: '',
        password2: ''
      },
      userArr: []
    }
  },

  methods: {
    //用户名
    a() {
      this.tiShi.tishi1 = ''
      this.isReturn = true
      var a = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //小写字母组成
      if (!this.userInfo.user) this.tiShi.tishi1 = '邮箱名不能为空!'
      else if (!a.test(this.userInfo.user)) {
        this.isReturn = true
        this.tiShi.tishi1 = '你输入的邮箱格式有误噢!'
      }
    },
    //密码
    b() {
      this.tiShi.tishi2 = ''
      this.isReturn = true
      var p = /^[a-zA-Z\d]{6,16}$/
      if (!this.userInfo.password1) {
        this.isReturn = true
        this.tiShi.tishi2 = '密码不能为空!'
      } else if (!p.test(this.userInfo.password1)) {
        this.isReturn = true
        this.tiShi.tishi2 = '请输入6~16位的密码组合！'
      }
    },
    //第二遍密码
    c() {
      this.tiShi.tishi3 = ''
      this.isReturn = true
      var p = /^[a-zA-Z\d]{6,16}$/
      if (!this.userInfo.password2) {
        this.isReturn = true
        this.tiShi.tishi3 = '密码不能为空!'
      } else if (!p.test(this.userInfo.password2)) {
        this.isReturn = true
        this.tiShi.tishi3 = '请输入6~16位的密码组合！'
      }
      if (this.userInfo.password1 != this.userInfo.password2) {
        this.isReturn = true
        this.tiShi.tishi3 = '您输入的两次密码不一致噢！'
      }
    },

    flag() {
      //alert(1)
      this.tiShi.tishi1 = ''
      this.tiShi.tishi2 = ''
      this.tiShi.tishi3 = ''

      //用户名
      var a = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //小写字母组成
      if (!this.userInfo.user) {
        this.tiShi.tishi1 = '邮箱名不能为空!'
        this.isReturn = true
      } else if (!a.test(this.userInfo.user)) {
        this.isReturn = true
        this.tiShi.tishi1 = '你输入的邮箱格式有误噢!'
      }
      if (window.localStorage.userArr) {
        var array = JSON.parse(window.localStorage.userArr)
      } else {
        array = []
      }
      //遍历数组进行匹配
      for (var i = 0; i < array.length; i++) {
        //判断是否有相同账号
        console.log(array)
        /*alert(array[i].username)*/
        if (this.userInfo.user == array[i].username) {
          alert('该账号已存在')
          /*this.tiShi.tiShi1='该账号已存在';*/
          return
        }
      }
      //字母开头 ，由字母+数字组成
      var p = /^[a-zA-Z\d]{6,16}$/
      if (!this.userInfo.password1) {
        this.isReturn = true
        this.tiShi.tishi2 = '密码不能为空'
      } else if (!p.test(this.userInfo.password1)) {
        this.isReturn = true
        this.tiShi.tishi2 = '请输入6~16位的密码组合！'
      }
      //确认密码
      if (!this.userInfo.password2) {
        this.isReturn = true
        this.tiShi.tishi3 = '密码不能为空'
      } else if (!p.test(this.userInfo.password2)) {
        this.isReturn = true
        this.tiShi.tishi3 = '请输入6~16位的密码组合！'
      }
      if (this.userInfo.password1 != this.userInfo.password2) {
        this.isReturn = true
        this.tiShi.tishi3 = '您输入的两次密码不一致'
      }

      //创建对象
      var obj = {
        username: this.userInfo.user,
        password: this.userInfo.password1,
        number: this.userInfo.num,
        name: this.userInfo.name,
        address: this.userInfo.address
      }
      array.push(obj)
      window.localStorage.userArr = JSON.stringify(array) //把内容转换成字符串形式
      localStorage.setItem('userArr', window.localStorage.userArr)
    }
  }
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
    .tiShi {
      color: red;
      font-size: 0.8rem;
    }

    .input-group {
      display: flex;
      align-items: center;
      padding: 0 0 0.8rem;
      border-bottom: 1px solid #ddd;
      position: relative;

      .hide {
        color: #fff;
      }
      input {
        width: 15.5298rem;
        outline: none;
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

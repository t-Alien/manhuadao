<template>
  <!--favorite 收藏组件页面 -->
  <div class="page-favorite">
      <History></History>
      <div class="login-font">
        <p>登录就可以看见收藏过的漫画啦</p>
        <div class="login-btn" @click='toLogin'>登录</div>
        <img src="../../../public/img/zz.png" alt="">
      </div>

      <Hot :detas='detailList'></Hot>
  </div>
</template>

<script>
import History from '../../componets/History'
import Hot from '../../componets/Hot'
import request from '../../utils/request'

export default {
  components: {
    Hot,
    History,
    
  },
  data(){
    return{
      detailList:[] 
    }
  },
  methods:{
    toLogin(){
      this.$router.push('/login')
    },

    getList(){
      request.get('https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1').then(response=>{
        if(response.code===200){
          this.detailList=response.info[3].comicslist
        }
      })
    }
  },
  created(){
    this.getList();
  }
}
</script>

<style lang='scss'>
  .login-font{
    text-align: center;
    p{
      font-size: 14px;
      padding: 18px 0;
    }
    .login-btn{
      background: #e7370c;
      color: white;
      height: 25px;
      width: 88px;
      margin: 0 auto;
      border-radius: 6px;
      line-height: 25px;
      font-size: 13px;
    }
    img{
      height: 121px;
      width: 114px;
      padding: 10px 0;
    }
  }
</style>

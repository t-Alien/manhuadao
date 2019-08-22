<template>
  <!-- history 历史组件页面 -->
  <div class="page-history">
    <History></History>
    <div class="history-font">
      <img src="../../../public/img/zz.png" alt="">
      <p>还未欣赏过任何漫画哦~</p>
    </div>
    <Hot :detas='detailList1'></Hot>
  </div>
</template>

<script>
import Hot from '../../componets/Hot'
import History from '../../componets/History'
import request from '../../utils/request'
export default {
  components:{
    History,
    Hot,
  },
  data(){
    return{
      detailList1:[] 
    }
  },
  methods:{
    getList(){
      request.get('https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1').then(response=>{
        if(response.code===200){
          this.detailList1=response.info[12].comicslist
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
  .history-font{
    text-align: center;
    margin-bottom: 20px;
    img{
      height: 121px;
      width: 114px;
      padding: 25px 0;
    }
  }
</style>

<template>
  <!-- search 搜索组件页面 -->
  <div class="page-search">
    <div class="search-header">
      <div class="back" @click='back'><i class="iconfont icon-fanhui"></i></div>
      <van-search  placeholder="漫画名/作者^_^" />
      <a class="btn">搜索</a>
    </div>
    <div class="hot-hot">
      <div class="hot-title">
        <p>大家都在搜</p>
        <i class="iconfont icon-shuaxin"><span @click="refresh">刷新</span></i>
      </div>
      <ul>
        <li v-for='item in hotList' :key='item.id' :ref="'hot'+item.id" @click='addTag(item.id)'>{{item.keyword}}</li>
      </ul>
    </div>
    <div class="search-history">
      <div class="search-ht">
        <p>最近搜索</p>
        <i class="iconfont icon-xiazai14" @click="del"></i>
      </div>
      <ul>
        <li v-for='(item,index) in searchList' :key='index'>
          <i class="iconfont icon-shizhong"></i>{{item}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import request from '../../utils/request'
import { Search } from 'vant';

export default {
  data(){
    return {
      arr: [],
      hotList:[],
      searchList: [] ,
    }
  },

  created(){
    this.getHot();
    this.refresh();
    this.searchList = localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search')) : [];
  },

  methods:{
    

    back(){
      this.$router.back();
    },
    //请求热搜关键字数据
    getHot(){
      request.get('https://mhd.zhuishushenqi.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8')
      .then(response=>{
        if(response.code===200){
          this.hotList = response.info.hotWordsList;
        }
      })
    },

    refresh(){
      this.getHot();
    },
    //添加操作
    addTag(st){
      let txt = this.$refs[`hot${st}`][0].innerHTML;
      if(this.searchList.indexOf(txt)===-1){
        this.searchList.push(txt);
        localStorage.setItem('search',JSON.stringify(this.searchList))
      }
      
      this.$router.push('/vip')
    },

    del(){
      localStorage.removeItem('search');
      this.searchList=[];
    },
    
  },
  
}
</script>

<style lang='scss'>
@import '../../assets/styles/common/mixin.scss';
  p-common{
    color: #8b8b8b;
    font-size: 12px;
    height: 38px;
    line-height: 38px;
  }
  .search-header{
    height: 45px;
    line-height: 45px;
    background: #e7370c;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    box-sizing: border-box;
    .back{
      display: inline-block;
      color: white;
      i{font-size: 20px;}
    }
    .van-search{
      width: 260px;
      display: inline-block;
      background: #e7370c!important;
      .van-search__content{
        height: 29px;
      }
    }
    .btn{
      display: inline-block;
      color: white;
    }
  }
  .hot-hot{
    padding: 0 10px;
    .hot-title{
      display: flex;
      justify-content: space-between;
    }
    p{
      display: inline-block;
    }
    .icon-shuaxin{
      line-height: 36px;
      color: #8b8b8b;
      font-size: 17px;
    }
    span{
      color: #8b8b8b;
      font-size: 14px;
    }
    p{
      @extend p-common;
    }
    ul{
      overflow: hidden;
      li{
        float: left;
        border: 1px solid #ddd;
        padding: 5px 10px;
        margin:0 14px 8px 0;
        border-radius: 20px;
        font-size: 14px;
      }
    }
  }
  .search-history{
    padding: 10px 15px;
    .search-ht{
      display: flex;
      justify-content: space-between;
      @include border-bottom;
    }
    p{
      @extend p-common;
    }
    .icon-xiazai14{
      font-size: 17px;
      color: #8b8b8b;
      line-height: 40px;
    }
    li{
      font-size: 14px;
      line-height: 40px;
      height: 40px;
      @include border-bottom;;
      .icon-shizhong{
        color: #8b8b8b;
        font-size: 17px;
      }
    }
  }
 
</style>

<template>
  <!-- classify 分类组件页面 -->
  <div class="page-classify">
    <div class="header-normal">
      <div class="header-back"></div>
      <span class="header-title font-32">分类</span>
      <div class="header-search"></div>
    </div>
    <div class="header-type">
      <div class="item active" v-for="(item,index) in list" :key="index">{{item}}</div>
    </div>
    <section class="classify-list">
      <div class="list-item" v-for="(item,index) in Classify" :key="index">
        <div class="item-pic">{{item.hellokid}}</div>
        <div class="item-info">
          <div class="info-book font-30">{{item.hellokid.title}}</div>
          <div class="info-author font-26">作者：{{item.hellokid.author}}</div>
          <div class="info-fans font-26">人气 {{item.hellokid.popularity}}</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue'
import request from '../../utils/request'
import { Button } from 'vant'
Vue.use(Button)
export default {
  name: 'Classify',
  data() {
    return {
      list: ['热血', '恋爱', '搞笑', '魔幻', '悬疑', '少儿'],
      Classify: {},
      hellokid: {},
      laugh: {},
      love: {},
      magical: {},
      suapense: {},
      warmBlood: {}
    }
  },
  methods: {
    getdata() {
      request
        .get('/classify')
        .then(data => {
          console.log(data)
          // this.Classify = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {
    this.getdata()
  }
}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
html * {
  outline: 0;
}
body,
html {
  min-height: 100%;
  overflow-x: hidden;
}
.page-classify {
  .header-normal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: 45px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;

    .header-back {
      width: 23px;
      height: 13px;
      background: url(../../../public/img/back.png) no-repeat;
      background-size: cover;
      position: absolute;
      top: 16px;
      left: 12px;
    }
    .header-title {
      max-width: 70%;
      color: #333;
      font-weight: 500;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
    }
    .header-search {
      width: 21px;
      height: 21px;
      position: absolute;
      top: 12px;
      right: 12px;
      background: url(../../../public/img/search.png) no-repeat;
      background-size: contain;
    }
  }
  .header-type {
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    margin: 0 auto;
    padding: 10px 0;
    border-bottom: 1px solid #dbd9dc;
    .item {
      width: 20%;
      font-size: 14px;
      line-height: 25px;
      text-align: center;
    }
  }
  .classify-list {
    width: 350px;
    margin: 0 auto;
    .list-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 100%;
      height: 125px;
      padding: 0 0 0 10px;
      border-bottom: 1px solid #dbd9dc;
      position: relative;
    }
    .list-item .item-pic {
      width: 80px;
      height: 105px;
      border-radius: 6px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
    .list-item .item-info {
      max-width: 70%;
      margin: 0 0 0 10px;
      color: #999;
      .info-book {
        margin: 0 0 20px;
        color: #333;
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .info-author {
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 0 20px;
      }
      .info-fans {
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}

.font-32 {
  font-size: 16px;
}
.font-30 {
  font-size: 15px;
}
.font-26 {
  font-size: 13px;
}
</style>

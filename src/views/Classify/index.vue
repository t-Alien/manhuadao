<template>
  <!-- classify 分类组件页面 -->
  <div class="page-classify">
    <TabBar v-show="isShow" />
    <div class="header-normal">
      <div class="header-back" @click="back"></div>
      <span class="header-title font-32">分类</span>
      <router-link class="header-search" to="/search"></router-link>
    </div>
    <ul class="header-type">
      <li v-for="item in list" :key="item.type" class="item">
        <a @click="onChange(item)" :class="item.type === curType ? 'active' : ''">{{item.name}}</a>
      </li>
    </ul>
    <ClassifyList :classifyList="classifyList" />
  </div>
</template>
<script>
import Vue from 'vue'
import request from '../../utils/request'
import { NavBar } from 'vant'
import ClassifyList from '../../components/ClassifyList'
Vue.use(NavBar)
export default {
  name: 'Classify',

  data() {
    return {
      classifyList: [],
      list: [
        { name: '热血', type: 'warmBlood' },
        { name: '恋爱', type: 'love' },
        { name: '搞笑', type: 'laugh' },
        { name: '魔幻', type: 'magical' },
        { name: '悬疑', type: 'suapense' },
        { name: '少儿', type: 'helloKid' }
      ],
      curType: 'warmBlood',
      isShow: false
    }
  },
  components: {
    ClassifyList
  },
  methods: {
    back() {
      this.$router.back()
    },

    onChange(item) {
      this.curType = item.type
      this.getDate()
    },
    getDate() {
      request.get('/classify').then(res => {
        this.classifyList = res[this.curType]
      })
    },
    handleScroll(e) {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 120) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    fatherMethod() {
      document.documentElement.scrollTop = 0
    }
  },
  created() {
    this.getDate()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll) //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>
 <style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.page-classify {
  height: 100%;
  flex-direction: column;
  .header-normal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
      right: 16px;
      background: url(../../../public/img/search.png) no-repeat;
      background-size: contain;
    }
  }
  .header-type {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0 0 15px;
    border-bottom: 1px solid #dbd9dc;
    .item {
      width: 20%;
      font-size: 14px;
      line-height: 25px;
      text-align: center;
      .active {
        color: #e7370c;
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

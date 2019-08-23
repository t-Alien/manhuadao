<template>
  <!-- more 更多组件页面 -->
  <div class="page-more">
    <TabBar v-show="isShow" />
    <div class="header-rank">
      <div class="header-back" @click="moreBack"></div>
      <span>{{moreName}}</span>
      <router-link class="header-search" to="/search"></router-link>
    </div>
    <RankingList :rankingList="rankingList" />
  </div>
</template>

<script>
import Vue from 'vue'
import RankingList from '../../components/RankingList'
import request from '../../utils/request'

export default {
  name: 'More',
  data() {
    return {
      rankingList: [],
      moreName: null,
      isShow: false,
      curType: 'Popular'
    }
  },
  components: {
    RankingList
  },
  methods: {
    //获取动态路由的参数
    getRouter() {
      console.log(this.$route.params)
      console.log(this.$route.query)
      this.moreName = this.$route.query.name
      this.curType = this.$route.params.id
    },
    // 获取数据
    getList() {
      request.get('/db/more').then(res => {
        //console.log(res)
        this.rankingList = res[this.curType]
      })
    },
    moreBack() {
      this.$router.back()
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
    this.getRouter()
    this.getList()
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
html,
body {
  height: 100%;
}
.page-more {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header-rank {
    display: flex;
    justify-content: space-between;
    min-height: 46px;
    padding: 0 10px;
    align-items: center;
    .header-back {
      width: 24px;
      height: 14px;
      background: url('../../../public/img/back.png') no-repeat;
      background-size: contain;
    }
    .header-search {
      width: 24px;
      height: 20px;
      background: url('../../../public/img/search.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>


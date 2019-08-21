<template>
  <!-- ranking 排行组件页面 -->
  <div class="page-ranking">
    <div class="header-rank">
      <div class="header-back" @click="rangkingBack"></div>
      <span>排行榜</span>
      <div class="header-search"></div>
    </div>
    <ul class="ranking-list">
      <li v-for="item in list" :key="item.id" class="ranking-bank">
        <a @click="onChange(item)" :class="item.type === curType ? 'active-link':''">{{item.name}}</a>
      </li>
    </ul>
    <RankingList :rankingList="rankingList" />
  </div>
</template>

<script>
import RankingList from '../../components/RankingList'
import request from '../../utils/request'

export default {
  name: 'Ranking',
  data() {
    return {
      rankingList: [],
      list: [
        { name: '热搜榜', type: 'hotSearch' },
        { name: '人气榜', type: 'popularity' },
        { name: '畅销榜', type: 'hotSale' },
        { name: '新书榜', type: 'newBook' },
        { name: '完结榜', type: 'end' },
        { name: '免费榜', type: 'free' }
      ],
      curType: 'hotSearch'
    }
  },
  components: {
    RankingList
  },
  methods: {
    // 获取数据
    getList() {
      request.get('/ranking').then(res => {
        // console.log(res)
        this.rankingList = res[this.curType]
      })
    },
    rangkingBack() {
      this.$router.back()
    },
    onChange(item) {
      this.curType = item.type
      this.getList()
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
.page-ranking {
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

  .ranking-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    .ranking-bank {
      width: 20%;
      font-size: 15px;
      line-height: 28px;
      text-align: center;
      a {
        color: #333;
      }
      .active-link {
        color: #e7370c;
      }
    }
  }
}
</style>

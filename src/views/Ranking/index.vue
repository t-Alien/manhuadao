<template>
  <!-- ranking 排行组件页面 -->
  <div class="page-ranking">
    <div class="header">
      <div class="header-back" @click="rangkingBack">返回</div>
      <span>排行榜</span>
      <div class="header-search">搜索</div>
    </div>
    <div class="ranking-bank">
      <ul class="ranking-list">
        <li v-for="item in list" :key="item.id">
          <!-- <router-link
            to="#"
            @click="fn1(item)"
           :class="item.id==liu ? 'active-link':''"
          >{{item.name}}</router-link>-->
          <router-link
            to="/"
            @click="fn1(item)"
            :class="item.id==liu ? 'active-link':''"
          >{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <RankingList />
  </div>
</template>

<script>
import RankingList from '../../components/RankingList'
export default {
  name: 'Ranking',
  data () {
    return {
      list: [
        { id: 1, name: '热搜榜' },
        { id: 2, name: '人气榜' },
        { id: 3, name: '畅销榜' },
        { id: 4, name: '新书榜' },
        { id: 5, name: '完结榜' },
        { id: 6, name: '免费榜' }
      ],
      liu: ''
    }
  },
  components: {
    RankingList
  },
  methods: {
    rangkingBack () {
      this.$router.back()
    },
    fn1 (item) {
      console.log(item)
      this.liu = item.id
    }
  }
}
</script>

<style lang="scss">
.page-ranking {
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    min-height: 2rem;
    padding: 0 0.5rem;
    align-items: center;
  }
  .ranking-bank {
    .ranking-list {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0;
      li {
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
}
</style>

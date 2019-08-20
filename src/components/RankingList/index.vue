<template>
  <div class="ranking-list">
    <ul class="ranking-list-ul">
      <li class="ranking-list-item" v-for="item in rankingList" :key="item.id">
        <a href="#">
          <div class="ranking-list-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="ranking-list-info">
            <h3>{{item.title}}</h3>
            <p>作者：{{item.author}}</p>
            <p>人气：{{item.popularity}}</p>
          </div>
          <div class="ranking-list-start">
            <img
              src="data:image/png;base64,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"
              alt
            />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'RankingList',
  data() {
    return {
      rankingList: []
    }
  },
  methods: {
    getRankingList() {
      request.get('/ranking', {}).then(data => {
        //console.log(response.data)
        this.rankingList = data.popularity
        //this.rankingList = data[xxx]
      })
    }
  },

  created() {
    this.getRankingList()
  }
}
</script>>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.ranking-list {
  flex: 1;
  .ranking-list-ul {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .ranking-list-item {
    height: 94px;
    padding: 10px 10px 10px 10px;
    @include border-bottom;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      text-decoration: none;
      justify-content: space-around;
      align-items: center;
    }
    .ranking-list-img {
      width: 66px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
    .ranking-list-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      padding: 0 10px;

      h3 {
        color: #333;
        font-size: 14px;
        font-weight: 500;
      }
      p {
        color: #999;
        font-size: 12px;
      }
    }
    .ranking-list-start {
      width: 50px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

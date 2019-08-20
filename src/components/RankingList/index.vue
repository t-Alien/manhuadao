<template>
  <div class="rank-list">
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
            <img :src="item.start ? item.start : ''" alt />
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
  props: {
    rankingList: Array
  }
}
</script>>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.rank-list {
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

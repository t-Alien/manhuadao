<template>
  <!-- vip VIP专区组件页面 -->
  <div class="page-vip">
    <div class="header">
      <div class="header-back" @click="vipBack">返回</div>
      <span>VIP专区</span>
      <div class="header-search">搜索</div>
    </div>
    <div class="vip-list">
      <ul class="vip-list-ul">
        <li v-for="item in vipList" :key="item.id" class="vip-list-item">
          <a href="#">
            <div class="vip-list-img">
              <img :src="item.imgUrl" alt />
            </div>
            <div class="vip-list-info">
              <h3>{{item.title}}</h3>
              <p>作者：{{item.author}}</p>
              <p>人气：{{item.popularity}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'

export default {
  name: 'vip',
  data() {
    return {
      vipList: []
    }
  },
  methods: {
    getVipList() {
      request.get('/vip').then(data => {
        //console.log(response.data)
        this.vipList = data
      })
    },
    vipBack() {
      this.$router.back()
    }
  },

  created() {
    this.getVipList()
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.page-vip {
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
  .vip-list {
    flex: 1;
    .vip-list-ul {
      display: flex;
      flex-direction: column;
    }
    .vip-list-item {
      height: 94px;
      padding: 10px 0 10px 10px;
      @include border-bottom;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }
      .vip-list-img {
        width: 66px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
      .vip-list-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
    }
  }
}
</style>


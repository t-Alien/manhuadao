<template>
  <!-- vip VIP专区组件页面 -->
  <div class="page-vip">
    <TabBar ref="Model" @click="scroll" />
    <div class="header-vip">
      <div class="header-back" @click="vipBack"></div>
      <span>VIP专区</span>
      <div class="header-search"></div>
    </div>
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
</template>

<script>
import request from '../../utils/request'
// import TabBar from '../../components/TabBar'
export default {
  name: 'vip',
  data() {
    return {
      vipList: [],
      isShow: false
    }
  },
  // components: {
  //   TabBar
  // },
  methods: {
    getVipList() {
      request.get('/vip').then(data => {
        // console.log(response.data)
        this.vipList = data
      })
    },
    vipBack() {
      this.$router.back()
    },
    ChangeModel() {
      this.$refs.Model.show()
    },
    scroll() {}
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
  .header-vip {
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
  .vip-list-ul {
    // margin-top: 46px;
    flex: 1;
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
</style>

<template>
    <div class="history-header">
      <img src="../../../public/img/back.png" alt="" @click='back'>
      <div class="history-title">
        <router-link to='/favorite' tag='span' router-link-active>收藏</router-link>
        <router-link to='/history' tag='span'>历史</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'History',
  methods:{
      back(){
      this.$router.back();
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
  .history-header{
    @include border-bottom;
    height: 45px;
    line-height: 45px;
    text-align: center;
    position: relative;
    .history-title{
      text-align: center;
      span{
        padding: 10px 10px;
      }
      .router-link-active{
        border-bottom: 3px solid #e7370c;
        color: #e7370c;
      }
    }
    img{
      height: 13px;
      width: 23px;
      position: absolute;
      top: 16px;
      left: 15px;
    }
  }
</style>

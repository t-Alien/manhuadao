<template>
<div class="page-main">
    <div class="index-item">
        <div class="title-group">
            <h2>人气推荐</h2>
            <span>更多></span>
        </div>
        <ul class="recommend">
            <li class="item">
               <img src="https://img.manhuadao.cn/upload/BigBook201907/7d0d392fb24c4a47b35fd914a21234d8.jpg">
               <p>小尸妹</p>
               <p>诡异的表妹是通灵师</p> 
            </li>
            <li class="item">
               <img src="https://img.manhuadao.cn/upload/BigBook201907/7d0d392fb24c4a47b35fd914a21234d8.jpg">
               <p>小尸妹</p>
               <p>诡异的表妹是通灵师</p> 
            </li>
            <li class="item">
               <img src="https://img.manhuadao.cn/upload/BigBook201907/7d0d392fb24c4a47b35fd914a21234d8.jpg">
               <p>小尸妹</p>
               <p>诡异的表妹是通灵师</p> 
            </li>
            <li class="item">
               <img src="https://img.manhuadao.cn/upload/BigBook201907/7d0d392fb24c4a47b35fd914a21234d8.jpg">
               <p>小尸妹</p>
               <p>诡异的表妹是通灵师</p> 
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name:'Content',

}
</script>


<style lang='scss'>
@import '../../assets/styles/common/mixin.scss';
   .index-item{
        @include border-home;
    .title-group{
        height: 24px;
        position: relative;
        padding: 20px 0;
        h2{
            color: #3a3a3a;
            text-align: center;
        }
        span{
           color: #b0b0b0;
           font-size: 7px;
           position: absolute;
           top: 22px;
           right: 24px;
        }
    }
    .recommend{
        .item{
            height:218px ;
            width: 173px;
            float: left;
            img{
                height:173px;
                width: 173px;
            }
            p:nth-of-type(1){
                color: #3a3a3a;
                margin: 0 0 5px;
                font-size: 14px;
            }
            p:nth-of-type(2){
                color: #8d8d8d;
                font-size: 12px;
            }
        }
    }
   }

    

</style>

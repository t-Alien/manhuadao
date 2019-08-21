<template>
<div class="page-main">
    <div class="index-item" >
        <div class="title-group">
            <h2>人气推荐</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommend">
            <li class="item" v-for='item in dets[0] && dets[0].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-itemo">
        <div class="title-group">
            <h2>独家首发</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <div class="recommendo">
            <ul class="ullist">
               <li class="itemo" v-for='item in dets[1] && dets[1].comicslist' :key='item.bigbook_id'>
               <div class="img_wraps"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
               </li>
            </ul>
        </div>
    </div>
    <div class="index-item">
        <div class="title-group">
            <h2>VIP专区</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommend">
            <li class="item" v-for='item in dets[2] && dets[2].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>

            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>强力推荐</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[3] && dets[3].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>燃烧吧热血</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[4] && dets[4].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>少女恋爱系</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[5] && dets[5].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>完结神作</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[6] && dets[6].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>恐怖灵异馆</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[7] && dets[7].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>轻松搞笑风</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[8] && dets[8].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-item">
        <div class="title-group">
            <h2>福利专区</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommend">
            <li class="item" v-for='item in dets[9] && dets[9].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>

            </li>
        </ul>
    </div>
    <div class="index-item">
        <div class="title-group">
            <h2>魔幻奇谈</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommend">
            <li class="item" v-for='item in dets[10] && dets[10].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>

            </li>
        </ul>
    </div>
    <div class="index-item">
        <div class="title-group">
            <h2>小编推荐</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommend">
            <li class="item" v-for='item in dets[11] && dets[11].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>

            </li>
        </ul>
    </div>
    <div class="index-itemt">
        <div class="title-group">
            <h2>大家都在看</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendt">
            <li class="itemt" v-for='item in dets[12] && dets[12].comicslist' :key='item.bigbook_id'>
               <div class="img-wrap"><img :src="item.coverurl"></div>
               <p>{{item.bigbook_name}}</p>
               <p>{{item.key_name}}</p>
            </li>
        </ul>
    </div>
    <div class="index-iteml">
        <div class="title-group">
            <img src="http://img.manhuadao.cn/upload/icon/180208/ic_renqi2.png" alt="">
            <h2>一周热门排行</h2>
            <router-link to='/more' tag='span'>更多></router-link>
        </div>
        <ul class="recommendl">
            <li class="iteml" v-for='item in dets[13] && dets[13].comicslist' :key='item.bigbook_id' >
               <div class="img-wrapl">
                   <img :src="item.coverurl">
                </div>
               <div class="right">
                    <h4>{{item.bigbook_name}}</h4>
                    <p>作者: <span>{{item.bigbook_author}}</span></p>
                    <p>{{item.brief}}</p>
               </div>
            </li>
        </ul>

    </div>

</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Content',
  props: {
    dets: Array
  }
}
</script>

<style lang='scss'>
@import '../../assets/styles/common/mixin.scss';
.title-group{
    height: 24px;
    position: relative;
    padding: 20px 0;
    text-align: center;
    h2{
        color: #3a3a3a;
        text-align: center;
        padding-top: 8px;
        display: inline-block;
    }
    span{
        color: #b0b0b0;
        font-size: 7px;
        position: absolute;
        top: 31px;
        right: 24px;
    }
}
p1_common{
    color: #3a3a3a;
    font-size: 14px;
    margin: 4px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 111px;
}
p2_common{
    color: #8d8d8d;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 111px;
}
.index-item{
    @include border-home;
.recommend{
     flex-wrap:wrap;
     display: flex;
     justify-content: space-around;
     padding: 0 5px;
     box-sizing: border-box;
    .item{
       height:218px ;
       width: 173px;
       display: flex;
       justify-content: space-around;
       flex-direction: column;
       margin-bottom: 8px;
        .img-wrap{
            height:173px;
            width: 173px;
            overflow: hidden;
            img{
            width: 100%;
            background-position: 50%;
            background-size: cover;
            }
        }
        p:nth-of-type(1){
        @extend p1_common;
        }
        p:nth-of-type(2){
        @extend p2_common
        }
    }
}
}

.index-itemo{
    @include border-home;
    .recommendo{
    display: flex;
    justify-content: space-around;
    padding: 0 5px;
    box-sizing: border-box;
    .ullist{
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        flex-wrap: wrap;
        box-sizing: border-box;
        li:nth-child(1) .img_wraps{
            height:180px;
            width: 355px;
            overflow: hidden;
            img{
                width: 100%;
                background-position: 50%;
                background-size: cover;
            }
        }
        .itemo{
            margin-bottom: 8px;
            .img_wraps{
                width: 111px;
                height: 148px;
                img{
                width: 100%;
                background-position: 50%;
                background-size: cover;
                }
            }
        }
    }
    p:nth-of-type(1){
        @extend p1_common;
    }
    p:nth-of-type(2){
        @extend p2_common
    }
    }

}
.index-itemt{
@include border-home;
.recommendt{
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex-wrap: wrap;
    .itemt{
        margin-bottom: 8px;
        .img-wrap{
            width: 111px;
            height: 148px;
            img{
                width: 100%;
                background-size: cover;
            }
        }
        p:nth-of-type(1){
            @extend p1_common;
        }
        p:nth-of-type(2){
            @extend p2_common
        }
    }
}
}
.index-iteml{
    @include border-home;
    .title-group img{
        height: 22px;
        width: 22px;
        display: inline-block;
        position: absolute;
        top:27px;
        left: 118px;
    }
    .iteml{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;
        width: 100%;

        .img-wrapl{
            height: 90px;
            width: 153px;
            margin-right: 30px;
            img{
            width: 100%;
            background-size: cover;
            display: block;
            height: 100%;
            object-fit: cover;
            }
        }
        .right{
            h4{
                color: #3a3a3a;
                font-weight: 500;
            }
            p:nth-of-type(1){
            @extend p1_common;
            color:#b0b0b0;
            font-size: 12px;
            margin: 14px 0;
            span{
                color: #e53910;
            }
            }
            p:nth-of-type(2){
            @extend p1_common;
            width: 173px;
            color: #8d8d8d;
            }
        }
    }
}

</style>

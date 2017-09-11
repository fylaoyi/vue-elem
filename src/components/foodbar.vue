<template>
  <div class="food-wrapper">
        <ul>
            <li v-for="item in foodDetail" :key="item.type">
                <h2 class="info-name">{{item.name}}</h2>
                <ul>
                    <li v-for="item1 in item.foods" :key="item1.type" class="food-item">
                        <div class="img-info">
                            <img :src="item1.image" alt="">
                        </div>
                        <div class="content">
                            <h2 class="item-name">{{item1.name}}</h2>
                            <p class="item-des" v-show="item1.description">{{item1.description}}</p>
                            <p class="seller">月售{{item1.sellCount}}份 好评率{{item1.rating}}%</p>
                            <p class="price">￥{{item1.price}}</p>
                            <price class="price-item" :food="item1"></price>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
  </div>
</template>
<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
    import price from './price';
    import BScroll from 'better-scroll'
    export default{
        name:'foodbar',
        computed:mapState(['foodDetail']),
        components:{
            price
        },
        methods:{
            initScroll(e) {
                console.log(e);
            }
        },
        created() {
            var scroll = new BScroll(document.getElementsByClassName('food-wrapper'), {
                click:true
            })
            scroll = scrollToElement(document.getElementsByClassName('food-wrapper'), '5s', 'linear')
        }
    }
</script>


<style scoped>
    .food-wrapper{
        margin-top: 33px;
        flex:1;
    }
    .info-name{
        height: 26px;
        line-height: 26px;
        padding-left: 12px;
        font-size: 12px;
        color: #93999f;
        background: #f3f5f7;
        border-left: 2px solid #d9dde1;
        text-align: left;
    }
    .food-item{
        position: relative;
        display: flex;
        margin: 0 18px;
        padding: 18px 0;
        border-bottom: 1px solid rgba(7,17,27,.1);
    }
    .food-item .img-info{
         float:left;
    }
    .food-item .img-info img{
        width:57px;
        height:57px;
    }
    .food-item .content{
        padding-left:10px;
    }
    .food-item .content .item-name{
        margin: 2px 0 8px;
        font-size: 14px;
        line-height: 14px;
        height: 14px;
        font-weight: 700;
        color: #07111b;
        text-align: left;
        
    }
    .food-item .content p{
        text-align: left;
        /* display: inline-block; */
    }
    .food-item .content .item-des{
        font-size: 10px;
        margin-bottom: 8px;
        line-height: 12px;
    }
    .food-item .content .seller{
        font-size: 10px;
        color: #93999f;
        line-height: 10px;
    }
    .food-item .content .price{
        font-weight: 700;
        line-height: 24px;
        font-size: 14px;
        color: #f01414;
        text-align: left;
    }
    .price-item{
         position: absolute; 
        right:0;
        bottom:12px; 
    }
</style>

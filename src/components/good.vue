<template>
  <div class="good">
        <div class="slider">
            <div class="good-tab" ref="menuWarpper">
                <ul>
                    <li v-for="(item, index) in goods" :key="item.name" :class="{'food': currentIndex === index}" @click="changeClass(index, $event)">
                        <span>{{item}}</span>
                    </li>
                </ul> 
            </div>
    </div> 
    <div class="food-wrapper" ref="foodWarpper">
        <ul>
            <li v-for="item in foodDetail" :key="item.type" class="wrapper">
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
    <shoppingCar></shoppingCar>
  </div>
</template>
<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
    import price from './price';
    import shoppingCar from './shoppingCar'
    import BScroll from 'better-scroll'
    export default{
        name:'good',
        components:{
            shoppingCar,
            price
        },
        computed:{
            ...mapState(['goods', 'foodDetail']),
            currentIndex() {
                for(let i = 0, len = this.heightList.length; i < len; i ++) {
                    let height1 = this.heightList[i],
                        height2 = this.heightList[i + 1];
                    if(!height2 || (this.foodsScrollY >= height1 && this.foodsScrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            }
        },
        data() {
            return {
                heightList:[],
                foodsScrollY:0   
            }
        },
        created() {
            this.$nextTick(()=>{
                this._init();
                this.firstHeight();
            })
            
        },
        methods:{
            _init() {
                this.menuWarpper = new BScroll(this.$refs.menuWarpper, {
                    click:true
                });
                this.foodWarpper = new BScroll(this.$refs.foodWarpper, {
                    click:true,
                    probeType: 3
                });                
                this.foodWarpper.on('scroll', (pos) => {
                    this.foodsScrollY = Math.abs(Math.round(pos.y))
                })
            },
            firstHeight() {
                var foodItem = document.getElementsByClassName('wrapper');
                let height = 0;
                this.heightList.push(height);
                for(var i = 0, len = foodItem.length; i < len; i ++) {
                    height += foodItem[i].clientHeight;
                    this.heightList.push(height);                    
                }
                console.log(this.heightList);
            },
            changeClass(index, $event) {
                if(!$event._constructed) {
                        return;
                }
                var wrapper = document.getElementsByClassName('good-tab')[0];
                
                if(this.heightList.length >= 2) {
                    this.foodWarpper.scrollTo(0, -this.heightList[index], 300);
                }
                               
            }
        }

    }

</script>
<style scoped>
    .good{
        width:100%;
        display: flex;
        z-index: 10;
         overflow-y:hidden; 
    }
    .slider{
        /* position: fixed; */
         width:80px; 
        
    }
    .good-tab{
    
        width:80px;
    }
    .good-tab ul{
        float:left;
        width:80px;
    }
    .good-tab li{
        display: table;
        height: 54px;
        line-height: 14px;
        width: 56px;
        padding: 0 12px;
        border-bottom:1px solid #f2f2f2;
        background: #f3f5f7;
    }
    .good-tab .food{
        background-color: #fff;
    }
    .good-tab li span{
        display: inline-block;
        height:14px;
        font-size: 12px;
        font-weight: 200;
        vertical-align: middle; 
        line-height: 14px;
        display: table-cell;
        color:#000;
    }
    .active{
        background-color: #fff;
    }

    .food-wrapper{
        flex:1;
         height:0px; 
        z-index: -30;
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


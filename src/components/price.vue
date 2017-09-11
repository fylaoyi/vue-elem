<template>
    <div class="price-wrapper">
        <div class="price">
            <div class="reduce" v-show="iconShow" @click.stop.prevent="reduce">
                <i class="icon-remove_circle_outline"></i>
            </div>
            <div class="content" v-show="num > 0">{{num}}</div>
            <div class="add" @click.stop.prevent="add($event)">
                <i class="icon-add_circle"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'price-wrapper',
        props:{
            food:Object
        },
        data() {
            return {
                iconShow:false,
                num:0
            }
        },
        methods:{
            add($event) {
                // if (!event._constructed) {
                //     return
                // }
                console.log(1)
                var nowPrice = this.food.price;
                this.iconShow = true;
                this.num ++;
                var obj = {
                    nowPrice:nowPrice,
                    count:this.num
                };
                this.$store.commit('addPrice', obj);
            },
            reduce() {
                // if (!event._constructed) {
                //     return
                // }
                var nowPrice = this.food.price;
                this.num --;
                if(this.num === 0) {
                    this.iconShow = false;
                }
                var obj = {
                    nowPrice:nowPrice,
                    count:this.num
                };
                this.$store.commit('reducePrice', obj);
            }
        }
    }
</script>
<style lang="less" scoped>
    .price-wrapper{
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 12px;
        height:24px;
        .add, .reduce{
            display: inline;            
            font-size: 24px;
            color: #00a0dc;
            padding: 6px;
        }
        .content{
            // margin-top:-5px;
            display: inline;
            // height:29px;
            // line-height: 29px;
            font-size:20px;
        }
    }
</style>

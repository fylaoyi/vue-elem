<template>
    <div class="shopping-wrapper">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{active:isActive}">
                        <i class="icon-shopping_cart"></i>
                    </div>
                </div>
                <div class="price" :class="{active1:isActive}">￥{{first}}</div>
                <div class="desc">另需配送费4元</div>
            </div>
            <div class="content-right" :class="{active2:first>=20}" @click="giveMoney">
                {{change}}
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'shoppingCar',
        computed:{
            first() {
                return this.$store.state.totalPrice;
            },
            isActive() {
                return this.$store.state.isActive
            },
            change() {
                return this.$store.state.enough
            }

        },
        methods:{
            giveMoney() {
                console.log('确认吗');
            }
        }

    }
</script>
<style lang="less" scoped>
    .shopping-wrapper{
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        height: 48px;
        z-index: 50;
        .content{
            display: flex;
            background: #141d27;
            .content-left{
                flex: 1;
                height: 48px;
                .logo-wrapper{
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    height: 56px;
                    line-height: 56px;
                    border-radius: 50%;
                    width: 56px;
                    top: -10px;
                    background: #141d27;
                    margin: 0 12px;
                    padding: 6px;
                    box-sizing: border-box;
                    text-align: center;
                    .logo{
                        width: 100%;
                        height: 100%;
                        background: #2b343c;
                        border-radius: 50%;
                        font-size: 24px;
                        color: #80858a;
                        line-height: 44px;
                        font-weight: 700;
                    }
                    .active{
                        background: #00a0dc;
                        color:#fff;
                    }
                }

                .desc{
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    margin: 12px 0 0 12px;
                    font-size: 10px;
                    color: hsla(0,0%,100%,.4);
                    font-weight: 700;
                    line-height: 24px;
                }
                .price{
                    display: inline-block;
                    vertical-align: top;
                    font-size: 16px;
                    margin-top: 12px;
                    padding-right: 12px;
                    box-sizing: border-box;
                    color: hsla(0,0%,100%,.4);
                    font-weight: 700;
                    line-height: 24px;
                    border-right: 1px solid hsla(0,0%,100%,.1);
                }
                .active1{
                    color:#fff;
                }
            }
            .content-right{
                width:105px;
                font-size: 12px;
                font-weight: 700;
                background: #2b343c;
                color: hsla(0,0%,100%,.4);
                line-height: 48px;
                text-align: center;
            }
            .active2{
                background: #00b43c;
                color: #fff;
            }
        }
    }
</style>


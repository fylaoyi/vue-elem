<template>
  <div class="store">
      <div class="info">
          <div class="title">
            <h2 class="name">{{storeInfo.name}}</h2> 
            <span class="sell">月售{{storeInfo.sellCount}}单</span>
            <span class="fllow">收藏</span>  
          </div>
        <div class="remark">
            <div class="block">
                <h2>起送价</h2>
                <div class="content">
                    <span class="num">{{storeInfo.minPrice}}</span>元
                </div>
            </div>
            <div class="block">
                <h2>商家配送</h2>
                <div class="content">
                    <span class="num">{{storeInfo.deliveryPrice}}</span>元
                </div>
            </div>
            <div class="block">
                <h2>平均配送时间</h2>
                <div class="content">
                    <span class="num">{{storeInfo.deliveryTime}}</span>分钟
                </div>
            </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="ad">
          <div class="bulletin">
             <h2>公告与活动</h2>
            <div class="content">{{storeInfo.bulletin}}</div>
          </div>
         
      </div>
      <div class="support">
          <ul class="wrapper">
              <li v-for="item in storeInfo.supports" :key="item.type">
                  <span>{{item.description}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:'store',
        computed:{
            storeInfo() {
                return this.$store.state.storeAd;
            }
        }
    }
</script>
<style scoped lang="less">
    .store{
        overflow: hidden;
        .divider{
            height: 16px;
            width: 100%;
            background: #f3f5f7;
            border-top: 1px solid rgba(7, 17, 27, 0.1);
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        }
        .ad{
            padding-top: 18px;
            .bulletin{
                margin: 0 18px;
                border-bottom: 1px solid rgba(7,17,27,.1);
                h2{
                    font-size: 14px;
                    color: #07111b;
                    line-height: 14px;
                    text-align: left;
                }
                .content{
                    padding: 8px 12px 16px;
                    font-size: 12px;
                    font-weight: 200;
                    color: #f01414;
                    line-height: 24px;
                    text-align: left;
                }
            }
        }
        .support{
            margin: 0 18px;
            padding: 16px;
            li{
                border-bottom: 1px solid rgba(7,17,27,.1);
                font-size: 0;
                padding: 16px;
                text-align: left;
                span{
                    font-size: 12px;
                    font-weight: 200;
                    color: #07111b;
                    line-height: 16px;
                }
            }
    
        }
    }
    .store .info{
        padding: 18px 0;
        margin: 0 18px;
        width:100%;
        .title{
            padding-bottom: 18px;
            border-bottom: 1px solid rgba(7,17,27,.1);
            overflow: hidden;
            .name{
                font-size: 14px;
                color: #07111b;
                line-height: 14px;
                text-align: left;
            }
            .sell{
                text-align: left;
                font-size: 10px;
                color: #4d555d;
                line-height: 18px;
                float:left;
                margin-top:8px;
            }
            .fllow{
                float:right;
                // position: absolute;
                // right:0;
                margin-right:36px;
                // display: block;
                font-size: 10px;
                color: #4d555d;
                line-height: 10px;
                padding-top: 4px;
            }
        }
        .remark{
            display: flex;
            .block{
                flex-grow: 1;
                margin-top: 18px;
                text-align: center;
                border-right: 1px solid rgba(7,17,27,.1);
                h2{
                    font-size: 10px;
                    color: #93999f;
                    line-height: 10px;
                    margin-bottom: 4px;
                }
                .content{
                    font-size: 10px;
                    color: #07111b;
                    line-height: 24px;
                    font-weight: 200;
                    margin-top:5px;
                    .num{
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>


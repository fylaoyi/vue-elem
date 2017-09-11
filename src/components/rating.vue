<template>
  <div class="rate-wrapper">
        <div class="store-info">
            <div class="score">
                <div class="num">{{storeInfo.score}}</div>
                <div class="averageNum">
                    综合评分
                </div>
                <div class="rankRate">
                    高于别的商家{{storeInfo.rankRate}}%
                </div>
            </div>
            <div class="stars">
                <div class="serveScore">
                    <span>服务态度</span>
                    <span>{{storeInfo.serviceScore}}</span>
                </div>
                <div class="foodScore">
                    <span>食物分数</span>
                    <span>{{storeInfo.foodScore}}</span>
                </div>
                <div class="deliveryTime">
                    <span>送达时间</span>
                    <span>{{storeInfo.deliveryTime}}分钟</span>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="des">
                <div class="tag">
                    <span v-for="item in des" :key="item.count">{{item.text}}{{item.count}}</span> 
                </div>
                <div class="switch">
                    只查看有内容的评价
                </div>
                <div class="rateList">
                    <ul>
                        <li v-for="item in rateList" :key="item.rateType">
                            <div class="cover">
                                <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
                            </div>
                            <div class="content">
                                <div class="user">{{item.username}}</div>
                                <div class="score">评分{{item.score}}
                                </div>
                                <div class="text">{{item.text}}</div>
                                <div class="recommend" v-show="item.recommend.length > 0">
                                    <span v-for="item1 in item.recommend" :key="item1.rateType">{{item1}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
        
  </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:'rating',
        data() {
            return {
                des:[
                    {
                        text:'全部',
                        count:24
                    },{
                        text:'推荐',
                        count:18
                    },{
                        text:'吐槽',
                        count:6
                    }
                ]
            }
        },
        computed:{
            rateList() {
                return this.$store.state.ratings
            },
            storeInfo() {
                return this.$store.state.storeInfo
            }
        }

    }
</script>
<style scoped>
    .rate-wrapper{
        width:100%;
        box-sizing: border-box;
    }
    .rate-wrapper .store-info{
        display: flex;
    }
    .rate-wrapper .store-info .score{
        flex: 0 0 138px;
        margin: 18px 0;
        border-right: 1px solid rgba(7,17,27,.1);
        text-align: center;
    }
    .rate-wrapper .store-info .num{
        font-size: 24px;
        color: #f90;
        line-height: 28px;
    }
    .rate-wrapper .store-info .averageNum{
        padding: 6px 0 8px;
        font-size: 12px;
        color: #07111b;
        line-height: 12px;
    }
    .rate-wrapper .store-info .rankRate{
        font-size: 10px;
        color: #07111b;
        line-height: 10px;
        margin-bottom: 6px;
    }
    .rate-wrapper .store-info .stars{
         flex: 1; 
        padding: 18px 24px;
    }
    .rate-wrapper .store-info .stars div{
        margin-bottom:8px;
    }
    .rate-wrapper .store-info .stars div span:first-child{
        font-size: 12px;
        color: #07111b;
        line-height: 18px;
        margin-right: 12px;
    }
    .rate-wrapper .store-info .stars div span:nth-child(2) {
        font-size: 12px;
        line-height: 18px;
        color: #f90;
        padding-left: 12px;
    }
   
    .divider{
        height: 16px;
        width: 100%;
        background: #f3f5f7;
        border-top: 1px solid rgba(7, 17, 27, 0.1);
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    .rate-wrapper .des{
        padding: 18px 0 18px 0;
    }
    .rate-wrapper .des .tag{
        padding-bottom: 18px;
        margin: 0 18px;
        border-bottom: 1px solid rgba(7,17,27,.1);
        overflow: hidden;
        display: flex;
        align-items:center;
    }
    .rate-wrapper .des .tag span{
        float:left;
        padding: 8px 12px;
        display: inline-block;
        font-size: 12px;
        line-height: 16px;
        height:16px;
        background: rgba(0,160,220,.2); 
        color: #4d555f;
        margin-right: 8px;
    }
    .rate-wrapper .des .tag span:first-child{
        color: #fff;
        background: #00a9dc;
    }
    .rate-wrapper .des .tag span:nth-child(3) {
        background: rgba(77,85,93,.2);
     }
    .rate-wrapper .des .switch{
        font-size: 12px;
        width: 100%;
        padding: 12px 0 12px 18px;
        color: #93999f;
        border-bottom: 1px solid rgba(7,17,27,.1);
        text-align: left;
    }
    .rateList li{
        width:100%;
        display: flex;
        padding: 18px 0;
        margin: 0 0 0 18px;
        border-bottom: 1px solid rgba(7,17,27,.1);
        justify-content: center;
    }
    .rateList li .cover{
        margin-right: 12px;
        float:left;
    }
    .rateList li .cover img{
        border-radius: 50%;
        width:28px;
        height:28px;
    }
    .rateList li .content{
        width:290px;
    }
    .rateList li .content .user{
        font-size: 10px;
        color: #07111b;
        line-height: 12px;
        text-align: left;
    }
    .rateList li .content .score{
        padding-top: 4px;
        margin-bottom: 6px;
        text-align: left;
        width:62px;
        height:10px;
        font-size: 12px;
    
    }
    .rateList li .content .text{
        font-size: 12px;
        color: #07111b;
        line-height: 18px;
        text-align: left;   
    }
    .rateList li .content .recommend{
        padding-top:4px;
        width:100%; 
        /* display: flex; */
        /* justify-content: center; */
    }  
    .rateList li .content .recommend span{
        float:left;        
        display: inline-block;
        font-size: 9px;
        color: #93999f;
        line-height: 16px;
        border: 1px solid rgba(7,17,27,.1);
        padding: 2px 6px;
        margin-right: 8px;
        white-space: normal;
        margin-top: 4px;
    }  
</style>


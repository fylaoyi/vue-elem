<template>
    <div class="head">
          <div class="content-wrapper">
              <div class="cover">
                  <img :src="store.avatar" alt="" style="width:64px;height:64px">
              </div>
              <div class="content">
                <h4>{{store.name}}</h4>
                <div class="song">
                    <span>{{store.description}}/{{store.deliveryTime}}分钟送达</span>
                </div>
                <div class="pay">
                    <span style="text-align:left;">在线支付满28减5</span>
                </div>
              </div>
          </div>
          <div class="bulletin-wrapper">
              <span>{{store.bulletin}}</span>
          </div>
          <div class="background">  
              <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" style="width:100%;height:100%" alt="">
          </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:'header',
        created() {
            axios.get('static/data.json').
            then((res)=> {
                var response = res.data;
                this.$store.dispatch('addInfo', response);
            })
        },
        computed:{
            store() {
                return this.$store.state.storeAd;
            }
        }
    }
</script>
<style scoped>
    .head{
        width:100%;
        height:135px;
        color:#000;
        overflow: hidden; 
        background:rgba(7,17,27,.5); 
        color:#fff;
    }
    .head .content-wrapper{
        display: flex;
        padding: 24px 12px 18px 24px;
        font-size: 12px;
        justify-content: center;
        align-items: center;
    }
    .head .content-wrapper .cover{
        float: left;
    }
    .head .content-wrapper .content{
        float: left;
        margin-left: 16px;
        width:45%;
    }
    .head .content-wrapper .content h4{
        font-size:16px;

    }
    .head .content-wrapper .content span{
        margin:0 12px 12px 0;
    }
    .head .bulletin-wrapper{
        width:100%;
        background: rgba(7,17,27,.2);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        box-sizing: border-box;
        padding-left:30px; 
        color:#fff;
        padding-top:5px;
    }
    .head .bulletin-wrapper span{
        font-size:12px;
        color:#fff;
    }
    .background{
        position: absolute;
        top:0;
        left:0;
        z-index:-1;
        width:100%;
         height:130px; 
        filter: blur(10px);
    }
    

    
</style>

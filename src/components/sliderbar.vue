<template>
    <div class="slider">
        <div class="good-tab">
            <ul>
                <li v-for="(item, index) in goods" :key="item.name" @click="changeClass(index)">
                    <span>{{item}}</span>
                </li>
            </ul> 
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
    export default{
        name:'slider',
        computed:mapState(['goods']),
        data() {
            return {
                clickFood:false,
                currentIndex:''
            }
        },
        methods:{
            changeClass(index) {
                // console.log(goods);
                // e.stopPropagation();
                var wrapper = document.getElementsByClassName('good-tab')[0];
                var good = wrapper.getElementsByTagName("li");
                // console.log(good);
                // this.currentIndex = index;
                for(let i = 0, len = good.length; i < len; i ++) {
                    good[i].className = "";
                }
                good[index].className = 'food';
                // good.forEach(function(item, index) {
                //     item.removeClass('food')
                // })
                // e.target.className="food";
                // this.clickFood = true;
            }
        }
    }

</script>
<style scoped>
    .slider{
        /* float:left; */
         width:80px; 
        /* flex:1; */
        /* overflow: hidden; */
    }
    .good-tab{
          margin-top:32px;  
        /* color:red; */
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
        
        /* white-space: normal; */
        line-height: 14px;
        display: table-cell;
        color:#000;
    }
    .active{
        background-color: #fff;
    }

</style>
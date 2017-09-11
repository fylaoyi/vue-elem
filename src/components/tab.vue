<template>
    <div class="tab-wappper">
        <div class="goods">
            <router-link to="/good" tag="div">商品</router-link>
        </div>
        <div class="rate">
            <router-link to="/rating" tag="div">评价</router-link>                  
        </div>
        <div class="store">
            <router-link to="/store" tag="div">商家</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tab'
    }
</script>

<style scoped>
    .tab-wappper{
        width:100%;
        display: flex;
        /* margin-top:12px; */
        height:40px;
        border-bottom:1px solid #f2f2f2;
    }
    .tab-wappper div{
        flex-grow: 1;
        text-align: center;
        font-size:14px;
        line-height: 40px;
    }
    .tab-wappper div .active{
        /* font-size: 14px; */
        color: #f01414;
    }
</style>


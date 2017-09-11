<template>
  <div id="app">
    <el-header></el-header>
    <tab></tab>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header'
import tab from './components/tab'

export default {
  name: 'app',
  components:{
    'el-header':header,
    tab
  }
}
</script>

<style>
   @import 'common/css/icon.css';  

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
*{
  margin:0;
  padding:0;
  text-decoration: none;
  list-style: none;
}
</style>

<template>
  <div class="tab_top">
      <ul>
        <li>个性推荐</li>
        <li>主播电台</li>
      </ul>
      <div class="holder"></div>
  </div>
</template>
<script>
   import { Navbar, TabItem } from 'mint-ui'
   import Vue from 'vue'
   Vue.component(Navbar.name, Navbar)
   Vue.component(TabItem.name, TabItem)
    export default {
      name: 'TabTop',
      data () {
          return {}
  }
} 
</script>
<style>
.tab_top{
  background: #DB4137;
  color:#fff;
  padding: 5px;
}
.tab_top ul{
  z-index: 1000;
  left: 0;
  top:50px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  font-size: 14px;
  background: #DB4137;
  padding-bottom: 10px;
}
.tab_top ul li{
  border-bottom:2px solid #fff;
}
.holder{
  width: 100%;
  height: 135px;
  margin-bottom:80px;
}
</style>


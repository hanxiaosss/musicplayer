<template>
  <div class="search_box">
      <i class="icon iconfont" v-bind:class="classArr[index].left"></i>
      <div class="input_box"><i class="icon iconfont" v-bind:class="classArr[index].right"></i><input type="text" placeholder="陈慧娴最近很火哦"></div>
      <i class="icon iconfont icon-16"></i>
  </div>
</template>
<script>
export default {
      name: 'SearchBox',
      props:['index'],
      data () {
          return {
            classArr:[
              {left:'icon-maikefeng',right:'icon-search'},
              {left:'icon-video',right:'icon-search'}],
          }
  },
  beforeCreate:function(){
    
  }
} 
</script>
<style>
.search_box{
  z-index: 1000;
  position: fixed;
  left: 0;
  top:0;
  width: 95%;
  background: #DB4137;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.search_box i{
  font-size: 22px;
  color:#fff;
  margin-right: 0 5px;
}

.input_box{
  text-align: center;
  display:inline-block;
  width: 85%;
  height: 30px;
  border-radius: 15px;
  background: rgba(255,255,255,.3);
}
.input_box i{
  vertical-align: middle;
  font-size: 12px;
  margin: 2px;
}
.input_box input{
  height: 30px;
  font-size: 12px;
  background: rgba(255,255,255,0);
  color:#fff;
  outline: none;
}

::-webkit-input-placeholder { /* WebKit browsers */ 
color: #fff; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #fff; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #fff; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #fff; 
} 
</style>
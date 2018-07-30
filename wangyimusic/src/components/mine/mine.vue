<template>
<div class="mine_content">
  <div class="header">
      <i class="icon iconfont icon-favorite"></i>
      <div>我的音乐</div>
      <i class="icon iconfont icon-16"></i>
  </div>
  <div class="content_list">
    <ul>
      <li>
        <i class="icon iconfont icon-yinle2 red"></i>
        <div class="right_line"><div class="text_line">本地音乐</div><div>0<i class="icon iconfont icon-jiantou"></i></div></div>
      </li>
      <li>
        <i class="icon iconfont icon-iconfontplay2 red"></i>
        <div class="right_line"><div class="text_line">最近播放</div><div>2<i class="icon iconfont icon-jiantou"></i></div></div>
      </li>
      <li>
        <i class="icon iconfont icon-iconset0278 red"></i>
        <div class="right_line"><div class="text_line">我的电台</div><div>0<i class="icon iconfont icon-jiantou"></i></div></div>
      </li>
      <li>
        <i class="icon iconfont icon-favorite red"></i>
        <div class="right_line"><div class="text_line">我的收藏</div><div>0<i class="icon iconfont icon-jiantou"></i></div></div>
      </li>
    </ul>
  </div>
  <div class="my_list"></div>
</div>
</template>
<script>
   export default {
      name: 'mine',
      data () {
          return {}
  }
}  
</script>
<style>
.header{
  z-index: 1000;
  position: fixed;
  left: 0;
  top:0;
  width: 95%;
  background: #DB4137;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  color:#fff;
  line-height: 22px;
}

.header i{
  font-size: 22px;
  color:#fff;
  margin-right: 0 5px;
}

.content_list{
  margin:45px 0 10px;
}

.red{
  color:#DB4137 !important;
}

.content_list ul li{
  display: flex;
  justify-content: space-between;
}

.content_list ul li>i{
  display: inline-block;
  font-size: 28px;
  margin: 8px;
  vertical-align: middle;
}

.right_line{
  display:inline-flex;
  width: 87%;
  vertical-align: middle;
  position: relative;
  line-height: 40px;
}

.right_line::after {
	content: "";
	width: 300%;
	height: 1px;
	background: grey;
	position: absolute;
	left: -100%;
	bottom: 0;
	transform: scale(0.333);
}

.text_line{
  width: 90%;
}

</style>

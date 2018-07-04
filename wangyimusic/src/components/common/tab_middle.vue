<template>
   <div class="tab_middle">
       <ul>
           <li><div><i class="icon iconfont icon-iconset0278"></i></div>私人FM</li>
           <li><div><i class="icon iconfont icon-rili"></i></div>每日推荐</li>
           <li><div><i class="icon iconfont icon-swticonyinle2"></i></div>歌单</li>
           <li><div><i class="icon iconfont icon-paixingbang"></i></div>排行榜</li>
       </ul>
   </div>
</template>
<script>
  export default {
      name: 'TabMiddle',
      data () {
          return {}
  }
} 
</script>
<style>
.tab_middle{
    position: relative;
    margin-top: 45px;
    padding-bottom: 10px;
}
.tab_middle:after {
	content: "";
	width: 300%;
	height: 1px;
	background: #ccc;
	position: absolute;
	left: -100%;
	bottom: 0;
	transform: scale(0.333);
}
.tab_middle ul{
    display: flex;
    justify-content: space-around;
}
.tab_middle ul li{
    font-size:12px;
    text-align: center;
}
.tab_middle ul li div{
    height: 40px;
    width: 40px;
    background: #DB4137;
    border-radius: 40px;
    font-size: 30px;
    color:#fff;
    text-align: center;
    vertical-align: middle;
    margin: 5px;
}
</style>


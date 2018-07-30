<template>
  <div class="tab_bottom">
      <ul>
          <li><router-link to="/discover?index=0"><i class="icon iconfont icon-faxian"></i>发现</router-link></li>
          <li><router-link to="/svideo?index=1"><i class="icon iconfont icon-shipin"></i>视频</router-link></li>
          <li><router-link to="/mine?index=2"><i class="icon iconfont icon-yinle"></i>我的</router-link></a></li>
          <li><router-link to="/friends?index=3"><i class="icon iconfont icon-haoyou"></i>朋友</router-link></li>
          <li><router-link to="/account?index=4"><i class="icon iconfont icon-1zhanghu"></i>账号</router-link></li>
      </ul>
  </div>
</template>
<script>
    export default {
      name: 'TabBottom',
      data () {
          return {}
  }
}


</script>

<style>
.tab_bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px 0;
    opacity:0.95;
    background: #fff;
}
.tab_bottom::after {
	content: "";
	width: 300%;
	height: 1px;
	background: #ccc;
	position: absolute;
	left: -100%;
	top: 0;
	transform: scale(0.333);
}
.tab_bottom ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.tab_bottom ul li{
    font-size: 12px;
    text-align: center;
    width: 8%;
    margin: 0 5px;
}
.tab_bottom ul li i{
    display: inline-block;
    font-size: 24px;
    text-align: center;
    margin-bottom: 3px;
}

.router-link-active{
  color:#DB4137;
}

</style>


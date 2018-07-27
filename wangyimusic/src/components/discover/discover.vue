<template>
  <div class="discover">
      <searchbox></searchbox>
      <tabtop></tabtop>
      <div class="swipe_wrap">
      <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/resource/swipt1.jpg"></mt-swipe-item>
      </mt-swipe>
      </div>
      <tabmiddle></tabmiddle>
      <div class="common_user">
        <div class="recommad">
          <div class="title">推荐歌单<i class="icon iconfont icon-jiantou"></i></div>
          <ul class="cover_list">
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">翻唱||给喧嚣的欧美热单添上一抹亮色</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
          </ul>
        </div>
        <div class="newlist">
          <div class="title">最新音乐<i class="icon iconfont icon-jiantou"></i></div>
          <ul class="cover_list">
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">翻唱||给喧嚣的欧美热单添上一抹亮色</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
          </ul>
        </div>
        <div class="radio">
          <div class="title">主播电台<i class="icon iconfont icon-jiantou"></i></div>
          <ul class="cover_list">
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">翻唱||给喧嚣的欧美热单添上一抹亮色</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div></li>
            <li><img src="../../assets/resource/cover.jpg"><div class="discription">华语速报新歌</div></li>
          </ul>
        </div>
      </div>
  </div>


</template>
<script>
    import TabTop from '@/components/common/tab_top'  
    import SearchBox from '@/components/common/search_box'
    import TabMiddle from '@/components/common/tab_middle'
    import MintUI from 'mint-ui'
    import 'mint-ui/lib/style.css'
    import { Swipe, SwipeItem } from 'mint-ui'
    import Vue from 'vue'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
      name: 'discover',
      data () {
          return {}
      },   
      components:{
        'searchbox':SearchBox,
        'tabtop':TabTop,
        'tabmiddle':TabMiddle
      }
} 
</script>
<style>
.mint-swipe-item{
  border-radius: 5px;
}
.discover{
  margin-bottom: 55px;
}
  .swipe_wrap {
    width: 97%;
    height: 168px;
    position: absolute;
    left: 10px;
    margin-left: -5px;
    top:98px;
    border-radius: 5px;
  }
  .swipe_wrap img{
    width: 100%;
    border-radius: 5px;
  }
  mt-swipe{
  border-radius: 5px;
 }
 mt-swipe-item{
   border-radius: 5px;
 }
 .title{
   margin: 5px;
   line-height: 22px;
   font-size: 14px;
  font-weight: 600;
 }
.cover_list{
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
  margin: 5px;
}
.cover_list li{
  width: 32%;
}
.cover_list li img{
  width: 100%;
  border-radius: 5px;
}
.discription{
  font-size: 12px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
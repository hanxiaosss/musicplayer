<template>
  <div class="songlist_content">
    <div class="header">
      <div class="back"><img src="../../assets/resource/back.png" alt=""></div>
      <div class="title1">歌单</div>
      <div><i class="icon iconfont icon-gengduo"></i><i class="icon iconfont icon-iconset0142"></i></div>
    </div>
    <div class="info_cover">
      <div class="input_box1"><i class="icon iconfont icon-search">搜索歌单内歌曲</i></div>
      <div class="info"><div class="list_cover"><i class="icon iconfont icon-xihuan listened">100万</i><i class="icon iconfont icon-iconset0142 about"></i></div><div><div class="songlist_title">2018年7月最热新歌Top50</div><div class="editor"><img src="../../assets/resource/logo.jpg">网易云音乐<i class="icon iconfont icon-jiantou"></i></div></div></div>
      <div class="option_list">
        <ul>
          <li><i class="icon iconfont icon-pinglun"></i><div>61</div></li>
          <li><i class="icon iconfont icon-icon--"></i><div>72</div></li>
          <li><i class="icon iconfont icon-icondownload"></i><div>下载</div></li>
          <li><i class="icon iconfont icon-bianji"></i><div>多选</div></li>
        </ul>
      </div>
    </div>
    <div class="songlist">
      <div class="play_info">
        <i class="icon iconfont icon-16"></i>
        <div class="play_data">
          <div class="play_all">播放全部<span class="all_number">(共39首)</span></div>
          <div class="collect">+收藏(7482)</div>
        </div>
      </div>
      <ul class="songs">
        <li>
          <div class="rank">1</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">2</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="play"><i class="icon iconfont icon-shipin"></i></div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">3</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="play"><i class="icon iconfont icon-shipin"></i></div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
                <li>
          <div class="rank">4</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="play"><i class="icon iconfont icon-shipin"></i></div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">5</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">6</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">7</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">8</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <li>
          <div class="rank">9</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import entities from '../../untils/entities'
    import { Swipe, SwipeItem } from 'mint-ui'
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    var id = window.location.href.split('=')[1];
    console.log(id);
    export default {
      name: 'songlist',
      data () {
          return {
          }
      },
      mounted(){
        this.getListById(id);
      },
      methods:{
        getListById(id){
          console.log(entities.api+'/songlist/1');
            this.$http.get(entities.api+'/songlist/',{'id':id}).then(res =>{
              console.log(res);
            let data = res.data.data;
            if(res.ok){
            this.newestMusic=data;
             }
        }).catch((error)=>{
            console.log(error);
        })
      }
      }
   }
</script>
<style>
.songlist_content{
  padding:0 0 55px;
}
.song_info{
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: relative;
}

.songname{
  width: 80%;
}

.song_info::after{
  content: "";
	width: 300%;
	height: 1px;
	background: grey;
	position: absolute;
	left: -100%;
	bottom: 0;
	transform: scale(0.333);
}

.songs{
  line-height: 45px;
}
.songs li{
  display: flex;
  justify-content: space-between;
}

.play,.rank,.more{
  width: 10%;
  text-align: center;
  color:gray;
}
.songlist_content{
  background: #7BA7B4;
}
.header{
  z-index: 10000;
  position: fixed;
  width: 95%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  color:#fff;
  padding: 10px;
  background: #7BA7B4;
  /* line-height: 22px; */
}

.title1{
  line-height: 22px;
}

.info_cover{
  background:#7BA7B4; 
  padding-top:45px;
}
.input_box1{
  margin: 10px;
  background: #fff;
  border-radius: 15px;
  height: 30px;
  opacity: .3;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #ccc;
}

.input_box i{
  font-size: 12px;
  color:#ccc;
}

.header i{
    font-size: 22px;
    margin-left: 15px;
}
.info{
  display: flex;
  justify-content: space-around;
}

.list_cover{
  height: 100px;
  width: 100px;
  background: url('/static/uploads/20171102/966efd8fb569b19ceed2320c93a829a2.jpg') no-repeat;
  background-size: cover;
  border-radius: 3px;
  position: relative;
  color:#fff;
  font-size: 12px;
}

.songlist_title{
  color: #fff;
  font-size: 18px;
  line-height: 50px;
}

.editor img{
  width: 25px;
  height: 25px;
  border-radius: 30px;
  vertical-align: middle;
  margin-right: 5px;
}
.editor{
  color:#fff;
}

.listened{
  transform: scale(.8);
  position: absolute;
  right: 0;
  top:0;
}

.option_list ul{
  display: flex;
  justify-content: space-around;
  margin: 5px auto;
}

.option_list ul li{
  width: 24px;
  color:#fff;
  font-size: 12px;
  text-align: center;
}

.option_list ul li i{
  font-size: 24px;
  color:#fff;
}

.option_list ul li div{
    margin: 5px auto;
}

.about{
  transform: scale(.8);
  position: absolute;
  right: 0;
  bottom:0;
}

.songlist{
  background: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.play_data,
.play_info{
  display: flex;
  justify-content: space-between;
}

.play_info{
  margin: 5px 0 5px 5px;
  line-height: 45px;
  font-size: 16px;
}

.play_data{
  width: 90%;
  position: relative;
}

.play_data::after{
  content: "";
	width: 300%;
	height: 1px;
	background: grey;
	position: absolute;
	left: -100%;
	bottom: 0;
	transform: scale(0.333);
}

.play_all{
  width: 60%;
}

.collect{
  width: 40%;
  text-align: center;
  background: #DB4137;
  color:#fff;
  border-top-right-radius: 8px;
  font-size: 14px;
}

.all_number{
  color:gray;
}

.play_info i{
  font-size:20px;
  display: inline-block;
  width: 10%;
}
.back img{
  width: 22px;
  height: auto;
}

</style>


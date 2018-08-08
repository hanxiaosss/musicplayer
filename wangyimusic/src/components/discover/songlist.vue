<template>
  <div class="songlist_content">
    <div class="header">
      <div class="back"><img src="../../assets/resource/back.png" alt=""></div>
      <div class="title1">歌单</div>
      <div><i class="icon iconfont icon-gengduo"></i><i class="icon iconfont icon-iconset0142"></i></div>
    </div>
    <div class="info_cover">
      <div class="input_box1"><i class="icon iconfont icon-search">搜索歌单内歌曲</i></div>
      <div class="info"><div class="list_cover1" :style="{backgroundImage: 'url(' + songlist.listPicture + ')'}"><i class="icon iconfont icon-xihuan listened">100万</i><i class="icon iconfont icon-iconset0142 about"></i></div><div class="info_right"><div class="songlist_title">{{songlist.listname}}</div><div class="editor"><img src="../../assets/resource/logo.jpg">网易云音乐<i class="icon iconfont icon-jiantou"></i></div></div></div>
      <div class="option_list">
        <ul>
          <li><i class="icon iconfont icon-pinglun"></i><div>{{songlist.playCount}}</div></li>
          <li><i class="icon iconfont icon-icon--"></i><div>{{songlist.collectionTimes}}</div></li>
          <li><i class="icon iconfont icon-icondownload"></i><div>下载</div></li>
          <li><i class="icon iconfont icon-bianji"></i><div>多选</div></li>
        </ul>
      </div>
    </div>
    <div class="songlist">
      <div class="play_info">
        <i class="icon iconfont icon-16"></i>
        <div class="play_data">
          <div class="play_all">播放全部<span class="all_number">(共{{songlist.songnum}}首)</span></div>
          <div class="collect">+收藏({{songlist.collectionTimes}})</div>
        </div>
      </div>
      <ul class="songs">
        <li v-for="(item,index) of songlist.songs">
          <div class="rank">{{index+1}}</div>
          <div class="song_info">
          <router-link :to="{path:'/discover/songplay/',query:{id:item.sid,tag:1}}">
          <div class="songname">{{item.sname}}<div class="small">{{item.singer}} —— {{item.albumname}}</div></div>
          </router-link>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li>
        <!-- <li>
          <div class="rank">2</div>
          <div class="song_info">
          <div class="songname">Stay Calm</div>
          <div class="play"><i class="icon iconfont icon-shipin"></i></div>
          <div class="more"><i class="icon iconfont icon-gengduo"></i></div>
          </div>
        </li> -->

      </ul>
    </div>
  </div>
</template>
<script>
    import entities from '../../untils/entities'
    import { Swipe, SwipeItem } from 'mint-ui'
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    export default {
      name: 'songlist',
      data () {
          return {
            songlist:{}
          }
      },
      mounted(){
        var id = this.$route.query.id;
        this.getListById(id);
      },
      methods:{
        getListById(id){
          console.log(this.$route.query.id);
          console.log(entities.api+'/common/page/songlist/'+id);
            this.$http.get(entities.api+'/common/page/songlist/'+id,{}).then(res =>{
              console.log(res.data);
            let data = res.data.data;
            if(res.ok){
              console.log(data[0]);
              data[0].listPicture = 'static/'+ data[0].listPicture;
              data[0].songnum = data[0].songs.length
            this.songlist=data[0];
             }
        }).catch((error)=>{
            console.log(error);
        })
      }
      }
   }
</script>
<style lang="css" ref="stylesheet/css" scoped>
.song_info a{
  display: block;
  width: 100%;
}
.info_right{
  width:60%;
}
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
  line-height: 25px;
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

.list_cover1{
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

.small{
  font-size: 12px;
  transform: scale(0.8);
  margin-left: -28px;
  color:gray;
  line-height: 20px;
}

</style>


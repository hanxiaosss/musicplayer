<template>
  <div>
    <div class="background_content background_content_blur" :style="{backgroundImage:'url('+song.songpicture+')'}"></div>
    <div class="header">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
    <div class="lyric">
      <ul class="lyrics_list">
        <li v-for="lrc in lyrics">{{lrc}}</li>
      </ul>
    </div>
    <div class="play_music">
      <audio v-bind:src="song.url" controls="controls" loop="loop" autoplay="autoplay">亲 您的浏览器不支持html5的audio标签</audio>
    </div>
  </div>
</template>
<script>
import entities from '../../untils/entities'
import Vue from 'vue'
import VueResource from 'vue-resource'

export default {
      name: 'songplay',
      data () {
          return {
            song:{},
            lyrics:[]
          }
      },
      mounted(){
        var id = this.$route.query.id;
        this.getSongById(id);
      },
      methods:{
        getSongById(id){
          this.$http.get(entities.api+'/songs/'+id,{}).then(res=>{
            console.log('获取结果',res.data.data[0]);
            let data = res.data.data[0];
            if(res.data.success){
              this.song=data;
              this.lyrics = data.lrc.replace(/\[(.+?)\]/g,",").split(',');
              console.log(this.lyrics);
            }
          });
        }
      }
}  
</script>
<style>
body,html,#app,#app>div:first-child{
  height: 100%;
}
.background_content{
  height: 100%;
  width:100%;
}

.background_content_blur {
  z-index: -100000;
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
.lyric{
    height: 100%;
    overflow-y: scroll;
    margin-top: 50px;
}
.lyrics_list{
  text-align: center;
  color:#aaa;
}

.lyrics_list li{
  line-height: 20px;
}

audio{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 99%;
    margin: 10px 0;
}

audio{
  opacity: .5;
}
</style>


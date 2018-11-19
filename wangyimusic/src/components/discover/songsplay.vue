<template>
  <div>
    <div class="background_content background_content_blur" :style="{backgroundImage:'url('+song.songpicture+')'}"></div>
    <div class="header"></div>
    <div class="lyric">
      <ul>
        <li>{{song.lrc}}</li>
      </ul>
    </div>
    <div class="play_music"></div>
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
              this.lyrics = data.lrc.replace(/[^\u4e00-\u9fa5]/gi,",");
              console.log(this.lyrics);
            }
          });
        }
      }
}  
</script>
<style>
.background_content{
  padding:0 0 55px;
  height: 100%;
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
</style>


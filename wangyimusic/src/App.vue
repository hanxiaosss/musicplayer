<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    
    <div></div>
  <v-tabbottom v-if="tag"></v-tabbottom>
  </div>
</template>

<script>
import TabBottom from '@/components/common/tab_Bottom'
export default {
      name: 'App',
      data () {
          return {
            tag:true
          }
      },
  components: {
      'v-tabbottom': TabBottom
    },
    mounted(){
      this.getTag();
    },
    methods:{
      getTag(){
        var tag = this.$route.query.tag
        console.log(tag);
        if(tag==1){
          this.tag = false;
          console.log(this.tag);
        }
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

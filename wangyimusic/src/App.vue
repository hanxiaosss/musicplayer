<template>
  <div id="app">
    <router-view/>
  <v-tabbottom></v-tabbottom>
  </div>
</template>

<script>
import TabBottom from '@/components/common/tab_Bottom'
export default {
  components: {
      'v-tabbottom': TabBottom
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

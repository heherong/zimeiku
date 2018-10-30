<template>
  <div id="app">
    <Myheader></Myheader>
    <router-view/>
  </div>
</template>

<script>
import Myheader from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Myheader
  }
}
</script>

<style>
@import url('assets/css/react.css');
#app {
  
}
a:hover{text-decoration: none;}

</style>

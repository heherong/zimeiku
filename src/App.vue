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
  },
  
}
</script>

<style>
@import url('assets/css/react.css');
a:hover{text-decoration: none;}
a:visited{color:#282B00}
.flleft{float: left;}
.line{width: 1px;height: 24px;margin: 11px 15px 0;opacity: 0.5;background: #A9ADB0;}
.transAll{transition: all .2s ease-in-out;-moz-transition: all .2s ease-in-out;-webkit-transition: all .2s ease-in-out;}
</style>



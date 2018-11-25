<template>
  <div id="app">
    <div style="">
      <router-view/>
    </div>
    <Myfooter></Myfooter>
  </div>
</template>

<script>

import Myfooter from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    
    Myfooter
  },
  
}
</script>

<style>
@import url('assets/css/react.css');
#app{height: 100%;}
a:hover{text-decoration: none;}
a:visited{color:#282B00}
.flleft{float: left;}
.line{width: 1px;height: 24px;margin: 11px 15px 0;opacity: 0.5;background: #A9ADB0;}
.transAll{transition: all .2s ease-in-out;-moz-transition: all .2s ease-in-out;-webkit-transition: all .2s ease-in-out;}
.inner-wrap{width: 1170px;margin: 0 auto;}
.wrap{ margin: 0px auto 30px;background:#ECEFF4;overflow: hidden;}
.icon-help{width:15px;height:15px;margin-right: 4px;vertical-align: middle;cursor: pointer; margin-top: 2px;display: inline-block;background:url('./assets/images/icon-question.png');background-position: center;background-size: 100%;}
</style>



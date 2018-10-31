<template>
    <header>
        <MysiteWrap v-if="downScroll!='120px'"></MysiteWrap>
        <MyheaderNavWrap></MyheaderNavWrap>
    </header>
</template>

<style>
header{position: fixed;top: 0;width:100%;}
</style>


<script>
import MysiteWrap from './site-wrap.vue'
import MyheaderNavWrap from './header-nav-wrap'
export default {
    components:{
        MysiteWrap,
        MyheaderNavWrap
    },
    data:function(){
        return {
            downScroll:document.body.scrollTop
        }
    },
}
</script>



<template>
    <header class="transAll">
        <MysiteWrap v-show="bol"></MysiteWrap>
        <MyheaderNavWrap :class="{shadow:bol}"></MyheaderNavWrap>
    </header>
</template>

<style>
header{position: fixed;top: 0;width:100%;z-index: 3;}
.shadow{-webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);-moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);}
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
        return {bol:true}
    },
    created:function(){
        window.addEventListener('scroll',this.fn)
    },
    methods:{
        fn:function(){
            let downScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            if(downScroll>130){
                this.bol=false
            }else{
                this.bol=true
            }
        }
    }
}
</script>



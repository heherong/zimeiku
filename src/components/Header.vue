<template>
    <header class="transAll">
        <MysiteWrap v-show="bol"></MysiteWrap>
    </header>
</template>

<style>

.shadow{-webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);-moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);}
</style>


<script>
import MysiteWrap from './site-wrap.vue'

export default {
    components:{
        MysiteWrap,

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



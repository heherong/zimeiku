<template>
    <div class="banner">
        <div class="swiper-contanier" :class="swiperid" style="position:relative">
            <div class="swiper-wrapper">
                <slot name="swiper-con"></slot>
            </div>
            <div :class="{'swiper-pagintion' :paginationshow}" :style='{"text-align":paginationdesition}' style="position:absolute;bottom:10px;z-index:2;"></div>
        </div>
    </div>
</template>

<script>
import '../assets/libs/swiper/js/swiper.js'

export default {
    props:{
        swiperid:{
            type:String,
            default:''
        },
        paginationshow:{
            type:Boolean,
            default:true
        },
        paginationdesition:{
            type:String,
            default:'center'
        },
        paginationType:{
            type:String,
            default:'bullets'
        },
        autoplay:{
            type:Number,
            default:3000
        },
        loop:{
            type:Boolean,
            default:true
        },
        direction:{
            type:String,
            default:'horizontal'
        },
        effect:{
            type:String,
            default:'slide'
        }
    },
    mounted:function(){
        let That = this; 
        new Swiper('.swiper-contanier',{
            direction: That.direction,
            loop: That.loop,
            pagination: '.swiper-pagintion',
            paginationType:That.paginationType,
            autoplay : That.autoplay,
            effect:That.effect
        })
    }
}
</script>

<style>
    @import '../assets/libs/swiper/css/swiper.css';
    .banner{width: 100%;overflow: hidden;margin-top: 61px;}
    .banner .swiper-contanier .swiper-img{width: 100%;}
</style>

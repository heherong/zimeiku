<template>
    <li class="site-dranmenu-wrap transAll">
        {{txt}}
        <img src="../assets/images/arr_down.png" class="down-img transAll">
        <img src="../assets/images/arr_up.png" class="up-img transAll">
        <slot name="down"></slot>
    </li>
</template>

<style>
.site-dranmenu-wrap{background: rgb(241, 243, 246);float: left;padding: 0 14px;cursor: pointer;transition: all .2s ease-in-out;-moz-transition: all .2s ease-in-out;-webkit-transition: all .2s ease-in-out;}
.down-img{margin-left:4px;}
.up-img{margin-left:4px;display: none;}
.site-dranmenu-wrap:hover img.down-img{display: none;}
.site-dranmenu-wrap:hover img.up-img{display: inline;}
.site-dranmenu-wrap:hover{background:white;}
.site-dranmenu-wrap:hover .site-dranmenu-item{display: block;}
.site-dranmenu-item{background:white;display: none;position: absolute;z-index: 2;padding: 0 5px 5px 5px;    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);-webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);-moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);border-radius: 0 2px 2px 0;text-align: center;}
</style>

<script>
export default {
    props:['txt']
}
</script>



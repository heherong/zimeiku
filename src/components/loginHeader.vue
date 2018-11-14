<template>
    <header class="login-header">
        <div class="header-con-wrap">
            <div class="header-item" @click="fn">
                <img src="../assets/images/ico.png" style="width:50px;float:left;padding-top:12px;">
                <div class="line flleft" style="height:45px;"></div>
                <span class="login-header-title">{{types}}</span>
            </div>
        </div>
    </header>
</template>

<style>
.login-header{width: 100%;height: 68px;background: #4593e7;line-height: 68px;border-bottom: 1px solid #99c1ed;overflow: hidden;}
.header-con-wrap{width: 1190px;background: #4593e7;margin: 0 auto;color: #fff;overflow: hidden;}
.header-item{float: left;cursor: pointer;text-align: center;}
.login-header-title{font-size: 26px;}
</style>

<script>
export default {
    props:['types'],
    methods:{
        fn:function(){
            this.$router.push('/');
        }
    }
}
</script>



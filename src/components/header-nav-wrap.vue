<template>
    <div class="header-nav-wrap">
        <div class="inner-wrap" :style="{'background:#4593e7;':bol}">
            <div class="header-logo flleft">
                <router-link to='/'>
                    <img src="../assets/images/ico.ico" class="header-logo-img flleft">
                    <div class="line flleft"></div>
                    <div class="header-txt flleft">
                        内容交易服务平台
                    </div>
                </router-link>
            </div>
            <ul class="header-list-wrap flleft transAll" style="width:560px;"  v-if="this.$route.path!='/login'">
                <Myitem mark='index' :sel='selected' txt='首  页' @change='getVal' ></Myitem>
                <Myitem mark='market' :sel='selected' txt='文章广场' @change='getVal'></Myitem>
                <Myitem mark='user' :sel='selected' txt='个人中心' @change='getVal'></Myitem>
            </ul>
            <div class="header-search-wrap flleft" v-if="this.$route.path!='/login'">
                <el-input placeholder="请输入内容" v-model="search" class="input-with-select" maxlength='360px;'>
                    <el-select v-model="select" slot="prepend" placeholder="买作品">
                        <el-option label="买作品" value="1">买作品</el-option>
                        <el-option label="找作者" value="2">找作者</el-option>
                        <el-option label="做推广" value="3">做推广</el-option>
                        <el-option label="签账号" value="4">签账号</el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div class="publish-btn flleft" v-if="this.$route.path!='/login'">
                <el-button type="primary" style="width:80px;height: 40px;padding:0;">发布作品</el-button>
            </div>
        </div>
    </div>
</template>

<style>
.header-nav-wrap{background: rgba(255,255,255,0.95);overflow: hidden;}
.inner-wrap{width: 1170px;margin: 0 auto;}
.header-logo{padding-top: 20px;}
.header-logo-img{width: 45px;height: 42px;vertical-align: middle;}
.header-txt{line-height: 18px;width: 59px;margin-top: 1px;font-size: 12px;color: #64676a;padding-top: 4px;}
.header-list-wrap{padding-left: 12px;width: auto;}
.header-search-wrap{    position: relative;width: 320px;border: 2px solid rgba(72,149,231,0.50);border-radius: 2px;margin-top: 21px;border-radius: 7px;}
.publish-btn{margin: 21px 0 0 20px;}
</style>

<script>
import Myitem from './header-nav-item'
export default {
    components:{
        Myitem
    },
    data:function(){
        return {
            selected:"index",
            search: '',
            select: '',
            bol:false
            }
    },
    computed:{
        fn:function(){
            if(this.$route.path!='/login'){
                bol
            }
            bol=false
        }
    },
    methods:{
        getVal:function(val){
            console.log(val);
            this.selected=val;
        }
    },
    mounted:function(){
        console.log(this.$route.path)
    }
}
</script>



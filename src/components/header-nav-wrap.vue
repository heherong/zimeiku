<template>
    <div class="header-nav-wrap transAll" :class="{'login-header-bg':bol,'top':!fixbol}">
        <div class="inner-wrap">
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
                <Myitem mark='buyerorder' :sel='selected' txt='征文大厅' @change='getVal'></Myitem>
            </ul>
            <div class="publish-btn flleft" v-if="this.$route.path!='/login'">
                <el-button @click="getLogin">登录</el-button>
                <el-button @click="getReg">注册</el-button>
            </div>
        </div>
    </div>
</template>

<style>
.header-nav-wrap{background: rgba(255,255,255,0.95);overflow: hidden;height: 60px;position: fixed;top:0;width:100%;z-index: 3;}
div.top{top:0;}
.header-logo{padding-top: 10px;}
.header-logo-img{width: 45px;height: 42px;vertical-align: middle;}
.header-txt{line-height: 18px;width: 59px;margin-top: 1px;font-size: 12px;color: #64676a;padding-top: 4px;}
.header-list-wrap{padding-left: 12px;width: auto;}
.publish-btn{margin: 10px 0 0 300px;}
.login-header-bg{background:#4593e7;}
.Active{color:#4895E7;}
li.Bactive{border-bottom:2px solid #4895E7}
.header-list-wrap li{float: left; }
.header-nav-item{padding: 0 14px;display: inline-block;font-size: 16px;color: #82868A;border-bottom: 2px solid transparent;padding: 30px 0;cursor: pointer;margin: 0 20px; }
.header-nav-item:hover span{color:#4895E7;}
.header-nav-item:hover{border-bottom: 2px solid #4895E7;}
</style>

<script>
import Myitem from './header-nav-item'
export default {
    props:['active'],
    components:{
        Myitem
    },
    data:function(){
        return {
            selected:"index",
            search: '',
            select: '',
            bol:false,
            fixbol:true,
            }
    },
    watch: {
        active:function(newVal,oldVal){
            this.selected = oldVal;
        },
        $route: {
            handler: function(val, oldVal){
                if(val.name=='login'){
                    this.bol=true
                }else{
                    this.bol=false
                }
            },
            deep: true
        }
    },
    methods:{
        getVal:function(val){
            this.selected=val;
        },
        getLogin:function(){
            this.$router.push('/login')
        },
        getReg:function(){
            this.$router.push('/reg')
        }
    }
}
</script>



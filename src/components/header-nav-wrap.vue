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
                <!-- <li class="header-nav-item" @click="tab1" :class="{Bactive:selected=='index'}">
                        <span :class="{Active:selected=='index'}">首页</span>
                </li>
                <li class="header-nav-item" @click="tab2" :class="{Bactive:selected=='market'}">
                        <span :class="{Active:selected=='market'}">文章广场</span>
                </li>
                <li class="header-nav-item" @click="tab3" :class="{Bactive:selected=='user'}">
                        <span :class="{Active:selected=='user'}">个人中心</span>
                </li> -->
                <Myitem mark='index' :sel='selected' txt='首  页' @change='getVal' ></Myitem>
                <Myitem mark='market' :sel='selected' txt='文章广场' @change='getVal'></Myitem>
                <Myitem mark='user' :sel='selected' txt='个人中心' @change='getVal'></Myitem>
            </ul>
            <div class="header-search-wrap flleft" v-if="this.$route.path!='/login'">
                <el-input placeholder="请输入内容" v-model="search" class="input-with-select" maxlength='360'  >
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
.header-nav-wrap{background: rgba(255,255,255,0.95);overflow: hidden;height: 83px;position: fixed;top: 36px;width:100%;z-index: 3;}
div.top{top:0;}
.header-logo{padding-top: 20px;}
.header-logo-img{width: 45px;height: 42px;vertical-align: middle;}
.header-txt{line-height: 18px;width: 59px;margin-top: 1px;font-size: 12px;color: #64676a;padding-top: 4px;}
.header-list-wrap{padding-left: 12px;width: auto;}
.header-search-wrap{    position: relative;width: 320px;border: 2px solid rgba(72,149,231,0.50);border-radius: 2px;margin-top: 21px;border-radius: 7px;}
.publish-btn{margin: 21px 0 0 20px;}
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
            // 深度观察监听
            deep: true
        }
    },
    methods:{
        // tab1:function(){
        //     this.selected = 'index'
        //     this.$router.push(`/${this.selected}`);
        // },
        // tab2:function(){
        //     this.selected = 'market'
        //      this.$router.push(`/${this.selected}`);
        // },
        // tab3:function(){
        //     this.selected = 'user'
        //     this.$router.push(`/${this.selected}`);
        // },
        getVal:function(val){
            this.selected=val;
        },
        fn:function(){
            let downScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            if(downScroll>36){
                this.fixbol=false
            }else{
                this.fixbol=true
            }
        }
    },
    mounted:function(){
        console.log('active:'+this.active);
        console.log('selected:'+this.selected);
        
    },
    created:function(){
        window.addEventListener('scroll',this.fn)
    }
}
</script>



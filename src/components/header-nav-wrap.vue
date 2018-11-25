<template>
    <div class="header-nav-wrap transAll" :class="{'login-header-bg':bol,'top':!fixbol}">
        <div class="inner-wrap">
            <div class="header-logo flleft">
                <router-link to='/'>
                    <img src="../assets/images/ico.png" class="header-logo-img flleft">
                    <div class="line flleft"></div>
                    <div class="header-txt flleft">
                        内容交易服务平台
                    </div>
                </router-link>
            </div>
            <ul class="header-list-wrap flleft transAll" style="width:560px;" >
                <Myitem mark='index' :sel='selected' txt='首  页' @change='getVal' ></Myitem>
                <Myitem mark='market' :sel='selected' txt='文章广场' @change='getVal'></Myitem>
                <!--<Myitem mark='user' :sel='selected' txt='个人中心' @change='getVal'></Myitem>-->
                <Myitem mark='buyerorder' :sel='selected' txt='征文大厅' @change='getVal'></Myitem>
                <Myitem mark='help/platform' :sel='selected' txt='帮助中心' @change='getVal'></Myitem>
            </ul>
            <div class="publish-btn flleft" v-if="!loginMsg.status">
                <el-button @click="getLogin">登录</el-button>
                <el-button @click="getReg">注册</el-button>
            </div>
            <div class="publish-btn flleft" v-else @mouseenter="enter()" @mouseleave="leave()">
                <img :src="loginMsg.headImg" style="width: 50px;height: 50px;border-radius: 50px;margin-top: -5px;"/>
                <span style="position: relative;top: -18px; left: 5px;cursor: pointer;">{{loginMsg.name }}</span>
                <div v-if="moveShow==1" class="chose-module" style="position: fixed;margin-left: 55px;">
                	<el-button @click="personCenter">个人中心</el-button><br />
                	<el-button @click="quitLogin">退出</el-button>
                </div>
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
import jpg1 from '@/assets/images/head.png';  //头像
export default {
    props:['active'],
    components:{
        Myitem
    },
    data:function(){
        return {
            selected:"index",
            loginMsg:{     //登录信息
            	status:false,
            	headImg:'',
            	name:''
            },
			moveShow:0,  //鼠标放到头像中显示
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
    mounted:function(){
    	//判断是否登陆注册
    	let that = this;
    	console.log( that.$Cookies.get('name'))
    	if(that.$Cookies.get('headeImg')){
    		//隐藏登陆注册 显示头像和名称
    		that.loginMsg.status = true;
    		if(that.$Cookies.get('headeImg') == 0){
    			that.loginMsg.headImg = jpg1 ;
    		}else{
    			that.loginMsg.headImg = that.$Cookies.get('userInfo').headeImg;
    		}
    		
    		that.loginMsg.name = that.$Cookies.get('name');
    	}else{
    		that.loginMsg.status = false;
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
        },
        enter:function(){
        	this.moveShow = 1;
        },
        leave:function(){
        	this.moveShow = 0;
        },
        quitLogin:function(){
        	//退出登录 清空所有cookie 刷新页面
        	this.$Cookies.remove('name');
        	this.$Cookies.remove('headeImg');
        	this.$Cookies.remove('token');
        	this.$router.go(0)
        },
        personCenter:function(){
        	//跳到个人中心
        	this.$router.push('/user')
        }
    }
}
</script>



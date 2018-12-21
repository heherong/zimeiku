<template>
    <div class="wrap transAll" style="min-height:366px;height:900px;">
        
        <Myheader types='用户登录'></Myheader>
        <div class="market" style="background: #fff;border-radius: 2px;padding: 102px 0;width:1170px;margin:0 auto;margin-top:30px;height:500px;">
            <div class="login-wrap">
                <div class="login-wrap">
                    <div class="login-tab-wrap">
                        <ul class="login-tab">
                            <li :class="{loginActive:now==0}" @click="now=0" style="width:100%">微信登录</li>
                            <!--<li  :class="{loginActive:now==1}" @click="now=1">手机动态登录</li>-->
                        </ul>
                    </div>
                    <div class="login-from-wrap" v-if="now==0">
                        <div class="openWx">
                            ( 打开微信，使用扫一扫 )
                        </div>
                        <div v-if="qrcode==1" >
                        	<p style="font-size: 13px;height: 70px;padding-top: 30px;text-align: center">(提示：当前二维码已失效，请刷新页面重新获取)</p>
                        </div>
                        <div v-else style="width:200px;margin:0 auto;">
                        	<div v-if="qrcode==0" class="reg-loading">
								<i class="el-icon-loading"></i>
							</div>
							<img v-if="qrcode" style="max-width:100%;" :src="qrcode" alt="">
                        </div>
                        <div class="login-bot-wrap">
                            <span class="login-foget transAll" @click="loginFoget">忘记密码</span>
                            <span class="login-reg transAll" @click="loginReg">注册新用户</span>
                        </div>
                    </div>
                    

                    <div class="login-from-wrap" v-else>
                        
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                            <el-form-item prop="shoujihao" class="input-login">
                                <el-input v-model.number="ruleForm2.shoujihao" style="margin-left:0;width:290px"  placeholder="请输入手机号"></el-input>
                            </el-form-item>
                        
                           
                            <el-form-item prop="imgCode"  class="input-login" style="width:50%;">
                                <el-input type="password" v-model="ruleForm2.imgCode" autocomplete="off" placeholder="请输入验证码"></el-input>
                                
                            </el-form-item>
                            <div class="pic-code">
                                <img src="../../assets/images/getValidateImg.jpg" alt="" style="width:100%;">

                            </div>
                            <el-form-item  class="input-login" style="width:50%;">
                                <el-input v-model="ruleForm2.poCode" placeholder="请输入手机验证码" :disabled="bol"></el-input>
                                
                            </el-form-item>

                            <div class="ip-code">
                                <el-button type="primary" @click="oniP">获取验证码</el-button>
                            </div>
                            <el-form-item>
                                <div class="login-btn-submit input-login">
                                    <el-button type="primary" @click="onSubmit"  style="width:292px;" >登录</el-button>
                                </div>
                            </el-form-item>
                        </el-form>
                        <div class="login-bot-wrap">
                            <span class="login-foget transAll" @click="loginFoget">忘记密码</span>
                            <span class="login-reg transAll" @click="loginReg">注册新用户</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<style>

.login-wrap{width: 292px;margin: 0 auto;}
.login-tab{overflow: hidden;}
.login-tab li{float: left;width: 50%;border-bottom: 1px solid #e2e4e7;padding-bottom: 16px;text-align: center;font-size: 16px;cursor: pointer;}
.login-tab li:hover{color: #4895e7;transition: all .2s ease-in-out;border-bottom: 2px solid #4895e7;}
li.loginActive{color: #4895e7;transition: all .2s ease-in-out;border-bottom: 2px solid #4895e7;}
.input-login{margin-top:30px;}
.login-from-wrap{position: relative;}
/* div.el-form-item__content{margin-left:0!important;} */
.pic-code{width:118px;height:40px;position: absolute;right:0;top:70px;}
.ip-code{width:118px;height:40px;position: absolute;right:0;top:140px;}
.login-bot-wrap{font-size:14px;}
.login-foget{text-align: center;color: #4895e7;cursor: pointer;}
.login-reg{text-align: center;color: #4895e7;cursor: pointer;float: right;}
.openWx{padding-top: 15px;text-align: center;font-size: 14px;color:#9b9b9b;}
</style>


<script>
/**
 * 未扫描二维码而进入主页 (待解决)
 */
import Myheader from '../../components/loginHeader'
import {qrcode,login,getUserInfom} from '@/api/index.js' //注意路径
import qs from 'qs'
export default {
    components:{
        Myheader
    },
     data() {
    //   var checkshouji = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('请输入手机号码'));
    //     }
    //     setTimeout(() => {
    //       if (!Number.isInteger(value)) {
    //         callback(new Error('请输入数字值'));
    //       } else {
          
    //       }
    //     }, 1000);
    //   };
    //   var poCode = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入验证码'));
    //     } else {
    //       callback();
    //     }
    //   };
    //   var imgCode = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入验证码'));
    //     } else {
    //       callback();
    //     }
    //   };
      return {
        checked:'',
        now:0,
        token:this.$Cookies.get("token"),
        bol:true,
        qrcode: '0' ,//二维码图片
		ticket: '',
		getTicket: '/api/qrcode', //获取ticket ?
		judgeStatus: '/api/login', //重复调用，获取返回数据
        ruleForm2: {
          shoujihao: '',
          poCode:'',
          imgCode:''
        },
        userInfo:{
            name:'zhaoliwen',
            headeImg:0
        }
        // rules2: {
        //   shoujihao: [
        //     { validator: checkshouji, trigger: 'blur' }
        //   ],
        //   poCode: [
        //     { validator: poCode, trigger: 'blur' }
        //   ],
        //   imgCode:[
        //     { validator: imgCode, trigger: 'blur' }
        //   ],
        // },
        
        
      };
    },
    mounted:function(){
		let that = this;
		//获取Ticket
        that.toGetTicket();
        //判断是否登陆注册
        //隐藏登陆注册 显示头像和名称
        //判断是否登陆注册
			if (this.token) {
				//隐藏登陆注册 显示头像和名称
                // this.loginMsg.status = true;
                // console.log(66666);
                this.getUserInfo()
                }
			// }
	},
    methods:{
    	//获取Ticket
		toGetTicket:function(){
			let that = this;
			
            qrcode().then(res=>{
                console.log(res,8888);
                if(res.code==0){
                	let listData = res.data.list;
                	that.qrcode = listData.qrcode_url;
                    //获取下一个接口
                    that.getStatus(listData.ticket)
                    
                }
            });
        },
        // 获取用户信息
        getUserInfo() {
				let self = this;
				getUserInfom().then((res) => {
                    console.log(res,55555);
					// this.loginMsg.headeImg = res.data.list.header_img || jpg1;
					// self.loginMsg.name = res.data.list.nickname;
				}).catch((res) => {
					console.log(res);
				})
			},
		//判断注册状态
		getStatus:function(ticket_){
            // console.log(arguments);
            let that = this;
            let data ={
			  ticket: ticket_,
            };
            console.log(data)
			let interval_ = setInterval(function(){
                // login(that.judgeStatus,data).then(res=>{
                //     console.log(res);
                // });
                // console.log(data);
				that.$post(that.judgeStatus,data).then((response)=>{
					
	                console.log(response)
						//保存登陆的数据
						// let userInfo = {
						// 	name:'zhaoliwen',
						// 	headeImg:0
						// }
						that.$Cookies.set('token', response.list.token,{ expires: 7 });
						that.$Cookies.set('name', "zhaoliwen",{ expires: 7 });
						that.$Cookies.set('headeImg', "0",{ expires: 7 });
						window.clearInterval(interval_);
	                	that.$router.push({name: 'index'});
	           }).catch((response)=>{
                   console.log(response);
	                window.clearInterval(interval_);
	                //重新获取ticket
	                that.$message({
			          message: '当前二维码已失效，请刷新页面重新获取',
			          type: 'warning'
			        });
			        that.qrcode = 1;
	            })
			}, 3000);
			
		},
        onSubmit:function(){
            console.log(1);
        },
        oniP:function(){
            this.bol = false;
        },
        loginFoget:function(){
            this.$router.push('./login')
        },
        loginReg:function(){
            this.$router.push('./reg')
        }
    }
}
</script>


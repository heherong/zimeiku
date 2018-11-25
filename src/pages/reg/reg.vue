<template>
	<div>
		<Myheader types='用户注册'></Myheader>
		<div class="register-wrap">
			<div class="register-con-wrap">
				<div class="register-el">
					<div class="register-tit-wrap">
						<ul class="reg-tab">
                            <li :class="{regActive:status==1}" @click="status=1" style="width:100%">微信注册</li>
                            <!--<li  :class="{regActive:status==2}" @click="status=2">手机动态注册</li>-->
                        </ul>
					</div>
					<!--微信注册-->
					<div class="register-from-wrap" v-if="status==1">
						<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
							<p style="font-size: 14px;text-align: center;color:#9b9b9b;">( 打开微信，使用扫一扫 )</p>
							<div style="width:200px;margin:0 auto;">
								<div v-if="qrcode==0" class="reg-loading">
									<i class="el-icon-loading"></i>
								</div>
								<img v-if="qrcode" style="max-width:100%;" :src="qrcode" alt="">
							</div>
							<div class="register-bot-wrap">
								<el-checkbox v-model="agree">
									请勾选阅读并同意 <span class="register-login">《陶梦用户服务协议》</span>
								</el-checkbox>
								<span class="register-login" @click="loginFoget()">
	                                登录
	                            </span>
							</div>
							<!-- <el-form-item style="text-align: center;">
								<el-button type="text" @click="toChangeType(2)" style="color: #31a081;text-decoration: underline;">切换手机号注册</el-button>
							</el-form-item> -->
						</el-form>
					</div>
					<!--手机号码注册-->
					<div class="register-from-wrap" v-if="status==2">
						<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
							<el-form-item prop="shoujihao" style="margin-left:0;" class="input-login">
								<el-input v-model.number="ruleForm2.shoujihao" style="margin-left:0;width:290px" placeholder="请输入手机号"></el-input>
							</el-form-item>

							<el-form-item prop="imgCode" class="input-login" style="width:50%;">
								<el-input type="imgCode" v-model="ruleForm2.imgCode" autocomplete="off" placeholder="请输入验证码"></el-input>

							</el-form-item>
							<div class="pic-code">
								<img src="../../assets/images/getValidateImg.jpg" alt="" style="width:100%;">

							</div>
							<el-form-item class="input-login" style="width:50%;">
								<el-input v-model="ruleForm2.poCode" placeholder="请输入手机验证码" :disabled="bol"></el-input>

							</el-form-item>

							<div class="ip-code">
								<el-button type="primary" @click="oniP">获取验证码</el-button>
							</div>

							<el-form-item prop="pass">
								<el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
							</el-form-item>
							<el-form-item prop="checkPass">
								<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
							</el-form-item>

							<div class="register-bot-wrap">
								<el-checkbox v-model="agree">
									请勾选阅读并同意 <span class="register-login">《陶梦用户服务协议》</span>
								</el-checkbox>
								<span class="register-login" @click="loginFoget()">
                                   	 登录
                                </span>
							</div>
							
							<el-form-item>
								<div class="reg-btn-submit input-login" style="margin-top:30px;">
									<el-button type="primary" @click="onSubmit" style="width:292px;">注册</el-button>
								</div>
							</el-form-item>
							<!-- <el-form-item style="text-align: center;">
								<el-button type="text" @click="toChangeType(1)" style="color: #31a081;text-decoration: underline;">切换微信注册</el-button>
							</el-form-item> -->
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.reg-tab{overflow: hidden;margin-bottom:20px;}
	.reg-tab li{float: left;width: 50%;border-bottom: 1px solid #e2e4e7;padding-bottom: 16px;text-align: center;font-size: 16px;cursor: pointer;}
	.reg-tab li:hover{color: #4895e7;transition: all .2s ease-in-out;border-bottom: 2px solid #4895e7;}
	li.regActive{color: #4895e7;transition: all .2s ease-in-out;border-bottom: 2px solid #4895e7;}
	.register-wrap{min-height:688px;padding-top:30px;background:#eceff4;height:810px;}
	.register-con-wrap{width:1170px;height:530px;margin:0 auto;background:#fff;border-radius:2px;padding:102px 0;padding-bottom:50px;}
	.register-el{width:292px;margin:0 auto;}
	.register-tit-wrap{text-align:center;color:#303132;}
	.register-tit-wrap>p{font-size:24px;}
	.register-tit-wrap p:last-child{width:62px;height:2px;margin:8px auto 26px;background:#6daaec;}
	.register-from-wrap{position:relative;}.ip-code{width:118px;height:40px;position:absolute;right:0;top:130px;}
	.pic-code{width:118px;height:40px;position:absolute;right:0;top:70px;}
	.register-bot-wrap{position:relative;font-size:12px;}
	.register-login{float:right;color:#4895e7;text-align:center;cursor:pointer;}
	.el-checkbox__label{font-size:10px;}
	.reg-loading{text-align:center;margin-top:15px;}
	.reg-loading i{display:inline-block;font-size:30px;}
    
</style>

<script>
	import Myheader from '../../components/loginHeader'
	import jpg1 from '@/assets/images/1.jpg';
	export default {
		components: {
			Myheader
		},
		data() {
			var checkshouji = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('请输入手机号码'));
				}
				setTimeout(() => {
					if(!Number.isInteger(value)) {
						callback(new Error('请输入数字值'));
					} else {

					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var poCode = (rule, value, callback) => {
				if (value === '') {
				callback(new Error('请输入验证码'));
				} else {
				callback();
				}
			};
			var imgCode = (rule, value, callback) => {
				if (value === '') {
				callback(new Error('请输入验证码'));
				} else {
				callback();
				}
			};
			
			return {
				status: 1, //1为微信注册 2是手机号码注册
				agree: true,
				bol: true,
				qrcode: '0' ,//二维码图片
				ticket: '',
				getTicket:'/api/qrcode', //获取ticket ?
				judgeStatus:'/api/login', //重复调用，获取返回数据
				ruleForm1: {
					erwma: ''
				},
				ruleForm2: {
					pass: '',
					checkPass: '',
					shoujihao: '',
					poCode: '',
					imgCode:''
				},
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					shoujihao: [{
						validator: checkshouji,
						trigger: 'blur'
					}],
					poCode: [{
						validator: poCode,
						trigger: 'blur'
					}],
					 imgCode:[
						{ validator: imgCode, trigger: 'blur' }
					],
				},

			};
		},
		mounted:function(){
			let that = this;
			//获取Ticket
			that.toGetTicket();
		},
		methods: {
			//获取Ticket
			toGetTicket:function(){
				let that = this;
				//获取ticket
				that.$fetch(that.getTicket).then((response) => {
			        // console.log(response);
			        if(response.code==0){
	                	let listData = response.data.list;
	                	that.qrcode = listData.qrcode_url;
	                	// console.log(that.qrcode);
	                	that.$Cookies.set('ticket', listData.ticket,{ expires: 7 });
	                	
	                	//获取下一个接口
						that.getStatus(listData.ticket)
	                }
			    })
			},
			//判断注册状态
			getStatus:function(ticket_){
				let that = this;
	            let data = qs.stringify({
				  ticket: ticket_,
				});
				// 获取ticket
	//			await this.axios.post(this.judgeStatus,`ticket=${ticket_}`
				let interval_ = setInterval(judge, 1000);
				function judge(){
					that.$post(that.judgeStatus,data
					).then((response)=>{
						
		                console.log(response.data);
		                if(response.data.code==0){
		                	that.$router.push({name: 'index'});
		                	window.clearInterval(interval_);
		                }
		            }).catch((response)=>{
		                console.log(response);
		            })
				}
			},
			onSubmit: function() {
				console.log(1);
			},
			oniP: function() {
				this.bol = false;
			},
			loginFoget: function() {
				this.$router.push('./login')
			},
			loginReg: function() {
				this.$router.push('./reg')
			},
			//切换注册方式
			toChangeType:function(index){
				this.status = index;
			}
		}
	}
</script>
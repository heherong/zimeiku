<template>
	<div class="inform">

		<div v-if="settingShow==1">
			<h4>基本信息 </h4>
			<el-row>
				<!--头像-->
				<el-col :span="24" class="col-head">
					<!--<div @click="toChangeHead" class="head-image">-->
					<div class="head-image">
						<img :src=headImg />
						<!--<p>点击修改头像</p>-->
					</div>
				</el-col>
			</el-row>
			<!--内容-->
			<div class="info-content">
				<!--昵称-->
				<el-row>
					<el-col :span="6"><span>昵称：</span></el-col>
					<el-col :span="12" v-if="name"><span>{{name}}</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未设定</span></el-col>

					<!--<el-col :span="6" v-if="name"><span class="col-change" @click="toChangeName(1)">修改</span></el-col>-->
					<!--<el-col :span="6" v-else><span class="col-change" @click="toChangeName(2)">去设定</span></el-col>-->
				</el-row>

				<!--认证状态-->
				<!--<el-row>
					<el-col :span="6"><span>认证状态：</span></el-col>
					<el-col :span="12" v-if="identificationStatus"><span>已认证</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未认证</span></el-col>

					<el-col :span="6" v-if="identificationStatus"><span class="col-change" @click="quitIdentification(1)">查看</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="quitIdentification(2)">去认证</span></el-col>
				</el-row>-->
				<!--绑定手机-->
				<!--<el-row>
					<el-col :span="6"><span>绑定手机：</span></el-col>
					<el-col :span="12" v-if="iphone"><span>{{iphone}}</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未绑定</span></el-col>

					<el-col :span="6" v-if="iphone"><span class="col-change" @click="toChangePhone(1)">修改</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangePhone(2)">去绑定</span></el-col>
				</el-row>-->
				<!--微信-->
				<!--<el-row>
					<el-col :span="6"><span>绑定微信：</span></el-col>
					<el-col :span="12" v-if="weixin"><span>已绑定</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未绑定</span></el-col>

					<el-col :span="6" v-if="weixin"><span class="col-change" @click="toChangeWeixin(1)">修改</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangeWeixin(2)">去绑定</span></el-col>
				</el-row>-->
				<!--登录密码-->
				<!--<el-row>
					<el-col :span="6"><span>登录密码：</span></el-col>
					<el-col :span="12" v-if="loginPassword"><span>已设定</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未设定</span></el-col>

					<el-col :span="6" v-if="loginPassword"><span class="col-change" @click="toChangeLogin(1)">更换</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangeLogin(2)">去设定</span></el-col>
				</el-row>-->

			</div>
		</div>
		<!--手机号码-->
		<div v-if="settingShow==3">
			<div v-if="iphoneData.phoneStatus==1">
				<h4>基本信息-修改手机号</h4>
				<el-row>
					<el-col :span="24" class="col-head">
						<p style="font-size: 14px;">(提示：修改手机号需先验证已绑定的手机号) </p>

						<div class="demo-input-size">
							<el-input v-model="iphone" :disabled="true" class="iphone-input iphone-input-disabled">
								<i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
							</el-input><br />
							<el-input placeholder="请输入验证码" v-model="iphoneData.yanzheng" class="iphone-input">
								<i slot="prefix" class="el-input__icon el-icon-edit-outline"></i>
								<el-button slot="append" v-if="iphoneData.toGetCodeStatus==0" @click="toGetCode(1)">获取验证码</el-button>
								<el-button slot="append" v-if="iphoneData.toGetCodeStatus==1" disabled>验证码已发送(<span>{{iphoneData.codeTime}}</span>)</el-button>
							</el-input>

							<div style="margin-top:40px;">
								<el-button @click="returnPage">返回</el-button>
								<el-button type="primary" @click="toChangePhone(3)">确定</el-button>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div v-if="iphoneData.phoneStatus==0">
				<h4>基本信息-绑定手机号</h4>
				<el-row>
					<el-col :span="24" class="col-head">
						<p style="font-size: 14px;">(提示：请绑定您的手机号)</p>

						<div class="demo-input-size">
							
							<el-input v-model="iphoneData.iphoneNew" placeholder="请输入手机号码" class="iphone-input">
								<i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
							</el-input>
							<br />
							<el-input placeholder="请输入验证码" v-model="iphoneData.yanzheng" class="iphone-input">
								<i slot="prefix" class="el-input__icon el-icon-edit-outline"></i>
								<el-button slot="append" v-if="iphoneData.toGetCodeStatus2==0" @click="toGetCode(2)">获取验证码</el-button>
								<el-button slot="append" v-if="iphoneData.toGetCodeStatus2==1" disabled>验证码已发送(<span>{{iphoneData.codeTime}}</span>)</el-button>
							</el-input>

							<div style="margin-top:40px;">
								<el-button @click="returnPage">返回</el-button>
								<el-button type="primary" @click="toChangePhone(4)">确定绑定</el-button>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<!--登录密码-->
		<div v-if="settingShow==6">
			<h4 v-if="loginPassword">基本信息-修改密码</h4>
			<h4 v-else>基本信息-设定密码</h4>
			<el-row>
				<el-col :span="24" class="col-head">
					<p style="font-size: 14px;">(提示：密码应为字母加数字且长度不小于8位)</p>
					<div class="demo-input-size">
						<el-input v-if="loginPassword" v-model="loginSecretData.oldPsw" class="iphone-input" placeholder="请输入原密码" type="password"></el-input>
						<i class="el-icon-circle-close" style="color:#F56C6C;position: absolute;left: 70%;top: 25%;" v-if="loginSecretData.oldPswShow"></i>
						<br />
						<el-input v-model="loginSecretData.newPsw" type="password" class="iphone-input" placeholder="请输入新密码"></el-input>
						<i class="el-icon-circle-close" style="color:#F56C6C;position: absolute;left: 70%;top: 43%;" v-if="loginSecretData.newPswShow"></i>
						<br />
						<el-input v-model="loginSecretData.confiPsw" type="password" class="iphone-input" placeholder="请确认新密码"></el-input>
						<i class="el-icon-circle-close" style="color:#F56C6C;position: absolute;left: 70%;top: 61%;" v-if="loginSecretData.confiPswShow"></i>
						<br />
						
						<div style="margin-top:40px;">
							<el-button @click="returnPage">返回</el-button>
							<el-button type="primary" @click="toChangeLogin(3)">确定</el-button>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<!--认证-->
		<div v-if="settingShow==2">
			<div v-if="identifiData.status==1">
				<h4>基本信息-查看认证状态</h4>
				<el-row>
					<el-col :span="4" class="col-head" style="font-size: 14px;color: #82868A;"">姓名：</el-col>
					<el-col :span="8" class="col-head" style="font-size: 14px;">{{identifiName}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="4" class="col-head" style="font-size: 14px;color: #82868A;"">身份证号码：</el-col>
					<el-col :span="8" class="col-head" style="font-size: 14px;">{{identifiCard}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="4" class="col-head" style="font-size: 14px;color: #82868A;">认证时间：</el-col>
					<el-col :span="8" class="col-head" style="font-size: 14px;">{{identifiTime}}</el-col>
				</el-row>
				<div style="margin-top:40px;">
					<el-button @click="returnPage">返回</el-button>
				</div>
			</div>
			<div v-if="identifiData.status==2">
				<h4>基本信息-实名认证</h4>
				<div class="demo-input-size">
					<el-row>
						<el-col :span="4" class="col-head">姓名：</el-col>
						<el-col :span="8" class="col-head">
							<el-input v-model="identifiData.name"></el-input>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="4" class="col-head">身份证号码：</el-col>
						<el-col :span="8" class="col-head">
							<el-input v-model="identifiData.IDCard"></el-input>
						</el-col>
					</el-row>
					<div style="margin-top:40px;">
						<el-button @click="returnPage">返回</el-button>
						<el-button type="primary" @click="quitIdentification(3)">确定</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import jpg1 from '@/assets/images/1.jpg';
	import {CheckPassWord} from '@/assets/js/public.js' //注意路径
	export default {
		data() {
			return {
				settingShow: 1, //显示页面 1是当前，2是认证，3是手机，4是邮箱，5是微信，6是登录密码，7是支付密码
				headImg: jpg1, //头像
				name: "herong", //昵称
				identificationStatus: false, //认证状态
				identifiName:'李小星',  //认证名字
				identifiCard:'430*************99',  //认证身份证
				identifiTime:'2018-11-07 17:30:32', //认证时间
				iphone: 1871234123,
				weixin: 'sweet',
				loginPassword: true, //登录密码
				iphoneData: {
					'iphonePre':1871234123, //原先最开始的手机号，可能没有，也可能有；用来判断点击保存的时候是添加还是修改
					'phoneStatus': 1, //1为修改，0为新加
					'yanzheng': '', //验证码
					'codeTime': 60, //验证码的计时器
					'toGetCodeStatus': 0, //当前验证码状态，1是点击了 获取验证码 修改的验证码
					'toGetCodeStatus2': 0, //当前验证码状态，1是点击了 获取验证码 添加的验证码
					'iphoneNew':''  //过渡作用的
				},
				loginSecretData:{
					oldPsw:'',  //原密码
					oldPswShow:false,
					newPsw:'',  //新密码
					newPswShow:false,
					confiPsw:'', //确认新密码
					confiPswShow:false,
				},
				identifiData:{
					status:1, //1是查看，2是认证
					name:'',
					IDCard:''
				}
			}
		},
		methods: {
			//切换头像
			toChangeHead: function() {

			},
			//修改昵称 状态为1，为修改，2则添加
			toChangeName: function(index) {
				let that = this;
				if(index == 1) {
					let htmlContent = `<input class=change-input id=name type=text name=name value=${that.name}>`;
					that.$confirm(htmlContent, '修改昵称', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						center: true,
						dangerouslyUseHTMLString: true,
						beforeClose: (action, instance, done) => {
							if(action === 'confirm') {

								if(document.getElementById('name').value != '') {
									that.name = document.getElementById('name').value;
									done();
									that.$message({
										message: '修改成功',
										type: 'success'
									});
								} else {
									that.$message('内容不能为空');
								}

							} else {
								done();
							}
						}
					}).then(({
						value
					}) => {}).catch(() => {});

				} else {
					let htmlContent = `<input class=change-input id=name type=text name=name >`;
					that.$confirm(htmlContent, '设置昵称', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						center: true,
						dangerouslyUseHTMLString: true,
						beforeClose: (action, instance, done) => {
							if(action === 'confirm') {

								if(document.getElementById('name').value != '') {
									that.name = document.getElementById('name').value;
									done();
									that.$message({
										message: '设置成功',
										type: 'success'
									});
								} else {
									that.$message('内容不能为空');
								}

							} else {
								done();
							}
						}
					}).then(({
						value
					}) => {}).catch(() => {});
				}

			},
			//认证
			quitIdentification: function(index) {
				let that = this;
				if(index == 1) {
					//查看
					that.settingShow = 2;
				}else if(index == 2){
					//认证
					that.settingShow = 2;
					that.identifiData.status = 2
				}else if(index == 3){
					//点击认证
					
				}
			},
			//手机
			toChangePhone: function(index) {
				let that = this;
				if(index == 1) {
					//修改
					that.settingShow = 3;
				} else if(index == 2) {
					//添加
					that.settingShow = 3;
				} else if(index == 3) {
					//修改第二步添加 先获取验证码
					this.$message({
						showClose: true,
						message: '验证码正确',
						type: 'success'
					});
					//验证码给空
					that.iphoneData.yanzheng = '';
					that.iphoneData.phoneStatus = 0;
				}else if(index==4){
					//获取新电话号码
					that.iphone = that.iphoneData.iphoneNew;
					//到添加位置
					//确定添加 或者 确定修改
					if(that.iphoneData.iphonePre){
						//添加
						this.$message({
							showClose: true,
							message: '添加成功',
							type: 'success'
						});
					}else{
						//修改
						this.$message({
							showClose: true,
							message: '修改成功',
							type: 'success'
						});
					}
					that.returnPage();
				}
			},
			//微信
			toChangeWeixin: function() {

			},
			//登录密码
			toChangeLogin: function(index) {
				let that = this;
				if(index==1){
					//更换
					that.settingShow = 6;
					
				}else if(index==2){
					//去设定
					that.settingShow = 6;
				}else if(index==3){
					//保存
					if(that.loginPassword){
						if(that.loginSecretData.oldPsw){
							//验证原密码
							that.loginSecretData.oldPswShow = false;
							if(CheckPassWord(that.loginSecretData.newPsw)){
								//验证新密码
								that.loginSecretData.newPswShow = false;
								if(that.loginSecretData.newPsw == that.loginSecretData.confiPsw){
									that.loginSecretData.confiPswShow = false;
									 this.$message({
							          	message: '设置成功',
							          	type: 'success'
							        });
							        that.loginSecretData.oldPsw='' ; //原密码
									that.loginSecretData.newPsw='' ; //新密码
									that.loginSecretData.confiPsw=''; //确认新密码
									that.loginPassword = true;
									that.returnPage();
								}else{
									that.$message.error('密码不一致');
									that.loginSecretData.confiPswShow = true;
								}
							}else{
								that.$message.error('密码应为字母加数字且长度不小于8位');
								that.loginSecretData.newPswShow = true;
							}
						}else{
							that.$message.error('原密码错误');
							that.loginSecretData.oldPswShow = true;
						}
					}else{
						if(CheckPassWord(that.loginSecretData.newPsw)){
							//验证新密码
							that.loginSecretData.newPswShow = false;
							if(that.loginSecretData.newPsw == that.loginSecretData.confiPsw){
								that.loginSecretData.confiPswShow = false;
								that.$message({
						          	message: '设置成功',
						          	type: 'success'
						        });
						        that.loginSecretData.oldPsw='' ; //原密码
								that.loginSecretData.newPsw='' ; //新密码
								that.loginSecretData.confiPsw=''; //确认新密码
								that.loginPassword = true;
								that.returnPage();
							}else{
								that.$message.error('密码不一致');
								that.loginSecretData.confiPswShow = true;
							}
						}else{
							that.$message.error('密码应为字母加数字且长度不小于8位');
							that.loginSecretData.newPswShow = true;
						}
					}
					
				}
			},
			//获取验证码
			toGetCode: function(index) {
				//index==1是指修改页面，index==2添加页面
				//codeTime:60,  //验证码的计时器
				//toGetCodeStatus:0,  //当前验证码状态，1是点击了 获取验证码
				let that = this;
				if(index==1){
					//获取验证码状态
					that.iphoneData.toGetCodeStatus = 1;
					//循环执行，每隔1秒钟执行一次 1000 
					let t1 = window.setInterval(refreshCount(t1), 1000);
				}else{
					that.iphoneData.toGetCodeStatus2 = 1;
					//循环执行，每隔1秒钟执行一次 1000 
					let t2 = window.setInterval(refreshCount(t2), 1000);
				}
				function refreshCount(timeId) {
					that.iphoneData.codeTime--;
					if(that.iphoneData.codeTime <= 0) {
						//去掉定时器的方法  
						that.iphoneData.toGetCodeStatus = 0;
						that.iphoneData.codeTime = 60;
						window.clearInterval(timeId);
					}
				}

			},
			//回退页面
			returnPage: function() {
				this.settingShow = 1;
			},
			
		},
		
	}
</script>

<style>
	@import url("../../assets/css/user");
	.el-input.is-disabled .el-input__inner {
		color: #303133;
	}
</style>
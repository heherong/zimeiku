<template>
	<div class="inform">
		
		<div v-if="settingShow==1">
			<h4>基本信息 </h4>
			<el-row>
				<!--头像-->
				<el-col :span="24" class="col-head">
					<div @click="toChangeHead" class="head-image">
						<img :src=headImg />
						<p>点击修改头像</p>
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

					<el-col :span="6" v-if="name"><span class="col-change" @click="toChangeName(1)">修改</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangeName(2)">去设定</span></el-col>
				</el-row>

				<!--认证状态-->
				<el-row>
					<el-col :span="6"><span>认证状态：</span></el-col>
					<el-col :span="12" v-if="identificationStatus"><span>已认证</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未认证</span></el-col>

					<el-col :span="6" v-if="identificationStatus"><span class="col-change" @click="quitIdentification(1)">取消认证</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="quitIdentification(2)">去认证</span></el-col>
				</el-row>
				<!--绑定手机-->
				<el-row>
					<el-col :span="6"><span>绑定手机：</span></el-col>
					<el-col :span="12" v-if="iphone"><span>{{iphone}}</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未绑定</span></el-col>

					<el-col :span="6" v-if="iphone"><span class="col-change" @click="toChangePhone(1)">修改</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangePhone(2)">去绑定</span></el-col>
				</el-row>

				<el-row>
					<el-col :span="6"><span>绑定邮箱：</span></el-col>
					<el-col :span="12" v-if="email"><span>{{email}}</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未绑定</span></el-col>

					<el-col :span="6" v-if="email"><span class="col-change" @click="toChangeEmail(1)">修改</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangeEmail(2)">去绑定</span></el-col>
				</el-row>
				<el-row>
					<el-col :span="6"><span>绑定微信：</span></el-col>
					<el-col :span="12" v-if="weixin"><span>已绑定</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未绑定</span></el-col>

					<el-col :span="6" v-if="weixin"><span class="col-change" @click="toChangeWeixin(1)">修改</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangeWeixin(2)">去绑定</span></el-col>
				</el-row>
				<el-row>
					<el-col :span="6"><span>登录密码：</span></el-col>
					<el-col :span="12" v-if="loginPassword"><span>已设定</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未设定</span></el-col>

					<el-col :span="6" v-if="loginPassword"><span class="col-change" @click="toChangeLogin(1)">更换</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangeLogin(2)">去设定</span></el-col>
				</el-row>
				<el-row>
					<el-col :span="6"><span>支付密码：</span></el-col>
					<el-col :span="12" v-if="payPassword"><span>已设定</span><i class="el-icon-circle-check"></i></el-col>
					<el-col :span="12" v-else><span>未设定</span></el-col>

					<el-col :span="6" v-if="payPassword"><span class="col-change" @click="toChangePay(1)">更换</span></el-col>
					<el-col :span="6" v-else><span class="col-change" @click="toChangePay(2)">去设定</span></el-col>
				</el-row>
			</div>
		</div>
		
		<div v-if="settingShow==3">
			<h4>基本信息</h4>
			<el-row>
				<el-col :span="24" class="col-head">
					<p style="font-size: 14px;">(提示：修改手机号需先验证已绑定的手机号)</p>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import jpg1 from '@/assets/images/1.jpg';
	export default {
		data() {
			return {
				settingShow:3, //显示页面 1是当前，2是认证，3是手机，4是邮箱，5是微信，6是登录密码，7是支付密码
				headImg: jpg1,
				name: "",
				identificationStatus: true, //认证状态
				iphone: 1871234123,
				email: '1@qq.com',
				weixin: 'sweet',
				loginPassword: true, //登录密码
				payPassword: true, //支付密码
			}
		},
		methods: {
			//切换头像
			toChangeHead: function() {

			},
			//修改昵称 状态为1，为修改，其他则添加
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
			quitIdentification: function() {

			},
			//手机
			toChangePhone: function(index) {
				let that = this;
				if(index == 1) {

				} else {

				}
			},
			//邮箱
			toChangeEmail: function() {

			},
			//微信
			toChangeWeixin: function() {

			},
			//登录密码
			toChangeLogin: function() {

			},
			//支付密码
			toChangePay: function() {

			}
		}
	}
</script>

<style>
	@import url("../../assets/css/user");
	.head-image {
		cursor: pointer;
	}
	
	.head-image>img {
		width: 70px;
		height: 70px;
		border-radius: 70px;
	}
	
	.head-image>p {
		color: #409EFF;
		font-size: 14px;
		margin-top: 5px;
	}
	
	.col-head {
		text-align: center;
	}
	
	.info-content {
		text-align: center;
		margin-top: 30px;
	}
	
	.info-content span {
		text-align: center;
		color: #606266;
		font-size: 14px;
	}
	
	.info-content .el-row {
		padding: 30px 0 10px 0;
		border-bottom: dotted 1px #d2d2d2;
	}
	
	.info-content span.col-change {
		color: #409EFF;
		cursor: pointer;
	}
	
	.el-icon-circle-check {
		position: relative;
		top: 2px;
		left: 10px;
		color: #67C23A;
	}
	
	.change-input {
		width: 80%;
		border-radius: 5px;
		border: solid 1px #ccc;
		padding: 10px;
	}
</style>
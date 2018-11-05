<template>
	<div class="condition-wrap">
		<el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :default-openeds="openeds">

			<el-submenu index="1">
				<template slot="title">
					<span>账户权益</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1" @click='getVal' data-id='1'><i class="el-icon-message"></i>系统公告</el-menu-item>
					<el-menu-item index="1-2" @click='getVal' data-id='2'><i :class="[ 'my-icon-size', moneyPage?'el-money-on':'el-money']"></i>我的财务</el-menu-item>
					<el-menu-item index="1-3" @click='getVal' data-id='3'><i class="el-icon-setting"></i>账号设置</el-menu-item>
				</el-menu-item-group>
			</el-submenu>

			<el-submenu index="2">
				<template slot="title">
					<span>作者权益</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="2-1" @click='getVal' data-id='4'><i class="el-icon-edit-outline"></i>发布稿件</el-menu-item>
					<el-menu-item index="2-2" @click='getVal' data-id='5'><i class="el-icon-menu"></i>我的稿件</el-menu-item>
					<el-menu-item index="2-3" @click='getVal' data-id='6'><i class="el-icon-document"></i>我的投稿</el-menu-item>
				</el-menu-item-group>
			</el-submenu>

			<el-submenu index="3">
				<template slot="title">
					<span>媒体权益</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="3-1" @click='getVal' data-id='7'><i class="el-icon-upload2"></i>发布征稿</el-menu-item>
					<el-menu-item index="3-2" @click='getVal' data-id='8'><i class="el-icon-sold-out"></i>已购稿件</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				openeds: ['1'],
				activeId: '1',
				moneyPage: false
			}
		},
		created: function() {
			//显示数据
			let that = this;

		},
		methods: {
			handleOpen(key, keyPath) {
				//				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				//				console.log(key, keyPath);
			},
			getVal(e) {
				let that = this;
				that.activeId = e.$el.getAttribute("data-id");
				that.activeId == 2 ? that.moneyPage = true : that.moneyPage = false;
				//传值给user
				that.$emit('activeId',that.activeId);
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/user.css");
</style>
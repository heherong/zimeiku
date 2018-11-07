<template>
	<div class="wrap transAll" style="min-height:366px; height:880px;">
		<Myheader :active='a'></Myheader>
		<div class="market" style="margin-top:83px;">
			<el-row class="tac">
				<el-col :span="4">
					<!--侧边栏-->	
					<UserNav v-on:activeId="listenToNav"></UserNav>
				</el-col>
				<el-col :span="20">
					<!--系统公告-->
					<Inform v-if="tabActive==1"></Inform>
					<!--我的财务-->
					<MyProperty v-if="tabActive==2"></MyProperty>
					<!--账号设置-->
					<Setting v-if="tabActive==3"></Setting>
					<!--发布稿件-->
					<Release v-if="tabActive==4"></Release>
					<!--我的稿件-->
					<MyWorks v-if="tabActive==5"></MyWorks>
					<!--我的投稿-->
					<WorksStatus v-if="tabActive==6"></WorksStatus>
					<!--发布征稿-->
					<ReleaseWorks v-if="tabActive==7"></ReleaseWorks>
					<!--已购稿件-->
					<BuyWorks v-if="tabActive==8"></BuyWorks>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	import Myheader from '../../../components/header-nav-wrap'
	import UserNav from '../user-nav'
	import Inform from '../inform'
	import MyProperty from '../myProperty'
	import Setting from '../setting'
	import Release from '../release'
	import MyWorks from '../myWorks'
	import WorksStatus from '../worksStatus'
	import ReleaseWorks from '../releaseWorks'
	import BuyWorks from '../buyWorks'
	export default {
		components:{
			Myheader,
			UserNav,
			Inform,  //系统公告
			MyProperty,  //我的财务
			Setting,    //账号设置
			Release,   //发布稿件
			MyWorks,   //我的稿件
			WorksStatus,  //我的投稿
			ReleaseWorks,  //发布征稿
			BuyWorks,   //已购稿件
	    },
		data: function() {
			return {
				 tabActive:'1',
				 a:'user'
			}
		},
		beforeRouteEnter:(to,form,next)=>{
			next(vm=>{
				vm.a = to.params.name
			})
		},
		methods:{
			listenToNav:function(data){
				let that = this;
				that.tabActive = data;
				console.log(data);
			}
		}
	}
</script>

<template>
	<div class="wrap transAll" style="min-height:366px;">
		<Myheader :active ='tabActive'></Myheader>
		<div class="market" style="margin-top:83px;">
			<el-row class="tac">
				<el-col :span="4">
					<!--侧边栏-->	
					<UserNav v-on:activeId="listenToNav"></UserNav>
				</el-col>
				<el-col :span="20">
					<!--内容-->
					<Inform></Inform>
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
//	import MyProperty from '../myProperty'
//	import Setting from '../setting'
//	import Release from '../release'
//	import MyWorks from '../myWorks'
//	import WorksStatus from '../worksStatus'
//	import BuyWorks from '../buyWorks'
	export default {
		components:{
			Myheader,
			UserNav,
			Inform,  //系统公告
//			MyProperty,
//			Setting,
//			Release,
//			MyWorks,
//			WorksStatus,
//			ReleaseWorks,
//			BuyWorks
	    },
		data: function() {
			return {
				 tabActive:'user'
			}
		},
		beforeRouteEnter:(to,form,next)=>{
			next(vm=>{
				vm.tabActive = to.params.name
			})
		},
		methods:{
			listenToNav:function(data){
				console.log(data);
			}
		}
	}
</script>

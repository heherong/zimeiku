<template>
	<div class="wrap transAll" style="min-height:366px;">
		<Myheader :active ='tabActive'></Myheader>
		<div class="market" style="margin-top:83px;">
			<!--侧边栏-->	
			<UserNav></UserNav>
		
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	import UserNav from '../user-nav'
	import Myheader from '../../../components/header-nav-wrap'
	export default {
		components:{
			UserNav,
			Myheader
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
		}
	}
</script>

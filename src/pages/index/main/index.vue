<template>
	<div style="margin-top:118px;">
		<MyBanner effect='fade'>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../../assets/images/Banner/banner01.jpg" alt="" class="swiper-img">
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../../assets/images/Banner/banner02.jpg" alt="" class="swiper-img">
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../../assets/images/Banner/banner03.jpg" alt="" class="swiper-img">
			</div>
		</MyBanner>
		<MyIndexNumInfo></MyIndexNumInfo>
		<MyIndexSection></MyIndexSection>
		<MyIndexSection id="sec2"></MyIndexSection>
	</div>
</template>

<script>
	import MyBanner from '@/components/Banner'
	import MyIndexNumInfo from '../IndexNumInfo'
	import MyIndexSection from '../IndexSectionWrap'
	import { getUuid } from '@/api'
	
	export default {
		components: {
			MyBanner,
			MyIndexNumInfo,
			MyIndexSection
		},
		created(){
			getUuid().then(res=>{
				console.log(res);
			})
		}
	}
</script>

<style>
	#sec2 {
		background: url("../../../assets/images/section_bg_2.png") !important;
	}
</style>

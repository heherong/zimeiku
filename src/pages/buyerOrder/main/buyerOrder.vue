<template>
	<div class="wrap transAll">
		<Myheader :active='a'></Myheader>
		<div class="demand-wrap">
			<div class="hall-con-wrap">
				<div class="query-form">
					<div class="demand-query-type">
						<span>类型:</span>
						<!-- <span :class="{demandActive:now==0}" @click="now=0">全部</span>
                        <span :class="{demandActive:now==1}" @click="now=1">内容定制</span> -->
						<span :class="{demandActive:now==1}" @click="now=1">原创征稿</span>
						<!-- <span :class="{demandActive:now==3}" @click="now=3">营销分发</span> -->
					</div>
				</div>
			</div>
			<div class="demand-middle">
				<div style="width:870px;">
					<div class="demand-contanier" style=" float:left">
						<ul class="demand-list">
							<li v-for='item in solicitData' v-if="item.is_expire==1">
								<div class="item-status">
									<span v-if="item.status!=null">{{item.status}}</span>
									<span>招募中</span>
								</div>
								<div class="demand-list-item-title">
									<div class="demand-list-title-top">
										<!-- <span class="demand-title-type" v-if="item.field!=null">{{item.field}}</span> -->
										<span class="demand-title-type">原创征稿</span>
										<span class="demand-title-name" @click="fn">{{item.price}}</span>
										<span>
											<span>￥{{item.price}}</span>
											<span class="demand-list-unit">
												<span style="color:#a9adb0">/篇</span>
											</span>
										</span>
									</div>
									<div class="demand-list-title-bottom">
										<span>
											征稿数量
											<span class="title-bottom-num">{{item.number}}</span>
											篇
										</span>
										<span class="title-bottom-time">
											报名剩余
											<span class="time-active">{{item.diff_day}}</span>
											天
											<span class="time-active">{{item.diff_day}}</span>
											小时
											<span class="time-active">{{item.diff_minutes}}</span>
											分钟
										</span>
										<span class="user-option" @click="fn(item.id)">
											我要投稿
										</span>
									</div>
									<div class="cut-off"></div>
									<div class="demand-list-item-content">
										<span>{{item.content}} 2.要求字数:{{item.words}}字</span>
										<p @click="fn(item.id)">查看更多></p>
									</div>
									<div class="demand-list-item-tag">
										<span>{{item.field}}</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="demand-help transAll">
					<div>
						<span>玩转自媒库</span>
					</div>
					<ul>
						<li>
							<div>
								<div>
									原创征稿
								</div>
								<div>
									Original
								</div>
								<div>
									works
								</div>
							</div>
							<div style="text-align:center;">我有稿件，怎样投稿赚钱？</div>
						</li>
						<li class="made-type transAll">
							<div style="">
								<div>内容定制</div>
								<div>Content</div>
								<div>customization</div>
							</div>
							<div style="text-align:center;">我文笔棒，怎样更好变现？</div>
						</li>

					</ul>
				</div>
			</div>
			<div class='pag-wrap'>
				<el-pagination background layout="prev, pager, next" @current-change="currentChange" :total='totalNum'>
				</el-pagination>
			</div>
		</div>
	</div>
</template>


<script>
	import Myheader from '../../../components/header-nav-wrap'
	import MyItem from '../demand-list-item'
	import { getSolicitList } from '@/api'
	
	export default {
		components: {
			Myheader,
			MyItem
		},
		data: function() {
			return {
				a: 'buyerorder',
				now: 0,
				solicitData: [],
				page: 1,
				pagesize: 5,
				totalNum: 0,
			}
		},
		methods: {
			getAjax(page, pagesize){
				// console.log(this.$route);
				let _data = {
					page: page,
					pagesize: pagesize
				}
				getSolicitList(_data).then(res => {
					if (res.data.list.data.length > 0) {
						this.solicitData = res.data.list.data
						this.totalNum = res.data.list.total
					}
				})
			},
			fn: function(val) {
				this.$router.push({
					path: '/demandHall',
					query: {
						id: val
					}
				});
				console.log(val)
			},
			currentChange: function(curPage) {
				this.page = curPage;
				console.log(curPage)
				this.getAjax(this.page, this.pagesize);
			},
		},
		beforeRouteEnter: (to, form, next) => {
			next(vm => {
				vm.a = to.params.name
			})
		},
		created: function() {
			this.getAjax(this.page, this.pagesize);

		},

	}
</script>

<style>
	.demand-wrap {
		width: 1170px;
		margin: 0 auto;
		margin-top: 105px;
	}

	.query-form {
		height: 50px;
		line-height: 50px;
		padding: 0 20px;
		border-radius: 2px;
		background: #fff;
		color: #64676A;
		margin-bottom: 19px;
	}

	.demand-query-type {
		margin-bottom: 20px;
	}

	.demand-query-type span:first-child {
		margin-right: 10px;
	}

	.demand-query-type span:nth-child(n+2) {
		cursor: pointer;
		display: inline-block;
		/* width: 36px; */
		height: 24px;
		line-height: 24px;
		text-align: center;
		margin-right: 20px;
	}

	.demand-query-type span:nth-child(n+3) {
		display: inline-block;
		width: 84px;
		text-align: left;
	}

	.demandActive {
		color: #4895E7;
	}

	.demand-list li {
		width: 780px;
		height: 210px;
		border-radius: 2px;
		background: #fff;
		margin-bottom: 20px;
		padding: 0 27px 22px 23px;
		overflow: hidden;
		position: relative;
	}

	.demand-help {
		width: 280px;
		height: 450px;
		background: #fff;
		float: right;
		padding: 23px 20px 43px 20px;
	}

	.demand-help>div {
		overflow: hidden;
		height: 30px;
		line-height: 30px;
		padding-bottom: 5px;
		border-bottom: 1px solid #e9ebec;
	}

	.demand-help div>span:first-child {
		font-size: 18px;
		color: #64676A;
		float: left;
		position: relative;
		top: -2px;
	}

	.demand-help ul li {
		width: 240px;
		margin-top: 20px;
		border-radius: 2px;
		cursor: pointer;
	}

	.demand-help>ul>li:nth-child(1)>div:first-child {
		background: url('../../../assets/images/origin-bg1.png')
	}

	.demand-help>ul>li>div:first-child>div:first-child {
		font-size: 24px;
		color: #89BC62;
		margin-bottom: 5px;
	}

	.demand-help>ul>li>div:first-child {
		width: 240px;
		height: 118px;
		border-radius: 2px;
		padding: 23px 0 0 29px;
	}

	.demand-help>ul>li>div:first-child>div:nth-child(n+2) {
		font-size: 16px;
		color: rgba(137, 188, 98, 0.60);
		line-height: 16px;
	}

	.demand-help>ul>li>div:last-child {
		text-align: left;
		font-size: 14px;
		color: #64676A;
		line-height: 42px;
		border: 1px solid #F1F1F2;
	}

	.demand-help>ul>.made-type>div:first-child {
		background: url('../../../assets/images/origin-bg2.png')
	}

	.demand-help .made-type div:first-child>div:first-child {
		margin-bottom: 5px;
		font-size: 24px;
		color: #4895E7;
	}

	.demand-help .made-type div:first-child>div:nth-child(n+2) {
		font-size: 16px;
		color: rgba(72, 149, 231, 0.70);
		line-height: 16px;
	}

	.demand-help>ul>.marketing-type>div:first-child {
		background: url('../../../assets/images/origin-bg3.png')
	}

	.demand-help .marketing-type div:first-child>div:first-child {
		margin-bottom: 5px;
		font-size: 24px;
		color: #9B76F8;
		;
	}

	.demand-help .marketing-type div:first-child>div:nth-child(n+2) {
		font-size: 16px;
		color: rgba(155, 118, 248, 0.60);
		;
		line-height: 16px;
	}

	.pag-wrap {
		width: 870px;
		padding: 40px 0 20px;
		color: #797b7e;
		float: left;
		text-align: center;
	}

	.item-status {
		position: absolute;
		top: 0;
		width: 60px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 12px;
		background: #89BC62;
		color: #fff;
		border-radius: 0 0 2px 2px;
	}

	.demand-list-item-title {
		margin-top: 25px;
	}

	.demand-list-title-top>span:first-child {
		display: inline-block;
		width: 56px;
		height: 22px;
		line-height: 19px;
		text-align: center;
		font-size: 12px;
		color: #89BC62;
		border: 1px solid rgba(137, 188, 98, 0.50);
		border-radius: 2px;
		margin-right: 6px;
		position: relative;
		top: -2px;
	}

	.demand-title-name {
		font-size: 20px;
		color: #48494a;
		cursor: pointer;
		display: inline-block;
		height: 26px;
		width: 500px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.demand-list-title-top span:nth-child(3) {
		float: right;
		font-size: 24px;
		color: #F5B923;
	}

	.demand-list-unit {
		font-size: 12px;
		color: #82868A;
	}

	.time-active {
		color: #4895E7;
	}

	.demand-list-title-bottom {
		height: 36px;
		line-height: 36px;
	}

	.demand-list-title-bottom>span:nth-child(1) {
		color: #82868A;
		margin-right: 81px;
	}

	.title-bottom-time {
		margin-left: 10px;
		color: #82868A;
	}

	.user-option {
		float: right;
		width: 84px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		cursor: pointer;
		color: #fff;
		background: #4895E7;
		border-radius: 2px;
	}

	.cut-off {
		height: 14px;
		border-bottom: 1px dotted #e9ebec;
	}

	.demand-list-item-content {
		height: 44px;
		line-height: 22px;
		overflow: hidden;
		margin: 12px 0 15px 0;
		font-size: 14px;
		color: #64676A;
	}

	.demand-list-item-content>p {
		color: #4895E7;
		cursor: pointer;
	}

	.demand-list-item-tag {
		position: relative;
		top: -6px;
	}

	.demand-list-item-tag>span {
		display: inline-block;
		height: 20px;
		line-height: 20px;
		padding: 0 6px;
		font-size: 12px;
		color: #82868a;
		background: #F4F6F9;
		border-radius: 2px;
		margin-right: 20px;
	}
</style>

<template>
	<div class="inform">
		<div class="moneyList" v-if="status==1">
			<h4>我的征稿 </h4>
			<el-button type="primary" class="release-gao" @click="toWrite">发布征稿 <i class="el-icon-edit el-icon--right"></i></el-button>
			
			<el-table :data="tableData" style="width: 100%">
				<el-table-column label="时间" width="200">
					<template slot-scope="scope">
						<span>{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="金额" width="150">
					<template slot-scope="scope">
						<span>{{ scope.row.cash }}</span>
					</template>
				</el-table-column>
				<el-table-column label="类型">
					<template slot-scope="scope" width="120">
						<span>{{ scope.row.status }}</span>
					</template>
				</el-table-column>
				<el-table-column label="相关">
					<template slot-scope="scope">
						<span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.address }}</span>
					</template>
				</el-table-column>
			</el-table>
			<div class="pages">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
		<div class="moneyList" v-if="status==2">
			<h4>征稿需求 </h4>
			
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				status:1,  //1是列表状态，2是发布
				tableData: [{
					date: '2016-05-02111',
					cash: '89',
					status: '购买',
					address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					cash: '12.22',
					status: '购买',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					cash: '23.3',
					status: '出售',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					cash: '42',
					status: '购买',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					cash: '77',
					status: '出售',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					cash: '34',
					status: '出售',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					cash: '12',
					status: '购买',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			//发布稿件
			toWrite:function(){
				let that = this;
				this.status = 2;
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/user");
	.list-status{
		margin-bottom: 20px;
	}
	.list-status span{
		display: inline-block;
		width:50%;
		cursor: pointer;
		text-align: center;
	}
	.list-status .active{
		padding-bottom: 5px;
		border-bottom:solid 2px #409EFF;
	}
	.cash {
		font-size: 20px;
		color: #56BCEB;
	}
	
	.myMoney-cash {
		line-height: 60px;
		background-color: #eef1f6;
		padding-left: 10px;
	}
	
	.myMoney {
		margin-bottom: 50px;
	}
	.release-gao{
		float: right;
		margin-bottom: 30px;
	}
</style>
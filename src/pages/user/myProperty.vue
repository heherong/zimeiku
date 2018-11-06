<template>
	<div class="inform">
		<div class="myMoney">
			<h4>我的钱包 </h4>
			<el-row class="myMoney-cash">
				<el-col :span="3">
					<div class="grid-content">账户余额：</div>
				</el-col>
				<el-col :span="15">
					<div class="cash">{{myMoney}}</div>
				</el-col>
				<el-button type="primary">提现</el-button>
			</el-row>
		</div>
		<div class="moneyList">
			<h4>账目明细 </h4>
			<el-row class="list-status">
				<el-col :span="6">
					<span @click="changeStatus(1)" :class=" status==1?'active':'' ">全部</span>
				</el-col>
				<el-col :span="6">
					<span @click="changeStatus(2)" :class=" status==2?'active':'' ">支出</span>
				</el-col>
				<el-col :span="6">
					<span @click="changeStatus(3)" :class=" status==3?'active':'' ">收入</span>
				</el-col>
				<el-col :span="6">
					<span @click="changeStatus(4)" :class=" status==4?'active':'' ">提现</span>
				</el-col>
			</el-row>
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

	</div>
</template>

<script>
	export default {
		data() {
			return {
				myMoney: '120.00',
				status:1,
				tableData: [{
					date: '2016-05-02',
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
			changeStatus:function(index){
				let that = this;
				that.status = index;
			}
		}
	}
</script>

<style>
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
</style>
<template>
	<div class="inform">
		<h4>全部信息  (<span>{{infoMount}}</span>)</h4>
		
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="通知时间" width="200">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="详情" width="500">
				<template slot-scope="scope">
					<span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.address }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				infoMount: 12,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
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
			}
		}
	}
</script>

<style>
	.inform {
		background-color: #fff;
		padding: 20px 20px 20px 40px;
	}
	
	.inform h4 {
		color: #504752;
		padding-bottom: 15px;
		margin-bottom: 20px;
		border-bottom: 1px solid #ddd;
	}
	
	.el-table thead tr th {
		background-color: #eef1f6;
	}
</style>
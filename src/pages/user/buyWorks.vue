<template>
	<div class="inform">
		<h4>已购稿件 </h4>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
			<el-table-column label="标题" width="100">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="作者" width="80">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="百度原创度" width="100">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="搜狗原创度" width="100">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="360原创度" width="100">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="谷歌原创度" width="100">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="字数" width="80">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="图片数" width="80">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="分类" width="80">
				<template slot-scope="scope">
					<span>{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="详情" width="200">
				<template slot-scope="scope">
					<span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.address }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pages">
			<el-pagination @current-change="currentChange" :current-page="curPage" layout="prev, pager, next" :total="totalNum">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	import { getSolicitMyList } from '@/api'
	
	export default {
		data() {
			return {
				curPage: 1, //当前页数
				pagesize: 4, //一页4条
				totalNum: 0, //总数
				getList_url: '/api/solicit/mylist',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
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
			getList: function(curPage, pagesize) {
				let that = this;
				let _data = {
					page: curPage,
					pagesize: pagesize
				}
				getSolicitMyList(_data).then(res => {
					if (res.data.list.data.length > 0) {
						for (let i = 0; i < res.data.list.data.length; i++) {
							res.data.list.data[i].created_at = res.data.list.data[i].created_at.substring(0, 10);
						}
						that.tableData = res.data.list.data;
						that.totalNum = res.data.list.total;
					}
				})
			},
			currentChange: function(curPage) {
				this.curPage = curPage;
				this.getList(this.curPage, this.pagesize);
				console.log(this.curPage) //点击第几页
			},
		},
		created: function() {
			//获取列表数据
			this.getList(this.curPage, this.pagesize);
		},
	}
</script>

<style>
	@import url("../../assets/css/user");
</style>

<template>
	<div class="inform">
		<h4>卖稿记录 </h4>
		
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
					<el-table-column label="标题" width="100">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="价格" width="100">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="内容" width="150">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="字数">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="图片数" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="总原创度" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="百度" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="搜狗" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="360" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.name }}</span>
						</template>
					</el-table-column>
					<el-table-column label="谷歌" width="80">
						<template slot-scope="scope">
							<span>1234</span>
						</template>
					</el-table-column>
					<el-table-column label="关键词" width="100">
						<template slot-scope="scope">
							<span>1234</span>
						</template>
					</el-table-column>
					<el-table-column label="领域" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.field }}</span>
						</template>
					</el-table-column>
					<el-table-column label="创建时间" width="90">
						<template slot-scope="scope">
							<span>{{ scope.row.created_at }}</span>
						</template>
					</el-table-column>
					<el-table-column label="文章状态" width="80">
						<template slot-scope="scope">
							<span>1234</span>
						</template>
					</el-table-column>
					<el-table-column label="投稿时间" width="90">
						<template slot-scope="scope">
							<span>1234</span>
						</template>
					</el-table-column>
					<el-table-column label="购买人账号" width="100">
						<template slot-scope="scope">
							<span>1234</span>
						</template>
					</el-table-column>
					<el-table-column label="购买时间" width="90">
						<template slot-scope="scope">
							<span>1234</span>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
						</template>
					</el-table-column>
		</el-table>
		<div class="pages">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
	@import url("../../assets/css/user");
</style>
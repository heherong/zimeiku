<template>
	<div class="inform">
		<div v-if="pageStatus == 1">
			<div class="myMoney">
				<h4>我的稿件 </h4>
				<el-button type="primary" class="release-gao">新建稿件 <i class="el-icon-edit el-icon--right"></i></el-button>
			</div>
			<div class="moneyList">
				<h4>稿件明细 </h4>
				<el-row class="list-status">
					<el-col :span="6">
						<span @click="changeStatus(1)" :class=" status==1?'active':'' ">全部</span>
					</el-col>
					<el-col :span="6">
						<span @click="changeStatus(2)" :class=" status==2?'active':'' ">发布投稿</span>
					</el-col>
					<el-col :span="6">
						<span @click="changeStatus(3)" :class=" status==3?'active':'' ">文章广场</span>
					</el-col>
					<el-col :span="6">
						<span @click="changeStatus(4)" :class=" status==4?'active':'' ">草稿箱</span>
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
		
		<div v-if="pageStatus == 2">
			<div class="myMoney">
				<h4>新建稿件  <i class="el-icon-edit-outline"></i></h4>
			</div>
			<vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
		</div>
		
	</div>
</template>

<script>
	import VueUeditorWrap from 'vue-ueditor-wrap'
	export default {
		components: {
		    VueUeditorWrap
		},
		data() {
			return {
				pageStatus:2, //列表页面1 ，新建页面2
				status:1,
				tableData: [{date:'2016-05-02',cash:'89',status:'购买',address:'上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'},{date:'2016-05-04',cash:'12.22',status:'购买',address:'上海市普陀区金沙江路 1517 弄'},{date:'2016-05-01',cash:'23.3',status:'出售',address:'上海市普陀区金沙江路 1519 弄'},{date:'2016-05-03',cash:'42',status:'购买',address:'上海市普陀区金沙江路 1516 弄'},{date:'2016-05-04',cash:'77',status:'出售',address:'上海市普陀区金沙江路 1517 弄'},{date:'2016-05-01',cash:'34',status:'出售',address:'上海市普陀区金沙江路 1519 弄'},{date:'2016-05-03',cash:'12',status:'购买',address:'上海市普陀区金沙江路 1516 弄'}],
				msg: '<h2>Hello World!</h2>',
				myConfig: {
		            // 如果需要上传功能,找后端小伙伴要服务器接口地址
		            // serverUrl: 'http://api.demo.com/ueditor/upload',
		            // 你的UEditor资源存放的路径,相对于打包后的index.html
		            UEDITOR_HOME_URL: './static/UEditor/',
		            // 编辑器不自动被内容撑高
		            autoHeightEnabled: false,
		            // 初始容器高度
		            initialFrameHeight: 540,
		            // 初始容器宽度
		            initialFrameWidth: '100%',
		            // 关闭自动保存
		            enableAutoSave: false
		       }
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
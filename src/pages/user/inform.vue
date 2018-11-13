<template>
	<div class="inform">
		<div v-if="listShow==1">
			<h4>全部信息  (<span>{{infoMount}}</span>)</h4>
			<!--<el-badge :value="infoMount" class="item">全部信息</el-badge>-->
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="index" width="60" label="序号"></el-table-column>
				<el-table-column label="标题" width="300">
					<template slot-scope="scope">
						<span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.address }}</span>
					</template>
				</el-table-column>
				<el-table-column label="通知状态" width="200">
					<template slot-scope="scope">
						<el-tag type="info" size="medium" v-if="scope.row.status==1">已读</el-tag>
						<el-tag type="danger" size="medium" v-if="scope.row.status==2">未读</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="通知时间" width="150">
					<template slot-scope="scope">
						<span>{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
		<div v-if="listShow==2">
			<h4><span>{{detail.name}}</span></h4>
			<el-row >
			  	<el-col :span="24" style="background-color: #ecf3ff;padding: 20px;">
			  		<div v-html="detail.content"></div>
			  	</el-col>
			</el-row>
			<el-row style="text-align: center;">
			  	<el-col :span="24">
			  		<el-button @click="returnPage">返回</el-button>
			  	</el-col>
			</el-row>
		</div>	
	</div>
</template>

<script>
	import {contentTest} from '@/assets/js/public.js' //注意路径
	export default {
		data() {
			return {
				listShow:1,  //1是列表页，2是详情页
				infoMount: 12,
				tableData: [{date:'2016-05-02',name:'王小虎',status:1,address:'上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'},{date:'2016-05-04',name:'王小虎',status:1,address:'上海市普陀区金沙江路 1517 弄'},{date:'2016-05-01',name:'王小虎',status:2,address:'上海市普陀区金沙江路 1519 弄'},{date:'2016-05-03',name:'王小虎',status:1,address:'上海市普陀区金沙江路 1516 弄'},{date:'2016-05-04',name:'王小虎',status:2,address:'上海市普陀区金沙江路 1517 弄'},{date:'2016-05-01',name:'王小虎',status:2,address:'上海市普陀区金沙江路 1519 弄'},{date:'2016-05-03',name:'王小虎',status:2,address:'上海市普陀区金沙江路 1516 弄'}],
				detail:{
					name:'',
					content:contentTest,
				}
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
				let that = this;
				that.listShow = 2;
				that.detail.name = '双十一购物狂欢节'; 
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			returnPage:function(){
				this.listShow = 1;
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/user");
</style>
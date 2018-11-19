<template>
	<div class="inform">
		<div v-if="pageStatus == 1">
			<div class="myMoney">
				<h4>我的稿件 </h4>
				<el-button type="primary" class="release-gao" @click="toAddGao">新建稿件 <i class="el-icon-edit el-icon--right"></i></el-button>
				<p class="border-p"></p>
			<!--</div>
			<div class="moneyList">-->
				<!--<h4>稿件明细 </h4>-->
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
				<el-table 
					:data="tableData.slice((curPage-1)*pagesize,curPage*pagesize)"
					 style="width: 100%">
					<el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
					<el-table-column label="标题" width="100">
						<template slot-scope="scope">
							<span>{{ scope.row.title }}</span>
						</template>
					</el-table-column>
					<el-table-column label="内容" width="150">
						<template slot-scope="scope">
							<span>{{ scope.row.content }}</span>
						</template>
					</el-table-column>
					<el-table-column label="字数">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.words_count }}</span>
						</template>
					</el-table-column>
					<el-table-column label="图片数" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.img_count }}</span>
						</template>
					</el-table-column>
					<el-table-column label="总原创度" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.original_degree }}</span>
						</template>
					</el-table-column>
					<el-table-column label="百度" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.baidu }}</span>
						</template>
					</el-table-column>
					<el-table-column label="搜狗" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.sogou }}</span>
						</template>
					</el-table-column>
					<el-table-column label="360" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.b360 }}</span>
						</template>
					</el-table-column>
					<el-table-column label="谷歌" width="80">
						<template slot-scope="scope">
							<span>没有找到字段</span>
						</template>
					</el-table-column>
					<el-table-column label="关键词" width="100">
						<template slot-scope="scope">
							<span>没有找到字段</span>
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
							<span>没有找到字段</span>
						</template>
					</el-table-column>
					<el-table-column label="投稿时间" width="90">
						<template slot-scope="scope">
							<span>没有找到字段</span>
						</template>
					</el-table-column>
					<el-table-column label="购买人账号" width="100">
						<template slot-scope="scope">
							<span>没有找到字段</span>
						</template>
					</el-table-column>
					<el-table-column label="购买时间" width="90">
						<template slot-scope="scope">
							<span>没有找到字段</span>
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
						@current-change="currentChange"
						:current-page="curPage"
						layout="prev, pager, next"
						:total="totalNum" 
						>
					</el-pagination>
				</div>
			
			</div>
		</div>
		
		<div v-if="pageStatus == 2">
			<div class="myMoney">
				<h4>新建稿件  <i class="el-icon-edit-outline"></i></h4>
			</div>
			<el-row>
				<el-col :span="3">
					<label for=""><span class="input-must">*</span>稿件标题</span></label>
				</el-col>
				<el-col :span="10">
					<el-input v-model="form.title" class="add-title" placeholder="请输入标题"></el-input>
				</el-col>
			</el-row>
			<div>
				<vue-ueditor-wrap v-model="form.msg" :config="myConfig"></vue-ueditor-wrap>
			</div>
			
			
			<div style="position: absolute;left: 100%;top: 170px;">
				<el-row>
					<el-button type="success" plain icon="el-icon-check" @click="toSave(2)">保存并返回</el-button>
				</el-row>
				<el-row>
					<el-button type="success" plain icon="el-icon-check" @click="toSave(1)">保存至草稿箱</el-button>
				</el-row>
				<el-row>
					<el-button type="primary" plain icon="el-icon-upload2">发稿（文章广场）</el-button>
				</el-row>
				<el-row>
					<el-button type="danger" plain icon="el-icon-close" @click="quit">取消</el-button>
				</el-row>
			</div>
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
				pageStatus:1, //列表页面1 ，新建页面2
				status:1,
				getList_url:'http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/article/mylist',
				saveWork:'http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/article/add',
				curPage:1, //当前页数
				pagesize:10, //一页10条
				totalNum:0,  //总数
				tableData: [],
				form:{
					msg:'<h2>Hello World!</h2>',
					title:''
				},
				myConfig: {
		            // 如果需要上传功能,找后端小伙伴要服务器接口地址
		            serverUrl: '/api/ueditor/server?action=config&noCache=1542597685533',
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
		created:function(){
        	this.getList();
   		},
		methods: {
			getList:function(){
				let that = this;
				that.axios.get(that.getList_url,{
	                params:{
	                    page:that.curPage,
	                    pagesize:that.pagesize
	                }
	            }).then((response)=>{
	            	
	            	if(response.data.data.list.length>0){
	            		for(let i=0;i<response.data.data.list.length;i++){
	            			response.data.data.list[i].created_at = response.data.data.list[i].created_at.substring(0,10);
	            		}
	            		that.tableData = response.data.data.list;
	            		that.totalNum = response.data.data.count;
	            	}
	                
	                console.log(that.tableData);
	            }).catch((response)=>{
	                console.log(response);
	            })
			},
			currentChange: function(curPage){
                this.curPage = curPage;
                console.log(this.curPage)  //点击第几页
        	},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			changeStatus:function(index){
				let that = this;
				that.status = index;
			},
			//新建稿件
			toAddGao:function(){
				this.pageStatus = 2;
			},
			toSave:function(index){
				if(index==1){
					//保存 发布投稿：1 文章广场：2 草稿箱: 3
					let that = this;
					if(that.form.title){
						that.axios.post(that.saveWork, {
						    content: that.form.msg,
						    title: that.form.title,
						    type:2
						  })
						  .then(function (response) {
						    let res  = response.data;
						    if(res.code==0){
						    	that.$message({
						          message: '保存成功！',
						          type: 'success'
						        });
						    }else{
						    	that.$message.error('保存失败，请重新保存');
						    }
						  })
						  .catch(function (error) {
						    console.log(error);
						  });
					}else{
						that.$message.error('标题不能为空');
						return;
					}
					
				}else{
					//保存
					let that = this;
					if(that.form.title){
						that.axios.post(that.saveWork, {
						    content: that.form.msg,
						    title: that.form.title,
						    type:2
						  })
						  .then(function (response) {
						  	let res  = response.data;
						    if(res.code==0){
						    	that.$message({
						          message: '保存成功！',
						          type: 'success'
						        });
						    }else{
						    	that.$message.error('保存失败，请重新保存');
						    }
						    that.quit();
						  })
						  .catch(function (error) {
						    console.log(error);
						  });
					}else{
						that.$message.error('标题不能为空');
						return;
					}
				}
			},
			quit:function(){
				this.pageStatus = 1;
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/user");
	/*.market{
		width:95%;
	}*/
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
	.inform h4{
		display: inline-block;
		border: none;
		position: relative;
    	top: 15px;
	}
	.border-p{
		border-bottom: 1px solid #ddd;
		margin-bottom: 20px;
	}
</style>
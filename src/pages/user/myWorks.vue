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
					 <el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="table-expand">
						<el-form-item label="总原创度:">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="百度:">
							<span>{{ props.row.shop }}</span>
						</el-form-item>
						<el-form-item label="搜狗:">
							<span>{{ props.row.id }}</span>
						</el-form-item>
						<el-form-item label="360:">
							<span>{{ props.row.shopId }}</span>
						</el-form-item>
						<el-form-item label="谷歌:">
							<span>{{ props.row.category }}</span>
						</el-form-item>
						<el-form-item label="关键词:">
							<span>{{ props.row.address }}</span>
						</el-form-item>
						<el-form-item label="领域:">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						<el-form-item label="创建时间:">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						<el-form-item label="文章状态:">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						<el-form-item label="投稿时间:">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						<el-form-item label="购买人账号:">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						<el-form-item label="内容:">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						</el-form>
					</template>
					</el-table-column>
					<el-table-column type="index" width="180" label="序号" align="center"></el-table-column>
					
					<el-table-column label="标题" width="180">
						<template slot-scope="scope">
							<span>{{ scope.row.title }}</span>
						</template>
					</el-table-column>
					<el-table-column label="字数">
						<template slot-scope="scope" width="180">
							<span>{{ scope.row.words_count }}</span>
						</template>
					</el-table-column>
					<el-table-column label="购买时间" width="180">
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
					<el-button type="primary" plain icon="el-icon-upload2" @click="toupload()">发稿（文章广场）</el-button>
				</el-row>
				<el-row>
					<el-button type="danger" plain icon="el-icon-close" @click="quit">取消</el-button>
				</el-row>
			</div>
		</div>
		
		<div v-if="pageStatus == 3">
			<div class="myMoney">
				<h4>{{form.title}}  <i class="el-icon-edit-outline"></i></h4>
			</div>
			<div>
				<el-row>
				  	<el-col :span="4">
				  		<span>文章类型：</span>
				  	</el-col>
				  	<el-col :span="20">
				  		<el-checkbox-group v-model="quareForm.type">
						    <el-checkbox v-for="type in quareForm.typeBox" :label="type" :key="type"  @change="checkBoxs">{{type}}</el-checkbox>
						</el-checkbox-group>
				  	</el-col>
				</el-row>
				<el-row>
				  	<el-col :span="4">
				  		<span>关键词：</span>
				  	</el-col>
				  	<el-col :span="20">
				  		<el-tag>护肤品</el-tag>
				  	</el-col>
				</el-row>
				<p style="    text-align: center;color: rgb(158, 158, 158);font-size: 14px;border-bottom: dotted 1px #eaeaea;margin: 0px 0 15px 0;padding-bottom: 10px;">文章原创度</p>
				<el-row>
					<el-col :span="3">
						<label for=""><span class="input-must">*</span>百度原创度</span></label>
					</el-col>
					<el-col :span="6">
						<el-slider v-model="form.baidu"></el-slider>
					</el-col>
					<el-col :span="2" style="margin-right:30px;color:#333;">
						<p style="text-align: right;">( {{ form.baidu}} )%</p>
					</el-col>
					<el-col :span="3">
						<label for=""><span class="input-must">*</span>搜狗原创度</span></label>
					</el-col>
					<el-col :span="6">
						<el-slider v-model="form.sogou"></el-slider>
					</el-col>
					<el-col :span="2">
						<p style="text-align: right;color:#333;">( {{ form.sogou}} )%</p>
					</el-col>
				</el-row>
			</div>
			
		</div>
	</div>
</template>

<script>
	import VueUeditorWrap from 'vue-ueditor-wrap'
	import {baseUrl} from '@/api/index.js' //注意路径
	export default {
		components: {
		    VueUeditorWrap
		},
		data() {
			return {
				pageStatus:3, //列表页面1 ，新建页面2,3是点击保存到文章广场之后的返回数据
				status:1,  //列表页面的切换lab
				getList_url: baseUrl+'article/mylist',
				saveWork:baseUrl+'article/add',
				curPage:1, //当前页数
				pagesize:10, //一页10条
				totalNum:0,  //总数
				tableData: [{
					id: '12987122',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
					}, {
					id: '12987123',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
					}, {
					id: '12987125',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
					}, {
					id: '12987126',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
					}],
				form:{
					msg:'<h2>Hello World!</h2>',
					title:'123'
				},
				quareForm:{
					typeBox:['教育', '科学', '情感', '广告'],
					type: ['情感' ],
					checkBoxPre:[], //默认保存选一个
				},
				myConfig: {
		            // 如果需要上传功能,找后端小伙伴要服务器接口地址
//		            serverUrl: baseUrl+'ueditor/server?action=config&noCache=1542597685533',
		            serverUrl: baseUrl+'ueditor/server',
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
		mounted:function(){
			if(!this.$Cookies.get('token')){
				this.$router.push('/index')
			}else{
				this.getList();
			}
        	
   		},
		methods: {
			getList:function(){
				let that = this;
				
				that.$fetch(that.getList_url,{
						page:that.curPage,
                 		pagesize:that.pagesize
				}).then((response) => {
			        console.log(response);
			        if(response.data.list.length>0){
	            		for(let i=0;i<response.data.list.length;i++){
	            			response.data.list[i].created_at = response.data.list[i].created_at.substring(0,10);
	            		}
	            		that.tableData = response.data.list;
	            		that.totalNum = response.data.count;
	            	}
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
			//发稿到文章广场
			toupload:function(){
				
				let that = this;
				//xxxxx
				if(that.form.title){
					that.pageStatus = 3;
				}else{
					that.$message.error('标题不能为空');
					return;
				}
				
				
			},
			//多选
			checkBoxs: function() {
//				<el-checkbox-group v-model="quareForm.type">
//					    <el-checkbox v-for="type in quareForm.typeBox" :label="type" :key="type"  @change="checkBoxs">{{type}}</el-checkbox>
//					</el-checkbox-group>
				let that = this;
				if(that.quareForm.type.length > 1) {
					that.checkBoxPre = [];
					that.checkBoxPre.push(that.quareForm.type[1]);
					
					that.quareForm.type = that.checkBoxPre;
				} else {
					that.checkBoxPre = that.quareForm.type;
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
	.table-expand {
    font-size: 0;
	}
	.table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>
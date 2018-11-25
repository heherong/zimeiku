<template>
	<div class="inform">
		<div class="moneyList" v-if="status==1">
			<h4>我的征稿 </h4>
			<el-button type="primary" class="release-gao" @click="toWrite">发布征稿 <i class="el-icon-edit el-icon--right"></i></el-button>
			<p class="border-p"></p>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
				<el-table-column label="标题" width="110" align="center">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>标题: {{ scope.row.title }}</p>
							<div slot="reference" class="name-wrapper">
								<span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.title }}</span>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="详情" width="130" align="center">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>详情: {{ scope.row.content }}</p>
							<div slot="reference" class="name-wrapper">
								<span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.content }}</span>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="单价（元）" align="center">
					<template slot-scope="scope" width="100">
						<span>{{ scope.row.price }}</span>
					</template>
				</el-table-column>
				<el-table-column label="字数" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.words }}</span>
					</template>
				</el-table-column>
				<el-table-column label="图片数" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.img_num }}</span>
					</template>
				</el-table-column>
				<el-table-column label="篇数" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.number }}</span>
					</template>
				</el-table-column>
				<el-table-column label="投稿数" align="center">
					<template slot-scope="scope" width="70">
						<span>0</span>
						<!--<span>{{ scope.row.price }}</span>-->
					</template>
				</el-table-column>
				<el-table-column label="采纳数" width="90" align="center">
					<template slot-scope="scope">
						<span>0</span>
						<!--<span>{{ scope.row.number }}</span>-->
					</template>
				</el-table-column>
				<el-table-column label="开始时间" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.created_at }}</span>
					</template>
				</el-table-column>
				<el-table-column label="周期天数（天）" width="80" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.days }}</span>
					</template>
				</el-table-column>
				<el-table-column label="百度原创度" width="80" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.baidu_degree }}</span>
					</template>
				</el-table-column>
				<el-table-column label="搜狗原创度" width="80" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.soguo_degree }}</span>
					</template>
				</el-table-column>
				<el-table-column label="360原创度" width="80" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.threesixzero_degree }}</span>
					</template>
				</el-table-column>
				<el-table-column label="综合原创度" width="80" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.average_degree }}</span>
					</template>
				</el-table-column>
				<!--<el-table-column label="状态" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.status }}</span>
					</template>
				</el-table-column>-->
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!--!!!!!!!!!!!!!!!!!分页!!!!!!!!!!!!!!!! -->
			<div class="pages">
				<el-pagination @current-change="currentChange"  :current-page="curPage" layout="prev, pager, next" :total="totalNum">
				</el-pagination>
			</div>
		</div>
		<div class="moneyList" v-if="status==2">
			<h4>征稿需求 </h4>
			<el-form ref="form" :model="form" label-width="80px">
				<!--征稿标题-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>征稿标题</span></label>
						</el-col>
						<el-col :span="10">
							<el-input v-model="form.title" class="add-title" placeholder="请输入标题，5~50个字"></el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<!--选择标签-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>分类(限一项)</span></label>
						</el-col>
						<el-col :span="18">
							<el-checkbox-group v-model="checkboxGroup">
								<el-checkbox v-for="item in form.checkedData" :key="item.id" :label="item.id" 
									 @change="checkBoxs" class="release-checkBoxs">{{item.name}}</el-checkbox>
								
							</el-checkbox-group>
						</el-col>
					</el-row>
				</el-form-item>
				<!--字数要求-->
				<el-form-item class="release-size-request">
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>字数要求</span></label>
						</el-col>
						<el-col :span="8">
							<el-input v-model="form.font" @change="toChangeSize(3)"></el-input>
						</el-col>
						<el-col :span="2">
							<el-button class="release-up"><i class="el-icon-arrow-up" @click="toChangeSize(1)"></i></el-button>
							<el-button class="release-up"><i class="el-icon-arrow-down" @click="toChangeSize(2)"></i></el-button>
						</el-col>
						<el-col :span="3">
							<p>字 左右</p>
						</el-col>
					</el-row>
				</el-form-item>
				<!--图片数-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>图片数</span></label>
						</el-col>
						<el-col :span="8">
							<el-input v-model="form.images" @change="toChangeImg()"></el-input>
						</el-col>
						<el-col :span="3">
							<p style="margin-left:10px;">张 以上</p>
						</el-col>
					</el-row>
				</el-form-item>
				<!--稿件要求-->
				<p style="margin: 0 auto;text-align: center;color: #909090;font-size: 14px;margin-bottom: 7px;">( 温馨提示：征稿文章的原创度会按照您所选原创度来判定，且不会低于设定值； 0为不限 )</p>
				<el-form-item>
					<el-row>
						<el-col :span="3">
							<label for=""><span class="input-must">*</span>百度原创度</label>
						</el-col>
						<el-col :span="6">
							<el-slider v-model="form.baidu"></el-slider>
						</el-col>
						<el-col :span="2" style="margin-right:30px;color:#333;">
							<p style="text-align: right;">( {{ form.baidu}} )%</p>
						</el-col>
						<el-col :span="3">
							<label for=""><span class="input-must">*</span>搜狗原创度</label>
						</el-col>
						<el-col :span="6">
							<el-slider v-model="form.sogou"></el-slider>
						</el-col>
						<el-col :span="2">
							<p style="text-align: right;color:#333;">( {{ form.sogou}} )%</p>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item>
					<el-row>
						<el-col :span="3">
							<label for=""><span class="input-must">*</span>360原创度</label>
						</el-col>
						<el-col :span="6" >
							<el-slider v-model="form.b360"></el-slider>
						</el-col>
						<el-col :span="2" style="margin-right:30px;color:#333;">
							<p style="text-align: right;">( {{ form.b360}} )%</p>
						</el-col>
						<el-col :span="3">
							<label for=""><span class="input-must">*</span>综合原创度</label>
						</el-col>
						<el-col :span="6">
							<el-slider v-model="form.bchrome"></el-slider>
						</el-col>
						<el-col :span="2">
							<p style="text-align: right;color:#333;">( {{ form.bchrome}} )%</p>
						</el-col>
					</el-row>
				</el-form-item>
				<!--稿件需求量-->
				<el-form-item class="release-size-request">
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>稿件需求量</span></label>
						</el-col>
						<el-col :span="8">
							<el-input v-model="form.gaoCont" @change="toChangeCont(3)"></el-input>
						</el-col>
						<el-col :span="2">
							<el-button class="release-up"><i class="el-icon-arrow-up" @click="toChangeCont(1)"></i></el-button>
							<el-button class="release-up"><i class="el-icon-arrow-down" @click="toChangeCont(2)"></i></el-button>
						</el-col>
						<el-col :span="3">
							<p>件</p>
						</el-col>
					</el-row>
				</el-form-item>
				<!--稿费-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>每篇价格</span></label>
						</el-col>
						<el-col :span="10">
							<el-input v-model="form.price"  @change="toChangePrice"></el-input>
						</el-col>
						<el-col :span="3">
							<p style="margin-left: 10px;">元</p>
						</el-col>
					</el-row>
				</el-form-item>
				<!--征稿周期-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>征稿周期</span></label>
						</el-col>
						<el-col :span="10">
							<el-select v-model="form.checkTerm" placeholder="请选择" style="width: 100%;">
								<el-option v-for="item in form.checkTermOptions" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-col>
						<el-col :span="3">
							<p style="margin-left:10px;">天</p>
						</el-col>
					</el-row>
				</el-form-item>
				
				<!--征稿详细说明-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>征稿详细说明</span></label>
						</el-col>
						<el-col :span="15">
							<el-input type="textarea" :rows="10" placeholder="请输入内容（50字以上）" v-model="form.content"></el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item style="text-align: center;">
					<el-button @click="quit">取消</el-button>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
//	import {baseUrl} from '@/api/index.js' //注意路径
	import qs from 'qs'
	export default {
		data() {
				return {
					status: 1, //1是列表状态，2是发布
					checkboxGroup: [], //实时状态
					checkBoxPre: [], //当前状态
					radio: '1',
					getList_url: '/api/solicit/mylist',  //获取列表
					addRequest:'/api/solicit/add',  //创建列表
					getCategory:'/api/fields/list',  //类别
					curPage: 1, //当前页数
					pagesize: 3, //一页10条
					totalNum: 0, //总数
					form: {
						title: '',
						checkedData: [],  //类别选择
						font: 2000, //稿子字数
						gaoCont: 1, //稿子篇数
						images:1,
						baidu:50,
						sogou:50,
						b360:50,
						bchrome:50,
						checkOptions: [],
						price: '10', //每篇价格
//						lowPrice: 50, //最低值
//						highPrice: 100, //最高值
						checkTerm: '1', //周期
						checkTermOptions:[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5',label:'5'},{value:'6',label:'6'},{value:'7',label:'7'}],
						content: '',
						startTime: '' //开始时间
					},
					tableData: [],
				}
			},
			created: function() {
				//获取列表数据
				this.getList(this.curPage,this.pagesize);
				//获取领域列表
				this.getCategoryFun();
			},
			methods: {
				getList:function(curPage,pagesize) {
					let that = this;
					that.$fetch(that.getList_url+'?page='+curPage+'&pagesize='+pagesize).then((response) => {
			        console.log(response);
				        if(response.data.list.data.length > 0) {
							for(let i = 0; i < response.data.list.data.length; i++) {
								response.data.list.data[i].created_at = response.data.list.data[i].created_at.substring(0, 10);
							}
							// console.log(response.data.list.data,response.data.list.total);
							that.tableData = response.data.list.data;
							that.totalNum = response.data.list.total;
						}
				    })
					
				},
				getCategoryFun:function(){
					//获取类别
					let that = this;
					that.$fetch(that.getCategory).then((response) => {
				        if(response.data.list){
				        	that.form.checkedData = response.data.list;
				        }
				    })
				},
				currentChange: function(curPage) {
					this.curPage = curPage;
					this.getList(this.curPage,this.pagesize);
					console.log(this.curPage) //点击第几页
				},
				handleEdit(index, row) {
					console.log(index, row);
				},
				handleDelete(index, row) {
					console.log(index, row);
				},
				//发布稿件
				toWrite: function() {
					let that = this;
					this.status = 2;
				},
				onSubmit() {
					let that = this;
					if(that.form.title) {
						if(that.form.title.length > 50 || that.form.title.length < 5) {
							that.$message.error('征稿标题字数限制为5~50');
							that.form.title = "";
						} else {

							if(that.checkBoxPre.length < 1) {
								that.$message.error('请至少选择一项标签');
							} else {
								if(that.form.images && that.form.images>=1) {
									if(that.form.content && that.form.content.length > 50) {
										//调用接口
										let addData = qs.stringify({
										    content: that.form.content,
										    title: that.form.title,
										    price:that.form.price,
										    number:that.form.gaoCont,
										    days:that.form.checkTerm*7,
										    field:that.checkBoxPre.join(','),
										    words:that.form.font,
										    img_num:that.form.images,
										    baidu_degree:that.form.baidu,
										    soguo_degree:that.form.sogou,
										    threesixzero_degree:that.form.b360,
										    average_degree:that.form.bchrome,
										 })
										that.$post(that.addRequest, addData)
										  .then(function (response) {
//										  	console.log(response);
										    if(response.code==0){
										    	that.$message({
										          	message: '创建成功！',
										          	type: 'success'
										        });
										        that.quit();
										    }else{
										    	
										    }
										  })
										  .catch(function (error) {
										    console.log(error);
										  });
									} else {
										that.$message.error('征稿详细说明字数要大于50');
									}
								} else {
									that.$message.error('图片数量不小于 1 张');
								}
							}
						}
					} else {
						that.$message.error('征稿标题不能为空');
						that.form.title = "";
					}
				},
				//多选
				checkBoxs: function() {
					let that = this;
					console.log(that.checkboxGroup)
					if(that.checkboxGroup.length > 1) {
						that.checkBoxPre = [];
						that.checkBoxPre.push(that.checkboxGroup[1]);
						
						that.checkboxGroup = that.checkBoxPre;
					} else {
						that.checkBoxPre = that.checkboxGroup;
					}
				},
				//改变字数
				toChangeSize: function(index) {
					let that = this;
					if(index == 1 && that.form.font <= 100000) {
						that.form.font = that.form.font + 100;

					} else if(index == 2 && that.form.font > 100) {
						that.form.font = that.form.font - 100;

					} else if((index == 3 && that.form.font <= 100) || !Number.isInteger(parseInt(that.form.font))) {
						that.form.font = 100;
					}
					that.form.font = parseInt(that.form.font);
				},
				toChangeImg:function(){ 
					let that = this;
					if((!Number.isInteger(parseInt(that.form.images)))){
						that.form.images = 1;
					}
					that.form.images = parseInt(that.form.images);
				},
				//改变稿子数
				toChangeCont: function(index) {
					let that = this;
					if(index == 1 && that.form.gaoCont <= 100000) {
						that.form.gaoCont = that.form.gaoCont + 1;

					} else if(index == 2 && that.form.gaoCont >= 2) {
						that.form.gaoCont = that.form.gaoCont - 1;

					} else if((index == 3 && that.form.gaoCont <= 1) || !Number.isInteger(parseInt(that.form.gaoCont))) {
						that.form.gaoCont = 1;
					}
					that.form.gaoCont = parseInt(that.form.gaoCont);
				},
				//改变价格
				toChangePrice:function(){
					let that = this;
					if((!Number.isInteger(parseInt(that.form.price)))){
						that.form.price = 10;
					}
					that.form.price = parseInt(that.form.price);
				},
				//返回
				quit: function() {
					this.status = 1;
				}
			}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/user");
	.release-checkBoxs {
		margin: 0 20px 20px 0 !important;
	}
	
	.release-up {
		height: 20px;
		padding: 0 20px;
		position: relative;
		top: -31px;
		left: -11px;
	}
	
	.release-up:first-child {
		top: -10px;
		left: -1px;
	}
	
	.release-up i {}
	
	.release-size-request {
		margin-bottom: -30px;
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
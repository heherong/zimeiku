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
							<label for=""><span class="input-must">*</span>选择标签(最多三项)</span></label>
						</el-col>
						<el-col :span="18">
							<el-checkbox-group v-model="checkboxGroup">
								<el-checkbox v-for="item in form.checkedData" :key="item" :label="item" border @change="checkBoxs" class="release-checkBoxs"></el-checkbox>
							</el-checkbox-group>
						</el-col>
					</el-row>
				</el-form-item>
				<!--稿件要求-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>稿件要求</span></label>
						</el-col>
						<el-col :span="6">
							<el-radio v-model="radio" label="1" border>原创未发表</el-radio>
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
							<label for=""><span class="input-must">*</span>稿费</span></label>
						</el-col>
						<el-col :span="10">
							<el-select v-model="form.checkValue" placeholder="请选择" style="width: 100%;" @change="toChangecheck()">
								<el-option v-for="item in form.checkOptions" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-col>
					</el-row>
					<el-row v-if="form.checkValue == 4">
						<el-col :span="5">
							<label for="" style="visibility:hidden"><span class="input-must">*</span>稿费</span></label>
						</el-col>
						<!--起始价格-->
						<el-col :span="4">
						<el-input v-model="form.lowPrice" @change="toChangePrice(3)"></el-input>
						</el-col>
						<el-col :span="2">
							<el-button class="release-up" @click="toChangePrice(1)" ><i class="el-icon-arrow-up" ></i></el-button>
							<el-button class="release-up" @click="toChangePrice(2)" ><i class="el-icon-arrow-down"></i></el-button>
						</el-col>
						<!--最高价格-->
						<el-col :span="4">
						<el-input v-model="form.highPrice" @change="toChangeHighPrice(3)"></el-input>
						</el-col>
						<el-col :span="2">
							<el-button class="release-up" @click="toChangeHighPrice(1)"><i class="el-icon-arrow-up"></i></el-button>
							<el-button class="release-up" @click="toChangeHighPrice(2)"><i class="el-icon-arrow-down"></i></el-button>
						</el-col>
						
					</el-row>
				</el-form-item>
				<!--征稿周期-->
				<el-form-item >
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
					</el-row>
				</el-form-item>
				<!--征稿详细说明-->
				<el-form-item >
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>征稿详细说明</span></label>
						</el-col>
						<el-col :span="10">
							<el-input type="textarea" :rows="10" placeholder="请输入内容" ></el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item style="text-align: center;">
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button @click="quit">取消</el-button>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				status: 1, //1是列表状态，2是发布
				checkboxGroup: [], //实时状态
				checkBoxPre: [], //当前状态
				radio: '1',
				form: {
					title: '',
					checkedData: ['时事热点', '情感', '美妆时尚', '旅游', '商业软文', '生活窍门', 'IT互联网', '电影音乐', '星座占卜2', '时事热点2', '情感2', '美妆时尚2'],
					font: 2000,  //稿子字数
					gaoCont: 1,  //稿子篇数
					checkOptions: [{value:'1',label:'¥200-¥500 (对稿件质量有简单要求)'},{value:'2',label:'¥500-¥1000 (对稿件质量有明确要求)'},{value:'3',label:'¥1000-¥1500 (对稿件质量、风格有要求)'},{value:'4',label:'自定义稿费区间'}],
					checkValue: '', //下拉框选中的值
					lowPrice:50,  //最低值
					highPrice:100,  //最高值
					checkTerm:'',  //周期
					checkTermOptions:[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'}],
				},
				tableData: [{date:'2016-05-02111',cash:'89',status:'购买',address:'上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'},{date:'2016-05-04',cash:'12.22',status:'购买',address:'上海市普陀区金沙江路 1517 弄'},{date:'2016-05-01',cash:'23.3',status:'出售',address:'上海市普陀区金沙江路 1519 弄'},{date:'2016-05-03',cash:'42',status:'购买',address:'上海市普陀区金沙江路 1516 弄'},{date:'2016-05-04',cash:'77',status:'出售',address:'上海市普陀区金沙江路 1517 弄'},{date:'2016-05-01',cash:'34',status:'出售',address:'上海市普陀区金沙江路 1519 弄'},{date:'2016-05-03',cash:'12',status:'购买',address:'上海市普陀区金沙江路 1516 弄'}],
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
			toWrite: function() {
				let that = this;
				this.status = 2;
			},
			onSubmit() {
				console.log('submit!');
			},
			//多选
			checkBoxs: function() {
				let that = this;
				if(that.checkboxGroup.length > 3) {
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
			//改变稿子数
			toChangeCont: function(index) {
				let that = this;
				if(index == 1 && that.form.gaoCont <= 100000) {
					that.form.gaoCont = that.form.gaoCont + 1;

				} else if(index == 2 && that.form.gaoCont >= 2) {
					that.form.gaoCont = that.form.gaoCont - 1;

				} else if((index == 3 && that.form.gaoCont <= 1) || !Number.isInteger(parseInt(that.form.gaoCont)) ) {
					that.form.gaoCont = 1;
				}
				that.form.gaoCont = parseInt(that.form.gaoCont);
			},
			//自定义价格 最低
			toChangePrice:function(index){
				let that = this;
				if(index == 1 ) {
					that.form.lowPrice = that.form.lowPrice + 50;

				} else if(index == 2 && that.form.lowPrice >= 100) {
					that.form.lowPrice = that.form.lowPrice - 50;

				} else if((index == 3 && that.form.lowPrice <= 50) || !Number.isInteger(parseInt(that.form.lowPrice))) {
					
					that.form.lowPrice = 50;
				}
				that.form.lowPrice = parseInt(that.form.lowPrice);
				if(that.form.lowPrice>that.form.highPrice){
					that.$message({
			          	message: '最小价位应小于最高价位',
			          	type: 'warning'
			        });
				}
			},
			//自定义价格 最高
			toChangeHighPrice:function(index){
				let that = this;
				if(index == 1 ) {
					that.form.highPrice = that.form.highPrice + 50;

				} else if(index == 2 && that.form.highPrice >= 150) {
					that.form.highPrice = that.form.highPrice - 50;

				} else if((index == 3 && that.form.highPrice <= 100) || !Number.isInteger(parseInt(that.form.highPrice))) {
					
					that.form.highPrice = 100;
				}
				that.form.highPrice = parseInt(that.form.highPrice);
				if(that.form.lowPrice>that.form.highPrice){
					that.$message({
			          	message: '最高价位应大于最小价位',
			          	type: 'warning'
			        });
				}
			},
			//下拉框
			toChangecheck:function(){
				let that = this;
			},
			//返回
			quit:function(){
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
</style>
<template>
	<div class="inform">
		<div class="moneyList" v-if="status==1">
			<h4>我的征稿 </h4>
			<el-button type="primary" class="release-gao" @click="toWrite">发布征稿 <i class="el-icon-edit el-icon--right"></i></el-button>
			<p class="border-p"></p>
			<el-table :data="tableData.slice((curPage-1)*pagesize,curPage*pagesize)" style="width: 100%">
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
						<span>{{ scope.row.start_at }}</span>
					</template>
				</el-table-column>
				<el-table-column label="图片数" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.start_at }}</span>
					</template>
				</el-table-column>
				<el-table-column label="篇数" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.number }}</span>
					</template>
				</el-table-column>
				<el-table-column label="投稿数" align="center">
					<template slot-scope="scope" width="70">
						<span>{{ scope.row.price }}</span>
					</template>
				</el-table-column>
				<el-table-column label="采纳数" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.number }}</span>
					</template>
				</el-table-column>
				<el-table-column label="开始时间" width="90" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.start_at }}</span>
					</template>
				</el-table-column>
				<el-table-column label="周期天数（天）" width="80" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.days }}</span>
					</template>
				</el-table-column>
				<el-table-column label="状态" align="center">
					<template slot-scope="scope">
						<span>{{ scope.row.status }}</span>
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
								<el-checkbox v-for="item in form.checkedData" :key="item" :label="item"  @change="checkBoxs" class="release-checkBoxs"></el-checkbox>
								<!--<el-checkbox v-for="item in form.checkedData" :key="item" :label="item" border class="release-checkBoxs"></el-checkbox>-->
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
							<el-input v-model="form.images"></el-input>
						</el-col>
						<el-col :span="3">
							<p style="margin-left:10px;">张 左右</p>
						</el-col>
					</el-row>
				</el-form-item>
				<!--稿件要求-->
				<p style="margin: 0 auto;text-align: center;color: #909090;font-size: 14px;margin-bottom: 7px;">( 温馨提示：征稿文章的原创度会按照您所选原创度来判定，且不会低于设定值； 0为不限 )</p>
				<el-form-item>
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
				</el-form-item>
				<el-form-item>
					<el-row>
						<el-col :span="3">
							<label for=""><span class="input-must">*</span>360原创度</span></label>
						</el-col>
						<el-col :span="6" >
							<el-slider v-model="form.b360"></el-slider>
						</el-col>
						<el-col :span="2" style="margin-right:30px;color:#333;">
							<p style="text-align: right;">( {{ form.b360}} )%</p>
						</el-col>
						<el-col :span="3">
							<label for=""><span class="input-must">*</span>综合原创度</span></label>
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
							<el-input v-model="form.price"></el-input>
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
				
				<!--征稿开始时间-->
				<el-form-item>
					<el-row>
						<el-col :span="5">
							<label for=""><span class="input-must">*</span>开始时间</span></label>
						</el-col>
						<el-col :span="10">
							<el-date-picker v-model="form.startTime" type="date" placeholder="选择日期">
							</el-date-picker>

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
	export default {
		data() {
				return {
					status: 1, //1是列表状态，2是发布
					checkboxGroup: [], //实时状态
					checkBoxPre: [], //当前状态
					radio: '1',
					getList_url: '/api/solicit/mylist',
					addRequest: '/api/solicit/add',
					curPage: 1, //当前页数
					pagesize: 1, //一页10条
					totalNum: 0, //总数
					form: {
						title: '',
						checkedData: ['时事热点', '情感', '美妆时尚', '旅游', '商业软文', '生活窍门', 'IT互联网', '电影音乐', '星座占卜2', '时事热点2', '情感2', '美妆时尚2'],
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
						checkTermOptions: [{
							value: '1',
							label: '1'
						}, {
							value: '2',
							label: '2'
						}, {
							value: '3',
							label: '3'
						}, {
							value: '4',
							label: '4'
						},{
							value: '5',
							label: '5'
						}, {
							value: '6',
							label: '6'
						}, {
							value: '7',
							label: '7'
						}],
						content: '',
						startTime: '' //开始时间
					},
					tableData: [],
				}
			},
			created: function() {
				this.getList();
			},
			methods: {
				getList() {
					let that = this;
					that.axios.get(that.getList_url, {
						params: {
							page: that.curPage,
							pagesize: that.pagesize
						}
					}).then((response) => {

						if(response.data.data.list.length > 0) {
							for(let i = 0; i < response.data.data.list.length; i++) {
								response.data.data.list[i].start_at = response.data.data.list[i].start_at.substring(0, 10);
							}
							that.tableData = response.data.data.list;
							that.totalNum = response.data.data.count;
						}

//						console.log(that.tableData);
					}).catch((response) => {
						console.log(response);
					})
				},
				currentChange: function(curPage) {
					this.curPage = curPage;
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
//								if(that.form.startTime) {
//									if(that.form.content && that.form.content.length > 50) {
//										//调用接口
//										let priceStr = ''
//										if(that.form.checkValue == 1) {
//											priceStr = '200-500';
//										} else if(that.form.checkValue == 2) {
//											priceStr = '500-1000';
//										} else if(that.form.checkValue == 3) {
//											priceStr = '1000-1200';
//										} else {
//											priceStr = that.form.lowPrice + '-' + that.form.highPrice;
//										}
//
//										that.axios.post(that.addRequest, {
//										    content: that.form.content,
//										    title: that.form.title,
//										    price:priceStr,
//										    number:that.form.gaoCont,
//										    start_at:that.form.startTime,
//										    days:that.form.checkTerm*7,
//										    field:that.checkBoxPre.join(','),
//										    words:that.form.font
//										  })
//										  .then(function (response) {
////										  	console.log(response);
//										    if(response.data.code==0){
//										    	that.$message({
//										          	message: '创建成功！',
//										          	type: 'success'
//										        });
//										        that.quit();
//										    }else{
//										    	
//										    }
//										  })
//										  .catch(function (error) {
//										    console.log(error);
//										  });
//									} else {
//										that.$message.error('征稿详细说明字数要大于50');
//									}
//								} else {
//									that.$message.error('请选择开始时间');
//								}

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
				//下拉框
				toChangecheck: function() {
					let that = this;
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
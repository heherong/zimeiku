<template>
	<div class="inform">
		<div class="moneyList">
			<h4>{{gaoTitle}} </h4>

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
							<el-button class="release-up" @click="toChangePrice(1)"><i class="el-icon-arrow-up"></i></el-button>
							<el-button class="release-up" @click="toChangePrice(2)"><i class="el-icon-arrow-down"></i></el-button>
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
							<p style="margin-left:10px;">周</p>
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
						<el-col :span="10">
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
	import {baseUrl} from '@/api/index.js' //注意路径
	export default {
		data() {
				return {
					gaoTitle:'查看征稿',
					checkboxGroup: [], //实时状态
					checkBoxPre: [], //当前状态
					radio: '1',
					getList_url: baseUrl+'solicit/info',
					form: {
						title: '',
						checkedData: ['时事热点', '情感', '美妆时尚', '旅游', '商业软文', '生活窍门', 'IT互联网', '电影音乐', '星座占卜2', '时事热点2', '情感2', '美妆时尚2'],
						font: 2000, //稿子字数
						gaoCont: 1, //稿子篇数
						checkOptions: [{
							value: '1',
							label: '¥200-¥500 (对稿件质量有简单要求)'
						}, {
							value: '2',
							label: '¥500-¥1000 (对稿件质量有明确要求)'
						}, {
							value: '3',
							label: '¥1000-¥1500 (对稿件质量、风格有要求)'
						}, {
							value: '4',
							label: '自定义稿费区间'
						}],
						checkValue: '1', //下拉框选中的值
						lowPrice: 50, //最低值
						highPrice: 100, //最高值
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
						}],
						content: '',
						startTime: '' //开始时间
					},
					tableData: [],
				}
			},
			created: function() {
				this.getData();
			},
			methods: {
				getData() {
					let that = this;
					that.axios.get(that.getList_url, {
						params: {
							solicit_id: 1
						}
					}).then((response) => {
						
						console.log(response);
						
					}).catch((response) => {
						console.log(response);
					})
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
</style>
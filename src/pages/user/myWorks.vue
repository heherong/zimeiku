<template>
	<div class="inform">
		<div v-show="pageStatus == 1">
			<div class="myMoney">
				<h4>我的稿件 </h4>
				<el-button type="primary" class="release-gao" @click="toAddGao">新建稿件 <i class="el-icon-edit el-icon--right"></i></el-button>
				<p class="border-p"></p>

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
				<el-table :data="tableData.slice((curPage-1)*pagesize,curPage*pagesize)" style="width: 100%">
					<el-table-column type="index" width="80" label="序号" align="center"></el-table-column>

					<el-table-column label="标题" width="180">
						<template slot-scope="scope">
							<span>{{ scope.row.title }}</span>
						</template>
					</el-table-column>
					<el-table-column label="字数">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.words_count }}</span>
						</template>
					</el-table-column>
					<el-table-column label="图片数">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.img_count }}</span>
						</template>
					</el-table-column>
					<el-table-column label="内容">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.content }}</span>
						</template>
					</el-table-column>
					<el-table-column label="总原创度">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.original_degree }}</span>
						</template>
					</el-table-column>
					<el-table-column label="百度">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.baidu }}</span>
						</template>
					</el-table-column>
					<el-table-column label="搜狗">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.sogou }}</span>
						</template>
					</el-table-column>
					<el-table-column label="360">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.b360 }}</span>
						</template>
					</el-table-column>
					<el-table-column label="关键词">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.type }}</span>
						</template>
					</el-table-column>
					<el-table-column label="领域">
						<template slot-scope="scope" width="80">
							<span>{{ scope.row.field }}</span>
						</template>
					</el-table-column>
					<el-table-column label="创建时间" width="80">
						<template slot-scope="scope">
							<span>{{scope.row.created_at}}</span>
						</template>
					</el-table-column>
					<el-table-column label="文章状态" width="80">
						<template slot-scope="scope">
							<span>{{ scope.row.status }}</span>
						</template>
					</el-table-column>
					<el-table-column label="购买人账号" width="80">
						<template slot-scope="scope">
							<span>{{scope.row.solicit}}</span>
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
		</div>

		<div v-show="pageStatus == 2">
			<div class="myMoney">
				<h4>新建稿件 <i class="el-icon-edit-outline"></i></h4>
			</div>
			<el-row>
				<el-col :span="3">
					<label for=""><span class="input-must">*</span>稿件标题</span></label>
				</el-col>
				<el-col :span="10">
					<el-input v-model="form.title" class="add-title" placeholder="请输入标题"></el-input>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="3">
					<label for=""><span class="input-must">*</span>文章类型</span></label>
				</el-col>
				<el-col :span="20">
					<el-checkbox-group v-model="quareForm.type">
						<el-checkbox v-for="item in quareForm.typeBox" :label="item.id" :key="item.id" @change="checkBoxs">{{item.name}}</el-checkbox>
					</el-checkbox-group>
				</el-col>
			</el-row>
			<div>
				<vue-ueditor-wrap v-model="form.msg" :config="myConfig"></vue-ueditor-wrap>
			</div>
			<div style="position: absolute;left: 100%;top: 170px;">
				<el-row>
					<el-button type="success" plain icon="el-icon-check" @click="toSave">保存至草稿箱</el-button>
				</el-row>
				<el-row>
					<el-button type="primary" plain icon="el-icon-upload2" @click="dialogtoUpload">发稿（文章广场）</el-button>
				</el-row>
				<el-row>
					<el-button type="danger" plain icon="el-icon-close" @click="quit">取消</el-button>
				</el-row>
			</div>
		</div>

		<el-dialog title="系统检测结果 " :visible.sync="dialogVisible" width="55%" :before-close="handleClose">
			<div>
				<el-row>
					<el-col :span="3" style="text-align:center">
						<span>文章字数：</span>
					</el-col>
					<el-col :span="5">
						<span>{{articlemarketForm.words}} 字</span>
					</el-col>
					<el-col :span="3">
						<span>图片数：</span>
					</el-col>
					<el-col :span="5">
						<span>{{gaoForm.img}} 张</span>
					</el-col>
					<el-col :span="3">
						<span>关键词：</span>
					</el-col>
					<el-col :span="5">
						<el-tag>{{articlemarketForm.category}}</el-tag>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="6" style="text-align:center">
						<span>百度原创度:</span>
						<span>{{articlemarketForm.baidu*100}} %</span>
					</el-col>
					<el-col :span="6" style="text-align:center">
						<span>搜狗原创度:</span>
						<span>{{articlemarketForm.sogou*100}} %</span>
					</el-col>
					<el-col :span="6" style="text-align:center">
						<span>360原创度:</span>
						<span>{{articlemarketForm[360]*100}} %</span>
					</el-col>
					<el-col :span="6" style="text-align:center">
						<span>综合原创度:</span>
						<span>{{articlemarketForm.guge}} %</span>
					</el-col>
				</el-row>

				<p style="text-align: center;font-size: 18px;color:#ff8547;">情感态度</p>

				<div style="width:95%;margin:0 auto;">
					<el-row>
						<el-col :span="4">
							<span style="font-size: 14px; color: #696969;">正向情感&nbsp;&nbsp;</span>
							<img :src="gaoForm.happyImg" style="width: 50px;position: relative;top: 15px;" />
							<el-tag type="danger" style="position: relative;top: 20px;left: 65px;">{{parseInt(articlemarketForm.positive_prob*100)}}%</el-tag>
						</el-col>
						<el-col :span="15">

							<p class="emation-tiao"></p>
							<span class="emation-unhappy transAll" :style="{width:(100-articlemarketForm.positive_prob*100)+'%'}"></span>
						</el-col>
						<el-col :span="4" style="margin-left: 15px;">
							<img :src="gaoForm.unhappyImg" style="width: 50px;position: relative;top: 15px;" />
							<span style="font-size: 14px; color: #696969;">负向情感</span>
							<el-tag type="danger" style="position: relative;top: 20px;">{{(100-parseInt(articlemarketForm.positive_prob*100))}}%</el-tag>
						</el-col>
					</el-row>

				</div>

				<br />
				<el-row>
					<el-col :span="4" style="text-align:center">
						<label for=""><span class="input-must">*</span>文章价格:</label>
					</el-col>
					<el-col :span="6">
						<el-input v-model="quareForm.price" placeholder="请输入价格"></el-input>
					</el-col>
					<el-col :span="2">
						<span style="margin-left:10px;">元</span>
					</el-col>
				</el-row>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="handleClose">取 消</el-button>
				<el-button type="primary" @click="toUpload">确 定</el-button>
			</span>
		</el-dialog>
		<!-- <div v-show="pageStatus == 3"></div> -->
	</div>
</template>

<script>
	import VueUeditorWrap from 'vue-ueditor-wrap'
	import host from '@/config/apiConfig'
	import happy from '@/assets/images/happy.png'; //正向
	import unhappy from '@/assets/images/unhappy.png'; //负向
	import qs from 'qs' //请求
	import { getMyArticleList } from '@/api'
	export default {
		components: {
			VueUeditorWrap
		},
		data() {
			return {
				dialogVisible: false, //弹出框
				pageStatus: 1, //列表页面1 ，新建页面2,3是点击保存到文章广场之后的返回数据
				status: 1, //列表页面的切换lab
				getList_url: '/api/article/mylist',
				saveWork: '/api/article/add',
				getCategory: '/api/fields/list', //类别
				curPage: 1, //当前页数
				pagesize: 10, //一页10条
				totalNum: 0, //总数
				listType: '', //发布投稿：1 文章广场：2 草稿箱: 3
				tableData: [],
				form: {
					msg: '',
					title: ''
				},
				quareForm: {
					typeBox: [],
					type: [],
					checkBoxPre: [], //默认保存选一个
					price: 50,
				},
				gaoForm: {
					num: 120,
					img: 10,
					baidu: 10,
					sogou: 30,
					b360: 50,
					bchrome: 70,
					happyImg: happy,
					unhappyImg: unhappy,
				},
				articlemarketForm: {
					//检测结果

				},
				myConfig: {
					// 如果需要上传功能,找后端小伙伴要服务器接口地址
					//		            serverUrl: baseUrl+'ueditor/server?action=config&noCache=1542597685533',
					//					serverUrl: '/api/ueditor/server',
					serverUrl: host + '/api/ueditor/server',
					// 你的UEditor资源存放的路径,相对于打包后的index.html
					UEDITOR_HOME_URL: './static/UEditor/',
					// 编辑器不自动被内容撑高
					autoHeightEnabled: false,
					// 初始容器高度
					initialFrameHeight: 520,
					// 初始容器宽度
					initialFrameWidth: '100%',
					// 关闭自动保存
					enableAutoSave: false,
					toolbars: [
						[
							'source', //源代码
							'cleardoc', //清空文档
							'insertcode', //代码语言
							'fontfamily', //字体
							'fontsize', //字号
							'paragraph', //段落格式
							'customstyle', //自定义标题
							'|',
							'insertimage', //多图上传
							'attachment', //附件
							'emotion', //表情
							'time', //时间
							'date', //日期
							'map', //Baidu地图
							'edittip ', //编辑提示
							'autotypeset', //自动排版
							'touppercase', //字母大写
							'tolowercase', //字母小写
							'background', //背景
							'template', //模板
							'scrawl', //涂鸦
							'music', //音乐
							'insertvideo', //视频
							'|',
							'anchor', //锚点
							'undo', //撤销
							'redo', //重做
							'pagebreak', //分页
							'bold', //加粗
							'indent', //首行缩进
							'snapscreen', //截图
							'italic', //斜体
							'underline', //下划线
							'strikethrough', //删除线
							'subscript', //下标
							'fontborder', //字符边框
							'superscript', //上标
							'formatmatch', //格式刷
							'blockquote', //引用
							'pasteplain', //纯文本粘贴模式
							'selectall', //全选
							'print', //打印
							'link', //超链接
							'horizontal', //分隔线
							'removeformat', //清除格式
							'unlink', //取消链接
							'|',
							'insertrow', //前插入行
							'insertcol', //前插入列
							'mergeright', //右合并单元格
							'mergedown', //下合并单元格
							'deleterow', //删除行
							'deletecol', //删除列
							'splittorows', //拆分成行
							'splittocols', //拆分成列
							'splittocells', //完全拆分单元格
							'deletecaption', //删除表格标题
							'inserttitle', //插入标题
							'mergecells', //合并多个单元格
							'deletetable', //删除表格
							'insertparagraphbeforetable', //"表格前插入行"
							'edittable', //表格属性
							'edittd', //单元格属性
							'spechars', //特殊字符
							'searchreplace', //查询替换
							'justifyleft', //居左对齐
							'justifyright', //居右对齐
							'justifycenter', //居中对齐
							'justifyjustify', //两端对齐
							'forecolor', //字体颜色
							'backcolor', //背景色
							'insertorderedlist', //有序列表
							'insertunorderedlist', //无序列表
							'fullscreen', //全屏
							'directionalityltr', //从左向右输入
							'directionalityrtl', //从右向左输入
							'rowspacingtop', //段前距
							'rowspacingbottom', //段后距
							'insertframe', //插入Iframe
							'imagenone', //默认
							'imageleft', //左浮动
							'imageright', //右浮动
							'imagecenter', //居中
							'lineheight', //行间距
							'inserttable', //插入表格
							'charts', // 图表
							'preview', //预览
						]
					],
				}
			}
		},
		mounted: function() {
			//获取列表
			this.getList();
			//获取类别
			this.getCategoryFun();
		},
		methods: {
			//弹出框推出前试行是否保存至草稿箱
			handleClose(done) {
				let that = this;
				this.$confirm('是否保存至草稿箱').then(_ => {
					done();
					//这里执行确定
					that.toSave();
				}).catch(_ => {
					//这里执行取消
					that.dialogVisible = false;
				});
			},
			getList: function(inx) {
				let that = this;
				that.listType = inx;
				let _data = {
					page: that.curPage,
					pagesize: that.pagesize,
					type: that.listType
				}
				getMyArticleList(_data).then(res => {
					if (res.data.list.length > 0) {
						for (let i = 0; i < res.data.list.length; i++) {
							res.data.list[i].created_at = res.data.list[i].created_at.substring(0, 10);
						}
						that.tableData = res.data.list;
						that.totalNum = res.data.count;
					}
				})
			},
			getCategoryFun: function() {
				//获取类别
				let that = this;
				that.$fetch(that.getCategory).then((response) => {
					if (response.data.list) {
						that.quareForm.typeBox = response.data.list;
					}
				}, {
					showLoading: false
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
			changeStatus: function(index) {
				let that = this;
				that.status = index;
				//获取数据
				if (index - 1 == 0) {
					that.getList();
				} else {
					that.getList(index - 1);
				}

			},
			//新建稿件
			toAddGao: function() {
				this.pageStatus = 2;
			},
			toSave: function() {
				//保存 发布投稿：1 文章广场：2 草稿箱: 3
				let that = this;
				if (that.form.title) {
					if (that.quareForm.type.length > 0) {
						if (that.form.msg.length > 0) {
							let addData = qs.stringify({
								title: that.form.title,
								field: that.quareForm.type[0],
								content: that.form.msg,
								type: 3, //发布投稿：1 文章广场：2 草稿箱: 3
								status: 1, //发布状态:1是发布,0是未发布
							})
							that.$post(that.saveWork, addData, {
									showLoading: true
								})
								.then(function(response) {
									if (response.code == 0) {
										that.$message({
											message: '保存成功！',
											type: 'success'
										});
										that.quit();
									}
								}).catch(function(error) {
									console.log(error);
								});

						} else {
							this.$message.error('内容不能为空！')
						}
					} else {
						that.$message.error('请选择文章类型！');
					}
				} else {
					that.$message.error('标题不能为空!');
					return;
				}
			},
			//弹出弹出框
			dialogtoUpload() {
				let that = this;
				if (that.form.title) {
					if (that.quareForm.type.length > 0) {
						if (that.form.msg.length > 0) {
							this.$post('/api/article/check', `content=${that.form.msg}`, {
								showLoading: true
							}).then(function(res) {
								that.dialogVisible = true;
								that.articlemarketForm = res.data.list;
								//就算汇总
								let val_baidu = parseInt(that.articlemarketForm.baidu * 1000);
								let val_sogou = parseInt(that.articlemarketForm.sogou * 1000);
								let val_360 = parseInt(that.articlemarketForm[360] * 1000);
								that.articlemarketForm.guge = parseInt((val_baidu + val_sogou + val_360) / 30);
							}).catch(function(res) {
								console.log(res);

								that.dialogVisible = true;
							})
						} else {
							this.$message.error('内容不能为空！')
						}
					} else {
						this.$message.error('请选择类型！')
					}
				} else {
					this.$message.error('请输入标题！')
				}
			},
			//发稿到文章广场
			toUpload: function() {
				let that = this;
				let addData = qs.stringify({
					title: that.form.title,
					field: that.quareForm.type[0],
					content: that.form.msg,
					type: 2, //发布投稿：1 文章广场：2 草稿箱: 3
					status: 1, //发布状态:1是发布,0是未发布
				})
				this.$post('/api/article/add', addData, {
					showLoading: true
				}).then(function(res) {
					if (res.code == 0) {
						that.$message({
							showClose: true,
							message: '保存成功！',
							type: 'success'
						});
						that.quit();
					} else {

					}
					// that.$message(res.data.msg);
					that.dialogVisible = false
				}).catch(function(res) {
					console.log(res);
				})

			},
			//多选
			checkBoxs: function() {
				let that = this;
				if (that.quareForm.type.length > 1) {
					that.checkBoxPre = [];
					that.checkBoxPre.push(that.quareForm.type[1]);

					that.quareForm.type = that.checkBoxPre;
				} else {
					that.checkBoxPre = that.quareForm.type;
				}
			},
			quit: function() {
				this.checkBoxPre = this.quareForm.type = [];
				this.form.msg = '';
				this.form.title = '';
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

	.list-status {
		margin-bottom: 20px;
	}

	.list-status span {
		display: inline-block;
		width: 50%;
		cursor: pointer;
		text-align: center;
	}

	.list-status .active {
		padding-bottom: 5px;
		border-bottom: solid 2px #409EFF;
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

	.inform h4 {
		display: inline-block;
		border: none;
		position: relative;
		top: 15px;
	}

	.border-p {
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

	.emation-tiao {
		width: 98%;
		height: 20px;
		background-color: #e6a23c;
		display: inline-block;
		border-radius: 10px;
		position: relative;
		top: 30px;
	}

	.emation-unhappy {
		display: inline-block;
		height: 20px;
		background-color: #67c23a;
		position: relative;
		z-index: 999;
		top: 6px;
		float: right;
		border-radius: 0 10px 10px 0;
	}
</style>

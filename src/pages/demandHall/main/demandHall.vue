<template>
    <div class="wrap tansAll">
        <Myheader :active='a'></Myheader>
        <div class="market" style="margin-top:105px;">
            <div class="demand-detail-wrap">
                <div class="container-left">
                    <div class="container-left-title">
                        <div>{{airtcleCon.status}}</div>
                        <span>原创征稿</span>
                        <span>影评、明星微博找里面的槽点加以分析，撰写些比较简单的娱乐内容</span>
                    </div>
                    <div v-if="status==1">
                    <div class="container-demand-info" v-if="status==1">
                        <ul>
                            <li>
                                <div>
                                    <span>￥{{airtcleCon.price}}</span>
                                    /篇
                                </div>
                                <span>
                                    <i class="el-icon-goods"></i>
                                    招募预算
                                </span>
                            </li>
                            <li class="lineq"></li>
                            <li>
                                <div>
                                    <span>{{airtcleCon.number}}</span>
                                    
                                </div>
                                <span>
                                    <i class="el-icon-tickets"></i>
                                    征稿数量(篇)
                                </span>
                            </li>
                            <li class="lineq"></li>
                            <li>
                                <div>
                                    <span>0</span>
                                    
                                </div>
                                <span>
                                    <i class="el-icon-document"></i>
                                    已投稿数量(篇)
                                </span>
                            </li>
                            <li class="lineq" ></li>
                            <li>
                                <div>
                                    <span>0</span>
                                    天
                                    <span>9</span>
                                    小时
                                    <span>48</span>
                                    分
                                </div>
                                <span>
                                    <i class="el-icon-time"></i>
                                    剩余时间
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="container-demand-detail">
                        <div class="container-demand-detail-title">
                            <span>需求详情</span>
                        </div>
                    </div>
                    <div class="container-demand-detail-list">
                        <ul>
                            <li>
                                <span>表现形式:</span>
                                <span>文章</span>
                            </li>
                            <li>
                                <span>字数要求:</span>
                                <span>{{airtcleCon.words}}</span>
                            </li>
                            <li class="create-require">
                                <span>创作要求:</span>
                                <span style="line-height: 30px;">{{airtcleCon.content}}</span>
                            </li>
                            <li class="list-item-example">
                                <span>参考样稿:</span>
                                <span style="color: #4895E7;overflow:hidden;">
                                    https://mbd.baidu.com/newspage/data/landingshare?context=%7B%22nid%22%3A%22news_9079758324768071956%22%2C%22sourceFrom%22%3A%22bjh%22%2C%22url_data%22%3A%22bjhauthor%22%7D
                                </span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div class="moneyList" v-if="status==2">
                        <el-form ref="form" :model="form" label-width="80px">
                            <!--征稿标题-->
                            <el-form-item>
                                <el-row>
                                    <el-col :span="3">
                                        <label for=""><span class="input-must">*</span>文章标题</span></label>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-input v-model="form.title" class="add-title" placeholder="请输入标题，5~50个字"></el-input>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <!--投稿内容-->
                            <div style="padding: 10px;margin-bottom:30px;">
                                <VueUeditorWrap v-model="form.content" :config="myConfig"></VueUeditorWrap>
                            </div>
                            <el-form-item style="text-align: center;">
                                <el-button @click="quit">取消</el-button>
                                <el-button type="primary" @click="onSubmit">提交投稿</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <div class="container-right">
                    <nav class="author-info2">
                        <div class="author-desc">
                            <img src="http://cdn.yuanrongbank.com/3781/1539579564341/12123.jpg" alt="" class="author-img">
                            <div class="author-name" style="width:100%;">
                                {{airtcleCon.user_id}} 
                            </div>
                            <div class="author-article">
                                <dl>
                                    <dt>5</dt>
                                    <dd>文章</dd>
                                </dl>
                                <dl>
                                    <dt>5</dt>
                                    <dd>人气</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="author-contact">
                            <ul >
                                <li>
                                    <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                    生命的价值和意义
                                </li>
                                <li>
                                    <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                    婚姻到底谁对谁错
                                </li>
                                <li>
                                    <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                    婚姻要如何选择
                                </li>
                                <li>
                                    <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                    谈谈老人和年轻人带孩子的区别
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav class="process-guide">
                        <div>
                            <span>流程指南</span>
                            <span class="origin-item">
                                <span></span>
                                <i>原创征稿</i>
                                <span></span>
                            </span>
                        </div>
                        <ul style="position:relative">
                            <li>
                                <span>1</span>
                                <span>投稿报名</span>
                            </li>
                            <li>
                                <span>2</span>
                                <span>提交作品</span>
                            </li>
                            <li>
                                <span>3</span>
                                <span>平台审核</span>
                            </li>
                            <li>
                                <span>4</span>
                                <span>买家挑选确认</span>
                            </li>
                            <li>
                                <span>5</span>
                                <span>买家支付</span>
                            </li>
                            <li>
                                <span>6</span>
                                <span>平台结算</span>
                            </li>
                        </ul>   
                    </nav>
                </div>
                <div class="container-bottom" v-if="status==1">
                    <div>
                        <span>投稿须知</span> 
                    </div>
                    <div>
                        <ul>
                            <li>
                                1. 所投作品必须为原创，绝对没有抄袭、照搬、洗文等任何违背原创精神的行为。
                            </li>
                            <li>
                                2. 作品没有在其他平台上发布过（含个人平台在内的一切平台和媒体端）
                            </li>
                            <li>
                                3. 作品中所含图片必须无水印、无版权纠纷。
                            </li>
                            <li>
                                4. 作品一经录用，购买方拥有该稿件版权的著作权，包括但不仅限于独家使用权、改编权等。
                            </li>
                        </ul>
                    </div>
                    <div class="submit-pay">
                        <div>
                            <i>
                                ￥15
                                <span class="unm-unit" style="color:#82868A">/篇</span>
                            </i>
                        </div>
                        <span @click="shade()">
                            提交作品
                        </span>
                        
                    </div>
                    <el-dialog title="原创度" :visible.sync="dialogTableVisible" center>
                        <el-table :data="caogaoform" style="width: 100%" @selection-change="handleSelectionChange">>
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
                            <el-table-column label="标题" width="100">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="百度原创度" width="100">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="搜狗原创度" width="100">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="360原创度" width="100">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="谷歌原创度" width="100">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="字数" width="80">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="图片数" width="80">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="分类" width="80">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="详情" width="200">
                                <template slot-scope="scope">
                                    <span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.address }}</span>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                                </template>
                            </el-table-column> -->
                        </el-table>
                        <el-row>
                            <div style="margin:0 auto;text-align:center;margin-top:25px;">
                                <el-button @click="tougao">投稿</el-button>
                                <el-button type="primary" @click="status = 2">新建稿件</el-button>
                            </div>
                        </el-row>
                    </el-dialog>
                </div>
                <div class="container-table">
                    <el-table
                        :data="SubmitRecordsData"
                        style="width: 100%"
                        max-height="250">
                        <el-table-column
                        fixed
                        prop="created_at"
                        label="日期"
                        width="250">
                        </el-table-column>
                        <el-table-column
                        prop="title"
                        label="稿件名称"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="author"
                        label="作者"
                        width="120">
                        </el-table-column>
                        
                        <el-table-column
                        fixed="right"
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index, SubmitRecordsData)"
                            type="text"
                            size="small">
                            移除
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Myheader from '../../../components/header-nav-wrap'
import VueUeditorWrap from 'vue-ueditor-wrap'
import {baseUrl} from '@/api/index.js' 
export default {
    components:{
        Myheader,
        VueUeditorWrap
    },
    data:function(){
        return {a:'buyerorder',
                status:1,
                SubmitRecordsData:[],
                //文章详情页的值
                airtcleCon:this.$route.query.airtcle,
                dialogTableVisible:false,
                form: {
                        title: '',
                        content:'<h2>Hello World!</h2>' ,
                    },
                    myConfig: {
                        // 如果需要上传功能,找后端小伙伴要服务器接口地址
                        serverUrl: baseUrl+'ueditor/server',
                        // 你的UEditor资源存放的路径,相对于打包后的index.html
                        UEDITOR_HOME_URL: './static/UEditor/',
                        // 编辑器不自动被内容撑高
                        autoHeightEnabled: false,
                        // 初始容器高度
                        initialFrameHeight: 340,
                        // 初始容器宽度
                        initialFrameWidth: '100%',
                        // 关闭自动保存
                        enableAutoSave: false
                    },
                    caogaoform :[{
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                        }],
                    multipleSelection:[]
                }
    },
    beforeRouteEnter:(to,form,next)=>{
        next(vm=>{
            vm.a = form.params.name
        })
    },
    created:function(){
        this.SubmitRecords()
        
    },
    mounted(){
        console.log(this.airtcleCon)
    },
    methods:{
        shade(){
            this.dialogTableVisible =true
        },
        tougao(){
            console.log(this.multipleSelection);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            for(var i=0;i<val.length;i++){
                console.log(val[i].date);
            }
        },
        //投稿记录
        SubmitRecords(){
            var self = this;
            this.axios.get('http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/solicit/list',{
            params:{

            }
            }).then(function(res){
                // console.log(res);
                self.SubmitRecordsData = res.data.data.list;
            }).catch(function(res){
                console.log(res);
            })
        },
        //投稿记录删除当前行
        deleteRow(index, rows) {
            rows.splice(index, 1);
            
        },
        //切换至新建稿件
        onSubmit(){
            this.status = 2;
        },
        //返回
        quit: function() {
            this.status = 1;
            this.dialogTableVisible = false;
        },
    }
}
</script>

 <style>
 @import url("../../../assets/css/user");
.demand-detail-wrap{width: 1170px;margin: 0 auto;}
.container-left{width: 870px;background: #fff;border-radius: 2px;padding-bottom: 50px;float: left;}
.container-left-title{height: 70px;line-height: 70px;padding: 0 30px;position: relative;}
.container-left-title>div{position: absolute;top: 0;width: 60px;height: 22px;line-height: 22px;text-align: center;font-size: 12px;color: #fff;background: #89BC62;border-radius: 0 0 2px 2px;}
.container-left-title>span:nth-child(2){display: inline-block;font-size: 12px;width: 56px;height: 20px;line-height: 18px;text-align: center;border: 1px solid rgba(137,188,98,0.50);border-radius: 2px;color: #89BC62;margin-right: 10px;}
.container-left-title>span:nth-child(3){font-size: 20px;color: #48494a;}
.container-demand-info ul{overflow: hidden;text-align: center;border-radius: 3px;background: #F5F7FA;margin: 20px 37px 26px 33px;}
.container-demand-info ul li{float: left;width: 199px;height: 90px;}
.container-demand-info ul li>div{color: #4895E7;height: 33px;line-height: 33px;margin-top: 16px;margin-bottom: 4px;}
.container-demand-info ul li>div>span{font-size: 24px;}
.unm-unit{font-size:12px;}
.container-demand-info ul li>span{color: #82868A;}
.container-demand-info ul li.lineq{width: 0;height: 50px;border-right: 1px solid #E9EBEC;position: relative;top: 20px;}
.container-demand-detail-title{height: 38px;margin: 0 37px 0 33px;border-bottom: 1px solid #E9EBEC;}
.container-demand-detail-title>span{font-size: 20px;color: #64676A;}
.container-demand-detail-list{margin: 0 37px 0 33px;}
.container-demand-detail-list ul>li{margin-top:20px;}
.container-demand-detail-list li > span:first-child{color: #82868A;margin-right: 8px;}
.container-demand-detail-list li > span:last-child{color: #48494a;}
.create-require{overflow: hidden;}
li.create-require>span:first-child{display: block;width: 70px;float: left;line-height: 30px;}
li.create-require>span:last-child{float: left;width: 700px;line-height: 30px;}
li.list-item-example>span:first-child{display: inline;width: 70px;float: left;line-height: 30px;}
li.list-item-example>span:last-child{float: left;width: 700px;line-height: 30px;cursor: pointer;}
.container-bottom{width: 805px; height: auto;background: #fff;margin-top: 23px;border-radius: 2px;padding: 15px 34px 18px 32px;float: left;}
.container-bottom>div{font-size: 20px;color: #64676A;}
.container-bottom ul{width: 580px;float: left;}
.container-bottom ul li{font-size: 12px;color: #64676A;line-height: 12px;margin-top: 10px;}
.submit-pay{float: right;text-align: center;}
.submit-pay div{font-size: 24px;color: #F5A623;text-align: center;}
.submit-pay i{font-style: normal;font-weight: normal;}
.submit-pay>span{display: inline-block;margin-top: 5px;width: 90px;height: 38px;line-height: 38px;text-align: center;font-size: 14px;color: #FFFFFF;background: #4895E7;border-radius: 2px;cursor: pointer;}
.container-right{width: 280px;float: right;}
.author-info2{width: 274px;border-radius: 2px;background: #fff;}
.author-desc{padding-top: 20px;height: 230px;background: #f7f8fc;text-align: center;}
.author-img{width: 100px;height: 100px;border-radius: 50%;cursor:pointer;}
.author-name{height: 46px;line-height: 40px;color: #303132;font-weight: bold;}
.author-article dl{display: inline-block;color: #64676a;}
.author-article dl:nth-child(1) {border-right: 1px solid #ccc;padding-right: 20px;}
.author-article dl:nth-child(2) {padding-left: 15px;}
.author-article dl dt{font-weight: bold;font-size: 16px;color: #303132;}
.author-contact{padding: 20px 15px 20px 35px;}
.author-contact ul{width: 100%;}
.author-contact ul>li{margin-bottom: 10px;line-height: 25px;color: #64676a;font-size: 14px;cursor: pointer;}
.author-contact ul>li:hover{color:#4895E7;}
.process-guide{width: 234px;border-radius: 2px;background: #fff;margin-top: 20px;border-radius: 2px;padding: 20px 20px 22px 25px;float: right;}
.process-guide>div{width: 100%;display: inline-block;height: 30px;border-bottom: 1px solid #E9EBEC;}
.process-guide>div>span:first-child{font-size: 18px;color: #64676A;}
.origin-item{color: #82868A;margin-left: 5px;display: inline-block;width: 70px;height: 16px;line-height: 16px;text-align: center;position: relative;}
.origin-item>span:first-child{position: absolute;display: inline-block;width: 5px;height: 10px;border-top: 1px solid #82868A;border-left: 1px solid #82868A;top: 0;left: 0;}
.origin-item>span:last-child{position: absolute;display: inline-block;width: 5px;height: 10px;border-bottom: 1px solid #82868A;border-right: 1px solid #82868A;bottom: 0;right: 0;}
.process-guide ul li{cursor: pointer;margin-top: 12px;color: #82868A;}
.process-guide ul li span:first-child{background: #ECEFF4;display: inline-block;width: 20px;height: 20px;border-radius: 50%;text-align: center;margin-right: 20px;}
.container-table{width: 825px;border-radius: 2px;background: #fff;margin-top: 20px;border-radius: 2px;padding: 20px 20px 22px 25px;float: left;margin-bottom: 20px;}
</style>


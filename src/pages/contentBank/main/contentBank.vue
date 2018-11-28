<template>
    <div class="wrap transAll">
        <Myheader :active='a'></Myheader>
        <div class="content">
           
            <div style="position: relative; height: 100%;">
                <article class="article-detail">
                    <div class="article-title">
                        <div class="title-desc">{{article.title}}</div>
                        <div class="title-detail">
                            <span class="">
                                分类: <span style="title-detail-sp">{{article.category}}</span>
                            </span>
                            <span class="">
                               自媒库指数: <span style="title-detail-sp">{{article.average_degree}}</span>
                            </span>
                            <span class="">
                                信息量: <span style="title-detail-sp">{{article.words_count}}</span>
                            </span>
                            <span class="">
                                浏览量: <span style="title-detail-sp">1000</span>
                            </span>
                            <span class="">
                                时间: <span style="title-detail-sp">{{article.solicit_at}}</span>
                            </span>
                        </div>
                    </div>
                    <div class="article-detail-slice slice-hidden">
                        
                           {{article.content}}
                
                    </div>
                    <div class="not-publish">
                        <p style="color:#82868a;font-size:12px;line-height: 30px;margin-top: 20px;">为了保证版权安全,仅显示20%内容,购买后可查看全文且拥有该作品的著作权</p>
                        <button class="btn" style="cursor:pointer;" @click="pay()">立即购买</button>
                        <div class="publish-hot">
                            <span>
                                高频词:
                                <span style="color:#303132;">
                                    {{article.keywords}}
                                    <span class="work-label"> | </span>
                                    <!-- 小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span> -->
                                </span>
                            </span>
                        </div>
                        <ul>
                            <i class="icon-help ulg"></i>
                            <li>
                                <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                买断指买断著作权
                            </li>
                            <li>
                                <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                购买成功后,买家拥有该作品的著作权,包括但不限于作品的复制权、发行权、改编权、摄制权等
                            </li>
                            <li>
                                <span style='position: relative;top: -3px;font-size: 24px;display: inline-block;margin-right: 3px;'>.</span>
                                作品售卖成功后,原作者不再享有该作品著作权中的任何权益
                            </li>
                        </ul>
                    </div>
                </article>
                <nav class="author-info">
                    <div class="author-desc">
                        <img src="http://cdn.yuanrongbank.com/3781/1539579564341/12123.jpg" alt="" class="author-img">
                        <div class="author-name" style="width:100%;">
                            {{article.author_id}} 
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
            </div>
            <div class="hot">
                <h3 class="color:#64676a;font-size:16px;">
                    图文热词
                </h3>
                <div class="hot-word">
                    <div style="position: relative; overflow: hidden; width: 600px; height: 200px;" id="echarts-main">
                        
                            <img src="../../../assets/images/1.png" alt="">
                    </div>
                </div>
            </div>
            <div class="similar">
                <h3 class="color:#64676a;font-size:16px;">
                    相似作品推荐
                    <span class="change-page">
                        <i class="el-icon-refresh"></i>
                        换一批
                    </span>
                </h3>
                <!-- <div class="similar_list">
                    <ul>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                    </ul>
                </div> -->
            </div>
        </div>
        <!-- <div class="fix-buy">
            <div style="overflow: hidden;height:50px;line-height:50px;background:#fff;background:rgba(0,0,0,.65)">
                <div class="bottom-work-title">
                    如何引导小孩
                </div>
                <div style="float:right;margin-right:20%;">
                    <span class="work-price">
                        <span style="font-size:14px;">买断价：</span>
                        <span style="color:#4895e7;font-size:18px; font-weight: 500;">￥1</span>
                    </span>
                    <span class="add-buy" style="font-size:14px;">
                        加入购物车
                    </span>
                    <span class="work-buy" style="font-size:14px;">
                        立即购买
                    </span>
                </div>
            </div>
        </div> -->
    </div>
</template>



<script>
import Item from '../../market/ContentListItem'
import Myheader from '../../../components/header-nav-wrap'
import Echarts from 'echarts'
import EchartsWordCloud from 'echarts-wordcloud'

export default {
    components:{
        Item  ,
        Myheader
    },
    data:function(){
        return {
            a:'market',
            article:'',
            WordCloud:[]
            }
    },
    methods:{
        //返回
        back:function(){
            this.$router.go(-1)
        },
        
        //EchartsWordCloud
        EchartsWordCloudfn(wordcloud){
            var self = this;
            for(var i=0;i<self.WordCloud.length;i++){
                wordcloud[i]['itemStyle'] = self.createRandomItemStyle();
            }
            
            var chart = Echarts.init(document.getElementById('echarts-main'));
            chart.setOption({
                series: [{
                    type: 'wordCloud',
                    left: 'center',
                    top: 'center',
                    width: '100%',
                    height: '80%',
                    right: null,
                    bottom: null,
                    sizeRange: [12, 60],
                    rotationRange: [-90, 90],
                    rotationStep: 45,
                    gridSize: 8,
                    drawOutOfBound: false,
                    textStyle: {
                        normal: {
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: wordcloud
                }]
            })
        },
        //跳转购物车
        pay(){
            this.$router.push({path:'/pay',query:{id:this.article.id}})
        },
        //跳转文章广场
        market:function(){
            this.$router.push('/market')
        },
        //文章详情页
        async ArticleDetails(){
            var self= this;
            await this.axios.get(`/api/article/info?article_id=${self.$route.query.id}`).then(function(res){
                // console.log(res);
                self.article = res.data.data.list
                self.WordCloud = res.data.data.list.heat_map
                self.EchartsWordCloudfn(self.WordCloud);
            }).catch(function(){
                console.log(res);
            })
        },
        //生成16进制随机颜色
        createRandomItemStyle() {
            return {
                normal: {
                    color: 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')'
                }
            }
        }
    },
    beforeRouteEnter:(to,form,next)=>{
        next(vm=>{
            vm.a = form.params.name
        })
    },
    mounted:function(){
        this.ArticleDetails();
        this.EchartsWordCloudfn();
    },
}
</script>

<style >
.content{width: 1170px;margin: 0 auto;height: 100%;margin-top:105px;}
.fix-buy{position: fixed;left: 0;bottom: 0;width:100%;}
.bottom-work-title{float: left; margin-left: 10%;color: #303132;font-size: 16px;font-weight: bold;}
.work-price{color:#fff;margin-right: 50px;}
.add-buy{display: inline-block;height: 38px;width: 90px;background: #f5faff;color: #4895e7;line-height: 40px;text-align: center;margin-right: 20px;border-radius: 2px;cursor: pointer;}
.work-buy{display: inline-block;height: 38px;width: 90px;line-height: 40px;text-align: center;background: #4895e7;color: #fff;border-radius: 2px;cursor: pointer;}
.nav-author{font-size: 14px;padding-bottom: 12px;margin-left: 10px;}
.nav-author span{color: #bbbfc4;cursor: pointer;}
.back{float:right;color: #bbbfc4;}
.article-detail{width: 800px;background: #fff;padding: 40px;text-align: center;position: relative;}
.article-title{padding-bottom: 30px;}
.title-desc{font-size: 22px;color: #48494a;font-weight: bold;padding-bottom: 15px;}
.title-detail{color: #82868a;font-size: 12px;}
.title-detail>span{margin-right: 30px;}
.title-detail-sp{color: #64676a;}
.article-detail-slice{color: #64676a;/* background: #f7f8fc; */line-height: 30px;position: relative;/* background: linear-gradient(to bottom, #fff,#fff,#fff, #64676a); */font-size:14px;}
.slice-hidden::after{content: "";height: 100px;background: url(../../../assets/images/bg.png);background-size: 100% 100px;position: absolute;bottom: 0;left: 0;width: 100%;opacity: .8;}
.btn{background: #4895e7;color: #fff;padding: 10px 20px;border-radius: 2px;outline: none;resize: none;border:none;}
.not-publish{position: relative;}
.publish-hot{position:absolute;left:20px;} 
.publish-hot span{    font-size: 12px;}
.work-label{color: #82868a;}
.ulg{position: absolute; left:20px;top: 25px;}
.not-publish ul{position: relative; background: #f7f8fc;color: #82868a;font-size: 12px;;width: 780px;padding: 15px 0 15px 60px;margin-top: 40px;text-align: left;}
.not-publish ul>li{line-height: 25px;color: #82868a;text-align: left;margin-left: 6px;}
.author-info{width: 274px;border-radius: 2px;background: #fff;position: absolute;top: 0;right: 0;}
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
.hot, .similar{width: 855px;margin-top: 10px;background: #fff;text-align: center;}
.similar{width:880px;}
.hot, .similar>h3{padding-left: 25px;border-bottom: 1px solid #eff1f3;line-height: 45px;text-align: left;}
.hot-word{width: 600px;height: 200px;margin: 0px auto;cursor: default;-webkit-tap-highlight-color: transparent;user-select: none;background-color: rgba(0, 0, 0, 0);}
.change-page{float:right;padding-right:25px;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;}
.similar_list{padding: 0 25px 20px 30px;}
.similar_list>.img-box{margin-left:0;}
.similar_list ul li{margin-top: 20px;}
.similar_list ul li>.works-info-wrap{width:534px;}
.similar_list ul li .works-info-wrap .works-time>.work-author{widht:auto;}
</style>



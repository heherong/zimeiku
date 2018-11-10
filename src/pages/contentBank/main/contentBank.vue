<template>
    <div class="wrap transAll">
        <Myheader :active='a'></Myheader>
        <div class="content">
           
            <div style="position: relative; height: 100%;">
                <article class="article-detail">
                    <div class="article-title">
                        <div class="title-desc">如何引导小孩</div>
                        <div class="title-detail">
                            <span class="">
                                分类: <span style="title-detail-sp">孕产/育儿</span>
                            </span>
                            <span class="">
                                陶梦指数: <span style="title-detail-sp">65.3</span>
                            </span>
                            <span class="">
                                信息量: <span style="title-detail-sp">562字</span>
                            </span>
                            <span class="">
                                浏览量: <span style="title-detail-sp">1000</span>
                            </span>
                            <span class="">
                                时间: <span style="title-detail-sp">2018-10-30 20:40:57</span>
                            </span>
                        </div>
                    </div>
                    <div class="article-detail-slice slice-hidden">
                        
                           从第一个儿子出生，大家都围着团团转，当然我没太多去管他，基本上都是老人家带到大的，感觉我很愧疚于他，他现在跟同龄人相比，他还差好远，不会自己拉尿，不是很独立的吃饭，不怎么会说话，跳舞也不会，画画也不会......，然而老大已经是四岁了。与老二相比，老二的独立性可强了，他会自己吃饭，会学炒菜，会拿着拖把，会自己一个人睡觉，会说尿尿了，会拿着钥匙开门......不过老二才两岁，相差甚远，这也不能怪老人家，老人家帮我们带是一种好意。当然现在我已经把老大接手过来了，已经快半年了，慢慢的也改变了很多，以前老大跟班里的同学都是不合群的，而且攻击性很强，现在老大已经好很多了，会跟同学一起玩了，不会像以前那样在班级里面跑来跑去了。所以看到这些我都很欣慰。他在进步。因为这段时间都在陪伴老大，慢慢的把老二疏远了，所以老二也没怎么在进步了。    
                
                    </div>
                    <div class="not-publish">
                        <p style="color:#82868a;font-size:12px;line-height: 30px;margin-top: 20px;">为了保证版权安全,仅显示50%内容,购买后可查看全文且拥有该作品的著作权</p>
                        <button class="btn" style="cursor:pointer;">立即购买</button>
                        <div class="publish-hot">
                            <span>
                                高频词:
                                <span style="color:#303132;">
                                    小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span>
                                    小孩
                                    <span class="work-label"> | </span>
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
                        <div class="author-name">
                            一颗执着的心 
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
                    <div style="position: relative; overflow: hidden; width: 600px; height: 200px;">
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
                <div class="similar_list">
                    <ul>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                        <Item :bol='false'></Item>
                    </ul>
                </div>
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

<style scoped="scoped">
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

<script>
import Item from '../../market/ContentListItem'
import Myheader from '../../../components/header-nav-wrap'
export default {
    components:{
        Item  ,
        Myheader
    },
    data:function(){
        return {a:'market'}
    },
    methods:{
        back:function(){
            this.$router.go(-1)
        },
        fn:function(){
            this.$router.push('/market')
        }
    },
    beforeRouteEnter:(to,form,next)=>{
        next(vm=>{
            vm.a = form.params.name
        })
    },
    mounted:function(){
        console.log(this.a);
    }
}
</script>



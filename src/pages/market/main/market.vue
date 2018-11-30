<template>
    <div class="wrap transAll" style="min-height:366px; margin-top:0;">
        <Myheader :active ='tabActive'></Myheader>
        <div class="market" style="margin-top:105px;">
            <div class="condition-wrap">
                <div class="condition-item">
                    <span class="tit">作品类型:</span>
                    <ul class="use-scenes" :style="{height:downm}">
                        <li v-for="(item , index) in infoType" :class="{activeNav:nowIndex==index}" @click="changetype(index)">{{item.name}}</li> 
                    </ul>
                    <div style="float:left" v-show='true'>
                        <More @height ='fheight'></More>
                    </div>
                    <!-- <div class="count" v-if="false">
                        <el-input
                            size="mini"
                            style="width:80px;float:left;"
                            v-model="inputStrat">
                        </el-input>
                        <div class="nav-line"></div>
                        <el-input
                            size="mini"
                            style="width:80px;float:left"
                            v-model="inputEnd">
                        </el-input>
                        <span style="float:left;text-indent: 5px;dispaly:block;width:50px;"></span>
                        <div class="nav-btn">确定</div>
                    </div> -->
                </div>
                <div class="nav-wrap-shoppingcart" @click="shoppingcart()">
                    <i class="icon-shoppingcart">
                        <div class="cart-side-num">
                              {{eachStatus.length}}
                        </div>
                    </i>
                </div>
                <!-- <MyconditionWrap type='作品字数:' :data1='infoNum' :bol1='false' :bol2='false'></MyconditionWrap>
                <MyconditionWrap type='原  创  度:' :data1='infoOriginal' :bol1='false' :bol2='true' type2='原创度'></MyconditionWrap>
                <MyconditionWrap type='买 断  价:' :data1='infoBuy' :bol1='false' :bol2='true' type2='元'></MyconditionWrap> -->
            </div>
            <div class="original-content-list-wrap">
                <div class="title-wrap">
                    <span >作品列表</span>
                    <p id="p">
                        <span class="check-codition active-condition" >综合</span>
                        <span>|</span>
                        <span class="check-codition">最新</span>
                        <span>|</span>
                        <span class="check-codition">价格从高到低</span>
                        <span>|</span>
                        <span class="check-codition">价格从低到高</span>
                    </p>
                </div>
                <ul class="original-works-list-wrap">
                    <li v-for="(item , index) in data.list">
                        <div class="img-box">
                            <!-- <router-link to='/ContentBank' target="_blank"> -->
                                <img :src="item.img_count" alt="" style="width:100%;" v-if="!(item.img_count=='' || item.img_count == null)">
                                <img src="../../../assets/images/1.jpg" alt="" style="width:100%;" v-else>
                            <!-- </router-link> -->
                        </div>
                        <div class="works-info-wrap">
                            <div class="works-info-tit-wrap">
                                <strong @click="ContentBank(item.id)" style="cursor: pointer;">{{item.title}}</strong>
                                <span class="word-num-wrap">（1638字0图片</span>
                            </div>
                            <div class="works-time">
                                <span class="work-author" style="cursor:pointer">
                                    <span>作者：</span>
                                        {{item.field}}
                                    <div class="float-author">
                                        <p class="author-float-info">
                                            <img :src="item.img_count" alt="" v-if="item.img_count!=null" />
                                            <img src="http://cdn.yuanrongbank.com/3896/1539755290323/微信图片_20181017134756.jpg" v-else />
                                            
                                            <span>{{item.field}}</span>
                                        </p>
                                        <p>
                                            创作形式
                                            <span>{{item.type}}</span>
                                        </p>
                                        <p>
                                            擅长领域
                                            <span>{{item.words_count}}</span>
                                        </p>
                                        <p>
                                            作品数量
                                            <span>2</span>
                                        </p>
                                        <p class="popluarity">
                                            人&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp气
                                            <span>441</span>
                                        </p>
                                        <p class="jump_detail">
                                            <div class="btn-more">查看详情</div>
                                        </p>
                                    </div>
                                </span>
                                <span class="work-lebal">{{item.created_at}}</span>
                            </div>
                            <div class="item-describe">
                                {{item.content}}
                            </div>
                            <p class="work-label-wrap">
                                <span class="item-label">
                                    <span class="work-label">分类：</span>
                                    <span class="work-con">{{item.original_degree}}</span>
                                </span>
                                <span class="item-label">
                                    <span class="work-label">高频词：</span>
                                    <span class="work-con" >
                                        <!-- <span v-for="item in item.words_count" v-if="item.words_count!=null">
                                            {{item}}<span class="work-label"> | </span>
                                        </span> -->
                                        <span>
                                            女人<span class="work-label" > | </span>
                                            恨嫁<span class="work-label"> | </span>
                                            女追男<span class="work-label"> | </span>
                                        </span>
                                    </span>
                                </span>
                                <span class="item-label" >
                                    <span class="work-label">浏览量:</span>
                                    <span class="work-con">106</span>
                                    
                                </span>
                                <span class="item-label">
                                    <span class="work-label">自媒库指数：</span>
                                    <span class="work-con" v-if="item.original_degree!=null">{{item.original_degree}}</span>
                                    <span class="work-con" v-else>65.35</span>
                                </span>
                                
                            </p>
                        </div>
                        <div class="works-right-wrap">
                            <p>
                                <i class="icon-help"></i>
                                <span class="price-pub">买断价:</span>
                                <span class="price">¥{{item.money}}</span>
                            </p>
                            <p>
                                <button class="addCar" @click="buy(item.id)" :disabled='eachStatus.indexOf(item.id)>=0' v-if ='eachStatus.indexOf(item.id)<0'>加入购物车</button>
                                <button class="addCar btn-border-disabled" v-else>已加入购物车</button>
                            </p>
                            <p style="margin-top:10px;">
                                <button class="purchase" @click="pay(item.id)">立即购买</button>
                            </p>
                        </div>
                        <div style="clear:both;"></div>
                    </li>
                    
                    <div style="text-align:center;">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            @current-change="currentChange"
                            :total='totalNum'>
                        </el-pagination>
                    </div>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
body{height: 100%;}
</style>


<script>
// import MyconditionWrap from '../conditionWrap'
import Myheader from '../../../components/header-nav-wrap'
import More from '../hide.vue' 
import qs from 'qs'

export default {
    components:{
    //   MyconditionWrap,
      Myheader,
      More
    },
    data:function(){
        return {
            infoType:'',
            infoNum:['不限','500字以下','500-1000字','1000-1500字','1500字-2000字','2000字-3000字','3000字以上'],
            infoOriginal:['不限','20%以下','20%-40%','40%-60%','60%-80%','80%-100%'],
            tabActive:'market',
            downm:'',
            curPage:1,
            pagesize:3,
            totalNum:0,
            nowIndex:0,
            data:'',
            isDisabled:false,
            shoppingcartNum:0,
            isCart:[],
            
        }
    },
    beforeRouteEnter:(to,form,next)=>{
        next(vm=>{
            vm.tabActive = to.params.name
        })
    },
    methods:{
        fheight:function(val){
            this.downm = val;
        },
        //获取类型
        gain:function(){
            let self =this;
            self.$fetch(`/api/fields/list`,).then(function(res){
                self.infoType = res.data.list;
                
            }).catch(function(res){
                console.log(res);
            })
        },
        //改变类型
        changetype(i){
            this.nowIndex = i
            this.fn(this.curPage,this.pagesize);
        },
        shoppingcart(){
            
            if(this.$Cookies.get('token')!=''){
                this.$router.push('shoppingcart');
            }else{
                this.$alert('请先登录', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.push('login');
                    }
                });
            }
        },
        fn:function(curPage,pagesize){
            let self = this;
            // self.$fetch(`/api/article/list?page=${curPage}&pagesize=${pagesize}&field=${self.nowIndex}`).then((response)=>{
            self.$fetch(`/api/article/list?page=${curPage}&pagesize=${pagesize}`).then((response)=>{
                this.data=response.data;
                console.log(response);
                // console.log(this.data.list);
                if(response.data.data.list.length>0){
                    for(let i=0;i<response.data.data.list.length;i++){
                        response.data.data.list[i].created_at = response.data.data.list[i].created_at.substring(0,10);
                    }
                    self.tableData = response.data.list;
                    self.totalNum = response.data.count;
                }
            }).catch((response)=>{
                console.log(response);
            })
            
        },
        currentChange: function(curPage){
            this.curPage = curPage;
            this.fn(this.curPage,this.pagesize);
        },
        //购物车列表
       async cartlist(){
            let self = this;

            await this.$post('/api/cart/list',`token=${self.$Cookies.get('token')}`).then(function(res){
                self.isCart = res.data.list;
            }).catch(function(res){
                console.log(res)
            })
        },
        
        buy(id){
            //购物车数字
            let data = qs.stringify({
              article_id:id,
			});
            let self = this;
            this.axios.post('/api/cart/add',
                data
            ).then(function(res){
                let Successmsg = res.data.msg
                console.log(res);
                self.$message({
                    type:'success',
                    message:Successmsg
                })
                self.shoppingcartNum++;
                self.cartlist();
                
            }).catch(function(res){
                console.log(res)
            })
        },
        pay(val){
            this.$router.push({path:'/pay',query:{id:val}});
        },
        ContentBank:function(val){
    		
            this.$router.push({path:'/ContentBank',query:{id:val}});
        },
    },
    computed:{
        //文章ID值
        eachStatus(){
            var self = this;
            var a = [];
            for(var i = 0;i<self.isCart.length;i++){
                (function(n){
                    a[i]=self.isCart[i].article_id  
                })(i)
            }
            return a
        }
    },
    mounted:function(){
        this.gain();
        this.cartlist();
        var list = document.getElementById('p').getElementsByTagName("span");
        for(var i = 0; i < list.length; i++){
            (function(n){
                list[n].onclick = function(){
                    for(var j = 0; j < list.length; j++){
                        list[j].className = '';
                    }
                    list[n].className = "active-condition";
                }
            
            }(i))
        }
    },
    created:function(){
        this.fn(this.curPage,this.pagesize);
        
    }
}
</script>


<style>
.condition-wrap{padding:20px 0;overflow: hidden;background:#fff;}

.market{width: 1170px;margin: 0 auto;}
.condition-item{overflow: hidden;margin-bottom: 20px;margin-left: 30px;font-size: 14px;background:#fff;position: relative;}
.condition-item .tit{color:#82868a;display: block;float: left;}
.use-scenes{float: left;overflow: hidden;width: 999px;height:24px;}
.use-scenes li{float: left;margin-left: 10px;height: 24px;padding: 0 9px;cursor: pointer;line-height: 20px;font-size: 14px;margin-bottom: 6px;color: #303132;}
li.activeNav{color: #4895E7;background: #e5f0fc;border-radius: 2px;}
.count{position: absolute;float: right;width:300px;height: 30px;right:120px;line-height: 26px;}
.nav-btn{width:40px;height: 26px;background:#4996E8;cursor: pointer;float: left;text-align: center;line-height: 26px;color:#fff;padding:0 4px;}
.el-input:nth-child(1){margin-right:30px;}

.nav-line{width:28px;height: 1px;position: absolute;background:#ccc;top:14px;left:80px;}
.nav-wrap-shoppingcart{width:40px;height:40px;position: fixed;right:5px;background: #fff;border-radius: 2px;}
.icon-shoppingcart{width: 40px;height: 40px;position: relative;display: inline-block;background:url('../../../assets/images/shoppingcart.png') no-repeat;background-size: 60%;background-position: center center;cursor: pointer;}
.cart-side-num{position: absolute;right: -4px;top: -6px;background: #e16556;border-radius: 50%;min-width: 20px;font-size: 12px;line-height: 20px;color: #fff;text-align: center;z-index:2;}
.original-content-list-wrap{margin-top:23px;}
.title-wrap{width: 100%;border-bottom: 1px solid #e9ecf1;height: 48px;line-height: 48px;background: #fff;}
.title-wrap>span{margin-left: 29px;color: #64676a;font-size: 16px;}
.title-wrap p{float: right; margin-right: 21px;}
.title-wrap>p>span{margin-right: 8px;color: #64676a;padding: 4px 9px;cursor: pointer;font-size: 12px;border-radius: 2px;}
.check-codition{}
span.active-condition{color: #4895e7 !important;background: #e5f0fc;}
/* .original-works-list-wrap{min-height: 520px;} */
.original-works-list-wrap>li{padding: 28px 0;margin-bottom: 11px;background: #fff;}
.img-box {float: left;width: 240px;height: 136px;position: relative;overflow: hidden;margin-left: 26px;}
.works-info-wrap{float: left;width: 700px;margin-left: 20px;}
.works-info-tit-wrap strong{font-size: 18px;color: #48494a;font-weight: bold;float: left;}
.word-num-wrap{line-height: 24px;float: left;font-size: 14px;}
.works-time{line-height: 32px;height: 32px;font-size: 12px;position: relative;float: left;width:100%;}
.work-author{float: left;display: block;width: 164px;height: 32px;position: relative;line-height: 32px;}
.float-author{display: none;  position: absolute;width: 140px;left: 0;top: 32px;background: #fff;border: 1px solid #f2f4f6;border-radius: 2px;padding: 13px 42px;z-index:2;box-shadow: 0px 0px 43px #e4dede;}
.work-author:hover div.float-author{display: block;}
.float-author p{line-height: 24px;font-size: 12px;color: #303132;margin-top: 11px;}
.author-float-info>span{margin-top:10px;}
.float-author p>span{float:right;vertical-align: middle;margin-left: 8px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 77px;display: inline-block;text-align: left;font-size: 14px;}
.author-float-info>img{width: 50px;height: 50px;border-radius: 50%;vertical-align: middle;}
.btn-more{display: block;text-align: center; line-height: 34px;width: 120px;height: 34px;background: #4895e7;color: #fff;font-size: 12px;margin: 0 auto;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;}
.item-describe{float: left; line-height: 22px;height: 42px;color: #727477;max-height: 49px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;font-size: 14px;}
.work-label-wrap{margin-top: 20px;font-size: 12px;float: left;width:100%;}
.item-label{margin-right: 55px;}
.works-right-wrap{float: right;width: 132px;margin-right: 31px;text-align: center;}
.works-right-wrap>p:nth-of-type(1){width: 100%;text-align: center;margin-bottom: 18px;}

.price-pub{color: #64676a;font-size: 12px;margin-right:2px;}
.price{display: inline-block;color: #F5B923;font-size: 18px;}
.addCar{width: 106px;height: 40px;border: 1px solid #dfeaf8;background: #f6faff;color: #4895e7;font-size: 14px;cursor: pointer;border-radius: 2px;}
.btn-border-disabled{background: #f8f9fb !important;color: #d3d5d9 !important;pointer-events: none;}
.purchase{width: 106px;height: 40px;font-size: 14px;color: #fff;background: #4895e7;cursor: pointer;border-radius: 2px;    outline: none;resize: none;border:none;}
</style>




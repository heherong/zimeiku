<template>
    <div class="wrap transAll">
        <Myheader></Myheader>
        <div class="inner-wrap" style="margin-top:105px;background:#fff;">
            <div style="padding: 0 20px;overflow:hidden;">
                <div class="nav-pay">
                    <div class="pay-header">
                        <span class="pay-title">确认订单</span>
                        <div class="pay-step">
                            <span class="pay-step-item1" :class="{stepActive:istepstatus==1}">
                                提交订单信息
                            </span>
                            <span class="pay-roll-before" :class="{stepActive:istepstatus==1}" v-if="istepstatus==1"></span>
                            <span class="pay-step-item1" :class="{stepActive:istepstatus==2}">
                                支付订单费用 
                            </span>
                            <span class="pay-roll-before" :class="{stepActive:istepstatus==2}"  v-if="istepstatus==2"></span>
                            <span class="pay-step-item1" :class="{stepActive:istepstatus==3}">
                                交易成功
                            </span>
                            <span class="pay-roll-before" :class="{stepActive:istepstatus==3}"  v-if="istepstatus==3"></span>
                        </div>
                    </div>
                </div> 
                <!--提交订单信息-->
                <div class="order-wrap" v-if="istepstatus==1">
                    <div style="min-height: 240px;">
                        <table>
                            <thead>
                                <tr>
                                    <td>序号</td>
                                    <td>订单类型</td>
                                    <td>订单内容</td>
                                    <td>税前金额</td>
                                    <td>税额</td>
                                    <td>订单金额</td>
                                </tr>
                            </thead>
                            <tbody style="color: #64676A;">
                                <tr>
                                    <td>1</td>
                                    <td>{{data.type}}</td>
                                    <td>{{data.title}}</td>
                                    <td>{{data.preTax}}</td>
                                    <td>{{data.tax}}</td>
                                    <td>{{data.nextTax}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="order-price-wrap">
                        <div class="price-item-wrap">
                            <div class="price-item1">
                                订单总金额：
                            </div>
                            <div class="price-item2">
                                ￥{{data.nextTax}}
                            </div>
                        </div>
                        <div class="price-item-wrap">
                            <div class="price-item1">
                                总税金：
                            </div>
                            <div class="price-item2">
                                ￥{{data.tax}}
                            </div>
                        </div>
                        <div class="price-item-wrap" style="padding-top: 8px;">
                            <div class="price-item1">
                                实付款：
                            </div>
                            <div class="price-item2" style="font-size: 16px;color: #F5A623;font-weight: 600;">
                                ￥{{data.nextTax}}
                            </div>
                        </div>
                    </div>
                    <div class="order-bottom">
                        <div class="order-confirm-btn">
                            <el-button type="primary" @click="submit">提交订单</el-button>
                        </div>
                    </div>
                </div>
           		<!--支付订单费用-->
           		<div class="order-wrap" v-if="istepstatus==2">
           			
           				<el-row style="padding: 20px;margin-right:30px;background-color: #edf5ff;">
						  	<el-col :span="18">
						  		<p style="font-size: 20px;">订单编号：
						  			<span style="color:#409EFF;">{{orderData.id}}</span>
						  		</p>
						  		<br />
           						<p>订单个数：<span>{{orderData.number}}</span></p>
						  	</el-col>
						  	<el-col :span="6">
						  		<p>支付金额：<span style="color: #f56c6c;font-size:24px;"> {{ orderData.money }} </span>元</p>
						  	</el-col>
						</el-row>
           				<el-row>
						  	<el-col :span="24">
						  		<img :src="weixin_png" style="width:130px;"/>
						  	</el-col>
						</el-row>
           			
           		</div>
            </div>
        </div>
    </div>
</template>

<style>
.nav-pay{height: 50px;line-height: 50px;padding: 0 20px;border-bottom: 1px solid #ddeaf9;}
.pay-title{font-size: 18px;color: #64676a;}
.pay-step{float:right;}
.pay-step>span{font-size: 12px;display: inline-block;width: 140px;height: 30px;line-height: 30px;text-align: center;}
.pay-step>span.stepActive{background: #7cbc5a;color: #fff;}
.pay-step>span.pay-roll-before{width: 0;height: 0;border-top: 15px solid #eaf4e5;border-bottom: 15px solid #eaf4e5;border-left: 10px solid #7cbc5a;display: inline-block;vertical-align: middle;margin-left: -5px;}
.order-wrap{width: 100%;margin: 0 auto;padding: 20px;background: #fff;}
.order-wrap table{width: 100%;text-align: center;font-size: 12px;border: none;}
.order-wrap table thead{background: #F4F6F9;line-height: 40px;color: #303132;}
.order-wrap table tbody tr td{border-bottom: 1px solid #EFF1F3;padding: 20px 0;}
.price-item1{float: left;width:88%;text-align: right;color:#64676A;font-size: 12px;}
.price-item2{float: left;text-align: left;color:#64676A;font-size: 12px;}
.price-item-wrap{overflow: hidden;}
.order-bottom{text-align: right;padding: 20px 3.8% 20px 0;}
.order-confirm-btn{margin-right:50px;}
</style>


<script>
import Myheader from '../../components/header-nav-wrap'
import weixin from '@/assets/images/weixin.png'; 
import tui from '@/assets/images/tui.png';
import qs from 'qs' //请求
export default {
    components:{
        Myheader,
    },
    data:function(){
        return {
            istepstatus:1,
            weixin_png:weixin,
            tui_png:tui,
            data:{
                article_id:'',
                type:"1", //1是立即购买
                title:"迟来的痛感",
                preTax:48,
                tax:5,
                nextTax:53
            },
            orderData:{
            	id:123456789,
            	number:1,
            	money:84.8,
            	ecord:'' //二维码图片
            },
            bugUrl: '/api/order/add', //提交订单
        }
    },
    mounted:function(){
    	this.data.article_id = this.$route.query.id;
    	console.log(this.data.article_id);
    },
    methods:{
        submit:function(){
            const h = this.$createElement;
            let self = this;
            
            this.$msgbox({
            title: '订单支付',
            message: h('p', null, [
                
                h('i', { style: 'color: teal' }, '是否支付订单')
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
	                    self.istepstatus = 2;
	                    done();  
//	                	self.$post(self.bugUrl, qs.stringify({
//	                		product_id:([self.data.article_id]).toString(),
//	                		type:self.data.type
//	                	}), {
//							showLoading: true
//						})
//						.then(function(response) {
//							console.log(response);
//							
//						}).catch(function(error) {
//							console.log(error);
//						});
	                    	
                } else {
                done();
                }
            }
            }).then(action => {
            this.$message({
                type: 'info',
                message: '支付成功'
            });
            });
        }
    },
    
}
</script>


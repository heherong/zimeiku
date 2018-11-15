<template>
    <div class="wrap transAll">
        <Myheader :active='a'></Myheader>
        <div class="demand-wrap">
            <div class="hall-con-wrap">
                <div class="query-form">
                    <div class="demand-query-type">
                        <span>类型:</span>
                        <span :class="{demandActive:now==0}" @click="now=0">全部</span>
                        <span :class="{demandActive:now==1}" @click="now=1">内容定制</span>
                        <span :class="{demandActive:now==2}" @click="now=2">原创征稿</span>
                        <span :class="{demandActive:now==3}" @click="now=3">营销分发</span>
                    </div>
                </div>
            </div>
            <div class="demand-middle">
               <div style="width:870px;">
                    <div class="demand-contanier" style=" float:left">
                        <ul class="demand-list">
                            <MyItem></MyItem>
                            <MyItem></MyItem>
                            <MyItem></MyItem>
                            <MyItem></MyItem>
                            <MyItem></MyItem>
                        </ul>
                    </div>
                </div>
                <div class="demand-help transAll">
                    <div>
                        <span>玩转自媒库</span> 

                    </div>
                    <ul>
                        <li>
                            <div>
                                <div>
                                    原创征稿
                                </div>
                                <div>
                                    Original
                                </div>
                                <div>
                                    works
                                </div>
                            </div>
                            <div style="text-align:center;">我有稿件，怎样投稿赚钱？</div>
                        </li>
                        <li class="made-type transAll">
                            <div style="">
                                <div>内容定制</div>
                                <div>Content</div>
                                <div>customization</div>
                            </div>
                            <div style="text-align:center;">我文笔棒，怎样更好变现？</div>
                        </li> 
                        <li class="marketing-type transAll">
                            <div style="">
                                <div>营销分发</div>
                                <div>Marketing</div>
                                <div>marketing-type</div>
                            </div>
                            <div class>我有账号，如何有偿发广告？</div>
                        </li> 
                    </ul>
                </div>
            </div>
            <div class='pag-wrap'>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style>
.demand-wrap{width: 1170px;margin: 0 auto;margin-top: 105px;}
.query-form{height: 50px;line-height: 50px;padding: 0 20px;border-radius: 2px;background: #fff;color: #64676A;margin-bottom: 19px;}
.demand-query-type{margin-bottom:20px;}
.demand-query-type span:first-child{margin-right: 10px;}
.demand-query-type span:nth-child(n+2){cursor: pointer;display: inline-block;/* width: 36px; */height: 24px;line-height: 24px;text-align: center;margin-right: 20px;}
.demand-query-type span:nth-child(n+3){    display: inline-block;width: 84px;text-align: left;}
.demandActive{color: #4895E7;}
.demand-list li{width: 780px;height: 210px;border-radius: 2px;background: #fff;margin-bottom: 20px;padding: 0 27px 22px 23px;overflow: hidden;position: relative;}
.demand-help{width: 280px;height: 640px;background: #fff;float: right;padding: 23px 20px 43px 20px;}
.demand-help>div{overflow: hidden;height: 30px;line-height: 30px;padding-bottom: 5px;border-bottom: 1px solid #e9ebec;}
.demand-help div>span:first-child{font-size: 18px;color: #64676A;float: left;position: relative;top: -2px;}
.demand-help ul li{width: 240px;margin-top: 20px;border-radius: 2px;cursor: pointer;}
.demand-help > ul > li:nth-child(1) > div:first-child{background:url('../../../assets/images/origin-bg1.png')}
.demand-help > ul > li > div:first-child > div:first-child{font-size: 24px;color: #89BC62;margin-bottom: 5px;}
.demand-help > ul > li > div:first-child{width: 240px;height: 118px;border-radius: 2px;padding: 23px 0 0 29px;}
.demand-help > ul > li > div:first-child > div:nth-child(n+2){font-size: 16px;color: rgba(137,188,98,0.60);line-height: 16px;}
.demand-help > ul > li > div:last-child{text-align: left;font-size: 14px;color: #64676A;line-height: 42px;border: 1px solid #F1F1F2;}
.demand-help > ul > .made-type > div:first-child{background:url('../../../assets/images/origin-bg2.png')}
.demand-help .made-type div:first-child > div:first-child{margin-bottom: 5px;font-size: 24px;color: #4895E7;}
.demand-help .made-type div:first-child > div:nth-child(n+2){font-size: 16px;color: rgba(72,149,231,0.70);line-height: 16px;}
.demand-help > ul > .marketing-type > div:first-child{background:url('../../../assets/images/origin-bg3.png')}
.demand-help .marketing-type div:first-child > div:first-child{margin-bottom: 5px;font-size: 24px;color: #9B76F8;;}
.demand-help .marketing-type div:first-child > div:nth-child(n+2){font-size: 16px;color: rgba(155,118,248,0.60);;line-height: 16px;}
.pag-wrap{width: 870px;padding: 40px 0 20px;color: #797b7e;float: left;text-align: center;}
</style>

<script>
import Myheader from '../../../components/header-nav-wrap'
import MyItem from '../demand-list-item'
export default {
    components:{
        Myheader,
        MyItem
    },
    data:function(){
        return{
            a:'buyerorder',
            now:0
        }
    },
    methods:{
        getAjax:function(){
            this.axios.get('http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/solicit/list',{
                params:{
                    page:'1',
                    pagesize:'5'
                }
            }).then(function(res){
                console.log(res)
            }).catch(function(res){
                console.log(res);
            })
        }
    },
    beforeRouteEnter:(to,form,next)=>{
			next(vm=>{
				vm.a = to.params.name
			})
        },
    created:function(){
        this.getAjax();
    }
}
</script>


<template>
    <div>
        <Myheader :active ='tabActive'></Myheader>
        
        <MyBanner effect='fade'>
            <div slot="swiper-con" class="swiper-slide">
                <img src="../../../assets/images/Banner/banner01.jpg" alt="" class="swiper-img">
            </div>
             <div slot="swiper-con" class="swiper-slide">
                <img src="../../../assets/images/Banner/banner02.jpg" alt="" class="swiper-img">
            </div>
             <div slot="swiper-con" class="swiper-slide">
                <img src="../../../assets/images/Banner/banner03.jpg" alt="" class="swiper-img">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img src="../../../assets/images/Banner/banner04.jpg" alt="" class="swiper-img">
            </div>
        </MyBanner>
        <MyIndexNumInfo></MyIndexNumInfo>

        <section class="index-section-wrap" style="background:#ECEFF4">
            <div class="inner-wrap section-wrap">
                <MySectionTit title="文章广场"></MySectionTit>
                <div class="section-con-wrap">
                    <ul style="overflow: hidden;">
                        <li class="transAll content-item"  v-for="item in data">
                            <router-link target='_blank' to='/ContentBank'> 
                                <div class="type-sign">
                                    <span v-if="item.keywords!=null" >
                                        {{item.keywords}}
                                    </span>
                                    <span v-else>
                                        关键词
                                    </span>
                                </div>
                                <h4>{{item.title}}</h4>
                                <div class="item-con-wrap">
                                    {{item.content}}
                                </div>
                                <div class="author-info-wrap">
                                    <div class="author">
                                        <span class="author-avatar">
                                            <!-- <img src="http://cdn.yuanrongbank.com/3304/1534747771280/346971535453003631.jpg" alt=""> -->
                                            
                                        </span>
                                        <div class="author-name">
                                            {{item.field}}
                                        </div>
                                    </div>
                                    <div class="Tminfo">
                                        自媒库指数
                                        <span class="yr-tm" v-if="item.original_degree!=null">{{item.original_degree}}</span>
                                        <span class="yr-tm" v-else>{{item.original_degree}}</span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="index-section-wrap"  id="sec2" style="background:#ECEFF4">
            <div class="inner-wrap section-wrap">
                <MySectionTit title="征文大厅"></MySectionTit>
                <div class="section-con-wrap">
                    <ul style="overflow: hidden;">
                        <li class="transAll content-item"  v-for="item in data2">
                            <router-link target='_blank' to='/ContentBank'> 
                                <div class="type-sign">
                                    <span v-if="item.keywords!=null" >
                                        {{item.type}}
                                    </span>
                                    <span v-else>
                                        关键词
                                    </span>
                                </div>
                                <h4>{{item.title}}</h4>
                                <div class="item-con-wrap">
                                    {{item.content}}
                                </div>
                                <div class="author-info-wrap">
                                    <div class="author">
                                        <span class="author-avatar">
                                            <img :src="item.img_count" v-if="item.img_count!=null"/>
                                            <img src="http://cdn.yuanrongbank.com/3304/1534747771280/346971535453003631.jpg" alt="">
        
                                        </span>
                                        <div class="author-name">
                                            {{item.field}}
                                        </div>
                                    </div>
                                    <div class="Tminfo">
                                        自媒库指数
                                        <span class="yr-tm" v-if="item.original_degree!=null">{{item.original_degree}}</span>
                                        <span class="yr-tm" v-else>{{item.original_degree}}</span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.index-section-wrap{width:100%;}
.section-wrap{padding: 24px 0 15px;}
.section-con-wrap {overflow: hidden;width:100%;margin-top:22px;}
.section-con-wrap ul>li:hover{    
    transform: scale(1.01,1.01);
    -moz-transform: scale(1.01,1.01);
    -webkit-transform: scale(1.01,1.01);
    -o-transform: scale(1.01,1.01);
    transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -webkit-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);
    -moz-box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);
    -webkit-box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);}
.section-con-wrap ul>li:hover h4{border-bottom:solid 1px transparent;}
.content-item{float: left;position: relative;background: #FFFFFF;border-radius: 2px;width: 278px;margin-bottom: 15px; -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);-moz-box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);padding: 17px 0 17px 5px;margin-right:9.5px;}
.content-item a h4{border-bottom: 1px dashed #D8DADB;overflow: hidden;color: #303132;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 1;line-height: 40px;height: 40px;margin: 15px 14px;}
.type-sign{position: absolute;left: 14px;top: 0;padding: 0 14px;background: #56BCEB;border-radius: 0 0 2px 2px;font-size: 12px;line-height: 24px;color: #FFFFFF;}
.item-con-wrap{font-size: 12px;color: #82868A;line-height: 22px;height: 62px;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 3;margin: 12px 0 29px;padding: 0 14px;}
.author-info-wrap{background: #F5F7FB;border-radius: 2px;padding: 6px 8px;line-height: 30px; font-size: 12px;width:250px;}
.author{float: left;}
.author-avatar{width: 30px;height: 30px;overflow: hidden;background: #eee;border-radius: 50%;margin-right: 4px;display: block;float: left;}
.author-avatar img{width: 100%;}
.author-name{float: left;font-size: 12px;color: #64676A;}
.Tminfo{float: right;color:#82868A;}
.yr-tm{color: #4895E7;}
</style>


<script>
import MyBanner from '../../../components/Banner'
import MyIndexNumInfo from '../IndexNumInfo'

import Myheader from '../../../components/header-nav-wrap'
import MySectionTit from '../SectionTitle'
export default {
    components:{
        MyBanner,
        MyIndexNumInfo,
        MySectionTit,
        
        Myheader
    },
    data:function(){
        return {
            tabActive:'index',
            newsList:'',
            data:'',
            data2:''
        }
    },
    beforeRouteEnter:(to,form,next)=>{
        next(vm=>{
            vm.tabActive = to.params.name
        })
    },
    methods:{
        fn:function(){
            this.axios.get('http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/solicit/list',{
                params:{
                    page:"1",
                    pagesize:'8'
                }
            }).then((response)=>{
                this.data=response.data.data.list;
                
            }).catch((response)=>{
                console.log(response);
            })
        },
        fn2:function(){
            this.axios.get('http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/article/list',{
                params:{
                    page:"1",
                    pagesize:'8'
                }
            }).then((response)=>{
                this.data2=response.data.data.list;
                
            }).catch((response)=>{
                console.log(response);
            })
        }
    },
    created:function(){
        this.fn();
        this.fn2();
    }
}
</script>

<style>
#sec2{background:url("../../../assets/images/section_bg_2.png")!important;}
</style>



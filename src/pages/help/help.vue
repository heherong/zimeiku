<template>
    <div class="transAll" style="width:100%;">
        <Myheader></Myheader>
        <div class="inner-wrap" style="margin-top:105px;">
            <div class="aside-wrap transAll" style="min-height:273px;">
                <ul class="menu-ul-wrap transAll">
                    <item  txt='平台相关' mark='platform' :sel='selected' @change='getVal'>
                        <img src="../../assets/images/nav-relat-act.png" slot="activeImg"/>
                        <img src="../../assets/images/nav-relat-nor.png" slot="normalImg"/>
                    </item>
                    <item  txt='账户信息' mark='helpinfo' :sel='selected' @change='getVal'>
                        <img src="../../assets/images/nav-per-act.png" slot="activeImg"/>
                        <img src="../../assets/images/nav-per-nor.png" slot="normalImg"/>
                    </item>
                    <item  txt='买家指南' mark='buyerguide' :sel='selected' @change='getVal'>
                        <img src="../../assets/images/zhinan-act.png" slot="activeImg"/>
                        <img src="../../assets/images/zhinan-nor.png" slot="normalImg"/>
                    </item>
                    <item  txt='卖家指南' mark='sellerguide' :sel='selected' @change='getVal'>
                        <img src="../../assets/images/question-nor.png" slot="activeImg"/>
                        <img src="../../assets/images/question-act.png" slot="normalImg"/>
                    </item>
                    <item  txt='作品审核标准' mark='auditstandards' :sel='selected' @change='getVal'>
                        <img src="../../assets/images/nav-buld-act.png" slot="activeImg"/>
                        <img src="../../assets/images/nav-buld-nor.png" slot="normalImg"/>
                    </item>
                    <item  txt='付款与结算' mark='paymentsettlement' :sel='selected' @change='getVal'>
                        <img src="../../assets/images/nav-bus-act.png" slot="activeImg"/>
                        <img src="../../assets/images/nav-bus-nor.png" slot="normalImg"/>
                    </item>
                </ul>
            </div>
            <div class="main-wrap">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
.aside-wrap{background: #fff;border-radius: 2px;float: left;width:200px;position: fixed;top: 105px;z-index: 3;}
.menu-ul-wrap{position: relative;height: 100%;color: #64676a;overflow: hidden;border-radius: 5px;}
.main-wrap{width: 970px;margin-left: 220px;margin-bottom: 20px;}
.introduction-help-center{ padding: 0 30px 50px;background-color: #fff;text-align: left;}
.introduction-help-center>h3{   
    font-weight: 400;
    font-size: 18px;
    padding: 13px 0;
    border-bottom: 1px solid #eff1f3;
    font-size: 18px;
    }
.introduction-help-center>h4{    
    font-weight: 400;
    font-size: 16px;
    padding: 15px 0;
    font-size: 16px;
    }
.introduction-help-center p{
    margin-left: 30px;
    line-height: 30px;
    color: #64676a;
    }


</style>


<script>
import Myheader from '../../components/header-nav-wrap'
import item from './helpnavitem'
export default {
    components:{
        Myheader,
        item
    },
    data:function(){
            return {
                selected:'platform'
            }
        },
    methods:{
        getVal:function(val){
            this.selected = val;
            console.log(val)
        }
    },

    
    
}
</script>


<template>
    <div class="wrap transAll" style="min-height:366px; margin-top:0;">
        <Myheader :active ='tabActive'></Myheader>
        <div class="market" style="margin-top:105px;">
            <div class="condition-wrap">
                
                <div class="condition-item">
                    <span class="tit">作品类型:</span>
                    <ul class="use-scenes" :style="{height:downm}">
                        <li v-for="(item , index) in infoType" :class="{activeNav:nowIndex==index}" @click="nowIndex=index">{{item.name}}</li>
                        
                    </ul>
                    <div style="float:left" v-show='true'>
                        <More @height ='fheight'></More>
                    </div>
                    <div class="count" v-if="false">type
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
                        </el-input><span style="float:left;text-indent: 5px;dispaly:block;width:50px;">{{type2}}</span>
                        <div class="nav-btn">确定</div>
                    </div>
                </div>
                <div class="nav-wrap-shoppingcart" @click="shoppingcart()">
                    <i class="icon-shoppingcart">
                        <div class="cart-side-num">
                            0
                        </div>
                    </i>
                </div>
                <!-- <MyconditionWrap type='作品字数:' :data1='infoNum' :bol1='false' :bol2='false'></MyconditionWrap>
                <MyconditionWrap type='原  创  度:' :data1='infoOriginal' :bol1='false' :bol2='true' type2='原创度'></MyconditionWrap>
                <MyconditionWrap type='买 断  价:' :data1='infoBuy' :bol1='false' :bol2='true' type2='元'></MyconditionWrap> -->
            </div>
            <OriginalContentListWrap></OriginalContentListWrap>
        </div>
    </div>
</template>

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
</style>

<script>
// import MyconditionWrap from '../conditionWrap'
import OriginalContentListWrap from '../originalContentListWrap'
import Myheader from '../../../components/header-nav-wrap'
import More from '../hide.vue'
export default {
    components:{
    //   MyconditionWrap,
      OriginalContentListWrap,
      Myheader,
      More
    },
    data:function(){
        return {
            infoType:'',
            infoNum:['不限','500字以下','500-1000字','1000-1500字','1500字-2000字','2000字-3000字','3000字以上'],
            infoOriginal:['不限','20%以下','20%-40%','40%-60%','60%-80%','80%-100%'],
            infoBuy:['不限','2元以下','2-5元','5-10元','10-30元','30元-50元','50-100元','100元以上'],
            tabActive:'market',
            type2:'',
            downm:'',
            nowIndex:0,
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
        getAjax:function(){
            let self =this;
            this.axios.get('http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/fields/list').then(function(res){
                self.infoType = res.data.data.list;
                console.log(self.infoType);
            }).catch(function(res){
                console.log(res);
            })
        },
        shoppingcart(){
            
            if(localStorage.getItem(token)!=''){
                this.$router.push('shoppingcart');
            }else{
                this.$alert('请先登录', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.push('login');
                    }
                });
            }
        }
    },
    mounted:function(){
        this.getAjax()
    }
}
</script>



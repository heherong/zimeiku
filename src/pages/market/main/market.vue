<template>
    <div class="wrap transAll" style="min-height:366px;">
        <Myheader :active ='tabActive'></Myheader>
        <div class="market">
            <div class="condition-wrap">
                <MyconditionWrap type='作品类型' :data1='infoType' :bol2='false'></MyconditionWrap>
                <MyconditionWrap type='作品字数' :data1='infoNum' :bol1='false' :bol2='false'></MyconditionWrap>
                <MyconditionWrap type='原 创  度' :data1='infoOriginal' :bol1='false' :bol2='true' type2='原创度'></MyconditionWrap>
                <MyconditionWrap type='买 断  价' :data1='infoBuy' :bol1='false' :bol2='true' type2='元'></MyconditionWrap>
            </div>
            <OriginalContentListWrap></OriginalContentListWrap>
        </div>
    </div>
</template>

<style>
.condition-wrap{padding:20px 0;overflow: hidden;background:#fff;}

.market{width: 1170px;margin: 0 auto;}
</style>

<script>
import MyconditionWrap from '../conditionWrap'
import OriginalContentListWrap from '../originalContentListWrap'
import Myheader from '../../../components/header-nav-wrap'
export default {
    components:{
      MyconditionWrap,
      OriginalContentListWrap,
      Myheader
    },
    data:function(){
        return {
            infoType:['不限','生活','情感','娱乐','财经/金融','文化','科技','汽车','时尚/美妆','美食','社会','旅游','心理','历史','搞笑','故事/小说','地域','教育'],
            infoNum:['不限','500字以下','500-1000字','1000-1500字','1500字-2000字','2000字-3000字','3000字以上'],
            infoOriginal:['不限','20%以下','20%-40%','40%-60%','60%-80%','80%-100%'],
            infoBuy:['不限','2元以下','2-5元','5-10元','10-30元','30元-50元','50-100元','100元以上'],
            tabActive:'market'
        }
    },
    beforeRouteEnter:(to,form,next)=>{
        next(vm=>{
            vm.tabActive = to.params.name
        })
    }
}
</script>



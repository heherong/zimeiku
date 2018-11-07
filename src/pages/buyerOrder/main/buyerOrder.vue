<template>
    <div class="wrap transAll">
        <Myheader :active='a'></Myheader>
        <div class="demand-wrap">
            <div class="hall-con-wrap">
                <div class="query-form">
                    <div class="demand-query-type">
                        <span>类型:</span>
                        <span>全部</span>
                        <span>内容定制</span>
                        <span>原创征稿</span>
                        <span>营销分发</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.demand-wrap{width: 1170px;margin: 0 auto;margin-top: 90px;}
.query-form{height: 50px;line-height: 50px;padding: 0 20px;border-radius: 2px;background: #fff;color: #64676A;margin-bottom: 19px;}
.demand-query-type{margin-bottom:20px;}
.demand-query-type span:first-child{margin-right: 10px;}
.demand-query-type span:nth-child(n+2){cursor: pointer;display: inline-block;/* width: 36px; */height: 24px;line-height: 24px;text-align: center;margin-right: 20px;}
.demand-query-type span:nth-child(n+3){    display: inline-block;width: 84px;text-align: left;}
</style>


<script>
import Myheader from '../../../components/header-nav-wrap'
export default {
    components:{
        Myheader
    },
    data:function(){
        return{
            a:'buyerorder'
        }
    },
    beforeRouteEnter:(to,form,next)=>{
			next(vm=>{
				vm.a = to.params.name
			})
		},
}
</script>


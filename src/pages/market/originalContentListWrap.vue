<template>
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
            <MyItem v-for="(item , index) in data" :list='item' :key='index'></MyItem>
            <MyItem></MyItem>
            <div style="text-align:center;">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
                </el-pagination>
            </div>
            
        </ul>
    </div>
</template>

<style>
.original-content-list-wrap{margin-top:23px;}
.title-wrap{width: 100%;border-bottom: 1px solid #e9ecf1;height: 48px;line-height: 48px;background: #fff;}
.title-wrap>span{margin-left: 29px;color: #64676a;font-size: 16px;}
.title-wrap p{float: right; margin-right: 21px;}
.title-wrap>p>span{margin-right: 8px;color: #64676a;padding: 4px 9px;cursor: pointer;font-size: 12px;border-radius: 2px;}
.check-codition{}
span.active-condition{color: #4895e7 !important;background: #e5f0fc;}
/* .original-works-list-wrap{min-height: 520px;} */
.original-works-list-wrap>li{padding: 28px 0;margin-bottom: 11px;background: #fff;}
</style>

<script>
import MyItem from './ContentListItem'
export default {
    components:{
        MyItem
    },
    data:function(){
        return {active:0,a:1,data:''}
    },
    mounted:function(){
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
    methods:{
        fn:function(){
            this.axios.get('http://result.eolinker.com/HkMlppZ19a43d8b112895061d5abbde7ab985e965756f10?uri=http://www.zmk.com/api/article/list',{
                params:{
                    page:"1",
                    pagesize:'2'
                }
            }).then((response)=>{
                this.data=response.data.data.list;
                
            }).catch((response)=>{
                console.log(response);
            })
            
        }
    },
    created:function(){
        this.fn();
    }
}
</script>



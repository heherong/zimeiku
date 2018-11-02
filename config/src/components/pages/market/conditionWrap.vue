<template>
    <div class="condition-item">
        <span class="tit">{{type}}</span>
        <ul class="use-scenes" :style="{height:downm}">
            <li v-for="(item , index) in arr" :class="{activeNav:nowIndex==index}" @click="nowIndex=index">{{item}}</li>
        </ul>
        <div style="float:left" v-show='bol1'>
            <More @height ='fheight'></More>
        </div>
        <div class="count" v-if="bol2">
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
</template>

<style>

.condition-item{overflow: hidden;margin-bottom: 20px;margin-left: 30px;font-size: 14px;background:#fff;position: relative;}
.condition-item .tit{color:#82868a;display: block;float: left;}
.use-scenes{float: left;overflow: hidden;width: 999px;height:24px;}
.use-scenes li{float: left;margin-left: 10px;height: 24px;padding: 0 9px;cursor: pointer;line-height: 20px;font-size: 14px;margin-bottom: 6px;color: #303132;}
li.activeNav{color: #4895E7;background: #e5f0fc;border-radius: 2px;}
.count{position: absolute;float: right;width:300px;height: 30px;right:120px;line-height: 26px;}
.nav-btn{width:40px;height: 26px;background:#4996E8;cursor: pointer;float: left;text-align: center;line-height: 26px;color:#fff;padding:0 4px;}
.el-input:nth-child(1){margin-right:30px;}

.nav-line{width:28px;height: 1px;position: absolute;background:#ccc;top:14px;left:80px;}
</style>

<script>
import More from './hide.vue'
export default {
    props:{
        type:{
            type:String,
        },
        type2:{
            type:String
        },
        data1:{
            type:Array
        },
        bol1:{
            type:Boolean,
            default:true
        },
        bol2:{
            type:Boolean,
            default:true
        }
    },
    components:{
        More
    },
    data:function(){
        return {
            arr:this.data1,
            downm:'',
            nowIndex:0,
            inputStrat:'',
            inputEnd:''
        }
    },
    methods:{
        fheight:function(val){
            this.downm = val;
        }
    },
}
</script>



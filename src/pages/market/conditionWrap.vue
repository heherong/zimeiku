<template>
    <div class="condition-item">
        <span class="tit">{{type}}</span>
        <ul class="use-scenes" :style="{height:downm}">
            <li v-for="(item , index) in data1" :class="{activeNav:nowIndex==index}" @click="nowIndex=index">{{item.name}}</li>
            
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
            default:''
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



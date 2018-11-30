<template>
    <div class="refer">
        <div>
            查重工具
        </div>
        <div class="content">
            <div id="box">
                <div class="boxWrap">
                    <div id="textContent" class="textContent" contentEditable = "true" >
                        
                    </div>
                    
                </div>
            </div>
            <div class="boxnavWrap">
                <ul>
                    <li>
                        <button @click="DelText">
                            清空文本
                        </button>
                    </li>
                    <li>
                        <button @click="CopyCome">
                            复制进来
                        </button>
                    </li>
                    <li>
                        <button @click="StartDetection">
                            开始检测
                        </button>
                    </li>
                    <li>
                        <button id="CopyOut" @click="CopyOut" data-clipboard-target="#textContent">
                            拷贝出去
                        </button>
                    </li>
                    <li>
                        <span>
                            文章字数:
                        </span>
                        <span class="returndata">
                            11
                        </span>
                    </li>
                    <li>
                        <span>
                            百度原创度:
                        </span>
                        <span class="returndata">
                            {{baidu}}%
                        </span>
                    </li>
                    <li>
                        <span>
                            360原创度:
                        </span>
                        <span class="returndata">
                            {{three60}}%
                        </span>
                    </li>
                    <li>
                        <span>
                            搜狗原创度:
                        </span>
                        <span class="returndata">
                            {{sougou}}%
                        </span>
                    </li>
                    <li>
                        <span>
                            综合原创度:
                        </span>
                        <span class="returndata">
                            {{average}}%
                        </span>
                    </li>
                </ul>
                <div style="margin-left:10px;">
                    <el-checkbox label="百度"></el-checkbox>
                    <el-checkbox label="360"></el-checkbox>
                    <el-checkbox label="搜狗"></el-checkbox>
                    <el-checkbox label="综合"></el-checkbox>
                </div>
                    
            </div>
            <div class="inquireWrap">
                <el-menu :default-active="activeIndex" class="inquireWrapMenu" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">百度</el-menu-item>
                    <el-menu-item index="2">360</el-menu-item>
                    <el-menu-item index="3">搜狗</el-menu-item>
                </el-menu>
                <div class="inquireContanier">
                    <div style="width:70%;float:left">
                        <div class="inquireTable" v-if="activeIndex=1">
                                <el-table
                                :data="tableData"
                                style="width: 100%">
                                    <el-table-column
                                        prop="date"
                                        label="日期"
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        prop="name"
                                        label="姓名"
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="地址">
                                    </el-table-column>
                                </el-table>
                        </div>
                    </div>
                    <div style="width:29%;float:left;border-left:solid 1px black;">
                        好消息好消息,长沙五一广场
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
    data:function(){
        return {
            textConLength:'',
            baidu:20,
            three60:30,
            sougou:40,
            average:50,
            activeIndex:'1',
            nowIndex:1,
            h:document.documentElement.clientHeight,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            this.nowIndex = key
            console.log(this.nowIndex);
        },
        
        //获取文本内容
        textCon(){
             var textCon = document.getElementsByClassName('textContent')[0].innerHTML;
             return textCon
        },
        //获取文章字数
        textConLen(){
            this.textConLength = this.textCon().length
            
        },
        //清空文本
        DelText(){
            document.getElementsByClassName('textContent')[0].innerHTML='';
        },
        //复制进来
        CopyCome(){
            var content = clipboardData.getData("Text");
            document.getElementsByClassName('textContent')[0].innerHTML=content;
        },
        //开始检测
        StartDetection(){
            this.textCon()
        },
        //拷贝出去
        CopyOut(){
            var clipboard = new Clipboard('#CopyOut',{
                target: function() {
                    return document.querySelector('#textContent');
                }
            });
        }
    },
    beforeCreate(){
        this.$nextTick(function () {
            document.querySelector('.refer').style.height =(this.h-105)+'px';
            console.log()
        })
    }
}
</script>

<style scoped='scoped'>
    .refer{
        width:100%;
        height: 100%;
        background: #F0F0F0;
    }
    .refer .content{
        padding:15px;
        border:solid 1px black;
    }
    #textarea{
        width:100%;
        resize:none;
    }
    #id{
        width: 100%;  
        padding:15px 10px 25px 15px;    
      }
    .textContent{
        width: 100%;
        background: white;
        outline: none;
        height: 300px;
        border-radius: 3px; 
        max-height: 300px;
        _height: 120px; 
        margin-left: auto; 
        margin-right: auto; 
        padding: 3px; 
        border: 1px solid #a0b3d6; 
        font-size: 12px; 
        word-wrap: break-word;
        overflow-x: hidden;
        overflow-y: auto;
        _overflow-y: visible;
    }
    .boxWrap{
        background: white;
        padding:10px;
    }
    .boxnavWrap{
        width:100%;
        height: 80px;
        margin-top:20px;
        margin-bottom:5px;
        padding-left: 5px;
    }
    .boxnavWrap ul{
        overflow: hidden;
    }
    .boxnavWrap ul li{
        float: left;
        
    }
    .boxnavWrap ul li button{
        padding:5px 10px;
        margin-left: 10px;
    }
    .boxnavWrap ul li>span{
        float: left;
        margin-left: 10px;
        display: block;
        line-height: 35px;
        text-indent: 5px;
    }
    span.returndata{
        background:white;
        width:60px;
        height: 35px;
        color: red;
        font-weight: 600;
    }
    .boxnavWrap ul li input{
        margin-left: 15px;
        margin-top:15px;
    }
    .inquireWrap{
        width: 100%;
        padding-left: 5px;
    }
    .inquireContanier{
        width:100%;
        background: white;
        overflow: hidden;
    }
    .inquireTable{
        width: 500px;
        float: left;
        border:solid 1px black;
    }
</style>



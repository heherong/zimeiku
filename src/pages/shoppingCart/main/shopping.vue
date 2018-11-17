<template>
    <div class="wrap transAll">
        <Myheader></Myheader>
        <div class="inner-wrap" style="margin-top:105px;background:#fff;">
            <div style="padding: 0 20px;overflow:hidden;">
                <div class="cart-tab-con-wrap">
                    <div class="cart-tab-lt-wrap">
                        <img src="../../../assets/images/cart.png" class="cart-tab-img">
                        选购车
                    </div>
                    <ul class="cart-tab-wrap">
                        <li>
                            <router-link to='/shoppingcart/cart_article'>
                                <span :class="{cartActive:nowIndex==0}" @click="nowIndex=0">作品<i class="js-cart-author-totle " :class="{iCartActive:nowIndex==0}">[{{Allnum}}]</i></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to='/shoppingcart/cart_author'>
                                <span :class="{cartActive:nowIndex==1}" @click="nowIndex=1">创作者<i class="js-cart-author-totle" :class="{iCartActive:nowIndex==1}">[{{Allnum}}]</i></span>
                            </router-link>
                        </li>
                    </ul>
                    <div class="cart-tab-rt-wrap">
                        <div class="cart-selected-num-wrap">
                            已选择<span :class="Allnum!=0">{{Allnum}}</span>个
                        </div>
                        <div class="cart-article-totle-sum">
                            合计<span class="color-orange pay-num">￥{{price}}</span>
                        </div>
                        <div class="cart-buy-btn tranAll" style="background: #fd8226;">立即购买</div>
                    </div>
                </div>
                <div class="cart-list-con-wrap">
                    <ul class="cart-sub-tab-wrap transAll" v-if="nowIndex==0">
                        <li :class="{liActive:lia==0}" @click="lia=0">全部</li>
                        <li :class="{liActive:lia==1}" @click="lia=1"> 
                            已发布
                            <span>
                                ({{already}})
                            </span>
                        </li>
                        <li :class="{liActive:lia==2}" @click="lia=2"> 
                            未发布
                            <span>
                                ({{never}})
                            </span>
                        </li>
                    </ul>
                    <div class="cart-article-wrap">
                        <el-table
                            ref="multipleTable"
                            :data="tableData3"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            label="作品"
                            width="450">
                            <template slot-scope="scope">
                               <router-link to='/ContentBank'>
                                    <div class="avant-wrap">
                                        <img src="http://ggoss.bqj.cn/20181109/image/3/1541748227429299.png" alt="" class="avant-img">
                                        <div class="side-avatar-article-wrap">
                                            <i class="icon-nosee"></i>
                                        </div>
                                    </div>
                                    <div class="avant-wrap-name">
                                        <p>{{ scope.row.date }} </p>
                                    </div>
                               </router-link>
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="作者名"
                            width="230">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="原创报价"
                            width='230'>
                            <template slot-scope="scope">
                                <span class="color-orange" style="text-align:center;line-height:50px;">{{scope.row.address}}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                            fixed="right"
                            label="操作"
                            width="120">
                            <template slot-scope="scope">
                                <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData3)"
                                type="text"
                                size="small">
                                移除
                                </el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="cart-bottom">
                        <div class="cart-bottom-le">
                            <el-button @click="toggleSelection(tableData3)">全选</el-button>
                            <el-button @click='setCurrent()'>删除选中作品</el-button>
                            <el-button @click='setCurrent()' disabled>清空失效作品</el-button>
                            <el-button @click='setCurrent()'>导出选中作品</el-button>
                        </div>
                        <div class="cart-bottom-ri">
                            <div class="cart-selected-num-wrap">
                            已选择<span :class="Allnum!=0">{{Allnum}}</span>个
                            </div>
                            <div class="cart-article-totle-sum">
                                合计<span class="color-orange pay-num">￥{{price}}</span>
                            </div>
                            <div class="cart-buy-btn tranAll" style="background: #fd8226;">立即购买{{a}}</div>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    </div>
</template>

<style>
.cart-tab-con-wrap{line-height: 18px;padding-top: 8px;overflow: hidden;}
.cart-tab-lt-wrap{float: left;font-size: 18px;color: #303132;font-weight: 600;padding: 13px 0;}
.cart-tab-img{vertical-align: middle;border: none;width: 32px;}
.cart-tab-wrap{float: left;text-align: center;}
.cart-tab-wrap>li{float: left;padding: 0 20px;transition: all .2s ease-in-out;cursor: pointer;}
.cart-tab-wrap>li>a{color: #48494a;}
.cart-tab-wrap>li>a>span{display: inline-block;padding: 18px 0;color: #64676a;transition: all .2s ease-in-out;border-bottom: 2px solid transparent;font-size: 14px;}
.cart-tab-wrap>li>a>span.cartActive{color: #4895e7;border-bottom: 2px solid #4895e7;}
.cart-tab-wrap>li>a>span>i.iCartActive{color: #4895e7;}
.color-blue{color: #4895e7;}
.color-orange{color: #fd8226;}
.js-cart-author-totle{font-style: normal;font-size: 12px;color: #a9adb0;margin-left: 3px;}
.cart-tab-rt-wrap{float: right;padding: 9px 0;}
.cart-tab-rt-wrap>div{display: inline-block;}
.pay-num{font-weight: 600;font-size: 16px;}
.cart-buy-btn{border-radius: 2px;padding: 9px;color: #fff;cursor: pointer;margin-left: 12px;}
.cart-buy-btn:hover{opacity:0.8}
.cart-list-con-wrap{margin-bottom:50px;}
.cart-sub-tab-wrap{padding: 12px 0;border-top: 1px solid #eff1f3;overflow: hidden;}
.cart-sub-tab-wrap>li.liActive{border-color: #4895e7;background: #4895e7;color: #fff;}
.cart-sub-tab-wrap>li{float: left;line-height: 30px;text-align: center;padding: 0 12px;border: 1px solid #e9ebec;border-radius: 2px;color: #64676a;margin-right: 20px;cursor: pointer;-webkit-transition: 0.2s all ease;transition: 0.2s all ease;font-size: 12px;}
.avant-wrap{border-radius: 0;width: 90px;height: 50px;line-height: 50px;float: left;position: relative;overflow: hidden;background: #eee;}
.side-avatar-article-wrap {position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .6);color: #fff;z-index: 2;text-align: center;line-height: 50px;}
.icon-nosee{display:inline-block;width: 20px;height: 16px;background:url('../../../assets/images/nosee.png');background-size:100%;opacity: 0.9;}
.avant-img{width:100%;}
.avant-wrap-name{padding-left: 108px;padding-left: 108px;}
.avant-wrap-name>p{width: 100%;height:50px;line-height:50px;transition: all .2s ease-in-out;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 1;cursor: pointer;}
.cart-bottom-le{float:left;margin-top:40px;margin-bottom:15px;}
.cart-bottom-ri{float: right;margin-top:40px;margin-bottom:15px;}
.cart-bottom-ri>div{display: inline-block;}
</style>


<script>
import Myheader from '../../../components/header-nav-wrap'

export default {
    components:{
        Myheader,
    },
    data:function(){
        return {
        Allnum:'0',
        a:0,
        nowIndex:'0',
        lia:0,
        price:this.caprice,
        already:0,
        never:0,
        tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            price: '150'
            }, {
            date: '2016-05-02',
            name: '王小虎',
            price: '150'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            price: '150'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            price: '150'
            }, {
            date: '2016-05-08',
            name: '王小虎',
            price: '150'
            }, {
            date: '2016-05-06',
            name: '王小虎',
            price: '150'
            }, {
            date: '2016-05-07',
            name: '王小虎',
            price: '150'
            }],
        multipleSelection: []
        }
    },
    computed:{
        caprice:function(){
            for(var i=0;i<tableData3.length;i++){
                a+=tableData3[i].price;
            }
        }
    },
    methods:{
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        setCurrent(row) {
            this.$refs.singleTable.toggleSelection(row);
            
        },
    }
}
</script>


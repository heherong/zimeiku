<template>
    <div class="site-wrap">
        <div class="inner-wrap">
            <div class="site-login-info-wrap">
                <ul class="login">
                    <li>
                        <span class="site-login-status" v-if="status==200">
                            <router-link to='/login' style="color: #4895E7;">
                                Hi,请先登录
                            </router-link>
                        </span>
                        <span class="site-login-status padding3" v-else>
                                您好
                        </span>

                    </li>
                    <li v-if="status==200">
                        <span class="site-login-status site-signin">
                            <router-link to='/'>
                            免费注册
                            </router-link>
                        </span>
                    </li>
                    <li>
                        <span class="site-login-status" style="color: #82868A;padding-left: 14px;">
                             欢迎来到圆融内容交易平台！
                        </span>
                    </li>
                </ul>
                <ul class="menu">
                    <li>
                        <router-link target="_blank" to='/shopping'>
                            选购车
                            <span id="cart-num" class='cart-num'>
                                0
                            </span>
                        </router-link>
                    </li>
                    <li class="site-separator">
                        |
                    </li>
                    <Myitem txt='我是买家'>
                        <ul slot="down" class="site-dranmenu-item ">
                            <li class="transAll">已购买作品</li>
                            <li class="transAll">我的需求</li>
                        </ul>
                    </Myitem>
                    <li class="site-separator">
                        |
                    </li>
                    <Myitem txt='我是卖家'>
                        <ul slot="down" class="site-dranmenu-item ">
                            <li class="transAll">创作者管理</li>
                            <li class="transAll">作品管理</li>
                            <li class="transAll">账号管理</li>
                            <li class="transAll">订单管理</li>
                        </ul>
                    </Myitem>
                    <li class="site-separator">
                        |
                    </li>
                    <li>
                        玩转圆融
                    </li>
                    <li class="site-separator">
                        |
                    </li>
                    <li>
                        关于我们
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.site-wrap{width: 100%;height: 36px;line-height: 36px;background: #F1F3F6;}
.inner-wrap{width: 1170px;margin: 0 auto;font-size:12px;}
.site-login-status{cursor: pointer;font-size: 12px;}
.login li{float: left;}
.login li a{color:#282B00;}

.site-signin{padding:0 4px;color: #282B00;cursor: pointer;}
.menu{float: right;width: auto;}
.menu>li{float: left;padding:0 5px;cursor: pointer;}
.menu li a:hover{color: #4895E7;}
.cart-num{color: #4895E7;font-size:14px;}
li.site-separator{padding: 0;color: #64676A;opacity: 0.15;padding:0;}

</style>

<script>
import Myitem from './site-dranmenu-item'
export default {
    components:{
        Myitem
    },
    data:function(){
        return {status:200}
    }
}
</script>



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
.cart-num{color: #4895E7;font-size:14px;}
</style>

<script>
export default {
    data:function(){
        return {status:200}
    }
}
</script>



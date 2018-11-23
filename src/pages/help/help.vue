<template>
    <div>
        <Myheader></Myheader>
        <div class="inner-wrap" style="margin-top:105px;">
            <div class="aside-wrap transAll" style="min-height:273px;">
                <ul class="menu-ul-wrap transAll">
                    <li class="menu-li">
                        <p class="menu-li-p">
                            <router-link to='/platform/platform'>
                                <i class="icon-nor-xiangguan icon-nav"></i>
                                <i class="icon-act-xiangguan icon-nav"></i>
                                <span class="nav-act">平台相关</span>
                            </router-link>
                        </p>
                    </li>
                    <li class="menu-li">
                        <p class="menu-li-p">
                            <router-link to='/platform/platform'>
                                <i class="icon-nor-xiangguan icon-nav"></i>
                                <i class="icon-act-xiangguan icon-nav"></i>
                                <span class="nav-act">账号信息</span>
                            </router-link>
                        </p>
                    </li>
                    <li class="menu-li">
                        <p class="menu-li-p">
                            <router-link to='/platform/platform'>
                                <i class="icon-nor-xiangguan icon-nav"></i>
                                <i class="icon-act-xiangguan icon-nav"></i>
                                <span class="nav-act">平台指南</span>
                            </router-link>
                        </p>
                    </li>
                    <li class="menu-li">
                        <p class="menu-li-p">
                            <router-link to='/platform/platform'>
                                <i class="icon-nor-xiangguan icon-nav"></i>
                                <i class="icon-act-xiangguan icon-nav"></i>
                                <span class="nav-act">平台相关</span>
                            </router-link>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.aside-wrap{background: #fff;border-radius: 2px;float: left;width: 200px;}
.menu-ul-wrap{position: relative;height: 100%;color: #64676a;overflow: hidden;}
.menu-li{width: 100%;cursor: pointer;font-size: 14px;box-sizing: border-box;}
.menu-li-p{position: relative;border-left:solid 3px #4895e7;}
.menu-li-p a{text-align: left;padding-left: 44px;height: 44px;line-height: 44px;padding-right: 18px;display: inline-block;width: 100%;color: #64676a;}
.icon-nav{display: block;width:15px;height: 15px;float: left;}
.nav-act{color: #4895e7;}

</style>


<script>
import Myheader from '../../components/header-nav-wrap'
export default {
    components:{
        Myheader
    },
    
}
</script>


<template>
    <div class="wrap transAll" style="min-height:366px;">
        <header class="login-header">
            <div class="header-con-wrap">
                <div class="header-item">
                    <img src="../../assets/images/ico.ico" style="width:50px;float:left;padding-top:12px;">
                    <div class="line flleft" style="height:45px;"></div>
                    <span class="login-header-title">用户登录</span>
                </div>
            </div>
        </header>
        <div class="market" style="background: #fff;border-radius: 2px;padding: 102px 0;margin-top:30px;">
            <div class="login-wrap">
                <div class="login-wrap">
                    <div class="login-tab-wrap">
                        <ul class="login-tab">
                            <li :class="{loginActive:now==0}" @click="now=0">账号密码登录</li>
                            <li  :class="{loginActive:now==1}" @click="now=1">手机动态登录</li>
                        </ul>
                    </div>
                    <div class="login-from-wrap">
                        <el-form ref="form" :model="form" label-width="80px">
                            <div class="input-login">
                                <input type="text" autocomplete="off" placeholder="请输入手机号码" maxlength="11" class="el-input__inner" v-model='form.number' minlength=48> </el-input>
                            </div>
                            <div class="input-login">
                                <el-input type="password" v-model="form.pass" autocomplete="off" minlength=48></el-input>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<style>
.login-header{width: 100%;height: 68px;background: #4593e7;line-height: 68px;border-bottom: 1px solid #99c1ed;overflow: hidden;}
.header-con-wrap{width: 1190px;background: #4593e7;margin: 0 auto;color: #fff;overflow: hidden;}
.header-item{float: left;cursor: pointer;text-align: center;}
.login-header-title{font-size: 26px;}
.login-wrap{width: 292px;margin: 0 auto;}
.login-tab{overflow: hidden;}
.login-tab li{float: left;width: 50%;border-bottom: 1px solid #e2e4e7;padding-bottom: 16px;text-align: center;font-size: 16px;cursor: pointer;}
.login-tab li:hover{color: #4895e7;transition: all .2s ease-in-out;border-bottom: 2px solid #4895e7;}
li.loginActive{color: #4895e7;transition: all .2s ease-in-out;border-bottom: 2px solid #4895e7;}
.input-login{margin-top:30px;}
</style>


<script>

export default {
    components:{
        
    },
    data:function(){
        return {
            now:0,
            form: {
                number: '',
                password: '',
                
            }
        }
    } 
}
</script>


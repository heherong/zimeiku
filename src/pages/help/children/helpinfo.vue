<template>
    <div class="introduction-help-center">
        <h3>
            账户信息
        </h3>
        <h4>
           一、如何注册自媒库？
        </h4>
        <p style="font-size: 16px; margin-bottom: 10px;">
            a、输入手机号、密码及验证码，即可完成账号注册：
        </p>
        <p style="font-size: 16px; margin-bottom: 10px;">
            b、微信第三方平台直接授权登录
        </p>
        <h4>二、注册选买家还是卖家？</h4>
        <p style="margin-left:30px;">
            可根据自身需求任意选定，注册完成后买家卖家身份可一键切换
        </p>
        <h4>三、为何要实名认证？如何认证？</h4>
        <p style="margin-left:30px;">
            实名是互联网交易作为可信交易的前提，实名后用户更加安全。系统会保障用户信息安全。 前往买家或卖家中心 - 我的资料 - 实名认证，按要求填写个人信息、企业信息等资料，线上提交申请
        </p>
        
        <h4>    四、如何通过审核？</h4>
        <p style="margin-left: 30px;">
            
            买家、卖家通过注册后，需要按要求提交相应信息。平台将采取程序处理+后台人工双重审核方式。审核通过后，系统将发送短信至用户手机，若未通过，则需重新提交审核
        </p>
    </div>
</template>

<script>
export default {
    data:function(){
    return {h:document.documentElement.clientHeight}
  },
  beforeCreate(){
    this.$nextTick(function () {
      document.querySelector('.introduction-help-center').style.height =(this.h-280)+'px';
    })
  }
}
</script>



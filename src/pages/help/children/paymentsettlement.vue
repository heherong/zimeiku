<template>
    <div class="introduction-help-center">
        <h3>
            付款与结算
        </h3>
        <h4>
           一、结算流程/何时付款？/何时收到款项？
        </h4>
        <p>
           <span style="margin: 10px 0px 6px; display: inline-block; color: rgb(72, 73, 74);">(1)买家</span>
            <br>
                &nbsp&nbsp&nbsp&nbsp(a)<span style="color: rgb(72, 73, 74);">买作品：</span>
                买家选定作品加入购物车，提交订单后付款
            <br>
                <span style="color: rgb(72, 73, 74);float:left;">&nbsp&nbsp&nbsp&nbsp(b)找作者：</span>
                <span style="display: inline-block; width: 84%;">
                    买家确认作者人选及报价，双方确认订单后，买家付款
                </span>
            <br> 
        </p>
        
        <h4>
           二、自媒库平台服务费说明
        </h4>
        <p>
            售买作品/找作者/原创征稿，平台将收取卖家25%的服务费，用于平台维护、纠纷理赔等
            <br>
        </p>
        <h4>
           三、退款&售后问题
        </h4>
        <p>
            (1)	若订单显示为“待买家付款”，买家可以进行【取消订单】操作，或者等系统超时自动关闭交易，系统超时时间为15分钟
            <br>
            (2)	若订单显示为“交易成功”，在作品/投放结果有质量问题情况下，可联系客服进行质检，买家卖家双方协商进行按比例退款
            <br>
        </p>
        <h4>
           四、关于著作权
        </h4>
        <p>
            (1)	当作品未被购买时，版权仍归作者所有，买家不得以任何形式传播、使用作品
            <br>
            (2)    当买家成功购买作品时，即拥有该作品版权，包含但不限于作品的复制权、发行权、出租权、展览权、广播权、信息网络传播权、摄制权、改编权、汇编权。卖家不具有除了人身权以外的所有权利，且不得再将作品以任何形式转让或授权给其他第三方
            <br>
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
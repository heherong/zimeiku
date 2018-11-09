<template>
    <li >
        <div class="img-box">
            <router-link to='/ContentBank' target="_blank">
                <img src="../../assets/images/1.jpg" alt="" style="width:100%;">
                <!-- <slot name="img"></slot> -->
            </router-link>
        </div>
        <div class="works-info-wrap">
            <div class="works-info-tit-wrap">
                <strong>一千个人中有一千个爱情的模样</strong>
                <span class="word-num-wrap">（1638字0图片）</span>
            </div>
            <div class="works-time">
                <span class="work-author" style="cursor:pointer">
                    <span>作者：</span>
                        瑾
                    <div class="float-author">
                        <p class="author-float-info">
                            <img src="http://cdn.yuanrongbank.com/3896/1539755290323/微信图片_20181017134756.jpg">
                            <span>瑾</span>
                        </p>
                        <p>
                            创作形式
                            <span>文章</span>
                        </p>
                        <p>
                            擅长领域
                            <span>情感、故事/小说、历史</span>
                        </p>
                        <p>
                            作品数量
                            <span>2</span>
                        </p>
                        <p class="popluarity">
                            人&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp气
                            <span>441</span>
                        </p>
                        <p class="jump_detail">
                            <div class="btn-more">查看详情</div>
                        </p>
                    </div>
                </span>
                <span class="work-lebal">2018-10-21 16:03:50</span>
                <span class="item-label" style="float:right;" v-show="!bol">
                    <span class="work-label">买断价</span>
                    <span class="work-con">￥99</span>
                </span>
            </div>
            <div class="item-describe">
                什么是爱情？爱情这种东西从来都没有被系统的教学过，我们也不知道具体答案。大概是在青春期的书籍或者是电视中看到的，起初那些男女之间的亲昵被我们认知为爱情。我们学着他们的样子，试图与身边最美丽的异性展开这种关系。在逐渐的尝试中，我们心中渐渐拥有了对爱情的认知。每个人对爱情的认知都是不一样的，这取决与每个人在认识爱情之初的所经历过得那样。有的是彩色，有的是灰色。有的人回忆爱情时味道是甜的，有人回忆爱......
            </div>
            <p class="work-label-wrap">
                <span class="item-label">
                    <span class="work-label">分类：</span>
                    <span class="work-con">情感</span>
                </span>
                <span class="item-label">
                    <span class="work-label">高频词：</span>
                    <span class="work-con">
                        男人<span class="work-label"> | </span>
                        女人<span class="work-label"> | </span>
                        恨嫁<span class="work-label"> | </span>
                        女追男<span class="work-label"> | </span>
                    </span>
                </span>
                <span class="item-label" >
                    <span class="work-label">浏览量</span>
                    <span class="work-con">106</span>
                </span>
                <span class="item-label" v-show="bol">
                    <span class="work-label">陶梦指数：</span>
                    <span class="work-con">65.35</span>
                </span>
                
            </p>
        </div>
        <div class="works-right-wrap"  v-show="bol">
            <p>
                <i class="icon-help" @click="amend"></i>
                <span class="price-pub">买断价:</span>
                <span class="price">¥1</span>
            </p>
            <!-- <p>
                <button class="addCar">加入购物车</button>
            </p> -->
            <p style="margin-top:60px;">
                <button class="purchase">立即购买</button>
            </p>
        </div>
        <div style="clear:both;"></div>
    </li>
</template>

<style>
    .img-box {float: left;width: 240px;height: 136px;position: relative;overflow: hidden;margin-left: 26px;}
    .works-info-wrap{float: left;width: 700px;margin-left: 20px;}
    .works-info-tit-wrap strong{font-size: 18px;color: #48494a;font-weight: bold;float: left;}
    .word-num-wrap{line-height: 24px;float: left;font-size: 14px;}
    .works-time{line-height: 32px;height: 32px;font-size: 12px;position: relative;float: left;width:100%;}
    .work-author{float: left;display: block;width: 164px;height: 32px;position: relative;line-height: 32px;}
    .float-author{display: none;  position: absolute;width: 140px;left: 0;top: 32px;background: #fff;border: 1px solid #f2f4f6;border-radius: 2px;padding: 13px 42px;z-index:2;box-shadow: 0px 0px 43px #e4dede;}
    .work-author:hover div.float-author{display: block;}
    .float-author p{line-height: 24px;font-size: 12px;color: #303132;margin-top: 11px;}
    .author-float-info>span{margin-top:10px;}
    .float-author p>span{float:right;vertical-align: middle;margin-left: 8px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 77px;display: inline-block;text-align: left;font-size: 14px;}
    
    .author-float-info>img{width: 50px;height: 50px;border-radius: 50%;vertical-align: middle;}

    .btn-more{display: block;text-align: center; line-height: 34px;width: 120px;height: 34px;background: #4895e7;color: #fff;font-size: 12px;margin: 0 auto;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;}
    .item-describe{float: left; line-height: 22px;height: 42px;color: #727477;max-height: 49px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;font-size: 14px;}
    .work-label-wrap{margin-top: 20px;font-size: 12px;float: left;}
    .item-label{margin-right: 55px;}
    .works-right-wrap{float: right;width: 132px;margin-right: 31px;text-align: center;}
    .works-right-wrap>p:nth-of-type(1){width: 100%;text-align: center;margin-bottom: 18px;}
    
    .price-pub{color: #64676a;font-size: 12px;margin-right:2px;}
    .price{display: inline-block;color: #F5B923;font-size: 18px;}
    .addCar{width: 106px;height: 40px;border: 1px solid #dfeaf8;background: #f6faff;color: #4895e7;font-size: 14px;cursor: pointer;border-radius: 2px;}
    .purchase{width: 106px;height: 40px;font-size: 14px;color: #fff;background: #4895e7;cursor: pointer;border-radius: 2px;    outline: none;resize: none;border:none;}
</style>

<script>
  export default {
      props:{
          bol:{
              type:Boolean,
              default:true
          }
      },
    methods: {
      amend() {
        const h = this.$createElement;
        this.$msgbox({
          
          message: h('div', {style:`max-height: 415.333px;  
            overflow-y: auto;  
            background:url('../../assets/images/bg_content.jpg')
            padding: 20px 30px;
            width: 100%;
            color: #64676a;
            min-height: 110px;`}, [
            h('h3', {style:'text-align:center;margin-bottom: 30px;'},'标题'),
            h('article', { style:"line-height: 24px;"}, 'msg '),
            h('div', { style: `background-color: #f9f9f9;
                border: 1px dashed #9e9e9e;
                color: #4895e7;line-height: 24px;
                padding: 10px;` }, 'msg'),
            h('div',{style:'text-align:center'},[
                h('button',{style:`background-color: #4895e7;
                    color: #fff;
                    padding: 3px 5px;
                    text-align: center;
                    margin-top: 30px;
                    padding: 10px 20px;
                    border: none;
                    cursor: pointer;
                    outline: none;
                    resize: none;`},'换一篇试试看'),
                h('p',{style:`padding-top: 12px;
                    text-align: center;
                    font-size: 12px;`})
            ])
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
  }
</script>



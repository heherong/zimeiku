<template>
    <li>
        <div class="item-status">
            <span>招募中</span>
        </div>
        <div class="demand-list-item-title">
            <div class="demand-list-title-top">
                <span class="demand-title-type">原创征稿</span>
                <span class="demand-title-name" @click="fn">宋闻名人物专访</span>
                <span>
                    <span >￥200</span>
                    <span class="demand-list-unit">
                        <span style="color:#a9adb0">/篇</span>
                    </span>
                </span>
            </div>
            <div class="demand-list-title-bottom">
                <span>
                    征稿数量
                    <span class="title-bottom-num">1</span>
                    篇
                </span>
                <span class="title-bottom-time">
                    报名剩余
                    <span class="time-active">9</span>
                    天
                    <span class="time-active">12</span>
                    小时
                    <span class="time-active">58</span>
                    分钟
                </span>
                <span class="user-option">
                    我要投稿
                </span>
            </div>
            <div class="cut-off"></div>
            <div class="demand-list-item-content">
                <span>1、根据互动百科宋闻名（http://www.baike.com/wiki/%E5%AE%8B%E9%97%BB%E5%90%8D）  写人物传记。但是不能照抄  </span>
                <p @click="fn">查看更多></p>
            </div>
            <div class="demand-list-item-tag">
                <span>文章</span>
            </div>
        </div>
    </li>
</template>

<style>
.item-status{position: absolute;top: 0;width: 60px;height: 20px;line-height: 20px;text-align: center;font-size: 12px;background: #89BC62;color: #fff;border-radius: 0 0 2px 2px;}
.demand-list-item-title{margin-top: 25px;}
.demand-list-title-top>span:first-child{display: inline-block;width: 56px;height: 22px;line-height: 19px;text-align: center;font-size: 12px;color: #89BC62;border: 1px solid rgba(137,188,98,0.50);border-radius: 2px;margin-right: 6px;position: relative;top: -2px;}
.demand-title-name{font-size: 20px;color: #48494a;cursor: pointer;display: inline-block;height: 26px;width: 500px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.demand-list-title-top span:nth-child(3){float: right;font-size: 24px;color: #F5B923;}
.demand-list-unit{font-size: 12px;color: #82868A;}
.time-active{color: #4895E7;}
.demand-list-title-bottom{height: 36px;line-height: 36px;}
.demand-list-title-bottom>span:nth-child(1){color: #82868A;margin-right: 81px;}
.title-bottom-time{margin-left: 10px;color: #82868A;}
.user-option{float: right;width: 84px;height: 36px;line-height: 36px;text-align: center;cursor: pointer;color: #fff;background: #4895E7;border-radius: 2px;}
.cut-off{height: 14px;border-bottom: 1px dotted #e9ebec;}
.demand-list-item-content{height: 44px;line-height: 22px;overflow: hidden;margin: 12px 0 15px 0;font-size: 14px;color: #64676A;}
.demand-list-item-content>p{color: #4895E7;cursor: pointer;}
.demand-list-item-tag {position: relative;top: -6px;}
.demand-list-item-tag>span{display: inline-block;height: 20px;line-height: 20px;padding: 0 6px;font-size: 12px;color: #82868a;background: #F4F6F9;border-radius: 2px; margin-right: 20px;}
</style>




<script>
export default {
    methods:{
        fn:function(){
            this.$router.push('/demandHall')
        }
    }
}
</script>


<template>
    <li class="transAll content-item">
        <router-link target='_blank' to='/ContentBank'> 
            <div class="type-sign">
                汽车
            </div>
            <h4>有了孩子后，为什么更愿意选择SUV车</h4>
            <div class="item-con-wrap">
                衣食住行，有了小孩后家庭出行人口变多，携带行李翻倍增长，对于购置物品也是以孩子需求为核心，更愿意选择一款全能的SUV车型而非轿车甚至是MPV车型。
            </div>
            <div class="author-info-wrap">
                <div class="author">
                    <span class="author-avatar">
                        <img src="http://cdn.yuanrongbank.com/3304/1534747771280/346971535453003631.jpg" alt="">
                    </span>
                    <div class="author-name">
                        野生老雪
                    </div>
                </div>
                <div class="Tminfo">
                    陶梦指数
                    <span class="yr-tm">96.8</span>
                </div>
            </div>
        </router-link>
    </li>
</template>

<style>
.content-item{float: left;position: relative;background: #FFFFFF;border-radius: 2px;width: 278px;margin-bottom: 15px; -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);-moz-box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);padding: 17px 0 17px 5px;margin-right:9.5px;}
.content-item a h4{border-bottom: 1px dashed #D8DADB;overflow: hidden;color: #303132;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 1;line-height: 40px;height: 40px;margin: 15px 14px;}
.type-sign{position: absolute;left: 14px;top: 0;padding: 0 14px;background: #56BCEB;border-radius: 0 0 2px 2px;font-size: 12px;line-height: 24px;color: #FFFFFF;}
.item-con-wrap{font-size: 12px;color: #82868A;line-height: 22px;height: 62px;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 3;margin: 12px 0 29px;padding: 0 14px;}
.author-info-wrap{background: #F5F7FB;border-radius: 2px;padding: 6px 8px;line-height: 30px; font-size: 12px;width:250px;}
.author{float: left;}
.author-avatar{width: 30px;height: 30px;overflow: hidden;background: #eee;border-radius: 50%;margin-right: 4px;display: block;float: left;}
.author-avatar img{width: 100%;}
.author-name{float: left;font-size: 12px;color: #64676A;}
.Tminfo{float: right;color:#82868A;}
.yr-tm{color: #4895E7;}
</style>

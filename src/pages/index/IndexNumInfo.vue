<template>
    <div class="index-num-info-wrap">
        <div class="inner-wrap">
            <ul class="num-section-wrap">
                <MyItem num=1></MyItem>
                <MyItem num=2></MyItem>
                <MyItem num=3></MyItem>
                <MyItem num=4></MyItem>
            </ul>
        </div>
    </div>
</template>

<style>
.index-num-info-wrap{width: 100%;background: #fff;}
.num-section-wrap{padding: 8px 0;overflow: hidden;}
.num-section-wrap li{float: left;}
</style>


<script>
import MyItem from './NumInfo-item'
export default {
    components:{
        MyItem
    }
}
</script>



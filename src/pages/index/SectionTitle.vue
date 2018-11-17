<template>
    <div class="section-title">
        <div class="title">
            <span class="title-sp-line" style="background: #00ABE7;"></span>
            <span>{{title}}</span>
        </div>
        <div class="more" @click='more'>更多</div>
    </div>
</template>

<style>
.section-title{padding-bottom: 20px;line-height: 24px;}
.title{float: left;font-size: 24px;color: #64676A;}
.title-sp-line{display:inline-block;float: left;width: 3px;height: 24px;margin-right: 6px;border-radius: 2px;}
.more{float: right;color: #82868a;padding-right: 2px;cursor: pointer;}
</style>


<script>

export default {
    props:['title'],
    methods:{
        more:function(){
            this.$router.push('/market')
        }
    }
}
</script>


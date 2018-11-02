<template>
    <li class="num-li-node">
        <div>
            <span class="num-sp">800</span>
            <span class="num-sp2">+</span>
            <span class="num-person">金主买家</span>
        </div>
        <div class="shade-num transAll">
            <div class="btn-join" @click='fn'>
                <span v-show=!bol>我要加入</span> 
                <span v-show=bol>我要上传</span>
            </div>
        </div>
    </li>
</template>

<style>
.num-li-node{position: relative;width: 24.8%;padding: 10px 0;cursor: pointer;text-align: center}
.num-sp{font-size: 30px;font-weight: 600;color: #4895E7;}
.num-sp2{font-size: 18px;font-weight: 900;color: #4895E7;vertical-align: top;}
.num-sp3{color: #64676A;}
.shade-num{position: absolute;left: 0;top: -96px;width: 100%;height: 60px;background: rgba(48,49,50,0.80);border-radius: 2px;text-align: center;}
.num-li-node:hover .shade-num{top: 0;}
.btn-join{border-radius: 2px;color: #fff; width: 102px;line-height: 28px;border: 1px solid #fff;font-size: 12px;border-color: rgba(255,255,255,0.3);margin:0 auto;margin-top: 15px;}
.btn-join:hover{background:white;color:#4895E7}
</style>

<script>
export default {
    props:['num'],
    methods:{
        fn:function(){
            this.$router.push('/index')
        }
    },
    computed:{
        bol:function(){
            if((this.num%2) == 0){
                return true
            }
            return false
        }
    }
}
</script>



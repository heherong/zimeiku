<template>
    <div class="tit-more" @click="fn">
        <img src="../../../assets/images/arr_small_down.png">
    </div>
</template>

<style>
.tit-more{float: left;width: 26px;height: 26px;line-height: 26px;text-align: center;background: #f8f8f8;border: 1px solid #e4e4e4;cursor: pointer;border-radius: 4px;}
</style>


<script>
export default {
    data:function(){
        return {bol:true}
    },
    methods:{
        fn:function(){
            if(this.bol){
                 this.$emit('height','auto')
            }else{
                this.$emit('height','24px')
            }
            this.bol=!this.bol;
        }
    }
}
</script>

<template>
    <li class="menu-li"  @click='fn'>
        <p class="menu-li-p transAll" :class="{border:bol}">
            <span v-show='bol'><slot name='activeImg'></slot><br/></span>
            <span v-show='!bol'><slot name='normalImg'></slot><br/></span>
            <span style="" :class="{'nav-act':bol}">{{txt}}</span> 
        </p>
    </li>
</template>

<style>
.menu-li{width: 100%;cursor: pointer;font-size: 14px;}
.menu-li-p{position: relative;border-left:solid 3px white;text-align: left;padding-left: 44px;height: 44px;line-height: 15px;padding-right: 18px;display: inline-block;width: 100%;color: #64676a;}
.border{border-left:solid 3px #4895e7;}
.nav-act{color: #4895e7;}
.menu-li-p img{width:18px;float: left;margin-top:13px;margin-right:10px;}
</style>

<script>
export default {
    props:['txt','mark','sel'],
    computed:{
        bol:function(){
            if(this.mark == this.sel){
                return true;
            }
            return false;
        }
    },
    methods:{
        fn:function(){
            this.$emit('change',this.mark);
            this.$router.push(`/help/${this.mark}`);
            console.log(this.mark)
        }
    }
}
</script>



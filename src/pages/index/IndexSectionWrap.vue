<template>
    <section class="index-section-wrap" style="background:#ECEFF4">
        <div class="inner-wrap section-wrap">
            <MySectionTit title="买作品"></MySectionTit>
            <div class="section-con-wrap">
                <ul style="overflow: hidden;">
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                    <MySectionItem></MySectionItem>
                </ul>
            </div>
        </div>
    </section>
</template>

<style>
.index-section-wrap{width:100%;}
.section-wrap{padding: 24px 0 15px;}
.section-con-wrap {overflow: hidden;width:100%;margin-top:22px;}
.section-con-wrap ul>li:hover{    
    transform: scale(1.01,1.01);
    -moz-transform: scale(1.01,1.01);
    -webkit-transform: scale(1.01,1.01);
    -o-transform: scale(1.01,1.01);
    transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -webkit-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);
    -moz-box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);
    -webkit-box-shadow: 0 4px 12px 0px rgba(0,0,0,.1);}
.section-con-wrap ul>li:hover h4{border-bottom:solid 1px transparent;}
</style>

<script>
import MySectionTit from './SectionTitle'
import MySectionItem from './SectionConItem'
export default {
    components:{
        MySectionTit,
        MySectionItem
    }
}
</script>


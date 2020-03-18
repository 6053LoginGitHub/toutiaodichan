<template>
    <div class="brandViewsItem_box">
        <router-link to="" class="item_brand_bg">
            <img class="brand_bg_img" src="@/assets/brand/pic.png" alt="">
            <p class="title">
                <span>上海首个保税展示展销场所亮相 绿地全球商贸港全面升级</span>    
            </p>
        </router-link>
        <router-link to="" class="item_brand_sm">
            <div class="content">
                <p class="title">白俄罗斯第一副总理图尔钦会见张玉良董事长</p>
                <img class="img" src="@/assets/brand/brand_pic.png" alt="">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.brandViewsItem_box{
    padding: 10px;
    .item_brand_bg{
        display: block;
        width: 100%;
        height: 155px;
        position: relative;
        .brand_bg_img{
            width: 100%;height: 155px;display: block;
        }
        .title{
            width: 100%;height: 142px;
            position: absolute;
            bottom: 0;
            color: #fff;
            font-size: 16px;
            text-align: left;
            &::before{
                content: "";
                display: block;
                width: 100%;height: 142px;
                background: url('../../assets/brand/smak.png') no-repeat 100%;
                position: absolute;
                bottom: 0;
            }
            span{
                display: block;
                position: absolute;
                top: 90px;
                padding:0 15px;
            }
            
        }
    }
    .item_brand_sm{
        display: block;
        height: 73px;
        border-bottom: 1px solid #F2F2F2;
        .content{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title{
                font-size: 16px;line-height: 22px;color: #333;
                margin-right: 25px;
                text-align: left;
            }
            .img{
                display: block;width: 50px;height: 50px;
            }
        }
    }
}
</style>
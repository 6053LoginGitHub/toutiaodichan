<template>
    <div class="brandDetails_box">
        <common-nav class="nav"></common-nav>
        <div class="brand">
            <img class="brand_img" src="@/assets/brand/brand.png" alt="">
            <p class="brand_name">恒大地产</p>
            <div class="brand_data">
                <div class="item">
                    <p class="num">45</p>
                    <p class="text">文章</p>
                </div>
                <div class="line"></div>
                <div class="item">
                    <p class="num">45</p>
                    <p class="text">关注</p>
                </div>
                <div class="line"></div>
                <div class="item">
                    <p class="num">45</p>
                    <p class="text">分享</p>
                </div>
            </div>
            <p class="follow">+ 关注</p>
            <p v-if="false" class="followed">已关注</p>
            <p class="intro">地产开发、商业运营、长租公寓、智慧服务</p>
        </div>
        <div class="space_line"></div>
        <van-tabs
            v-model="brand_active" 
            swipeable 
            :title-active-color="'#1379F0'"
            :border="false"
            :line-height="'2px'"
            >
            <van-tab v-for="(item,i) in brand_tags" :key="i" :title="item">
                <div class="space_line"></div>
                <brandViewsItem></brandViewsItem>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import commonNav from '@/components/navBar'
import brandViewsItem from '@/views/common/brandViewsItem'
export default {
    data(){
        return{
            brand_tags:['资讯','报告'],
            brand_active:0
        }
    },
    components:{
        commonNav,
        brandViewsItem
    }
}
</script>
<style lang="scss">
.brandDetails_box{
    .nav{border-bottom: 1px solid #F2F2F2;}
    .brand{
        display: flex;
        flex-direction: column;
        align-items: center;
        .brand_img{
            display: block;width: 60px;height: 60px;
            margin: 11px 0;
        }
        .brand_name{
            font-size: 18px;color: #333;
            margin-bottom: 25px;
        }
        .brand_data{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .line{
                width:1px;
                height:28px;
                background:#eee;
            }
            .item{
                .num{
                    font-size: 22px;line-height: 22px;
                }
                .text{
                    font-size: 13px;color: #999;line-height: 22px;
                }
            }
        }
        .follow,.followed{
            width:50px;
            height:22.5px;
            background:#1379F0;
            border-radius:11.5px;
            font-size: 12px;color: #fff;
            line-height: 22.5px;
            margin-top: 15px;
        }
        .followed{
            background: #E5E5E5;
        }
        .intro{
            font-size: 12px;color: #999;
            margin: 15px 0;
        }
    }
    .space_line{
        width: 100%;
        height: 10px;
        background: #f2f2f2;
    }
    .van-tab{
        line-height: 40px;
        color: #333;
    }
    .van-tabs__line{
        width: 13px !important;
        background-color:#1379F0;
        bottom: 23px;
    }
    
}   
</style>
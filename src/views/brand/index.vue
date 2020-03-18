<template>
    <div class="brand_box">
        <common-nav :right_src="''" :left_src="''" :title="'品牌'"></common-nav>
        <div class="brand_list">
            <div class="brand">
                <div class="head">
                    <router-link to="/brand/brandDetails" class="left">
                        <div class="content">
                            <img class="brand_img" src="@/assets/brand/brand.png" alt="">
                            <div class="brand_msg">
                                <p class="brand_name">绿地集团</p>
                                <p class="attention">3万人关注</p>
                            </div>
                        </div>
                    </router-link>
                    <p class="follow">+ 关注</p>
                    <p v-if="false" class="followed">已关注</p>
                </div>
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
                <div class="more_brand">
                    <p>余下3篇</p>
                    <img class="icon_down" src="@/assets/brand/icon_down.png" alt="">
                </div>
            </div>
        </div>
        
        <tabbar :parActive="3"></tabbar>

    </div>
</template>
<script>
import commonNav from '@/components/navBar'
import tabbar from '@/views/common/tabbar'
export default {
    data(){
        return{
            brandList:[
                {title:'中国奥园集团股份有限公司'},
                {title:'中国奥园集团股份有限公司'},
                {title:'中国奥园集团股份有限公司'},
                {title:'中国奥园集团股份有限公司'},
                {title:'中国奥园集团股份有限公司'},
            ],
        }
    },
    components:{
        commonNav,
        tabbar,
    },
    mounted(){
    }
}
</script>
<style lang="scss">
.brand_box{
    padding-bottom: 35px;
    .brand_list{
        width: 100%;
        min-height: 600px;
        background: rgb(242, 242, 242);
        padding:10px;
        box-sizing: border-box;
        .brand{
            width: 100%;
            background: #fff;
            margin-bottom: 10px;
            border-radius: 5px;
            .head{
                height: 59px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                .left{
                    display: block;
                    .content{
                        display: flex;
                        .brand_img{
                            width: 35px;height: 35px;display: block;
                        }
                        .brand_msg{
                            margin-left: 11.5px;
                            text-align: left;
                            .brand_name{
                                font-size: 15px;font-weight: bold;color: #333;
                            }
                            .attention{
                                font-size: 12px;color: #999;
                            }
                        }
                    }
                }
                .follow,.followed{
                    width:50px;
                    height:22.5px;
                    background: #1379F0;
                    border-radius:11.5px;
                    font-size: 12px;color: #fff;
                    line-height: 22.5px;
                }
                .followed{
                    background:#E5E5E5;
                }
            }
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
                        margin-left: 12px;margin-right: 25px;
                        text-align: left;
                    }
                    .img{
                        display: block;width: 50px;height: 50px;margin-right: 10px;
                    }
                }
            }
            .more_brand{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 38px;
                font-size: 13px;color: #EE5959;
                padding-left: 21px;
                padding-right: 17px;
                .icon_down{
                    display: block;width: 9px;height: 5px;
                }
            }
        }
    }
}
</style>
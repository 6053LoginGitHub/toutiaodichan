<template>
    <div class="zixun_box">
        <div class="container">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) of item" :key="index">
                    <a><img :src="image.img_path" /></a>
                </van-swipe-item>
            </van-swipe>
            <div class="content_list">
                <router-link to="/zixun/zixunDetails" class="item_box">
                    <div class="item_content">
                        <div class="item_left">
                            <p class="title">楼市春困房企自救：把失去的时间夺回来</p>
                            <div class="content">
                                <div class="time content_data"><img src="@/assets/zixun/time.png">2020-02-24</div>
                                <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                            </div>
                        </div>
                        <img class="item_right" src="@/assets/zixun/brand_pic.png" alt="">
                    </div>
                </router-link>
                <router-link to="" class="item_box">
                    <div class="item_content">
                        <div class="item_left">
                            <p class="title">楼市春困房企自救：把失去的时间夺回来</p>
                            <div class="content">
                                <div class="time content_data"><img src="@/assets/zixun/time.png">2020-02-24</div>
                                <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                            </div>
                        </div>
                        <img class="item_right" src="@/assets/zixun/brand_pic.png" alt="">
                    </div>
                </router-link>
                <router-link to="" class="item_box">
                    <div class="item_content">
                        <div class="item_left img_null">
                            <p class="title">黑龙江省公租房扩面！租赁补贴为主、实物配租为 辅｜这些人群将被纳入保障范围</p>
                            <div class="content">
                                <div class="time content_data"><img src="@/assets/zixun/time.png">2020-02-24</div>
                                <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="" class="item_bottom_box item_box">
                    <div class="item_content">
                        <div class="item_head">
                            <img class="head_img" src="@/assets/zixun/brand_pic.png" alt="">
                            <img class="head_img" src="@/assets/zixun/brand_pic.png" alt="">
                            <img class="head_img" src="@/assets/zixun/brand_pic.png" alt="">
                        </div>
                        <p class="title">进阶人生 世茂璀璨天城跃层洋房耀世启幕</p>
                        <div class="content">
                            <div class="time content_data"><img src="@/assets/zixun/time.png">2020-02-24</div>
                            <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                        </div>
                    </div>
                </router-link>
                <button class="rush_btn"><img src="@/assets/zixun/icon_rush.png" alt="">换一批</button>
            </div>
        </div>
        <div class="space_line"></div>
        
        <!-- 最新报告 -->
        <div class="item_list report_list container">
            <div class="head">
                <h4>最新报告</h4>
                <a href="" class="more">查看全部</a>
            </div>
            <router-link to="" class="item_box">
                <div class="item_content">
                    <div class="item_left">
                        <p class="title">楼市春困房企自救：把失去的时间夺回来</p>
                        <div class="content">
                            <div class="tag">
                                <div class="mark"></div>
                                城市与区域
                            </div>
                            <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                        </div>
                    </div>
                    <img class="item_right" src="@/assets/zixun/brand_pic.png" alt="">
                </div>
            </router-link>
            <router-link to="" class="item_box">
                <div class="item_content">
                    <div class="item_left">
                        <p class="title">中国房地产土地市场2019年8月简报 </p>
                        <div class="content">
                            <div class="tag">
                                <div class="mark"></div>
                                政策研究
                            </div>
                            <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                        </div>
                    </div>
                    <img class="item_right" src="@/assets/zixun/brand_pic.png" alt="">
                </div>
            </router-link>
            <router-link to="" class="item_box">
                <div class="item_content">

                    <div class="item_left img_null">
                        <p class="title">中国房地产土地市场2019年8月简报 </p>
                        <div class="content">
                            <div class="tag">
                                <div class="mark"></div>
                                房企
                            </div>
                            <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="" class="item_bottom_box item_box">
                <div class="item_content">

                    <div class="item_head">
                        <img class="head_img" src="@/assets/zixun/brand_pic.png" alt="">
                        <img class="head_img" src="@/assets/zixun/brand_pic.png" alt="">
                        <img class="head_img" src="@/assets/zixun/brand_pic.png" alt="">
                    </div>
                    <p class="title">中国房地产土地市场2019年8月简报 </p>
                    <div class="content">
                        <div class="tag">
                            <div class="mark"></div>
                            市场报告
                        </div>
                        <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="space_line"></div>
        <!-- 推荐专题 -->
        <div class="item_list special_list">
            <div class="head container">
                <h4>推荐专题</h4>
                <a href="" class="more">查看全部</a>
            </div>
            <div class="list">
                <ul>
                    <li>
                        <router-link to="" class="item">
                            <img class="special_img" src="@/assets/zixun/zt_pic.png" alt="">
                            <p class="tag">专题</p>
                            <p class="special_title">焦点 | 济南直管区这类住宅限购松绑 向楼市释放了怎样信号？</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="space_line"></div>

        <!-- 热门品牌 -->
        <div class="item_list brand_list">
            <div class="head container">
                <h4>热门品牌</h4>
                <a href="" class="more">查看全部</a>
            </div>
            <div class="list">
                <ul>
                    <li>
                        <router-link to="" class="item">
                            <img class="brand_img" src="@/assets/zixun/brand.png" alt="">
                            <p class="brand_title">绿地集团</p>
                            <p class="followers">3万人关注</p>
                            <button class="follow">+ 关注</button>
                            <button v-show="false" class="followed">已关注</button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Array,
            default:null
        }
    }
}
</script>
<style lang="scss">
.zixun_box{
    // padding-bottom: 30px;
    .container{
        padding: 0 10px;
    }
    .van-swipe-item{
        width: 100%;
        height: 220px !important;
        img{
            width: 100%;
            height: 200px;
            display: block;
        }
    }
    // .van-swipe__indicator{
    //     width:7px;
    //     height: 7px;
    //     transform: translateY(10px);
    //     background-color: #D4DBE2;
    // }
    // .van-swipe__indicator--active{
    //     background-color: #1379F0;
    // }
    .van-swipe__indicator{
        width:7px;
        height: 7px;
        display: block;
        transform: translateY(10px);
        background-color: transparent;
        background: url('../../assets/zixun/carousel.png') no-repeat;
        background-size: 100% 100%;
    }
    .van-swipe__indicator--active{
        background: url('../../assets/zixun/carousel_on.png') no-repeat;
        background-color: transparent;
        background-size: 100% 100%;
    }
    .content_list,.report_list{
        padding-top: 10px;
        .item_box{
            display: block;
            .item_content{

                display: flex;justify-content: space-between;
                border-bottom: 1px solid #F0F0F0;
                margin-top: 10px;
                
                .item_left{
                    width: 223px;
                    &.img_null{
                        width: 100%;
                    }   
                    .title{
                        font-size: 16px;color: #333;line-height: 22px;width: 100%;text-align: left;
                    }
                    .content{
                        display: flex;color: #ccc;
                    }
                }
                .item_right{
                    display: block;width: 117px;height: 72.5px;
                }
                .content_data{
                    display: flex;
                    font-size: 10px;
                    color: #ccc;
                    width:auto;
                    align-items: center;
                    margin-right:40px;
                    margin-top:10px;
                    margin-bottom: 15px;
                    line-height: 20px;
                    img{
                        display: block;width: 15px;height: 15px;margin-right: 7px;
                    }
                }
                .tag{
                    color: #1379F0;
                    margin-top:10px;
                    font-size: 11px;
                    position: relative;
                    padding: 0 10px;
                    height:20px;
                    line-height: 20px;
                    box-sizing: border-box;
                    margin-right: 40px;
                    .mark{
                        width: 100%;
                        height: 100%;
                        background: #1379F0;
                        opacity:0.1;
                        border-radius:3px;
                        position: absolute;
                        top: 0;
                        left: 0;
                    } 
                }
            }
            &.item_bottom_box{
                display: block;
                .item_content{
                    flex-direction: column;
                    .item_head{
                        display: flex;
                        justify-content: space-between;
                        .head_img{
                            display: block;width: 117px;height: 72.5px;
                            margin-right: 2px;
                        }
                    }
                    .title{
                        text-align: left;font-size: 16px;color: #333;margin-top: 10px;
                    }
                    .content{
                        display: flex;color: #ccc;
                    }
                }
            }
        }
        .rush_btn{
            width:140px;
            height:40px;
            margin: 20px auto;
            background:#fff;
            border:1px solid #1379F0;
            border-radius:20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1379F0;
            img{
                width: 20px;height: 20px;display: block;margin-right: 9px;
            }
        }
        &.item_list{
            padding-top: 0;
        }
    }
    .space_line{
        width: 100%;
        height:10px;
        background:rgba(242,242,242,1);
    }
    .item_list{
        .head{
            display: flex;justify-content: space-between;align-items: center;
            margin-top: 17px;margin-bottom:20px;
            h4{
                font-size: 16px;color: #000;font-weight: bold;display: flex;
                align-items: center;
                &::before{
                    display: block;
                    content: "";
                    width:5px;
                    height:16px;
                    background:#1379F0;
                    border-radius:2.5px;
                    margin-right: 12px;
                }
            }
            .more{
                font-size: 13px;color: #999;
            }
        }
        &.brand_list{
            .list{
                ul{
                    display: flex;
                    overflow-x: scroll;
                    margin-bottom: 70px;
                    padding-bottom: 10px;
                    li{
                        width: 115px;
                        padding-right: 10px;
                        &:first-of-type{
                            margin-left: 10px;
                        }
                        .item{
                            width:105px;
                            height:170px;
                            display: block;
                            background:#fff;
                            border:1px solid #F2F2F2;
                            flex-shrink: 0;
                            box-sizing: border-box;
                            .brand_img{
                                display: block;width: 60px;height: 60px;border-radius: 50%;background: #F2F2F2;
                                margin: 15px auto 8px;
                            }
                            .brand_title{
                                font-size: 16px;color: #333;margin-bottom: 7px;
                            }
                            .followers{font-size: 12px;color: #999;margin-bottom: 10px;}
                            .follow{
                                font-size: 12px;color: #fff;width: 50px;height: 22.5px;border-radius: 12px;
                                border: 0;background: #1379F0;
                            }
                            .followed{
                                font-size: 12px;color: #fff;width: 50px;height: 22.5px;border-radius: 12px;
                                border: 0;background: #E5E5E5;
                            }
                        }
                    }
                }
                
            }
        }
        &.special_list{
            .list{
                ul{
                    display: flex;
                    overflow-x: scroll;
                    padding-bottom: 10px;
                    margin-bottom: 10px;

                    li{
                        width: 255px;
                        padding-right: 10px;
                        &:first-of-type{
                            margin-left: 10px;
                        }
                        .item{
                            display: block;
                            width: 245px;
                            position: relative;
                            .special_img{
                                width: 245px;height: 152px;display: block;
                            }
                            .tag{
                                width:35px;
                                height:17px;
                                background: #1379F0;
                                border-radius:1px;
                                position: absolute;
                                font-size: 11px;color: #fff;
                                line-height: 17px;
                                position: absolute;
                                top: 10px;left: 10px;
                            }
                            .special_title{
                                font-size: 16px;color: #333;line-height: 22px;
                                margin-top: 11px;text-align: left;
                            }
                        }
                    }
                }
            }
        }
    }
}
    
</style>
<template>
    <div class="memberIndex_box">
        <div class="member_top">
            <div v-if="false" class="login_box">
                <img class="u_left" src="@/assets/member/mrtx.png" />
                <div class="u_right">
                    <p class="username">疯狂的赛车</p>
                    <p class="tishi">头条地产欢饮您！</p>
                </div>
                
            </div>
            <div v-else class="login_box">
                <img class="u_left" src="@/assets/member/mrtx.png" />
                <div class="u_right" @click="login_show=true">
                    <p class="login">登录<span class="line">|</span>注册</p>
                    <p class="tishi">更多功能尽在登录后</p>
                </div>
            </div>
            <router-link to="" class="setting"><img src="@/assets/member/icon_set2.png" alt=""></router-link>
            <div class="like_box">
                <div class="attention">
                    <p class="num">0</p>
                    <p class="text">我的关注</p>
                </div>
                <div class="line"></div>
                <div class="like">
                    <p class="num">0</p>
                    <p class="text">我的喜欢</p>
                </div>
            </div>
        </div>
        <div class="member_account">
            <div class="account_box">
                <div class="item">
                    <img class="icon_img" src="@/assets/member/icon_pl.png" alt="">
                    <p class="text">我的评论</p>
                </div>
                <div class="item">
                    <img class="icon_img" src="@/assets/member/icon_dz.png" alt="">
                    <p class="text">我的点赞</p>
                </div>
                <div class="item">
                    <img class="icon_img" src="@/assets/member/icon_sc.png" alt="">
                    <p class="text">我的收藏</p>
                </div>
                <div class="item">
                    <img class="icon_img" src="@/assets/member/icon_histoy.png" alt="">
                    <p class="text">阅读历史</p>
                </div>
            </div>
        </div>
        <div class="space_line"></div>
        <div class="flex_cell">
            <div class="left">
                <img class="icon_img" src="@/assets/member/icon_set.png" alt="">
                <p class="text">系统设置</p>
            </div>
            <img class="right" src="@/assets/member/icon_arrow.png" alt="">
        </div>
        <div class="flex_cell">
            <div class="left">
                <img class="icon_img" src="@/assets/member/icon_usergbook.png" alt="">
                <p class="text">用户反馈</p>
            </div>
            <img class="right" src="@/assets/member/icon_arrow.png" alt="">
        </div>
        <div class="flex_cell">
            <div class="left">
                <img class="icon_img" src="@/assets/member/icon_share_us.png" alt="">
                <p class="text">推荐我们</p>
            </div>
            <img class="right" src="@/assets/member/icon_arrow.png" alt="">
        </div>
        <div class="flex_cell">
            <div class="left">
                <img class="icon_img" src="@/assets/member/icon_heip.png" alt="">
                <p class="text">使用帮助</p>
            </div>
            <img class="right" src="@/assets/member/icon_arrow.png" alt="">
        </div>
        <van-overlay :show="login_show">
            <div class="wrapper">
                <div class="head">
                    <p class="title">登录注册</p>
                    <img @click="login_show=false" class="close" src="@/assets/member/icon_close.png" alt="">
                </div>
                <login :login_show="login_show"></login>
            </div>
        </van-overlay>
        <tabbar :parActive="4"></tabbar>

    </div>
</template>
<script>
import tabbar from '@/views/common/tabbar'
import login from '@/views/common/login'
export default {
    data(){
        return{
            login_show:false,
        }
    },
    components:{
        tabbar,
        login
    }
}
</script>
<style lang="scss">
.memberIndex_box{
    .member_top{
        width: 100%;
        height: 208px;
        background: url('../../assets/member/my_bg.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        .login_box{
            display: flex;
            align-items: center;
            text-align: left;
            margin-left: 25px;
            padding-top: 42.5px;
            .u_left{
                width: 60px;height: 60px;display: block;
            }
            .u_right{
                margin-left: 15px;
                .username,.login{
                    font-size: 17px;color: #fff;margin-bottom: 5px;line-height: 22.5px;
                    display: flex;
                    span{
                        display: block;margin: 0 8px;transform: translateY(-1px);
                    }
                }
                .tishi{
                    font-size: 12px;color: #E7E7E7;
                }
            }
            
        }
        .setting{
            display: block;width: 24px;height: 21px;
            position: absolute;
            top: 15px;right:15px;
            img{
                display: block;width: 24px;height: 21px;
            }
        }
        .like_box{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            margin-top: 25px;
            .attention,.like{
                .num{
                    font-size: 22px;margin-bottom: 5px;
                }
                .text{
                    font-size: 15px;color: #E7E7E7;
                }
            }
            .line{
                margin:0 50px;
                width:1px;
                height:12px;
                background: #fff;
            }
        }
    }
    .space_line{
        width: 100%;
        height: 10px;background: #F2F2F2;
    }
    .member_account{
        padding: 0 15px;
        position: relative;
        .account_box{
            width: 100%;
            height: 100px;
            box-shadow: 0 0 10px 1px rgba(0,0,0,0.07);
            background: #fff;
            border-radius:10px 10px 0px 0px;
            margin-top: -15px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item{
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon_img{
                    width: 35px;height: 35px;display: block;margin-bottom: 5px;
                }
                .text{
                    font-size: 12px;color: #7A7A7A;
                }
            }
        }
    }
    .flex_cell{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 12.5px;
        padding-right: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #E7E7E7;
        .left{
            display: flex;
            .icon_img{
                display: block;width: 25px;height: 25px;margin-right: 13px;
                margin-top: -2px;
            }
            .text{
                font-size: 15px;color: #333;
            }
        }
        .right{
            display: block;width: 10px;height: 16px;
        }
    }
    .van-overlay{
        z-index: 100;
        .wrapper{
            width: 100%;height: 440px;position: absolute;bottom: 0;
            background: #fff;
            .head{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                border-bottom: 1px solid #F2F2F2;
                position: relative;
                .title{
                    font-size: 18px;color: #333;
                }
                .close{
                    display: block;width: 20px;height: 20px;
                    position: absolute;right: 10px;top: 22.5px;
                }
            }
        }
    }
}
</style>
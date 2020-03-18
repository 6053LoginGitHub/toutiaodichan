<template>
    <div class="zixunDetails_box">
        <common-nav class="nav" v-on:rightClick="handleShare"></common-nav>
        <div class="views">
            <p class="title">[克而瑞]以历年返乡购房规模测算新冠疫情对2020年行业需求总量影响</p>
            <div class="data">
                <div class="author">
                    <img src="@/assets/tabbar/icon_my.png" alt="">张三
                </div>
                <div class="origin"><span>来源：</span>头条地产</div>
                <div class="time">一天前</div>
            </div>
            <div class="content">

            </div>
            <div class="btns">
                <button v-if="true" class="zan" type="button"><img src="@/assets/zixun/icon_dz.png" alt="">63</button>
                <button v-else class="zan" type="button"><img src="@/assets/zixun/icon_dz_on.png" alt="">63</button>
                <button v-if="true" class="like" type="button"><img src="@/assets/zixun/icon_lick.png" alt="">喜欢</button>
                <button v-else class="like" type="button"><img src="@/assets/zixun/icon_lick_on.png" alt="">喜欢</button>
            </div>
        </div>
        <div class="space_line"></div>
        <about-read></about-read>
        <div class="space_line"></div>
        <comment></comment>
    </div>
</template>
<script>
import aboutRead from '@/views/common/aboutRead'
import comment from '@/views/common/comment'
import commonNav from '@/components/navBar'
export default {
    data(){
        return{

        }
    },
    components:{
        aboutRead,
        commonNav,
        comment
    },
    methods:{
        //分享
        handleShare(){
            
        }
    }
}
</script>
<style lang="scss">
.zixunDetails_box{
    .nav{
        border-bottom: 1px solid #F2F2F2;
    }
    .views{
        padding: 0 10px;
        text-align: left;
        .title{
            font-size: 18;color: #333;font-weight: bold;
            margin-top: 20px;margin-bottom: 14px;
        }
        .data{
            width: 100%;height: 40px;background: #F9F9F9;
            display: flex;justify-content: space-between;align-items: center;
            font-size: 12px;
            margin-bottom: 20px;
            .author{
                color: #333;
                display: flex;align-items: center;
                margin-left: 10px;
                img{
                    display: block;width: 25px;height: 25px;margin-right:7.5px;
                }
            }
            .origin{
                span{
                    color: #999;
                }
            }
            .time{
                color: #999;
                margin-right: 10px;
            }
        }
        .btns{
            display: flex;
            justify-content: center;
            padding: 19px;
            .zan,.like{
                width: 100px;height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;color: #333;
                border-radius: 17.5px;
                border: 1px solid #ccc;
                background: #fff;
                margin-left: 48px;
                img{
                    display: block;width: 25px;height: 25px;margin-right: 5px;
                }
            }
            .zan{
                margin-left: 0;
            }
        }
    }
    .space_line{
        width: 100%;
        height: 10px;
        background: #F2F2F2;
    }
}
</style>
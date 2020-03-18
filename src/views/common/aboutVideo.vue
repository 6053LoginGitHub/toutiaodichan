<template>
    <div class="aboutVideo_box">
        <h4 class="head">相关视频</h4>
        <router-link to="/zixun/videoDetails" class="item_video">
            <div class="left">
                <p class="video_title">中国房地产土地市场2019年11月简报</p>
                <div class="video_data">
                    <span class="time"><img src="@/assets/zixun/time.png" alt="">2020-02-04</span>
                    <span class="eyes"><img src="@/assets/zixun/eyes.png" alt="">20</span>
                </div>
            </div>
            <div class="right">
                <img class="video_img" src="@/assets/zixun/time.png">
                <img class="pause_img" src="@/assets/zixun/play_s.png">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.aboutVideo_box{
    padding: 0 10px;
    .head{
        font-size: 16px;font-weight: bold;
        display: flex;
        align-items: center;
        margin-top: 22px;
        &::before{
            content: "";display: block;width: 5px;height: 16px;
            background: #1379F0;margin-right: 12px;
            border-radius: 2.5px;
        }
    }
    .item_video{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px 0 10px;
        border-bottom: 1px solid #F0F0F0;
        &:last-of-type{
            border-bottom: none;
        }
        .left{
            .video_title{
                // width: 212px;
                width: 90%;
                margin-right: 25px;
                font-size: 16px;color: #333;line-height: 22px;
                margin-bottom: 13px;text-align: left;
            }
            .video_data{
                display: flex;
                align-items: center;
                line-height: 15px;
                .time,.eyes{
                    font-size: 10px;color: #ccc;margin-right:40px;
                    display: flex;
                    align-items: center;
                    img{
                        width: 15px;height: 15px;margin-right: 5px;display: block;
                    }
                }
            }
        }
        .right{
            width: 117px;height: 72.5px;position: relative;
            .video_img{
                width:117px;height: 72.5px;display: block;
            }
            .pause_img{
                width: 27px;height: 27px;display: block;
                position: absolute;top:50%;left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
}  
</style>
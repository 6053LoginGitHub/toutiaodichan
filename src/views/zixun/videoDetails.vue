<template>
    <div class="videoDetails_box">
        <!-- <img class="icon_back" src="@/assets/zixun/back_w.png" alt=""> -->
        <div class="video">
            <video-play :video_src="video_src"></video-play>
            <p class="title">快看 | A股三大股指全线反弹 基建地产股走强 房地 产开发板块近20日涨幅已超10%</p>
            <div class="video_data">
                <span class="time">2020-03-03</span>
                <p class="data">
                    <span class="comment"><img src="@/assets/zixun/icon_gbook.png" alt="">10</span>
                    <span class="collect"><img src="@/assets/zixun/icon_sc.png" alt="">3</span>
                </p>
            </div>
            <img @click="$router.go(-1)" class="icon_back" src="@/assets/zixun/back_w.png" alt="">

        </div>
        <div class="space_line"></div>
        <about-video></about-video>
        <div class="space_line"></div>
        <comment></comment>

        
    </div>
</template>
<script>
import videoPlay from '@/views/common/videoPlay'
import aboutVideo from '@/views/common/aboutVideo'
import comment from '@/views/common/comment'
export default {
    data(){
        return{
            video_src:require('@/assets/1.mp4'),
        }
    },
    components:{
        videoPlay,
        aboutVideo,
        comment
    }
}
</script>
<style lang="scss">
.videoDetails_box{
    .icon_back{
        display: block;width: 11.5px;height: 18.5px;position: absolute;z-index: 1001;
        top: 10px;left: 10px;
    }
    .video{
        position: relative;
        .title{
            font-size: 16px;color: #333;text-align: left;line-height: 22px;
            padding: 14px 10px;
        }
        .video_data{
            padding: 0 10px;
            padding-bottom: 20px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;color: #999;
        }
        .data{
            display: flex;
            align-items: center;
            .comment,.collect{
                display: flex;
                align-items: center;
                margin-left: 31px;
                img{
                    width: 16px;height: 16px;margin-right: 5px;display: block;
                }

            }
        }
    }
    .space_line{
        width: 100%;height: 10px;background: #F2F2F2;
    }
    
}
</style>
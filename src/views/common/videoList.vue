<template>
    <div class="video_box">
        <router-link to="/zixun/videoDetails" class="video_item">
            <img class="video_img" src="@/assets/zixun/pic.png" alt="">
            <img class="play_btn" src="@/assets/zixun/icon_play.png" alt="">
            <span class="video_duration">04:30</span>
            <p class="video_title">快看 | A股三大股指全线反弹 基建地产股走强 房地 产开发板块近20日涨幅已超10%</p>
            <div class="video_data">
                <span class="time">2020-03-03</span>
                <p class="data">
                    <span class="comment"><img src="@/assets/zixun/icon_gbook.png" alt="">10</span>
                    <span class="collect"><img src="@/assets/zixun/icon_sc.png" alt="">3</span>
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.video_box{
    padding-bottom: 45px;
    .video_item{
        display: block;
        width: 100%;
        position: relative;
        .video_img{
            display: block;
            width: 100%;
            height: 210px;
        }
        .play_btn{
            display: block;
            width: 41px;height: 41px;
            position: absolute;top: 85px;left: 50%;
            transform: translateX(-50%);
        }
        .video_duration{
            width:44px;
            height:18.5px;
            display: block;
            background:rgba(0,0,0,.7);
            border-radius:2.5px;
            font-size: 10px;color: #fff;
            line-height: 18.5px;
            box-sizing: border-box;
            position: absolute;
            right: 10px;
            top: 181px;
        }
        .video_title{
            font-size: 16px;color: #333;text-align: left;line-height: 22px;
            padding: 14px 10px;
        }
        .video_data{
            padding: 0 10px;
            padding-bottom: 9px;
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
}
</style>
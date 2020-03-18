<template>
    <div class="reportItem_box">
        <van-swipe :autoplay="3000">
            <van-swipe-item  v-for="(image, index) of item" :key="index">
                <router-link to=""><img :src="image.img_path" /></router-link>
            </van-swipe-item>
        </van-swipe>
        <router-link to="" class="report_item">
            <div class="head">
                <p class="title">中国房地产土地市场简报</p>
                <p class="time">2019-11</p>
            </div>
            <p class="subtitle">土地成交量创年内新高</p>
            <p class="content text_two">成交方面，在近两月土地供应规模维持高位的推动下，全国土 地市场成交规模继续上涨，并且增幅进一步扩大。</p>
        </router-link>
        <router-link to="" class="report_item">
            <div class="head">
                <p class="title">中国房地产土地市场简报</p>
                <p class="time">2019-11</p>
            </div>
            <p class="subtitle">土地成交量创年内新高</p>
            <p class="content text_two">成交方面，在近两月土地供应规模维持高位的推动下，全国土 地市场成交规模继续上涨，并且增幅进一步扩大。</p>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:[{img_path:require('../../assets/zixun/pic.png')},{img_path:require('../../assets/zixun/pic.png')}],
        }
    }
}
</script>
<style lang="scss">
.reportItem_box{
    width: 100%;
    min-height: 600px;
    background: rgb(242, 242, 242);
    padding: 10px;
    padding-bottom: 55px;
    box-sizing: border-box;
    .van-swipe-item{
        width: 100%;
        height: 160px !important;
        img{
            width: 100%;
            height: 141px;
            display: block;
        }
    }
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
    .report_item{
        width: 100%;
        height: 125px;
        background: #fff;
        padding: 15px 14px;
        box-sizing: border-box;
        margin-top: 10px;
        text-align: left;
        display: block;
        .head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title{
                font-size: 16px;color: #333;line-height: 22px;
            }
            .time{
                width:60px;
                height:20px;
                background:#F5F5F5;
                border-radius:10px;
                font-size: 12px;
                color: #9A9A9A;
                line-height: 20px;
                text-align: center;
            }
        }
        .subtitle{
            font-size: 12px;color:#333;
            margin-top: 19px;
            line-height: 21px;
        }
        .content{
            font-size: 12px;color:#999;line-height: 21px;
        }
    }
}  
</style>
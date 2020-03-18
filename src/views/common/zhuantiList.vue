<template>
    <div class="zhuanti_box">
        <router-link to="/zixun/zhuantiDetails" class="zhuanti_item">
            <img class="zhuanti_img" src="@/assets/zixun/pic.png" alt="">
            <p class="zhuanti_title">快看 | A股三大股指全线反弹 基建地产股走强 房地 产开发板块近20日涨幅已超10%</p>
            <div class="zhuanti_data">
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
.zhuanti_box{
    padding-bottom: 45px;
    .zhuanti_item{
        display: block;
        width: 100%;
        position: relative;
        .zhuanti_img{
            display: block;
            width: 100%;
            height: 210px;
        }
        .zhuanti_title{
            font-size: 16px;color: #333;text-align: left;line-height: 22px;
            padding: 14px 10px;
        }
        .zhuanti_data{
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
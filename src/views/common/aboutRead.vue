<template>
    <div class="aboutRead_box">
        <h4 class="head">相关阅读</h4>
        <router-link to="" class="item_views">
            <div class="content">
                <div class="left">
                    <p class="title">销售、融资、拿地 房企积极复工对冲疫情影响</p>
                    <div class="views_data">
                        <span class="tag">城市与区域</span>
                        <p v-show="false" class="time"><img src="@/assets/zixun/time.png" alt="">2020-02-04</p>
                        <p class="eyes"><img src="@/assets/zixun/eyes.png" alt="">1234</p>
                    </div>
                </div>
                <img class="right" src="@/assets/zixun/brand_pic.png" alt="">
            </div>
        </router-link>
        <router-link to="" class="item_views">
            <div class="content">
                <div class="left">
                    <p class="title">销售、融资、拿地 房企积极复工对冲疫情影响</p>
                    <div class="views_data">
                        <span v-show="false" class="tag">城市与区域</span>
                        <p class="time"><img src="@/assets/zixun/time.png" alt="">2020-02-04</p>
                        <p class="eyes"><img src="@/assets/zixun/eyes.png" alt="">1234</p>
                    </div>
                </div>
                <img class="right" src="@/assets/zixun/brand_pic.png" alt="">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.aboutRead_box{
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
    .item_views{
        display: block;
        border-bottom: 1px solid #F0F0F0;
        padding-top: 15px;
        padding-bottom: 10px;
        &:last-of-type{
            border-bottom: 0;
        }
        .content{
            display: flex;
            justify-content: space-between;
            .left{
                width: 212px;
                text-align: left;
                .title{
                    font-size: 16px;color: #333;
                    margin-bottom: 10px;
                }
                .views_data{
                    display: flex;
                    .tag{
                        display: block;padding: 5px 10px;font-size: 11px;color: #1379F0;
                        background:rgba(19,121,240,.1);
                        margin-right: 40px;

                    }
                    .time,.eyes{
                        font-size: 10px;color:#ccc;
                        display: flex;
                        align-items: center;
                        margin-right: 40px;
                        img{
                            display: block;width: 15px;height: 15px;margin-right: 5px;
                        }
                    }
                    .eyes{
                        margin-right: 0;
                    }
                }
            }
            .right{
                display: block;
                width: 117px;height: 72.5px;
            }
        }
    }
}
</style>
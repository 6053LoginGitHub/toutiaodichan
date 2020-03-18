<template>
    <div class="bangdanRead_box">
        <div class="read_list">
            <h4 class="head">榜单解读</h4>
            <router-link to="" class="item">
                <div class="content">
                    <p class="title">白俄罗斯第一副总理图尔钦会见张玉良董事长</p>
                    <img class="item_img" src="@/assets/bangdan/brand_pic.png" alt="">
                </div>
            </router-link>
            <router-link to="" class="item">
                <div class="content">
                    <p class="title">白俄罗斯第一副总理图尔钦会见张玉良董事长</p>
                    <img class="item_img" src="@/assets/bangdan/brand_pic.png" alt="">
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.bangdanRead_box{
    padding: 10px;
    .read_list{
        width: 100%;
        background: #fff;
        margin-bottom: 50px;
        box-sizing: border-box;
        .head{
            display: flex;
            align-items: center;
            text-align: left;font-size: 16px;font-weight: bold;
            padding-top: 16px;padding-bottom: 5px;
            line-height: 16px;
            &::before{
                content: "";
                display: block;width:5px;height:16px;
                background: #F2090C;
                border-radius:2.5px;
                margin-right: 11.5px;
            }
        }
        .item{
            display: block;
            padding:17px 0;
            border-bottom: 1px solid #F0F0F0;
            .content{
                display: flex;
                justify-content: space-between;
                padding-left: 17px;
                padding-right: 13px;
                .title{
                    text-align: left;font-size: 16px;color: #333;line-height: 22px;
                }
                .item_img{
                    width: 50px;height: 50px;display: block;
                    margin-left: 22px;
                }
            }
        }
    }
}
</style>
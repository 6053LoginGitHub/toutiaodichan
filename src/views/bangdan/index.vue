<template>
    <div class="bangdanIndex_box">
        <van-tabs v-model="bangdan_active">
            <van-tab v-for="(item,i) of tab_list" :key="i" :title="item">
                <div class="tab_content" v-if="i==0">
                    <brand-list></brand-list>
                    <div class="space_line"></div>
                    <bangdan-read></bangdan-read>
                </div>
                <div class="tab_content" v-if="i==1">
                    <city-list></city-list>
                    <div class="space_line"></div>
                    <bangdan-read></bangdan-read>
                </div>
            </van-tab>
        </van-tabs>
        <tabbar :parActive="2"></tabbar>
    </div>
</template>
<script>
import tabbar from '@/views/common/tabbar'
import brandList from '@/views/common/brandValueList'
import cityList from '@/views/common/cityList'
import bangdanRead from '@/views/common/bangdanRead'
export default {
    data(){
        return{
            tab_list:['品牌价值榜','城市排行榜','中国好房子'],
            bangdan_active:1,
        }
    },
    components:{
        tabbar,
        brandList,
        bangdanRead,
        cityList
    }
}
</script>
<style lang="scss">
.bangdanIndex_box{
    .van-tabs__nav{
        display: flex;
        justify-content: space-around;
        // padding-right: 10px;
        padding-bottom: 0;
        .van-tab{
            color: #999;font-size: 15px;
        }
        .van-tab--active{
            color: #333;
            .van-tab__text{
                display: block;
                position: relative;
                flex-basis: 0;
                width: min-content;
                margin: 0 auto;
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    background: url('../../assets/report/circul.png') no-repeat;
                    background-size: 100% 100%;
                    width: 8px !important;height: 8px;
                    top: 10px;
                    right: -10px;
                }
            }
        }
    }
    .van-tabs__line{
        display: none;
    }
    .tab_content{
        width: 100%;
        min-height: 600px;
        background: rgb(242,242,242);
        box-sizing: border-box;
        .space_line{
            width: 100%;
            height: 10px;
            background: rgb(242,242,242);
        }
    }
}
</style>
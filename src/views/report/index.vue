<template>
    <div class="reportIndex_box">
        <van-tabs v-model="report_active">
            <van-tab v-for="(item,i) of tab_list" :key="i" :title="item">
                <report-item></report-item>
            </van-tab>
        </van-tabs>
        <tabbar :parActive="1"></tabbar>
    </div>
</template>
<script>
import tabbar from '@/views/common/tabbar'
import reportItem from '@/views/common/reportItem'
export default {
    data(){
        return{
            tab_list:['房企','城市区域','政策研究','市场报告'],
            report_active:0,
        }
    },
    components:{
        tabbar,
        reportItem
    }
}
</script>
<style lang="scss">
.reportIndex_box{
    .van-tabs__nav{
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
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
}
</style>
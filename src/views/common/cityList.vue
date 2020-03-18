<template>
    <div class="cityList_box">
        <div class="city_bg">
            <p class="title">城市排行榜</p>
            <p class="time">最后更新于  2020-03-02</p>
        </div>
        <div class="city_list">
            <div class="content">

                <div class="head">
                    <p class="ranking">排名</p>
                    <p class="city">城市</p>
                    <p class="price">平均房价(元/㎡)</p>
                </div>
                <div v-show="i<city_size" class="item" v-for="(item,i) of city_list" :key="i">
                    <img v-if="i==0" class="ranking" src="@/assets/bangdan/city_no1.png" alt="">
                    <img v-if="i==1" class="ranking" src="@/assets/bangdan/city_no2.png" alt="">
                    <img v-if="i==2" class="ranking" src="@/assets/bangdan/city_no3.png" alt="">
                    <p v-if="i>2" class="ranking">{{i+1}}</p>
                    <p class="city">{{item.city}}</p>
                    <p class="price">{{item.price}}</p>
                </div>
                <div v-if="city_size==5" class="more_city" @click="showMoreCity">
                    <p>余下{{city_list.length-5}}名</p>
                    <img class="icon_down" src="@/assets/bangdan/icon_down.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            city_list:[
                {city:'重庆',price:'65430'},
                {city:'北京',price:'65430'},
                {city:'上海',price:'65430'},
                {city:'深圳',price:'65430'},
                {city:'昆明',price:'65430'},
                {city:'成都',price:'65430'},
                {city:'丽江',price:'65430'},
                {city:'成都',price:'65430'},
            ],
            city_size:5,
        }
    },
    methods:{
        showMoreCity(){
            this.city_size=10
        }
    }
}
</script>
<style lang="scss">
.cityList_box{
    .city_bg{
        width: 100%;
        height: 182.5px;
        background: url('../../assets/bangdan/city_bg.png') no-repeat;
        background-size: 100% 100%;
        text-align: left;
        .title{
            font-size: 32px;color:#fff;padding-top: 63px;margin-left: 23px;
        }
        .time{
            font-size: 15px;color:#fff;margin-top: 11px;margin-left: 23px;
        }
    }
    .city_list{
        margin: 0 10px;
        background: #fff;
        margin-top: -30px;

        .content{
            width: 100%;
            .head{
                display: flex;
                justify-content: space-between;
                font-size: 12px;color: #999;
                padding: 0 14.5px;
                padding-top: 15px;
                .ranking{
                    width: 24px;
                }
                .city{
                    width: 100px;
                }
                .price{
                    width: 100px;
                }
            }
            .item{
                height: 52px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #F2F2F2;
                margin: 0 14.5px;
                &:last-of-type{
                    border-bottom: 0;
                }
                .ranking{
                    width: 15px;
                    height: 25.5px;
                    margin-left: 5px;
                    margin-right: 4px;
                    font-size: 12px;color: #666;
                }
                .city{
                    width: 100px;font-size: 13px; color: #666;
                }
                .price{
                    width: 100px;font-size: 13px; color: #666;
                }
            }
            .more_city{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 36px;
                font-size: 13px;color: #EE5959;
                padding-left: 21px;
                padding-right: 17px;
                .icon_down{
                    display: block;width: 9px;height: 5px;
                }
            }
        }
    }
}
</style>
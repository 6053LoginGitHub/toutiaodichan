<template>
    <div class="brandList_box">
        <div class="brand_list">
            <router-link v-show="i<brand_size" to="" class="brand" v-for="(item,i) of brandList" :key="i">
                <div class="content">
                    <div class="left">
                        <img class="brand_img" src="@/assets/bangdan/brand.png" alt="">
                        <div class="brand_content">
                            <p class="brand_name">{{item.brand_name}}</p>
                            <p class="time">统计时间：{{item.time}}</p>
                        </div>
                    </div>
                    <img v-if="i==0" class="ranking" src="@/assets/bangdan/brand_no1.png" alt="">
                    <img v-if="i==1" class="ranking" src="@/assets/bangdan/brand_no2.png" alt="">
                    <img v-if="i==2" class="ranking" src="@/assets/bangdan/brand_no3.png" alt="">
                    <div v-if="i>2" class="ranking"><i class="mark"></i>{{i+1}}</div>
                </div>
            </router-link>
            <div v-if="brand_size==5" class="more_brand" @click="showMoreBrand">
                <p>余下{{brandList.length-5}}名</p>
                <img class="icon_down" src="@/assets/bangdan/icon_down.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            brandList:[
                {brand_name:'中国奥园集团股份有限公司',time:'2020-03'},
                {brand_name:'祥生地产集团有限公司',time:'2020-03'},
                {brand_name:'上海中建东孚投资发展有限公司',time:'2020-03'},
                {brand_name:'佳兆业集团控股有限公司',time:'2020-03'},
                {brand_name:'金辉集团股份有限公司',time:'2020-03'},
                {brand_name:'中国奥园集团股份有限公司',time:'2020-03'},
                {brand_name:'上海中建东孚投资发展有限公司',time:'2020-03'},
            ],
            brand_size:5,
        }
    },
    methods:{
        showMoreBrand(){
            this.brand_size=10
        }
    }
}
</script>
<style lang="scss">
.brandList_box{
    padding: 10px;
    .brand_list{
        width: 100%;
        background: #fff;
        padding-top: 5px;
        
        .brand{
            display: block;
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #F0F0F0;
            .content{
                width:100%;height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    display: flex;
                    .brand_img{
                        width: 50px;height: 50px;display: block;margin-left: 15px;
                        margin-right: 11.5px;
                    }
                    .brand_content{
                        text-align: left;
                        .brand_name{
                            font-size: 15px;
                            color: #333;
                            margin-bottom: 5px;
                            margin-top: 3px;
                        }
                        .time{
                            font-size: 11px;color: #999;
                        }
                    }
                }
                .ranking{
                    display: block;
                    width: 26.5px;height: 30.5px;margin-right: 12px;
                    position: relative;
                    font-size: 12px;color:#E37400;
                    line-height: 31px;
                    .mark{
                        width: 18.5px;height: 21px;display: block;
                        background: url('../../assets/bangdan/brand_no.png') no-repeat;
                        background-size: 100% 100%;
                        position: absolute;top: 50%;left: 50%;
                        transform: translate(-50%,-50%);
                    }
                }
            }
        }
        .more_brand{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 36px;
            font-size: 13px;color: #1379F0;
            padding-left: 21px;
            padding-right: 17px;
            .icon_down{
                display: block;width: 9px;height: 5px;
            }
        }
    }
}
</style>
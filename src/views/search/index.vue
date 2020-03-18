<template>
    <div class="search_box">
        <div class="header container">
            <label class="search">
                <img src="@/assets/zixun/icon_ser.png" alt="">
                <input v-model="search_val" type="text" placeholder="输入关键词搜索">
            </label>
            <a v-if="!search_val" @click="$router.push('/zixun/index')" class="right_text">取消</a>
            <a v-else class="right_text">搜索</a>
        </div>
        <div class="space_line"></div>
        <div v-show="false" class="history tags_box container">
            <p class="title">搜索历史</p>
            <div class="tags">
                <van-tag class="tag" round>个税</van-tag>
                <van-tag class="tag" round>所得税</van-tag>
            </div>
        </div>
        <div v-show="false" class="history tags_box container">
            <p class="title">热门词</p>
            <div class="tags">
                <van-tag class="tag" round>个税</van-tag>
                <van-tag class="tag" round>刘强东blabla...</van-tag>
                <van-tag class="tag" round>个税</van-tag>
            </div>
        </div>
        <!-- 搜索结果 -->
        <div class="result_list container">
            <p class="notice">
                为您搜索到“ <span class="key">{{search_val}}</span> ”关键词 <span class="key">4</span> 调数据
            </p>
            <div class="data_list">
                <div class="item_box">
                    <div class="item_left">
                        <p class="title">楼市春困房企自救：把失去的时间夺回来</p>
                        <div class="content">
                            <div class="time content_data"><img src="@/assets/zixun/time.png">2020-02-24</div>
                            <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                        </div>
                    </div>
                    <img class="item_right" src="@/assets/zixun/time.png" alt="">
                </div>
                <div class="item_box">
                    <div class="item_left">
                        <p class="title">楼市春困房企自救：把失去的时间夺回来</p>
                        <!-- <p class="title" v-html="words"></p> -->
                        <div class="content">
                            <div class="time content_data"><img src="@/assets/zixun/time.png">2020-02-24</div>
                            <div class="eyes content_data"><img src="@/assets/zixun/eyes.png">202</div>
                        </div>
                    </div>
                    <img class="item_right" src="@/assets/zixun/time.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            search_val:'',
        }
    },
    components:{
        
    },
    created(){
        // this.changeKeyWords('你好啊盆友！')
        
    },
    methods:{
        //关键字变蓝
        changeKeyWords(str){
            let srtEndIndex = str.indexOf(this.search_val) + this.search_val .length;
            let srtStartIndex = str.indexOf(this.search_val );
            let newStr = str.substring(0, srtEndIndex) + "</span>" + str.substring(srtEndIndex);
            console.log(newStr)
            newStr = newStr.substring(0, srtStartIndex) + '<span style="color:#1379F0">' + newStr.substring(srtStartIndex);
            this.words=newStr
        }
    }

}
</script>
<style lang="scss">
.search_box{
    .container{
        padding: 0 10px;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .search{
            width: 310px;
            height: 30px;
            border-radius: 15px;
            background:rgba(242,242,242,.48);
            display: flex;
            align-items: center;
            img{
                width: 25px;height: 25px;display: block;margin-left: 7.5px;margin-right: 10px;
            }
            input{
                border:0;
                background: none;
                font-size: 12px;
                &::placeholder{
                    color:#999;
                }
            }
        }
        .right_text{
            font-size: 15px;color: #333;width:60px;display: block;
        }
    }
    .space_line{
        width: 100%;
        height: 1px;
        background: #F2F2F2;
        margin-top: 7px;
    }
    .tags_box{
        color:#999;
        text-align: left;
        .title{
            font-size: 13px;margin: 19px 0 15px;
        }
        .tags{
            .tag{
                height:25px;
                background:#F2F2F2;
                border-radius:12.5px;
                padding:0 18px;
                color:#999;
                font-size: 13px;
                margin-right: 17.5px;
                margin-bottom: 15px;
            }
        }
    }
    .result_list{
        .notice{
            font-size: 12px;
            color: #999;
            margin: 13px 0;
            .key{
                color: #333;
            }
        }
        .item_box{
            width: 100%;
            display: flex;justify-content: space-between;
            border-bottom: 1px solid #F0F0F0;
            margin-top: 10px;
            .item_left{
                width: 223px;
                &.img_null{
                    width: 100%;
                }   
                .title{
                    font-size: 16px;color: #333;line-height: 22px;width: 100%;text-align: left;
                }
                .content{
                    display: flex;color: #ccc;
                    .content_data{
                        display: flex;
                        font-size: 10px;
                        color: #ccc;
                        width:auto;
                        align-items: center;
                        margin-right:42px;
                        margin-top:10px;
                        margin-bottom: 15px;
                        line-height: 20px;
                        img{
                            display: block;width: 15px;height: 15px;margin-right: 7px;
                        }
                    }
                }
            }
            .item_right{
                display: block;width: 117px;height: 72.5px;
            }
            
        }
    }
}
</style>
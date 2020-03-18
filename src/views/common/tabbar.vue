<template>
    <div class="common_tabbar">
        <!-- <div style="height:60px; background-color: #F5F5F5;"></div> -->

        <van-tabbar class="tab_box" v-model="active" active-color="#16B0B7" @change="changeTab">
            <van-tabbar-item class="tab_router" v-for="(val,i) in tablist" :key="i" :to="val.path" >
                <img slot="icon" :src="parActive==i?val.img_on:val.img">
                <p>{{ val.title }}</p>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    props: {
        parActive:{
            type:Number,
            default:0
        }
    },
    data() {
      return {
        title : '公共底部',
        active:0,
        tablist :[
            {
                title:'资讯',
                path:'/zixun/index',
                img:require('../../assets/tabbar/icon_home.png'),
                img_on:require('../../assets/tabbar/icon_home_on.png'),
            },
            {
                title:'报告',
                path:'/report/index',
                img:require('../../assets/tabbar/icon_bg.png'),
                img_on:require('../../assets/tabbar/icon_bg_on.png'),
            },
            {
                title:'榜单',
                path:'/bangdan/index',
                img:require('../../assets/tabbar/icon_bd.png'),
                img_on:require('../../assets/tabbar/icon_bd_on.png'),
            },
            {
                title:'品牌',
                path:'/brand/index',
                img:require('../../assets/tabbar/icon_pp.png'),
                img_on:require('../../assets/tabbar/icon_pp_on.png'),
            },
            {
                title:'我的',
                path:'/member/index',
                img:require('../../assets/tabbar/icon_my.png'),
                img_on:require('../../assets/tabbar/icon_my_on.png'),
            },
        ]
      }

    },
    created(){
        console.log(this.parActive)

        var isactive = this.parActive;
        if(!isactive && isactive != 0){
            isactive =  parseInt(localStorage.getItem('isactive'));
        }
        this.active = isactive?isactive:0;
    },
    activated(){
        var isactive = this.parActive;
        if(!isactive && isactive != 0){
            isactive = parseInt(localStorage.getItem('isactive'));
        }
        this.active = isactive?isactive:0;
    },
    methods:{
      jumpurl(path){
        this.$router.push(path)
      },
      changeTab(e){
          localStorage.setItem('isactive',e);
      }
    }
}
</script>
<style lang="scss">
.tab_box{display:flex;justify-content:center;font-size:12px;height: 45px;border-top:1px solid #F2F2F2;
    .tab_router{
        width:20%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items: center;
        padding: 5px 0;
        color: #CCC;
        .van-tabbar-item__text {
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            i {
                font-size: 15px;
                margin-bottom: 6px;
            }
            p{
                margin: 0;
                color: #333;
            }
        }
        &.router-link-active{color: rgb(22, 176, 183);}
    }
}

</style>

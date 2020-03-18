<template>
    <div class="tabbarOpen_box" >
        <common-nav :right_src="''"></common-nav>
        <p class="head">所有频道</p>
        <p class="subhead">点击进入频道</p>
        <div class="channel">
            <p @click="goZixunIndex(i)" class="item" v-for="(tab,i) of tab_list" :key="i">{{tab}}</p>
        </div>
    </div>
</template>
<script>
import commonNav from '@/components/navBar.vue'
export default {
    data(){
        return{
            tab_list:[]
        }
    },
    components:{
        commonNav
    },
    mounted(){
        var query=this.$route.query
        this.tab_list=query.tab_list

    },
    methods:{
        goZixunIndex(i){
            localStorage.setItem('tag-active',i)
            this.$router.push('/zixun/index')
        }
    }
}
</script>
<style lang="scss">
.tabbarOpen_box{
    text-align: left;
    .head{
        padding: 0 10px;
        font-size: 18px;color: #333;
        margin-top: 10px;
    }
    .subhead{
        margin: 0 10px;
        font-size: 12px;color:#999;
        margin-bottom: 32px;
        margin-top: 5px;
    }
    .channel{
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        .item{
            width:70px;
            height:30px;
            background:#F5F5F5;
            border-radius:1.5px;
            font-size: 13px;text-align: center;
            line-height: 30px;
            color: #999;
            margin-bottom: 19px;
            margin-right: 25px;
            &:nth-of-type(4n){
                margin-right: 0;
            }
        }
    }
}   
</style>
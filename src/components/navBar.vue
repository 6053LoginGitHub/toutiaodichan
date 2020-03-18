<template>
    <div class="common_nav" :style="`background:${background}`" :class="{ fixed : fixed }">
        <img v-if="left_src" class="icon_left" :src="left_src" @click="goBackFn">
        <div v-else class="icon_left"></div>
        <p class="title">{{title}}</p>
        <img v-if="right_src" class="icon_right" :src="right_src" @click="shareFn">
        <div v-else class="icon_right"></div>

    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        left_src:{
            default:require('@/assets/zixun/icon_bacn.png')
        },
        right_src:{
            default:require('@/assets/zixun/icon_share.png')
            // default:''
        },
        background:{
            default:'#fff'
        },
        fixed:{
            default:false
        }
    },
    methods:{
        goBackFn(){
            this.$router.go(-1);
        },
        shareFn(){
            this.$emit('rightClick')
        }
    }
}
</script>
<style lang="scss">
.common_nav{
    width:100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.fixed{
        position: fixed;z-index: 1001;
    }
    .icon_left{
        width: 25px;height: 25px;display: block;
        margin-left: 7px;
    }
    .title{
        font-size: 18px;color: #333;
    }
    .icon_right{
        width: 25px;height: 25px;display: block;
        margin-right: 7px;
    }
}
</style>
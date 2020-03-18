<template>
  <div class="zixun_box">
    <div class="header">
      <img class="logo" src="@/assets/zixun/logo.png" alt="">
      <router-link class="search" to="/search/index">
        <div class="mark"></div>
        <img class="search_img" src="@/assets/zixun/search_icon.png" alt="">
        <input class="search_input" type="text" placeholder="输入关键词搜索">
      </router-link>
    </div>
    <van-tabs v-model="active" @change="changeStatus">
      <img class="menu" @click="goTabnavOpen" src="@/assets/zixun/icon_meun.png" alt="">
      <van-tab v-for="(item,i) of tab_list" :title="item" :key="i">
        <zixun-index v-show="i<6" :item="infoData"></zixun-index>
        <video-list v-show="i==6" :item="infoData"></video-list>
        <zhuanti-list v-show="i==7" :item="infoData"></zhuanti-list>
      </van-tab>
    </van-tabs>
    
    <tabbar :parActive="0"></tabbar>
  </div>
</template>

<script>
import tabbar from '@/views/common/tabbar.vue'
import zixunIndex from '@/views/common/zixunIndex.vue'
import videoList from '@/views/common/videoList.vue'
import zhuantiList from '@/views/common/zhuantiList.vue'
export default {
  data(){
    return {
      search_val:'',
      tab_list:['首页','房企','政策','市场','土地','深度','视频','专题'],
      infoData:[{img_path:require('../../assets/zixun/pic.png')},{img_path:require('../../assets/zixun/pic.png')}],
      active:0,//分类标签激活索引
    }
  },
  components:{
    tabbar,
    zixunIndex,
    videoList,
    zhuantiList
  },
  mounted(){
    this.active=parseInt(localStorage.getItem('tag-active'))
  },
  methods:{
    changeStatus(){
      localStorage.setItem('tag-active',this.active)
    },
    //跳转资讯导航页
    goTabnavOpen(){
      this.$emit('handleTabnavMenu',111)
      this.$router.push({
        url:'/zixun/index',
        name:'tabnavMenu',
        query:{
          tab_list:this.tab_list
        }
      })
    }
  },
  watch:{
    
  }
}
</script>

<style lang="scss">
.zixun_box{
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    background: #1478F0;
    position:fixed;
    z-index:1001;
    .logo{
      width: 35px;
      height: 35px;
      display: block;
      margin-left: 8px;
      margin-right: 11px;
    }
    .search{
      width: 82%;
      height: 30px;
      box-sizing: border-box;
      // background: #fff;
      // opacity: 0.48;
      display: flex;
      align-items: center;
      position: relative;
      .mark{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: #fff;
        opacity: 0.48;
        position: absolute;
        top: 0;
      }
      .search_img{
        width: 21px;
        height: 21px;
        display: block;
        opacity: 1;
        margin-left: 14px;
        margin-right: 14px;
      }
      .search_input{
        width: 37%;
        background: none;
        outline: 0;
        border: 0;
        font-size: 12px;
        color: #fff;
        &::placeholder{
          color: #fff;
          opacity: 1;
          z-index: 1000;
        }
      }
    }
  }
  .van-tabs__wrap--scrollable{
    padding-left:10px;
    padding-right:35px;
    background: #fff;
    padding-top:44px;
    .van-tab{
      flex-basis: 40px !important;
      padding: 0;
      display: flex;
      font-size: 17px;
      color: #999;
      &:nth-last-of-type(){
       padding-right: 50px;

      }
      &.van-ellipsis{
        flex-basis: 36px;
        display: flex;
        margin-right: 31px;
        
      }
      &.van-tab--active{
        color: #333;
      }
    }
    .van-tabs__nav{
      position: relative;
      padding-bottom: 0;
    }
    .van-tabs__line{
      background-color: #1478F0;
      width: 13px !important;
      height: 2px;
      bottom: 5px;
      left: -3px;
    }
    
  }
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
    border-width:0;
  }
  .menu{
    width: 20px;height: 20px;display: block;position: absolute;
    right: 5px;
    top: 55px;
    background: #fff;
    box-shadow: 0 0 10px 10px #fff;
  }
}
</style>
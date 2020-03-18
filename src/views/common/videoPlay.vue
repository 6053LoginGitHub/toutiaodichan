<template>
    <div class="commonVideo" ref="playerHeight" :style="`height:${videoHeight}px`">
      <d-player class="news_view_dplayer" :class="isWerxi ? '' : 'news_view_fullscreen'" ref="player" :style="`height:${videoHeight}px`" @play="play" @pause="pause" @fullscreen="fullscreen" :logo="logo" :lang="lang" :video="video" :contextmenu="contextmenu"></d-player>
    </div>
</template>

<script>
import VueDPlayer from '@/components/VueDPlayerHls';
import defImg from '@/assets/zixun/back_w.png';
export default {
    name: 'commonVideo',
    components: {
    'd-player': VueDPlayer
    },
    props: {
    videoid: {
        type: String,
        default: ''
    },
    coverImg:{
        type:String,
        default:''
    }
    },
    data () {
        return {
            videoWidth:0,
            videoHeight:0,
            video: {
            quality: [{
                name: '默认',
                url: '',
            }],
            pic: defImg,
            defaultQuality: 0,
            thumbnails: '',
            type: 'hls'
            },
            lang: 'zh-cn',
            logo: '',
            autoplay: false,
            player: null,
            contextmenu: [],
            // 判断是否是微信浏览器
            isWerxi: false,
        }
    },
    created(){
        let l = 1080 / 1920;
        this.videoWidth = document.body.clientWidth;
        this.videoHeight = this.videoWidth * l;

        // 判断是否是微信浏览器
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        // 微信浏览器
            this.isWerxi = false;
        }else{
        // 其它浏览器
            this.isWerxi = true;
            // return false;
        }
    },
    updated(){
    },
    watch: {
        videoid (val) {
            this.playerload(val);
        }
    },
    mounted() {
    
        this.player = this.$refs.player.dp;
        this.getPlayerHeight();
        this.playerload(); //测试dplay

        if (!this.videoid) return;
        this.playerload(this.videoid);
        // var hls = new Hls();
        // hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
        // hls.attachMedia(this.player);
    },
    methods: {
        play() {
        // console.log('开始播放...')
        },
        getPlayerHeight(){
        //this.videoHeight = `height:`+(this.$refs.playerHeight.offsetHeight+41/2-10)+'px;' ;
        },
        playerload(){
        //   this.pause();
        //   this.$http.get('v2/homes/videourl',{'videoid':videoid}).then(
        //     res => {
        //       if(!res){
        //           return false;
        //       }
        //       var videoUrl = res.data.playlist.PlayURL;
        //       if(!videoUrl){
        //           return false;
        //       }

        //       this.player.switchVideo({
        //         url: videoUrl,
        //         pic:this.coverImg,
        //       });
        //       this.player.seek(0);

        //   });
            this.player.switchVideo({
                url: require('@/assets/1.mp4'),
                pic:'',
            });
            this.player.seek(0);
        },
        // 暂停时间
        pause() {
            this.player.pause();
            this.$emit('pause', this.player.video.currentTime);
        },
        fullscreen() {
            console.log('全屏');
            this.player.fullScreen.request('web');
        }
    },
 
}
</script>

<style lang="scss" scoped>
.news_view_dplayer{
  width: 100%;
  box-shadow:0 0 5px rgba(0, 0, 0, 0.3);
}
</style>

<style>
.news_view_dplayer .dplayer-controller{
  padding: 0px 0px;
}
.news_view_dplayer .dplayer-controller .dplayer-bar-wrap{
  width:100%;
}
.news_view_dplayer .dplayer-controller .dplayer-icons .dplayer-setting, .dplayer-controller .dplayer-icons .dplayer-subtitle-btn{
  display: none;
}
.news_view_fullscreen .dplayer-controller .dplayer-icons .dplayer-full, .dplayer-full-icon{
  display: none;
}
.news_view_dplayer .dplayer-controller .dplayer-icons .dplayer-quality{
  display: none;
}
.news_view_dplayer.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{
  display: none;
}
.news_view_dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right{
  right: 5px;
}
.news_view_dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{
  background: hsla(0,0%,100%,.4);
  transition: all .5s ease;
}
</style>
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zixun/index',
      name : 'zixunindex',
      component: resolve => require(['@/views/zixun/index'],resolve),
      meta: {
          title: '资讯首页',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/zixun/tabnavMenu',
      name : 'tabnavMenu',
      component: resolve => require(['@/views/zixun/tabnavMenu'], resolve),
      meta: {
          title: '资讯导航',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/search/index',
      name : 'searchindex',
      component: resolve => require(['@/views/search/index'], resolve),
      meta: {
          title: '搜索',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/zixun/videoDetails',
      name : 'videoDetails',
      component: resolve => require(['@/views/zixun/videoDetails'], resolve),
      meta: {
          title: '视频详情',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/zixun/zixunDetails',
      name : 'zixunDetails',
      component: resolve => require(['@/views/zixun/zixunDetails'], resolve),
      meta: {
          title: '资讯详情',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/report/index',
      name : 'reportindex',
      component: resolve => require(['@/views/report/index'], resolve),
      meta: {
          title: '报告首页',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/bangdan/index',
      name : 'bangdanindex',
      component: resolve => require(['@/views/bangdan/index'], resolve),
      meta: {
          title: '榜单首页',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/brand/index',
      name : 'brandindex',
      component: resolve => require(['@/views/brand/index'],resolve),
      meta: {
          title: '品牌首页',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/brand/brandDetails',
      name : 'brandDetails',
      component: resolve => require(['@/views/brand/brandDetails'],resolve),
      meta: {
          title: '品牌首页',
          index: 1,
          keepAlive: false
      }
    },
    {
      path: '/member/index',
      name : 'memberindex',
      component: resolve => require(['@/views/member/index'],resolve),
      meta: {
          title: '我的首页',
          index: 1,
          keepAlive: false
      }
    },
  ]
})

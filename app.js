// app.js
App({
  // 全局转发配置
  onShareAppMessage() {
    return {
      title: '分享小程序', // 转发标题
      path: '/pages/index/index' // 转发路径，默认首页
    }
  }
})

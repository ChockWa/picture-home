//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    sysInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    picList: [
      { 'image': 'https://dumpt.com/img/files/qyu2v6k21d763g98andx.png' },
      { 'image': 'https://dumpt.com/img/files/qyu2v6k21d763g98andx.png' },
      { 'image': 'https://dumpt.com/img/files/qyu2v6k21d763g98andx.png' }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getSysInfo: function(e) {
    wx.getSystemInfo({
      success: function (res) {
        this.sysInfo.model = res.model
        this.sysInfo.pixelRatio = res.pixelRatio
        this.sysInfo.windowWidth = res.windowWidth
        this.sysInfo.windowWidth = res.windowWidth
        this.sysInfo.language = res.language
        this.sysInfo.version = res.version
      }
    }) 
  }
})
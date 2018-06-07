// pages/me/me.js
//获取应用实例
const app = getApp()
const userAuth = require('../../utils/userAuth.js')
const toastUtil = require('../../utils/toastUtil.js')
const userService = require('../../api/user.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isLogin: false, // 是否已经登录
    userInfo: {}  // 用户信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，进行登录
          userAuth.getLoginCode().then((code) => {
            userService.loginWithCode({code:code}).then((response => {
              console.log(response)
              if (response.code !== 0) {
                toastUtil.errorMsg(response.msg)
                return
              }
            }))
          }).catch((e) => {
            toastUtil.errorMsg(e)
          })
          // 调用 getUserInfo 获取头像昵称
          _this.getUserInfo()
          _this.setData({
            isLogin: true,
            canIUse: false,
          })
        }
      }
    })    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 获取用户信息
   */
  getUserInfo: function (e) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
    }
  },
  bindGetUserInfo: function (e) {
    // 如果允许授权，才有用户信息
    if (e.detail.userInfo) {
      // 进行登录
      userAuth.getLoginCode().then((code) => {
        console.log(code)
      }).catch((e) => {
        toastUtil.errorMsg(e)
      })
      // 把用户信息放入全局变量
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        isLogin: true,
        canIUse: false,
        userInfo: e.detail.userInfo
      })
    }
  }
})
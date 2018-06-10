// pages/picDetail/picDetail.js
const imageService = require('../../api/image.js')
const toastUtil = require('../../utils/toastUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    // 是否是vip
    isVip: false,
    isLogin: false,
    title: '',
    subtitle: '',
    picList: [
      // { "id": 1, "url": "http://i67.tinypic.com/2h3zclv.jpg", "title": "XXXXXXXXXX" },
      // { "id": 2, "url": "http://i67.tinypic.com/2h3zclv.jpg", "title": "XXXXXXXXXX" },
      // { "id": 1, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 2, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 3, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 4, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 5, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 6, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 7, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 8, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 9, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 10, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sourceId = options.sourceId
    this.getImageDetail(sourceId)
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

  getImageDetail(imageId) {
    imageService.getImageDetail({ sourceId: imageId}).then((response) => {
      if (response.code === 0) {
        const result = response.data
        this.setData({
          total: result.total,
          title: result.title,
          subtitle: result.subtitle,
          picList: result.sourceList
        })
      } else {
        toastUtil.errorMsg(response.msg)
      }
    }).catch((e) => {
      toastUtil.errorMsg(e)
    })
  },
  /**
   * 图片预览
   */
  previewPic: function (e) {
    var index = e.target.dataset.index
    wx.previewImage({
      current: this.data.picList[index],
      urls: this.data.picList
    })
  }
})
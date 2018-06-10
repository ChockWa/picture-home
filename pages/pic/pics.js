// pages/pic/pics.js
const pageUtil = require('../../utils/pageUtil.js')
const imageService = require('../../api/image.js')
const toastUtil = require('../../utils/toastUtil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: '',
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
      // { "id": 10, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 11, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      // { "id": 12, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" }
    ],
    countries: [
      {
        id: 1,
        name: '美国'
      },
      {
        id: 2,
        name: '中国'
      },
      {
        id: 3,
        name: '巴西'
      },
      {
        id: 4,
        name: '日本'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取资源列表
    this.getImages()
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

  previewPic: function (e) {
    var currentImg = e.currentTarget.dataset.img
    let imgs = []
    for (var i in this.data.picList) {
      imgs.push(this.data.picList[i].url)
    }
    wx.previewImage({
      current: e.currentTarget.dataset.img,
      urls: imgs
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 获取资源列表
   */
  getImages() {
    imageService.getImages().then((response) => {
      if (response.code === 0) {
        this.setData({
          picList: response.data.result
        })
      } else {
        toastUtil.errorMsg(response.msg)
      }
    }).catch((e) => {
      toastUtil.errorMsg(e)
    })
  },
  /**
   * 获取资源详情
   */
  getImageDetail(e) {
    const imageId = e.detail.imageId
    const params = {
      "sourceId": imageId
    }
    pageUtil.toPage('../picDetail/picDetail', params)
  }
})
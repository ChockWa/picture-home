// pages/picDetail/picDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否是vip
    isVip: false,
    isLogin: false,
    picList: [
      // { "id": 1, "url": "http://i67.tinypic.com/2h3zclv.jpg", "title": "XXXXXXXXXX" },
      // { "id": 2, "url": "http://i67.tinypic.com/2h3zclv.jpg", "title": "XXXXXXXXXX" },
      { "id": 1, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 2, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 3, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 4, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 5, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 6, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 7, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 8, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 9, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" },
      { "id": 10, "url": "https://dumpt.com/img/files/l8rtlw3ro9pif9ioante.png", "title": "XXXXXXXXXX" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  getImageDetail(options) {
    console.log(options)
  }
})
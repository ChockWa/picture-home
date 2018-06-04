// components/imageList/image-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    originList: {
      type: Array,
      value: []
    },
    // 图片url对应的字段名
    urlName: {
      type: String,
      value: ''
    },
    // 标题对应的字段名
    titleName: {
      type: String,
      value: ''
    },
    // 组图的id
    imageId: {
      type: String,
      value: ''
    },
    pageNo: {
      type: Number,
      value: 1
    },
    pageSize: {
      type: Number,
      value: 10
    }
  },
  attached: function () {
    // 初始化列表数据
    this.initData()
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 预览照片
    previewPic: function (e) {
      var currentImg = e.currentTarget.dataset.src
      let imgs = []
      for (var i in this.data.imageList) {
        imgs.push(this.data.imageList[i].urlName)
      }
      wx.previewImage({
        current: currentImg,
        urls: imgs
      })
    },
    initData() {
      let imageList = []
      let list = this.data.originList
      // 转换显示的字段名
      if (list) {
        for (var i in list) {
          var item = list[i]
          var item1 = {}
          item1.titleName = item[this.data.titleName]
          item1.urlName = item[this.data.urlName]
          item1.imageId = item[this.data.imageId]
          imageList.push(item1)
        }
      }
      this.setData({
        imageList: imageList
      })
    }
  }
})

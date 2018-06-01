// components/Carousel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pics: {
      type: Array,
      value: []
    },
    // 是否带点
    indicatorDots: {
      type: Boolean,
      value: true
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      value: true
    },
    // 自动切换间隔
    interval: {
      type: Number,
      value: 3000
    },
    // 滑动动画时长
    duration: {
      type: Number,
      value: 500
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // indicatorDots: this.indicatorDots, 
    // autoplay: this.autoplay,  
    // interval: this.interval,  
    // duration: this.duration,  
    // circular: this.circular,  
    swiperCurrent: 0,  // 当前所在页面index
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function () {},
    swipclick: function () {}
  }
})

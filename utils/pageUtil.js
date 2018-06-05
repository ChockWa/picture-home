/**
 * 页面跳转
 */
function toPage (url, params) {
  let paramsStr = ''
  if (params != null) {
    for (var prop in params) {
      if (params.hasOwnProperty(prop)) {
        paramsStr = prop + '=' + params[prop] + '&'
      }
    }
    if (paramsStr !== '') {
      // 去掉最后一个&
      paramsStr = paramsStr.substring(0, paramsStr.length - 1)
      // 拼接url
      url = url + '?' + paramsStr
    }
  }

  wx.navigateTo({
    url: url,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}

module.exports = {
  toPage: toPage
}
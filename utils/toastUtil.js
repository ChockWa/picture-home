/**
 * 弹窗工具
 */
function successMsg (message) {
  wx.showToast({
    title: message,
    icon: 'success',
    duration: 2000
  })
}

function errorMsg (message) {
  wx.showToast({
    title: message,
    duration: 2000
  })
}

module.exports = {
  successMsg: successMsg,
  errorMsg: errorMsg
}
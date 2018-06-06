const toastUtil = require('./toastUtil.js')

/**
 * 小程序登录
 */
function getLoginCode () {
  let promise = new Promise(function(resolve,reject){
    wx.login({
      success: function (res) {
        const code = res.code
        if (code) {
          resolve(code)
        }
      },
      fail: function (res) {
        console.log(res)
        reject('登录获取凭证code失败')
      }
    })
  })
  return promise
}

module.exports = {
  getLoginCode: getLoginCode
}
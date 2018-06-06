/**
 * post请求封装
 */
const base_url = 'localhost:8081/'
function post (url, params) {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: base_url + url,
      data: params,
      header: { 'content-type': 'application/json' },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res && res.statusCode === 200) {
          resolve(res.data);
        }
      },
      fail: function (res) {
        if (res) {
          console.log(res)
          return reject('请求失败,请重试')
        }
      },
      complete: function (res) { },
    })
  })
  return promise
}

module.exports = {
  post: post
}
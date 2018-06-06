const httpService = require('../utils/http.js')

function loginWithCode(params) {
  return httpService.post('getAuth',params)
}

module.exports = {
  loginWithCode: loginWithCode
}
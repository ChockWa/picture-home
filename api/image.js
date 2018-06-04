const httpService = require('../utils/http.js')

function getImages (params) {
  return httpService.post('http://localhost:8081/getSourceTest', params)
}

module.exports = {
  getImages: getImages
}
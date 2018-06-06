const httpService = require('../utils/http.js')

function getImages (params) {
  return httpService.post('getSourceTest', params)
}

module.exports = {
  getImages: getImages
}
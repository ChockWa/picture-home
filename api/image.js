const httpService = require('../utils/http.js')

function getImages (params) {
  return httpService.post('getSourcesWXPage', params)
}

function getImageDetail(params) {
  return httpService.post('getSourceWXDetail', params)
}

module.exports = {
  getImages: getImages,
  getImageDetail: getImageDetail
}
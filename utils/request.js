// const baseUrl = 'https://m.maoyan.com'
const baseUrl = 'https://tacp.weiye.link/prod-api'

function request(params) {
  let url = params.url
  if (params.api) {
    url = `${baseUrl}${params.api}`
  }
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url,
      success: (res) => {
        if(typeof res === 'string'){
          reject([{}, err])
        } else {
          resolve([res.data || {}, null])
        }
      },
      fail: (err) => {
        reject([{}, err])
      }
    })
  }).catch(err => [{}, err])
}

module.exports = request
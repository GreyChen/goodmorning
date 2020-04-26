var util = require('util'),
  https = require('https'),
  url = require('url')

var JJregUrl =
    'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=2d638b16-b15c-4576-9731-7201f11613d0',
  JJpostData = JSON.stringify({
    msgtype: 'text',
    text: {
      content: '早安小俊杰！又是元气满满的一天！！！么么哒！！！',
      mentioned_mobile_list: ['17320571909'],
    },
  })
var GFregUrl =
    'https://oapi.dingtalk.com/robot/send?access_token=5512d5abed99f02b2b77a2888573da83175bb193fecac017e9eb9ee0f0a36eed',
  GFpostData = JSON.stringify({
    msgtype: 'text',
    text: {
      content: '小锋锋，早安安~你好帅哦，我迪丽热巴想嫁给你~',
    },
    at: {
      atMobiles: ['18613191443'],
      isAtAll: false,
    },
  })
timingTask(JJregUrl, JJpostData)
timingTask(GFregUrl, GFpostData)

function timingTask(regUrl, postData) {
  var _regUrl = util.format(regUrl)
  var post_option = url.parse(_regUrl)
  post_option.method = 'POST'
  post_option.headers = {
    'Content-Type': 'application/json',
  }
  var post_req = https.request(post_option, function (res) {
    res.on('data', function (buffer) {
      console.log(buffer.toString())
    })
  })
  post_req.write(postData)
  post_req.end()
}

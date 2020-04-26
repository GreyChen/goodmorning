var util = require('util'),
  https = require('https'),
  url = require('url')

var regUrl = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=2d638b16-b15c-4576-9731-7201f11613d0";

var _regUrl = util.format(regUrl);
var post_option = url.parse(_regUrl);
post_option.method = 'POST';
var post_data = JSON.stringify({
  "msgtype": "text",
  "text": {
    // "content": "早上好！又是元气满满的一天！！！冲鸭！！！",
    "content": '吃饭时间到',
    "mentioned_mobile_list": ["13570455985"]
  }
})

post_option.headers = {
  'Content-Type': 'application/json'
};
var post_req = https.request(post_option, function (res) {
  res.on('data', function (buffer) {
    console.log(buffer.toString());
  });
})
post_req.write(post_data);
post_req.end();
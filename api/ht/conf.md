# 配置

## 获取全局配置信息

**方式**

`GET`

**路径**

`/api/config`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "reward": {
      "num": 20,
      "rule": "rule",
      "upper": "40"
    },
    "pay:switch": {
      "dstt": "on",
      "alipay": "on",
      "wechat": "on"
    },
    "conversion": {
      "min": "10",
      "tips": "这是温馨提示",
      "dstt_to_hd": "10" /*单个dstt等于10个hd*/,
      "hd_to_dstt": "0.1" /*单个hd等于0.1个dstt*/,
      "dstt_to_hd_fee": "10" /*dstt兑换hd手续费比例*/,
      "hd_to_dstt_fee": "10" /*hd兑换dstt手续费比例*/
    },
    "withdrawal": {
      "instr": "提现说明",
      "switch": "on",
      "user_min": "100",
      "user_day_limit": "1000"
    },
    "invite": {
      "url": "http://resource.immeet.com/imeet/register.html",
      "mode": "邀请方式",
      "rule": "邀请说明",
      "power": 100
    },
    "about": "关于火推",
    "rule": "规章制度",
    "register": "注册协议",
    "user": "用户协议",
    "hd:num": ["100", "200", "500", "1000"],
    "cdn_domain": "http://file.zytc360.cn",
    "certification": {
      "price": "0.01",
      "intro": "这是实名认证说明"
    }
  }
}
```

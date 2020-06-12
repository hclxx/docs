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
      "dstt:to:hd": "10",
      "hd:to:dstt": "0.1"
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
    "cdn_domain": "http://file.zytc360.cn"
  }
}
```

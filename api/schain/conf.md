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
    /*邀请配置*/
    "invite": {
      "url": "http://resource.immeet.com/链存/register.html" /*邀请地址*/,
      "mode": "邀请方式" /*邀请方式*/,
      "rule": "邀请说明" /*邀请说明*/,
      "power": "100" /*邀请奖励*/
    },
    "cl:to:cny": "1" /*单个CL的现金价格单位元*/,
    "cdn_domain": "http://xxxx.sss.com" /*CDN_DOMAIN*/
  }
}
```

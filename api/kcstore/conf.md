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
      "url": "http://asdasd.asdasd.asdas/adasd/register.html" /*邀请地址*/,
      "mode": "邀请方式" /*邀请方式*/,
      "rule": "邀请说明" /*邀请说明*/,
      "power": "100" /*邀请奖励*/
    },
    "shopping": {
      /*体验店*/
      "tyd": {
        "shop": "20",
        "user": "20" /*体验店用户SCCB提成比例，需要除以100计算*/
      },
      "yxd": {
        "user": "10" /*优选店店用户SCCB提成比例，需要除以100计算*/
      }
    },
    "cdn_domain": "http://asdasd.asdasd.com" /*七牛域名*/
  }
}
```

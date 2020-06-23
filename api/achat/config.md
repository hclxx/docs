# 系统配置

## 基础配置

**方式**

`GET`

**参数**

| 名称 | 类型 | 必须 | 说明 |
| :--: | :--: | :--: | :--: |


**路径**

`/api/config`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "cdn_domain": "http://resource.immeet.com",
    "register_protocol": "这是注册协议",
    "start_version_control": false,
    "business": {
      "qq": "333",
      "email": "imeet@qq.com",
      "imeet": "111",
      "wechat": "222"
    },
    "quit_limit_day": 30,
    "bonus": {
      "max_limit": "100",
      "min_limit": "0.02",
      "group_max_limit": "2000",
      "group_num_limit": "100",
      "user_daily_limit": "10000"
    },
    "bind_explain": "asdsadsadasd" /*绑定说明*/,
    "xs_close_status": false /*旋算应用是否开启:true-开启 false-关闭*/,
    "conversion": {/*炫算 agm usdt兑换配置*/
        "agm_to_usdt": "10",
        "usdt_to_agm": "0.1"
      }
  }
}
```

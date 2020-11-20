# 配置

## 全局配置

**方式**

`GET`

**路径**

`/api/config`

**响应**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "invite": {
      "url": "http://www.baidu.com",
      "rule": "邀请说明",
      "f_power": "100",
      "s_power": "100"
    },
    "pay:switch": {
      "bank": "on",
      "usdt": "on",
      "alipay": "on"
    },
    "withdrawal": {
      "instr": "提现说明",
      "switch": "on",
      "erc_fee": "10",
      "fil_fee": "10",
      "user_min": "100",
      "user_day_limit": "1000"
    },
    "conversion": {
      "tips": "tips",
      "eth_min": "10",
      "fil_min": "10",
      "eth_to_usdt": "0.1",
      "fil_to_usdt": "0.1",
      "eth_to_usdt_fee": "10",
      "fil_to_usdt_fee": "10"
    },
    "about": "about",
    "version": 0,
    "register": "注册协议",
    "accountreceivable": {
      "bank": "中国工商银行",
      "code_desc": "这是附言码说明",
      "account_name": "陕西存链科技数据有限公司",
      "account_number": "3700xxxxxxx"
    },
    "cdn_domain": "http://file.mtclouds.top",
    "purchase_protocol": "http://www.mtclouds.top/purchase/protocol",
    "hosting_protocol": "http://www.mtclouds.top/hosting/protocol"
  }
}
```

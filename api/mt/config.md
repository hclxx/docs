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
    "about": {
      "about": "关于"
    },
    "version": 0,
    "register": "注册协议",
    "accountreceivable": {
      "bank": "中国民生银行股份有限公司西安太白路支行",
      "code_desc": "打款请务必填写附言码，留空会影响订单完成进度",
      "account_name": "陕西蚂蚁集群数字科技有限公司",
      "account_number": "162414068"
    },
    "conversion": {
      "tips": "tips",
      "btc_min": "10",
      "eth_min": "10",
      "fil_min": "10",
      "btc_to_usdt": "0.1",
      "eth_to_usdt": "0.1",
      "fil_to_usdt": "0.1",
      "btc_to_usdt_fee": "10",
      "eth_to_usdt_fee": "10",
      "fil_to_usdt_fee": "10"
    },
    "cdn_domain": "http://file.mtclouds.top",
    "purchase_protocol": "http://localhost/purchase/protocol",
    "hosting_protocol": "http://localhost/hosting/protocol"
  }
}
```

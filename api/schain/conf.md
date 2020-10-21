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
    "cdn_domain": "http://xxxx.sss.com" /*CDN_DOMAIN*/,
    "withdrawal": {
      "user_min": "100" /*用户最低提现额度 单位(元)*/,
      "user_day_limit": "1000" /*用户提现日上限 单位(元)*/,
      "user_day_num": "1" /*用户提现次数日上限*/,
      "platform_day_limit": "100000" /*平台用户提现日上限额度 单位(元)*/,
      "instr": "提现说明" /*提现说明*/,
      "switch": "on" /*提现开关 on-开启 off-关闭*/,
      "service_charge": "1" /*提现服务费（百分比） 1 / 100*/
    },
    "account:receivable": {
      "bank": "中国工商银行" /*开户行*/,
      "code_desc": "这是附言码说明" /*附言码说明*/,
      "account_name": "陕西存链科技数据有限公司" /*开户名*/,
      "account_number": "3700xxxxxxx" /*开户号*/
    },
    "purchase_protocol": "http://localhost/purchase/protocol" /*矿机购买协议地址*/,
    "hosting_protocol": "http://localhost/hosting/protocol" /*矿机托管协议地址*/,
    "register_protocol": "http://localhost/hosting/protocol" /*注册协议地址*/,
    "fil:issue": {
       "lock": "10",   /*锁仓金额比例*/
       "pawn": "20",   /*抵押金额比例*/
       "security": "30", /*保障金额比例*/
       "total_lock": "300",  /*总锁仓金额*/
       "total_pawn": "100",  /*总抵押金额*/
       "total_enable": "200",  /*总可用金额*/
       "withdrawable": "40"    /*提现金额比例*/
    }
  }
}
```

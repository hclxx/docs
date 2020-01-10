# 淘宝客会员

## 购买会员

`api/v1/taobaoke/members`

**请求方法**

`POST`

**参数**
|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| member_id  | int  |  是  |                    会员类型id                   |
|  pay_type  | string  |  是  | 支付方式： wxpay-微信,alipay-支付宝 |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    /*支付宝订单信息*/
    "alipay": {
      "order_info": "alipay_sdk=alipay-sdk-php-20180705&app_id=123123&biz_content=%7B%22timeout_express%22%3A%225m%22%2C%22out_trade_no%22%3A%22W19818%22%2C%22subject%22%3A%22%5Cu8d2d%5Cu4e70%5Cu4e00%5Cu952e%5Cu6536%5Cu53d6%5Cu77ff%5Cu77f3%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22body%22%3A%22%5Cu8d2d%5Cu4e70%5Cu4e00%5Cu952e%5Cu16536%5Cu53d6%5Cu77ff%5Cu77f3%5Cu7279%5Cu67431%5Cu4e2a%5Cu6708%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2019-04-29+13%3A39%3A38&version=1.0&sign=NGWBZUzLq%2BA60WEFoxET8lKnLIQGelz%2FBYX7u8dj%2BsYgvQzvSsDK2jPlu6IAR0bYRBrziaisLebst5DLBCsjkNZofEjyBopUfPIVA7FHHXpUQ5qPAcTC6Q5n0fNWC6%2BEJpG8Ly1tJhaMOl6Z3H8nwoITH%2BPah3%2Bh%2F5Mm26XOwU0jhC60ogUKgtWFrDsuIhspcAVmv6Xf%2FHO%2Ftxu4lCet6zJGBgcOUw3Obtiq1uTBWIziWecH1FW%2BGpCSWCrbDU2AEaAGjbMMYmaMIBNyGzxFqr8tkhe3Q47nzkWOrmYYzkgMBRBzc2FuJ%2BwWH5cezI6L3nrJJVFOPLclM2KJ1BQHww%3D%3D"
    },
    /*微信订单信息*/
    "wxpay": {
      "app_id": ""
    },
    /*订单号*/
    "order_no": "19818"
  }
}
```

**微信支付**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "wxpay": {
      "appid": "123123213213",
      "partnerid": "2131231232",
      "prepayid": "wx3017553928957484bf409f272920327045",
      "package": "Sign=WXPay",
      "noncestr": "f7iPw378C36FBL96",
      "timestamp": 1556618139,
      "sign": "6EE2B495EDEDF5B0EC425CF0F6C4522E"
    },
    "alipay": {
      "order_info": ""
    },
    "order_no": "63"
  }
}
```

## 钱包流水列表

`api/v1/taobaoke/wallet/logs`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| limit  | int  |  是  |                    条目数 默认 20                    |
| offset | int  |  是  |                    偏移量 默认 0                     |
|  type  | int  |  是  | 钱包日志类型： fans-粉丝收益 bonus-分红收益 all-全部 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "佣金奖励" /*标题*/,
      "amount": "0.00" /*金额*/,
      "target_user_id": 3,
      "target_type": "fans:order" /*日志类型:fans:order-粉丝下单 buy:member-购买会员 bonus-分红*/,
      "action": 1 /*收支状态: 1-收入 2-支出*/,
      "data": null /*扩展字段*/,
      "status": 0 /*状态:0-等待 1-成功 2-失败*/,
      /*目标用户信息*/
      "target_user": {
        "id": 3,
        "name": "哈哈哈",
        "avatar": null,
        "sex": 0
      },
      "created_at": "2020-01-01 12:22:11",
      "updated_at": "2020-01-01 12:22:11" /*时间*/
    }
  ]
}
```

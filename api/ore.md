# 矿石

## 挖矿列表

`/api/v1/ores`

**请求方式**

`GET`

**请求参数**

| 名称  | 类型 | 默认 | 必须 | 说明 |
| :---: | :--: | :--: | :--: | :--: |
| limit | int  |  20  |  否  | 条数 |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 34 /*id*/,
      "num": "0.25520000" /*数量*/
    }
  ]
}
```

## 同步记录

`/api/v1/ores`

**请求方式**

`POST`

**请求参数**

`无`

**返回体**

```json
{
  "msg": "拉取成功",
  "code": 0,
  "data": null
}
```

## 领取矿石

`/api/v1/ores`

**请求方法**

`PUT`

**请求参数**

| 名称 | 类型  | 默认 | 必须 | 说明 |
| :--: | :---: | :--: | :--: | :--: |
| ores | array |  无  |  是  |  ID  |

**返回体**

```json
{
  "msg": "成功",
  "code": 0,
  "data": null
}
```

## 获取一键收取矿石价格

`/api/v1/collection/price`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
    "msg": "",
    "code": 0,
    "data": [
        {
            "comc": "30", /*COMC价格*/
            "month": 1, /*月份*/
            "price": "20"/*人民币价格*/
        },
        {
            "comc": "30",
            "month": 3,
            "price": "60"
        },
        {
            "comc": "60",
            "month": 6,
            "price": "80"
        }
    ]
}
```

## 获取一键收取矿石特权剩余天数

`/api/v1/collection/days`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "day": -1   //(int)  -1为体验1次，其他为正常显示天数
    }
}
```

## 购买一键收矿特权

`/api/v1/collection`

**请求方式**

`POST`

**请求参数**

| 名称 | 类型  | 默认 | 必须 | 说明 |
| :--: | :---: | :--: | :--: | :--: |
| month | integer |  无  |  是  |  购买月数  |
| pay_pass | string |  无  |  是  |  支付密码  |

**返回体**

```json
{
  "msg": "购买成功，使用日期截止 2019-04-15 16:00:00",
  "code": 0,
  "data": null
}
```

## 一键收取矿石

`/api/v1/ores/all`

**请求方式**

`POST`

**请求参数**
无

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
      "sum":100 //  (string)
  }
}
```

## 现金购买一键收矿特权

`/api/v1/cash-collection`

**请求方式**

`POST`

**请求参数**

| 名称 | 类型  | 默认 | 必须 | 说明 |
| :--: | :---: | :--: | :--: | :--: |
| month | integer |  无  |  是  |  购买月数  |
| pay_type | string |  无  |  是  |  支付方式: wxpay-微信支付 alipay-支付宝支付  |

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

## 检查现金购买一键收矿特权支付状态

`api/v1/collection-orders/{orderNo}/status`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "status": 0 /*支付状态: 0-未支付 1-已支付 2-支付失败*/
    }
}
```

## 购买一键挖矿记录

`api/v1/collection/buy-records`

**请求方式**

`GET`

**请求参数**

| 名称 | 类型  | 默认 | 必须 | 说明 |
| :--: | :---: | :--: | :--: | :--: |
| limit | integer |  20  |  是  |  条目数  |
| offset | integer |  0  |  是  |  偏移量  |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 66,
            "amount": "20.00000000", /*金额*/
            "currency": "cny",/*币种类型:cny-现金人民币、comc-COMC*/
            "target_type": "wxpay:buy:collection", /*wxpay:buy:collection-微信支付、alipay:buy:collection-支付宝支付、comc:buy:collection-comc支付*//
            "extend": {
                "month": 1, /*月份*/
                "buy_type": "续费",
                "collect_time": "2019-08-16 15:06:36"
            },
            "created_at": "2019-05-05 10:29:37"/*购买时间*/
        }
    ]
}
```

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
        "order_info": "alipay_sdk=alipay-sdk-php-20180705&app_id=1231232131&biz_content=%7B%22timeout_express%22%3A%225m%22%2C%22out_trade_no%22%3A%22W30%22%2C%22subject%22%3A%22%5Cu8d2d%5Cu4e70%5Cu4e00%5Cu952e%5Cu6536%5Cu53d6%5Cu77ff%5Cu77f3%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%2260%22%2C%22body%22%3A%22%5Cu8d2d%5Cu4e70%5Cu4e00%5Cu952e%5Cu6536%5Cu53d6%5Cu77ff%5Cu77f3%5Cu7279%5Cu67433%5Cu4e2a%5Cu6708%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2019-04-29+10%3A15%3A43&version=1.0&sign=oSFbmLJnPhnLm9EsnIrN64Kphk6m%2Bbp7BdbKdhYKvN0gwGJc3EzyVOIFzRcyYDFNcaOJBEi98GPfC2OWZS8Mb%2BQlXRrMf1vFQDNH0h3rdEFU4eC3VWbPuAin3k7a%2Bpj%2BOJVJLj9VOBBz%2BmrRqOfPrUfsviuyirVlQIyEy9WfCFxaPkLXsuHSsYyNfE0A0%2BdKNleBEK1psCV8lRUgT%2Bq7oCT6Rsujaegneg3Trwwch9VwwfJ1jEpw94u7kAfnZlqTD5JzNQrxfqUswOasCJ8%2Fg0AsA9ypkrTDXzQhF8iFw8CWwkd90tkjPFPL2gPoRepyuzOvUfjZU27TK2Jz3IOWhw%3D%3D",
        "order_no": "22"
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

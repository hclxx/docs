# 矿石

## 矿石列表

`/api/ores`

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

## 拉取矿石

`/api/ores`

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

`/api/ores`

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

`/api/ores/collection/price`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "items": [
      {
        "month": 1 /*个月数*/,
        "price": "3" /*现金价格*/,
        "my_price": "10" /*my 价格*/
      }
    ],
    "switch": {
      "my": "on",
      "alipay": "on",
      "wechat": "on"
    }
  }
}
```

## 获取一键收取矿石特权剩余天数

`/api/ores/collection/days`

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
    "day": -1 //(int)  -1为体验1次，其他为正常显示天数
  }
}
```

## 一键收取矿石

`/api/ores/all`

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
    "sum": "all" //  (string)
  }
}
```

## 现金购买一键收矿特权

`/api/ores/cash-collection`

**请求方式**

`POST`

**请求参数**

|     名称     |  类型   | 默认 | 必须 |                                说明                                 |
| :----------: | :-----: | :--: | :--: | :-----------------------------------------------------------------: |
|    month     | integer |  无  |  是  |                              购买月数                               |
|   pay_type   | string  |  无  |  是  | 支付方式: wxpay-微信支付 alipay-支付宝支付,仅支持支付宝支付/my-购买 |
| pay_password | string  |  无  |  是  |                   支付方式为 my，需要提交支付密码                   |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "result": "xxxxx" /*支付宝支付信息*/,
    "order_no": "xxxxx" /*支付订单号*/
  }
}
```

## 检查现金购买一键收矿特权支付状态

`api/ores/collection-orders/{orderNo}/status`

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

`api/ores/collection/buy-records`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型   | 默认 | 必须 |  说明  |
| :----: | :-----: | :--: | :--: | :----: |
| limit  | integer |  20  |  是  | 条目数 |
| offset | integer |  0   |  是  | 偏移量 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 59,
      "amount": "0.0100",
      "currency": "cny",
      "extend": {
        "month": 2,
        "buy_type": "购买",
        "order_no": "O27211589183182109",
        "collect_time": "2020-07-11 15:46:22"
      },
      "created_at": "2020-05-11 15:46:22"
    }
  ]
}
```

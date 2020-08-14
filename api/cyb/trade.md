# 交易

## 配置信息

**方式**

`POST`

**路径**

`/api/trades-config`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "cd_to_cny": "1" /*内盘创豆现金单价*/,
    "num_buy_min": "300" /*按数量购买最低*/,
    "usdt_to_cny": "6" /*内盘USDT现金单价*/,
    "price_buy_min": "30" /*按价格购买最低*/
  }
}
```

## 自选区

**方式**

`GET`

**路径**

`/api/trades`

**参数**

| 参数      | 示例值 | 是否必填 | 参数描述                 |
| :-------- | :----- | :------- | :----------------------- |
| limit     | int    | 是       | 条目数量 默认 20         |
| offset    | int    | 是       | 偏移量 默认 0            |
| pay_type  | int    | 否       | 一件购买使用:3-usdt 购买 |
| need_type | int    | 是       | 需求类型:1-买入/2-卖出   |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 9 /*交易ID*/,
      "publisher": 1,
      "recipient": 0,
      "need_num": "1000.0000" /*创豆数量单位个*/,
      "need_price": "1.0000" /*单价单位元*/,
      "total_amount": "1000.0000" /*总额单位元*/,
      "voucher": null,
      "buy_type": 1 /*购买类型:1-数量/2-金额*/,
      "need_type": 1 /*需求类型:1-买入/2-卖出*/,
      "pay_type": 3 /*支付方式:1-银行卡/2-支付宝/3-usdt*/,
      "platform": null,
      "receive_payment": null,
      "match_at": null,
      "cancel_at": null,
      "frozen_at": null,
      "submit_at": null,
      "platform_at": null,
      "close_at": null,
      "complete_at": null,
      "revoke_at": null,
      "status": 0,
      "created_at": "2020-08-12 20:27:26",
      "updated_at": "2020-08-12 20:27:26",
      "cancel_seconds": 0,
      "frozen_seconds": 0,
      /*发布人信息*/
      "publisher_user": {
        "id": 1,
        "name": "CAJQCIML",
        "phone": "183****4309",
        "avatar": null
      }
    }
  ]
}
```

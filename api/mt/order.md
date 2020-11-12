# 订单

## 下单

**方式**

`GET`

**参数**

|      名称       |  类型  | 必须 |           说明            |
| :-------------: | :----: | :--: | :-----------------------: |
|    goods_id     |  int   |  否  |  商品 ID ，购买矿机必须   |
|    order_id     |  int   |  否  |  订单 ID ，购买电费必须   |
|       num       |  int   |  是  |         购买数量          |
|      days       | string |  是  |        电费包天数         |
|    pay_type     | string |  是  | 支付类型:usdt/alipay/bank |
|    buy_type     | string |  是  |  购买类型:goods/electric  |
|  pay_password   | string |  是  | pay_type 为 USDT 支付必须 |
|   coupon_ids    | string |  是  |        优惠卷 IDs         |
| electric_amount | string |  是  |      使用电费包抵扣       |

**路径**

`/api/goods`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "order_id": 7 /*订单ID*/,
    "alipay_info": "" /*支付宝支付信息*/
  }
}
```

## 矿机订单列表

**方式**

`GET`

**路径**

`/api/orders`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 7,
      "order_no": "G55791605149415633",
      "user_id": 7,
      "num": 1,
      "pay_price": "1000.0000",
      "total_price": "1000.0000",
      "usdt_price": "6.613715138307155",
      "coupon_amount": "0.0000",
      "electric_remnant_days": 30,
      "electric_total_days": 30,
      "dig_remnant_days": 365,
      "dig_total_days": 365,
      "dig_start_time": null,
      "dig_end_time": null,
      "total_output": "0",
      "yesterday_output": "0",
      "status": 1,
      "created_at": "2020-11-12 10:50:15",
      "updated_at": "2020-11-12 10:50:15",
      "goods_order": {
        "id": 7,
        "goods_id": 3,
        "order_id": 7,
        "name": "测试矿机1",
        "price": "1000.0000",
        "image": "01.png",
        "zone": "btc",
        "spec": 3,
        "years": 1,
        "rate": "55%-80%",
        "power": 240,
        "daily_output": "0.00001",
        "electric_price": "0.60",
        "electric_days": 30,
        "before": 30,
        "after": 0,
        "type": "common",
        "period_id": 0,
        "created_at": "2020-11-12 10:50:15",
        "updated_at": "2020-11-12 10:50:15"
      },
      "electric_order": {
        "id": 7,
        "user_id": 7,
        "order_id": 7,
        "order_no": "G55791605149415633",
        "node_order_no": "GN61901605149415641",
        "code": "5faca2e79c902",
        "days": 30,
        "days_used": 0,
        "num": 1,
        "pay_type": "usdt",
        "pay_price": "18.0000",
        "total_price": "18.0000",
        "coupon_amount": "0.0000",
        "electric_amount": "0.0000",
        "bank_info": null,
        "credential": null,
        "reason": null,
        "remark": "",
        "pay_time": "2020-11-12 10:50:15",
        "confirm_time": null,
        "close_time": null,
        "status": 1,
        "admin_id": 0,
        "first": 1,
        "created_at": "2020-11-12 10:50:15",
        "updated_at": "2020-11-12 10:50:15"
      }
    }
  ]
}
```

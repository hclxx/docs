# 云矿

## 我的市场详情

**方式**

`GET`

**路径**

`/api/market/details`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "market_icon": "w5ouf8cda.png",
    "market_total": "0" /*市场总业绩*/,
    "agent_total": "0" /*代理提成*/,
    "total_income": "0" /*总收益*/,
    "day_income": "0" /*今日收益*/,
    "wait_income": "0" /*待结算收益*/
  }
}
```

## 市场业绩列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**路径**

`/api/market/achievements`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 3,
      "name": "里斯" /*用户名称*/,
      "avatar": null /*头像*/,
      "team_num": 2000 /*市场业绩*/,
      "user_id": 3
    }
  ]
}
```

## 商品列表

**方式**

`GET`

**路径**

`/api/goods`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1 /*商品ID*/,
      "name": "CTL-10矿机" /*商品名称*/,
      "intro": "介绍" /*介绍*/,
      "deduct_num": 20 /*可抵扣糖果上限总价单位元*/,
      "price": "10000.00" /*矿机总价单位元*/,
      "images": ["a.png", "b.png"] /*商品图片集合*/,
      "detail": "html 详情说明" /*详情说明*/,
      "sales_num": 1 /*已销售数量*/,
      "sort": 0,
      "specs": 20 /*T量,单位为T*/,
      "is_delete": 0,
      "created_at": null,
      "updated_at": null
    }
  ]
}
```

## 订单列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                           说明                            |
| :----: | :----: | :--: | :-------------------------------------------------------: |
|  type  | string |  是  | 订单类型:paid-待确认/success-已完成/close-已关闭/all-全部 |
| limit  |  int   |  是  |                     条目数 默认为 20                      |
| offset |  int   |  是  |                      条目数 默认为 0                      |

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
      "id": 4,
      "order_no": "91717302" /*订单号/附言号*/,
      "total_price": "10000.00" /*订单总花费USDT金额*/,
      "pay_price": "10000.00" /*实际花费USDT金额*/,
      "deduct_num": 0 /*抵扣糖果的数量*/,
      "buy_num": 1 /*购买数量*/,
      "specs": 20 /*T量单位为T*/,
      "order_status": 0 /*1-待确认 2-已完成/托管中 3-交易关闭*/,
      "user_id": 1,
      "goods_id": 1,
      "is_delete": 0,
      "close_reason": "关闭原因" /*关闭原因*/,
      "pay_time": "2020-05-07 15:32:40" /*付款时间*/,
      "remark": "订单备注" /*订单备注*/,
      "created_at": "2020-05-07 15:32:40" /*订单创建时间*/,
      "updated_at": "2020-05-07 15:32:40",
      /*商品信息*/
      "goods": {
        "id": 1,
        "name": "CTL-10矿机",
        "intro": "介绍",
        "deduct_num": 20,
        "price": "10000.00",
        "images": ["a.png", "b.png"],
        "detail": "html 详情说明",
        "sales_num": 1,
        "sort": 0,
        "specs": 20,
        "is_delete": 0,
        "created_at": null,
        "updated_at": null
      }
    }
  ]
}
```

## 订单详情

**方式**

`GET`

**路径**

`/api/orders/{order_no}`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 4,
    "order_no": "91717302",
    "total_price": "10000.00",
    "pay_price": "10000.00",
    "deduct_num": 0,
    "buy_num": 1,
    "specs": 20,
    "order_status": 0,
    "user_id": 1,
    "goods_id": 1,
    "is_delete": 0,
    "close_reason": "关闭原因",
    "pay_time": "2020-05-07 15:32:40",
    "remark": "备注",
    "created_at": "2020-05-07 15:32:40",
    "updated_at": "2020-05-07 15:32:40",
    "goods": {
      "id": 1,
      "name": "CTL-10矿机",
      "intro": "介绍",
      "deduct_num": 20,
      "price": "10000.00",
      "images": ["a.png", "b.png"],
      "detail": "html 详情说明",
      "sales_num": 1,
      "sort": 0,
      "specs": 20,
      "is_delete": 0,
      "created_at": null,
      "updated_at": null
    }
  }
}
```

## 商品下单

**方式**

`POST`

**参数**

|    名称    |  类型  | 必须 |               说明                |
| :--------: | :----: | :--: | :-------------------------------: |
|  goods_id  |  int   |  是  |              商品 ID              |
|    num     |  int   |  是  |             购买数量              |
| deduct_num |  int   |  否  | 糖果抵扣数量,糖果现金单价对等创豆 |
|   remark   | string |  否  |             备注信息              |

**路径**

`/api/orders`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "order_no": "32523393" /*附言码/订单号*/
  }
}
```

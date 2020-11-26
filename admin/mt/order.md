# 订单管理

## 列表

**方式**

`GET`

**路径**

`/admin/orders`

**请求参数**

|     名称      |  类型  | 默认 | 必须 |                                        说明                                         |
| :-----------: | :----: | :--: | :--: | :---------------------------------------------------------------------------------: |
| user_keywords | string |  无  |  否  |                            下单人检索支持(手机/UID/名称)                            |
|   period_id   |  int   |  无  |  否  |                                       期数 ID                                       |
|  start_time   | string |  无  |  否  |                                      开始时间                                       |
|   end_time    | string |  无  |  否  |                                      结束时间                                       |
|   order_no    | string |  无  |  否  |                                     订单号检索                                      |
|    status     |  int   |  无  |  否  | 订单状态: 0-待支付,1-已支付(待商家确认),2-已确认(部署中),3-挖矿中,4-已结束,5 已关闭 |
|     page      |  int   |  1   |  是  |                                      当前页数                                       |
|     limit     |  int   |  20  |  是  |                                      每页条数                                       |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 7,
        "order_no": "G55791605149415633" /*订单号*/,
        "user_id": 7,
        "num": 1 /*购买矿机数量*/,
        "pay_price": "1000.0000" /*实际支付金额*/,
        "total_price": "1000.0000" /*总金额*/,
        "usdt_price": "6.613715138307155" /*如果是USDT支付为当时usdt单价(元)*/,
        "coupon_amount": "0.0000" /*使用USDT优惠卷抵扣金额(元)*/,
        "electric_remnant_days": 30 /*电费包剩余天数*/,
        "electric_total_days": 30 /*电费包总天数*/,
        "dig_remnant_days": 365 /*挖矿剩余天数*/,
        "dig_total_days": 365 /*挖矿总天数*/,
        "dig_start_time": null /*矿机开始挖矿时间*/,
        "dig_end_time": null /*矿机挖矿结束时间*/,
        "total_output": "0" /*总产出数量*/,
        "yesterday_output": "0" /*昨日产出数量*/,
        "status": 1 /*0-待支付,1-已支付(待确认)，2-已确认(部署中),3-挖矿中,4-挖矿已结束，5-已关闭*/,
        "created_at": "2020-11-12 10:50:15" /*订单创建时间*/,
        "updated_at": "2020-11-12 10:50:15",
        "electric_order": {
          "id": 7,
          "user_id": 7,
          "order_id": 7,
          "order_no": "G55791605149415633",
          "node_order_no": "GN61901605149415641" /*电费包订单编号*/,
          "code": "5faca2e79c902" /*附言吗*/,
          "days": 30 /*电费包天数*/,
          "days_used": 0 /*已使用天数*/,
          "num": 1 /*数量*/,
          "pay_type": "usdt" /*支付方式:alipay/usdt/bank*/,
          "pay_price": "18.0000" /*实际支付(元)*/,
          "total_price": "18.0000" /*总金额(元)*/,
          "coupon_amount": "0.0000" /*优惠卷抵扣金额(元)*/,
          "electric_amount": "0.0000" /*电费包抵扣金额(元)*/,
          "bank_info": null /*如果是bank支付,则为公司收款账户信息*/,
          "credential": null /*如果是bank支付，凭证图片*/,
          "reason": null /*关闭原因*/,
          "remark": "" /*订单备注*/,
          "pay_time": "2020-11-12 10:50:15" /*支付时间*/,
          "confirm_time": null /*确认时间*/,
          "close_time": null /*关闭时间*/,
          "status": 1 /*0待支付 1已支付 2待使用 3使用中 4已过期 5已取消*/,
          "admin_id": 0 /*审核人信息*/,
          "admin": {
            "id": 1,
            "name": "admin"
          },
          "first": 1 /*数否首单*/,
          "created_at": "2020-11-12 10:50:15",
          "updated_at": "2020-11-12 10:50:15"
        },
        "goods_order": {
          "id": 7,
          "goods_id": 3,
          "order_id": 7,
          "name": "测试矿机1" /*商品信息*/,
          "price": "1000.0000" /*商品单价*/,
          "image": "01.png" /*图片集合*/,
          "zone": "btc" /*专区*/,
          "spec": 3 /*单台T量*/,
          "years": 1 /*周期限制(年)*/,
          "rate": "55%-80%" /*回报率*/,
          "power": 240 /*矿机算力(MH/S)*/,
          "daily_output": "0.00001" /*日产出(天/台)个*/,
          "electric_price": "0.60" /*电费价格*/,
          "electric_days": 30 /*电费天数*/,
          "before": 30 /*运营维护费回本前(百分比)*/,
          "after": 0 /*运营维护费回本后(百分比)*/,
          "type": "common" /*商品类型:common-普通/register-注册可领/novice-新手特供*/,
          "period_id": 0 /*期数ID*/,
          "period":{
              "id": 1,
              "name": "20201111"
          }
          "created_at": "2020-11-12 10:50:15",
          "updated_at": "2020-11-12 10:50:15"
        },
        /*下单人信息*/
        "user": {
          "id": 7,
          "name": "0CGLAX",
          "avatar": null,
          "phone": "13822742306",
          "code": "0CGLAX",
          "power": 0,
          "created_at": "2020-11-10 16:55:08",
          "updated_at": "2020-11-10 17:18:58"
        }
      }
    ],
    "first_page_url": "http://mt.test/admin/orders?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/orders?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/orders",
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
  }
}
```

## 确认订单

> electric_order.status == 1

> {electricOrder} 为 electric_order.id

**地址**

`admin/orders/{electricOrder}/confirm`

**请求方式**

`PATCH`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 设置挖矿

> order.status == 2

> {electricOrder} 为 electric_order.id

**地址**

`admin/orders/{electricOrder}/complete`

**请求方式**

`PATCH`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 关闭

> electric_order.pay_type == 'bank' && electric_order.status == 1

> {electricOrder} 为 electric_order.id

**地址**

`admin/orders/{electricOrder}/close`

**请求方式**

`PATCH`

**请求参数**

|  名称  |  类型  | 默认 | 必须 | 说明 |
| :----: | :----: | :--: | :--: | :--: |
| reason | string |  无  |  是  | 原因 |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 矿机下电费订单

**方式**

`GET`

**路径**

`/admin/orders/{order}/electrics`

**请求参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 7,
        "user_id": 7,
        "order_id": 7,
        "order_no": "G55791605149415633",
        "node_order_no": "GN61901605149415641" /*电费包订单编号*/,
        "code": "5faca2e79c902" /*附言吗*/,
        "days": 30 /*电费包天数*/,
        "days_used": 0 /*已使用天数*/,
        "num": 1 /*数量*/,
        "pay_type": "usdt" /*支付方式:alipay/usdt/bank*/,
        "pay_price": "18.0000" /*实际支付(元)*/,
        "total_price": "18.0000" /*总金额(元)*/,
        "coupon_amount": "0.0000" /*优惠卷抵扣金额(元)*/,
        "electric_amount": "0.0000" /*电费包抵扣金额(元)*/,
        "bank_info": null /*如果是bank支付,则为公司收款账户信息*/,
        "credential": null /*如果是bank支付，凭证图片*/,
        "reason": null /*关闭原因*/,
        "remark": "" /*订单备注*/,
        "pay_time": "2020-11-12 10:50:15" /*支付时间*/,
        "confirm_time": null /*确认时间*/,
        "close_time": null /*关闭时间*/,
        "status": 1 /*0 待支付 1已支付(需要审核操作关闭/确认) 2待使用 3使用中 4已过期 5已取消*/,
        "admin_id": 0 /*审核人信息*/,
        "admin": {
          "id": 1,
          "name": "admin"
        },
        "first": 1 /*数否首单*/,
        "created_at": "2020-11-12 10:50:15",
        "updated_at": "2020-11-12 10:50:15"
      }
    ],
    "first_page_url": "http://mt.test/admin/orders?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/orders?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/orders",
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
  }
}
```

## 订单期数 T 量统计

**地址**

`admin/orders/count/spec`

**请求方式**

`PATCH`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |     说明      |
| :-------: | :----: | :--: | :--: | :-----------: |
| period_id |  int   |  无  |  是  |    期数 ID    |
| currency  | string |  无  |  是  | [btc/fil/eth] |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "total": 12312
  }
}
```

## 修改订单期数

**地址**

`/admin/orders/update/period`

**请求方式**

`POST`

**请求参数**

| 名称 | 类型  | 默认 | 必须 |           说明            |
| :--: | :---: | :--: | :--: | :-----------------------: |
| ids  | array |  无  |  是  | goodsOrder id 集合,[1,23] |
| pid  |  int  |  无  |  是  |          期数 ID          |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "total": 12312
  }
}
```

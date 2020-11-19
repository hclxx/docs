# 订单

## 下单

**方式**

`POST`

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

|  名称  | 类型 | 默认 | 必须 |   说明   |
| :----: | :--: | :--: | :--: | :------: |
| offset | int  |  0   |  是  |  偏移量  |
| limit  | int  |  15  |  是  | 每页条数 |

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
      "order_no": "G55791605149415633" /*订单号*/,
      "user_id": 7,
      "num": 1 /*数量*/,
      "pay_price": "1000.0000" /*实际支付金额(元)*/,
      "total_price": "1000.0000" /*总金额(元)*/,
      "usdt_price": "6.613715138307155" /*USDT当前的价格*/,
      "coupon_amount": "0.0000" /*优惠卷抵扣金额(元)*/,
      "electric_remnant_days": 30 /*电费包剩余天数*/,
      "electric_total_days": 30 /*电费包总天数*/,
      "dig_remnant_days": 365 /*挖矿剩余天数*/,
      "dig_total_days": 365 /*挖矿总天数*/,
      "dig_start_time": "2020-11-12 10:50:15" /*挖矿开始时间*/,
      "dig_end_time": "2020-11-12 10:50:15" /*挖矿结束时间*/,
      "total_output": "0" /*总产出*/,
      "yesterday_output": "0" /*昨日产出*/,
      "status": 1 /*0-待支付,1-已支付(待确认)，2-已确认(部署中),3-挖矿中,4-挖矿已结束，5-已关闭*/,
      "created_at": "2020-11-12 10:50:15" /*订单创建时间*/,
      "updated_at": "2020-11-12 10:50:15",
      "goods_order": {
        "id": 7,
        "goods_id": 3,
        "order_id": 7,
        "user_id": 0,
        "name": "测试矿机1" /*矿机名称*/,
        "price": "1000.0000" /*单价(元)*/,
        "image": "01.png" /*矿机图片*/,
        "zone": "btc" /*专区:btc/eth/fil*/,
        "spec": 3 /*T量*/,
        "years": 1 /*周期(年)*/,
        "rate": "55%-80%" /*回报率*/,
        "power": 240 /*矿机算力(MH/S)*/,
        "daily_output": "0.00001" /*日产出*/,
        "electric_price": "0.60" /*电费金额(度/元)*/,
        "electric_days": 30 /*电费包天数*/,
        "before": 30 /*营维护费回本前(%)*/,
        "after": 0 /*运营维护费回本后(%)*/,
        "type": "common" /*商品类型:common-普通/register-注册可领/novice-新手特供*/,
        "period_id": 1 /*期数ID*/,
        "created_at": "2020-11-12 10:50:15",
        "updated_at": "2020-11-12 10:50:15",
        "period": {
          "id": 1,
          "name": "202001" /*期数名称*/,
          "created_at": null,
          "updated_at": null
        }
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
        "status": 1 /*0待支付 1已支付 2待使用 3使用中 4已过期 5已取消*/,
        "admin_id": 1,
        "first": 1,
        "created_at": "2020-11-12 10:50:15",
        "updated_at": "2020-11-12 10:50:15",
        "admin": {
          "id": 1,
          "name": "超级管理员",
          "phone": "13111111111",
          "email": "root@qq.com",
          "admin_token": "2d62f1dd713e3de580dfdadf9a85629d",
          "state": 0,
          "is_delete": 0,
          "created_at": "2020-11-03 10:44:01",
          "updated_at": "2020-11-13 14:30:58"
        }
      }
    }
  ]
}
```

## 电费订单列表

|  名称  | 类型 | 默认 | 必须 |   说明   |
| :----: | :--: | :--: | :--: | :------: |
| offset | int  |  0   |  是  |  偏移量  |
| limit  | int  |  15  |  是  | 每页条数 |

**方式**

`GET`

**路径**

`/api/electric-orders`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 7,
      "user_id": 7,
      "order_id": 7,
      "order_no": "G55791605149415633" /*订单号*/,
      "node_order_no": "GN61901605149415641",
      "code": "5faca2e79c902" /*附言码*/,
      "days": 30 /*天数*/,
      "days_used": 0 /*已使用天数*/,
      "num": 1 /*数量*/,
      "pay_type": "usdt" /*支付方式:usdt/alipay/bank*/,
      "pay_price": "18.0000" /*实际支付(元)*/,
      "total_price": "18.0000" /*总金额(元)*/,
      "coupon_amount": "0.0000" /*使用优惠卷金额(元)*/,
      "electric_amount": "0.0000" /*电费包抵扣金额(元)*/,
      "bank_info": null,
      "credential": null /*凭证信息*/,
      "reason": null /*关闭原因*/,
      "remark": "" /*备注*/,
      "pay_time": "2020-11-12 10:50:15" /*支付时间*/,
      "confirm_time": null /*确认时间*/,
      "close_time": null /*关闭时间*/,
      "status": 1 /*0待支付 1已支付 2待使用 3使用中 4已过期 5已取消*/,
      "admin_id": 1,
      "first": 1 /*是否是矿机电费聚合订单:0-否/1-是*/,
      "created_at": "2020-11-12 10:50:15" /*创建时间*/,
      "updated_at": "2020-11-12 10:50:15",
      "admin": {
        "id": 1,
        "name": "超级管理员",
        "phone": "13111111111"
      },
      "goods_order": {
        "id": 7,
        "goods_id": 3,
        "order_id": 7,
        "user_id": 0,
        "name": "测试矿机1",
        "price": "1000.0000",
        "image": "01.png" /*矿机图片*/,
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
        "period_id": 1,
        "created_at": "2020-11-12 10:50:15",
        "updated_at": "2020-11-12 10:50:15",
        "period": {
          "id": 1,
          "name": "202001",
          "created_at": null,
          "updated_at": null
        }
      },
      "order": {
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
        "updated_at": "2020-11-12 10:50:15"
      }
    }
  ]
}
```

## 领取新手矿机

**方式**

`POST`

**参数**

none

**路径**

`/api/receive/miner`

**响应**

`Status code 200`

```json
{
  "msg": "反馈成功",
  "code": 0,
  "data": {
    "order_id": 1 /*订单号*/
  }
}
```

## 订单统计

**方式**

`GET`

**参数**

none

**路径**

`/api/orders-count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "closed": 0 /*已关闭*/,
    "wait_pay": 3 /*待支付*/,
    "completed": 1 /*已完成*/,
    "wait_confirm": 2 /*待确认*/
  }
}
```

## 提交凭证

> 仅限银行卡支付的方式 electricOrder.pay_type == bank && electricOrder.status = 0

**方式**

`POST`

**参数**

|    名称    |  类型  | 必须 |   说明   |
| :--------: | :----: | :--: | :------: |
| credential | string |  是  | 提交凭证 |

**路径**

`/api/electric-orders/{electricOrder}/credential`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 关闭订单

> electricOrder.status == 0 可关闭

**方式**

`POST`

**参数**

none

**路径**

`/api/electric-orders/{electricOrder}/close`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 继续支付

> electricOrder.status == 0 && pay_type === alipay

**方式**

`POST`

**参数**

none

**路径**

`/api/electric-orders/{electricOrder}/pay`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

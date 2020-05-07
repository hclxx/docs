# 订单

## 订单列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                             说明                              |
| :----: | :----: | :--: | :-----------------------------------------------------------: |
|  type  | string |  是  | 订单类型: wait-待付款 paid-待确认 success-已完成 close-已关闭 |
| limit  |  int   |  是  |                       条目数 默认为 20                        |
| offset |  int   |  是  |                        条目数 默认为 0                        |

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
      "total_price": "10000.00" /*订单总金额*/,
      "pay_price": "10000.00" /*实际支付金额*/,
      "deduct_num": 0 /*抵扣的CL数量*/,
      "buy_num": 1 /*购买数量*/,
      "specs": 20 /*T量单位为T*/,
      "order_status": 0 /*0-待付款 1-待确认 2-已完成/托管中 3-交易关闭*/,
      "user_id": 1,
      "goods_id": 1,
      "payment_voucher": "xxxxx.png" /*凭证图*/,
      "accounts_receivable": {
        "bank": "中国工商银行",
        "account_name": "陕西存链科技数据有限公司",
        "account_number": "3700xxxxxxx"
      } /*收款账户信息*/,
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
        "reward_power": 0,
        "reward_cl": 0,
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
    "payment_voucher": "adasdasd.png",
    "accounts_receivable": {
      "bank": "中国工商银行",
      "account_name": "陕西存链科技数据有限公司",
      "account_number": "3700xxxxxxx"
    },
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
      "reward_power": 0,
      "reward_cl": 0,
      "sort": 0,
      "specs": 20,
      "is_delete": 0,
      "created_at": null,
      "updated_at": null
    }
  }
}
```

## 提交凭证

**注意**

`只有待支付状态下才能进行提交凭证`

**方式**

`PATCH`

**参数**

|  名称   |  类型  | 必须 | 说明 |
| :-----: | :----: | :--: | :--: |
| voucher | string |  是  | 凭证 |

**路径**

`/api/orders/{order_no}`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 删除订单

**方式**

`DELETE`

**路径**

`/api/orders/{order_no}`

**响应**

`Status code 200`

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

## 创建订单

**方式**

`POST`

**参数**

|    名称    |  类型  | 必须 |    说明     |
| :--------: | :----: | :--: | :---------: |
|  goods_id  |  int   |  是  |   商品 ID   |
|    num     |  int   |  是  |  购买数量   |
| deduct_num |  int   |  是  | CL 抵扣数量 |
|   remark   | string |  否  |  备注信息   |

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

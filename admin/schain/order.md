# 订单

## 订单列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                             说明                              |
| :----: | :----: | :--: | :-----------------------------------------------------------: |
|     order_no     | string |  否  | 订单号 |
| user_name_phone  |  string   |  否  |          用户姓名或电话号码                           |
|      status |  int   |  否  |        订单状态:0-待付款 1-待确认 2-已确认 3-已关闭            |
| start_time |  string   |  否  |                   开始时间                      |
| end_time |  string   |  否  |                   结束时间                      |
|  page      |  int   |  1  |  是  |            当前页数                |
|  limit      |  int   |  20  |  是  |             每页条数                     |

**路径**

`/admin/orders`

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
        "name": "CTL-10矿机"/*商品名称*/
      },
      "user": {
          "id": 9,
          "name": "yanfan5",/*用户名称*/
          "avatar": null/*用户头像*/
      },
      "admin": {
          "id": 1,
          "name": "超级管理员"/*管理员名称*/
      }
    }
  ]
}
```

## 确认订单

**方式**

`PUT`

**路径**

`/admin/orders/{order}/confirm`

**响应**

`Status code 200`

```json
{
    "msg": "确认订单成功",
    "code": 0,
    "data": null
}
```

## 关闭订单

**方式**

`PUT`

**路径**

`/admin/orders/{order}/close`

**参数**

|  名称  |  类型  | 必须 |                             说明                              |
| :----: | :----: | :--: | :-----------------------------------------------------------: |
|     reason     | string |  是  | 关闭订单原因 |

**响应**

`Status code 200`

```json
{
    "msg": "关闭订单成功",
    "code": 0,
    "data": null
}
```

## 修改关闭订单状态

**方式**

`PUT`

**路径**

`/admin/orders/{order}/close/status`


**响应**

`Status code 200`

```json
{
    "msg": "操作订单成功",
    "code": 0,
    "data": null
}

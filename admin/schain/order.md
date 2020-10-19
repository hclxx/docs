# 订单

## 订单列表

**方式**

`GET`

**参数**

|      名称       |  类型  | 必须 |                     说明                     |
| :-------------: | :----: | :--: | :------------------------------------------: |
|    order_no     | string |  否  |                    订单号                    |
| user_name_phone | string |  否  |              用户姓名或电话号码              |
|     status      |  int   |  否  | 订单状态:0-待付款 1-待确认 2-已确认 3-已关闭 |
|   start_time    | string |  否  |                   开始时间                   |
|    end_time     | string |  否  |                   结束时间                   |
| team_id |  int   |  否  |                   团队长用户id                      |
|      page       |  int   |  1   |                      是                      | 当前页数 |
|      limit      |  int   |  20  |                      是                      | 每页条数 |

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
        "name": "CTL-10矿机" /*商品名称*/
      },
      "user": {
        "id": 9,
        "name": "yanfan5" /*用户名称*/,
        "tel": "13929574741" /*用户电话*/,
        "belong_to_user": 19,
        "team": { /*团队长信息*/
            "id": 19,
            "name": "0CGLBA",
            "tel": "13800138000",
            "certification": {  /*团队长实名信息*/
                "id": 5,
                "user_id": 19,
                "name": "奥德赛"
            }
      },
      "admin": {
        "id": 1,
        "name": "超级管理员" /*管理员名称*/
      }
    }
  ]
}
```

## 订单列表

**方式**

`POST`

**参数**

|      名称       |  类型  | 必须 |                     说明                     |
| :-------------: | :----: | :--: | :------------------------------------------: |
|    order_no     | string |  否  |                    订单号                    |
| user_name_phone | string |  否  |              用户姓名或电话号码              |
|     status      |  int   |  否  | 订单状态:0-待付款 1-待确认 2-已确认 3-已关闭 |
|   start_time    | string |  否  |                   开始时间                   |
|    end_time     | string |  否  |                   结束时间                   |

**路径**

`/admin/orders/export/excel`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "filename": "20201012订单导出.xlsx"
  }
}
```

## 订单统计

**方式**

`GET`

**路径**

`/admin/orders/count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "goods_id": 2,
      "price": "196.00" /*单个商品售出总价*/,
      "deduct_num": "4" /*单个商品总抵扣CL数量*/,
      "buy_num": "2" /*单个商品售出总量*/,
      "specs": "40" /*单个商品售出总规格(T)*/,
      "goods": {
        /**/
        "id": 2 /**/,
        "name": "商品2" /*商品名称*/
      }
    },
    {
      "goods_id": 3,
      "price": "198.00",
      "deduct_num": "2",
      "buy_num": "2",
      "specs": "60",
      "goods": {
        "id": 3,
        "name": "商品3"
      }
    },
    {
      "goods_id": 4,
      "price": "196.00",
      "deduct_num": "4",
      "buy_num": "2",
      "specs": "80",
      "goods": {
        "id": 4,
        "name": "商品4"
      }
    }
  ]
}
```

## 订单奖励详情

**方式**

`GET`

**路径**

`/admin/orders/{order}/reward`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "销售提成奖励" /*流水标题*/,
      "user_id": 8 /*用户id*/,
      "target_id": 3 /*订单id*/,
      "amount": "8.0000" /*奖励金额*/,
      "created_at": "2020-05-08 02:42:22",
      "updated_at": "2020-05-08 02:42:22",
      "user": {
        "id": 8,
        "name": "yanfan4" /*用户姓名*/,
        "tel": "17311113103" /*用户电话*/
      }
    },
    {
      "id": 13,
      "title": "代理商培育奖励",
      "user_id": 6,
      "target_id": 3,
      "amount": "2.0000",
      "created_at": "2020-05-08 03:17:40",
      "updated_at": "2020-05-08 03:17:40",
      "user": {
        "id": 6,
        "name": "yanfan2",
        "avatar": null
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

|  名称  |  类型  | 必须 |     说明     |
| :----: | :----: | :--: | :----------: |
| reason | string |  是  | 关闭订单原因 |

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
```

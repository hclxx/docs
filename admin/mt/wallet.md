# 钱包管理

## 钱包流水列表

`/admin/wallets/{user}/logs`

**请求方式**

`GET`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                 说明                  |
| :------: | :----: | :--: | :--: | :-----------------------------------: |
|  start   | string |  无  |  否  |               开始时间                |
|   end    | string |  无  |  否  |               结束时间                |
|  action  |  int   |  无  |  否  |        收支动作:1-支出 2-收入         |
| currency | string |  无  |  否  | dfb-电费包 btc-比特币 eth-eth fil-fil |
|   page   |  int   |  1   |  是  |               当前页数                |
|  limit   |  int   |  20  |  是  |               每页条数                |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "销售提成奖励" /*流水标题*/,
      "user_id": 2,
      "amount": "0.32" /*金额*/,
      "target_user_id": 0,
      "type": "order" /*流水类型*/,
      "target_id": 8,
      "action": 1 /*收入动作: 1-收入 2-支出*/,
      "currency": "cny",
      "status": 0 /*收入状态: 0-待入帐 1-完成 2-失败*/,
      "extend": null,
      "created_at": "2020-01-15 12:31:29",
      "updated_at": "2020-01-15 12:31:29"
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/tbk/wallet/logs",
  "per_page": 20,
  "prev_page_url": null,
  "to": 6,
  "total": 6
}
```

## 用户钱包详情

`/admin/wallets/{user}`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "eth": {
      /*CL钱包*/
      "id": 1,
      "user_id": 1,
      "balance": "90.0000" /*余额*/,
      "income": "100.0000" /*收入*/,
      "expend": "10.0000" /*支出*/,
      "currency": "eth" /*类型*/,
      "wait": "0.0000"
    },
    "btc": {
      /*现金钱包*/
      "id": 2,
      "user_id": 1,
      "balance": "339.0000" /*收入*/,
      "income": "439.0000" /*收入*/,
      "expend": "100.0000" /*支出*/,
      "currency": "btc" /*类型*/,
      "wait": "0.0000"
    },
    "fil": {
      "id": 1,
      "user_id": 2,
      "income": "120.0000" /*累计收入*/,
      "security": "30.0000" /*保障金额*/,
      "withdrawable": "30.0000" /*可提现金额*/,
      "withdraw_ing": "0.0000" /*提现中金额*/,
      "withdraw_finish": "0.0000" /*已提现金额*/,
      "lock": "30.0000" /*锁仓金额*/,
      "pawn": "30.0000" /*抵押金额*/,
      "created_at": "2020-10-21 16:13:30",
      "updated_at": "2020-10-21 16:13:30"
    }
  }
}
```

## 扣除用户钱包

`/admin/wallets/{user}/deduct`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| order_id |  int   |  无  |  否  | 关联订单 id  |
|  amount  | string |  无  |  是  | 扣除 CL 数量 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "msg": "扣除成功",
  "code": 0,
  "data": null
}
```

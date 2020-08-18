# 交易

## 配置信息

**方式**

`GET`

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
      "receive_payment": {
        "bank": "中国银行",
        "name": "张浩",
        "type": 1,
        "number": "6123123123213123",
        "code_pic": null
      },
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

## 发布交易

- 必须实名认证

**方式**

`POST`

**路径**

`/api/trades`

**参数**

| 参数         | 示例值 | 是否必填 | 参数描述                                                                    |
| :----------- | :----- | :------- | :-------------------------------------------------------------------------- |
| buy_type     | int    | 否       | 购买类型:1-数量/2-金额                                                      |
| need_type    | int    | 是       | 需求类型:1-买入/2-卖出                                                      |
| pay_type     | int    | 否       | 支付方式:1-银行卡/2-支付宝/3-usdt                                           |
| need_amount  | int    | 是       | 需求金额                                                                    |
| pay_password | string | 否       | 支付密码:1.当 need_type 为 2 必须,2.当 need_type 为 1 且 pay_type 为 3 必须 |

**响应**

`Status code 200`

```json
{
  "msg": "发布成功",
  "code": 0,
  "data": null
}
```

## 交易下单[单笔]

- 必须实名认证

**方式**

`POST`

**路径**

`/api/trades/{trade}/order`

**参数**

| 参数         | 示例值 | 是否必填 | 参数描述                                                               |
| :----------- | :----- | :------- | :--------------------------------------------------------------------- |
| pay_password | int    | 否       | 支付密码:1.pay_type 为 3 必须,2.pay_type 不为 3 且 need_type 为 1 必须 |

**响应**

`Status code 200`

```json
{
  "msg": "下单成功",
  "code": 0,
  "data": null
}
```

## 交易下单[批量]

- 必须实名认证且仅支持买入 usdt 交易订单

**方式**

`POST`

**路径**

`/api/trades/batch-order`

**参数**

| 参数      | 示例值 | 是否必填 | 参数描述     |
| :-------- | :----- | :------- | :----------- |
| trade_ids | array  | 是       | 交易 ID 集合 |

**响应**

`Status code 200`

```json
{
  "msg": "下单成功",
  "code": 0,
  "data": null
}
```

## 线下提交凭证

- 必须实名认证且仅支持买入 usdt 交易订单

**方式**

`patch`

**路径**

`/api/trades/{trade}/voucher`

**参数**

| 参数    | 示例值 | 是否必填 | 参数描述 |
| :------ | :----- | :------- | :------- |
| voucher | string | 是       | 凭证截图 |

**响应**

`Status code 200`

```json
{
  "msg": "提交成功",
  "code": 0,
  "data": null
}
```

## 线下确认交易

**方式**

`patch`

**路径**

`/api/trades/{trade}/confirm`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "确认成功",
  "code": 0,
  "data": null
}
```

## 线下发送提醒

**方式**

`patch`

**路径**

`/api/trades/{trade}/remind`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "发送成功",
  "code": 0,
  "data": null
}
```

## 取消交易

**方式**

`patch`

**路径**

`/api/trades/{trade}/cancel`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "取消成功",
  "code": 0,
  "data": null
}
```

## 我的订单

**方式**

`GET`

**路径**

`/api/trades-orders`

**参数**

| 参数      | 示例值 | 是否必填 | 参数描述                                                  |
| :-------- | :----- | :------- | :-------------------------------------------------------- |
| limit     | int    | 是       | 条目数量 默认 20                                          |
| offset    | int    | 是       | 偏移量 默认 0                                             |
| status    | int    | 否       | 状态:-1-全部/0-待匹配/1-待付款/2-进行中/3-已完成/4-已取消 |
| need_type | int    | 是       | 需求类型:1-买入/2-卖出                                    |

```
待匹配:

status === 0

待我付款：

1.status === 1 && need_type === 1 && voucher === null && publisher === self.id
2.status === 1 && need_type === 2 && voucher === null && recipient === self.id
待对方付款：

1.status === 1 && need_type === 1 && voucher === null && recipient === self.id
2.status === 1 && need_type === 2 && voucher === null && publisher === self.id

待卖家确认：

1.status === 1 && need_type === 2 && voucher !== null && publisher === self.id
2.status === 1 && need_type === 1 && voucher !== null && recipient === self.id

待我确认：

1.status === 1 && need_type === 2 && voucher !== null && recipient === self.id
2.status === 1 && need_type === 1 && voucher !== null && publisher === self.id

平台介入中：

status === 4

交易完成：
status === 2

已取消：

status === 3

已关闭：

status === 5

```

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
      "need_num": "1000.0000" /*创豆需求数量单位个*/,
      "need_price": "1.0000" /*创豆单价单位元*/,
      "total_amount": "1000.0000" /*总额单位元*/,
      "voucher": "voucher.png" /*凭证信息*/,
      "buy_type": 1 /*购买类型:1-数量/2-金额*/,
      "need_type": 1 /*需求类型:1-买入/2-卖出*/,
      "pay_type": 3 /*支付方式:1-银行卡/2-支付宝/3-usdt*/,
      "platform": null,
      "receive_payment": {
        "name": "张三" /*姓名*/,
        "number": "alipay@qq.com" /*收款账号*/,
        "bank": "中国银行" /*开户行*/,
        "type": 1 /*1-银行卡/2-支付宝*/,
        "code_pic": null /*收款码*/
      },
      "match_at": "2020-08-12 20:27:26" /*匹配时间*/,
      "cancel_at": "2020-08-12 20:27:26" /*自动取消时间*/,
      "frozen_at": "2020-08-12 20:27:26" /*自动冻结时间*/,
      "submit_at": "2020-08-12 20:27:26" /*提交时间*/,
      "platform_at": "2020-08-12 20:27:26" /*平台介入时间*/,
      "close_at": "2020-08-12 20:27:26" /*关闭时间*/,
      "complete_at": "2020-08-12 20:27:26" /*完成时间*/,
      "revoke_at": "2020-08-12 20:27:26" /*撤销时间*/,
      "status": 0 /*0-待匹配/1-进行中/2-已完成/3-撤销/4-平台介入中/5-交易关闭*/,
      "created_at": "2020-08-12 20:27:26",
      "updated_at": "2020-08-12 20:27:26",
      "cancel_seconds": 0 /*匹配之后未提交凭证取消时间*/,
      "frozen_seconds": 0 /*提交凭证后对方未确认平台介入时间*/,
      /*发布者*/
      "publisher_user": {
        "id": 1,
        "name": "CAJQCIML",
        "phone": "183****4309",
        "avatar": null
      },
      /*下单者*/
      "recipient_user": {
        "id": 2,
        "name": "CAJQCIML",
        "phone": "183****4309",
        "avatar": null
      }
    }
  ]
}
```

## 交易详情

**方式**

`GET`

**路径**

`/api/trades-orders/{trade}`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 9 /*交易ID*/,
    "publisher": 1,
    "recipient": 0,
    "need_num": "1000.0000" /*创豆需求数量单位个*/,
    "need_price": "1.0000" /*创豆单价单位元*/,
    "total_amount": "1000.0000" /*总额单位元*/,
    "voucher": "voucher.png" /*凭证信息*/,
    "buy_type": 1 /*购买类型:1-数量/2-金额*/,
    "need_type": 1 /*需求类型:1-买入/2-卖出*/,
    "pay_type": 3 /*支付方式:1-银行卡/2-支付宝/3-usdt*/,
    "platform": null,
    "receive_payment": {
      "name": "张三" /*姓名*/,
      "number": "alipay@qq.com" /*收款账号*/,
      "bank": "中国银行" /*开户行*/,
      "type": 1 /*1-银行卡/2-支付宝*/
    },
    "match_at": "2020-08-12 20:27:26" /*匹配时间*/,
    "cancel_at": "2020-08-12 20:27:26" /*自动取消时间*/,
    "frozen_at": "2020-08-12 20:27:26" /*自动冻结时间*/,
    "submit_at": "2020-08-12 20:27:26" /*提交时间*/,
    "platform_at": "2020-08-12 20:27:26" /*平台介入时间*/,
    "close_at": "2020-08-12 20:27:26" /*关闭时间*/,
    "complete_at": "2020-08-12 20:27:26" /*完成时间*/,
    "revoke_at": "2020-08-12 20:27:26" /*撤销时间*/,
    "status": 0 /*0-待匹配/1-进行中/2-已完成/3-撤销/4-平台介入中/5-交易关闭*/,
    "created_at": "2020-08-12 20:27:26",
    "updated_at": "2020-08-12 20:27:26",
    "cancel_seconds": 0 /*匹配之后未提交凭证取消时间*/,
    "frozen_seconds": 0 /*提交凭证后对方未确认平台介入时间*/,
    /*发布者*/
    "publisher_user": {
      "id": 1,
      "name": "CAJQCIML",
      "phone": "183****4309",
      "avatar": null
    },
    /*下单者*/
    "recipient_user": {
      "id": 2,
      "name": "CAJQCIML",
      "phone": "183****4309",
      "avatar": null
    }
  }
}
```

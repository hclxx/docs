# 提现

## 申请列表

`admin/withdraw`

**请求方式**

`GET`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   limit   |  int   |  15  |  否  | 每页条数 |
| target_id |  int   |  无  |  否  | 商家 ID  |
|   phone   | string |  无  |  否  |  手机号  |
|   email   | string |  无  |  否  |   邮箱   |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "merchant_id": 1,
      "address": {
        "id": 1,
        "name": "名称", // 名称
        "address": "18728624682", // 提现地址
        "type": 1 //  1: 支付宝 2: 银行卡
      },
      "amount": "100", // 提现金额
      "charge": "0", // 手续费
      "type": 1,
      "status": "1", // 0: 待处理 1: 成功 2: 失败
      "handle_time": "2019-04-29 16:20:58", //  审核人审核时间
      "created_at": "2019-02-14 15:16:18",
      "updated_at": "2019-02-14 15:16:18",
      "name": "商家", // 商家名称
      "phone": "18728624682", // 商家手机号
      "email": "1986513441@qq.com" // 邮箱
      "handler": {  //  审核人信息
          "id": 1,
          "name": "超级管理员",
          "phone": "13111111111"
      }
    }
  ],
  "first_page_url": "http://comc.com/admin/withdraw?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/withdraw?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/withdraw",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 处理提现

`admin/withdraw/{withdraw}`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |      说明       |
| :----: | :----: | :--: | :--: | :-------------: |
| action |  int   |  无  |  是  | 1: 通过 2: 驳回 |
| remark | string |  无  |  否  |      说明       |

**返回体**

```json
{
  "message": "操作成功"
}
```

## 用户提现列表

`admin/wallets/cash`

**请求方式**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| limit |  int   |  15  |  否  | 每页条数 |
| txid  | string |  无  |  否  | 交易 id  |
|  to   | string |  无  |  否  | 提现地址 |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 13, // id
      "user_id": 95, // 用户ID
      "from": "0x21c2c51f71fc56bbba427d6b2239e9c1f4cf581e",
      "to": "0x1E2F8c2b4B659732b9D4989Dc28B5EdF1EB253e0", // 提现地址
      "charge": "2.20000000", // 手续费
      "amount": "10.00000000", // 金额
      "status": 4, // 状态:0-待审核 1-审核通过 2-驳回 3-确认中 4-确认完成 5-交易失败
      "currency": "comc", // 货币类型 comc-comc
      "transaction_id": 15,
      "txid": "0xb3e227b0410841fad89b52648e454bf31e95f3b4c64f45ec0fdef746254eb023", // 交易id
      "remark": null, // 驳回备注
      "created_at": "2019-03-16 19:43:46", // 提交时间
      "updated_at": "2019-03-16 19:46:09", // 处理时间
      "user": {
        // 用户
        "id": 95,
        "phone": 123123748898, // 手机号
        "name": "089J45", // 昵称
        "avatar": null // 头像
      }
    },
    {
      "id": 12,
      "user_id": 95,
      "from": "0x21c2c51f71fc56bbba427d6b2239e9c1f4cf581e",
      "to": "0x1E2F8c2b4B659732b9D4989Dc28B5EdF1EB253e0",
      "charge": "2.20000000",
      "amount": "10.00000000",
      "status": 4,
      "currency": "comc",
      "transaction_id": 14,
      "txid": "0xeb003dd2794a7abaa58995351b6314f354850e98f5f3ed9cdf9b50851ca16367",
      "remark": null,
      "created_at": "2019-03-16 17:25:12",
      "updated_at": "2019-03-16 19:44:43",
      "user": {
        "id": 95,
        "name": "089J45",
        "avatar": null
      }
    }
  ],
  "first_page_url": "http://shop.igoods.io/admin/wallets/cash?page=1",
  "from": 1,
  "last_page": 2,
  "last_page_url": "http://shop.igoods.io/admin/wallets/cash?page=2",
  "next_page_url": "http://shop.igoods.io/admin/wallets/cash?page=2",
  "path": "http://shop.igoods.io/admin/wallets/cash",
  "per_page": 15,
  "prev_page_url": null,
  "to": 15,
  "total": 17
}
```

## 处理用户提现列表

`admin/wallets/cash/:id`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |                      说明                       |
| :----: | :----: | :--: | :--: | :---------------------------------------------: |
| status |  int   |  无  |  是  |                 1: 通过 2: 驳回                 |
| remark | string |  无  |  否  |              说明 status 为 2 必须              |
|  txid  | string |  无  |  否  | 审核状态:audit_type 为 manual 必传，auto 无需传 |

**返回体**

```json
{
  "message": "操作成功",
  "status": 2
}
```

## 人工处理提现失败订单

`admin/wallets/cash/:id/manual`

**请求方式**

`PATCH`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |  说明  |
| :--: | :----: | :--: | :--: | :----: |
| txid | string |  无  |  是  | 交易号 |

**返回体**

```json
{
  "message": "处理成功"
}
```

## 获取根钱包金额

`admin/wallets/balance`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
  "eth": "0.00782973" /*ETH 余额*/,
  "comc": "306.17000000" /*COMC 余额*/
}
```

## 充值归集统计

`admin/wallets/transactions-statistics`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
[
  {
    "uncollected": "100.000000" /*未归集金额*/,
    "collected": "0.000000" /*已归集总额*/
  }
]
```

## 提现统计

`admin/wallets/cash-statistics`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
[
  {
    "audit": "100.00000000" /*提现待审核金额*/,
    "pass": "20.00000000" /*审核通过金额*/,
    "reject": "0.00000000" /*提现被驳回金额*/,
    "confirm": "0.00000000" /*提现确认中金额*/,
    "sucess": "0.00000000" /*提现成功金额*/
  }
]
```

## 代币申请提现列表

`admin/coin/withdrawal`

**请求方式**

`GET`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|  limit   |  int   |  15  |  是  |              每页条数               |
|  status  |  int   |  无  |  否  | 状态:0-待审核/1-审核成功/2-审核驳回 |
| username | string |  无  |  否  |            用户呢称检索             |
|  phone   | string |  无  |  否  |             手机称检索              |
|   page   |  int   |  无  |  是  |                页码                 |
|   type   | string |  35  |  否  |        类型:35-提现/34-收款         |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 11,
      "title": "转账",
      "user_id": 1,
      "target_user_id": 0,
      "target_type": "coin:recharge",
      "target_id": 0,
      "amount": "100.00000000" /*提现金额*/,
      "balance": "9600.00000000",
      "curr_balance": "9700.00000000",
      "currency": "usdt" /*代币符号*/,
      "action": 2,
      "status": 2 /*状态:0-待审核/1-审核成功/2-审核驳回*/,
      "type": 35,
      "extend": {
        "to": "123123123213123123123" /*提币地址*/,
        "fee": "40" /*手续费 到账金额 = 提现金额-手续费*/,
        "reason": "reason" /*驳回原因*/
      },
      "created_at": "2020-07-02 06:59:37" /*申请时间*/,
      "updated_at": "2020-07-02 15:14:28",
      /*用户信息*/
      "user": {
        "id": 1,
        "name": "用户1",
        "avatar": "asdsad.png",
        "phone": "1838227123123"
      }
    }
  ],
  "first_page_url": "123213",
  "from": 1,
  "last_page": 1,
  "last_page_url": "123213",
  "next_page_url": null,
  "path": "123123",
  "per_page": 20,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 代币申请提现审核

`admin/coin/withdrawal/audit`

**请求方式**

`PATCH`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |              说明               |
| :----: | :----: | :--: | :--: | :-----------------------------: |
| log_id |  int   |  无  |  是  |             申请 ID             |
| status |  int   |  无  |  是  | 状态:0-待审核/1-成功/2-审核驳回 |
| reason | string |  无  |  否  |         驳回原因，选填          |

**返回体**

```json
{
  "message": "处理成功"
}
```

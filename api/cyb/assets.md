# 资产


## 我的钱包列表

**方式**

`GET`

**路径**

`/api/wallets/all`

**参数**

|   名称   |  类型  | 必须 |             说明             |
| :------: | :----: | :--: | :--------------------------: |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "balance": "7.0000",
            "currency": "cd"
        },
        {
            "id": 2,
            "user_id": 1,
            "balance": "0.0000",
            "currency": "usdt"
        },
        {
            "id": 3,
            "user_id": 1,
            "balance": "0.0000",
            "currency": "tg"
        }
    ]
}
```

## 我的资产

**方式**

`GET`

**路径**

`/api/wallets`

**参数**

|   名称   |  类型  | 必须 |             说明             |
| :------: | :----: | :--: | :--------------------------: |
| currency | string |  是  | 资产类型: cd-创豆，usdt, tg-糖果 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 4,
    "user_id": 3,
    "balance": "0.0000",
    "currency": "cd" /*cd-创豆，usdt, tg-糖果*/
  }
}
```

## 资产日志

**方式**

`GET`

**路径**

`/api/wallets/logs`

**参数**

|   名称   |  类型  | 必须 |               说明                |
| :------: | :----: | :--: | :-------------------------------: |
| currency | string |  是  |   资产类型: cd-创豆，usdt, tg-糖果    |
|  action  | string |  否  | 收支动作: income-收入 expend-支出 |
|  limit   |  int   |  是  |         条目数量 默认 20          |
|  offset  |  int   |  是  |           偏移量 默认 0           |
|  types   | string |  否  |      流水类型: 多个用","分割      |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "title": "挖矿" /*标题*/,
      "user_id": 1,
      "target_user_id": 2,
      "target_id": 0,
      "amount": "1.0000" /*金额*/,
      "action": 2 /*收支动作: 1-收入/2-支出*/,
      "status": 1 /*状态:0-待完成/1-成功/2-失败*/,
      "type": "reward",/*withdrawal-提币 认购节点-buy:node' 静态收益-static:income 动态收益-dynamic:income
      节点认购到期赎回-return:node 等量发车-equal:bus ctc卖出-ctc:sell ctc 买入-ctc:buy ctc 撤销-ctc:revoke
      ctc 交易未提交-ctc:unsubmit 清空资产-clear:asset 创豆兑换usdt-conversion*/
      "currency": "sccb" /*cd-创豆，usdt, tg-糖果*/,
      "extend": null,
      "created_at": "2020-05-03 14:46:49",
      "updated_at": "2020-05-03 14:46:49",
      /*目标用户信息*/
      "target_user": {
        "id": 2,
        "name": "张三",
        "avatar": null,
        "gender": 0,
        "phone": "183****4308",
        "code": "",
        "power": 0,
        "cllection_time": null,
        "market_id": 0
      }
    }
  ]
}
```

## 创豆总收益

**方式**

`GET`

**路径**

`/api/wallets/cd/income`

**参数**

|   名称   |  类型  | 必须 |             说明             |
| :------: | :----: | :--: | :--------------------------: |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "yesterday": "0.0000",  /*昨日总收益*/
        "total": "561.9000"     /*总收益*/
    }
}
```

## 申请 CD/USDT 提币

**方式**

`POST`

**路径**

`/api/withdrawal`

**参数**

|    名称    |  类型  | 必须 |        说明        |
| :--------: | :----: | :--: | :----------------: |
|  pay_pass  | string |  是  |      支付密码      |
|    num     | string |  是  |      提币数量      |
| currency | string |  是  | 提币类型：cd,usdt |

**响应**

`Status code 200`

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "user_id": 3,
    "amount": 200,
    "service_charge": 0,
    "address": "asdasdsad",
    "currency": "usdt",
    "reason": null,
    "status": 0,
    "handler_id": 0,
    "updated_at": "2020-06-17 16:11:36",
    "created_at": "2020-06-17 16:11:36",
    "id": 19
  }
}
```

## cd 兑换 usdt

**方式**

`POST`

**路径**

`/api/conversion`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| pay_pass | string |  是  | 支付密码 |
|   num    | string |  是  | cd 数量  |
|   type    | string |  是  | trade-交易打赏创豆,node-节点打赏创豆 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

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
            "currency": "hd"
        },
        {
            "id": 2,
            "user_id": 1,
            "balance": "0.0000",
            "currency": "dstt"
        },
        {
            "id": 3,
            "user_id": 1,
            "balance": "0.0000",
            "currency": "eth"
        },
        {
            "id": 4,
            "user_id": 1,
            "balance": "0.0000",
            "currency": "usdt"
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
| currency | string |  是  | 资产类型: hd-火豆，dstt-dstt |

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
    "currency": "hd" /*dstt,hd-火豆*/
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
| currency | string |  是  |   资产类型: hd-火豆，dstt-dstt    |
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
      "type": "reward" /*打赏-reward,获赏-get:reward,闪兑-hd:to:dstt,新手奖励-rookie:reward,提币-withdrawal，参与活动-activity,一级级邀请-one:invite,二级级邀请-two:invite*/,
      "currency": "sccb" /*cny-现金，scc-sccb*/,
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

## 申请 DSTT/USDT/ETH 提币

**方式**

`POST`

**路径**

`/api/withdrawal`

**参数**

|    名称    |  类型  | 必须 |        说明        |
| :--------: | :----: | :--: | :----------------: |
|  pay_pass  | string |  是  |      支付密码      |
|    num     | string |  是  |      提币数量      |
|  address   | string |  是  |      提币地址      |
| address_qr | string |  否  | 提币地址二维码截图 |
| currency | string |  是  | 提币类型：dstt,eth,usdt |

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
    "address_qr": "addressqr.png" /*截图*/,
    "currency": "dstt",
    "reason": null,
    "status": 0,
    "handler_id": 0,
    "updated_at": "2020-06-17 16:11:36",
    "created_at": "2020-06-17 16:11:36",
    "id": 19
  }
}
```

## 闪兑 hd 兑 dstt/usdt/eth

**方式**

`POST`

**路径**

`/api/conversion/dstt`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| pay_pass | string |  是  | 支付密码 |
|   num    | string |  是  | HD 数量  |
| currency | string |  是  | 闪兑目标类型：dstt,eth,usdt |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 闪兑 dstt 兑 hd

**方式**

`POST`

**路径**

`/api/conversion/hd`

**参数**

|   名称   |  类型  | 必须 |   说明    |
| :------: | :----: | :--: | :-------: |
| pay_pass | string |  是  | 支付密码  |
|   num    | string |  是  | DSTT 数量 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 获取平台手续费

**方式**

`GET`

**路径**

`/api/service-fee`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "hd_service_fee": "529991"
  }
}
```

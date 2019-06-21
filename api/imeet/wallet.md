# 钱包

## 获取钱包金额

**方式**

`GET`

**路径**

`/api/wallet/balance`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| coin | string |  是  | 代币类型: ore-矿石 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "balance": "0"
    }
}
```

## 钱包转账

**方式**

`POSG`

**路径**

`/api/wallet/transfer`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :-------: |
| amount | string |  是  |  转账金额 |
| pay_pass | string |  是  | 支付密码 |
| user | int |  是  | 目标用户  |

**响应**

`Status code 200`

```json
{
    "msg": "转账成功",
    "code": 0,
    "data": null
}
```

## 钱包流水

**方式**

`GET`

**路径**

`/api/wallet/logs`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| limit | int |  是  | 条目数 |
| offset | int |  是  | 偏移量 |
| coin | strig |  是  | 流水类型:ore-矿石  |
| action | int |  是  | 收支类型:0-所有 1-支出 2-收入  |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 23,
            "title": "转账支出",
            "user_id": 5,
            "target_user_id": 3,
            "target_type": "user",
            "target_id": 3,
            "type": "transfer",
            "amount": "10.00000000",
            "coin": "ore",
            "action": 1,
            "status": 1,
            "extend": null,
            "created_at": "2019-06-17 13:44:45",
            "updated_at": "2019-06-17 13:44:45",
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            "target_user": {
                "id": 3,
                "name": "eric",
                "avatar": null
            }
        }
    ]
}
```
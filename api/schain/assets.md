# 资产

## 我的资产

**方式**

`POST`

**路径**

`/api/wallet/asstes`

**参数**

|   名称   |  类型  | 必须 |           说明           |
| :------: | :----: | :--: | :----------------------: |
| currency | string |  是  | 资产类型: cny-现金 cl-cl |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "user_id": 1,
    "balance": "998.0000" /*资产余额*/,
    "income": "0.0000" /*总收益*/,
    "expend": "2.0000" /*总支出*/,
    "wait": "0.0000" /*待反还*/,
    "currency": "cl",
    "power": 3 /*能量值*/
  }
}
```

## 资产日志

**方式**

`GET`

**路径**

`/api/wallet/logs`

**参数**

|   名称   |  类型  | 必须 |           说明           |
| :------: | :----: | :--: | :----------------------: |
| currency | string |  是  | 资产类型: cny-现金 cl-cl |
|  limit   |  int   |  是  |     条目数量 默认 20     |
|  offset  |  int   |  是  |      偏移量 默认 0       |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "title": "转账交易" /*标题*/,
      "user_id": 1,
      "target_user_id": 2,
      "target_id": 0,
      "amount": "1.0000" /*金额*/,
      "action": 2 /*收支动作: 1-收入/2-支出*/,
      "status": 1 /*状态:0-待完成/1-成功/2-失败*/,
      "type": "transfer:expend" /*类型:transfer:expend-转账交易支出/transfer:income-转账交易收入/goods:deduct-商品抵扣*/,
      "currency": "cl" /*cny-现金/cl-矿石cl*/,
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

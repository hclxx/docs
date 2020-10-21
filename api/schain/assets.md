# 资产

## 我的资产

**方式**

`GET`

**路径**

`/api/wallet/asstes`

**参数**

|   名称   |  类型  | 必须 |           说明           |
| :------: | :----: | :--: | :----------------------: |
| currency | string |  是  | 资产类型: cny-现金 my-my |

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
    "currency": "my",
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

|   名称   |  类型  | 必须 |               说明                |
| :------: | :----: | :--: | :-------------------------------: |
| currency | string |  是  |     资产类型: cny-现金 my-my fil-fil     |
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
      "title": "转账交易" /*标题*/,
      "user_id": 1,
      "target_user_id": 2,
      "target_id": 0,
      "amount": "1.0000" /*金额*/,
      "action": 2 /*收支动作: 1-收入/2-支出*/,
      "status": 1 /*状态:0-待完成/1-成功/2-失败*/,
      "type": "transfer:expend" /*类型:goods:deduct-订单商品抵扣/return:deduct-退还订单商品抵扣/sale:commission-销售提成/agent:reward-代理商培育奖励/cny:withdrawal-现金提现/dig:ore-挖矿/transfer:income-转账收益/transfer:expend-转账支出*/,
      "currency": "my" /*cny-现金/my-矿石*/,
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

## CL 转账

**方式**

`POST`

**路径**

`/api/wallet/transfer`

**参数**

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      | string |  是  | 转账数量 |
| pay_password | string |  是  | 支付密码 |
|    phone     | string |  是  |  手机号  |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "msg": "已转入张三的CL资产" /*结果说明*/,
    "num": "2000" /*数量*/
  }
}
```

## 收益提现

**方式**

`POST`

**路径**

`/api/wallet/withdrawal`

**参数**

|     名称     |  类型  | 必须 |    说明    |
| :----------: | :----: | :--: | :--------: |
|    amount    | string |  是  |  转账数量  |
| pay_password | string |  是  |  支付密码  |
|    number    | string |  是  | 支付宝账号 |
|     name     | string |  是  |  真实姓名  |

**响应**

`Status code 200`

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "status": 0,
    "reason": null,
    "handler_id": 0,
    "amount": "100" /*金额*/,
    "service_charge": 1,
    "user_id": 1,
    "account_type": "alipay",
    "account_info": {
      "number": "alipay@test.com" /*账号*/,
      "name": "张三" /*姓名*/
    },
    "updated_at": "2020-05-08 14:31:38",
    "created_at": "2020-05-08 14:31:38" /*申请时间*/,
    "id": 5
  }
}
```

# 提现管理

## 提现配置

`api/withdrawals/config`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "获取成功",
  "code": 0,
  "data": {
    "ratio": "0.001" /*ct和rmb之间比列 ct * ratio = rmb  单位(元)*/,
    "user_min": "200" /*最低提现额度 单位(元)*/,
    "user_day_limit": "2000" /*用户每日限额 单位(元)*/,
    "platform_day_limit": "200000" /*平台限额 单位(元)*/
  }
}
```

## 申请提现

`api/withdrawals`

**请求方法**

`POST`

**参数**

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      | number |  是  | CT 数量  |
|   pay_pass   | string |  是  | 支付密码 |
| account_info | object |  是  | 账户信息 |

**account_info**

```json
{
  "exchange_id": "123455666"
}
```

**返回体**

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "status": 0,
    "reason": null,
    "handler_id": 0,
    "amount": 0 /*申请提现的RMB金额*/,
    "user_id": 4,
    "coin": "ct",
    "num": 200000 /*使用的CT(AGM)数量*/,
    "account_type": "exchange" /*交易所*/,
    "account_info": {
      "exchange_id": "12345" /*交易所id*/
    },
    "updated_at": "2019-10-25 16:40:42" /*申请时间*/,
    "created_at": "2019-10-25 16:40:42",
    "id": 6
  }
}
```

## 铉算奖励申请提现

`api/xuansuan/withdrawal/reward`

**请求方法**

`POST`

**参数**

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      | number |  是  | 提现数量 |
|   pay_pass   | string |  是  | 支付密码 |
| account_info | object |  是  | 提现地址 |

**account_info**

```json
{
  "to_address": "123455666"
}
```

**返回体**

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "status": 0 /*状态:0-等待 1-成功 2-失败*/,
    "reason": null /*驳回原因*/,
    "handler_id": 0 /*审核人id*/,
    "amount": 0,
    "user_id": 1 /*用户id*/,
    "coin": "amg" /*提币类型*/,
    "ratio": 0,
    "num": "10" /*提币数量*/,
    "account_type": "exchange" /*账户类型：exchange-交易所*/,
    "account_info": {
      /*账户信息*/
      "to_address": "123456" /*提现到的地址*/,
      "fee": "11" /*手续费*/,
      "type": "reward" /*提现类型：reward-奖励提现 unlock-解仓提现*/,
      "from_address": "123446" /*提现出的地址*/
    },
    "updated_at": "2020-04-15 13:57:29",
    "created_at": "2020-04-15 13:57:29",
    "id": 3
  }
}
```

## 绑定解仓提现地址

`api/xuansuan/withdrawal/{id}/address`

**请求方法**

`POST`

**参数**

|  名称   |  类型  | 必须 |     说明     |
| :-----: | :----: | :--: | :----------: |
| address | string |  是  | 绑定提现地址 |

**返回体**

```json
{
  "msg": "绑定成功",
  "code": 0,
  "data": null
}
```

## 解仓提现

`api/xuansuan/withdrawal/{id}/unlock`

**请求方法**

`POST`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| pay_pass | string |  是  | 支付密码 |

**返回体**

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "status": 0 /*状态:0-等待 1-成功 2-失败*/,
    "reason": null /*驳回原因*/,
    "handler_id": 0 /*审核人id*/,
    "amount": 0,
    "user_id": 1 /*用户id*/,
    "coin": "amg" /*提币类型*/,
    "ratio": 0,
    "num": "10" /*提币数量*/,
    "account_type": "exchange" /*账户类型：exchange-交易所*/,
    "account_info": {
      /*账户信息*/
      "to_address": "123456" /*提现到的地址*/,
      "fee": "11" /*手续费*/,
      "type": "reward" /*提现类型：reward-奖励提现 unlock-解仓提现*/,
      "from_address": "123446" /*提现出的地址*/
    },
    "updated_at": "2020-04-15 13:57:29",
    "created_at": "2020-04-15 13:57:29",
    "id": 3
  }
}
```

## 解仓提现列表

`api/xuansuan/withdrawal/unlock`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |  说明  |
| :----: | :--: | :--: | :----: |
| limit  | int  |  是  | 条目数 |
| offset | int  |  是  | 偏移量 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current": "100.00000000" /*当前解锁AGM数量*/,
    "total": "100.00000000" /*累计解锁AGM数量*/,
    "items": [
      {
        "id": 1 /*主键id*/,
        "user_id": 1 /*用户id*/,
        "sc_num": "100.00000000" /*锁仓数量*/,
        "jc_num": "13.32000000" /*解仓数量*/,
        "withdrawal_address": "111111" /*提现地址*/,
        "reward_time": "2020-04-16 00:00:00" /*奖励生效时间*/,
        "progress": 2 /*解仓次数*/,
        "status": 2 /*状态：0-无效1-有效2-解仓中3-解仓完成*/,
        "allow": false /*今日是否还能提现*/,
        "created_at": "2020-04-16 00:00:00",
        "updated_at": "2020-04-15 14:14:48"
      }
    ]
  }
}
```

## 获取资产

`api/xuansuan/balance`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "user_id": 1,
    "reward_balance": "10090.00000000" /*AGM 余额*/,
    "usdt_balance": "10100.00000000" /*USDT 余额*/,
    "reward_income": "0.00000000",
    "total_balance": "9990.00000000",
    "address": "12312321" /*提币地址*/,
    "created_at": null,
    "updated_at": "2020-06-22 14:50:08"
  }
}
```

## 兑换

`api/xuansuan/exchange`

**请求方法**

`POST`

**参数**

|     名称     |  类型  | 必须 |                                说明                                 |
| :----------: | :----: | :--: | :-----------------------------------------------------------------: |
| pay_password | string |  是  |                              支付密码                               |
|     type     | string |  是  |          兑换类型:agm-(usdt 兑换 agm)/usdt-(agm 兑换 usdt)          |
|     num      |  int   |  是  | 兑换数量，如 type 为 agm，num 为需兑换的 usdt 数量，反之为 agm 数量 |

**返回体**

```json
{
  "msg": "兑换成功",
  "code": 0,
  "data": null
}
```

## USDT 提现

`api/xuansuan/withdrawal/usdt`

**请求方法**

`POST`

**参数**

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      | number |  是  | 提现数量 |
|   pay_pass   | string |  是  | 支付密码 |
| account_info | object |  是  | 提现地址 |

**account_info**

```json
{
  "to_address": "123455666"
}
```

**返回体**

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "status": 0 /*状态:0-等待 1-成功 2-失败*/,
    "reason": null /*驳回原因*/,
    "handler_id": 0 /*审核人id*/,
    "amount": 0,
    "user_id": 1 /*用户id*/,
    "coin": "usdt" /*提币类型*/,
    "ratio": 0,
    "num": "10" /*提币数量*/,
    "account_type": "exchange" /*账户类型：exchange-交易所*/,
    "account_info": {
      /*账户信息*/
      "to_address": "123456" /*提现到的地址*/,
      "fee": "11" /*手续费*/,
      "type": "usdt" /*提现类型：reward-奖励提现 unlock-解仓提现 usdt-提现*/,
      "from_address": "123446" /*提现出的地址*/
    },
    "updated_at": "2020-04-15 13:57:29",
    "created_at": "2020-04-15 13:57:29",
    "id": 3
  }
}
```

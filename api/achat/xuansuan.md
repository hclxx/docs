# 铉算接口

## 检查结算时间

`api/checktime`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "status": false /*true-是 false-否*/,
    "stime": "2020-04-15 00:00:00",
    "etime": "2020-04-15 02:00:00",
    "ntime": "2020-04-15 19:23:59"
  }
}
```

## 铉算首页

`api/xuansuan/index`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "static_num": "1.02000000" /*昨日价格增长分发量*/,
    "dynamic_num": "1.02000000" /*昨日矿池增长分发量*/,
    "up_num": "0.00" /*昨日矿池新增数量*/,
    "pool_total": "0" /*矿池总数*/,
    "pool_rate": "0" /*矿池增率*/,
    "static_reward": "12313" /*昨日参与奖励*/,
    "dynamic_reward": "12313" /*昨日加权奖励*/,
    "performance": "55.00000000" /*昨日业绩合*/,
    "price_rate": "0.01642819" /*24小时价格行情*/,
    "reward_total": "0.00000000" /*累计奖励*/,
    "lock_num": "0.00" /*锁仓量*/,
    "total_balance": "0.00" /*总资产*/,
    "reward_balance": "0.00" /*奖励余额*/,
    "fixed_num": "0.00" /*新增 日固定分发量*/,
    "day_dynamic_min_num": "50000.00" /*当日动态分发最低增长量*/
  }
}
```

## 锁仓详情

`api/xuansuan/lockcabin/detail`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "explain": "说明说明说明" /*锁仓说明*/,
    "address": "adasdasdasdasdasdasdas" /*钱包地址*/,
    "need_num": "0" /*激活需要的数量 等于0不做呈现 大于0做呈现*/
  }
}
```

## 余额锁仓

`api/xuansuan/lockcabin`

**请求方法**

`POST`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
|   num    | number |  是  | 锁仓数量 |
| pay_pass | string |  是  | 支付密码 |

**返回体**

```json
{
  "msg": "锁仓成功",
  "code": 0,
  "data": null
}
```

## 解除锁仓

`api/xuansuan/unlockcabin`

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| pay_pass | string |  是  | 支付密码 |

**请求方法**

`POST`

**返回体**

```json
{
  "msg": "解除成功",
  "code": 0,
  "data": null
}
```

## 矿池详情

`api/xuansuan/pool/detail`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "p_count": "0" /*本月固定分发量*/,
    "d_count": "3.06000000" /*昨日分发量*/,
    "y_count": "2.04" /*昨日动态分发量*/
  }
}
```

## 矿池详情列表

`api/xuansuan/pool/detail/list`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "static_num": "1.02000000" /*价格增长分发量*/,
      "dynamic_num": "1.02000000" /*矿池增长分发量*/,
      "created_at": "2020-04-13 23:59:59" /*时间*/,
      "fixed_num": "32258.00" /*新增 固定分发量*/
    }
  ]
}
```

## 用户业绩列表

`api/xuansuan/performances`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "name": "zhangsan" /*用户名称*/,
      "avatar": "avatar.png" /*用户头像*/,
      "amount": "33.00000000" /*业绩*/
    }
  ]
}
```

## 流水列表

`api/xuansuan/wallet/logs`

**请求方法**

`GET`

**参数**

|  名称  |  类型  | 必须 |                                              说明                                              |
| :----: | :----: | :--: | :--------------------------------------------------------------------------------------------: |
| limit  |  int   |  是  |                                        条目数量 默认 20                                        |
| offset |  int   |  是  |                                         偏移量 默认 0                                          |
| offset | action |  否  |                                收支类型:income-收入/expend-支出                                |
|  type  | string |  是  | lockcabin-锁仓 reward-奖励 unlockcabin-解仓 withdrawal-提现,usdt-usdt 流水 all-全部， 默认全部 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "解仓" /*流水标题*/,
      "user_id": 4,
      "target_id": 0,
      "target_type": "unlock:cabin",
      "amount": "300" /*金额*/,
      "type": "unlock:cabin" /*类型: withdrawal-提现 usdt:recharge-usdt充值/usdt:withdrawal-usdt提现/usdt:to:agm:exepnd-兑换卖出/agm:to:usdt:income-兑换买入*/,
      "extend": null,
      "status": 0 /*状态:0-待处理1-成功2-失败*/,
      "action": 1 /*动作:1-收入2-支出*/,
      /*当 type 为reward:withdrawal、unlock:withdrawal、usdt:withdrawal才会存在该对象*/
      "withdrawal": {
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
          "from_address": "123446" /*提现出的地址*/,
          "progress": 1 /*当前提现进度,type 为 unlock 才使用*/,
          "total_progress": 15 /*提现总进度，type 为 unlock 才使用*/,
          "sc_num": 500 /*总锁仓量*/
        },
        "updated_at": "2020-04-15 13:57:29",
        "created_at": "2020-04-15 13:57:29",
        "id": 3
      },
      "created_at": "2020-04-13 23:59:59" /*时间*/,
      "updated_at": "2020-04-13 23:59:59"
    }
  ]
}
```

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
    "total_balance": "0.00" /*总资产*/
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

**请求方法**

`POST`

**参数**

| 名称 |  类型  | 必须 |  说明   |
| :--: | :----: | :--: | :-----: |
|  id  | number |  是  | 锁仓 ID |

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
    "p_count": "0" /*矿池总量*/,
    "d_count": "3.06000000" /*累计分发*/,
    "y_count": "2.04" /*昨日分发*/
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
      "created_at": "2020-04-13 23:59:59" /*时间*/
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

# 流水列表

`api/xuansuan/wallet/logs`

**请求方法**

`GET`

**参数**

|  名称  |  类型  | 必须 |                                      说明                                       |
| :----: | :----: | :--: | :-----------------------------------------------------------------------------: |
| limit  |  int   |  是  |                                条目数量 默认 20                                 |
| offset |  int   |  是  |                                  偏移量 默认 0                                  |
|  type  | string |  是  | lockcabin-锁仓 reward-奖励 unlockcabin-解仓 withdrawal-提现 all-全部， 默认全部 |

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
      "type": "unlock:cabin" /*类型: withdrawal-提现*/,
      "extend": null,
      "status": 0 /*状态:0-待处理1-成功2-失败*/,
      "action": 1 /*动作:1-收入2-支出*/,
      "created_at": "2020-04-13 23:59:59" /*时间*/,
      "updated_at": "2020-04-13 23:59:59"
    }
  ]
}
```

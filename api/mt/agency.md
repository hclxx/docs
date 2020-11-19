# 代理等级

## 详情

**方式**

`GET`

**路径**

`/api/agencies`

**响应**

`Status code 200`

> level 说明

```
novice  新手
bronze  青铜
city   市级
region  大区
node    节点
```

> condition.key 说明

```
buy:sale           自购或销售 value 台以上矿机
total:performance  总业绩达到 value W以上
train:region       培养 value 个以上的大区代理
```

> equities.key 说明

```
direct:coupon    直享受推荐好友购买订单奖励(value)%USDT抵扣券
eth:reward       ETH团队奖励(value)%
btc:reward       BTC团队奖励(value)%
fil:reward       FIL团队奖励(value)%
fil:dividend     FIL矿池分红(value)%
eth:dividend     ETH矿池分红(value)%
btc:dividend     BTC矿池分红(value)%
eth:electricity  ETH电费补贴(value)%
btc:electricity  BTC电费补贴(value)%
```

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 4,
    "name": "大区代理" /*等级名称*/,
    "level": "region",
    "condition": [
      {
        "key": "train:region",
        "value": "2"
      },
      {
        "key": "total:performance",
        "value": "3000000"
      }
    ],
    "equities": [
      {
        "key": "direct:coupon",
        "rate": "1"
      },
      {
        "key": "eth:reward",
        "rate": "6"
      },
      {
        "key": "btc:reward",
        "rate": "6"
      },
      {
        "key": "fil:reward",
        "rate": "30"
      },
      {
        "key": "eth:dividend",
        "rate": "13"
      },
      {
        "key": "btc:dividend",
        "rate": "13"
      },
      {
        "key": "fil:dividend",
        "rate": "2"
      },
      {
        "key": "eth:electricity",
        "rate": "3"
      },
      {
        "key": "btc:electricity",
        "rate": "3"
      }
    ]
  }
}
```

## 升级

**方式**

`POST`

**路径**

`/api/agency/upgrade`

**响应**

`Status code 200`

```json
{
  "msg": "升级成功",
  "code": 0,
  "data": null
}
```

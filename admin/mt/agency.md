# 市场代理级别管理

## 市场代理级别列表

> level 说明

```
novice  新手
bronze  青铜
city    市级
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

**方式**

`GET`

**路径**

`/admin/agencies`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "新手旷工",
      "level": "novice",
      "condition": [
        {
          "key": "buy:sale",
          "value": "3"
        },
        {
          "key": "total:performance",
          "value": "100000"
        }
      ],
      "equities": [
        {
          "key": "direct:coupon",
          "rate": "1"
        }
      ],
      "created_at": "2020-11-19 16:49:46",
      "updated_at": "2020-11-19 16:49:46"
    },
    {
      "id": 2,
      "name": "青铜旷工",
      "level": "bronze",
      "condition": [
        {
          "key": "buy:sale",
          "value": "10"
        },
        {
          "key": "total:performance",
          "value": "500000"
        }
      ],
      "equities": [
        {
          "key": "direct:coupon",
          "rate": "1"
        },
        {
          "key": "eth:reward",
          "rate": "1"
        },
        {
          "key": "btc:reward",
          "rate": "1"
        },
        {
          "key": "fil:reward",
          "rate": "15"
        },
        {
          "key": "eth:dividend",
          "rate": "2"
        },
        {
          "key": "btc:dividend",
          "rate": "2"
        }
      ],
      "created_at": "2020-11-19 16:49:46",
      "updated_at": "2020-11-19 16:49:46"
    },
    {
      "id": 3,
      "name": "市级代理",
      "level": "city",
      "condition": [
        {
          "key": "buy:sale",
          "value": "50"
        },
        {
          "key": "total:performance",
          "value": "1000000"
        }
      ],
      "equities": [
        {
          "key": "direct:coupon",
          "rate": "1"
        },
        {
          "key": "eth:reward",
          "rate": "3"
        },
        {
          "key": "btc:reward",
          "rate": "3"
        },
        {
          "key": "fil:reward",
          "rate": "20"
        },
        {
          "key": "eth:dividend",
          "rate": "5"
        },
        {
          "key": "btc:dividend",
          "rate": "5"
        },
        {
          "key": "eth:electricity",
          "rate": "1"
        },
        {
          "key": "btc:electricity",
          "rate": "2"
        }
      ],
      "created_at": "2020-11-19 16:49:46",
      "updated_at": "2020-11-19 16:49:46"
    },
    {
      "id": 4,
      "name": "大区代理",
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
      ],
      "created_at": "2020-11-19 16:49:46",
      "updated_at": "2020-11-19 16:49:46"
    },
    {
      "id": 5,
      "name": "节点合伙人",
      "level": "node",
      "condition": [],
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
          "key": "fil:dividend",
          "rate": "13"
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
          "key": "eth:electricity",
          "rate": "3"
        },
        {
          "key": "btc:electricity",
          "rate": "3"
        }
      ],
      "created_at": "2020-11-19 16:49:46",
      "updated_at": "2020-11-19 16:49:46"
    }
  ]
}
```

## 修改市场代理级别

**方式**

`PUT`

**路径**

`/admin/agencies/{agency}`

**参数**

|   名称    | 类型  | 必须 |   说明   |
| :-------: | :---: | :--: | :------: |
| condition | array |  是  | 晋升条件 |
| equities  | array |  是  | 拥有权益 |

**格式**

```json
{
  "condition": [
    {
      "key": "buy:sale",
      "value": "3"
    },
    {
      "key": "total:performance",
      "value": "100000"
    }
  ],
  "equities": [
    {
      "key": "direct:coupon",
      "rate": "1"
    }
  ]
}
```

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

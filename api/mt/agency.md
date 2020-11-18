# 代理等级

## 详情

**方式**

`GET`

**路径**

`/api/agencies`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "agencies": [
      {
        "id": 1,
        "name": "新手旷工",
        "icon": "http://file.chainonedapp.com/65b7af404eca98a7edebda6f4649db80.png",
        "level": "novice",
        "cover": "http://file.chainonedapp.com/d589dd65629d19fca692e60916727a65.png",
        "condition": [
          {
            "key": "buy:sale",
            "desc": "自购或销售3台以上矿机",
            "value": "3"
          },
          {
            "key": "total:performance",
            "desc": "总业绩达到10W以上",
            "value": "100000"
          }
        ],
        "equities": [
          {
            "key": "direct:coupon",
            "desc": "直享受推荐好友购买订单奖励1%USDT抵扣券",
            "rate": "1"
          }
        ],
        "created_at": "2020-11-17 10:22:08",
        "updated_at": "2020-11-17 10:22:08"
      },
      {
        "id": 2,
        "name": "青铜旷工",
        "icon": "http://file.chainonedapp.com/b0d09080681b95042be8b3900726773b.png",
        "level": "bronze",
        "cover": "http://file.chainonedapp.com/3c19347bf6cbf0d45ec3b845c0e94853.png",
        "condition": [
          {
            "key": "buy:sale",
            "desc": "自购或销售10台以上矿机",
            "value": "10"
          },
          {
            "key": "total:performance",
            "desc": "总业绩达到50W以上",
            "value": "500000"
          }
        ],
        "equities": [
          {
            "key": "direct:coupon",
            "desc": "直享受推荐好友购买订单奖励1%USDT抵扣券",
            "rate": "1"
          },
          {
            "key": "eth:reward",
            "desc": "ETH团队奖励1%",
            "rate": "1"
          },
          {
            "key": "btc:reward",
            "desc": "BTC团队奖励1%",
            "rate": "1"
          },
          {
            "key": "fil:reward",
            "desc": "FIL团队奖励15%",
            "rate": "15"
          },
          {
            "key": "eth:dividend",
            "desc": "ETH矿池分红2%",
            "rate": "2"
          },
          {
            "key": "btc:dividend",
            "desc": "BTC矿池分红2%",
            "rate": "2"
          }
        ],
        "created_at": "2020-11-17 10:22:08",
        "updated_at": "2020-11-17 10:22:08"
      },
      {
        "id": 3,
        "name": "市级代理",
        "icon": "http://file.chainonedapp.com/131402f7c39fd9738bb2ccb508215e8c.png",
        "level": "city",
        "cover": "http://file.chainonedapp.com/eaa0a15681398bc3b149512991e804d2.png",
        "condition": [
          {
            "key": "buy:sale",
            "desc": "自购或销售50台以上矿机",
            "value": "50"
          },
          {
            "key": "total:performance",
            "desc": "总业绩达到100W以上",
            "value": "1000000"
          }
        ],
        "equities": [
          {
            "key": "direct:coupon",
            "desc": "直享受推荐好友购买订单奖励1%USDT抵扣券",
            "rate": "1"
          },
          {
            "key": "eth:reward",
            "desc": "ETH团队奖励3%",
            "rate": "3"
          },
          {
            "key": "btc:reward",
            "desc": "BTC团队奖励3%",
            "rate": "3"
          },
          {
            "key": "fil:reward",
            "desc": "FIL团队奖励20%",
            "rate": "20"
          },
          {
            "key": "eth:dividend",
            "desc": "ETH矿池分红5%",
            "rate": "5"
          },
          {
            "key": "btc:dividend",
            "desc": "BTC矿池分红5%",
            "rate": "5"
          },
          {
            "key": "eth:electricity",
            "desc": "ETH电费补贴1%",
            "rate": "1"
          },
          {
            "key": "btc:electricity",
            "desc": "BTC电费补贴2%",
            "rate": "2"
          }
        ],
        "created_at": "2020-11-17 10:22:08",
        "updated_at": "2020-11-17 10:22:08"
      },
      {
        "id": 4,
        "name": "大区代理",
        "icon": "http://file.chainonedapp.com/93255b6cfca37afb2b6f32a2f4f434eb.png",
        "level": "region",
        "cover": "http://file.chainonedapp.com/58630dbb2ced1fd08e446b50f876a8d8.png",
        "condition": [],
        "equities": [
          {
            "key": "direct:coupon",
            "desc": "直享受推荐好友购买订单奖励1%USDT抵扣券",
            "rate": "1"
          },
          {
            "key": "eth:reward",
            "desc": "ETH团队奖励6%",
            "rate": "6"
          },
          {
            "key": "btc:reward",
            "desc": "BTC团队奖励6%",
            "rate": "6"
          },
          {
            "key": "fil:reward",
            "desc": "FIL团队奖励31%",
            "rate": "30"
          },
          {
            "key": "eth:dividend",
            "desc": "ETH矿池分红13%",
            "rate": "13"
          },
          {
            "key": "btc:dividend",
            "desc": "BTC矿池分红13%",
            "rate": "13"
          },
          {
            "key": "fil:dividend",
            "desc": "FIL矿池分红2%",
            "rate": "2"
          },
          {
            "key": "eth:electricity",
            "desc": "ETH电费补贴3%",
            "rate": "3"
          },
          {
            "key": "btc:electricity",
            "desc": "BTC电费补贴3%",
            "rate": "3"
          }
        ],
        "created_at": "2020-11-17 10:22:08",
        "updated_at": "2020-11-17 10:22:08"
      },
      {
        "id": 4,
        "name": "节点合伙人",
        "icon": "http://file.chainonedapp.com/93255b6cfca37afb2b6f32a2f4f434eb.png",
        "level": "region",
        "cover": "http://file.chainonedapp.com/58630dbb2ced1fd08e446b50f876a8d8.png",
        "condition": [
          {
            "key": "train:region",
            "desc": "培养2个以上的大区代理",
            "value": "2"
          },
          {
            "key": "total:performance",
            "desc": "总业绩达到300W以上",
            "value": "3000000"
          }
        ],
        "equities": [
          {
            "key": "direct:coupon",
            "desc": "直享受推荐好友购买订单奖励1%USDT抵扣券",
            "rate": "1"
          },
          {
            "key": "eth:reward",
            "desc": "ETH团队奖励6%",
            "rate": "6"
          },
          {
            "key": "btc:reward",
            "desc": "BTC团队奖励6%",
            "rate": "6"
          },
          {
            "key": "fil:reward",
            "desc": "FIL团队奖励31%",
            "rate": "30"
          },
          {
            "key": "eth:dividend",
            "desc": "ETH矿池分红13%",
            "rate": "13"
          },
          {
            "key": "btc:dividend",
            "desc": "BTC矿池分红13%",
            "rate": "13"
          },
          {
            "key": "fil:dividend",
            "desc": "FIL矿池分红2%",
            "rate": "2"
          },
          {
            "key": "eth:electricity",
            "desc": "ETH电费补贴3%",
            "rate": "3"
          },
          {
            "key": "btc:electricity",
            "desc": "BTC电费补贴3%",
            "rate": "3"
          }
        ],
        "created_at": "2020-11-17 10:22:08",
        "updated_at": "2020-11-17 10:22:08"
      }
    ],
    "equities": [
      {
        "id": 1,
        "use_icon": "f97b17552e0b2316778d8e6bf228f6d8.png" /*代理等级图标*/,
        "desc": "直推优惠券",
        "key": "direct:coupon",
        "created_at": "2020-11-17 10:22:57",
        "updated_at": "2020-11-17 10:22:57"
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

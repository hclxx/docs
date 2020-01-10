# 淘宝客会员

## 会员权益列表

`api/v1/taobaoke/members`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "members": [
      {
        "id": 1,
        "name": "普通会员",
        "icon": "11",
        "level": "common",
        "cover": " ",
        "condition": null,
        "gift_info": null,
        "equities": [
          {
            "key": "return:commission",
            "value": null
          },
          {
            "key": "platform:services",
            "value": "35%"
          },
          {
            "key": "elc:amount",
            "value": 0
          },
          {
            "key": "elc:experience",
            "value": 0
          },
          {
            "key": "coupons",
            "value": 0
          }
        ],
        "owned": true,
        "received": true,
        "days": 50
      },
      {
        "id": 2,
        "name": "青铜会员",
        "icon": null,
        "level": "bronze",
        "cover": " ",
        "condition": {
          "direct": {
            "price": "99"
          },
          "indirect": null
        },
        "gift_info": {
          "name": "礼品一",
          "cover": "",
          "content": ["礼包1", "礼包二"],
          "receive": {
            "url": "",
            "code": ""
          }
        },
        "equities": [
          {
            "key": "return:commission",
            "value": null
          },
          {
            "key": "platform:services",
            "value": "22%"
          },
          {
            "key": "elc:amount",
            "value": null
          },
          {
            "key": "elc:experience",
            "value": null
          },
          {
            "key": "coupons",
            "value": null
          },
          {
            "key": "member:gift",
            "value": null
          },
          {
            "key": "direct:reward",
            "value": null
          },
          {
            "key": "direct:bronze:reward",
            "value": "99"
          },
          {
            "key": "direct:gold:reward",
            "value": "99"
          },
          {
            "key": "direct:platina:reward",
            "value": "99"
          },
          {
            "key": "direct:platinum:reward",
            "value": "99"
          },
          {
            "key": "direct:diamond:reward",
            "value": "99"
          }
        ],
        "owned": false,
        "received": false,
        "days": 0
      },
      {
        "id": 3,
        "name": "黄金会员",
        "icon": null,
        "level": "gold",
        "cover": " ",
        "condition": {
          "direct": {
            "price": "888"
          },
          "indirect": {
            "num": 100,
            "level": "bronze"
          }
        },
        "gift_info": {
          "name": "礼品一",
          "cover": "",
          "content": ["礼包1", "礼包二"],
          "receive": null
        },
        "equities": [
          {
            "key": "return:commission",
            "value": null
          },
          {
            "key": "platform:services",
            "value": "18%"
          },
          {
            "key": "elc:amount",
            "value": null
          },
          {
            "key": "elc:experience",
            "value": null
          },
          {
            "key": "coupons",
            "value": null
          },
          {
            "key": "member:gift",
            "value": null
          },
          {
            "key": "direct:reward",
            "value": null
          },
          {
            "key": "direct:bronze:reward",
            "value": "99"
          },
          {
            "key": "direct:gold:reward",
            "value": "500"
          },
          {
            "key": "direct:platina:reward",
            "value": "500"
          },
          {
            "key": "direct:platinum:reward",
            "value": "500"
          },
          {
            "key": "direct:diamond:reward",
            "value": "500"
          },
          {
            "key": "platform:once:bonus",
            "value": null
          },
          {
            "key": "platform:twice:bonus",
            "value": null
          }
        ],
        "owned": true,
        "received": true,
        "days": 3
      },
      {
        "id": 4,
        "name": "白金会员",
        "icon": null,
        "level": "platina",
        "cover": " ",
        "condition": {
          "direct": {
            "price": "3499"
          },
          "indirect": {
            "num": 100,
            "level": "gold"
          }
        },
        "gift_info": {
          "name": "礼品一",
          "cover": "",
          "content": ["礼包1", "礼包二"],
          "receive": null
        },
        "equities": [
          {
            "key": "return:commission",
            "value": null
          },
          {
            "key": "platform:services",
            "value": "15%"
          },
          {
            "key": "elc:amount",
            "value": null
          },
          {
            "key": "elc:experience",
            "value": null
          },
          {
            "key": "coupons",
            "value": null
          },
          {
            "key": "member:gift",
            "value": null
          },
          {
            "key": "direct:reward",
            "value": null
          },
          {
            "key": "direct:bronze:reward",
            "value": "99"
          },
          {
            "key": "direct:gold:reward",
            "value": "500"
          },
          {
            "key": "direct:platina:reward",
            "value": "2500"
          },
          {
            "key": "direct:platinum:reward",
            "value": "2500"
          },
          {
            "key": "direct:diamond:reward",
            "value": "2500"
          },
          {
            "key": "platform:once:bonus",
            "value": null
          },
          {
            "key": "platform:twice:bonus",
            "value": null
          }
        ],
        "owned": false,
        "received": false,
        "days": 0
      },
      {
        "id": 5,
        "name": "铂金会员",
        "icon": null,
        "level": "platinum",
        "cover": " ",
        "condition": {
          "direct": {
            "price": "19999"
          },
          "indirect": {
            "num": 30,
            "level": "platina"
          }
        },
        "gift_info": {
          "name": "礼品一",
          "cover": "",
          "content": ["礼包1", "礼包二"],
          "receive": null
        },
        "equities": [
          {
            "key": "return:commission",
            "value": null
          },
          {
            "key": "platform:services",
            "value": "10%"
          },
          {
            "key": "elc:amount",
            "value": null
          },
          {
            "key": "elc:experience",
            "value": null
          },
          {
            "key": "coupons",
            "value": null
          },
          {
            "key": "member:gift",
            "value": null
          },
          {
            "key": "direct:reward",
            "value": null
          },
          {
            "key": "direct:bronze:reward",
            "value": "99"
          },
          {
            "key": "direct:gold:reward",
            "value": "500"
          },
          {
            "key": "direct:platina:reward",
            "value": "2500"
          },
          {
            "key": "direct:platinum:reward",
            "value": "12000"
          },
          {
            "key": "direct:diamond:reward",
            "value": "12000"
          },
          {
            "key": "platform:once:bonus",
            "value": null
          },
          {
            "key": "platform:twice:bonus",
            "value": null
          }
        ],
        "owned": false,
        "received": false,
        "days": 0
      },
      {
        "id": 6,
        "name": "钻石会员",
        "icon": null,
        "level": "diamond",
        "cover": " ",
        "condition": {
          "direct": {
            "price": "39999"
          },
          "indirect": {
            "num": 20,
            "level": "platinum"
          }
        },
        "gift_info": {
          "name": "礼品一",
          "cover": "",
          "content": ["礼包1", "礼包二"],
          "receive": null
        },
        "equities": [
          {
            "key": "return:commission",
            "value": null
          },
          {
            "key": "platform:services",
            "value": "5%"
          },
          {
            "key": "elc:amount",
            "value": null
          },
          {
            "key": "elc:experience",
            "value": null
          },
          {
            "key": "coupons",
            "value": null
          },
          {
            "key": "member:gift",
            "value": null
          },
          {
            "key": "direct:reward",
            "value": null
          },
          {
            "key": "direct:bronze:reward",
            "value": "99"
          },
          {
            "key": "direct:gold:reward",
            "value": "500"
          },
          {
            "key": "direct:platina:reward",
            "value": "2500"
          },
          {
            "key": "direct:platinum:reward",
            "value": "12000"
          },
          {
            "key": "direct:diamond:reward",
            "value": "24000"
          },
          {
            "key": "platform:once:bonus",
            "value": null
          },
          {
            "key": "platform:twice:bonus",
            "value": null
          }
        ],
        "owned": false,
        "received": false,
        "days": 0
      }
    ],
    "equities": [
      {
        "id": 1,
        "desc": "购物返佣",
        "key": "return:commission",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 2,
        "desc": "平台服务",
        "key": "platform:services",
        "value": 1,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 3,
        "desc": "ELC发车额度",
        "key": "elc:amount",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 4,
        "desc": "ELC发车体验金",
        "key": "elc:experience",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 5,
        "desc": "海量优惠卷",
        "key": "coupons",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 6,
        "desc": "会员大礼包",
        "key": "member:gift",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 7,
        "desc": "一级推荐奖",
        "key": "direct:reward",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 8,
        "desc": "推青铜会员奖励",
        "key": "direct:bronze:reward",
        "value": 1,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 9,
        "desc": "推黄金会员奖励",
        "key": "direct:gold:reward",
        "value": 1,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 10,
        "desc": "推白金会员奖励",
        "key": "direct:platina:reward",
        "value": 1,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 11,
        "desc": "推白铂金员奖励",
        "key": "direct:platinum:reward",
        "value": 1,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 12,
        "desc": "推白钻石员奖励",
        "key": "direct:diamond:reward",
        "value": 1,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 13,
        "desc": "享平台一次分红",
        "key": "platform:once:bonus",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      },
      {
        "id": 14,
        "desc": "享平台二次分红",
        "key": "platform:twice:bonus",
        "value": 0,
        "use_icon": null,
        "unused_icon": null
      }
    ]
  }
}
```

## 购买会员

`api/v1/taobaoke/members`

**请求方法**

`POST`

**参数**
| 名称 | 类型 | 必须 | 说明 |
| :----: | :--: | :--: | :--------------------------------------------------: |
| member_id | int | 是 | 会员类型 id |
| pay_type | string | 是 | 支付方式： wxpay-微信,alipay-支付宝 |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    /*支付宝订单信息*/
    "alipay": {
      "order_info": "alipay_sdk=alipay-sdk-php-20180705&app_id=123123&biz_content=%7B%22timeout_express%22%3A%225m%22%2C%22out_trade_no%22%3A%22W19818%22%2C%22subject%22%3A%22%5Cu8d2d%5Cu4e70%5Cu4e00%5Cu952e%5Cu6536%5Cu53d6%5Cu77ff%5Cu77f3%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22body%22%3A%22%5Cu8d2d%5Cu4e70%5Cu4e00%5Cu952e%5Cu16536%5Cu53d6%5Cu77ff%5Cu77f3%5Cu7279%5Cu67431%5Cu4e2a%5Cu6708%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2019-04-29+13%3A39%3A38&version=1.0&sign=NGWBZUzLq%2BA60WEFoxET8lKnLIQGelz%2FBYX7u8dj%2BsYgvQzvSsDK2jPlu6IAR0bYRBrziaisLebst5DLBCsjkNZofEjyBopUfPIVA7FHHXpUQ5qPAcTC6Q5n0fNWC6%2BEJpG8Ly1tJhaMOl6Z3H8nwoITH%2BPah3%2Bh%2F5Mm26XOwU0jhC60ogUKgtWFrDsuIhspcAVmv6Xf%2FHO%2Ftxu4lCet6zJGBgcOUw3Obtiq1uTBWIziWecH1FW%2BGpCSWCrbDU2AEaAGjbMMYmaMIBNyGzxFqr8tkhe3Q47nzkWOrmYYzkgMBRBzc2FuJ%2BwWH5cezI6L3nrJJVFOPLclM2KJ1BQHww%3D%3D"
    },
    /*微信订单信息*/
    "wxpay": {
      "app_id": ""
    },
    /*订单号*/
    "order_no": "19818"
  }
}
```

**微信支付**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "wxpay": {
      "appid": "123123213213",
      "partnerid": "2131231232",
      "prepayid": "wx3017553928957484bf409f272920327045",
      "package": "Sign=WXPay",
      "noncestr": "f7iPw378C36FBL96",
      "timestamp": 1556618139,
      "sign": "6EE2B495EDEDF5B0EC425CF0F6C4522E"
    },
    "alipay": {
      "order_info": ""
    },
    "order_no": "63"
  }
}
```

## 钱包流水列表

`api/v1/taobaoke/wallet/logs`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| limit  | int  |  是  |                    条目数 默认 20                    |
| offset | int  |  是  |                    偏移量 默认 0                     |
|  type  | int  |  是  | 钱包日志类型： fans-粉丝收益 bonus-分红收益 all-全部 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "佣金奖励" /*标题*/,
      "amount": "0.00" /*金额*/,
      "target_user_id": 3,
      "target_type": "fans:order" /*日志类型:fans:order-粉丝下单 buy:member-购买会员 bonus-分红*/,
      "action": 1 /*收支状态: 1-收入 2-支出*/,
      "data": null /*扩展字段*/,
      "status": 0 /*状态:0-等待 1-成功 2-失败*/,
      /*目标用户信息*/
      "target_user": {
        "id": 3,
        "name": "哈哈哈",
        "avatar": null,
        "sex": 0
      },
      "created_at": "2020-01-01 12:22:11",
      "updated_at": "2020-01-01 12:22:11" /*时间*/
    }
  ]
}
```

## 会员商品购买列表

`api/v1/taobaoke/members/goods`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "name": "青铜会员" /*会员名称*/,
      "icon": "http://image.xxx.com/asds.png" /*会员图标*/,
      "level": "bronze" /*会员等级标示*/,
      "cover": "http://image.xxx.com/asds.png" /*封面*/,
      "condition": {
        "direct": {
          "price": "99" /*价格单位(元)*/
        },
        "indirect": null
      }
    }
  ]
}
```

## 会员礼包领取

`api/v1/taobaoke/members/gift`

**请求方法**

`POST`

**参数**

|     名称     | 类型 | 必须 |           说明           |
| :----------: | :--: | :--: | :----------------------: |
|  member_id   | int  |  是  |         会员 id          |
| consignee_id | int  |  否  | 收货人 id 实体礼品无需传 |

**返回体**

```json
{
  "msg": "领取成功",
  "code": 0,
  "data": {
    "id": 1,
    "user_id": 2,
    "member_id": 2,
    "consignee": null,
    "gift_info": {
      "name": "礼品一",
      "cover": "",
      "content": ["礼包1", "礼包二"],
      "receive": {
        "url": "",
        "code": ""
      }
    },
    "mode": "",
    "order_no": null,
    "status": 0,
    "created_at": null,
    "updated_at": "2020-01-10 16:07:13"
  }
}
```

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
              "icon": null,
              "level": "common",
              "cover": " ",
              "condition": null,
              "gift_info": null,
              "equities": [
                  {
                      "key": "return:commission",
                      "desc": "购物返佣100%"
                  },
                  {
                      "key": "platform:services",
                      "desc": "平台服务费35%",
                      "rate": "35"
                  },
                  {
                      "key": "direct:reward",
                      "desc": "推广购物佣金10%",
                      "rate": "10"
                  },
                  {
                      "key": "eoc:reward",
                      "desc": "EOC活跃奖励"
                  },
                  {
                      "key": "coupons",
                      "desc": "海量优惠卷"
                  }
              ],
              "owned": true,
              "days": 13,
              "gifts": []
            },
            {
              "id": 2,
              "name": "青铜创客",/*会员名称*/
              "icon": null,/*会员标志图*/
              "level": "bronze",/*会员等级*/
              "cover": " ",/*会员封面图*/
              "condition": {
                  "bonus": [/*会员分红资格条件*/
                      {
                          "key": "become:level",/*标识*/
                          "desc": "晋升青铜创客",/*描述 (展示可用)*/
                          "value": 2,/*条件 member_id*/
                          "result": false/*是否已满足此项条件 布尔值*/
                      },
                      {
                          "key": "first:order",
                          "desc": "完成首单购物10人",
                          "value": 10,/*条件总数量*/
                          "result_num": 0,/*已完成的数量*/
                          "result": false
                      }
                  ],
                  "indirect": [
                      {
                          "key": "invite:user",
                          "desc": "直接推荐注册创客50人",
                          "value": 50,
                          "result_num": 0,
                          "result": false
                      },
                      {
                          "key": "first:order",
                          "desc": "完成首单购物5人",
                          "value": 5,
                          "result_num": 0,
                          "result": false
                      }
                  ]
              },
              "gift_info": null,
              "equities": [/*该会员等级拥有的权益*/
                  {
                      "key": "return:commission",
                      "desc": "购物返佣100%"
                  },
                  {
                      "key": "platform:services",
                      "desc": "平台服务费22%",
                      "rate": "22"
                  },
                  {
                      "key": "direct:reward",
                      "desc": "推广购物佣金15%",
                      "rate": "15"
                  },
                  {
                      "key": "eoc:reward",
                      "desc": "EOC活跃奖励"
                  },
                  {
                      "key": "coupons",
                      "desc": "海量优惠卷"
                  },
                  {
                      "key": "member:gift",
                      "desc": "会员礼包"
                  },
                  {
                      "key": "merchant:reward",
                      "desc": "推荐商家奖励10%"
                  },
                  {
                      "key": "elc:experience",
                      "desc": "ECL体验金"
                  },
                  {
                      "key": "direct:bronze:reward",
                      "desc": "青铜礼包奖励40%",
                      "m_rate": "40",
                      "z_rate": "40",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "direct:gold:reward",
                      "desc": "达人礼包奖励40%",
                      "m_rate": "40",
                      "z_rate": "40",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "direct:platina:reward",
                      "desc": "守护礼包奖励40%",
                      "m_rate": "40",
                      "z_rate": "40",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "platform:month:bonus",
                      "desc": "享平台月度分红"
                  }
              ],
              "owned": false,/*是否拥有该等级 布尔值*/
              "days": 0,/*加入会员的天数*/
              "gifts": [/*会员礼包列表*/
                  {
                      "id": 2,
                      "member_id": 2,/*会员id*/
                      "name": "青铜礼包2",/*会员礼包名称*/
                      "cover": "https://www.baidu.com",/*会员礼包封面图*/
                      "price": 100,/*会员礼包价格*/
                  },
                  {
                      "id": 1,
                      "member_id": 2,
                      "name": "青铜礼包1",
                      "cover": "https://www.baidu.com",
                      "price": 100,
                  }
              ]
            },
            {
              "id": 3,
              "name": "达人创客",
              "icon": null,
              "level": "gold",
              "cover": " ",
              "condition": {
                  "bonus": [
                      {
                          "key": "become:level",
                          "desc": "晋升达人创客",
                          "value": 3,
                          "result": false
                      },
                      {
                          "key": "first:order",
                          "desc": "完成首单购物20人",
                          "value": 20,
                          "result_num": 0,
                          "result": false
                      },
                      {
                          "key": "bronze:bonus",
                          "desc": "直接推荐分红青铜创客10人",
                          "value": 10,
                          "result_num": 1,
                          "result": false
                      }
                  ],
                  "indirect": [
                      {
                          "key": "bronze",
                          "desc": "直接推荐青铜创客50人",
                          "value": 50,
                          "result_num": 1,
                          "result": false
                      }
                  ]
              },
              "gift_info": null,
              "equities": [
                  {
                      "key": "return:commission",
                      "desc": "购物返佣100%"
                  },
                  {
                      "key": "platform:services",
                      "desc": "平台服务费18%",
                      "rate": "18"
                  },
                  {
                      "key": "direct:reward",
                      "desc": "推广购物佣金18%",
                      "rate": "18"
                  },
                  {
                      "key": "eoc:reward",
                      "desc": "EOC活跃奖励"
                  },
                  {
                      "key": "coupons",
                      "desc": "海量优惠卷"
                  },
                  {
                      "key": "member:gift",
                      "desc": "会员礼包"
                  },
                  {
                      "key": "merchant:reward",
                      "desc": "推荐商家奖励10%"
                  },
                  {
                      "key": "elc:experience",
                      "desc": "ECL体验金"
                  },
                  {
                      "key": "direct:bronze:reward",
                      "desc": "青铜礼包奖励50%",
                      "m_rate": "50",
                      "z_rate": "50"
                  },
                  {
                      "key": "direct:gold:reward",
                      "desc": "达人礼包奖励50%",
                      "m_rate": "50",
                      "z_rate": "50",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "direct:platina:reward",
                      "desc": "守护礼包奖励50%",
                      "m_rate": "50",
                      "z_rate": "50",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "platform:month:bonus",
                      "desc": "享平台月度分红"
                  }
              ],
              "owned": false,
              "days": 0,
              "gifts": []
            },
            {
              "id": 4,
              "name": "守护创客",
              "icon": null,
              "level": "platina",
              "cover": " ",
              "condition": {
                  "bonus": [
                      {
                          "key": "become:level",
                          "desc": "晋升守护创客",
                          "value": 4,
                          "result": false
                      },
                      {
                          "key": "first:order",
                          "desc": "完成首单购物20人",
                          "value": 20,
                          "result_num": 0,
                          "result": false
                      },
                      {
                          "key": "gold:bonus",
                          "desc": "直接推荐分红达人创客10人",
                          "value": 10,
                          "result_num": 1,
                          "result": false
                      }
                  ],
                  "indirect": [
                      {
                          "key": "gold",
                          "desc": "直接推荐达人创客30人",
                          "value": 30,
                          "result_num": 0,
                          "result": false
                      }
                  ]
              },
              "gift_info": null,
              "equities": [
                  {
                      "key": "return:commission",
                      "desc": "购物返佣100%"
                  },
                  {
                      "key": "platform:services",
                      "desc": "平台服务费15%",
                      "rate": "15"
                  },
                  {
                      "key": "direct:reward",
                      "desc": "推广购物佣金20%",
                      "rate": "20"
                  },
                  {
                      "key": "eoc:reward",
                      "desc": "EOC活跃奖励"
                  },
                  {
                      "key": "coupons",
                      "desc": "海量优惠卷"
                  },
                  {
                      "key": "member:gift",
                      "desc": "会员礼包"
                  },
                  {
                      "key": "merchant:reward",
                      "desc": "推荐商家奖励10%"
                  },
                  {
                      "key": "elc:experience",
                      "desc": "ECL体验金"
                  },
                  {
                      "key": "direct:bronze:reward",
                      "desc": "青铜礼包奖励60%",
                      "m_rate": "60",
                      "z_rate": "60",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "direct:gold:reward",
                      "desc": "达人礼包奖励60%",
                      "m_rate": "60",
                      "z_rate": "60",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "direct:platina:reward",
                      "desc": "守护礼包奖励60%",
                      "m_rate": "60",
                      "z_rate": "60",
                      "z_elc_rate": "20"
                  },
                  {
                      "key": "platform:month:bonus",
                      "desc": "享平台月度分红"
                  }
              ],
              "owned": false,
              "days": 0,
              "gifts": []
            }
        ],
        "equities": [/*所有会员权益列表*/
            {
                "desc": "购物返佣100%",
                "key": "return:commission",
                "use_icon": "http://szl.qingchuanren.com/e950ca9626b4e276288cb58c71ccadd9.png",
                "unused_icon": "http://szl.qingchuanren.com/0e4ad3003b8a08ec7804b40e0d77ba05.png"
            },
            {
                "desc": "平台服务费用",
                "key": "platform:services",
                "use_icon": "http://szl.qingchuanren.com/0842d7280b899e5c3c067b39b4b647e0.png",
                "unused_icon": "http://szl.qingchuanren.com/1ca670d8acbf4f7a88b354a1bee9d978.png"
            },
            {
                "desc": "推广购物佣金",
                "key": "direct:reward",
                "use_icon": "http://szl.qingchuanren.com/9ce9ee026e9985c0bcf43080ca98bc6d.png",
                "unused_icon": "http://szl.qingchuanren.com/c4578f77f9afb8e6c626db02c01b2dbe.png"
            },
            {
                "desc": "EOC活跃奖励",
                "key": "eoc:reward",
                "use_icon": "",
                "unused_icon": ""
            },
            {
                "desc": "海量优惠卷",
                "key": "coupons",
                "use_icon": "http://szl.qingchuanren.com/6dd9a7f2f84688301b306c04fd4f3f18.png",
                "unused_icon": "http://szl.qingchuanren.com/e758559f6e1d0de0b4f50242a63a9233.png"
            },
            {
                "desc": "会员大礼包",
                "key": "member:gift",
                "use_icon": "http://szl.qingchuanren.com/5e5a155ba8cb60458f733de5be691ec5.png",
                "unused_icon": "http://szl.qingchuanren.com/f11930716f3a87d2fbc95892ea9fe9f1.png"
            },
            {
                "desc": "推荐商家奖励10%",
                "key": "merchant:reward",
                "use_icon": "",
                "unused_icon": ""
            },
            {
                "desc": "ELC体验金",
                "key": "elc:experience",
                "use_icon": "http://szl.qingchuanren.com/a1af9e265cda664eb593a3536431f9d0.png",
                "unused_icon": "http://szl.qingchuanren.com/afccf831171ad78b5ce7baf49cc411ca.png"
            },
            {
                "desc": "青铜礼包奖励",
                "key": "direct:bronze:reward",
                "use_icon": "http://szl.qingchuanren.com/390892cc06ed22e0804e7c4c028939a0.png",
                "unused_icon": "http://szl.qingchuanren.com/883e392285c9adea4dd5436f9ec8a90c.png"
            },
            {
                "desc": "达人礼包奖励",
                "key": "direct:gold:reward",
                "use_icon": "http://szl.qingchuanren.com/3946c1bbe490e423b1bc99ac1f032e2d.png",
                "unused_icon": "http://szl.qingchuanren.com/1041cbf31ef67448014d2386ee3bdec6.png"
            },
            {
                "desc": "守护礼包奖励",
                "key": "direct:platina:reward",
                "use_icon": "http://szl.qingchuanren.com/6c7c6f8b5c8ecd42a2b0d5e084528746.png",
                "unused_icon": "http://szl.qingchuanren.com/783ca6677561513a3e216b2ec1bf58eb.png"
            },
            {
                "desc": "享平台月度分红",
                "key": "platform:month:bonus",
                "use_icon": "http://szl.qingchuanren.com/c249d3059465f34e8fa036273196ea51.png",
                "unused_icon": "http://szl.qingchuanren.com/fb9d49e9c2ba69a7fbe64076df55af36.png"
            },
            {
                "desc": "享平台季度分红",
                "key": "platform:quarter:bonus",
                "use_icon": "http://szl.qingchuanren.com/7b73675b480bbbf077e3347e2b6d0105.png",
                "unused_icon": "http://szl.qingchuanren.com/07c16ede12f6bc576e14f748d0d48e30.png"
            },
            {
                "desc": "享平台年度分红",
                "key": "platform:year:bonus",
                "use_icon": "http://szl.qingchuanren.com/7fd3cc9c37edec233324522af1391db9.png",
                "unused_icon": "http://szl.qingchuanren.com/02d8a8e22cc6156466a28d7d06faf40f.png"
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
| gift_id | int | 是 | 会员礼包 id |
| pay_type | string | 是 | 支付类型： wxpay-微信,alipay-支付宝 |
| pay_mode | string | 是 | 支付方式： cash-纯现金,mixed-现金/通证 混合支付 |
| eduction_num | string | 否 | 混合支付 抵扣通证 数量 |
| consignee_id | int | 否 | 收货地址(实体礼包) |

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
    "order_no": "19818",
    /*订单id*/
    "order_id":1190
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
    "order_no": "63",
    "order_id":1190
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

## 获取礼包抵扣信息

`api/v1/taobaoke/members/deduction`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  gift_id  | int  |  是  | 礼包id |


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "num": 100,/*抵扣通证数量*/
        "amount": "3.00",/*抵扣现金金额*/
        "price": "97.00"/*实际支付现金金额*/
    }
}
```



## 获取会员规则

`api/v1/taobaoke/members/rule`

**请求方法**

`GET`

**参数**
无

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": "修改文本内容",/*会员规则内容*/
}
```

## 获取礼包规则

`api/v1/taobaoke/members/bonus/rule`

**请求方法**

`GET`

**参数**
无

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": "会员分红规则",/*会员分红规则内容*/
}
```

## 获取礼包详情

`api/v1/taobaoke/members/gifts/{id}`

**请求方法**

`GET`

**参数**
无

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "member_id": 2,/*礼包会员id*/
        "name": "青铜礼包1",/*礼包名称*/
        "cover": "https://www.baidu.com",/*礼包封面*/
        "image": "https://www.baidu.com",/*礼包详情头图*/
        "detail": "https://www.baidu.com",/*礼包详情*/
        "price": 100,/*礼包价格*/
        "eduction_type": "eoc",/*礼包抵扣通证类型*/
        "eduction_num": 100,/*礼包抵扣通证数量*/
        "type": 1,/*会员礼包类型 1-实体(需要购买时填写收货地址) 2-虚拟(无需地址)*/
        "sort": 1,/*排序*/
        "created_at": "2020-02-22 22:29:14",
        "updated_at": "2020-02-22 22:29:14",
        "member": {/*礼包对应的会员信息*/
            "id": 2,
            "name": "青铜创客",/*会员名称*/
            "icon": "https://www.baidu.com",/*会员标志图*/
            "level": "bronze",/*会员等级*/
            "cover": "https://www.baidu.com",/*会员封面图*/
        }
    }
}
```

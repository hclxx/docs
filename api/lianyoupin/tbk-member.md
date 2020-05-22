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
                       "desc": "推广购物佣金48%",
                       "rate": "48"
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
               "days": 402,
               "gifts": []
            },
            {
              "id": 2,
              "name": "青铜创客",/*会员名称*/
              "icon": null,/*会员标志图*/
              "level": "bronze",/*会员等级*/
              "cover": " ",/*会员封面图*/
              "condition": null,
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
                     "desc": "购物佣金75%",
                     "rate": "75"
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
                     "desc": "产品购买大礼包"
                 },
                 {
                     "key": "direct:bronze:reward",
                     "desc": "推VIP礼包奖励",
                     "sale_bronze": "140"
                 },
                 {
                     "key": "direct:gold:reward",
                     "desc": "推达人礼包奖励",
                     "sale_gold": "300"
                 },
                 {
                     "key": "direct:platina:reward",
                     "desc": "推守护礼包奖励",
                     "sale_platina": "1200"
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
                      "eduction_type": "eoc",/*抵扣通证类型*/
                      "eduction_num": "100",/*抵扣通证数量*/
                  },
                  {
                      "id": 1,
                      "member_id": 2,
                      "name": "青铜礼包1",
                      "cover": "https://www.baidu.com",
                      "price": 100,
                      "eduction_type": "eoc",
                      "eduction_num": "100"
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
                  "indirect": [ /*晋升条件*/
                      {
                          "key": "bronze",
                          "desc": "直接推荐VIP会员50人",
                          "value": 50,
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
                      "desc": "平台服务费18%",
                      "rate": "18"
                  },
                  {
                      "key": "direct:reward",
                      "desc": "推广购物佣金81%",
                      "rate": "81"
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
                      "desc": "产品购买大礼包"
                  },
                  {
                      "key": "direct:bronze:reward",
                      "desc": "推VIP礼包奖励",
                      "sale_bronze": "170",
                      "train_bronze": "15"
                  },
                  {
                      "key": "direct:gold:reward",
                      "desc": "推达人礼包奖励",
                      "sale_gold": "500",
                      "train_gold": "100"
                  },
                  {
                      "key": "direct:platina:reward",
                      "desc": "推守护礼包奖励",
                      "sale_platina": "2000",
                      "train_platina": "200"
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
                        "desc": "推广购物佣金85%",
                        "rate": "85"
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
                        "desc": "产品购买大礼包"
                    },
                    {
                        "key": "direct:bronze:reward",
                        "desc": "推VIP礼包奖励",
                        "sale_bronze": "220",
                        "train_bronze": "20"
                    },
                    {
                        "key": "direct:gold:reward",
                        "desc": "推达人礼包奖励",
                        "sale_gold": "700",
                        "train_gold": "150"
                    },
                    {
                        "key": "direct:platina:reward",
                        "desc": "推守护礼包奖励",
                        "sale_platina": "5000",
                        "train_platina": "300"
                    }
                ],
                "owned": false,
                "days": 0,
                "gifts": []
            }
        ],
        "equities": [ /*所有会员权益列表*/
            {
                "desc": "购物返佣100%",
                "key": "return:commission",
                "use_icon": "http://file.chainonedapp.com/f97b17552e0b2316778d8e6bf228f6d8.png",
                "unused_icon": "http://file.chainonedapp.com/09dee02620db3b066de0627ea7749318.png"
            },
            {
                "desc": "平台服务费用",
                "key": "platform:services",
                "use_icon": "http://file.chainonedapp.com/ab03f09e6cd0cd6024f595dfb4a20ea7.png",
                "unused_icon": "http://file.chainonedapp.com/a573f5e151d261d925d5abf6c763ac5e.png"
            },
            {
                "desc": "推广购物佣金",
                "key": "direct:reward",
                "use_icon": "http://file.chainonedapp.com/08a55c897d03c80c9a1dc1bb104df772.png",
                "unused_icon": "http://file.chainonedapp.com/419373a661675602e743b332e364be04.png"
            },
            {
                "desc": "EOC活跃奖励",
                "key": "eoc:reward",
                "use_icon": "http://file.chainonedapp.com/83b5507da6c715ef40e69151d722d629.png",
                "unused_icon": "http://file.chainonedapp.com/2129e41a279062420dbce171f613d306.png"
            },
            {
                "desc": "海量优惠卷",
                "key": "coupons",
                "use_icon": "http://file.chainonedapp.com/465dee6328ec6c0675d763eea93c8710.png",
                "unused_icon": "http://file.chainonedapp.com/7188e484fda7941baa4c6aa3c29dae10.png"
            },
            {
                "desc": "产品购买大礼包",
                "key": "member:gift",
                "use_icon": "http://file.chainonedapp.com/7da4c8281d857d7c9c7f233f5e91f6d6.png",
                "unused_icon": "http://file.chainonedapp.com/137a0bb0502c538504c820424fd07cd5.png"
            },
            {
                "desc": "推VIP礼包奖励",
                "key": "direct:bronze:reward",
                "use_icon": "http://file.chainonedapp.com/83499137ab000479320e16bd76261444.png",
                "unused_icon": "http://file.chainonedapp.com/25b5835f9befc252eeb9a437db887941.png"
            },
            {
                "desc": "推达人礼包奖励",
                "key": "direct:gold:reward",
                "use_icon": "http://file.chainonedapp.com/666e06a47ce3204c037281c092a911bc.png",
                "unused_icon": "http://file.chainonedapp.com/f7830dee9a5762f25bf65eaec782c6e1.png"
            },
            {
                "desc": "推守护礼包奖励",
                "key": "direct:platina:reward",
                "use_icon": "http://file.chainonedapp.com/e549c8a946b7dad1c1ef5cf52118f40b.png",
                "unused_icon": "http://file.chainonedapp.com/775f620d44261c71324e1a696f53a7dd.png"
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
|  type  | int  |  是  | 钱包日志类型： fans-粉丝收益 bonus-分红收益 member-礼包收益 train-培养收益 all-全部 |

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
      "target_type": "fans:order" /*日志类型:fans:order-粉丝下单 buy:member-会员礼包 bonus-分红 member:train-培养收益*/,
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

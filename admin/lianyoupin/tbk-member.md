# 淘宝联盟会员管理

## 会员权益信息

### keys 说明:

- platform:services 需要填写 rate(提现收取手续费比例 整型),

- direct:bronze:reward，direct:gold:reward，direct:platinum:reward，direct:diamond:reward 需要填写 z_rate(直接购买奖励比例 整型), z_elc_rate(新增:直接购买奖励 elc 比例 整型) 和 m_zrate(混合购买奖励比例 整型)

- direct:reward 需要填写 rate(新增:一级推荐推荐购物奖励比例 整型)

**方式**

`GET`

**路径**

`/admin/tbk/members`

**响应**

`Status code 200`

```json
{
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
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 2,
            "name": "青铜创客",/*会员名称*/
            "icon": null,
            "level": "bronze",/*会员等级标示*/
            "cover": " ",/*会员封面*/
            /*条件*/
            "condition": {
              /*分红条件*/
              "bonus": [
                  {
                    "key": "become:level",/*标识*/
                    "desc": "晋升青铜创客",/*描述*/
                    "value": 2/*晋升会员等级对应的id数值*/
                  },
                  {
                    "key": "first:order",
                    "desc": "完成首单购物10人",
                    "value": 10/*描述对应的数值*/
                  }
              ],
              "indirect": [
                  {
                    "key": "invite:user",
                    "desc": "直接推荐注册创客50人",
                    "value": 50
                  },
                  {
                    "key": "first:order",
                    "desc": "完成首单购物5人",
                    "value": 5
                  }
              ]
            },
            "gift_info": null,/*原礼包字段 现已废弃*/
            "equities": [
                {
                    "key": "return:commission",/*权益 key*/
                    "desc": "购物返佣100%",/*权益描述*/
                },
                {
                    "key": "platform:services",
                    "desc": "平台服务费22%",
                    "rate": "22",/*比列整数*/
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
                    "m_rate": "40",/*混合支付 eoc+rmb 购买奖励比列*/
                    "z_rate": "40",/*直接购买奖励比列*/
                    "z_elc_rate": "20",/* elc 体验金奖励比例*/
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
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 3,
            "name": "达人创客",
            "icon": null,
            "level": "gold",
            "cover": " ",
            /*条件*/
            "condition": {
              /*分红资格条件*/
                "bonus": [
                    {
                        "key": "become:level",
                        "desc": "晋升达人创客",
                        "value": 3
                    },
                    {
                        "key": "first:order",
                        "desc": "完成首单购物20人",
                        "value": 20
                    },
                    {
                        "key": "bronze:bonus",
                        "desc": "直接推荐分红青铜创客10人",
                        "value": 10
                    }
                ],
                /*间接升级条件*/
                "indirect": [
                    {
                        "key": "bronze",
                        "desc": "直接推荐青铜创客50人",
                        "value": 50
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
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
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
                        "value": 4
                    },
                    {
                        "key": "first:order",
                        "desc": "完成首单购物20人",
                        "value": 20
                    },
                    {
                        "key": "gold:bnus",
                        "desc": "直接推荐分红达人创客10人",
                        "value": 10
                    }
                ],
                "indirect": [
                    {
                        "key": "gold",
                        "desc": "直接推荐达人创客30人",
                        "value": 30
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
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        }
    ],
    "equities": [
        {
            "id": 1,
            /*符合使用条件的图标*/
            "use_icon": "http://szl.qingchuanren.com/e950ca9626b4e276288cb58c71ccadd9.png",
            /*不符合使用条件的图标*/
            "unused_icon": "http://szl.qingchuanren.com/0e4ad3003b8a08ec7804b40e0d77ba05.png",
            "desc": "购物返佣100%",/*权益描述*/
            "key": "return:commission",/*权益标识*/
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 2,
            "use_icon": "http://szl.qingchuanren.com/0842d7280b899e5c3c067b39b4b647e0.png",
            "unused_icon": "http://szl.qingchuanren.com/1ca670d8acbf4f7a88b354a1bee9d978.png",
            "desc": "平台服务费用",
            "key": "platform:services",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 3,
            "use_icon": "http://szl.qingchuanren.com/9ce9ee026e9985c0bcf43080ca98bc6d.png",
            "unused_icon": "http://szl.qingchuanren.com/c4578f77f9afb8e6c626db02c01b2dbe.png",
            "desc": "推广购物佣金",
            "key": "direct:reward",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 4,
            "use_icon": "",
            "unused_icon": "",
            "desc": "EOC活跃奖励",
            "key": "eoc:reward",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 5,
            "use_icon": "http://szl.qingchuanren.com/6dd9a7f2f84688301b306c04fd4f3f18.png",
            "unused_icon": "http://szl.qingchuanren.com/e758559f6e1d0de0b4f50242a63a9233.png",
            "desc": "海量优惠卷",
            "key": "coupons",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 6,
            "use_icon": "http://szl.qingchuanren.com/5e5a155ba8cb60458f733de5be691ec5.png",
            "unused_icon": "http://szl.qingchuanren.com/f11930716f3a87d2fbc95892ea9fe9f1.png",
            "desc": "会员大礼包",
            "key": "member:gift",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 7,
            "use_icon": "",
            "unused_icon": "",
            "desc": "推荐商家奖励10%",
            "key": "merchant:reward",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 8,
            "use_icon": "http://szl.qingchuanren.com/a1af9e265cda664eb593a3536431f9d0.png",
            "unused_icon": "http://szl.qingchuanren.com/afccf831171ad78b5ce7baf49cc411ca.png",
            "desc": "ELC体验金",
            "key": "elc:experience",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 9,
            "use_icon": "http://szl.qingchuanren.com/390892cc06ed22e0804e7c4c028939a0.png",
            "unused_icon": "http://szl.qingchuanren.com/883e392285c9adea4dd5436f9ec8a90c.png",
            "desc": "青铜礼包奖励",
            "key": "direct:bronze:reward",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 10,
            "use_icon": "http://szl.qingchuanren.com/3946c1bbe490e423b1bc99ac1f032e2d.png",
            "unused_icon": "http://szl.qingchuanren.com/1041cbf31ef67448014d2386ee3bdec6.png",
            "desc": "达人礼包奖励",
            "key": "direct:gold:reward",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 11,
            "use_icon": "http://szl.qingchuanren.com/6c7c6f8b5c8ecd42a2b0d5e084528746.png",
            "unused_icon": "http://szl.qingchuanren.com/783ca6677561513a3e216b2ec1bf58eb.png",
            "desc": "守护礼包奖励",
            "key": "direct:platina:reward",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 12,
            "use_icon": "http://szl.qingchuanren.com/c249d3059465f34e8fa036273196ea51.png",
            "unused_icon": "http://szl.qingchuanren.com/fb9d49e9c2ba69a7fbe64076df55af36.png",
            "desc": "享平台月度分红",
            "key": "platform:month:bonus",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 13,
            "use_icon": "http://szl.qingchuanren.com/7b73675b480bbbf077e3347e2b6d0105.png",
            "unused_icon": "http://szl.qingchuanren.com/07c16ede12f6bc576e14f748d0d48e30.png",
            "desc": "享平台季度分红",
            "key": "platform:quarter:bonus",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        },
        {
            "id": 14,
            "use_icon": "http://szl.qingchuanren.com/7fd3cc9c37edec233324522af1391db9.png",
            "unused_icon": "http://szl.qingchuanren.com/02d8a8e22cc6156466a28d7d06faf40f.png",
            "desc": "享平台年度分红",
            "key": "platform:year:bonus",
            "created_at": "2020-02-22 17:35:13",
            "updated_at": "2020-02-22 17:35:13"
        }
    ]
}
```

## 更新会员信息

**方式**

`PUT`

**路径**

`/admin/tbk/members/{id}`

**参数**

### keys 说明:

- platform:services 需要填写 rate(提现收取手续费比例 整型),

- direct:bronze:reward，direct:gold:reward，direct:platinum:reward，direct:diamond:reward 需要填写 z_rate(直接购买奖励比例 整型), z_elc_rate(新增:直接购买奖励 elc 比例 整型) 和 m_zrate(混合购买奖励比例 整型)

- direct:reward 需要填写 rate(新增:推广购物佣金奖励比例 整型)

```json
{
  "name": "青铜会员", /*会员名称 string*/
  "cover": "http://www.baidu.com/", /*封面 url*/
  "icon": "http://www.baidu.com/", /*图标 url*/
  /*权益集合*/
  "equities": [
    {
      "key": "return:commission", /*权益key*/
      "desc": "权益描述", /*权益描述*/
      "rate": null, /*当key为 platform:services  direct:reward 需要提交 rate 参数，当 direct:bronze:reward，
direct:gold:reward，
direct:platinum:reward，
direct:diamond:reward 需要提交 m_rate和z_rate、z_elc_rate 奖励比例*/
    }
  ],
  /**普通会员此字为null，间接升级/分红资格条件**/
  "condition": {
      /*分红条件*/
      "bonus": [
          {
            "key": "become:level",/*标识*/
            "desc": "晋升青铜创客",/*描述*/
            "value": 2/*晋升会员等级对应的id数值*/
          },
          {
            "key": "first:order",
            "desc": "完成首单购物10人",
            "value": 10/*描述对应的数值*/
          }
      ],
      /*间接条件*/
      "indirect": [
          {
            "key": "invite:user",
            "desc": "直接推荐注册创客50人",
            "value": 50
          },
          {
            "key": "first:order",
            "desc": "完成首单购物5人",
            "value": 5
          }
      ]
    },
}
```

**响应参数**

```json
{
  "message": "更新成功",
  "member": {
    "id": 2,
    "name": "青铜会员",
    "icon": "http://www.baidu.com/",
    "level": "bronze",
    "cover": "http://www.baidu.com/",
    "condition": {
      "bonus": [
          {
            "key": "become:level",
            "desc": "晋升青铜创客",
            "value": 2
          },
          {
            "key": "first:order",
            "desc": "完成首单购物10人",
            "value": 10
          }
      ],
      "indirect": [
          {
            "key": "invite:user",
            "desc": "直接推荐注册创客50人",
            "value": 50
          },
          {
            "key": "first:order",
            "desc": "完成首单购物5人",
            "value": 5
          }
      ]
    },
    "gift_info": null,
    "equities": [
      {
        "key": "return:commission",
        "value": null
      }
    ],
    "created_at": "2020-01-08 14:11:02",
    "updated_at": "2020-01-08 14:57:24"
  }
}
```

## 更新会员权益

**方式**

`PUT`

**路径**

`/admin/tbk/members/equity/{id}`

**参数**
| 名称 | 类型 | 必须 | 说明 |
| :----: | :--: | :--: | :--------------------------------------------------: |
| use_icon | string | 否 | 符合使用条件的图标 |
| unused_icon | string | 否 | 不符合使用条件的图标 |
| desc | string | 否 | 权益描述 |

**响应**

`Status code 200`

**响应参数**

```json
{
  "message": "更新成功"
}
```

## 会员购买日志

**方式**

`GET`

**路径**

`/admin/tbk/members/logs`

**参数**
| 名称 | 类型 | 必须 | 说明 |
| :----: | :--: | :--: | :--------------------------------------------------: |
| limit | int | 是 | 条目数 |
| page | int | 是 | 页码 |
| level | string | 否 | 购买会员等级筛选,可选(bronze-青铜 gold-黄金 platina-白金 platinum-铂金 diamond-钻石) |
| user_id | int | 否 | 用户 id |
| express_status | int | 否 | 快递发货状态 (物流状态 0-待发货 1-已发货)|
| start_time | string | 否 | 开始时间 |
| end_time | string | 否 | 结束时间 |
| pay_mode | string | 否 | 购买(升级)方式 (cash-纯现金支付 direct-间接升级 mixed-混合支付 admin-管理员设置)|
| pay_type | string | 否 | 支付渠道 (wxpay-微信支付 alipay-支付宝支付 )|

**响应**

`Status code 200`

**响应参数**

```json
{
  "id": 100,
  "user_id": 314,
  "member_id": 3,
  /*收货人信息注:gift_info 为 null consignee 也为 null*/
  "consignee": {
    "id": 317,
    "tag": "",
    "area": "陕西省西安市雁塔区",
    "name": "孙皓",
    "other": "13649283569",
    "phone": "13649283569",
    "detail": "陕西省西安市高新区科技二路中天花园南门",
    "default": true,
    "user_id": 314,
    "yz_address_id": "208120799"
  },
  /*礼包信息 未领取为 null*/
  "gift_info": {
    "name": "黄金会员专属礼包",
    "cover": "http://szl.qingchuanren.com/5b7bd84c46efaff25235a8ef7f8d6f51.png",
    "content": [
      "黄金会员专属礼包1、",
      "黄金会员专属礼包２、",
      "黄金会员专属礼包３"
    ],
    "receive": null
  },
  "mode": "mixed" /*购买方式:mixed-混合支付(eoc+现金) direct-现金购买 indirect-间接晋升 admin-管理员设置*/,
  "order_no": "M91331579075618970",
  "status": 1,
  /*当 mode 为 indirect extend 为 null 当 mode 为 admin 为 管理员信息{"admin": {"id": 1, "name": "超级管理员"}}*/
  "extend": {
    "pay_type": "wxpay" /*支付渠道 wxpay-微信支付 alipay-支付宝支付  注(之前的老数据无此字段)*/,
    "eoc": "500" /*eoc支付数量*/,
    "cash": "0.10" /*现金支付数量*/
  },
  "express_name": "顺丰" /*物流公司*/,
  "express_number": "T12312312312" /*物流单号*/,
  "express_status": 0 /*物流状态 0-待发货 1-已发货 2-无需发货 注:  青铜礼包无需发货 level 为 bronze*/,
  "created_at": "2020-01-15 16:06:58",
  "updated_at": "2020-01-15 16:10:33",
  /*购买的会员信息*/
  "member": {
    "id": 3,
    "name": "黄金会员" /*名称*/,
    "level": "gold" /*等级标示*/,
    "icon": "http://szl.qingchuanren.com/bc947b9a049ef8d0421d7c08c66595f1.png" /*图标地址*/,
    "condition": {
      "direct": {
        "limit": "500",
        "price": "495.1",
        "cost_price": "0.01" /*新增 成本价格*/
      },
      "indirect": {
        "num": 100,
        "level": "bronze"
      }
    }
  },
  /*购买者信息*/
  "user": {
    "id": 314,
    "name": "赵伟",
    "sex": 0,
    "email": null,
    "phone": "15680769628",
    "avatar": "http://szl.qingchuanren.com/5185686baed4c9987bb243d276e10f83.jpeg",
    "code": "8GQ759",
    "bio": null,
    "power": 102,
    "last_time": "2020-01-16 09:49:42",
    "last_ip": "182.148.15.177",
    "status": 0,
    "member_id": 4,
    "join_time": "2020-01-16 09:54:13",
    "created_at": "2019-08-21 11:22:11",
    "updated_at": "2020-01-16 09:54:13"
  }
}
```

```

## 设置用户会员等级

**方式**

`POST`

**路径**

`/admin/tbk/members/user/{user}/level`

**参数**
| 名称 | 类型 | 必须 | 说明 |
| :----: | :--: | :--: | :--------------------------------------------------: |
| member_id | int | 是 | 会员等级id |

### 权限:

- set:member:level   建议设置在用户管理菜单下,

**响应**

`Status code 201`

**响应参数**

```json
{
  "message": "设置成功"
}
```

## (简短)会员列表

**方式**

`GET`

**路径**

`/admin/tbk/members/short`

**参数**
无

**响应**

`Status code 200`

**响应参数**

```json
[
    {
        "id": 1,/*会员id*/
        "name": "普通会员",/*会员名称*/
        "icon": null,/*会员图标*/
        "level": "common"/*会员等级*/
    },
    {
        "id": 2,
        "name": "青铜创客",
        "icon": null,
        "level": "bronze"
    },
    {
        "id": 3,
        "name": "黄金创客",
        "icon": null,
        "level": "gold"
    },
    {
        "id": 4,
        "name": "守护创客",
        "icon": null,
        "level": "platina"
    },
]
```

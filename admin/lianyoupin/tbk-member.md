# 淘宝联盟会员管理

## 会员权益信息

```
keys 说明:

platform:services 需要填写 rate(提现收取手续费比例 整型),
direct:bronze:reward，
direct:gold:reward，
direct:platinum:reward，
direct:diamond:reward 需要填写 z_rate(直接购买奖励比列 整型) 和 m_zrate(混合购买奖励比例 整型)

```

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
          "desc": "购物返佣100%",
          "value": null
        },
        {
          "key": "platform:services",
          "desc": "平台服务费35%",
          "rate": "35"
        },
        {
          "key": "elc:amount",
          "desc": "ECL发车额度",
          "value": null
        },
        {
          "key": "elc:experience",
          "desc": "ECL发车体验金",
          "value": null
        },
        {
          "key": "coupons",
          "desc": "海量优惠卷",
          "value": null
        }
      ],
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 2,
      "name": "青铜会员",
      "icon": null,
      "level": "bronze",
      "cover": " ",
      "condition": {
        "direct": {
          "limit": "100",
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
          "desc": "购物返佣100%",
          "value": null
        },
        {
          "key": "platform:services",
          "desc": "平台服务费22%",
          "rate": "22"
        },
        {
          "key": "elc:amount",
          "desc": "ECL发车额度",
          "value": null
        },
        {
          "key": "elc:experience",
          "desc": "ECL发车体验金",
          "value": null
        },
        {
          "key": "coupons",
          "desc": "海量优惠卷",
          "value": null
        },
        {
          "key": "member:gift",
          "desc": "会员礼包",
          "value": null
        },
        {
          "key": "direct:reward",
          "desc": "一级推荐奖励10%",
          "value": null
        },
        {
          "key": "direct:bronze:reward",
          "desc": "推荐青铜会员奖40%",
          "m_rate": "40",
          "z_rate": "40"
        },
        {
          "key": "direct:gold:reward",
          "desc": "推荐黄金会员奖40%",
          "m_rate": "40",
          "z_rate": "40"
        },
        {
          "key": "direct:platina:reward",
          "desc": "推荐白金会员奖40%",
          "m_rate": "40",
          "z_rate": "40"
        },
        {
          "key": "direct:platinum:reward",
          "desc": "推荐铂金会员奖40%",
          "m_rate": "40",
          "z_rate": "40"
        },
        {
          "key": "direct:diamond:reward",
          "desc": "推荐钻石会员奖40%",
          "m_rate": "40",
          "z_rate": "40"
        }
      ],
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 3,
      "name": "黄金会员" /*会员名称*/,
      "icon": null,
      "level": "gold" /*会员等级标示*/,
      "cover": " " /*会员风 main*/,
      /*晋升条件*/
      "condition": {
        /*直接升级*/
        "direct": {
          "limit": "500" /*可使用 eoc 抵扣数量上限*/,
          "price": "888" /*直接购买金额单位元*/
        },
        /*间接升级条件*/
        "indirect": {
          "num": 100 /*需邀请个数*/,
          "level": "bronze" /*需邀请100个青铜*/
        }
      },
      /*礼包信息*/
      "gift_info": {
        "name": "礼品一" /*礼包名称*/,
        "cover": "" /*礼包封面*/,
        "content": ["礼包1", "礼包二"] /*礼包集合*/,
        "receive": null /*仅青铜会员才为 null，对象格式 {"url": "领取链接","code": "领取码"}*/
      },
      "equities": [
        {
          "key": "return:commission" /*权益 key*/,
          "desc": "购物返佣100%" /*权益描述*/,
          "value": null /*权益值*/
        },
        {
          "key": "platform:services",
          "desc": "平台服务费18%",
          "rate": "18" /*比列整数*/
        },
        {
          "key": "elc:amount",
          "desc": "ECL发车额度",
          "value": null
        },
        {
          "key": "elc:experience",
          "desc": "ECL发车体验金",
          "value": null
        },
        {
          "key": "coupons",
          "desc": "海量优惠卷",
          "value": null
        },
        {
          "key": "member:gift",
          "desc": "会员礼包",
          "value": null
        },
        {
          "key": "direct:reward",
          "desc": "一级推荐奖励10%",
          "value": null
        },
        {
          "key": "direct:bronze:reward",
          "desc": "推荐青铜会员奖50%",
          "m_rate": "50",
          "z_rate": "50"
        },
        {
          "key": "direct:gold:reward",
          "desc": "推荐黄金会员奖50%",
          "m_rate": "50" /*直接购买奖励比列*/,
          "z_rate": "50" /*混合支付 eoc+rmb 购买奖励比列*/
        },
        {
          "key": "direct:platina:reward",
          "desc": "推荐白金会员奖50%",
          "m_rate": "50",
          "z_rate": "50"
        },
        {
          "key": "direct:platinum:reward",
          "desc": "推荐铂金会员奖50%",
          "m_rate": "50",
          "z_rate": "50"
        },
        {
          "key": "direct:diamond:reward",
          "desc": "推荐钻石会员奖50%",
          "m_rate": "50",
          "z_rate": "50"
        }
      ],
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 4,
      "name": "白金会员",
      "icon": null,
      "level": "platina",
      "cover": " ",
      "condition": {
        "direct": {
          "limit": "1000",
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
          "desc": "购物返佣100%",
          "value": null
        },
        {
          "key": "platform:services",
          "desc": "平台服务费15%",
          "rate": "15"
        },
        {
          "key": "elc:amount",
          "desc": "ECL发车额度",
          "value": null
        },
        {
          "key": "elc:experience",
          "desc": "ECL发车体验金",
          "value": null
        },
        {
          "key": "coupons",
          "desc": "海量优惠卷",
          "value": null
        },
        {
          "key": "member:gift",
          "desc": "会员礼包",
          "value": null
        },
        {
          "key": "direct:reward",
          "desc": "一级推荐奖励10%",
          "value": null
        },
        {
          "key": "direct:bronze:reward",
          "desc": "推荐青铜会员奖60%",
          "m_rate": "60",
          "z_rate": "60"
        },
        {
          "key": "direct:gold:reward",
          "desc": "推荐黄金会员奖60%",
          "m_rate": "60",
          "z_rate": "60"
        },
        {
          "key": "direct:platina:reward",
          "desc": "推荐白金会员奖60%",
          "m_rate": "60",
          "z_rate": "60"
        },
        {
          "key": "direct:platinum:reward",
          "desc": "推荐铂金会员奖40%",
          "m_rate": "60",
          "z_rate": "60"
        },
        {
          "key": "direct:diamond:reward",
          "desc": "推荐钻石会员奖60%",
          "m_rate": "60",
          "z_rate": "60"
        }
      ],
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 5,
      "name": "铂金会员",
      "icon": null,
      "level": "platinum",
      "cover": " ",
      "condition": {
        "direct": {
          "limit": "1500",
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
          "desc": "购物返佣100%",
          "value": null
        },
        {
          "key": "platform:services",
          "desc": "平台服务费10%",
          "rate": "10"
        },
        {
          "key": "elc:amount",
          "desc": "ECL发车额度",
          "value": null
        },
        {
          "key": "elc:experience",
          "desc": "ECL发车体验金",
          "value": null
        },
        {
          "key": "coupons",
          "desc": "海量优惠卷",
          "value": null
        },
        {
          "key": "member:gift",
          "desc": "会员礼包",
          "value": null
        },
        {
          "key": "direct:reward",
          "desc": "一级推荐奖励10%",
          "value": null
        },
        {
          "key": "direct:bronze:reward",
          "desc": "推荐青铜会员奖70%",
          "m_rate": "70",
          "z_rate": "70"
        },
        {
          "key": "direct:gold:reward",
          "desc": "推荐黄金会员奖70%",
          "m_rate": "70",
          "z_rate": "70"
        },
        {
          "key": "direct:platina:reward",
          "desc": "推荐白金会员奖70%",
          "m_rate": "70",
          "z_rate": "70"
        },
        {
          "key": "direct:platinum:reward",
          "desc": "推荐铂金会员奖70%",
          "m_rate": "70",
          "z_rate": "70"
        },
        {
          "key": "direct:diamond:reward",
          "desc": "推荐钻石会员奖70%",
          "m_rate": "70",
          "z_rate": "70"
        },
        {
          "key": "platform:once:bonus",
          "desc": "享平台一次分红",
          "value": null
        }
      ],
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 6,
      "name": "钻石会员",
      "icon": null,
      "level": "diamond",
      "cover": " ",
      "condition": {
        "direct": {
          "limit": "2000",
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
          "desc": "购物返佣100%",
          "value": null
        },
        {
          "key": "platform:services",
          "desc": "平台服务费5%",
          "rate": "5"
        },
        {
          "key": "elc:amount",
          "desc": "ECL发车额度",
          "value": null
        },
        {
          "key": "elc:experience",
          "desc": "ECL发车体验金",
          "value": null
        },
        {
          "key": "coupons",
          "desc": "海量优惠卷",
          "value": null
        },
        {
          "key": "member:gift",
          "desc": "会员礼包",
          "value": null
        },
        {
          "key": "direct:reward",
          "desc": "一级推荐奖励10%",
          "value": null
        },
        {
          "key": "direct:bronze:reward",
          "desc": "推荐青铜会员奖80%",
          "m_rate": "80",
          "z_rate": "80"
        },
        {
          "key": "direct:gold:reward",
          "desc": "推荐黄金会员奖80%",
          "m_rate": "80",
          "z_rate": "80"
        },
        {
          "key": "direct:platina:reward",
          "desc": "推荐白金会员奖80%",
          "m_rate": "80",
          "z_rate": "80"
        },
        {
          "key": "direct:platinum:reward",
          "desc": "推荐铂金会员奖80%",
          "m_rate": "80",
          "z_rate": "80"
        },
        {
          "key": "direct:diamond:reward",
          "desc": "推荐钻石会员奖80%",
          "m_rate": "80",
          "z_rate": "80"
        },
        {
          "key": "platform:once:bonus",
          "desc": "享平台一次分红",
          "value": null
        },
        {
          "key": "platform:twice:bonus",
          "desc": "享平台二次分红",
          "value": null
        }
      ],
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    }
  ],
  "equities": [
    {
      "id": 1,
      "desc": "购物返佣100%",
      "key": "return:commission",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 2,
      "desc": "平台服务",
      "key": "platform:services",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 3,
      "desc": "ELC发车额度",
      "key": "elc:amount",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 4,
      "desc": "ELC发车体验金",
      "key": "elc:experience",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 5,
      "desc": "海量优惠卷",
      "key": "coupons",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 6,
      "desc": "会员大礼包",
      "key": "member:gift",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 7,
      "desc": "一级推荐奖",
      "key": "direct:reward",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 8,
      "desc": "推青铜会员奖励",
      "key": "direct:bronze:reward",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 9,
      "desc": "推黄金会员奖励",
      "key": "direct:gold:reward",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 10,
      "desc": "推白金会员奖励",
      "key": "direct:platina:reward",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 11,
      "desc": "推白铂金员奖励",
      "key": "direct:platinum:reward",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 12,
      "desc": "推白钻石员奖励",
      "key": "direct:diamond:reward",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 13,
      "desc": "享平台一次分红",
      "key": "platform:once:bonus",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
    },
    {
      "id": 14,
      "desc": "享平台二次分红",
      "key": "platform:twice:bonus",
      "use_icon": null,
      "unused_icon": null,
      "created_at": "2020-01-11 14:29:10",
      "updated_at": "2020-01-11 14:29:10"
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

```
keys 说明:

platform:services 需要填写 rate(提现收取手续费比例 整型),
direct:bronze:reward，
direct:gold:reward，
direct:platinum:reward，
direct:diamond:reward 需要填写 z_rate(直接购买奖励比列 整型) 和 m_zrate(混合购买奖励比例 整型)

```

```json
{
  "name": "青铜会员" /*会员名称 string*/,
  "cover": "http://www.baidu.com/" /*封面 url*/,
  "icon": "http://www.baidu.com/" /*图标 url*/,
  /*权益集合*/
  "equities": [
    {
      "key": "return:commission" /*权益key*/,
      "desc": "权益描述" /*权益描述*/,
      "rate": null /*当key为 platform:services 需要提交 rate 参数，当 direct:bronze:reward，
direct:gold:reward，
direct:platinum:reward，
direct:diamond:reward 需要提交 m_rate和z_rate奖励比例*/
    }
  ],
  /*礼包信息 注意普通会员无礼包，青铜和青铜以上存在礼品*/
  "gift_info": {
    "name": "测试礼包" /*礼包名称*/,
    "cover": "礼包封面" /*礼包封面*/,
    "content": ["课程一", "课程二", "课程三"] /*奖品集合*/,
    /*青铜会员才会存在该字段 其他不存在 receive */
    "receive": {
      "url": "http://wwww.receive.com/sadas",
      "code": "领取码"
    }
  },
  /**普通会员此字为null，升级到该会员的条件**/
  "condition": {
    /*直接条件*/
    "direct": {
      "price": "3499" /*会员(RMB)价格单位元*/,
      "limit": "2000" /*混合支付可以抵扣 eoc 数量上限值*/
    },
    /*间接条件 注青铜会员无间接升级条件*/
    "indirect": {
      "num": 20 /*需邀请会员数量*/,
      "level": "platinum" /*需要邀请会员等级*/
    }
  }
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
      "direct": {
        "price": "99"
      },
      "indirect": null
    },
    "gift_info": {
      "name": "测试礼包",
      "cover": "礼包封面",
      "content": ["课程一", "课程二", "课程三"],
      "receive": {
        "url": "http://wwww.receive.com/sadas",
        "code": "领取码"
      }
    },
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

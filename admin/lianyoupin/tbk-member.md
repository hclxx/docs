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
        },
        {
          "key": "direct:reward",
          "desc": "一级推荐奖励10%",
          "rate": "20"
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
          "price": "99",
          "cost_price": "0.01" /*新增 成本价格*/
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
          "rate": "20"
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
          "price": "888" /*直接购买金额单位元*/,
          "cost_price": "0.01" /*新增 成本价格*/
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
          "price": "3499",
          "cost_price": "0.01" /*新增 成本价格*/
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
          "price": "19999",
          "cost_price": "0.01" /*新增 成本价格*/
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
          "price": "39999",
          "cost_price": "0.01" /*新增 成本价格*/
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

### keys 说明:

- platform:services 需要填写 rate(提现收取手续费比例 整型),

- direct:bronze:reward，direct:gold:reward，direct:platinum:reward，direct:diamond:reward 需要填写 z_rate(直接购买奖励比例 整型), z_elc_rate(新增:直接购买奖励 elc 比例 整型) 和 m_zrate(混合购买奖励比例 整型)

- direct:reward 需要填写 rate(新增:一级推荐推荐购物奖励比例 整型)

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
direct:diamond:reward 需要提交 m_rate和z_rate、z_elc_rate 奖励比例*/
    }
  ],
  /*礼包信息 注意普通会员无礼包，青铜和青铜以上存在礼品*/
  "gift_info": {
    "name": "测试礼包" /*礼包名称 必须*/,
    "cover": "礼包封面" /*礼包封面 必须*/,
    "content": ["课程一", "课程二", "课程三"] /*奖品集合 必须*/,
    /*青铜会员才会存在该字段 其他不存在 receive 必须*/
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
      "limit": "2000" /*混合支付可以抵扣 eoc 数量上限值*/,
      "cost_price": "0.01" /*新增 成本价格*/
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
| pay_mode | string | 否 | 购买(升级)方式 (cash-纯现金支付 direct-间接升级 mixed-混合支付)|
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
  "mode": "mixed" /*购买方式:mixed-混合支付(eoc+现金) direct-现金购买 indirect-间接晋升*/,
  "order_no": "M91331579075618970",
  "status": 1,
  /*当 mode 为 indirect extend 为 null*/
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

## 处理礼品发货

**方式**

`POST`

**路径**

`/admin/tbk/members/logs/{id}/express`

**参数**
| 名称 | 类型 | 必须 | 说明 |
| :----: | :--: | :--: | :--------------------------------------------------: |
| express_name | string | 是 | 物流公司 |
| express_number | string | 是 | 物流单号 |

**响应**

`Status code 201`

**响应参数**

```json
{
  "message": "发货成功"
}
```

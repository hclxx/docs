# 淘宝联盟会员管理

## 会员权益信息

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
          "value": null,
          "equity": "return:commission"
        }
      ],
      "created_at": "2020-01-08 14:11:02",
      "updated_at": "2020-01-08 14:22:49"
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
        "name": "测试礼包",
        "cover": "礼包封面",
        "content": ["课程一", "课程二", "课程三"],
        "receive": {
          "url": "http://wwww.receive.com/sadas",
          "code": "领取码"
        }
      },
      "equities": null,
      "created_at": "2020-01-08 14:11:02",
      "updated_at": "2020-01-08 14:29:15"
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
        "name": "测试礼包",
        "cover": "礼包封面",
        "content": ["课程一", "课程二", "课程三"],
        "receive": {
          "url": "http://wwww.receive.com/sadas",
          "code": "领取码"
        }
      },
      "equities": null,
      "created_at": "2020-01-08 14:11:02",
      "updated_at": "2020-01-08 14:11:02"
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
        "name": "测试礼包",
        "cover": "礼包封面",
        "content": ["课程一", "课程二", "课程三"],
        "receive": {
          "url": "http://wwww.receive.com/sadas",
          "code": "领取码"
        }
      },
      "equities": null,
      "created_at": "2020-01-08 14:11:02",
      "updated_at": "2020-01-08 14:11:02"
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
        "name": "测试礼包",
        "cover": "礼包封面",
        "content": ["课程一", "课程二", "课程三"],
        "receive": {
          "url": "http://wwww.receive.com/sadas",
          "code": "领取码"
        }
      },
      "equities": null,
      "created_at": "2020-01-08 14:11:02",
      "updated_at": "2020-01-08 14:11:02"
    },
    {
      "id": 6,
      "name": "钻石会员" /*会员名称*/,
      "icon": null /*图标 url*/,
      "level": "diamond" /*等级标示*/,
      "cover": " " /*会员封面*/,
      /*升级该会员条件*/
      "condition": {
        /*直接条件*/
        "direct": {
          "price": "39999" /*RMB价格单位元*/
        },
        /*间接条件*/
        "indirect": {
          "num": 20 /*需邀请会员数量*/,
          "level": "platinum" /*需要邀请会员等级*/
        }
      },
      /*礼包信息 注意:普通会员无礼物奖励*/
      "gift_info": {
        "name": "测试礼包" /*礼包名称*/,
        "cover": "礼包封面" /*礼包封面 url*/,
        "content": ["课程一", "课程二", "课程三"] /*礼品集合*/,
        /*领取信息 注意:青铜会员才会有此属性其他则无*/
        "receive": {
          "url": "http://wwww.receive.com/sadas" /*领取链接*/,
          "code": "领取码" /*领取码*/
        }
      },
      /*权益集合*/
      "equities": [
        {
          "value": null /*权益的奖励具体数值*/,
          "key": "return:commission" /*权益的 kye*/
        }
      ],
      "created_at": "2020-01-08 14:11:02",
      "updated_at": "2020-01-08 14:11:02"
    }
  ],
  /*权益集合*/
  "equities": [
    {
      "desc": "购物返佣" /*权益描述*/,
      "key": "return:commission" /*权益标示*/,
      "value": 0 /*是否需要设置奖励数值:0-不需要 1-需要。注:不同会员下面的权益存在不同奖励*/
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

```json
{
  "name": "青铜会员" /*会员名称 string*/,
  "cover": "http://www.baidu.com/" /*封面 url*/,
  "icon": "http://www.baidu.com/" /*图标 url*/,
  /*权益集合*/
  "equities": [
    {
      "key": "return:commission" /*权益key*/,
      "value": null /*权益奖励数值*/
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
  /**升级到该会员的条 注意普通会员无条件**/
  "condition": {
    /*直接条件*/
    "direct": {
      "price": "3499" /*会员(RMB)价格单位元*/
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

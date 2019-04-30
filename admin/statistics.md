# 统计

## 商城统计

`admin/statistics/mall`

**请求方法**

`GET`

**返回体**

```json
{
  "goods_count": {
    // 商品数量
    "cash": 5, // 现金
    "comc": 0, // comc
    "ore": 0 // 矿石
  },
  "user_count": 0, // 用户数量
  "order_count": {
    // 订单数量
    "cash": 0,
    "comc": 0,
    "ore": 0
  }
}
```

## 实时概括

`admin/statistics/survey`

**请求方法**

`GET`

**返回体**

```json
{
  "today": {
    "sale": {
      "cash": 0,
      "ore": 0,
      "comc": 0
    },
    "pay_order_count": {
      "cash": 0,
      "ore": 0,
      "comc": 0
    },
    "new_user_count": 1,
    "order_user_count": {
      "cash": 0,
      "ore": 0,
      "comc": 0
    }
  },
  "yesterday": {
    "sale": {
      "cash": 0,
      "ore": 0,
      "comc": 0
    },
    "pay_order_count": {
      "cash": 0,
      "ore": 0,
      "comc": 0
    },
    "new_user_count": 0,
    "order_user_count": {
      "cash": 0,
      "ore": 0,
      "comc": 0
    }
  }
}
```

## 统计图

`admin/statistics/map`

**请求方法**

`GET`

**请求参数**

|    名称    |  类型  | 必须 | 默认 |   说明   |
| :--------: | :----: | :--: | :--: | :------: |
| start_time | string |  是  |  无  | 开始时间 |
|  end_time  | string |  是  |  无  | 结束时间 |

`ps: 默认7 天`

**返回体**

```json
{
  "2019-02-12": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  },
  "2019-02-13": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  },
  "2019-02-14": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  },
  "2019-02-15": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  },
  "2019-02-16": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  },
  "2019-02-17": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  },
  "2019-02-18": {
    "comc": {
      "amount": 0,
      "count": 0
    },
    "ore": {
      "amount": 0,
      "count": 0
    },
    "cash": {
      "amount": 0,
      "count": 0
    }
  }
}
```

## 统计货币数据

`admin/statistics/currency`

**请求方法**

`GET`

**返回体**

```json
{
    "comc": {       /*comc统计*/
        "total": "563.00000000",    /*总剩余*/
        "cash": "740.86000000",     /*总提现*/
        "recharge": "40.000000"     /*总充值*/
    },
    "ore": {      /*ore统计*/
        "total": "96.42185000",     /*总剩余*/
        "in_come": "2.84370000"     /*总挖矿*/
    },
    "power": "36320"  /*矿力统计*/
}
```

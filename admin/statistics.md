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
  "sale": {
    // 成交额
    "cash": {
      // 现金
      "today": 0,
      "yesterday": 0
    },
    "comc": {
      // comc
      "today": 0,
      "yesterday": 0
    },
    "ore": {
      // 矿石
      "today": 0,
      "yesterday": 0
    }
  },
  "pay_order_count": {
    // 支付订单
    "cash": {
      "today": 0,
      "yesterday": 0
    },
    "comc": {
      "today": 0,
      "yesterday": 0
    },
    "ore": {
      "today": 0,
      "yesterday": 0
    }
  },
  "new_user_count": {
    // 新增用户数
    "today": 0,
    "yesterday": 0
  },
  "order_user_count": {
    // 下单用户数
    "cash": {
      "today": 0,
      "yesterday": 0
    },
    "comc": {
      "today": 0,
      "yesterday": 0
    },
    "ore": {
      "today": 0,
      "yesterday": 0
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

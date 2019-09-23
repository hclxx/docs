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

## 首页统计

`admin/statistics`

**请求方法**

`GET`

**返回体**

```json
{
    "id": 1,
    "order_amount": {/*订单总成交额*/
        "ore": 1001,/*矿石区*/
        "cash": 22.01,/*现金区*/
        "comc": 525,/*comc区*/
    },
    "order_num": {/*订单总量*/
        "ore": 5,
        "cash": 11,
        "comc": 9
    },
    "goods_num": {/*商品总量*/
        "ore": 2,
        "cash": 535,
        "comc": 0
    },
    "current_order_amount": {/*实时成交额*/
        "today": {/*今天*/
            "ore": 0,
            "cash": 0,
            "comc": 0
        },
        "yesterday": {/*昨天*/
            "ore": 0,
            "cash": 0,
            "comc": 0
        }
    },
    "current_order_num": {/*实时支付订单数*/
        "today": {
            "ore": 0,
            "cash": 0,
            "comc": 0
        },
        "yesterday": {
            "ore": 0,
            "cash": 0,
            "comc": 0
        }
    },
    "current_order_user": {/*实时下单用户数*/
        "today": {
            "ore": 0,
            "cash": 0,
            "comc": 0
        },
        "yesterday": {
            "ore": 0,
            "cash": 0,
            "comc": 0
        }
    },
    "user_num": {/*用户数*/
        "today": 0,/*今日*/
        "total": 13,/*昨日*/
        "yesterday": 0,/*总用户量*/
    },
    "comc_num": {/*COMC统计*/
        "cash": "740.86000000",/*总提现*/
        "total": "563.00000000",/*总剩余*/
        "recharge": "40.000000",/*总充值*/
    },
    "ore_num": {/*矿石统计*/
        "total": "487.42185000",/*总剩余*/
        "in_come": "2.84370000",/*总挖矿*/
        "from_iMeet": "400.00000000",/*链乎转入*/
        "to_iWallet": "10.00000000",/*转至iwallet*/
        "from_iFuture1": 0,/*iFuture-I转入*/
        "from_iFuture2": "1.00000000",/*iFuture-II转入*/
    },
    "power": "36470",/*矿力统计-总矿力*/
    "trading": {/*近七日交易走势*/
        "2019-09-17": {/*时间*/
            "ore": {
                "count": 0,/*成交量*/
                "amount": 0,/*成交额*/
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        },
        "2019-09-18": {
            "ore": {
                "count": 0,
                "amount": 0
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        },
        "2019-09-19": {
            "ore": {
                "count": 0,
                "amount": 0
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        },
        "2019-09-20": {
            "ore": {
                "count": 0,
                "amount": 0
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        },
        "2019-09-21": {
            "ore": {
                "count": 0,
                "amount": 0
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        },
        "2019-09-22": {
            "ore": {
                "count": 0,
                "amount": 0
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        },
        "2019-09-23": {
            "ore": {
                "count": 0,
                "amount": 0
            },
            "cash": {
                "count": 0,
                "amount": 0
            },
            "comc": {
                "count": 0,
                "amount": 0
            }
        }
    },
    "created_at": "2019-09-23 17:19:08",
    "updated_at": "2019-09-23 17:19:08"
}
```

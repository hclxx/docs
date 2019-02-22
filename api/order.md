# 订单

## 订单状态数

**方式**

`GET`

**路径**

`/api/v1/order/count`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    /*代付款*/
    "wait_pay": {
      "exchange": 0 /*兑换区待付款数订单数量*/,
      "cash": 0 /*现金区待付款数订单数量*/,
      "total": 0 /*总付款数订单数量*/
    },
    /*待发货*/
    "wait_send": {
      "exchange": 10 /*兑换区待发货数订单数量*/,
      "cash": 0 /*现金区待发货数订单数量*/,
      "total": 10 /*待发货订单数量*/
    },
    /*待收货*/
    "wait_receive": {
      "exchange": 1 /*兑换区待收货数订单数量*/,
      "cash": 0 /*现金区待收货数订单数量*/,
      "total": 1 /*待收货订单数量*/
    }
  }
}
```

## 兑换区商品兑换

**方式**

`POST`

**路径**

`/api/v1/orders`

**参数**

|     名称     |  类型  | 必须 |    说明     |
| :----------: | :----: | :--: | :---------: |
|    sku_id    |  int   |  是  | 商品 sku_id |
|   pay_pass   | string |  是  |  支付密码   |
| consignee_id | string |  是  |  收货人 id  |
|     num      |  int   |  是  |    数量     |

**响应**

`Status code 200`

```json
{
  "msg": "购买成功",
  "code": 0 /*注意，如code为：1000-未设置支付密码 1001-支付密码错误 客户端需要另行处理交互*/,
  "data": {
    "order_id": 1 /*订单号*/
  }
}
```

## 兑换区订单列表

**方式**

`GET`

**路径**

`/api/v1/orders`

**参数**

|    名称     |  类型  | 必须 |                                       说明                                       |
| :---------: | :----: | :--: | :------------------------------------------------------------------------------: |
|    limit    |  int   |  是  |                                  条目数 默认 10                                  |
|   offset    |  int   |  是  |                                 偏移量 默认为 0                                  |
| status_type | string |  是  | 状态类型: -1-全部 0-待付款 1-待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已关闭 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 6 /*int 订单id*/,
      "order_no": "11115479873012969520277" /*string 订单号*/,
      "total_price": "300.00000000" /*string 总金额*/,
      "pay_price": "300.00000000" /*string 支付金额*/,
      "pay_status": 1 /*支付状态 0-待支付 1-已支付 2-未支付*/,
      "pay_time": "2019-01-20 20:28:21" /* string 支付时间*/,
      "express_code": "ttkd" /*string  物流公司编号*/,
      "express_no": "123123213213" /*string express_no 运单号*/,
      "express_name": "京东快递" /*string express_no 物流方式*/,
      "delivery_status": 0 /*int 发货状态 0-待发货 1-已发货*/,
      "delivery_time": null /*string 发货时间*/,
      "receipt_status": 0 /*int 收货状态 0-待收货 1-已收货*/,
      "receipt_time": null /*string 收货时间*/,
      "order_status": 1 /*int 订单状态:0-待付款 1-待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已关闭*/,
      "pay_type": "comc" /*string 支付类型*/,
      "currency": "comc" /*string 货币:comoc-comc ore-矿石*/,
      "user_id": 1,
      "is_delete": 0,
      "created_at": "2019-01-20 20:28:21",
      "updated_at": "2019-01-20 20:28:21",
      "buy_status": true /*bool 再次购买状态 true-是 false-否*/,
      "buy_reason": null /*null|string 不能再次购买原因*/,
      "goods_order": {
        "id": 6,
        "user_id": 1,
        "goods_id": 1,
        "sku_id": 11 /*sku_id*/,
        "merchant_id": 0,
        "order_id": 6,
        "goods_name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
        "power": 100,
        "ore": "10.00000000",
        "goods_image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
        "spec_type": 2,
        "num": 3,
        "goods_price": "100.00000000",
        "total_price": "300.00000000",
        "specs_properties": [
          {
            "p_id": 1,
            "s_id": 1,
            "p_name": "红色",
            "s_name": "颜色"
          },
          {
            "p_id": 3,
            "s_id": 2,
            "p_name": "S",
            "s_name": "尺寸"
          }
        ],
        "extend": null,
        "remark": null,
        "created_at": "2019-01-20 20:28:21",
        "updated_at": "2019-01-20 20:28:21"
      }
    }
  ]
}
```

## 兑换区订单详情

**方式**

`GET`

**路径**

`/api/v1/orders/{id}`

**参数**

`兑换参数说明`

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "id": 1,
        "order_no": "154798684411136100",
        "total_price": "100.00000000",
        "pay_price": "100.00000000",
        "pay_status": 1,
        "pay_time": "2019-01-21 04:20:44",
        "express_code": "jd",
        "express_no": "78379580705",
        "delivery_status": 0,
        "delivery_time": null,
        "receipt_status": 0,
        "receipt_time": null,
        "order_status": 2,
        "pay_type": "comc",
        "currency": "comc",
        "user_id": 1,
        "is_delete": 0,
        "created_at": "2019-01-21 04:20:44",
        "updated_at": "2019-01-21 04:20:44",
        "goods_order": {
          "id": 6,
          "user_id": 1,
          "goods_id": 1,
          "merchant_id": 0,
          "order_id": 6,
          "goods_name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
          "power": 100,
          "ore": "10.00000000",
          "goods_image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
          "spec_type": 2,
          "num": 3,
          "goods_price": "100.00000000",
          "total_price": "300.00000000",
          "specs_properties": [
            {
              "p_id": 1,
              "s_id": 1,
              "p_name": "红色",
              "s_name": "颜色"
            },
            {
              "p_id": 3,
              "s_id": 2,
              "p_name": "S",
              "s_name": "尺寸"
            }
          ],
          "extend": null,
          "remark": null,
          "created_at": "2019-01-20 20:28:21",
          "updated_at": "2019-01-20 20:28:21"
        }
      },
        "consignee": {
            "id": 1,
            "user_id": 1,
            "order_id": 1,
            "name": "胡昊",
            "phone": "18382274309",
            "tag": "公司",
            "other": "",
            "area": "四川设个成都",
            "detail": "四川设个成都",
            "created_at": "2019-01-21 04:20:44",
            "updated_at": "2019-01-21 04:20:44"
        }
    }
}
```

## 兑换区确认收货

**方式**

`PATCH`

**路径**

`/api/v1/orders/{id}/delivery`

**参数**

`兑换参数说明`

无

**响应**

`Status code 200`

```json
{
  "msg": "确认收货成功",
  "code": 0,
  "data": null
}
```

## 兑换区删除订单

**方式**

`DELETE`

**路径**

`/api/v1/orders/{id}`

**参数**

`兑换参数说明`

无

**响应**

`Status code 200`

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

## 兑换区订单物流查询

**方式**

`GET`

**路径**

`/api/v1/orders/{id}/logistics`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "time": "2018-08-15 17:31:22",
      "context": "订单已由本人签收，感谢您在京东购物，欢迎您再次光临！"
    },
    {
      "time": "2018-08-15 15:43:02",
      "context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
    },
    {
      "time": "2018-08-15 15:25:50",
      "context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
    },
    {
      "time": "2018-08-15 15:04:27",
      "context": "货物已分配，等待配送"
    },
    {
      "time": "2018-08-15 12:53:05",
      "context": "货物已完成分拣，离开【成都郫县分拣中心】"
    },
    {
      "time": "2018-08-15 12:26:46",
      "context": "货物已到达【成都郫县分拣中心】"
    },
    {
      "time": "2018-08-15 12:26:46",
      "context": "货物已交付京东物流"
    }
  ]
}
```

## 有赞订单

**方式**

`GET`

**路径**

`/api/v1/yz/order`

**参数**

| 名称  | 类型 | 必须 |                     说明                     |
| :---: | :--: | :--: | :------------------------------------------: |
| limit | int  |  否  |                   每页条数                   |
| after | int  |  否  |                   翻页 ID                    |
| type  | int  |  否  | 分类 0: 待支付 1: 待发货 2: 已发货 3: 已收货 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 11,
      "goods_name": "测试商品一" /**名称**/,
      "cover_img_url": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png" /*图片*/,
      "num": 1 /*数量*/,
      "tid": "E20190124150051071500022" /*订单号*/,
      "type": 4 /*0: 待支付 1: 待发货 2: 已发货 3: 已收货 4: 交易失败 5: 申请退款 6: 退款成功*/,
      "created_time": "2019-01-24 15:00:51" /*订单创建时间*/,
      "price": 0.01 /*价钱*/,
      "pay_time": null,
      "sku": null /*sku*/,
      "pay_link": "dsadasdasd" /*支付链接*/,
      "order_detail": "dsadadasdasds" /*订单详情*/,
      "details_url": null /*详情地址*/
    },
    {
      "id": 10,
      "goods_name": "测试商品一",
      "cover_img_url": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png",
      "num": 1,
      "tid": "E20190124150029071500031",
      "type": 4,
      "created_time": "2019-01-24 15:00:29",
      "price": 0.01,
      "sku": null,
      "pay_link": "dsadasdasd" /*支付链接*/,
      "order_detail": "dsadadasdasds" /*订单详情*/,
      "details_url": null
    }
  ]
}
```

## 有赞确认收货

**方式**

`POST`

**路径**

`/yz/affirm/{order}/order`

**参数**

| 名称  |  类型  | 默认 | 必须 |    说明    |
| :---: | :----: | :--: | :--: | :--------: |
| token | string |  无  | 必须 | 登入 token |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": null
}
```

## 有赞物流

**方式**

`GET`

**路径**

`/yz/affirm/{order}/express`

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "time": "2018-08-15 17:31:22",
      "context": "订单已由本人签收，感谢您在京东购物，欢迎您再次光临！"
    },
    {
      "time": "2018-08-15 15:43:02",
      "context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
    },
    {
      "time": "2018-08-15 15:25:50",
      "context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
    },
    {
      "time": "2018-08-15 15:04:27",
      "context": "货物已分配，等待配送"
    },
    {
      "time": "2018-08-15 12:53:05",
      "context": "货物已完成分拣，离开【成都郫县分拣中心】"
    },
    {
      "time": "2018-08-15 12:26:46",
      "context": "货物已到达【成都郫县分拣中心】"
    },
    {
      "time": "2018-08-15 12:26:46",
      "context": "货物已交付京东物流"
    }
  ]
}
```

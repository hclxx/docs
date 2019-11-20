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
      "order_status": 1 /*int 订单状态:0-待付款 1-待发货 2-已发货 3-已完成 4-已关闭*/,
      "pay_type": "comc" /*string 支付类型*/,
      "currency": "comc" /*string 货币:comoc-comc ore-矿石*/,
      "token_total_price": "10.00000000" /*【新增】string 通证应消耗总数量*/,
      "token_pay_price": "10.00000000" /*【新增】string 实际通证消耗数量*/,
      "user_id": 1,
      "is_delete": 0,
      "created_at": "2019-01-20 20:28:21",
      "updated_at": "2019-01-20 20:28:21",
      "buy_status": true /*bool 再次购买状态 true-是 false-否*/,
      "buy_reason": null /*null|string 不能再次购买原因*/,
      "item_order": {
        "id": 6,
        "user_id": 1,
        "item_id": 1,
        "sku_id": 11 /*sku_id*/,
        "merchant_id": 0,
        "order_id": 6,
        "token_id": 12,
        "goods_name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
        "power": 100,
        "ore": "10.00000000",
        "goods_image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
        "goods_type": 3,
        "spec_type": 2,
        "num": 3,
        "token_total_price": "10.00000000" /*【新增】string 单个商品所需消耗通证数量*/,
        "token_price": "10.00000000" /*【新增】string 商品通证消耗总数量*/,
        "goods_price": "100.00000000" /* string 单个商品所需花费现金金额*/,
        "total_price": "300.00000000" /* string 商品所需花费现金总金额*/,
        "token": {
          "id": 4,
          "name": "以太坊" /*【新增】通证名称*/,
          "symbol": "BTC" /*【新增】通证符*/,
          "icon": {
            "id": 3,
            "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FoZuIPpBi2jzgcwUojmxJm0G5O0L.jpg" /*【新增】通证icon*/
          }
        },
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

**商品订单详情**

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
        "item_order": {
          "id": 6,
          "user_id": 1,
          "item_id": 1,
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

**流量订单详情**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 429,
    "order_no": "99671556087002629",
    "total_price": "6.00000000",
    "pay_price": "6.00000000",
    "pay_status": 1,
    "pay_time": "2019-04-24 14:23:22",
    "delivery_status": 0,
    "delivery_time": null,
    "receipt_status": 0,
    "receipt_time": null,
    "express_code": null,
    "express_name": null,
    "express_no": null,
    "order_status": 3,
    "pay_type": "comc",
    "currency": "comc",
    "user_id": 4,
    "is_delete": 0,
    "created_at": "2019-04-24 14:23:22",
    "updated_at": "2019-04-24 14:23:22",
    "reason": null,
    "buy_status": false,
    "buy_reason": "商品已下架",
    "item_order": {
      "id": 398,
      "user_id": 4,
      "item_id": 0,
      "cost_price": "0.00",
      "order_id": 429,
      "goods_name": "中国电信全国流量套餐10M" /*商品名称*/,
      "goods_type": 4 /*商品类型: 1-虚拟 2-实体 3-卡券 4-聚合充值*/,
      "goods_image": "",
      "num": 1,
      "goods_price": "6.00000000",
      "total_price": "6.00000000",
      "specs_properties": [],
      "extend": {
        "type": "ctcc-traffic" /*充值目标类型，例如：中国移动流量，中国移动话费 用于图片呈现*/,
        "phone": "17345773103",
        "number": "17345773103" /* 充值的账号*/,
        "orderid": "99671556087002629" /*订单号*/,
        "game_state": "0" /*0:充值中 9:充值失败*/,
        "cardname": "中国电信全国流量套餐10M",
        "ordercash": "1.860" /*订单金额单位元*/,
        "error_code": 0 /*0-成功 10014-网络异常需特殊处理*/,
        "sporder_id": "F19042414232270400877124" /*聚合订单号*/,
        "recharge_type": 2 /*1-话费充值 2-流量充值 3-文娱充值*/
      },
      "remark": null
    },
    "consignee": null
  }
}
```

**话费订单详情**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 427,
    "order_no": "63621556085801236",
    "total_price": "4.00000000",
    "pay_price": "4.00000000",
    "pay_status": 1,
    "pay_time": "2019-04-24 14:03:21",
    "delivery_status": 0,
    "delivery_time": null,
    "receipt_status": 0,
    "receipt_time": null,
    "express_code": null,
    "express_name": null,
    "express_no": null,
    "order_status": 1,
    "pay_type": "comc",
    "currency": "comc",
    "user_id": 4,
    "is_delete": 0,
    "created_at": "2019-04-24 14:03:21",
    "updated_at": "2019-04-24 14:03:21",
    "reason": null,
    "buy_status": false,
    "buy_reason": "商品已下架",
    "item_order": {
      "id": 397,
      "user_id": 4,
      "item_id": 0,
      "cost_price": "0.00",
      "order_id": 427,
      "goods_name": "四川移动话费1元",
      "goods_type": 4 /*商品类型: 1-虚拟 2-实体 3-卡券 4-聚合充值*/,
      "goods_image": "",
      "num": 1,
      "goods_price": "4.00000000",
      "total_price": "4.00000000",
      "specs_properties": [],
      "extend": {
        "type": "cmcc-rate" /*移动话费充值*/,
        "cardid": "10691" /*聚合套餐id*/,
        "number": "13458589353" /*充值账号*/,
        "cardnum": "1" /*套餐面额*/,
        "cardname": "四川移动话费1元",
        "uorderid": "63621556085801236",
        "ordercash": 1.06,
        "error_code": 0 /*0-成功 10014-网络异常需特殊处理*/,
        "game_state": "0" /*0:充值中 1-充值成功 9:充值失败*/,
        "sporder_id": "J19042414032125273074526",
        "game_userid": "13458589353",
        "recharge_type": 1 /*1-话费充值 2-流量充值 3-文娱充值*/
      },
      "remark": null
    },
    "consignee": null
  }
}
```

**电子卡券订单详情**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 28,
    "order_no": "37502147483647",
    "total_price": "189.00000000",
    "pay_price": "189.00000000",
    "pay_status": 1,
    "pay_time": "2019-04-23 17:43:54",
    "delivery_status": 1,
    "delivery_time": "2019-04-23 17:43:54",
    "receipt_status": 1,
    "receipt_time": "2019-04-23 17:43:54",
    "order_status": 3,
    "pay_type": "comc",
    "currency": "comc",
    "user_id": 16,
    "express_name": null,
    "express_code": null,
    "express_no": null,
    "is_delete": 0,
    "created_at": "2019-04-23 17:43:54",
    "updated_at": "2019-04-23 17:43:54",
    "reason": null,
    "buy_status": true,
    "buy_reason": null,
    "item_order": {
      "id": 16,
      "user_id": 16,
      "item_id": 76,
      "cost_price": "5.00",
      "order_id": 28,
      "goods_name": "樊登读书卡",
      "goods_type": 3,
      "goods_image": "http://szl.qingchuanren.com/4cba9cbb9479b8e09b7d6dab6f3fd51b.png",
      "num": 9,
      "goods_price": "21.00000000",
      "total_price": "189.00000000",
      "specs_properties": [],
      "extend": {
        "items": [
          {
            "card_no": 20190412001,
            "card_url": "https://card.dushu.io/generalize/entityCard/card.html?id=97f5cfd39e0c1346501"
          },
          {
            "card_no": 20190412002, //  激活卡号
            "card_url": "https://www.baidu.com" //  激活地址
          }
        ]
      },
      "remark": null
    },
    "consignee": null
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

`/api/v1/yz/affirm/{order}/order`

`order: 订单ID`

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

`POST`

**路径**

`/api/v1/yz/affirm/{order}/express`

`order: 订单ID`

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

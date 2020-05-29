# 订单

## 订单统计

**方式**

`GET`

**路径**

`/api/order-counts`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "wait_pay": 5 /*int 待支付*/,
    "wait_send": 0 /*int 待发货*/,
    "wait_receipt": 0 /*int 待收货*/
  }
}
```

## 订单列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                                              说明                                               |
| :----: | :----: | :--: | :---------------------------------------------------------------------------------------------: |
| status | string |  是  | 状态检索:wait-待支付/paid-已支付等待发货/shipped-已发货/completed-已完成/closed-关闭/apply-售后 |
| limit  |  int   |  是  |                                        条目数 默认为 20                                         |
| offset |  int   |  是  |                                         条目数 默认为 0                                         |

**路径**

`/api/orders`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "order_no": "11351590054018403" /*订单号*/,
      "user_id": 1,
      "merchant_id": 0,
      "total_price": "100.00" /*总金额*/,
      "pay_price": "100.00" /*实际金额*/,
      "token": "0.00" /*SCCB奖励个数*/,
      "paid_at": null /*支付时间*/,
      "pay_type": "alipay" /*支付方式*/,
      /*收货信息*/
      "receiving_address": {
        "area": "四川省成都市区" /*配送区域*/,
        "name": "胡昊" /*收货人名称*/,
        "phone": "18382274309" /*收货人手机*/,
        "address": "环球中心" /*收货具体地址*/
      },
      "remark": "备注" /*备注*/,
      "refund_status": 0 /*退款状态:0-未申请/1-申请中/2-退款成功/3-退款失败*/,
      "refund_at": null /*退货申请时间*/,
      /*退货信息*/
      "refund_info": {
        "reason": "退货理由",
        "remark": "退货备注",
        "vouchers": ["asdasd.png", "sas.png"]
      },
      "logistics": null,
      "send_at": "2020-05-21 17:40:18" /*发货时间*/,
      "receipt_at": "2020-05-21 17:40:18" /*收货时间*/,
      "express_code": "jd" /*物流编码*/,
      "express_name": "京东" /*物流名称*/,
      "express_no": "asdasdasdasd" /*物流运单号*/,
      "status": 0 /*订单状态:0-待付款/1-已付款/2-已发货/3-已完成/4-已关闭/5已分发奖励*/,
      "extra": null,
      "reason": null /*订单关闭原因*/,
      "created_at": "2020-05-21 17:40:18",
      "updated_at": "2020-05-21 17:40:18",
      "close_seconds": 0 /*待支付订单关闭秒数*/,
      /*订单购买的商品信息*/
      "spu_order": {
        "id": 2,
        "spu_id": 4,
        "sku_id": 1 /*SKU ID*/,
        "order_id": 2 /*Order Id*/,
        "spu_name": "iphone12" /*商品名称*/,
        "spu_pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg" /*商品图*/,
        "zone": "1" /*区域*/,
        "attrs": [
          {
            "n_id": 1,
            "name": "颜色",
            "v_id": 2,
            "value": "红色"
          },
          {
            "n_id": 2,
            "name": "内存大小",
            "v_id": 4,
            "value": "64G"
          }
        ],
        "num": 1 /*购买数量*/,
        "price": "1000.00" /*单价*/,
        "token": "0.00" /*单个商品奖励SCCB数量*/,
        "created_at": "2020-05-21 17:40:18",
        "updated_at": "2020-05-21 17:40:18"
      }
    }
  ]
}
```

## 订单详情

**方式**

`GET`

**路径**

`/api/orders/{id}`

**响应**

`Status code 200`

```json
{
  "id": 2,
  "order_no": "11351590054018403" /*订单号*/,
  "user_id": 1,
  "merchant_id": 0,
  "total_price": "100.00" /*总金额*/,
  "pay_price": "100.00" /*实际金额*/,
  "token": "0.00" /*SCCB奖励个数*/,
  "paid_at": null /*支付时间*/,
  "pay_type": "alipay" /*支付方式*/,
  /*收货信息*/
  "receiving_address": {
    "area": "四川省成都市区" /*配送区域*/,
    "name": "胡昊" /*收货人名称*/,
    "phone": "18382274309" /*收货人手机*/,
    "address": "环球中心" /*收货具体地址*/
  },
  "remark": "备注" /*备注*/,
  "refund_status": 0 /*退款状态:0-未申请/1-申请中/2-退款成功/3-退款失败*/,
  "refund_at": null /*退货申请时间*/,
  /*退货信息*/
  "refund_info": {
    "reason": "退货理由",
    "remark": "退货备注",
    "vouchers": ["asdasd.png", "sas.png"],
    "reject_reason": "驳回理由",
    "express_no": "物流单号",
    "express_code": "物流编码",
    "express_name": "物流方式"
  },
  "logistics": null,
  "send_at": "2020-05-21 17:40:18" /*发货时间*/,
  "receipt_at": "2020-05-21 17:40:18" /*收货时间*/,
  "express_code": "jd" /*物流编码*/,
  "express_name": "京东" /*物流名称*/,
  "express_no": "asdasdasdasd" /*物流运单号*/,
  "status": 0 /*订单状态:0-待付款/1-已付款/2-已发货/3-已完成/4-已关闭*/,
  "extra": null,
  "reason": null /*订单关闭原因*/,
  "created_at": "2020-05-21 17:40:18",
  "updated_at": "2020-05-21 17:40:18",
  "close_seconds": 0 /*待支付订单关闭秒数*/,
  /*订单购买的商品信息*/
  "spu_order": {
    "id": 2,
    "spu_id": 4,
    "sku_id": 1 /*SKU ID*/,
    "order_id": 2 /*Order Id*/,
    "spu_name": "iphone12" /*商品名称*/,
    "spu_pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg" /*商品图*/,
    "zone": "1" /*区域*/,
    "attrs": [
      {
        "n_id": 1,
        "name": "颜色",
        "v_id": 2,
        "value": "红色"
      },
      {
        "n_id": 2,
        "name": "内存大小",
        "v_id": 4,
        "value": "64G"
      }
    ],
    "num": 1 /*购买数量*/,
    "price": "1000.00" /*单价*/,
    "token": "0.00" /*单个商品奖励SCCB数量*/,
    "created_at": "2020-05-21 17:40:18",
    "updated_at": "2020-05-21 17:40:18"
  }
}
```

## 删除订单

::: tip

只有已关闭或者已完成订单可以进行删除

判断逻辑:

(order.status == 3 || order.status == 5 || order.status == 4) && order.refund_status == 0

:::

**方式**

`DELETE`

**路径**

`/api/orders/{id}`

**响应**

`Status code 200`

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

## 取消订单

## 撤销退款/换货

::: tip

只有待支付订单才能进行取消

判断逻辑:

order.status == 0

:::

**方式**

`PUT`

**路径**

`/api/orders/{id}/cancel`

**响应**

`Status code 200`

```json
{
  "msg": "取消成功",
  "code": 0,
  "data": null
}
```

## 确认收货

## 撤销退款/换货

::: tip

只有已发货的订单才能确认收货

判断逻辑:

order.status == 2

:::

**方式**

`POST`

**路径**

`/api/orders/{id}/receipt`

**响应**

`Status code 200`

```json
{
  "msg": "确认收货成功",
  "code": 0,
  "data": null
}
```

## 申请退款/换货

::: tip

只有未收货/待发货才能申请退款/退货

判断逻辑:

order.status == 1 || order.status == 3
q
:::

**方式**

`POST`

|       名称       |  类型  | 必须 |               说明                |
| :--------------: | :----: | :--: | :-------------------------------: |
|      reason      | string |  是  |               必填                |
|      remark      |  int   |  是  |               备注                |
|     vouchers     | array  |  是  | 凭证图片集合,["01.png", "02.png"] |
|   express_code   | string |  是  |           物流公司编码            |
|   express_name   | string |  是  |           物流公司名称            |
|    express_no    | string |  是  |            物流运单号             |
| express_vouchers | array  |  是  |             物流凭证              |

**路径**

`/api/orders/{id}/refund`

**响应**

`Status code 200`

```json
{
  "msg": "提交成功",
  "code": 0,
  "data": null
}
```

## 撤销退款/换货

::: tip

只有申请中订单才能撤销

判断逻辑:

order.refund_status == 1

:::

**方式**

`DELETE`

**路径**

`/api/orders/{id}/refund`

**响应**

`Status code 200`

```json
{
  "msg": "撤销成功",
  "code": 0,
  "data": null
}
```

## 物流信息

::: tip

只有已发货的订单才能查看物流

判断逻辑:

order.status == 2

:::

**方式**

`GET`

**路径**

`/api/orders/{id}/logistics`

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
    }
  ]
}
```

## 商品下单

**方式**

`POST`

**路径**

`/api/orders`

**参数**

|     名称     |  类型  | 必须 |                      说明                       |
| :----------: | :----: | :--: | :---------------------------------------------: |
|     num      |  int   |  是  |                    购买数量                     |
|    sku_id    |  int   |  是  |                     SKU ID                      |
|   pay_type   | string |  是  | 支付类型:alipay-支付宝/wxpay-微信支付/sccb-sccb |
| pay_password | string |  否  |    支付密码 ，仅当 `pay_type` 为 `sccb` 必须    |
|    remark    | string |  否  |                      备注                       |
|  address_id  |  int   |  是  |                    收货地址                     |
| merchant_id  |  int   |  否  |           体验店商品，必须选择店铺 ID           |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    /*支付宝订单信息*/
    "alipay_result": "123123213123",
    /*微信订单信息*/
    "wxpay_result": {
      "app_id": ""
    },
    "order_id": 1
  }
}
```

## 获取支付状态

**方式**

`GET`

**路径**

`/api/orders/{id}/status`

**响应**

`Status code 200`

```json
{
  "msg": "获取订单状态",
  "code": 0,
  "data": {
    "status": true /*状态:true or false*/
  }
}
```

## 获取商户退还货信息

**方式**

`GET`

**参数**

| 名称 | 类型 | 必须 |         说明         |
| :--: | :--: | :--: | :------------------: |
| mid  | int  |  是  | 商户 ID,自身平台为 0 |

**路径**

`/api/orders/{id}/status`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "consignee": "骚君" /*收货人*/,
    "tel": "1838227409" /*联系方式*/,
    "address": "四川成都" /*收货地址*/,
    "description": "注意事项哈" /*注意事项*/
  }
}
```

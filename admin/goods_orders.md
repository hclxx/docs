# 兑换订单

## 兑换列表

`admin/order`

**请求方法**

`GET`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |                                     说明                                     |
| :----------: | :----: | :--: | :--: | :--------------------------------------------------------------------------: |
|    limit     |  int   |  15  |  否  |                                   每页条数                                   |
|  target_id   |  int   |  无  |  否  |                                   用户 ID                                    |
|  shop_name   | string |  无  |  否  |                                   商品名称                                   |
|   currency   |  int   |  无  |  否  |                                   货币 ID                                    |
|   express    | string |  无  |  否  |                                    运单号                                    |
|   order_no   | string |  无  |  否  |                                    订单号                                    |
| order_status |  int   |  无  |  否  | 订单状态: 0-等待付款 1-等待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已作废 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "user_id": 1 /*用户ID*/,
      "goods_id": 1 /*商品ID*/,
      "merchant_id": 1 /*店铺ID*/,
      "order_id": 1,
      "goods_name": "商品名称" /*商品名称*/,
      "calculate": 100 /*算力*/,
      "ore": "1000.00000000" /*矿石奖励*/,
      "goods_image": 1 /*商品图片*/,
      "spec_type": 1 /*规格类型*/,
      "num": 1 /*数量*/,
      "goods_price": "1000.00000000" /*单价*/,
      "total_price": "1000.00000000" /*总价格*/,
      "specs_properties": "{}" /*sku集合*/,
      "extend": null,
      "remark": "备注" /*备注*/,
      "created_at": "2019-01-17 10:35:19" /*购买时间*/,
      "updated_at": "2019-01-17 10:35:21",
      "order_no": "E123123" /*订单号*/,
      "pay_price": "1000.00000000" /*支付金额*/,
      "express_id": 1 /*快递ID*/,
      "express_no": "运单号" /*运单号*/,
      "delivery_time": null /*发货时间*/,
      "receipt_time": null /*收货时间*/,
      "order_status": 1 /*订单状态: 0-等待付款 1-等待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已作废*/,
      "pay_type": "支付宝" /*支付类型*/,
      "currency": "comc" /*货币名称*/,
      "name": "T" /*用户名称*/,
      "phone": "18728624682" /*用户手机号*/,
      "express": null /*快递信息*/
    }
  ],
  "first_page_url": "http://comc.com/admin/order?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/order?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/order",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 发货

`admin/order/{goodsOrder}`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |  说明   |
| :--------: | :----: | :--: | :--: | :-----: |
| express_id |  int   |  无  |  是  | 快递 ID |
| express_no | string |  是  |  是  | 运单号  |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "发货成功"
}
```

**ERROR 返回体**

```json
{
  "message": "请填写运单号"
}
```

## 查看订单物流

`admin/order/{goodsOrder}/express`

**请求方法**

`GET`

**请求参数**

`无`

**返回体**

```json
[
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
```

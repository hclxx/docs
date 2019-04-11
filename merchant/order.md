# 商家商品订单

## 商家商品订单列表

`/merchant/orders`

**请求方法**

`GET`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |                                  说明                                   |
| :----------: | :----: | :--: | :--: | :---------------------------------------------------------------------: |
|    limit     |  int   |  15  |  否  |                                每页条数                                 |
|     name     | string |  无  |  否  |                                  名称                                   |
| order_status |  int   |  -1  |  否  | 订单状态:0-待付款 1-待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已关闭 |
|   order_no   | string |  无  |  否  |                                 订单号                                  |
|  start_time  | string |  无  |  否  |                                开始时间                                 |
|   end_time   | string |  无  |  否  |                                结束时间                                 |
|   currency   | string | comc |  否  |                            货币类型 comc,ore                            |

**SUCCESS 状态码**

```json
{
  "current_page": 1,
  "data": [
    {
      "goods_name": "商品名称", // 商品名称
      "goods_image": 1, // 商品图片
      "num": 1, // 数量
      "specs_properties": null, // 规格
      "id": 1, // ID
      "order_id": 1, // 订单ID
      "goods_price": "100.00000000", // 价钱
      "order_no": "E123123", // 订单号
      "total_price": "1000.00000000", // 总价钱
      "pay_price": "1000.00000000", // 支付价钱
      "pay_time": "2019-01-21 19:33:01", // 支付时间
      "express_name": null, // 快递名称
      "phone": "18728624682", // 买家手机号
      "name": "放纵", // 买家昵称
      "express_code": null, // 快递code
      "express_no": "exdsadsa", // 运单号
      "delivery_time": "2019-01-21 19:48:26", // 发货时间
      "pay_type": null, // 支付类型
      "created_at": "2019-01-21 19:48:26", // 支付时间
      "order_status": 0, // 订单状态:0-待付款 1-待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已关闭
      "currency": "comc" // 货币类型
    }
  ],
  "first_page_url": "http://comc.com/merchant/orders?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/merchant/orders?page=1",
  "next_page_url": null,
  "path": "http://comc.com/merchant/orders",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 商家商品订单发货

`merchant/order/{goodsOrder}`

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

## 获取快递公司列表

`/merchant/express`

**请求方法**

`GET`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  否  | 快递名称 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 1, // ID
    "name": "京东", // 名称
    "code": "jindong", // code
    "created_at": "2019-01-28 17:32:34",
    "updated_at": "2019-01-28 17:32:34"
  },
  {
    "id": 2,
    "name": "爱沙尼亚",
    "code": "omniva",
    "created_at": "2019-01-28 17:32:34",
    "updated_at": "2019-01-28 17:32:34"
  }
]
```


## 获取订单信息

`/merchant/exchange/order`

**请求方法**

`GET`

**请求参数**

| 名称 |  类型  | 必须 |  说明  |
| :--: | :----: | :--: | :----: |
| tid  | string |  是  | 订单号 |

**返回体**

```json
{
  "id": 16,
  "order_no": "70291550558515550", // 订单号
  "pay_time": "2019-02-19 14:41:55",
  "express_name": null, // 快递名称
  "express_code": null, // 快递code
  "express_no": null, // 运单号
  "delivery_time": null, // 发货时间
  "receipt_time": null, // 收货时间
  "user_id": 13,
  "goods_order": {
    "id": 14,
    "goods_name": "小米6X 全网通 4GB+32GB 流沙金 移动联通电信4G手机 双卡双待 智能手机", // 商品名称
    "goods_image": "http://pm12qeuu3.bkt.clouddn.com/15273966abc3ba3ed4bfdc70cd580fac.jpeg", //商品图片
    "num": 1, // 数量
    "order_id": 16,
    "specs_properties": "[{\"p_id\": 121, \"s_id\": 50, \"p_name\": \"曜石黑\", \"s_name\": \"颜色\"}, {\"p_id\": 126, \"s_id\": 51, \"p_name\": \"4GB 32GB\", \"s_name\": \"版本\"}]" // sku
  },
  "user": {
    "id": 9,
    "name": "用户名称",
    "phone": "18728612345"
  }
}
```

 ## 导出订单
   
   `merchant/export`
   
   **请求方式**
   
   `POST`
   
   **请求参数**
   
   |   名称   |  类型  | 默认 | 必须 |                   说明                   |
   | :------: | :----: | :--: | :--: | :--------------------------------------: |
   |   order_no   | string |  无  |  否  |                   订单号                   |
   |   order_nos  | array |  无  |  否  |                   订单号(批量)                   |
   |  name   | string |  无  |  否  | 商品名称 |
   |  currency   | string |  无  |  否  |  comc-comc ore-矿石  |
   |  order_status  |  int   |  -1   |  否  |  0: 待支付 1: 待发货 2: 已发货 3: 已收货 4: 交易失败 5: 申请退款 6: 退款成功  |
   | start_time | datetime |  无  |  否  |                   开始日期                  |
   | end_time | datetime |  无  |  否  |                   结束日期                  |
   
   **SUCCESS 状态码**
   
   `201`
   
   **SUCCESS 返回体**
   
   ```json
   
 {
     "download_url": "http://comc.com/storage/(2019-04-11)-订单导出.xlsx"
 }
   ```
   
   **ERROR 返回体**
    
    `无`
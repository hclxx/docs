# 商家有赞订单


## 获取快递公司的列表

`merchant/yz/express`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json

[
    {
        "display": 1,
        "name": "申通快递",
        "id": 1
    },
    {
        "display": 1,
        "name": "圆通速递",
        "id": 2
    },
    {
        "display": 1,
        "name": "中通快递",
        "id": 3
    },
    {
        "display": 1,
        "name": "韵达快递",
        "id": 4
    },
    {
        "display": 1,
        "name": "天天快递",
        "id": 5
    },
    {
        "display": 1,
        "name": "百世快递",
        "id": 6
    },
    {
        "display": 1,
        "name": "顺丰速运",
        "id": 7
    }
]
```

**ERROR 返回体**
 
 `无`
 
 
 ##  确认发货
 
 `merchant/yz/order/{yzOrder}`
 
 **请求方式**
 
 `PUT`
 
 **请求参数**
 
 |   名称   |  类型  | 默认 | 必须 |                   说明                   |
 | :------: | :----: | :--: | :--: | :--------------------------------------: |
 |  out_sid   | int |  无  |  是  |                   快递单号                   |
 |  out_stype   | int |  无  |  是  | 物流公司编号 |
 |  express_name   | string |  无  |  是  |  快递名称  |

 
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
  "message": "发货失败"
}
```

## 查询物流信息

`merchant/yz/express/{yzOrder}`

  **请求方式**
  
  `GET`
  
  **SUCCESS 状态码**
  
  `200`
  
  **SUCCESS 返回体**
  
  ```json
  {
      "com": "shentong",
      "created_time": 1493293856,
      "express_id": 9,
      "data": "[{\"context\":\"浙江省杭州市市场部公司已收件\",\"time\":\"2013-12-22 15:20:23\",\"status\":\"收件\"},{\"context\":\"杭州转运中心公司已收入\",\"time\":\"2013-12-22 21:09:53\",\"status\":\"在途\"},{\"context\":\"杭州转运中心公司已打包\",\"time\":\"2013-12-22 21:23:54\",\"status\":\"在途\"}]",
      "nu": "203500315479",
      "ep_condition": "",
      "id": 17,
      "state": 3,
      "message": "已签收",
      "status": ""
  }
 ```
 
 **ERROR 返回体**
 
 ```json
 {
   "message": "查询的数据不存在"
 }
 ```
 
 
 ## 订单列表
 
 `merchant/yzOrders`
 
 **请求方式**
 
 `GET`
 
 **请求参数**
 
 |   名称   |  类型  | 默认 | 必须 |                   说明                   |
 | :------: | :----: | :--: | :--: | :--------------------------------------: |
 |   tid   | string |  无  |  否  |                   有赞订单号                   |
 |  goods_name   | string |  无  |  否  | 商品名称 |
 |  user_name_phone   | string |  无  |  否  |  买家的姓名或手机号  |
 |  type  |  int   |  -1   |  否  |  0: 待支付 1: 待发货 2: 已发货 3: 已收货 4: 交易失败 5: 申请退款 6: 退款成功  |
 | start_time | datetime |  无  |  否  |                   开始日期                  |
 | end_time | datetime |  无  |  否  |                   结束日期                  |
 | day | string |  无  |  否  |     今天：today ；昨天：1；近7天：7；近30天：30 （与start_time、end_time互斥）   |
 
 **SUCCESS 状态码**
 
 `200`
 
 **SUCCESS 返回体**
 
 ```json
 
{
    "current_page": 1,
    "data": [
        {
            "id": 2,
            "user_id": 2,
            "merchant_id": 2,
            "goods_id": "454143893",
            "comc_num": 10,
            "comc_rate": "0.000",
            "power": 100,
            "address_info": {
                "receiver_tel": "18681849380",
                "address_extra": "{\"areaCode\":\"610113\",\"lon\":108.94980394253571,\"lat\":34.200971809782025}",
                "delivery_city": "西安市",
                "receiver_name": "刘涛",
                "self_fetch_info": "",
                "delivery_address": "电视塔",
                "delivery_district": "雁塔区",
                "delivery_province": "陕西省",
                "delivery_postal_code": ""
            },
            "goods_name": "测试商品",
            "cover_img_url": "https://img.yzcdn.cn/upload_files/2019/01/27/43e71ae5e620f9f06378f80a7ae7f568.jpg",
            "num": 2,
            "cost_price": "0.01",
            "oid": "1504094306638507747",
            "price": 2,
            "tid": "E201903081619390252000211",
            "alias": "2xj1pjfq05j01",
            "profit": "0.00",
            "type": 0,
            "apply_refund_front_type": 0,
            "created_time": "2019-03-08 16:19:39",
            "pay_time": "2019-03-08 16:19:49",
            "send_time": "2019-03-08 16:19:49",
            "success_time": "2019-03-08 16:19:49",
            "sku": "[{\"k\": \"颜色\", \"v\": \"白色\", \"k_id\": 1, \"v_id\": 187}]",
            "express": {
                "id": 0,
                "no": ""
            },
            "details_url": "https://h5.youzan.com/v2/showcase/goods?alias=2xj1pjfq05j01",
            "remark_info": null,
            "created_at": "2019-04-09 11:19:40",
            "updated_at": "2019-03-08 17:29:28",
            "reward_status": 3,
            "name": "13",
            "phone": "18728624685"
        }
    ],
    "first_page_url": "http://comc.com/merchant/yzOrders?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/merchant/yzOrders?page=1",
    "next_page_url": null,
    "path": "http://comc.com/merchant/yzOrders",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
 ```
 
 **ERROR 返回体**
  
  `无`
  
  
 ## 获取有赞订单详情
  
  `/merchant/yz/order`
  
  **请求方法**
  
  `GET`
  
  **参数**
  
  | 名称 |  类型  | 必须 |   说明   |
  | :--: | :----: | :--: | :------: |
  | oid  | string |  是  | 唯一标示 |
  
  **返回体**
  
  ```json
  {
    "user_id": 9, // 用户ID
    "address_info": {
      // 收货地址信息
      "receiver_tel": "18284583308",
      "address_extra": "{\"areaCode\":\"510107\",\"lon\":104.06982984985923,\"lat\":30.575055523764153}",
      "delivery_city": "成都市",
      "receiver_name": "杨覃",
      "self_fetch_info": "",
      "delivery_address": "天府大道北段1700号 新世纪环球购物中心 E2.    15楼1-3-1508",
      "delivery_district": "武侯区",
      "delivery_province": "四川省",
      "delivery_postal_code": ""
    },
    "goods_name": "福建莆田桂圆干 |  桂圆中的霸王 肉质细腻  甜而不腻 益脾开胃  泡茶 干吃 都不错", // 商品名称
    "cover_img_url": "https://img.yzcdn.cn/upload_files/2018/10/06/FqBcb7LwgEYaUoMOM66XtobcFTWm.jpg", // 商品图片
    "num": 1, // 商品数量
    "tid": "E20190214143853006300039", // 订单号
    "created_time": "2019-02-14 14:38:53", // 创建时间
    "pay_time": "2019-02-14 14:39:09", // 支付时间
    "send_time": "2019-02-15 18:12:31", // 发货时间
    "success_time": null, // 收货时间
    "sku": "[{\"k\": \"规格\", \"v\": \"250g试吃装（4A级）\", \"k_id\": 14, \"v_id\": 26530463}]", // 规格
    "express": {
      "id": 1,
      "no": "3397911642496" // 运单号
    },
    "user": {
      "id": 9,
      "name": "用户名称",
      "phone": "18728612345"
    }
  }
  ```
  
  
  ## 导出订单
   
   `merchant/yz/export`
   
   **请求方式**
   
   `POST`
   
   **请求参数**
   
   |   名称   |  类型  | 默认 | 必须 |                   说明                   |
   | :------: | :----: | :--: | :--: | :--------------------------------------: |
   |   tid   | string |  无  |  否  |                   有赞订单号                   |
   |   tides  | array |  无  |  否  |                   有赞订单号(批量)                   |
   |  goods_name   | string |  无  |  否  | 商品名称 |
   |  user_name_phone   | string |  无  |  否  |  买家的姓名或手机号  |
   |  type  |  int   |  -1   |  否  |  0: 待支付 1: 待发货 2: 已发货 3: 已收货 4: 交易失败 5: 申请退款 6: 退款成功  |
   | start_time | datetime |  无  |  否  |                   开始日期                  |
   | end_time | datetime |  无  |  否  |                   结束日期                  |
   | day | string |  无  |  否  |     今天：today ；昨天：1；近7天：7；近30天：30 （与start_time、end_time互斥）   |
   
   **SUCCESS 状态码**
   
   `201`
   
   **SUCCESS 返回体**
   
   ```json
   
 {
     "download_url": "http://comc.com/storage/(2019-04-11)-有赞订单导出.xlsx"
 }
   ```
   
   **ERROR 返回体**
    
    `无`

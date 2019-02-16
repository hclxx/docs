# 有赞

## 有赞商品

`admin/yz/goods`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 | 说明     |
| :---: | :----: | :--: | :--: | -------- |
| limit |  int   |  15  |  否  | 每页条数 |
| title | string |  无  |  否  | 名称     |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 5, // id
      "yz_good_id": 451527784, // 有赞商品ID
      "merchant_id": 0, // 商家ID
      "title": "测试商品四1", // 商品名称
      "price": 0.01, // 商品价格
      "cover_url": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png!120x120.jpg", // 商品图片
      "comc_num": 0, // comc奖励数量
      "comc_rate": "0.000", // comc奖励比例
      "cost_price": 0.0, // 成本价
      "power": 0, // 算力奖励数量
      "is_display": 1, // 1: 上架 2: 下家
      "created_at": "2019-01-24 14:52:36",
      "updated_at": "2019-01-24 14:53:17"
    }
  ],
  "first_page_url": "http://comc.com/admin/yz/goods?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/yz/goods?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/yz/goods",
  "per_page": 15,
  "prev_page_url": null,
  "to": 4,
  "total": 4
}
```

## 设置商品 comc 奖励

`admin/yz/goods/{goods}/comc`

**请求方法**

`PUT`

**请求参数**

| 名称  |   类型    | 默认 | 必须 | 说明                 |
| :---: | :-------: | :--: | :--: | -------------------- |
|  key  |  string   |  无  |  是  | num: 数量 rate: 比例 |
| value | int/float |  无  |  否  | 值                   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "数量必须正整数"
}
```

## 设置商品算力奖励

`admin/yz/goods/{goods}/power`

**请求方法**

`PUT`

**请求参数**

| 名称  | 类型 | 默认 | 必须 | 说明 |
| :---: | :--: | :--: | :--: | ---- |
| power | int  |  0   |  否  | 值   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

`无`

## 设置商品成本价

`admin/yz/goods/{goods}/cost/price`

**请求方法**

`PUT`

**请求参数**

| 名称  | 类型  | 默认 | 必须 | 说明 |
| :---: | :---: | :--: | :--: | ---- |
| price | float |  0   |  否  | 值   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

`无`

## 有赞订单

`/admin/yz/orders`

**请求方式**

`GET`

**请求参数**

|    名称    |  类型  | 默认 | 必须 | 说明     |
| :--------: | :----: | :--: | :--: | -------- |
|   limit    |  int   |  15  |  否  | 每页条数 |
|   phone    | string |  无  |  否  | 手机号   |
|    name    | string |  无  |  否  | 用户昵称 |
|    tid     | string |  无  |  否  | 订单号   |
| start_time | string |  无  |  否  | 开始时间 |
|  end_time  | string |  无  |  否  | 结束时间 |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "merchant_id": 0,
      "goods_id": "451527784",
      "comc_num": 0 /*奖励数量*/,
      "comc_rate": "0.000" /*奖励比例*/,
      "power": 0 /*算力奖励*/,
      "address_info": {
        /*收货地址*/
        "receiver_tel": "18728624682",
        "address_extra": "{\"areaCode\":\"510104\",\"lon\":104.06983185002099,\"lat\":30.5750525233927}",
        "delivery_city": "成都市",
        "receiver_name": "唐浩力",
        "self_fetch_info": "",
        "delivery_address": "环球中心",
        "delivery_district": "锦江区",
        "delivery_province": "四川省",
        "delivery_postal_code": ""
      },
      "goods_name": "测试商品四1" /*商品名称*/,
      "cover_img_url": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png",
      "num": 1 /*数量*/,
      "cost_price": "0.00" /*成本价*/,
      "oid": "1500332508235438939",
      "price": 0 /*实际支付价*/,
      "tid": "E20190216094415071500013" /*订单号*/,
      "type": 1 /*0: 待支付 1: 待发货 2: 已发货 3: 已收货 4: 交易失败 5: 申请退款 6: 退款成功*/,
      "created_time": "2019-02-16 09:44:15" /*创建时间*/,
      "pay_time": "2019-02-16 09:44:15" /*支付时间*/,
      "send_time": null /*发货时间*/,
      "success_time": null /*确认收货时间*/,
      "sku": "[{\"k\": \"规格\", \"v\": \"250g试吃装（4A级）\", \"k_id\": 14, \"v_id\": 26530463}]" /*选择的SKU*/,
      "express": {
        "id": 0,
        "no": "" /*运单号*/
      },
      "details_url": "https://h5.youzan.com/v2/showcase/goods?alias=361q1jgw9qey9" /*商品详情*/,
      "name": "放纵" /*昵称*/,
      "phone": "18728624682" /*手机号*/
    }
  ],
  "first_page_url": "http://shop.igoods.io/admin/yz/orders?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://shop.igoods.io/admin/yz/orders?page=1",
  "next_page_url": null,
  "path": "http://shop.igoods.io/admin/yz/orders",
  "per_page": 15,
  "prev_page_url": null,
  "to": 10,
  "total": 10
}
```

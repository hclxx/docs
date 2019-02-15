# 优惠卷

## 获取商品优惠卷

`api/v1/discount`

**请求方式**

`GET`

**请求参数**

|  名称   | 类型 | 默认 | 必须 |  说明   |
| :-----: | :--: | :--: | :--: | :-----: |
| item_id | int  |  无  |  是  | 有赞 ID |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "date": [
    {
      "itemIds": null,
      "range_type": "all" /*适用商品类型 excluded:部分商品不可用 part: 部分商品可用 all: 全部可用*/,
      "discountId": 3705498 /*优惠卷、优惠码ID*/,
      "id": 2,
      "name": "a1",
      "alias": "28mbxkac" /**别名**/,
      "price": "0.00000000" /*兑换价钱*/,
      "yz_id": 3705498,
      "provide_num": 10123 /*发布数量*/,
      "residue_num": 10123 /*剩余数量*/,
      "apply_type": 0 /*适用类型 0-全部可用 1-部分可用*/,
      "is_limit": 0 /*0: 可无限兑换*/,
      "denominations": 0 /**面额（单位分）**/,
      "condition": 12300 /*满减 分*/,
      "max_discount": 0 /*最大优惠 分*/,
      "range_value": null,
      "random_discount": 0 /*0: 不随机 其他值随机*/,
      "discount": 0 /*折扣 8.8折 => 88*/,
      "discount_attr": 2 /* 优惠属性 1-表示优惠 2-表示折扣*/,
      "end_at": "9999-01-01 00:00:00" /*结束时间*/,
      "start_at": "2019-02-13 11:10:06" /*开始时间*/,
      "show": 0,
      "type": 0,
      "created_at": "2019-02-13 15:26:29",
      "updated_at": "2019-02-13 15:26:29",
      "get_num": 0 /*领取数量*/
    }
  ]
}
```

## 我的优惠卷

`api/v1/discount/user`

**请求方式**

`GET`

**请求参数**

|  名称  | 类型 | 默认 | 必须 |                说明                |
| :----: | :--: | :--: | :--: | :--------------------------------: |
| status | int  |  无  |  是  | 0 有效（未使用） 1 已使用 2 已失效 |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "date": [
    {
      "id": 2000348704,
      "kdt_id": 42440305,
      "coupon_group_id": 3723625 /*优惠卷ID*/,
      "preferential_type": 1 /*1：现金，2：折扣*/,
      "value": 100 /*金额*/,
      "discount": 0 /*折扣 8.8折 => 88*/,
      "is_used": 0 /*0: 未使用 1: 已使用*/,
      "take_at": "2019-02-15 10:44:57" /*领取时间*/,
      "used_value": 0 /* 实际优惠金额（单位：分）*/,
      "used_at": "0000-00-00 00:00:00" /*使用时间*/,
      "used_in_order_no": "" /*用于订单号*/,
      "used_in_order_nos": [],
      "max_discount": 0 /*最大优惠 分*/,
      "condition": 12300 /*满减 分*/,
      "apply_type": 0 /*适用类型 0-全部可用 1-部分可用*/,
      "verify_code": "",
      "valid_start_at": "2019-02-14 19:04:20" /*优惠开始时间*/,
      "expire_at": "2019-02-21 00:00:00" /*expire_at*/,
      "is_sync_card": 0
    }
  ]
}
```

## 优惠卷详情

`api/v1/discount/details`

**请求方式**

`GET`

**请求参数**

|    名称     | 类型 | 默认 | 必须 |   说明    |
| :---------: | :--: | :--: | :--: | :-------: |
| discount_id | int  |  无  |  是  | 优惠卷 id |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "date": {
    "itemIds": null,
    "range_type": "all" /*适用商品类型 excluded:部分商品不可用 part: 部分商品可用 all: 全部可用*/,
    "discountId": 3705498 /*优惠卷、优惠码ID*/,
    "id": 2,
    "name": "a1",
    "alias": "28mbxkac" /**别名**/,
    "price": "0.00000000" /*兑换价钱*/,
    "yz_id": 3705498,
    "provide_num": 10123 /*发布数量*/,
    "residue_num": 10123 /*剩余数量*/,
    "apply_type": 0 /*适用类型 0-全部可用 1-部分可用*/,
    "is_limit": 0 /*0: 可无限兑换*/,
    "denominations": 0 /**面额（单位分）**/,
    "condition": 12300 /*满减 分*/,
    "range_value": null,
    "max_discount": 0 /*最大优惠 分*/,
    "random_discount": 0 /*0: 不随机 其他值随机*/,
    "discount": 0 /*折扣 8.8折 => 88*/,
    "discount_attr": 2 /* 优惠属性 1-表示优惠 2-表示折扣*/,
    "end_at": "9999-01-01 00:00:00" /*结束时间*/,
    "start_at": "2019-02-13 11:10:06" /*开始时间*/,
    "show": 0,
    "type": 0,
    "created_at": "2019-02-13 15:26:29",
    "updated_at": "2019-02-13 15:26:29",
    "get_num": 0 /*领取数量*/
  }
}
```

## 领取优惠卷

`api/v1/discount/{discountId}`

**请求方式**

`POST`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |   说明   |
| :----------: | :----: | :--: | :--: | :------: |
| pay_password | string |  无  |  是  | 支付密码 |

**返回体**

```json
{
  "msg": "领取成功",
  "code": 0,
  "date": []
}
```

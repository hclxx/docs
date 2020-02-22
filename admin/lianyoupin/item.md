# 专区

## 专区商品

`admin/items`

**请求方法**

`GET`

**请求参数**

|    名称     |  类型  | 默认 | 必须 |                 说明                 |
| :---------: | :----: | :--: | :--: | :----------------------------------: |
|    limit    |  int   |  15  |  否  |               每页条数               |
|    name     | string |  无  |  否  |               商品名称               |
|  currency   | string |  无  |  是  | 专区类型 comc-comc 专区 ore-矿石专区 |
| special_id  |  int   |  无  |  否  |               专栏 ID                |
| category_id |  int   |  无  |  否  |               分类 ID                |

**返回参数**

```json
{
  "current_page": 1,
  "data": [
    {
      "name": "测试上平",
      "cost_price": "110.00", // 成本价
      "image": "http://baidu.com", // 图片
      "power": "0", // 矿力奖励数量
      "ore": "0", //  矿石奖励数量
      "id": 12, // ID
      "price": "100.00", // 最低价
      "limit_time": null, // 限时
      "limit_num": 0, // 限量
      "stock_num": 4000, // 总库存
      "category_name": "分类名称", // 总库存
      "sales_num": 0 // 销售量
    }
  ],
  "first_page_url": "http://comc.com/admin/items?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/items?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/items",
  "per_page": 15,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

## 获取详情

`admin/items/{item}`

**请求方法**

`GET`

**返回体**

```json
{
  "id": 12,
  "goods_id": 1,
  "image": "http://baidu.com", // 商品图
  "power": "0",
  "ore": "0",
  "price": "100.00", // 最低价
  "currency": "comc", // 专区
  "limit_time": null,
  "limit_num": 0,
  "stock_num": 4000, // 总库存
  "sales_num": 0, // 销量
  "cost_price": 100, // 成本价
  "created_at": "2019-03-04 19:17:45",
  "updated_at": "2019-03-04 19:17:45",
  "is_delete": 0,
  "sort": 0, // 排序
  "specs_properties": [
    // sku属性
    {
      "name": "颜色",
      "target_id": 12,
      "id": 3,
      "properties": [
        {
          "id": 5,
          "specs_id": 3,
          "name": "红色"
        },
        {
          "id": 6,
          "specs_id": 3,
          "name": "蓝色"
        }
      ]
    },
    {
      "name": "尺寸",
      "target_id": 12,
      "id": 4,
      "properties": [
        {
          "id": 7,
          "specs_id": 4,
          "name": "S"
        },
        {
          "id": 8,
          "specs_id": 4,
          "name": "M"
        }
      ]
    }
  ],
  "skus": [
    // skus值
    {
      "id": 9,
      "stock_num": 0,
      "sales_num": 0,
      "price": "100.00000000", // 兑换价
      "sale_price": "10000.00", // 销售价
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // sku图片
      "properties": "5-7", // 组合属性ID
      "specs_properties": [
        {
          "p_id": 5,
          "s_id": 3,
          "p_name": "红色",
          "s_name": "颜色"
        },
        {
          "p_id": 7,
          "s_id": 4,
          "p_name": "S",
          "s_name": "尺寸"
        }
      ],
      "target_type": "item",
      "target_id": 12
    },
    {
      "id": 10,
      "stock_num": 0,
      "sales_num": 0,
      "price": "100.00000000",
      "sale_price": "10000.00",
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
      "properties": "5-8",
      "specs_properties": [
        {
          "p_id": 5,
          "s_id": 3,
          "p_name": "红色",
          "s_name": "颜色"
        },
        {
          "p_id": 8,
          "s_id": 4,
          "p_name": "M",
          "s_name": "尺寸"
        }
      ],
      "target_type": "item",
      "target_id": 12
    },
    {
      "id": 11,
      "stock_num": 0,
      "sales_num": 0,
      "price": "100.00000000",
      "sale_price": "10000.00",
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
      "properties": "6-7",
      "specs_properties": [
        {
          "p_id": 6,
          "s_id": 3,
          "p_name": "蓝色",
          "s_name": "颜色"
        },
        {
          "p_id": 7,
          "s_id": 4,
          "p_name": "S",
          "s_name": "尺寸"
        }
      ],
      "target_type": "item",
      "target_id": 12
    },
    {
      "id": 12,
      "stock_num": 0,
      "sales_num": 0,
      "price": "100.00000000",
      "sale_price": "10000.00",
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
      "properties": "6-8",
      "specs_properties": [
        {
          "p_id": 6,
          "s_id": 3,
          "p_name": "蓝色",
          "s_name": "颜色"
        },
        {
          "p_id": 8,
          "s_id": 4,
          "p_name": "M",
          "s_name": "尺寸"
        }
      ],
      "target_type": "item",
      "target_id": 12
    }
  ],
  /* 当商品为电子卡券时，返回卡券分类信息 */
  "coupon_category": {
    "id": 1,
    "title": "樊登阅读卡11",
    "used_item_id": 76
  }
}
```

## 创建【修改】

`admin/items`

**请求方法**

`POST`

**请求参数**

```json
{
  "currency": "eoc:cny:deduction", // 新增 eoc:cny:deduction-EOC现金抵扣专区
  "goods_id": 1, // 商品ID
  "spec_type": 2, // 规格分类 1-单规格 2-多规格
  "image": "http://baidu.com", // 商品名称
  "limit_num": 0, // 限量
  "limit_time": null, // 限时
  "price": 200, // 兑换价
  "power": "0", // 矿力奖励(整数)
  "ore": "0", // 矿石奖励(小数后两位)
  "skus": [
    // sku
    {
      "price": 1000, // 必填 购买现金价格
      "token_price": 1000, // 【新增】非必填 integer EOC 抵扣上限
      "sale_price": 100.21, // 销售价
      "stock_num": "111", // 库存
      "specs_properties": [
        // 规格组合
        {
          "s_name": "颜色",
          "p_name": "红色"
        },
        {
          "s_name": "尺寸",
          "p_name": "S"
        }
      ]
    }
  ],
  "specs_properties": [
    // 规格名称
    {
      "name": "颜色",
      "properties": ["红色", "蓝色"]
    },
    {
      "name": "尺寸",
      "properties": ["S", "M"]
    }
  ],
  "sort": 1, // 排序 越大越靠前
  "status": 1 // 0-待审核 1-上架 2 下架
}
```

**返回体**

```json
{
  "message": "创建成功",
  "id": 1
}
```

## 修改

`admin/items/{item}`

**请求方式**

`PUT`

**请求参数**

```json
{
  "currency": "eoc:cny:deduction", // 新增 eoc:cny:deduction-EOC现金抵扣专区
  "goods_id": 1, // 商品ID
  "spec_type": 2, // 规格分类 1-单规格 2-多规格
  "image": "http://baidu.com", // 商品名称
  "limit_num": 0, // 限量
  "limit_time": null, // 限时
  "price": 200, // 兑换价

  "skus": [
    // sku
    {
      "price": 1000, // 必填 购买现金价格
      "token_price": 1000, // 【新增】 非必填 integer EOC 抵扣上限
      "sale_price": 100.21, // 销售价
      "stock_num": "111", // 库存
      "specs_properties": [
        // 规格组合
        {
          "s_name": "颜色",
          "p_name": "红色"
        },
        {
          "s_name": "尺寸",
          "p_name": "S"
        }
      ]
    }
  ],
  "specs_properties": [
    // 规格名称
    {
      "name": "颜色",
      "properties": ["红色", "蓝色"]
    },
    {
      "name": "尺寸",
      "properties": ["S", "M"]
    }
  ],
  "sort": 1, // 排序 越大越靠前
  "status": 1 // 0-待审核 1-上架 2 下架
}
```

**返回体**

```json
{
  "message": "修改成功"
}
```

## 设置商品上下架

`admin/items/{item}/display`

**请求方法**

`PUT`

**请求参数**

|  名称  | 类型 | 默认 | 必须 |            说明            |
| :----: | :--: | :--: | :--: | :------------------------: |
| status | int  |  2   |  否  | 上下架状态 1: 上架 2: 下架 |

**返回体**

```json
{
  "message": "设置成功"
}
```

## 删除商品

`admin/item/{item}`

**请求方法**

`DELETE`

**返回体**

`无`

## 排序

`/admin/items/{item}/sort`

**请求方法**

`PUT`

**请求方法**

| 名称 | 类型 | 默认 | 必须 |     说明      |
| :--: | :--: | :--: | :--: | :-----------: |
| sort | int  |  0   |  否  | 排序 越大越前 |

**返回体**

```json
{
  "message": "修改成功"
}
```

## 更新商品限制

`/admin/items/{item}/limit`

**请求方法**

`PATCH`

**请求方法**

| 名称  |  类型  | 默认 | 必须 |                              说明                              |
| :---: | :----: | :--: | :--: | :------------------------------------------------------------: |
| type  | string |  0   |  是  |                限制类型: number-数量 time-时间                 |
| limit | string |  0   |  是  | 如 type 为 number, limit 必须是整数,type 为 time, limit 是时间 |

**返回体**

```json
{
  "message": "修改成功"
}
```

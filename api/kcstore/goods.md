# 商品

## 商品分类

**方式**

`GET`

**路径**

`/api/categories`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1 /*分类ID*/,
      "name": "女装" /*分类名称*/
    }
  ]
}
```

## 商品列表

**方式**

`GET`

**路径**

`/api/spus`

|   名称   |  类型  | 必须 |                                  说明                                  |
| :------: | :----: | :--: | :--------------------------------------------------------------------: |
|  limit   |  int   |  是  |                            条目数量 默认 20                            |
|  offset  |  int   |  是  |                             偏移量 默认 0                              |
| cate_id  |  int   |  否  |                          分类 ID，火爆区必填                           |
|   zone   | string |  是  | 区域: hot-火爆区、experience-体验店、quality-优质、preferential-特惠区 |
| order_by | string |  否  |                 排序属性:price-价格/sales_volume-销量                  |
|   sort   | string |  否  |                      排序方式:asc-降序/desc-升序                       |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 4 /*商品ID*/,
      "name": "iphone12" /*商品名称*/,
      "pics": [
        "http://static.com/16ddf9eef740c6585a219908dbb2b791.jpeg" /*商品图*/
      ],
      "cate_id": 0 /*分类ID*/,
      "price": "1000.00" /*售价*/,
      "sales_volume": 8 /*销售量*/,
      "zone": 1 /*商品所属专区:1-爆品/2-体验店/3-优选店/4-特惠*/
    }
  ]
}
```

## 店铺商品列表

**方式**

`GET`

**路径**

`/api/shop/spus`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "name": "水果店铺" /*店铺名称*/,
      "avatar": "avatar.png" /*店铺头像*/,
      "intro": "这个是店铺介绍" /*店铺介绍*/,
      "spus": [
        {
          "id": 4 /*商品ID*/,
          "name": "iphone12" /*商品名称*/,
          "pics": [
            "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg" /*商品图*/
          ],
          "price": "1000.00",/*售价*/,
          "sales_volume": 8,/*销量*/,
          "merchant_id": 2
        }
      ]
    }
  ]
}
```

## 商品详情

**方式**

`GET`

**路径**

`/api/spus/{id}`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 4,
    "name": "iphone12",/*名称*/
    "intro": "2020最新款苹果手机",/*介绍*/
    "pics": ["http://psta.com/dbb2b791.jpeg"],/*商品图集合,第一个元素为首图*/
    "cate_id": 0,
    "merchant_id": 0,/*门店ID*/
    "price": "1000.00",/*售价*/,
    "sales_volume": 8,/*销量*/,
    "details": "花花公子 高领毛衣 2018秋季新款",/*详情*/
    "zone": 1,/*商品所属专区:1-爆品/2-体验店/3-优选店/4-特惠*/
    "status": 1,
    "sort": 1,
    "created_at": "2020-05-21 14:19:00",
    "updated_at": "2020-05-21 17:42:57",
    /*属性值集合*/
    "attrs": [
      {
        "id": 1,
        "spu_id": 4,
        "name": "颜色",/*属性*/
        "created_at": "2020-05-21 14:19:00",
        "updated_at": "2020-05-21 14:19:00",
        "values": [
          {
            "id": 2,
            "attr_id": 1,
            "spu_id": 4,
            "value": "红色",/*属性值*/
            "created_at": "2020-05-21 14:19:00",
            "updated_at": "2020-05-21 14:19:00"
          },
          {
            "id": 3,
            "attr_id": 1,
            "spu_id": 4,
            "value": "蓝色",/*属性值*/
            "created_at": "2020-05-21 14:19:00",
            "updated_at": "2020-05-21 14:19:00"
          }
        ]
      },
      {
        "id": 2,
        "spu_id": 4,
        "name": "内存大小",
        "created_at": "2020-05-21 14:19:00",
        "updated_at": "2020-05-21 14:19:00",
        "values": [
          {
            "id": 4,
            "attr_id": 2,
            "spu_id": 4,
            "value": "64G",
            "created_at": "2020-05-21 14:19:00",
            "updated_at": "2020-05-21 14:19:00"
          },
          {
            "id": 5,
            "attr_id": 2,
            "spu_id": 4,
            "value": "128G",
            "created_at": "2020-05-21 14:19:00",
            "updated_at": "2020-05-21 14:19:00"
          }
        ]
      }
    ],
    /*SKU 集合*/
    "skus": [
      {
        "id": 1,
        "spu_id": 4,
        "stock": 992,/*库存*/
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
        "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
        "price": "100.00",
        "created_at": "2020-05-21 14:19:00",
        "updated_at": "2020-05-21 17:42:57"
      },
      {
        "id": 2,
        "spu_id": 4,
        "stock": 992,
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
            "v_id": 5,
            "value": "128G"
          }
        ],
        "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
        "price": "100.00",
        "created_at": "2020-05-21 14:19:00",
        "updated_at": "2020-05-21 17:42:57"
      },
      {
        "id": 3,
        "spu_id": 4,
        "stock": 992,
        "attrs": [
          {
            "n_id": 1,
            "name": "颜色",
            "v_id": 3,
            "value": "蓝色"
          },
          {
            "n_id": 2,
            "name": "内存大小",
            "v_id": 4,
            "value": "64G"
          }
        ],
        "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
        "price": "100.00",
        "created_at": "2020-05-21 14:19:00",
        "updated_at": "2020-05-21 17:42:57"
      },
      {
        "id": 4,
        "spu_id": 4,
        "stock": 992,
        "attrs": [
          {
            "n_id": 1,
            "name": "颜色",
            "v_id": 3,
            "value": "蓝色"
          },
          {
            "n_id": 2,
            "name": "内存大小",
            "v_id": 5,
            "value": "128G"
          }
        ],
        "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
        "price": "100.00",
        "created_at": "2020-05-21 14:19:00",
        "updated_at": "2020-05-21 17:42:57"
      }
    ]
  }
}
```

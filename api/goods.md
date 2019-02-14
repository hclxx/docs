# 商品

## 商品分类

**方式**

`GET`

**路径**

`/api/v1/goods/categories`

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
      "id": 1 /*int 分类id*/,
      "name": "热门推荐" /*string 分类名称*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd9.jpeg" /*string 分类图*/
    }
  ]
}
```

## 商品列表

**方式**

`GET`

**路径**

`/api/v1/goods`

**参数**

|    名称    |  类型  | 必须 |                                         说明                                         |
| :--------: | :----: | :--: | :----------------------------------------------------------------------------------: |
|   limit    |  int   |  是  |                                    条目数 默认 10                                    |
|   offset   |  int   |  是  |                                   偏移量 默认为 0                                    |
|    type    | string |  否  |                      类型：recommend-热门推荐 day_new-每日上新                       |
|  keyword   | string |  否  |                                      关键词检索                                      |
|  category  |  int   |  否  | 分类 id，如 category 为-1 需传 type=recommend,如为-2 需传 type=new_day,如为-3 不需传 |
|  currency  | string |  是  |                             货币类型: comc-comc,ore-矿石                             |
| limit_type | string |  否  |                                 限制类型: time-限时                                  |
| special_id |  int   |  否  |                                       专题 id                                        |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 9,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL" /*商品名称*/,
      "currency": "ore" /*货币类型: comc-comc,ore-矿石*/,
      "category_id": 1 /*分类id*/,
      "price": "30.00000000" /*价格*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": "2019-01-21 16:30:24" /*限购截止时间*/,
      "surplu_second": -76694 /*限购结束秒数*/
    },
    {
      "id": 10,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "currency": "ore",
      "category_id": 1,
      "price": "30.00000000",
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": null,
      "surplu_second": null
    }
  ]
}
```

## 商品详情

`GET`

**路径**

`/api/v1/goods/{id}`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 1,
    "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL" /*string 商品名称*/,
    "intro": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL" /*string 商品简介*/,
    "detail": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL" /*string 商品详情 富文本 html格式*/,
    "currency": "comc" /*货币: comc-comc,ore-矿石*/,
    "ore": "10.000000000" /*矿石奖励*/,
    "limit_time": null /*限购时间 null-不限制*/,
    "limit_num": 0 /*int 限量:0-不限制*/,
    "type": 2 /* int 1-虚拟 2-实体*/,
    "spec_type": 2 /*int 1-单规格 2-多规格*/,
    "virt_num": 0,
    "image": "http://p59l6s1jm.bkt.clouddn.com/fcc9effd7b645167633169bba4ee7651.jpeg" /*商品主图地址*/,
    "sales_num": 8 /*int 销量*/,
    "stock_num": 0 /*int 总库存*/,
    "share_url": null /**/,
    "return_goods": 1 /*是否支持退还货*/,
    "power": 100 /*int 矿力奖励*/,
    "images": [
      /*商品图片集合*/
      {
        "id": 1 /*int 文件id*/,
        "filename": "fcc9effd7b645167633169bba4ee7651.jpeg" /*string 文件名称*/,
        "file_url": "http://p59l6s1jm.bkt.clouddn.com/fcc9effd7b645167633169bba4ee7651.jpeg" /*string 文件地址*/
      },
      {
        "id": 2,
        "filename": "24449e53dcdf4a7e848e893ae6554749.jpeg",
        "file_url": "http://p59l6s1jm.bkt.clouddn.com/24449e53dcdf4a7e848e893ae6554749.jpeg"
      },
      {
        "id": 3,
        "filename": "7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
        "file_url": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg"
      },
      {
        "id": 4,
        "filename": "7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
        "file_url": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg"
      }
    ],
    "skus": [
      {
        "id": 1 /*int sku*/,
        "goods_id": 1 /*int 商品id*/,
        "number": "SSSNNNN" /*string 商品编号*/,
        "stock_num": 992 /*int SKU库存*/,
        "sales_num": 8 /*int 销量*/,
        "price": "100.00000000" /*string 单价*/,
        "line_price": "90.00000000" /*string 划线价格*/,
        "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg" /*string sku图片*/,
        "weight": null,
        "properties": {
          "ids": "1-3",
          "names": "红色-S"
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
        ]
      },
      {
        "id": 2,
        "goods_id": 1,
        "number": "SSSNNNN",
        "stock_num": 1000,
        "sales_num": 0,
        "price": "100.00000000",
        "line_price": "90.00000000",
        "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
        "weight": null,
        "properties": {
          "ids": "1-4",
          "names": "红色-M"
        },
        "specs_properties": [
          {
            "p_id": 1,
            "s_id": 1,
            "p_name": "红色",
            "s_name": "颜色"
          },
          {
            "p_id": 4,
            "s_id": 2,
            "p_name": "M",
            "s_name": "尺寸"
          }
        ]
      },
      {
        "id": 3,
        "goods_id": 1,
        "number": "SSSNNNN",
        "stock_num": 1000,
        "sales_num": 0,
        "price": "100.00000000",
        "line_price": "90.00000000",
        "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
        "weight": null,
        "properties": {
          "ids": "2-3",
          "names": "蓝色-S"
        },
        "specs_properties": [
          {
            "p_id": 2,
            "s_id": 1,
            "p_name": "蓝色",
            "s_name": "颜色"
          },
          {
            "p_id": 3,
            "s_id": 2,
            "p_name": "S",
            "s_name": "尺寸"
          }
        ]
      },
      {
        "id": 4,
        "goods_id": 1,
        "number": "SSSNNNN",
        "stock_num": 1000,
        "sales_num": 0,
        "price": "100.00000000",
        "line_price": "90.00000000",
        "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
        "weight": null,
        "properties": {
          "ids": "2-4",
          "names": "蓝色-M"
        },
        "specs_properties": [
          {
            "p_id": 2,
            "s_id": 1,
            "p_name": "蓝色",
            "s_name": "颜色"
          },
          {
            "p_id": 4,
            "s_id": 2,
            "p_name": "M",
            "s_name": "尺寸"
          }
        ]
      }
    ],
    /*规格属性集合*/
    "specs": [
      {
        "id": 1 /*int 规格id*/,
        "goods_id": 1 /*int 商品id*/,
        "name": "颜色" /*string 规格颜色*/,
        "properties": [
          {
            "id": 1 /*string 属性*/,
            "goods_specs_id": 1 /*int 商品规格id*/,
            "name": "红色" /*string 属性名称*/
          },
          {
            "id": 2,
            "goods_specs_id": 1,
            "name": "蓝色"
          }
        ]
      },
      {
        "id": 2,
        "goods_id": 1,
        "name": "尺寸",
        "properties": [
          {
            "id": 3,
            "goods_specs_id": 2,
            "name": "S"
          },
          {
            "id": 4,
            "goods_specs_id": 2,
            "name": "M"
          }
        ]
      }
    ]
  }
}
```

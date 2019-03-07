# 综合

## 商城首页

**方式**

`GET`

**路径**

`/api/v1/home`

**参数**

|   名称   |  类型  | 必须 |             说明             |
| :------: | :----: | :--: | :--------------------------: |
| currency | string |  是  | 货币类型: comc-comc,ore-矿石 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 3,
      "name": "专栏名称", /*专栏名称*/
      "type": "time",/*专栏类型: time-限时专栏 number-限量专栏*/
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "items": []
    },
    {
      "id": 2,
      "name": "专栏名称",
      "type": "number",
      "image": null,
      "items": []
    },
    {
      "id": 1,
      "name": "专栏名称",
      "type": "time",
      "image": null,
      "items": [
        {
          "id": 9,
          "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
          "currency": "ore",
          "category_id": 1,
          "price": "30.00000000",
          "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
          "limit_time": "2019-01-21 16:30:24",
          "end_second": -69651 /*结束秒数*/
        },
        {
          "id": 10,
          "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
          "currency": "ore",
          "category_id": 1,
          "price": "30.00000000",
          "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
          "limit_time": null,
          "end_second": null
        }
      ]
    }
  ]
}
```

## 专题商品列表

**方式**

`GET`

**路径**

`/api/v1/special/{id}/goods`

**参数**

|  名称  | 类型 | 必须 |      说明       |
| :----: | :--: | :--: | :-------------: |
| limit  | int  |  是  | 条目数 默认 10  |
| offset | int  |  是  | 偏移量 默认为 0 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 9,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "currency": "ore",
      "category_id": 1,
      "price": "30.00000000",
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": "2019-01-21 16:30:24"
    },
    {
      "id": 10,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "currency": "ore",
      "category_id": 1,
      "price": "30.00000000",
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": null
    }
  ]
}
```

## 获取代币价格

**方式**

`GET`

**路径**

`/api/v1/currency/:currency/price`

**路径说明**

|  名称  | 类型 | 必须 |      说明       |
| :----: | :--: | :--: | :-------------: |
| :currency  | string  |  是  | 目前仅支持:comc  |

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "price": "0.2985" /*string 代币价格*/
    }
}
```


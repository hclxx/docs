# 商品

## 商品列表

**方式**

`GET`

**路径**

`/admin/goods`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |            商品名称(支持模糊查询)                  |
|  page      |  int   |  1  |  是  |            当前页数                |
|  limit      |  int   |  20  |  是  |             每页条数                     |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1 /*商品ID*/,
      "name": "CTL-10矿机" /*商品名称*/,
      "intro": "介绍" /*介绍*/,
      "deduct_num": 20 /*可抵扣CL数量*/,
      "price": "10000.00" /*现金价格*/,
      "images": ["a.png", "b.png"] /*商品图片集合*/,
      "detail": "html 详情说明" /*详情说明*/,
      "sales_num": 1 /*已销售数量*/,
      "sort": 0/*排序*/,
      "specs": 20 /*T量,单位为T*/,
      "is_delete": 0,
      "created_at": null,
      "updated_at": null
    }
  ]
}
```

## 创建商品

**方式**

`POST`

**路径**

`/admin/goods`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  是  |            商品名称                 |
|  intro  | string |  无  |  是  |            商品介绍               |
|  deduct_num  | int |  无  |  否  |            商品抵扣CL数量               |
|  price  | int |  无  |  是  |            商品价格               |
|  images  | array |  无  |  是  |            商品头图(可支持多张)               |
|  detail  | string |  无  |  是  |            商品详情               |
|  specs  | int |  无  |  是  |            商品规格(单位T)               |
|  sort  | int |  无  |  无  |            商品权重               |

**响应**

`Status code 200`

```json
{
    "msg": "创建成功",
    "code": 0,
    "data": null
}
```

## 修改商品

**方式**

`PUT`

**路径**

`/admin/goods/{good}`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |            商品名称                 |
|  intro  | string |  无  |  否  |            商品介绍               |
|  deduct_num  | int |  无  |  否  |            商品抵扣CL数量               |
|  price  | int |  无  |  否  |            商品价格               |
|  images  | array |  无  |  否  |            商品头图(可支持多张)               |
|  detail  | string |  无  |  否  |            商品详情               |
|  specs  | int |  无  |  否  |            商品规格(单位T)               |
|  sort  | int |  无  |  无  |            商品权重               |

**响应**

`Status code 200`

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## 删除商品

**方式**

`DELETE`

**路径**

`/admin/goods/{good}`


**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

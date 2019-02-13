# 专栏

## 专栏列表

`admin/special`

**请求方式**

`GET`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  否  | 专栏名称 |

**SUCCESS 装填码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 1,
    "name": "专栏一",
    "type": "image",
    "image": null,
    "sort": 0,
    "hidden": true,
    "created_at": "2019-01-26 14:33:53",
    "updated_at": "2019-01-26 14:33:53"
  }
]
```

## 添加专栏

`admin/special`

**请求方式**

`POST`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |                  说明                  |
| :----: | :----: | :--: | :--: | :------------------------------------: |
|  name  | string |  无  |  否  |                专栏名称                |
| hidden |  int   |  1   |  否  |          显示: 0-隐藏 1-显示           |
|  sort  |  int   |  0   |  否  |                  排序                  |
| image  | string |  无  |  否  |                图片链接                |
|  type  | string |  无  |  是  | 专题类型:image-图片专题 goods-商品专栏 |

**SUCCESS 装填码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "添加成功"
}
```

## 修改专栏

`admin/special/{special}`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |                  说明                  |
| :----: | :----: | :--: | :--: | :------------------------------------: |
|  name  | string |  无  |  否  |                专栏名称                |
| hidden |  int   |  1   |  否  |          显示: 0-隐藏 1-显示           |
|  sort  |  int   |  0   |  否  |                  排序                  |
| image  | string |  无  |  否  |                图片链接                |
|  type  | string |  无  |  是  | 专题类型:image-图片专题 goods-商品专栏 |

**SUCCESS 装填码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## 删除专栏

`admin/special/{special}`

**请求方式**

`DELETE`

**SUCCESS 装填码**

`204`

**SUCCESS 返回体**

`无`

## 设置专栏商品

`admin/special/{special}/goods`

**请求方法**

`PUT`

**请求参数**

| 名称  | 类型 | 默认 | 必须 |  说明   |
| :---: | :--: | :--: | :--: | :-----: |
| goods | int  |  无  |  否  | 商品 ID |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## 取消专栏商品

`admin/special/{special}/goods`

**请求方法**

`DELETE`

**请求参数**

| 名称  | 类型 | 默认 | 必须 |  说明   |
| :---: | :--: | :--: | :--: | :-----: |
| goods | int  |  无  |  否  | 商品 ID |

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## 获取专栏商品

`admin/special/{special}/goods`

**请求方式**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| limit |  int   |  15  |  否  | 每页条数 |
| name  | string |  无  |  否  |   名称   |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 2,
  "data": [
    {
      "good_id": 2 /*商品ID*/,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL", // 商品名称
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg", // 商品图片
      "price": "0.00000000", // 商品价格
      "currency": "comc" // 商品货币类型
    }
  ],
  "first_page_url": "http://comc.com/admin/special/1/goods?page=1",
  "from": 2,
  "last_page": 2,
  "last_page_url": "http://comc.com/admin/special/1/goods?page=2",
  "next_page_url": null,
  "path": "http://comc.com/admin/special/1/goods",
  "per_page": "1",
  "prev_page_url": "http://comc.com/admin/special/1/goods?page=1",
  "to": 2,
  "total": 2
}
```

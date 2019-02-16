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

## 添加专栏广告

`admin/special/{special}/ad`

**请求方式**

`POST`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| ad_ids |  array   |  无  |  是  | 广告id数组 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "message": "添加成功"
}
```

## 移除专栏广告

`admin/special/{special}/ad`

**请求方式**

`DELETE`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| ad_ids |  array   |  无  |  是  | 广告id数组 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "message": "移除成功"
}
```

## 获取专栏广告

`admin/special/{special}/ad`

**请求方式**

`GET`

**请求参数**

无

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
    {
        "id": 5,
        "title": "测试",
        "image": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
        "time": 20,
        "link": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
        "link_type": "inside",
        "space_id": 11,
        "sort": 12,
        "target_type": "special",
        "target_id": 2,
        "created_at": "2019-01-25 14:55:08",
        "updated_at": "2019-01-25 14:55:08",
        "pivot": {
            "relation_id": 1,
            "ad_id": 5
        },
        "space": {
            "id": 11,
            "alias": "COMC专栏题顶部广告",
            "space": "app:comc:special:top",
            "img_size": "100x100px",
            "created_at": "2019-02-15 09:54:26",
            "updated_at": "2019-02-15 09:54:26"
        }
    },
    {
        "id": 3,
        "title": "测试",
        "image": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
        "time": 0,
        "link": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
        "link_type": "inside",
        "space_id": 10,
        "sort": 12,
        "target_type": "special",
        "target_id": 1,
        "created_at": "2019-01-25 14:45:15",
        "updated_at": "2019-01-25 14:45:15",
        "pivot": {
            "relation_id": 1,
            "ad_id": 3
        },
        "space": {
            "id": 10,
            "alias": "矿石专栏顶部广告",
            "space": "app:ore:special:top",
            "img_size": "100x100px",
            "created_at": "2019-02-15 09:54:26",
            "updated_at": "2019-02-15 09:54:26"
        }
    }
]
```

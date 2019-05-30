# 电子卡券

## 查看电子券分类列表

`admin/coupon/cate`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 3,
            "title": "樊登阅读卡3",
            "used_item_id": 0,
            "stock": 21,
            "created_at": "2019-04-23 10:43:51",
            "updated_at": "2019-04-23 11:54:26"
        },
        {
            "id": 1,
            "title": "樊登阅读卡11",
            "used_item_id": 76,
            "stock": 0,
            "created_at": "2019-04-23 10:30:53",
            "updated_at": "2019-04-23 17:43:54"
        }
    ],
    "first_page_url": "http://comc.com/admin/coupon/cate?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/coupon/cate?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/coupon/cate",
    "per_page": 15,
    "prev_page_url": null,
    "to": 4,
    "total": 4
}
```

## 添加电子券分类

`admin/coupon/cate`

**请求方法**

`POST`

**参数**

|      名称       |  类型  | 默认 | 必须 |           说明            |
| :-------------: | :----: | :--: | :--: | :-----------------------: |
|     title      | string |  无  |  是  |          分类名称           |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "添加成功"
}
```

## 修改电子券分类

`admin/coupon/cate/{$cate}`

**请求方法**

`PUT`

**参数**

|      名称       |  类型  | 默认 | 必须 |           说明            |
| :-------------: | :----: | :--: | :--: | :-----------------------: |
|     title      | string |  无  |  是  |          分类名称           |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## 删除电子券分类

`admin/coupon/cate/{$cate}`

**请求方法**

`DELETE`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "删除成功"
}
```

**FAIL 状态码**

`500`

**FAIL 返回体**

```json
{
  "message": "删除失败"
}
```


## 导入电子卡券商品信息

`admin/coupon/import`

**请求方法**

`POST`

**参数**

|      名称       |  类型  | 默认 | 必须 |           说明            |
| :-------------: | :----: | :--: | :--: | :-----------------------: |
|     cate_id      |  |  无  |  是  |          分类ID           |
|     file      |  |  无  |  是  |          excel文件          |

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "导入成功"
}
```

**FAIL 状态码**

`500`

**FAIL 返回体**

```json
{
  "message": "导入失败"
}
```


## 分类下的电子卡券信息

`admin/coupon/{$cate}`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 21,
            "coupon_data": {
                /*电子卡券激活码*/
                "card_no": 20190412021,
                /*电子卡券编号*/
                "card_num": "N5143",
                /*电子卡券激活链接*/
                "card_url": "https://card.dushu.io/generalize/entityCard/card.html?id=******"
            },
            /*电子卡券分类Id*/
            "coupon_category_id": 1,
            /*电子卡券使用状态 0：未使用 1：已使用*/
            "use_status": 0,
            /*电子卡券使用的用户ID*/
            "used_id": 0,
            "created_at": null,
            "updated_at": null,
            "user": {
                   "id": 16,
                   /*使用用户的名称*/
                   "name": "123"
                    }
        },
        {
           "id": 13,
           "coupon_data": {
               "card_no": 20190412013,
               "card_num": "N5135",
               "card_url": "ht******"
           },
           "coupon_category_id": 1,
           "use_status": 1,
           "used_id": 16,
           "created_at": null,
           "updated_at": "2019-04-23 17:43:54",
           "user": null
        }
    ],
    "first_page_url": "http://comc.com/admin/coupon/1?page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "http://comc.com/admin/coupon/1?page=2",
    "next_page_url": "http://comc.com/admin/coupon/1?page=2",
    "path": "http://comc.com/admin/coupon/1",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 21
}
```




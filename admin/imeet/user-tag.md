# 用户标签管理

## 用户标签列表

`admin/tag/cate/{cateId}/tag`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  |   string |  无  |  否  |       标签分类名称                    |
| after  |     int  |  无  |  否  |       从第几条开始取                  |
| limit  |     int  |  15  |  是  |        每页条数                      |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "用户标签分类1下的第一个标签",
                "cate_id": 1,
                "sort": 2,
                "use_count": 0,
                "top": 0
            },
            {
                "id": 3,
                "name": "用户标签分类1下的第er个标签",
                "cate_id": 1,
                "sort": 2,
                "use_count": 0,
                "top": 0
            }
        ],
        "first_page_url": "http://imeet.test/admin/tag/cate/1/tag?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/tag/cate/1/tag?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/tag/cate/1/tag",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```

## 创建用户标签

`admin/tag/cate/{cateId}/tag`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |               分类名称                 |
|   sort   |    int |  无  |  否  |               排序等级                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 修改用户标签

`admin/tag/cate/{cateId}/tag{tagId}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |               分类名称                 |
|   sort   |    int |  无  |  否  |               排序等级                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 删除用户标签

`admin/tag/cate/{cateId}/tag{tagId}`

**请求方式**

`DELETE`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```


# 标签分类管理

## 标签分类列表

`admin/tag/cate`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  |   string |  无  |  否  |       标签分类名称                    |
|  type  |   string |  无  |  否  |       标签类型：1，用户 2，动态        |
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
                "name": "用户标签分类1",
                "sort": 1,
                "type": 1,
                "created_at": "2019-05-31 06:16:20",
                "updated_at": "2019-05-31 06:16:20"
            },
            {
                "id": 2,
                "name": "用户标签分类2",
                "sort": 2,
                "type": 1,
                "created_at": "2019-05-31 06:16:25",
                "updated_at": "2019-05-31 06:16:25"
            }
        ],
        "first_page_url": "http://imeet.test/admin/tag/cate?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/tag/cate?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/tag/cate",
        "per_page": 15,
        "prev_page_url": null,
        "to": 4,
        "total": 4
    }
}
```

## 创建标签分类

`admin/tag/cate`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |               分类名称                 |
|   type   |    int |  无  |  是  |       标签类型：1，用户标签             |
|   sort   |    int |  无  |  否  |               排序等级                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 修改标签分类

`admin/tag/cate{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |               分类名称                 |
|   type   |    int |  无  |  否  |       标签类型：1，用户标签             |
|   sort   |    int |  无  |  否  |               排序等级                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 删除标签分类

`admin/tag/cate{id}`

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


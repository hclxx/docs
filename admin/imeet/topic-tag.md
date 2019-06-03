# 话题标签管理

## 话题标签列表

`admin/topic/tag`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  |   string |  无  |  否  |       标签分类名称                    |
|   top  |   string |  无  |  否  |       是否热门: 0-否,1-是             |
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
                "id": 7,
                "name": "话题标签111",
                "cate_id": 0,
                "sort": 1,
                "use_count": 0,
                "top": 1,
                "type": 2
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

`admin/topic/tag`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |               分类名称                 |
|    top   |    int |  无  |  是  |     是否热门: 0-否,1-是                 |
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

`admin/topic/tag/{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |               分类名称                 |
|    top   |    int |  无  |  否  |    是否热门: 0-否,1-是                  |
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

`admin/topic/tag/{id}`

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


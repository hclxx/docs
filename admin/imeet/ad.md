# 广告管理

## 广告位列表

`admin/ad/pos`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "APP-广场广告",
            "alias": "app:plaza:top",
            "size": "690px * 340px",
            "created_at": "2019-05-29 10:07:52",
            "updated_at": "2019-05-29 10:07:52"
        },
        {
            "id": 2,
            "name": "APP-推荐广告",
            "alias": "app:recommend:top",
            "size": "690px * 340px",
            "created_at": "2019-05-29 10:07:52",
            "updated_at": "2019-05-29 10:07:52"
        }
    ]
}
```

## 广告列表

`admin/ad`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |         广告名称         |
| alias  | string |  无  |  否  |         广告别名         |
|  after |  int   |  无  |  否  |         从第几条开始取    |      
|  limit |  int   |  15  |  是  |         每页条数         |

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
                "pos_id": 1,
                "image": "http://www.baidu.com",  //  广告图
                "url": "http://www.sina.com", //  跳转链接
                "url_type": "1",  //  跳转类型:0-静态 1-外部 2-内部
                "sort": 1,
                "created_at": "2019-05-29 10:50:28",
                "updated_at": "2019-05-29 10:51:45",
                "pos": {  //  广告位
                    "id": 1,
                    "name": "APP-广场广告",
                    "alias": "app:plaza:top",
                    "size": "690px * 340px",
                    "created_at": "2019-05-29 10:07:52",
                    "updated_at": "2019-05-29 10:07:52"
                }
            },
            {
                "id": 2,
                "pos_id": 1,
                "image": "http://www.baidu.com",
                "url": "http://www.baidu.com",
                "url_type": "1",
                "sort": 0,
                "created_at": "2019-05-29 10:52:24",
                "updated_at": "2019-05-29 10:52:24",
                "pos": {
                    "id": 1,
                    "name": "APP-广场广告",
                    "alias": "app:plaza:top",
                    "size": "690px * 340px",
                    "created_at": "2019-05-29 10:07:52",
                    "updated_at": "2019-05-29 10:07:52"
                }
            }
        ],
        "first_page_url": "http://imeet.test/admin/ad?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/ad?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/ad",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```

## 广告详情

`admin/ad/{id}`

**请求方法**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "pos_id": 1,
        "image": "http://www.baidu.com",
        "url": "http://www.sina.com",
        "url_type": "1",
        "sort": 1,
        "created_at": "2019-05-29 10:50:28",
        "updated_at": "2019-05-29 10:51:45",
        "pos": {
            "id": 1,
            "name": "APP-广场广告",
            "alias": "app:plaza:top",
            "size": "690px * 340px",
            "created_at": "2019-05-29 10:07:52",
            "updated_at": "2019-05-29 10:07:52"
        }
    }
}
```

## 创建广告

`admin/ad`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   pos_id   | int    |  无  |  是  |             广告位ID               |
|   image    | string |  无  |  是  |             广告图                 |
|   url      | string |  无  |  是  |             跳转链接               |
|   url_type | string |  无  |  是  |     跳转类型:0-静态 1-外部 2-内部    |
|   sort     |  int   |  无  |  是  |              排序                  |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 修改广告

`admin/ad/{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   pos_id   | int    |  无  |  否  |             广告位ID               |
|   image    | string |  无  |  否  |             广告图                 |
|   url      | string |  无  |  否  |             跳转链接               |
|   url_type | string |  无  |  否  |     跳转类型:0-静态 1-外部 2-内部    |
|   sort     |  int   |  无  |  否  |              排序                  |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 删除广告

`admin/ad/{id}`

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
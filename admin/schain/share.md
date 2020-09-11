# 分享海报管理

## 海报列表

`admin/poster`

**请求方式**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |      说明      |
| :---: | :----: | :--: | :--: | :------------: |
| name  | string |  无  |  否  |    海报名称    |
| after |  int   |  无  |  否  | 从第几条开始取 |
| limit |  int   |  15  |  否  |    每页条数    |

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
        "name": "修改海报",
        "url": "http://www.baidu.com",
        "sort": 2,
        "created_at": "2019-05-30 03:00:33",
        "updated_at": "2019-05-30 03:01:32"
      }
    ],
    "first_page_url": "http://imeet.test/admin/poster?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://imeet.test/admin/poster?page=1",
    "next_page_url": null,
    "path": "http://imeet.test/admin/poster",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 创建海报

`admin/poster`

**请求方式**

`POST`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  是  | 海报名称 |
| url  | string |  无  |  是  | 跳转链接 |
| sort |  int   |  无  |  是  |   排序   |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 修改海报

`admin/poster/{id}`

**请求方式**

`PUT`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  否  | 海报名称 |
| url  | string |  无  |  否  | 跳转链接 |
| sort |  int   |  无  |  否  |   排序   |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 删除海报

`admin/poster/{id}`

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

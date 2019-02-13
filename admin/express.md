# 快递

## 快递公司列表

`/admin/express`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| name  | string |  无  |  否  | 快递名称 |
| code  | string |  无  |  否  | 快递代码 |
| limit |  int   |  15  |  否  | 每页条数 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "京东",
      "code": "jindong",
      "sort": 100,
      "deleted_at": null,
      "created_at": "2019-01-18 11:13:34",
      "updated_at": "2019-01-18 11:36:54"
    },
    {
      "id": 2,
      "name": "百世",
      "code": "baishi",
      "sort": 0,
      "deleted_at": null,
      "created_at": "2019-01-18 11:14:06",
      "updated_at": "2019-01-18 11:14:06"
    }
  ],
  "first_page_url": "http://comc.com/admin/express?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/express?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/express",
  "per_page": 15,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

**ERROR 返回体**

`无`

## 快递公司添加

`/admin/express`

**请求方法**

`POST`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  是  | 快递名称 |
| code | string |  无  |  是  | 快递代码 |
| sort |  int   |  0   |  否  |   排序   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "添加成功"
}
```

**ERROR 返回体**

```json
{
  "message": "快递名称不能为空"
}
```

## 快递公司修改

`/admin/express/{express}`

**请求方法**

`PUT`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  是  | 快递名称 |
| code | string |  无  |  是  | 快递代码 |
| sort |  int   |  0   |  否  |   排序   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "添加成功"
}
```

**ERROR 返回体**

```json
{
  "message": "快递名称不能为空"
}
```

## 快递公司删除

`/admin/express/{express}`

**请求方法**

`DELETE`

**请求参数**

`无`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "删除成功"
}
```

**ERROR 返回体**

`无`

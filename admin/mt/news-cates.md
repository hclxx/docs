# 咨询栏目管理

`权限节点:news-cates`

## 栏目列表

`admin/news-cates`

**请求方法**

`GET`

**请求参数**

none

**SUCCESS 状态码**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "军事" /*栏目名称*/,
      "sort": 0 /*排序ID*/,
      "is_delete": 1 /*是否删除:0-删除/1-删除*/,
      "created_at": null,
      "updated_at": "2020-07-13 11:29:53"
    }
  ]
}
```

## 添加栏目

`admin/news-cates`

**请求方法**

`POST`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  是  | 栏目名称 |
| sort | string |  无  |  是  | 栏目排序 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "添加成功",
  "code": 0,
  "data": {
    "sort": 0,
    "name": "动物世界",
    "is_delete": 0,
    "updated_at": "2020-07-13 14:14:45",
    "created_at": "2020-07-13 14:14:45",
    "id": 3
  }
}
```

## 更新栏目

`admin/news-cates/{id}`

**请求方法**

`PUT`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |                说明                |
| :-------: | :----: | :--: | :--: | :--------------------------------: |
|   name    | string |  无  |  否  |              栏目名称              |
|   sort    | string |  无  |  否  |              栏目排序              |
| is_delete |  int   |  -1  |  否  | 是否删除:-1-全部/1-已删除/0-未删除 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": {
    "id": 3,
    "name": "动物世界",
    "sort": 20,
    "is_delete": 0,
    "created_at": "2020-07-13 14:14:45",
    "updated_at": "2020-07-13 14:16:23"
  }
}
```

## 删除栏目

`admin/news/{id}`

**请求方法**

`DELETE`

**请求参数**

none

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": {
    "id": 3,
    "name": "动物世界",
    "sort": 20,
    "is_delete": 0,
    "created_at": "2020-07-13 14:14:45",
    "updated_at": "2020-07-13 14:16:23"
  }
}
```

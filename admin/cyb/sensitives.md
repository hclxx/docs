# 敏感词管理

## 列表

**方式**

`GET`

**路径**

`/admin/sensitives`

**参数**

| 名称  |  类型  | 必须 |    说明    |
| :---: | :----: | :--: | :--------: |
| word  | string |  否  | 敏感词检索 |
| page  |  int   |  1   |     是     | 当前页数 |
| limit |  int   |  20  |     是     | 每页条数 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "word": "色情" /*敏感词*/,
        "type": "replace" /*类型:replace-替换/warning-提示*/,
        "replace": "**" /*替换内容*/,
        "created_at": null,
        "updated_at": null
      }
    ],
    "first_page_url": "http://clstore.test/admin/sensitives?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://clstore.test/admin/sensitives?page=1",
    "next_page_url": null,
    "path": "http://clstore.test/admin/sensitives",
    "per_page": 15,
    "prev_page_url": null,
    "to": 5,
    "total": 5
  }
}
```

## 添加

**方式**

`POST`

**路径**

`/admin/sensitives`

**参数**

|  名称   |  类型  | 必须 |              说明               |
| :-----: | :----: | :--: | :-----------------------------: |
|  word   | string |  是  |             敏感词              |
|  type   | string |  是  | 类型: replace-替换/warning-提示 |
| replace | string |  是  | 替换的内容,type 为 replace 必须 |

**响应**

`Status code 200`

```json
{
  "msg": "添加成功",
  "code": 0,
  "data": {
    "word": "敏感词2",
    "type": "replace",
    "replace": "*****",
    "updated_at": "2020-07-16 14:17:37",
    "created_at": "2020-07-16 14:17:37",
    "id": 6
  }
}
```

## 更新

**方式**

`PUT`

**路径**

`/admin/sensitives/{id}`

**参数**

|  名称   |  类型  | 必须 |              说明               |
| :-----: | :----: | :--: | :-----------------------------: |
|  word   | string |  是  |             敏感词              |
|  type   | string |  是  | 类型: replace-替换/warning-提示 |
| replace | string |  否  | 替换的内容,type 为 replace 必须 |

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": {
    "word": "敏感词2",
    "type": "replace",
    "replace": "*****",
    "updated_at": "2020-07-16 14:17:37",
    "created_at": "2020-07-16 14:17:37",
    "id": 6
  }
}
```

## 删除

**方式**

`DELETE`

**路径**

`/admin/sensitives/{id}`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": {
    "word": "敏感词2",
    "type": "replace",
    "replace": "*****",
    "updated_at": "2020-07-16 14:17:37",
    "created_at": "2020-07-16 14:17:37",
    "id": 6
  }
}
```

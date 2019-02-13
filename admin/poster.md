# 海报

## 海报列表

`admin/poster`

**请求方式**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| name  | string |  无  |  否  |   查询   |
| limit |  int   |  15  |  否  | 每页条数 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 5,
      "name": "海报一" /*名称*/,
      "image": {
        "id": 8 /*文件ID*/,
        "file_url": "http://p59l6s1jm.bkt.clouddn.com/7902a3863ceaf21334c490eede4fc7a8.txt" /*文件地址*/
      },
      "sort": 0, // 排序
      "status": 1, //1: 显示 0: 隐藏
      "created_at": "2019-01-18 15:09:39",
      "updated_at": "2019-01-18 15:09:39"
    }
  ],
  "first_page_url": "http://comc.com/admin/poster?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/poster?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/poster",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

**ERROR 返回体**

`无`

## 海报创建

`admin/poster`

**请求方式**

`POST`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |      说明       |
| :----: | :----: | :--: | :--: | :-------------: |
|  name  | string |  无  |  是  |    海报名称     |
| image  | string |  无  |  是  |    图片链接     |
|  sort  |  int   |  0   |  否  |      排序       |
| status |  int   |  无  |  是  | 1: 显示 0: 隐藏 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

**ERROR 返回体**

## 海报列表

`admin/poster/{poster}`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |      说明       |
| :----: | :----: | :--: | :--: | :-------------: |
|  name  | string |  无  |  是  |    海报名称     |
| image  | string |  无  |  是  |    图片链接     |
|  sort  |  int   |  0   |  否  |      排序       |
| status |  int   |  无  |  是  | 1: 显示 0: 隐藏 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "海报图已被占用"
}
```

## 海报列表

`admin/poster/{poster}`

**请求方式**

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

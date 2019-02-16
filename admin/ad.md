# 广告位管理

## 广告位列表

`admin/ad/spaces`

**请求方法**

`GET`

**请求参数**

无

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 1,
    "alias": "APP启动广告" /*广告位别名*/,
    "space": "app:boot" /*广告位标示*/,
    "created_at": "2019-01-25 12:00:33",
    "updated_at": "2019-01-25 12:00:33"
  }
]
```

## 广告列表

`admin/ad`

**请求方法**

`GET`

**请求参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| limit | int |  是  |                   每页条目数                  |
| space  | string |  否  | 根据广告位获取广告 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "测试广告" /*广告名称*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg" /*广告图*/,
      "time": 5 /*广告持续时间*/,
      "link": null /*跳转链接*/,
      "link_type": "outside" /*跳转类型:inside-外部 outside-内部*/,
      "space_id": 1 /*广告位id*/,
      "sort": 1 /*广告排序*/,
      "created_at": null,
      "updated_at": null,
      "space": {
        "id": 1,
        "alias": "APP启动广告" /*广告位别名*/,
        "space": "app:boot" /*广告位标示*/,
        "created_at": "2019-01-25 12:00:33",
        "updated_at": "2019-01-25 12:00:33"
      }
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/ad?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/ad?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/ad",
  "per_page": 15,
  "prev_page_url": null,
  "to": 3,
  "total": 3
}
```

## 广告添加

`admin/ad`

**请求方法**

`POST`

**请求参数**

|   名称    |  类型  | 必须 |               说明                |
| :-------: | :----: | :--: | :-------------------------------: |
|   title   | string |  是  |             广告标题              |
|   image   | string |  是  |           广告图片链接            |
| space_id  |  int   |  是  |              广告位               |
|   sort    |  int   |  是  |               排序                |
|   time    |  int   |  否  |          广告时间 单位秒          |
|   link    | string |  否  |             跳转链接              |
| link_type | string |  否  | 跳转类型:inside-外部 outside-内部 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

## 广告更新

`admin/ad/{id}`

**请求方法**

`PUT`

**请求参数**

|   名称    |  类型  | 必须 |               说明                |
| :-------: | :----: | :--: | :-------------------------------: |
|   title   | string |  是  |             广告标题              |
|   image   | string |  是  |           广告图片链接            |
| space_id  |  int   |  是  |              广告位               |
|   sort    |  int   |  否  |               排序                |
|   time    |  int   |  否  |          广告时间 单位秒          |
|   link    | string |  否  |             跳转链接              |
| link_type | string |  否  | 跳转类型:inside-外部 outside-内部 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "更新成功"
}
```

## 广告删除

`admin/ad/{id}`

**请求方法**

`DELETE`

**请求参数**

无

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

无

## 广告详情

`admin/ad/{id}`

**请求方法**

`GET`

**请求参数**

无

**SUCCESS 状态码**

`200`

```json
{
  "id": 1,
  "title": "测试广告",
  "image": "http://p59l6s1jm.bkt.clouddn.com/7a1b0aef4f91ee7f1ecd9a569d766df6.jpeg",
  "time": 5,
  "link": null,
  "link_type": "",
  "space_id": 1,
  "sort": 1,
  "created_at": null,
  "updated_at": null,
  "space": {
    "id": 1,
    "alias": "APP启动广告",
    "space": "app:boot",
    "created_at": "2019-01-25 12:00:33",
    "updated_at": "2019-01-25 12:00:33"
  }
}
```

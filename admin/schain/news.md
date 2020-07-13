# 资讯管理

`权限节点:news`

## 消息列表

`admin/news`

**请求方法**

`GET`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |               说明               |
| :-------: | :----: | :--: | :--: | :------------------------------: |
|  cate_id  |  int   |  无  |  否  |             栏目 ID              |
| keywords  | string |  无  |  否  |            关键词检索            |
| is_delete |  int   |  -1  |  否  | 是否删除:-1 全部/1-删除/0-未删除 |
|   page    |  int   |  1   |  是  |             当前页数             |
|   limit   |  int   |  15  |  是  |             每页条数             |

**SUCCESS 状态码**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "title": "标题" /*资讯标题*/,
        "cover": "cover.png" /*资讯封面*/,
        "content": "111111" /*资讯内容*/,
        "cate_id": 1 /*栏目ID*/,
        "like_num": 0 /*喜欢数*/,
        "comment_num": 3 /*评论数*/,
        "is_delete": 0 /*是否删除:0-否/1-是*/,
        "created_at": null /*添加时间*/,
        "updated_at": "2020-07-13 10:50:42",
        "cate": {
          "id": 1,
          "name": "军事" /*所属栏目*/
        }
      }
    ],
    "first_page_url": "http://clstore.test/admin/news?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://clstore.test/admin/news?page=1",
    "next_page_url": null,
    "path": "http://clstore.test/admin/news",
    "per_page": 20,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 添加资讯

`admin/news`

**请求方法**

`POST`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  title  | string |  无  |  是  | 资讯标题 |
|  cover  | string |  无  |  是  | 资讯封面 |
| content | string |  无  |  是  | 资讯内容 |
| cate_id |  int   |  无  |  是  | 栏目 ID  |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "添加资讯成功",
  "code": 0,
  "data": {
    "title": "军事新闻123123",
    "cover": "cover.png",
    "content": "这还是文档农行类似",
    "cate_id": 1,
    "updated_at": "2020-07-13 14:06:33",
    "created_at": "2020-07-13 14:06:33",
    "id": 4
  }
}
```

## 更新资讯

`admin/news/{id}`

**请求方法**

`PUT`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  title  | string |  无  |  是  | 资讯标题 |
|  cover  | string |  无  |  是  | 资讯封面 |
| content | string |  无  |  是  | 资讯内容 |
| cate_id |  int   |  无  |  是  | 栏目 ID  |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": {
    "id": 4,
    "title": "12312312213123",
    "cover": "cover.png",
    "content": "这还是文档农行类似",
    "cate_id": 1,
    "like_num": 0,
    "comment_num": 0,
    "is_delete": 0,
    "created_at": "2020-07-13 14:06:33",
    "updated_at": "2020-07-13 14:07:10"
  }
}
```

## 删除资讯

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
    "id": 4,
    "title": "12312312213123",
    "cover": "cover.png",
    "content": "这还是文档农行类似",
    "cate_id": 1,
    "like_num": 0,
    "comment_num": 0,
    "is_delete": 0,
    "created_at": "2020-07-13 14:06:33",
    "updated_at": "2020-07-13 14:07:10"
  }
}
```

## 资讯评论列表

`admin/news/{id}/comments`

**请求方法**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| username | string |  无  |  否  | 用户呢称检索 |
| keywords | string |  无  |  否  |  关键词检索  |
|   page   |  int   |  1   |  是  |   当前页数   |
|  limit   |  int   |  15  |  是  |   每页条数   |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 5,
        "user_id": 1,
        "news_id": 1,
        "content": "1111" /*评论内容*/,
        "like_num": 0 /*点赞数量*/,
        "is_delete": 1,
        "created_at": "2020-07-13 10:50:13",
        "updated_at": "2020-07-13 10:50:42",
        /*用户信息*/
        "user": {
          "id": 1,
          "name": "",
          "avatar": null,
          "gender": 0,
          "phone": "****",
          "code": "",
          "power": 0,
          "collection_time": null,
          "market_id": 0,
          "permission": 0,
          "created_at": null,
          "updated_at": null
        }
      }
    ],
    "first_page_url": "http://clstore.test/admin/news/1/comments?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://clstore.test/admin/news/1/comments?page=1",
    "next_page_url": null,
    "path": "http://clstore.test/admin/news/1/comments",
    "per_page": 20,
    "prev_page_url": null,
    "to": 5,
    "total": 5
  }
}
```

## 资讯评论删除

`admin/news/{id}/comments/{id}`

**请求方法**

`DELETE`

**请求参数**

none

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

# 资讯

## 栏目列表

`api/news-cates`

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
      "id": 3 /*栏目ID*/,
      "name": "动物世界" /*栏目名称*/,
      "sort": 20,
      "is_delete": 0,
      "created_at": "2020-07-13 14:14:45",
      "updated_at": "2020-07-13 14:16:23"
    }
  ]
}
```

## 列表

`api/news`

**请求方法**

`GET`

**请求参数**

|  名称   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| cate_id | int  |  无  |  否  | 栏目 ID  |
| offset  | int  |  0   |  是  |  偏移量  |
|  limit  | int  |  15  |  是  | 每页条数 |

**SUCCESS 状态码**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 4,
      "title": "12312312213123" /*标题*/,
      "cover": "cover.png" /*封面*/,
      "cate_id": 1 /*栏目*/,
      "comment_num": 0 /*评论数量*/,
      "like_num": 0 /*点赞数量*/,
      "created_at": "2020-07-13 14:06:33" /*时间*/,
      "is_like": false /*是否点赞*/,
      /*栏目信息*/
      "cate": {
        "id": 1,
        "name": "军事"
      }
    }
  ]
}
```

## 资讯详情

`api/news/{id}`

**请求方法**

`GET`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "title": "标题",
    "cover": "111",
    "content": "111111",
    "cate_id": 1,
    "like_num": 0,
    "comment_num": 3,
    "is_delete": 0,
    "created_at": null,
    "updated_at": "2020-07-13 10:50:42",
    "is_like": false
  }
}
```

## 资讯点赞

`api/news/{id}/like`

**请求方法**

`POST`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "点赞成功",
  "code": 0,
  "data": null
}
```

## 取消资讯点赞

`api/news/{id}/like`

**请求方法**

`DELETE`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "取消成功",
  "code": 0,
  "data": null
}
```

## 获取资讯评论列表

`api/comments`

**请求方法**

`GET`

**请求参数**

|  名称   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| news_id | int  |  无  |  是  | 咨询 ID  |
|  limit  | int  |  20  |  是  | 条目数量 |
| offset  | int  |  0   |  是  | 偏移数量 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 4,
      "user_id": 1,
      "news_id": 1,
      "content": "1111",
      "like_num": 0,
      "is_delete": 0,
      "created_at": "2020-07-13 10:49:59",
      "updated_at": "2020-07-13 10:49:59",
      "is_like": false,
      "user": {
        "id": 1,
        "name": "",
        "avatar": null,
        "gender": 0
      }
    }
  ]
}
```

## 资讯发布评论

`api/comments`

**请求方法**

`POST`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |           说明           |
| :-----: | :----: | :--: | :--: | :----------------------: |
| news_id |  int   |  无  |  是  |         咨询 ID          |
| content | string |  无  |  是  | 评论内容/最长 200 个字符 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "评论成功",
  "code": 0,
  "data": {
    "like_num": 0,
    "user_id": 1,
    "news_id": "3",
    "content": "评论呢日荣",
    "is_delete": 0,
    "updated_at": "2020-07-13 14:41:47",
    "created_at": "2020-07-13 14:41:47",
    "id": 7,
    "user": {
      "id": 1,
      "name": "",
      "avatar": null,
      "gender": 0
    }
  }
}
```

## 删除咨询评论

`api/comments/{id}`

**请求方法**

`DELETE`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

## 评论点赞

`api/comments/{id}/like`

**请求方法**

`POST`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "点赞成功",
  "code": 0,
  "data": null
}
```

## 取消评论点赞

`api/comments/{id}/like`

**请求方法**

`DELETE`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "取消成功",
  "code": 0,
  "data": null
}
```

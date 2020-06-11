# 视频

## 视频列表

**方式**

`GET`

**路径**

`/api/videos`

**参数**

|  名称  |  类型  | 必须 |               说明               |
| :----: | :----: | :--: | :------------------------------: |
| limit  |  int   |  是  |         条目数量默认 20          |
| offset |  int   |  是  |           偏移量默认 0           |
|  type  | stri g |  否  | 类型: follow-关注/recommond-推荐 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "user_id": 2,
      "intro": "这是动态" /*动态描述*/,
      "url": "xxxx.mp4" /*视频路径*/,
      "cover": "xxxx.png" /*视频封面*/,
      "topics": "哈哈,嘿嘿" /*视频话题*/,
      "reward_num": 0 /*打赏数*/,
      "praise_num": 2 /*点赞数*/,
      "comment_num": 0 /*评论数*/,
      "download_num": 0 /*下载数*/,
      "user": {
        "id": 2,
        "name": "张三" /*用户呢称*/,
        "avatar": "头像.png" /*头像路径*/,
        "number": "49123452" /*火推号码*/,
        "is_follow": true /*是否关注*/
      }
    }
  ]
}
```

## 视频创建

**方式**

`POST`

**路径**

`/api/videos`

**参数**

|  名称  |  类型  | 必须 |          说明          |
| :----: | :----: | :--: | :--------------------: |
|  url   | string |  是  |          地址          |
| cover  | string |  是  |          封面          |
| topics | string |  否  | 话题,多个使用“,”号分割 |
| intro  | string |  是  |          描述          |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 视频删除

**方式**

`DELETE`

**路径**

`/api/videos/:id`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 视频下载次数增加

**方式**

`PATCH`

**路径**

`/api/videos/:id/download-count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 视频点赞

**方式**

`POST`

**路径**

`/api/likes`

**参数**

|    名称     |  类型  | 必须 |      说明       |
| :---------: | :----: | :--: | :-------------: |
|  target_id  |  int   |  是  |     视频 ID     |
| target_type | string |  是  | 类型:like:video |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 取消点赞

**方式**

`DELETE`

**路径**

`/api/likes`

**参数**

|    名称     |  类型  | 必须 |      说明       |
| :---------: | :----: | :--: | :-------------: |
|  target_id  |  int   |  是  |     视频 ID     |
| target_type | string |  是  | 类型:like:video |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 评论列表

**方式**

`GET`

**路径**

`/api/comments`

**参数**

|   名称   | 类型 | 必须 |       说明        |
| :------: | :--: | :--: | :---------------: |
| video_id | int  |  是  |      视频 ID      |
|  after   | int  |  是  | 列表最后节点的 ID |
|  limit   | int  |  是  |     条目数量      |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "content": "视频很好" /*评论内容*/,
      "user_id": 3,
      "video_id": 1,
      "praise_num": 0 /*点赞数量*/,
      "reply_num": 0 /*回复数量*/,
      "created_at": "2020-06-11 14:13:17" /*评论时间*/,
      "is_liked": false /*是否点赞*/,
      "replies": null,
      /*用户信息*/
      "user": {
        "id": 3,
        "name": "0CGLAS",
        "avatar": null,
        "number": "49123453",
        "gender": 0
      }
    }
  ]
}
```

## 视频评论

**方式**

`POST`

**路径**

`/api/comments`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| video_id |  int   |  是  | 视频 ID  |
| content  | string |  是  | 评论内容 |

**响应**

`Status code 200`

```json
{
  "msg": "评论成功",
  "code": 0,
  "data": {
    "user_id": 3,
    "content": "视频很好",
    "video_id": 1,
    "updated_at": "2020-06-11 14:13:17",
    "created_at": "2020-06-11 14:13:17",
    "id": 2,
    "user": {
      "id": 3,
      "name": "0CGLAS",
      "avatar": null,
      "gender": 0
    },
    "replies": []
  }
}
```

## 删除评论

**方式**

`DELETE`

**路径**

`/api/comments/{comment}`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| video_id |  int   |  是  | 视频 ID  |
| content  | string |  是  | 评论内容 |

**响应**

`Status code 200`

```json
{
  "msg": "评论成功",
  "code": 0,
  "data": {
    "user_id": 3,
    "content": "视频很好",
    "video_id": 1,
    "updated_at": "2020-06-11 14:13:17",
    "created_at": "2020-06-11 14:13:17",
    "id": 2,
    "user": {
      "id": 3,
      "name": "0CGLAS",
      "avatar": null,
      "gender": 0
    },
    "replies": []
  }
}
```

## 回复列表

**方式**

`GET`

**路径**

`/api/replies`

**参数**

|    名称    | 类型 | 必须 |       说明        |
| :--------: | :--: | :--: | :---------------: |
| comment_id | int  |  是  |      评论 ID      |
|   after    | int  |  是  | 列表最后节点的 ID |
|   limit    | int  |  是  |     条目数量      |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "content": "视频很好" /*评论内容*/,
      "user_id": 3,
      "video_id": 1,
      "praise_num": 0 /*点赞数量*/,
      "created_at": "2020-06-11 14:13:17" /*评论时间*/,
      "is_liked": false /*是否点赞*/,
      "replies": null,
      /*用户信息*/
      "user": {
        "id": 3,
        "name": "0CGLAS",
        "avatar": null,
        "number": "49123453",
        "gender": 0
      }
    }
  ]
}
```

## 评论回复

**方式**

`POST`

**路径**

`/api/replies`

**参数**

|      名称      |  类型  | 必须 |                               说明                               |
| :------------: | :----: | :--: | :--------------------------------------------------------------: |
|   comment_id   |  int   |  是  |                             评论 ID                              |
| target_user_id |  int   |  是  | 回复人 ID,回复评论则是评论的 user_id，回复回复则是回复的 user_id |
|    content     | string |  是  |                             回复内容                             |

**响应**

`Status code 200`

```json
{
  "msg": "回复成功",
  "code": 0,
  "data": {
    "praise_num": 0,
    "user_id": 3,
    "content": 0,
    "comment_id": 1,
    "target_user_id": 1,
    "updated_at": "2020-06-11 14:50:07",
    "created_at": "2020-06-11 14:50:07",
    "id": 5,
    "user": {
      "id": 3,
      "name": "0CGLAS",
      "avatar": null,
      "gender": 0
    }
  }
}
```

## 删除回复

**方式**

`DELETE`

**路径**

`/api/replies/:id`

**响应**

`Status code 200`

```json
{
  "msg": "评论成功",
  "code": 0,
  "data": null
}
```

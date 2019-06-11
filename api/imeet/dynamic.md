# 动态

## 动态列表

**方式**

`GET`

**路径**

`/api/dynamics`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| after | string |  是  | 最后一条数据`id`|
| limit | string |  是  | 条目数 |
| type | string |  否  | 类型:`plaza`-广场 `top`-推荐 `follow`-关注 |
| user_id | string |  否  | 某个用户的动态 |
| tag_id | int |  否  | 根绝标签查询动态 |
| hot | int |  否  | 是否热门 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 11,
            "user_id": 5,
            "content": "视频文本动态",
            "location": null,
            "images": null,
            "video": {
                "mime": "png",/*文件MimeType*/
                "cover": "xxxxxx.png",/*视频封面*/
                "video": "xxxxxx.mp4",/*视频地址*/
                "width": 200,/*封面宽*/
                "height": 100/*封面高*/
            },
            "type": 5,/*内容,类型:1-纯文本、2-图片、3-视频、4-图片文本、5-视频文本*/
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-11 15:23:41",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
        {
            "id": 9,
            "user_id": 5,
            "content": "图文动态",
            "location": null,
            "images": [
                {
                    "mime": "png",
                    "width": 100,
                    "height": 200,
                    "filename": "xxxxx.png"
                }
            ],
            "video": null,
            "type": 4,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-11 15:20:54",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
        {
            "id": 7,
            "user_id": 5,
            "content": "",
            "location": null,
            "images": null,
            "video": {
                "mime": "png",
                "cover": "xxxxxx.png",
                "video": "xxxxxx.mp4",
                "width": 200,
                "height": 100
            },
            "type": 3,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-11 15:19:44",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
        {
            "id": 5,
            "user_id": 5,
            "content": "",
            "location": null,
            "images": [
                {
                    "mime": "png",
                    "width": 100,
                    "height": 200,
                    "filename": "xxxxx.png"
                }
            ],
            "video": null,
            "type": 2,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-11 15:15:16",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
        {
            "id": 3,
            "user_id": 5,
            "content": "这是纯文本动态",
            "location": null,
            "images": null,
            "video": null,
            "type": 1,/*内容,类型:1-纯文本、2-图片、3-视频、4-图片文本、5-视频文本*/
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-11 15:06:01",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        }
    ]
}
```

## 发布动态

**方式**

`POST`

**路径**

`/api/dynamics`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| sync | int |  是  | 是否同步到广场: 0-否 1-是 |
| lat | string |  否  | 纬度 |
| lng | string |  否  | 经度 |
| location | string |  否  | 位置 |
| content | object |  否  | 动态内容 |
| tags | array |  否  | 话题标签 `["测试","测试1","测试"]` |

**content参数说明**

纯文本

```json
{
  "type": 1,
  "text": "这是纯文本",
}
```

纯图片

```json
{
  "type": 2,
  "images": [
                {
                "mime": "png",/*文件mimetype*/
                "width": 100,/*图片宽度*/
                "height": 200,/*图片高度*/
                "filename": "xxxxx.png"/*文件名*/
                },
        ]
}
```

视频

```json
{
  "type": 3,
  "video": "xxxxxx.mp4",/*视频文件名*/
  "cover": "xxxxxx.png",/*封面图文件名*/
  "height": 100,
  "width": 200,
  "mime": "png"
}
```

图片文本

```json
{
  "type": 4,
  "text": "这是图片文本动态",
  "images": [
                {
                "mime": "png",/*文件mimetype*/
                "width": 100,/*图片宽度*/
                "height": 200,/*图片高度*/
                "filename": "xxxxx.png"/*文件名*/
                },
        ]
}
```

视频文本

```json
{
  "type":5,
  "text":"这是视频文本动态",
  "video": "xxxxxx.mp4",/*视频文件名*/
  "cover": "xxxxxx.png",/*封面图文件名*/
  "height": 100,
  "width": 200,
  "mime": "png"
}
```

**响应**

`Status code 200`

```json
{
    "msg": "发布成功",
    "code": 0,
    "data": {
        "id": 17/*动态*/
    }
}
```

## 动态详情

**方式**

`GET`

**路径**

`/api/dynamics/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 11,
        "user_id": 5,
        "content": "视频文本动态",
        "location": null,
        "images": null,
        "video": {
            "mime": "png",
            "cover": "xxxxxx.png",
            "video": "xxxxxx.mp4",
            "width": 200,
            "height": 100
        },
        "type": 5,
        "comment_count": 0,
        "like_count": 0,
        "collect_count": 0,
        "created_at": "2019-06-11 15:23:41",
        "is_liked": false,
        "is_collected": false,
        "tags": [],
        "user": {
            "id": 5,
            "name": "Z63482",
            "avatar": null
        }
    }
}
```

## 动态删除

**方式**

`DELETE`

**路径**

`/api/dynamics/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 动态点赞

**方式**

`POST`

**路径**

`/api/dynamics/{id}/like`

**响应**

`Status code 200`

```json
{
    "msg": "点赞成功",
    "code": 0,
    "data": null
}
```

## 动态取消点赞

**方式**

`DELETE`

**路径**

`/api/dynamics/{id}/like`

**响应**

`Status code 200`

```json
{
    "msg": "取消点赞成功",
    "code": 0,
    "data": null
}
```

## 动态评论

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| content | string |  是  | 评论内容|
| comment_id | int |  否  | 如回复 必须 顶级评论id |
| reply_user | int |  否  | 如回复 必须 被回复人id |

**路径**

`/api/dynamics/{id}/comments`

**响应**

`Status code 200`

```json
{
    "msg": "评论成功",
    "code": 0,
    "data": {
        "like_count": 0,
        "user_id": 5,
        "target_id": 17,
        "target_type": "dynamic",
        "content": "测试哈",
        "comment_id": 0,
        "reply_user_id": 0,
        "updated_at": "2019-06-10 11:40:48",
        "created_at": "2019-06-10 11:40:48",
        "id": 15,
        "user": {
            "id": 5,
            "name": "Z63482",
            "avatar": null
        },
        "reply_user": null
    }
}
```

## 评论列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| limit | int |  是  | 条目数|
| after | int |  否  | 最后一条数据的id |

**路径**

`/api/dynamics/{id}/comments`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 12,
            "content": "测试哈",/*评论内容*/
            "user_id": 5,/*用户id*/
            "target_id": 17,
            "reply_user_id": 0,
            "like_count": 0,/*点赞统计*/
            "reply_count": 0,/*回复统计*/
            "created_at": "2019-06-10 10:53:03",/*时间*/
            "is_liked": false,/*是否点赞*/
            "replies": [/*回复列表*/
                {
                    "id": 13,
                    "content": "asdasd",/*回复内容*/
                    "user_id": 5,
                    "target_id": 17,
                    "reply_user_id": 0,
                    "comment_id": 12,
                    "like_count": 0,/*点赞统计*/
                    "created_at": "2019-06-10 10:53:03",/*时间*/
                    /*回复人信息*/
                    "user": {
                        "id": 5,
                        "name": "Z63482",
                        "avatar": null
                    },
                    /*被回复人*/
                    "reply_user": null
                }
            ],
            "user": {/*评论人信息*/
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            "reply_user": null
        }
    ]
}
```

## 评论回复列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| limit | int |  是  | 条目数|
| after | int |  否  | 最后一条数据的id |

**路径**

`/api/dynamics/{id}/comments/{id}/replies`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 13,
            "content": "asdasd",
            "user_id": 5,
            "target_id": 17,
            "reply_user_id": 0,
            "like_count": 0,
            "created_at": null,
            "is_liked": false,
            /*回复人*/
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            /*被回复的用户*/
            "reply_user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        }
    ]
}
```

## 评论详情

**方式**

`POST`

**参数**

无

**路径**

`/api/dynamics/{id}/comments/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 12,
        "content": "测试哈",
        "user_id": 5,
        "target_id": 17,
        "reply_user_id": 0,
        "like_count": 0,
        "reply_count": 0,
        "created_at": "2019-06-10 10:53:03",
        "is_liked": false,
        "user": {
            "id": 5,
            "name": "Z63482",
            "avatar": null
        }
    }
}
```

## 评论删除

**方式**

`DELETE`

**参数**

无

**路径**

`/api/dynamics/{id}/comments/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 评论点赞

**方式**

`POST`

**参数**

无

**路径**

`/api/comments/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 评论点赞取消

**方式**

`DELETE`

**参数**

无

**路径**

`/api/comments/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```


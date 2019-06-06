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
            "content": {
                "mime": "png",
                "text": "这是视频文本动态",
                "type": 5,
                "cover": "xxxx.png",
                "video": "xxxx.mp4",
                "width": 100,
                "height": 100
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:21:15",
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
            "id": 10,
            "user_id": 5,
            "content": {
                "mime": "png",
                "type": 3,
                "cover": "xxxx.png",
                "video": "xxxx.mp4",
                "width": 100,
                "height": 100
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:20:53",
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
            "content": {
                "text": "这是图片文本动态",
                "type": 4,
                "images": [
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    }
                ]
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:19:41",
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
            "id": 8,
            "user_id": 5,
            "content": {
                "text": "这是图片文本动态",
                "type": 4,
                "images": [
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    }
                ]
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:19:40",
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
            "content": {
                "text": "这是图片文本动态",
                "type": 4,
                "images": [
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    }
                ]
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:19:39",
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
            "id": 6,
            "user_id": 5,
            "content": {
                "text": "这是图片文本动态",
                "type": 4,
                "images": [
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    }
                ]
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:19:28",
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
            "content": {
                "type": 2,
                "images": [
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    }
                ]
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:18:54",
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
            "id": 4,
            "user_id": 5,
            "content": {
                "text": "这是图片和文本动态",
                "type": 4,
                "images": [
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    },
                    {
                        "mime": "png",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxxx.png"
                    }
                ]
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:17:31",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
        /*纯文本动态*/
        {
            "id": 1,
            "user_id": 5,
            "content": {
                "text": "这是纯文本动态",/*动态内容*/
                "type": 1/*纯文本z*/
            },
            "location": null,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-06 12:12:59",
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
| tags | array |  否  | 话题标签 `[1,2,3]` |

**content参数说明***

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
        "id": 17,
        "user_id": 5,
        "content": {
            "mime": "png",
            "text": "这是视频文本动态",
            "type": 5,
            "cover": "xxxx.png",
            "video": "xxxx.mp4",
            "width": 100,
            "height": 100
        },
        "location": null,
        "comment_count": 0,
        "like_count": 0,
        "collect_count": 0,
        "created_at": "2019-06-06 14:44:21",
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
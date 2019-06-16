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
| hot | int |  否  | 是否推荐 |
| group_id | int |  否  | 查看社群下面所有用户动态 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 5,
            "user_id": 5,
            "content": "文本图片动态",
            "location": null,
            "images": [
                {
                    "mime": "png",
                    "width": 100,
                    "height": 200,
                    "filename": "xxx.png"
                }
            ],
            "video": null,
            "type": 4,/*类型:1-纯文本、2-图片、3-视频、4-图片文本、5-视频文本*/
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-16 15:30:37",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0
            }
        },
        {
            "id": 4,
            "user_id": 5,
            "content": "",
            "location": null,
            "images": [
                {
                    "mime": "png",
                    "width": 100,
                    "height": 200,
                    "filename": "xxx.png"
                }
            ],
            "video": null,
            "type": 2,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-16 15:30:16",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0
            }
        },
        {
            "id": 3,
            "user_id": 5,
            "content": "纯文本动态",
            "location": null,
            "images": null,
            "video": null,
            "type": 1,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-16 15:29:42",
            "is_liked": false,
            "is_collected": true,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0
            }
        },
        {
            "id": 2,
            "user_id": 5,
            "content": "",
            "location": null,
            "images": null,
            "video": {
                "cover": {
                    "mime": "png",
                    "width": 100,
                    "height": 200,
                    "filename": "xxx.png"
                },
                "video": {
                    "mime": "video/mp4",
                    "filename": "xxxx.png"
                }
            },
            "type": 3,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-16 15:29:27",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0
            }
        },
        {
            "id": 1,
            "user_id": 5,
            "content": "这是文字视频动态",
            "location": null,
            "images": null,
            "video": {
                "cover": {
                    "mime": "png",
                    "width": 100,
                    "height": 200,
                    "filename": "xxx.png"
                },
                "video": {
                    "mime": "video/mp4",
                    "filename": "xxxx.png"
                }
            },
            "type": 5,
            "comment_count": 0,
            "like_count": 0,
            "collect_count": 0,
            "created_at": "2019-06-16 15:29:21",
            "is_liked": false,
            "is_collected": false,
            "tags": [],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0
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
		"video": {
			"filename": "xxxx.png",
			"mime": "video/mp4"
		},
		"cover": {
			"filename": "xxx.png",
			"width": 100,
			"height": 200,
			"mime": "png"
		}
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
        "text": "test",
		"type": 3,
		"video": {
			"filename": "xxxx.png",
			"mime": "video/mp4"
		},
		"cover": {
			"filename": "xxx.png",
			"width": 100,
			"height": 200,
			"mime": "png"
		}
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

**路径**

`/api/comments`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| content | string |  是  | 评论内容|
| topic_id | int |  是  | 主题id |
| topic_type | string |  是  | 主题类型，可选：dynamic-动态 |

**响应**

`Status code 200`

```json
{
    "msg": "评论成功",
    "code": 0,
    "data": {
        "is_delete": 0,
        "like_count": 0,
        "reply_count": 0,
        "content": "测试呢",
        "topic_id": 9,
        "user_id": 5,
        "topic_type": "dynamic",
        "updated_at": "2019-06-13 10:52:29",
        "created_at": "2019-06-13 10:52:29",
        "id": 5,
        "user": {
            "id": 5,
            "name": "Z63482",
            "avatar": null
        }
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
| topic_id | int |  是  | 主题id |
| topic_type | string |  是  | 主题类型,可选:dynamic-动态 |

**路径**

`/api/comments`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
 {
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 4,
            "content": "测试呢",
            "user_id": 5,
            "like_count": 1,
            "reply_count": 0,
            "created_at": "2019-06-12 21:53:23",
            "is_like": false,
            "replies": [
                {
                    "id": 2,
                    "content": "测 sad sad",
                    "user_id": 5,
                    "reply_user_id": 0,
                    "like_count": 0,
                    "created_at": "2019-06-12 21:52:22",
                    "user": {
                        "id": 5,
                        "name": "Z63482",
                        "avatar": null
                    },
                    "reply_user": null
                },
                {
                    "id": 1,
                    "content": "测试测试",
                    "user_id": 5,
                    "reply_user_id": 0,
                    "like_count": 0,
                    "created_at": "2019-06-12 21:52:22",
                    "user": {
                        "id": 5,
                        "name": "Z63482",
                        "avatar": null
                    },
                    "reply_user": {
                        "id": 5,
                        "name": "Z63482",
                        "avatar": null
                    }
                }
            ],
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
    ]
}
```

## 评论删除

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
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 评论详情

**方式**

`GET`

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
    "data": {
        "id": 4,
        "content": "测试呢",/*评论内容*/
        "user_id": 5,
        "like_count": 1,
        "reply_count": 0,
        "created_at": "2019-06-12 21:53:23",
        "is_like": false,
        "user": {
            "id": 5,
            "name": "Z63482",
            "avatar": null
        }
    }
}
```

## 评论点赞

**方式**

`POST`

**参数**

无

**路径**

`/api/comments/{id}/like`

**响应**

`Status code 200`

```json
{
    "msg": "点赞成功",
    "code": 0,
    "data": null
}
```

## 评论取消点赞

**方式**

`DELETE`

**参数**

无

**路径**

`/api/comments/{id}/like`

**响应**

`Status code 200`

```json
{
    "msg": "取消点赞成功",
    "code": 0,
    "data": null
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
| comment_id | int |  是  | 评论id |

**路径**

`/api/replies`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data":         {
            "id": 11,
            "user_id": 5,
            "reply_user_id": 5,
            "content": "测试呢",
            "like_count": 0,/*点赞数*/
            "created_at": "2019-06-13 10:13:20",
            "is_like": false,
            "user": {/*回复人*/
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            /*被回复人，不为null则为回复的回复*/
            "reply_user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        },
}
```

## 回复评论

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| content | 内容 |  是  | 回复内容|
| topic_id | int |  是  | 回复主题ID，如`topic_type`为`comment`,则为评论的ID，反则为回复的ID |
| topic_type | string |  是  | 主题类型,可选：`comment`-针对评论的回复 `reply`-针对回复的回复  |

**路径**

`/api/replies`

**响应**

`Status code 200`

```json
{
    "msg": "回复成功",
    "code": 0,
    "data": {
        "is_delete": 0,
        "like_count": 0,
        "user_id": 5,
        "content": "测试呢",
        "topic_id": 4,
        "topic_type": "comment",
        "reply_user_id": 0,
        "comment_id": 4,
        "updated_at": "2019-06-13 11:34:21",
        "created_at": "2019-06-13 11:34:21",
        "id": 12
    }
}
```

## 回复删除

**方式**

`DELETE`

**参数**

**路径**

`/api/replies/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 回复点赞

**方式**

`POST`

**参数**

**路径**

`/api/replies/{id}/like`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 取消回复点赞

**方式**

`DELETE`

**参数**

**路径**

`/api/replies/{id}/like`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```


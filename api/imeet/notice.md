# 动态通知/系统通知/消息通知

## 消息列表

**方式**

`GET`

**路径**

`/api/notify/messages`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| type | string |  是  | remind-动态通知, message-消息通知, system-系统通知] |
| remind_type | int |  否  | 1-回复评论提醒 2-点赞收藏提醒,如 `type` 为 `remind` 必传  |
| offset | string |  是  | 偏移量 默认0 |
| limit | string |  是  | 条目数 默认20|

**响应**

`Status code 200`

点赞收藏提醒

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "content": "",
            "type": "remind",
            "body": {
                /*评论信息*/
                "comment": {
                    "id": 15,
                    "content": "sadasd",
                    "user_id": 3,
                    "topic_id": 11,
                    "is_delete": 0,
                    "comment_id": 11,
                    "created_at": "2019-06-18 10:43:02",
                    "like_count": 1,
                    "topic_type": "comment",
                    "updated_at": "2019-06-18 11:53:40",
                    "reply_user_id": 0
                }
            },
            "target_type": "dynamic",
            "action": "reply:like",/*评论点赞*/
            "action_id": 7,
            "target_id": 9,
            "sender_id": 3,
            "sender_type": "user",
            "is_read": 0,
            "user_id": 5,
            "created_at": "2019-06-18 11:53:40",
            "updated_at": "2019-06-18 11:53:40",
            /*评论人信息*/
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null
            },
            /*动态信息*/
            "target": {
                "id": 9,
                "type": 2,
                "content": "",
                "video": null,
                "images": [
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    },
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    }
                ]
            }
        },
        {
            "id": 1,
            "content": "",
            "type": "remind",
            "body": {
                "comment": {
                    "id": 18,
                    "content": "哈哈哈",
                    "user_id": 3,
                    "topic_id": 15,
                    "is_delete": 0,
                    "comment_id": 11,
                    "created_at": "2019-06-18 10:46:27",
                    "like_count": 1,
                    "topic_type": "reply",
                    "updated_at": "2019-06-18 11:49:13",
                    "reply_user_id": 3
                }
            },
            "target_type": "dynamic",
            "action": "reply:like",
            "action_id": 6,
            "target_id": 9,
            "sender_id": 3,
            "sender_type": "user",
            "is_read": 0,
            "user_id": 5,
            "created_at": "2019-06-18 11:49:13",
            "updated_at": "2019-06-18 11:49:13",
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null
            },
            "target": {
                "id": 9,
                "type": 2,
                "content": "",
                "video": null,
                "images": [
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    },
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    }
                ]
            }
        }
    ]
}
```

回复评论提醒

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 4,
            "content": "",
            "type": "remind",
            "body": {
                "reply": {
                    "id": 19,
                    "content": "测试呢",
                    "user_id": 5,
                    "topic_id": "18",
                    "is_delete": 0,
                    "comment_id": 11,
                    "created_at": "2019-06-18 14:45:27",
                    "like_count": 0,
                    "topic_type": "reply",
                    "updated_at": "2019-06-18 14:45:27",
                    "reply_user_id": 3
                },
                "comment": {
                    "id": 18,
                    "content": "哈哈哈",
                    "user_id": 3,
                    "topic_id": 15,
                    "is_delete": 0,
                    "comment_id": 11,
                    "created_at": "2019-06-18 10:46:27",
                    "like_count": 1,
                    "topic_type": "reply",
                    "updated_at": "2019-06-18 11:49:13",
                    "reply_user_id": 3
                }
            },
            "target_type": "dynamic",
            "action": "reply",
            "action_id": 19,
            "target_id": 9,
            "sender_id": 3,
            "sender_type": "user",
            "is_read": 0,
            "user_id": 5,
            "created_at": "2019-06-18 14:45:27",
            "updated_at": "2019-06-18 14:45:27",
            "is_liked": false,
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null
            },
            "target": {
                "id": 9,
                "type": 2,
                "content": "",
                "video": null,
                "images": [
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    },
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    }
                ]
            }
        },
        {
            "id": 2,
            "content": "",
            "type": "remind",
            "body": {
                "comment": {
                    "id": 12,
                    "content": "哈哈哈",
                    "user_id": 5,
                    "topic_id": "9",
                    "is_delete": 0,
                    "created_at": "2019-06-18 11:50:05",
                    "like_count": 0,
                    "topic_type": "dynamic",
                    "updated_at": "2019-06-18 11:50:05",
                    "reply_count": 0
                }
            },
            "target_type": "dynamic",
            "action": "comment",
            "action_id": 12,
            "target_id": 9,
            "sender_id": 3,
            "sender_type": "user",
            "is_read": 0,
            "user_id": 5,
            "created_at": "2019-06-18 11:50:05",
            "updated_at": "2019-06-18 11:50:05",
            "is_liked": false,
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null
            },
            "target": {
                "id": 9,
                "type": 2,
                "content": "",
                "video": null,
                "images": [
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    },
                    {
                        "mime": "mp4",
                        "width": 100,
                        "height": 200,
                        "filename": "xxxx.png"
                    }
                ]
            }
        }
    ]
}
```
# 消息通知

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
            "id": 1,
            "content": "",
            "type": "remind",
            /*如 action 在 [reply:like,comment:like] 中 body 为点赞主题内容 */
            "body":{
                "id": 2,
                "content": "hello world", /*内容*/
                "user_id": 5,
                "reply_user_id": 0,
                "like_count": 0,
                "updated_at": "2019-06-12 21:52:22",
                "created_at": "2019-06-12 21:52:22",
            },
            "target_type": "dynamic",
            "action": "dynamic:like",/*reply:like-回复点赞, comment:like-回复点赞, dynamic:like-动态点赞, dynamic:collect-动态收藏*/
            "target_id": 1,
            "sender_id": 5,
            "sender_type": "user",
            "is_read": 0,
            "user_id": 3,
            "created_at": "2019-06-27 14:26:24",
            "updated_at": "2019-06-27 14:26:24",
            /*点赞人信息*/
            "sender": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            /*动态信息*/
            "target": {
                "id": 1,
                "type": 1,
                "content": "哈哈哈哈",
                "video": null,
                "images": null
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
            "id": 1,
            "content": "",
            "type": "remind",
            /*如 action 为 dynamic:comment，body信息为评论信息*/
            "body": {
                "id": 2,
                "content": "hello world", /*内容*/
                "user_id": 5,
                "reply_user_id": 0,
                "like_count": 0,
                "updated_at": "2019-06-12 21:52:22",
                "created_at": "2019-06-12 21:52:22",
            },
            /*如 action 为 reply:comment，body.commnt为评论内容，body.reply为回复内容*/
            "body": {
                "comment": {
                    "id": 2,
                    "content": "hello world", /*内容*/
                    "user_id": 5,
                    "reply_user_id": 0,
                    "like_count": 0,
                    "updated_at": "2019-06-12 21:52:22",
                    "created_at": "2019-06-12 21:52:22",
                },
                "reply": {
                    "id": 2,
                    "content": "hello world", /*内容*/
                    "user_id": 5,
                    "reply_user_id": 0,
                    "like_count": 0,
                    "updated_at": "2019-06-12 21:52:22",
                    "created_at": "2019-06-12 21:52:22",
                }
            },
            "target_type": "dynamic",
            "action": "dynamic:like",/*reply:comment-回复评论, dynamic:comment-回复动态*/
            "target_id": 1,
            "sender_id": 5,
            "sender_type": "user",
            "is_read": 0,
            "user_id": 3,
            "created_at": "2019-06-27 14:26:24",
            "updated_at": "2019-06-27 14:26:24",
            /*点赞人信息*/
            "sender": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            /*动态信息*/
            "target": {
                "id": 1,
                "type": 1,
                "content": "哈哈哈哈",
                "video": null,
                "images": null
            }
        }
    ]
}
```
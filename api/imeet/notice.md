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

**动态提醒**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "target_id": 1,
            "body": {
                "action": "dynamic:collect",/*动态收藏*/
                "dynamic": {
                    "id": 1,
                    "content": "哈哈哈哈",
                    "video": null,
                    "images": null,
                    "location": null,
                    "type": 1
                }
            },
            "target_type": "dynamic",
            "sender_id": 3,
            "created_at": "2019-06-29 10:13:59",
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null,
                "sex": 0,
                "number": null
            }
        },
        {
            "id": 2,
            "target_id": 1,
            "body": {
                "action": "dynamic:like",/*动态点赞*/
                "dynamic": {
                    "id": 1,
                    "content": "哈哈哈哈",
                    "video": null,
                    "images": null,
                    "location": null,
                    "type": 1
                }
            },
            "target_type": "dynamic",
            "sender_id": 3,
            "created_at": "2019-06-29 10:12:59",
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null,
                "sex": 0,
                "number": null
            }
        },
        {
            "id": 2,
            "target_id": 1,
            "body": {
                "action": "dynamic:comment",/*动态评论*/
                "dynamic": {
                    "id": 1,
                    "content": "哈哈哈哈",
                    "video": null,
                    "images": null,
                    "location": null,
                    "type": 1
                },
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                }
            },
            "target_type": "dynamic",
            "sender_id": 3,
            "created_at": "2019-06-29 10:12:59",/*时间*/
            /*评论人*/
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null,
                "sex": 0,
                "number": null
            }
        },
        {
            "id": 2,
            "target_id": 1,
            "body": {
                "action": "dynamic:comment:reply",/*动态评论回复*/
                "dynamic": {
                    "id": 1,
                    "content": "哈哈哈哈",
                    "video": null,
                    "images": null,
                    "location": null,
                    "type": 1
                },
                /*评论内容*/
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                },
                /*回复内容*/
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                }
            },
            "target_type": "dynamic",
            "sender_id": 3,
            "created_at": "2019-06-29 10:12:59",/*时间*/
            /*评论人*/
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null,
                "sex": 0,
                "number": null
            }
        },
        {
            "id": 2,
            "target_id": 1,
            "body": {
                "action": "dynamic:reply:like",/*动态回复点赞*/
                "dynamic": {
                    "id": 1,
                    "content": "哈哈哈哈",
                    "video": null,
                    "images": null,
                    "location": null,
                    "type": 1
                },
                /*评论内容*/
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                },
                /*回复内容*/
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                }
            },
            "target_type": "dynamic",
            "sender_id": 3,
            "created_at": "2019-06-29 10:12:59",/*时间*/
            /*评论人*/
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null,
                "sex": 0,
                "number": null
            }
        },
        {
            "id": 2,
            "target_id": 1,
            "body": {
                "action": "dynamic:comment:like",/*动态评论点赞*/
                "dynamic": {
                    "id": 1,
                    "content": "哈哈哈哈",
                    "video": null,
                    "images": null,
                    "location": null,
                    "type": 1
                },
                /*评论内容*/
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                },
                /*回复内容*/
                "comment": {
                    "id": 1,
                    "content": "哈哈哈哈"/*评论内容*/
                }
            },
            "target_type": "dynamic",
            "sender_id": 3,
            "created_at": "2019-06-29 10:12:59",/*时间*/
            /*评论人*/
            "sender": {
                "id": 3,
                "name": "eric",
                "avatar": null,
                "sex": 0,
                "number": null
            }
        }
    ]
}
```

**消息通知**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        /* 申请加群 */
        {
            "id": 1,
            "target_id": 34,
            "body": {
                "from": null,/*来自：邀请/搜索*/
                "type": "apply:add:group",/*申请加群*/
                "remark": null,/*个人介绍*/
                "status": 0,/*0-待处理 1-同意加群 2-拒绝*/
                /*群信息*/
                "group": {
                    "id": 34,
                    "name": "Z63482创建的群聊",
                    "avatar": null
                }
            },
            "target_type": "group",
            "sender_id": 5,
            "created_at": "2019-06-28 18:28:44",
            /*申请人信息*/
            "sender": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0,
                "number": "1295634"
            }
        },
        /* 拒绝加群/社区申请 */
        {
            "id": 1,
            "target_id": 34,
            "body": {
                "type": "reject:add:group",/*申请加群*/
                "remark": null,/*拒绝备注*/
                /*群信息*/
                "group": {
                    "id": 34,
                    "name": "Z63482创建的群聊",
                    "avatar": null
                }
            },
            "target_type": "group",
            "sender_id": 5,
            "created_at": "2019-06-28 18:28:44",
            /*申请人信息*/
            "sender": {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0,
                "number": "1295634"
            }
        }
    ]
}
```


**系统通知**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 5,
            "target_id": 0,
            "body": {
                "title": "哈哈啊哈",/*通知标题*/
                "content": "asdasdasdsadsadasda"/*通知类型*/
            },
            "read_id": 5,
            "target_type": "system",
            "sender_id": 0,
            "created_at": "2019-06-29 10:13:59"
        }
    ]
}
```
# 消息

## 消息列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数 默认为 20 |
| offset | int  |  是  | 条目数 默认为 0  |

**路径**

`/api/notifies`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 5,
      "title": "CTC订单签收提醒" /*交易提醒标题*/,
      "content": "买家「骚军」提醒你确认收款订单" /*交易提醒内容*/,
      "target_id": 0 /*交易ID*/,
      "target_type": "ctc" /*交易消息*/,
      "type": "remind",
      "action": "1",
      "sender_id": 0,
      "extra": null,
      "created_at": "2020-08-14 17:22:21" /*时间*/,
      "system": null
    },
    {
      "id": 2,
      "title": "",
      "content": "",
      "target_id": 1,
      "target_type": "system" /*系统消息*/,
      "type": "announce",
      "action": "system",
      "sender_id": 0,
      "extra": null,
      "created_at": "2020-08-14 16:51:16",
      "system": {
        "id": 1,
        "title": "系统消息" /*消息标题*/,
        "content": "系统消息" /*消息内容*/
      },
      {
      "id": 4,
      "user_id": 3,
      "content": "",
      "type": "remind",
      "target_id": 2,
      "target_type": "user",
      "action": "follow" /*关注*/,
      "sender_id": 3,
      "sender_role": 0,
      "is_read": 0,
      "extra": [],
      "created_at": "2020-06-12 10:38:36" /*关注时间*/,
      "updated_at": "2020-06-12 10:38:36",
      /*关注人信息*/
      "sender": {
        "id": 3,
        "name": "0CGLAS",
        "avatar": null,
        "is_follow": false /*是否关注他/她*/
      }
    },
    {
      "id": 7,
      "user_id": 3,
      "content": "",
      "type": "remind",
      "target_id": 2,
      "target_type": "video" /*视频*/,
      "action": "comment" /*存在两种情况:reply-回复(某人回复了你)/comment-评论(某人评论了你)*/,
      "sender_id": 2,
      "sender_role": 0,
      "is_read": 0,
      "extra": {
        "video_id": 2 /*视频ID*/,
        "comment_id": 6 /*评论ID*/,
        "video_cover": "cover.png" /*视频封面*/,
        "comment_content": "评论内容",
        "reply_id": 1 /*回复ID*/,
        "reply_content": "回复内容" /*回复内容*/
      },
      "created_at": "2020-06-12 10:41:34",
      "updated_at": "2020-06-12 10:41:34",
      "sender": {
        "id": 2,
        "name": "张三",
        "avatar": null
      }
    },
    {
      "id": 9,
      "user_id": 3,
      "content": "",
      "type": "announce",
      "target_id": 8,
      "target_type": "system",
      "action": "system",
      "sender_id": 0,
      "sender_role": 1,
      "is_read": 0,
      "extra": null,
      /*系统消息内容*/
      "system": {
        "id": 8,
        "content": "欢迎来到火推" /*消息内容*/,
        "extra": null
      },
      "created_at": "2020-06-12 10:43:59",
      "updated_at": "2020-06-12 10:43:59",
      "sender": null
    },
    {
      "id": 3,
      "user_id": 3,
      "content": "",
      "type": "remind",
      "target_id": 2,
      "target_type": "video",
      "action": "like" /*点赞*/,
      "sender_id": 2,
      "sender_role": 0,
      "is_read": 0,
      "extra": {
        "video_id": 2 /*视频ID*/,
        "video_cover": "cover.png" /*视频封面*/
      },
      "created_at": "2020-06-12 10:38:36",
      "updated_at": "2020-06-12 10:38:36",
      /*点赞人信息*/
      "sender": {
        "id": 2,
        "name": "张三",
        "avatar": null
      }
    },
    {
      "id": 1,
      "user_id": 3,
      "content": "",
      "type": "remind",
      "target_id": 33,
      "target_type": "wallet",
      "action": "reward" /*打赏*/,
      "sender_id": 2,
      "sender_role": 0,
      "is_read": 0,
      "extra": {
        "video_id": 1,
        "reward_num": "100.0000" /*打赏金额*/,
        "video_cover": "http://v29-dy.ixigua.com/e6181b48fe44ccf20cd4d8f6005bbb7f/5ed87403",
        "reward_currency": "hd"
      },
      "created_at": "2020-06-11 16:28:50",
      "updated_at": "2020-06-11 16:28:50",
      /*打赏者*/
      "sender": {
        "id": 2,
        "name": "张三",
        "avatar": null
      }
    }
    }
  ]
}
```

## 消息未读数

**方式**

`GET`

**路径**

`/api/notifies/unread`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "counts": 0 /*未读数量*/
  }
}
```

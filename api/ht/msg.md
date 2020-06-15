# 消息

## 消息列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| types  | string |  是  | 消息类型: follow-关注/system-系统消息/commcnet,reply-评论和回复/like-点赞 |
| limit  |  int   |  是  |                             条目数 默认为 20                              |
| offset |  int   |  是  |                              条目数 默认为 0                              |

**路径**

`/api/messages`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
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
  ]
}
```

## 消息未读数

**方式**

`GET`

**路径**

`/api/message-count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    /*点赞*/
    "like": {
      "unread": 1, //未读数量
      "newest": {
        "id": 3,
        "user_id": 3,
        "content": "",
        "type": "remind",
        "target_id": 2,
        "target_type": "video",
        "action": "like",
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
      }
    },
    /*关注*/
    "follow": {
      "unread": 1, //未读数量
      "newest": {
        "id": 4,
        "user_id": 3,
        "content": "",
        "type": "remind",
        "target_id": 3,
        "target_type": "user",
        "action": "follow" /*关注*/,
        "sender_id": 3,
        "sender_role": 0,
        "is_read": 0,
        "extra": [],
        "created_at": "2020-06-12 10:38:36",
        "updated_at": "2020-06-12 10:38:36",
        "sender": {
          /*关注人信息*/
          "id": 3,
          "name": "0CGLAS",
          "avatar": null
        }
      }
    },
    "reward": {
      "unread": 2, // 未读数量
      "newest": {
        "id": 2,
        "user_id": 3,
        "content": "",
        "type": "remind",
        "target_id": 35,
        "target_type": "wallet",
        "action": "reward" /*打赏*/,
        "sender_id": 2,
        "sender_role": 0,
        "is_read": 0,
        "extra": {
          "video_id": 1 /*视频ID*/,
          "reward_num": "100.0000" /*打赏金额*/,
          "video_cover": "http://v29-dy.ixigua.com/e6181b48fe44ccf20cd4d8f6005bbb7f/5ed87403" /*视频封面*/,
          "reward_currency": null
        },
        "created_at": "2020-06-11 16:29:47",
        "updated_at": "2020-06-11 16:29:47",
        "sender": {
          "id": 2,
          "name": "张三",
          "avatar": null
        }
      }
    },
    /*系统消息*/
    "system": {
      "unread": 1,
      "newest": {
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
        "system": {
          "id": 8,
          "content": "欢迎来到火推" /*消息内容*/,
          "extra": null
        },
        "created_at": "2020-06-12 10:43:59",
        "updated_at": "2020-06-12 10:43:59",
        "sender": null
      }
    },
    /*评论*/
    "comment": {
      "unread": 3, // 未读数量
      "newest": {
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
          "reply_content": "回复内容"
        },
        "created_at": "2020-06-12 10:41:34",
        "updated_at": "2020-06-12 10:41:34",
        "sender": {
          "id": 2,
          "name": "张三",
          "avatar": null
        }
      }
    },
    /*打赏*/
    "reward": {
      "unread": 2,
      "newest": {
        "id": 2,
        "user_id": 3,
        "content": "",
        "type": "remind",
        "target_id": 35,
        "target_type": "wallet",
        "action": "reward",
        "sender_id": 2,
        "sender_role": 0,
        "is_read": 0,
        "extra": {
          "video_id": 1,
          "reward_num": "100.0000" /*打赏金额*/,
          "video_cover": "http://v29-dy.ixigua.com/e6181b48fe44ccf20cd4d8f6005bbb7f/5ed87403",
          "reward_currency": "hd" /*打赏代币*/
        },
        "created_at": "2020-06-11 16:29:47",
        "updated_at": "2020-06-11 16:29:47",
        /*打赏人*/
        "sender": {
          "id": 2,
          "name": "张三",
          "avatar": null
        }
      }
    }
  }
}
```

## 阅读消息

**方式**

`GET`

**参数**

| 名称  |  类型  | 必须 |                                   说明                                    |
| :---: | :----: | :--: | :-----------------------------------------------------------------------: |
| types | string |  是  | 消息类型: follow-关注/system-系统消息/commcnet,reply-评论和回复/like-点赞 |

**路径**

`/api/notifies/read`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

# 消息

## 消息列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |               说明               |
| :----: | :----: | :--: | :------------------------------: |
|  type  | string |  是  | 消息类型: system-系统 order-订单 |
| limit  |  int   |  是  |         条目数 默认为 20         |
| offset |  int   |  是  |         条目数 默认为 0          |

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
      "id": 1,
      "title": "哈哈哈哈" /*消息标题*/,
      "type": "system" /*消息类型:system-系统消息 order-订单消息*/,
      "content": "测试消息" /*消息内容*/,
      "created_at": "2020-05-05 11:02:22",
      "read_status": 1
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
    /*order-订单消息 system-系统*/
    "order": {
      "unread": 0 /*未读数量*/,
      "newest": null /*最新一条消息内容*/
    },
    "system": {
      "unread": 0,
      "newest": "哈哈哈哈"
    },
    "count": 0
  }
}
```

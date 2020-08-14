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

# 消息

## 消息列表

`admin/message/`

**请求方法**

`GET`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |                        说明                         |
| :----------: | :----: | :--: | :--: | :-------------------------------------------------: |
| message_type | string |  无  |  否  |     消息类型(system: 系统消息 order: 订单消息)      |
|    title     | string |  无  |  否  |                      消息标题                       |
| sender_role  | string |  无  |  否  | 发送者类型(admin: 管理员 merchant: 商家 user: 用户) |
| receiver_id  |  int   |  15  |  否  |                      接受者 ID                      |
|    limit     |  int   |  15  |  否  |                      每页条数                       |

**SUCCESS 状态码**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "消息" /*消息标题*/,
      "content": "消息内容" /*消息内容*/,
      "sender": 1 /*发送者ID*/,
      "sender_role": "admin" /*admin 管理员发送 merchant 商家发送*/,
      "receiver": {
        // 为null是是全体成员
        "id": 14,
        "name": "QAZXSW#" /*接受者*/
      },
      "type": "system" /* system 系统 order 订单消息*/,
      "created_at": "2019-01-27 11:57:42",
      "updated_at": "2019-01-27 11:57:44",
      "sender_name": "超级管理员" /*管理员名称*/
    }
  ],
  "first_page_url": "http://comc.com/admin/message?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/message?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/message",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 发送消息

`admin/message/`

**请求方法**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |      说明       |
| :------: | :----: | :--: | :--: | :-------------: |
| content  | string |  无  |  是  |    消息内容     |
|  title   | string |  无  |  是  |    消息标题     |
| receiver | string |  是  |  否  | 接受者(0: 全部) |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "发送成功"
}
```

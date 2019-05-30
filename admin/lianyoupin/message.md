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

## 商品价格通知

`/admin/message/notices`

**请求方法**

`GET`

**请求参数**

|  名称   | 类型 | 默认 | 必须 |               说明               |
| :-----: | :--: | :--: | :--: | :------------------------------: |
|  limit  | int  |  20  |  否  |             每页条数             |
| is_read | int  |  0   |  否  | 0: 未阅读 1: 已阅读 -1: 查看全部 |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "商品价格变更通知", //  消息标题
      "type": "goods", // 消息类型
      "content": "商城现金区商品“dasda”价格已更新成1元，为了避免利润的损失，请及时更新兑换区所对应的商品价格。", // 消息内容
      "target": "goods", // 消息目标
      "target_id": 2, // 目标ID
      "reader": 1, // 阅读者ID
      "read_status": 0, // 阅读状态 0: 未阅读
      "created_at": "2019-03-01 10:08:23", // 创建时间
      "updated_at": "2019-03-01 10:08:23",
      "admin": {
        "id": 1,
        "name": "阅读者"
      }
    }
  ],
  "first_page_url": "http://comc.com/admin/message/notices?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/message/notices?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/message/notices",
  "per_page": 20,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 获取消息未阅读数量

`admin/message/notice/count`

**请求方式**

`GET`

**请求参数**

`无`

**返回体**

```json
{
  "count": 1 // 未读数量
}
```

## 阅读消息

`admin/message/notice/read`

**请求方式**

`POST`

**请求参数**

|    名称    |      类型      | 默认 | 必须 |               说明                |
| :--------: | :------------: | :--: | :--: | :-------------------------------: |
| notice_ids | `string|array` |  无  |  是  | `all`: 全部阅读 `array`: 部分阅读 |

**返回体**

```json
{
  "message": "操作成功"
}
```

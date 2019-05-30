# 消息中心

## 消息未读数

**方式**

`GET`

**路径**

`/api/v1/message/count`

**参数**

无

**响应**

`Status code 200`

`code 4001 请求繁忙不做任何处理`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    /*订单消息*/
    "order": {
      "unread": 1 /*未读数量*/,
      "newest": "订单已发货，订单号是XSSSSSSX" /*最新未读消息*/
    },
    /*系统消息*/
    "system": {
      "unread": 1 /*未读数量*/,
      "newest": "系统维护" /*最新未读消息*/
    },
    "count": 2 /*总为读消息*/
  }
}
```

## 消息列表

**方式**

`GET`

**路径**

`/api/v1/messages`

**参数**

|  名称  |  类型  | 必须 |                   说明                   |
| :----: | :----: | :--: | :--------------------------------------: |
| offset |  int   |  是  |                  偏移量                  |
| limit  |  int   |  是  |                  条目数                  |
|  type  | string |  是  | 消息类型: order-订单消息 system-系统消息 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 3,
      "title": "订单已发货，订单号是XSSSSSSX" /*消息标题*/,
      "type": "order" /*消息类型 order-订单 sysytem-系统*/,
      "content": "订单已发货，订单号是XSSSSSSX" /*消息内容*/,
      "read_status": 0 /*阅读状态 0-未阅读 1-已阅读*/,
      "created_at": "2019-01-22 01:40:20" /*消息发送时间*/
    }
  ]
}
```

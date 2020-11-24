# 消息通知

## 列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数 默认为 20 |
| offset | int  |  是  | 条目数 默认为 0  |

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
      "title": "可以的",
      "type": "system",
      "content": "可以的",
      "created_at": "2020-12-12 12:12:12",
      "read_status": 1
    }
  ]
}
```

## 消息统计

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
    "count": 0 /*未读数*/
  }
}
```

## 消息清除

**方式**

`DELETE`

**路径**

`/api/message-clear`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

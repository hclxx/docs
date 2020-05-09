# 能量

## 能量日志

**方式**

`GET`

**路径**

`/api/power/logs`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数 默认为 20 |
| offset | int  |  是  | 条目数 默认为 0  |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 5,
      "title": "邀请好友" /*标题*/,
      "amount": 20 /*能量值*/,
      "action": 1 /*收支状态:1-收入/2-支出*/,
      "created_at": "2020-05-07 17:13:04" /*时间*/
    }
  ]
}
```

## 能量排行

**方式**

`GET`

**路径**

`/api/power/ranking`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "汪海均" /*名称*/,
        "avatar": "汪海均头像.png",
        "gender": 1 /*性别*/,
        "power": 13 /*能量值*/,
        "rank": 1 /*排行名次*/
      }
    ],
    /*自身排行名次*/
    "self": {
      "id": 1,
      "name": "胡昊",
      "avatar": "张三",
      "power": 13,
      "sex": null,
      "rank": 1
    }
  }
}
```

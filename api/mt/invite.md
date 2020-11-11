# 邀请

## 邀请列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |          说明          |
| :----: | :--: | :--: | :--------------------: |
| level  | int  |  否  | 邀请等级:1-一级/2-二级 |
| limit  | int  |  是  |    条目数 默认为 20    |
| offset | int  |  是  |    条目数 默认为 0     |

**路径**

`/api/invite/records`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 7,
      "name": "0CGLAX",
      "avatar": null,
      "phone": "138****2306",
      "user_id": 7,
      "parent_id": 1,
      "pparent_id": 0,
      "created_at": "2020-11-10 16:55:08" /*绑定时间*/,
      "self_usdt": "0.0000" /*贡献USDT数量*/
    }
  ]
}
```

## 邀请统计

**方式**

`GET`

**路径**

`/api/invite/count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "directCount": 0 /*直推数量*/,
    "indirectCount": 1 /*二级推荐数量*/,
    "usdtTotal": "100" /*USDT 收益数量*/
  }
}
```

## 收益排行

**方式**

`GET`

**路径**

`/api/invite/ranks`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "list": [
      {
        "id": 5,
        "name": "0CGLAM" /**/,
        "avatar": null /*头像*/,
        "direct_usdt": "2000.0000" /*USDT数量*/,
        "rank": 1 /*名次*/
      }
    ],
    "self": {
      "id": 7,
      "name": "0CGLAX",
      "rank": 0 /*0-无排名呈现(-)*/,
      "avatar": null
    }
  }
}
```

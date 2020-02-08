# 淘宝客业绩

## 团队业绩

`api/v1/taobaoke/performances`

**请求方法**

`GET`

**参数**
无

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "month": "0.00" /*个人月消费*/,
    "total": "0.00" /*个人消费总额*/,
    "fans_month": "0.00" /*当月粉丝团消费额*/,
    "fans_total": "0.00" /*粉丝团消费总额*/,
    "fans_num": "0" /*粉丝数量*/
  }
}
```

## 业绩列表

`api/v1/taobaoke/performance/list`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |      说明      |
| :----: | :--: | :--: | :------------: |
| limit  | int  |  是  | 条目数 默认 20 |
| offset | int  |  是  | 偏移量 默认 0  |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "user_id": 3,
      "parent_user_id": 2,
      "count": "4" /*贡献值*/,
      "user": {
        "id": 3,
        "name": "哈哈哈" /*粉丝名称*/,
        "avatar": null /*头像*/,
        "member_id": 1,
        "member": {
          "id": 1,
          "icon": "http://avatar.comc/user1_avatar.png" /*会员图标*/,
          "name": "普通会员" /*会员名称*/,
          "level": "common" /*会员等级*/
        }
      }
    }
  ]
}
```

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
    "fans_total": "0.00" /*粉丝团消费总额*/
  }
}
```

## 钱包流水列表

`api/v1/taobaoke/performance/list`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| limit  | int  |  是  |                    条目数 默认 20                    |
| offset | int  |  是  |                    偏移量 默认 0                     |
|  type  | int  |  是  | 钱包日志类型： fans-粉丝收益 bonus-分红收益 all-全部 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "count": 4 /*贡献值*/,
      "id": 3,
      "name": "哈哈哈" /*姓名*/,
      "avatar": null /*头像*/,
      "icon": "11" /*等级图标*/
    }
  ]
}
```

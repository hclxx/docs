# 挖矿

## 挖矿记录

`admin/ores`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |            说明             |
| :---: | :----: | :--: | :--: | :-------------------------: |
| limit |  int   |  15  |  否  |          每页条数           |
| start | string |  无  |  否  | 开始时间 `格式: 2019-01-01` |
|  end  | string |  无  |  否  | 结束时间 `格式: 2019-01-01` |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 2,
      "power_total": 3300, // 平台总矿力
      "active_user_num": 27, // 活跃用户
      "dig_total": "1.78640000", // 已领取数量
      "provide_num": "17.89996766" // 总发放数量
    }
  ],
  "first_page_url": "http://comc.com/admin/ores?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/ores?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/ores",
  "per_page": 15,
  "prev_page_url": null,
  "to": 7,
  "total": 7
}
```

## 用户领取记录

`admin/ores/{oreTask}`

**请求方法**

`GET`

**返回体**

```json
[
  {
    "not_get": 0, // 已领取
    "already_get": 1.0208, // 未领取
    "user": {
      // 用户信息
      "id": 1,
      "name": "13",
      "phone": "18728624682",
      "avatar": null
    }
  }
]
```

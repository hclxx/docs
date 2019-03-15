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

**请求参数**

| 名称  | 类型 | 默认 | 必须 |   说明   |
| :---: | :--: | :--: | :--: | :------: |
| limit | int  |  15  |  否  | 每页条数 |

**返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 72,
      "user_id": 1,
      "task_id": 9,
      "time": "2019-03-14 23:00:02",
      "base_two": "0.00000000",
      "num": "0.00166666", // 数量
      "status": 0, // 0: 未领取 1: 已领取
      "created_at": "2019-03-15 10:11:06",
      "updated_at": "2019-03-15 10:11:06",
      "user": {
        "id": 1,
        "name": "测试", // 用户昵称
        "phone": "18728624682", // 手机号
        "avatar": "http://szl.qingchuanren.com/59ccae9ca7343be98d392d85114692c8.png" // 头像
      }
    }
  ],
  "first_page_url": "http://shop.igoods.io/admin/ores/9?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://shop.igoods.io/admin/ores/9?page=1",
  "next_page_url": null,
  "path": "http://shop.igoods.io/admin/ores/9",
  "per_page": 15,
  "prev_page_url": null,
  "to": 9,
  "total": 9
}
```

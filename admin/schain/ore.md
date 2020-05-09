# 矿石管理

## 矿石列表

`admin/ores`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  start |   time |  无  |  否  |         开始时间         |
|   end  |   time |  无  |  否  |       结束时间        |
| page  |  int   |  无  |  否  |       当前页数       |
| limit  |  int   |  15  |  是 |       每页条数       |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "power_total": 3300,  //  总矿力
                "active_user_num": 0, //  活跃人数
                "dig_total": "0.00000000",    //  已领取数
                "created_at": "2019-03-15 11:11:14",
                "provide_num": "0.46247066" //  总发放数
            }
        ],
        "first_page_url": "http://imeet.test/admin/ore?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/ore?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/ore",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 领取矿石详情

`admin/ores/{id}`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  否  |       当前页数       |
| limit  |  int   |  15  |  是 |       每页条数       |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "task_id": 1,
                "time": "2019-05-30 09:45:11",/*挖矿日期*/
                "base_two": "0.00369600",/*基数二*/
                "num": "0.25520000",/*矿石数量*/
                "status": 1,/*'领取状态:0-未领取 1-已领取'*/
                "created_at": "2019-03-14 16:07:28",
                "updated_at": "2019-03-14 16:52:06",
                "user": {
                    "id": 1,
                    "name": "J4EUIK",
                    "tel": "18781601153",
                    "avatar": "http://img1.imgtn.bdimg.com/it/u=2804290436,296747495&fm=26&gp=0.jpg"
                }
            }
        ],
        "first_page_url": "http://imeet.test/admin/ore/1?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/ore/1?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/ore/1",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

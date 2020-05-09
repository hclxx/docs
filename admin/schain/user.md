# 用户管理

## 用户列表

`/admin/users`

**请求方式**

`GET`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |   说明   |
| :--------: | :----: | :--: | :--: | :------: |
|    name    | string |  无  |  否  |   昵称   |
|   phone    | string |  无  |  否  |  手机号  |
|  page      |  int   |  1  |  是  |            当前页数                |
|  limit      |  int   |  20  |  是  |             每页条数                     |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 9,
                "name": "yanfan5",/*姓名*/
                "avatar": null,/*头像*/
                "gender": 1,/*性别*/
                "phone": "187****1158",/*电话*/
                "code": "OJ9IBC",/*邀请码*/
                "power": 0,/*能量*/
                "collection_time": null,/*一键收矿到期时间*/
                "market_id": 1,/*市场代理等级*/
                "created_at": "2020-05-07 08:21:15",
                "updated_at": "2020-05-08 03:12:54",
                "tel": "18781601158",/*电话*/
                "market": {/**/
                    "id": 1,
                    "name": "零售商",/*市场代理名称*/
                    "icon": "http:\/\/"/*市场代理图标*/
                }
            },
            {
                "id": 8,
                "name": "yanfan4",
                "avatar": null,
                "gender": 1,
                "phone": "187****1157",
                "code": "L9BAKV",
                "power": 0,
                "collection_time": null,
                "market_id": 1,
                "created_at": "2020-05-07 08:20:53",
                "updated_at": "2020-05-07 08:20:53",
                "tel": "18781601157",
                "market": {
                    "id": 1,
                    "name": "零售商",
                    "icon": "http:\/\/"
                }
            },
            {
                "id": 7,
                "name": "yanfan3",
                "avatar": null,
                "gender": 1,
                "phone": "187****1156",
                "code": "E8D8FP",
                "power": 0,
                "collection_time": null,
                "market_id": 3,
                "created_at": "2020-05-07 08:20:38",
                "updated_at": "2020-05-07 08:53:40",
                "tel": "18781601156",
                "market": {
                    "id": 3,
                    "name": "运营中心",
                    "icon": "http:\/\/xxx"
                }
            }
        ],
        "first_page_url": "http:\/\/storage.name\/admin\/users?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http:\/\/storage.name\/admin\/users?page=1",
        "next_page_url": null,
        "path": "http:\/\/storage.name\/admin\/users",
        "per_page": 15,
        "prev_page_url": null,
        "to": 6,
        "total": 6
    }
}
```

## 创建用户

`/admin/users`

**请求方法**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |          说明          |
| :------: | :----: | :--: | :--: | :--------------------: |
|   name   | string |  无  |  是  |          昵称          |
|  avatar   | string |  无  |  无  |         头像         |
|  phone   | string |  无  |  是  |         手机号         |
|   code    |  int   |  无  |  是  |          性别          |
| password | string |  无  |  否  | 性别: 0-未知 1-男 2-女 |

**返回体**

```json
{
  "msg": "创建成功",
  "code": 0,
  "data": null
}
```

## 用户修改

`/admin/users/{user}`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |        说明         |
| :--------: | :----: | :--: | :--: | :-----------------: |
|    name    | string |  无  |  否  |        昵称         |
| avatar | string |  无  |  否  |        头像         |
|   market_id   |  int   |  无  |  否  | 市场代理等级id  |
|  password  | string |  无  |  否  | 密码 长度在 6-20 位 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 查询父级user

`/admin/users/{user}/parent`

**请求方法**

`GET`

**请求参数**

`无`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 8,
        "name": "yanfan4",
        "phone": "18781601157",
        "avatar": null
    }
}
```

## 查询子集user

`/admin/users/{user}/subset`

**请求方法**

`GET`

**请求参数**

`无`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "items": {
            "pid": 0,
            "pname": "",
            "avatar": "",
            "child": [
                {
                    "id": 5,
                    "name": "yanfan1",
                    "phone": "18781601154",
                    "avatar": null,
                    "market_performance": {/*市场业绩(当子集无也业绩时,该字段为null)*/
                        "id": 5,
                        "user_id": 5,
                        "parent_id": 1,
                        "self_num": 0,/*自身销售量*/
                        "direct_num": 0,/*直推销售量*/
                        "team_num": 300,/*市场销售量*/
                        "max": 1,/*是否为市场大区 0-否 1-是*/
                        "created_at": "2020-05-08 02:42:21",
                        "updated_at": "2020-05-08 03:17:39"
                    }
                }
            ]
        },
        "count": 1,/*直接邀请人数*/
        "total_count": 5,/*团队人数*/
    }
}
```

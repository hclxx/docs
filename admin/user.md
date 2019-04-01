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
|   email    | string |  无  |  否  |   邮箱   |
| target_id  |  int   |  无  |  否  | 用户 ID  |
|   limit    |  int   |  无  |  否  | 每页条数 |
| start_time | string |  无  |  否  | 开始时间 |
|  end_time  | string |  无  |  否  | 结束时间 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "大萨达", // 昵称
      "sex": 0, // 性别: 0-未知 1-男 2-女
      "email": "123@qq.com", // 邮箱
      "phone": "13222222222", // 手机号
      "avatar": "333", // 头像
      "code": "3333", // 邀请码
      "calculate": 333, // 算力值
      "last_time": "2019-01-22 18:48:59", // 最后登入时间
      "last_ip": "127.0.0.1", // 最后登入IP
      "status": 0, // 状态 0-正常 1-拉黑
      "created_at": "2019-01-22 18:49:02",
      "updated_at": "2019-01-22 18:49:03"
    }
  ],
  "first_page_url": "http://comc.com/admin/users?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/users?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/users",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

**ERROR 返回体**

`无`

## 用户修改

`/admin/users/{user}`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |        说明         |
| :--------: | :----: | :--: | :--: | :-----------------: |
|    name    | string |  无  |  否  |        昵称         |
|   phone    | string |  无  |  否  |       手机号        |
|   email    | string |  无  |  否  |        邮箱         |
| avatar_url | string |  无  |  否  |        头像         |
|   status   |  int   |  无  |  否  | 状态 0-正常 1-拉黑  |
|  password  | string |  无  |  否  | 密码 长度在 6-20 位 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "手机号已存在"
}
```

## 获取单个用户信息

`/admin/users/{user}`

**请求方式**

`GET`

**请求参数**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "id": 1,
  "name": "111",
  "sex": 0,
  "email": "123@qq.com",
  "phone": "13222222222",
  "avatar": "1",
  "code": "ASDFGH",
  "bio": null,
  "power": 0,
  "last_time": "2019-01-23 18:25:15",
  "last_ip": "127.0.0.1",
  "status": 0,
  "created_at": null,
  "updated_at": null
}
```

**ERROR 返回体**

`无`

## 创建用户

`/admin/users`

**请求方法**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |          说明          |
| :------: | :----: | :--: | :--: | :--------------------: |
|   name   | string |  无  |  否  |          昵称          |
|  phone   | string |  无  |  否  |         手机号         |
|  email   | string |  无  |  否  |          邮箱          |
|  status  |  int   |  无  |  否  |   状态 0-正常 1-拉黑   |
|   sex    |  int   |  无  |  否  |          性别          |
| password | string |  无  |  否  | 性别: 0-未知 1-男 2-女 |

**返回体**

```json
{
  "message": "创建成功"
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
    "id": 2,
    "name": "13",
    "sex": 0,
    "email": "1986513441@qq.com",
    "phone": "18728624683",
    "avatar": null,
    "code": "123",
    "bio": null,
    "power": 3300,
    "last_time": "2019-03-08 17:23:55",
    "last_ip": null,
    "status": 0,
    "created_at": "2019-03-08 17:23:59",
    "updated_at": "2019-03-08 17:27:39"
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
[
    {
        "id": 2,
        "name": "1222",
        "sex": 0,
        "email": "1986513441@qq.com",
        "phone": "18728624683",
        "avatar": null,
        "code": "123",
        "bio": null,
        "power": 3300,
        "last_time": "2019-03-08 17:23:55",
        "last_ip": null,
        "status": 0,
        "created_at": "2019-03-08 17:23:59",
        "updated_at": "2019-03-08 17:27:39"
    },
    {
        "id": 3,
        "name": "1333",
        "sex": 0,
        "email": "1986513441@qq.com",
        "phone": "18728624684",
        "avatar": null,
        "code": "123",
        "bio": null,
        "power": 3300,
        "last_time": "2019-03-08 17:23:55",
        "last_ip": null,
        "status": 0,
        "created_at": "2019-03-08 17:23:59",
        "updated_at": "2019-03-08 17:27:39"
    }
]
```

## 用户钱包流水

`/admin/wallets/:user/logs`

**请求方法**

`GET`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |          说明          |
| :------: | :----: | :--: | :--: | :--------------------: |
|   limit   | int |  无  |  否  |          条目数          |
|  action   | int |  无  |  否  |         1-收入 2-支出         |
|  currency   | string |  无  |  否  |         代币类型: comc, ore |
|  start   | string |  无  |  否  |         时间筛选 开始时间 |
|  end   | string |  无  |  否  |         时间筛选 结束时间 |

**返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "title": "提现", /*标题*/
            "user_id": 2,
            "target_user_id": 2,
            "target_type": "cash",
            "target_id": 0,
            "amount": "110.00000000", /*金额*/
            "balance": "9890.00000000",
            "curr_balance": "10000.00000000",
            "currency": "comc",/*代币: comc  ore*/
            "action": 2,/* 1-收入 2-支出*/
            "status": 0, /* 0-待处理 1-已处理 2-失败*/
            "type": 10,
            "extend": null,
            "created_at": "2019-03-15 10:11:11",/*时间*/
            "updated_at": "2019-03-15 10:11:11"
        }
    ],
    "first_page_url": "http://comc-mall-amin.test/admin/wallets/2/logs?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc-mall-amin.test/admin/wallets/2/logs?page=1",
    "next_page_url": null,
    "path": "http://comc-mall-amin.test/admin/wallets/2/logs",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

## 用户钱包资产明细

`/admin/wallets/:user/detail`

**请求方法**

`GET`

**请求参数**

无

**返回体**

```json
{
    "comc": [
        {
            "id": 1,
            "user_id": 2,
            "amount": "9890.00000000", /*COMC钱包金额*/
            "expend_total": "110.00000000",/*COMC钱包总支出*/
            "income_total": "0.00000000",/*COMC钱包总收入*/
            "waited_total": "0.00000000",/*COMC钱包待反还*/
            "currency": "comc",
            "status": 0,
            "address": "0x1E2F8c2b4B659732b9D4989Dc28B5EdF1EB253e0",
            "created_at": "2019-03-13 18:43:48",
            "updated_at": "2019-03-15 10:11:11"
        }
    ],
    "ore": [
        {
            "id": 2,
            "user_id": 2,
            "amount": "9890.00000000", /*矿石钱包金额*/
            "expend_total": "110.00000000",/*矿石钱包总支出*/
            "income_total": "0.00000000",/*矿石钱包总收入*/
            "waited_total": "0.00000000",/*矿石钱包待反还*/
            "currency": "ore",
            "status": 0,
            "address": "",
            "created_at": "2019-03-13 18:44:04",
            "updated_at": "2019-03-13 18:44:04"
        }
    ]
}
```

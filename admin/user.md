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

|    名称    |  类型  | 默认 | 必须 |        说明        |
| :--------: | :----: | :--: | :--: | :----------------: |
|    name    | string |  无  |  否  |        昵称        |
|   phone    | string |  无  |  否  |       手机号       |
|   email    | string |  无  |  否  |        邮箱        |
| avatar_url | string |  无  |  否  |        头像        |
|   status   |  int   |  无  |  否  | 状态 0-正常 1-拉黑 |

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

# 管理员

## 登入

`admin/auth/login`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |               说明                |
| :------: | :----: | :--: | :--: | :-------------------------------: |
|  email   | string |  无  |  否  |  邮箱登入 phone 字段不存在则必须  |
|  phone   | string |  无  |  否  | 手机号登入 email 字段不存在则必须 |
| password | string |  无  | 必须 |             登入密码              |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "登入成功"
}
```

**ERROR 返回体**

```json
{
  "message": "账号或者密码错误"
}
```

## 登出

`admin/auth/logout`

**请求方式**

`PUT`

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "登入成功"
}
```

## 管理员列表

`admin/admin`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |         名称         |
| phone  | string |  无  |  否  |        手机号        |
| email  | string |  无  |  否  |         邮箱         |
| status |  int   |  无  |  否  | 状态 1: 正常 2: 禁用 |
| limit  |  int   |  无  |  15  |       每页条数       |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "超级管理员" /* 用户名称 */,
      "phone": "13111111111" /*手机号*/,
      "email": "root@qq.com" /*邮箱*/,
      "status": 1 /* 1: 正常 2: 禁用*/,
      "created_at": "2019-01-08 10:10:07" /*创建时间*/,
      "updated_at": "2019-01-08 10:10:07"
    }
  ],
  "first_page_url": "http://comc.com/admin/administrator?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/administrator?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/administrator",
  "per_page": 15,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

## 创建管理员

`admin/admin`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |
|  phone   | string |  无  |  否  | 手机号, email 字段不出现,此字段必须 |
|  email   | string |  无  |  否  | 邮箱 , phone 字段不出现,此字段必须  |
|  status  |  int   |  无  |  是  |        状态 1: 正常 2: 禁用         |
| password | string |  无  |  是  |           密码 长度 6-16            |

## 管理员详情

`admin/admin/{admin}`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 放回体**

```json
[
  {
    "id": 1,
    "perms": "users" /*key*/,
    "name": "用户" /*名称*/,
    "icon": "users" /*图标*/,
    "url": null,
    "order": 0,
    "type": 0,
    "pid": 0,
    "show": "1",
    "created_at": "2019-01-21 14:16:17",
    "updated_at": "2019-01-21 14:16:17"
  },
  {
    "id": 2,
    "perms": "users:list",
    "name": "用户用户列表",
    "icon": "users",
    "url": null,
    "order": 0,
    "type": 1,
    "pid": 1,
    "show": "1",
    "created_at": "2019-01-21 14:16:17",
    "updated_at": "2019-01-21 14:16:17"
  }
]
```

## 修改管理员

`admin/admin/{admin}`

**请求方法**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |                名称                 |
|  phone   | string |  无  |  否  | 手机号, email 字段不出现,此字段必须 |
|  email   | string |  无  |  否  | 邮箱 , phone 字段不出现,此字段必须  |
|  status  |  int   |  无  |  是  |        状态 1: 正常 2: 禁用         |
| password | string |  无  |  是  |           密码 长度 6-16            |
| role_ids | array  |  无  |  是  |           角色操作权限 ID           |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 失败返回体**

```json
{
  "message": "修改失败"
}
```

## 删除管理员

`admin/admin/{admin}`

**请求方法**

`DELETE`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "删除成功"
}
```

## 当前管理员信息

`/admin/admin/info`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "id": 1,
  "name": "超级管理员",
  "phone": "13111111111",
  "email": "root@qq.com",
  "status": 1,
  "created_at": "2019-01-08 10:10:07",
  "updated_at": "2019-01-08 10:10:07"
}
```

## 获取菜单栏

`/admin/menu/nav`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "menu_list": [
    {
      "admin_id": 1,
      "role_id": 1,
      "perms": "users",
      "id": 1,
      "name": "用户",
      "type": 0,
      "icon": "users",
      "pid": 0,
      "list": [
        {
          "admin_id": 1,
          "role_id": 2,
          "perms": "users:list",
          "id": 2,
          "name": "用户用户列表",
          "type": 1,
          "icon": "users",
          "pid": 1,
          "list": []
        }
      ]
    }
  ],
  "perms": ["users", "users:list"]
}
```

## 清除当前管理员权限缓存

`/admin/menu/cache`

**请求方式**

`put`

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "清除成功"
}
```

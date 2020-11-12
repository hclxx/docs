# 管理员信息

## 管理员列表

`admin/admins`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |         名称         |
| phone  | string |  无  |  否  |        手机号        |
| email  | string |  无  |  否  |         邮箱         |
| state |  int   |  无  |  否  | 状态 0: 正常 1: 禁用 |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  15  |   是 |       每页条数       |

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
                "name": "root",
                "phone": "18781601153",
                "email": "root@qq.com",
                "admin_token": null,
                "state": 1,
                "created_at": "2019-05-28 09:58:11",
                "updated_at": "2019-05-28 09:58:11"
            },
            {
                "id": 2,
                "name": "admin2",
                "phone": "18781601154",
                "email": "root2@qq.com",
                "admin_token": null,
                "state": 1,
                "created_at": "2019-05-28 10:05:24",
                "updated_at": "2019-05-28 10:05:24"
            }
        ],
        "first_page_url": "http://imeet.test/admin/admin?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/admin?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/admin",
        "per_page": 15,
        "prev_page_url": null,
        "to": 3,
        "total": 3
    }
}
```

## 创建管理员

`admin/admins`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |
|  phone   | string |  无  |  否  | 手机号 |
|  email   | string |  无  |  否  | 邮箱   |
|  state  |  int   |  无  |  是  |        状态 0: 正常 1: 禁用         |
| password | string |  无  |  是  |           密码 长度 6-16            |

**SUCCESS 返回体**

```json
{
    "msg": "创建管理员成功",
    "code": 0,
    "data": null
}
```

## 管理员详情

`admin/admins/{id}`

**请求方法**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "name": "root",
        "phone": "18781601153",
        "email": "330483691@qq.com",
        "admin_token": null,
        "state": 1,   //  状态:0-正常,1-禁用
        "created_at": "2019-05-28 09:58:11",
        "updated_at": "2019-05-28 09:58:11",
        "roles": [
            {
                "id": 1,
                "name": "总管理员",
                "alias": "admin"
            }
        ]
    }
}
```

## 修改管理员

`admin/admins/{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |                名称                 |
|  phone   | string |  无  |  否  | 手机号, email 字段不出现,此字段必须 |
|  email   | string |  无  |  否  | 邮箱 , phone 字段不出现,此字段必须  |
|  state  |  int   |  无  |  否  |        状态 0: 正常 1: 禁用         |
| password | string |  无  |  否  |           密码 长度 6-16            |

**SUCCESS 返回体**

```json
{
    "msg": "修改管理员成功",
    "code": 0,
    "data": null
}
```

## 删除管理员

`admin/admins/{id}`

**请求方式**

`DELETE`

**请求参数**


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 管理员菜单管理

`admin/nav`

**请求方法**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "menus": [
            {
                "id": 1,
                "name": "角色列表",/*权限名称*/
                "alias": "role:list",/*权限别名*/
                "icon": null,/*权限图标*/
                "url": "/role",/*跳转地址*/
                "order": 0,/*排序*/
                "type": 1,/*0: 菜单 1: 导航 2: 按钮*/
                "pid": 0,/*父级ID*/
                "show": 1,/*是否显示 0: 不显示 1: 显示*/
                "list": null/*权限名称*/
            },
            {
                "id": 3,
                "name": "权限列表",
                "alias": "authority:list",
                "icon": "image",
                "url": "/authority",
                "order": 0,
                "type": 1,
                "pid": 0,
                "show": 1,
                "list": null
            },
            {
                "id": 2,
                "name": "管理员列表",
                "alias": "admin:list",
                "icon": null,
                "url": "/admin",
                "order": 0,
                "type": 1,
                "pid": 0,
                "show": 1,
                "list": null
            }
        ],
        "perms": [
            "role:list",
            "authority:list",
            "authority:deleye",
            "admin:list"
        ]
    }
}
```

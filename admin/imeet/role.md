# 角色管理

## 角色列表

`admin/role`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |         角色名称         |
| alias  | string |  无  |  否  |        角色别名        |
| after  |  int   |  无  |  否  |       从第几条开始取       |
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
                "name": "总管理员",
                "alias": "admin"
            },
            {
                "id": 2,
                "name": "管理员",
                "alias": "manage"
            }
        ],
        "first_page_url": "http://imeet.test/admin/role?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/role?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/role",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```

## 角色详情

`admin/role/{id}`

**请求方法**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "name": "总管理员",
        "alias": "admin",
        "permissions": [
            {
                "id": 1,
                "name": "角色列表",
                "alias": "role:list",
                "icon": null,
                "url": "/role",
                "order": 0,
                "type": 1,
                "pid": 0,
                "show": 1
            }
        ]
    }
}
```

## 创建角色

`admin/role`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                角色名称                 |
|  alias   | string |  无  |  是  |               角色别名                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 修改角色

`admin/role/{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|       name        | string |  无  |  否  |                角色名称                 |
|       alias       | string |  无  |  否  |               角色别名                 |
|  permission_ids   | array |  无  |  否  |               权限Ids                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 删除角色

`admin/role/{id}`

**请求方式**

`DELETE`


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```
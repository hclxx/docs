# 角色管理

## 角色列表

`admin/roles`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |         角色名称         |
| alias  | string |  无  |  否  |        角色别名        |

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
                "alias": "admin",
                "permissions": [],/*权限数组*/
            },
            {
                "id": 2,
                "name": "管理员",
                "alias": "manage",
                "permissions": []
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

`admin/roles/{id}`

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
              "name": "角色列表",/*权限名称*/
              "alias": "role:list",/*权限别名*/
              "icon": null,/*权限图标*/
              "url": "/role",/*跳转地址*/
              "order": 0,/*排序*/
              "type": 1,/*0: 菜单 1: 导航 2: 按钮*/
              "pid": 0,/*父级ID*/
              "show": 1,/*是否显示 0: 不显示 1: 显示*/
            }
        ]
    }
}
```

## 创建角色

`admin/roles`

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
    "msg": "创建角色成功",
    "code": 0,
    "data": null
}
```

## 修改角色

`admin/roles/{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|       name        | string |  无  |  否  |                角色名称                 |
|       alias       | string |  无  |  否  |               角色别名                 |
|  permission   | array |  无  |  否  |               权限Ids                 |

**SUCCESS 返回体**

```json
{
    "msg": "修改角色成功",
    "code": 0,
    "data": null
}
```

## 删除角色

`admin/roles/{id}`

**请求方式**

`DELETE`


**SUCCESS 返回体**

```json
{
    "msg": "删除角色成功",
    "code": 0,
    "data": null
}
```

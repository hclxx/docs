# 权限管理

## 权限列表

`admin/authority`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  name  | string |  无  |  否  |         权限名称         |
| alias  | string |  无  |  否  |        权限别名        |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "角色列表",
            "alias": "role:list",
            "icon": null,
            "url": "/role",
            "order": 0,
            "type": 1,
            "pid": 0,
            "show": 1,
            "list": null
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
            "list": [
                {
                    "id": 5,
                    "name": "删除权限",
                    "alias": "authority:deleye",
                    "icon": null,
                    "url": null,
                    "order": 0,
                    "type": 2,
                    "pid": 3,
                    "show": 1,
                    "list": null
                }
            ]
        }
    ]
}
```

## 权限详情

`admin/authority/{id}`

**请求方法**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 3,
        "name": "权限列表",
        "alias": "authority:list",
        "icon": "image",
        "url": "/authority",
        "order": 0,
        "type": 1,
        "pid": 0,
        "show": 1
    }
}
```

## 创建权限

`admin/authority`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                权限名称                       |
|   alias  | string |  无  |  是  |               权限别名                        |
|   icon   | string |  无  |  是  |                权限图标                       |
|   url    | string |  无  |  是  |               跳转地址                        |
|   order  |   int  |  无  |  是  |                排序                           |
|   type   |   int  |  无  |  是  |               0: 菜单 1: 导航 2: 按钮          |
|   show   |   int  |  无  |  是  |               是否显示 0: 不显示 1: 显示        |
|   pid    |   int  |  无  |  是  |               父级Id                          |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 修改权限

`admin/authority/{id}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |                权限名称                       |
|   alias  | string |  无  |  否  |               权限别名                        |
|   icon   | string |  无  |  否  |                权限图标                       |
|   url    | string |  无  |  否  |               跳转地址                        |
|   order  |   int  |  无  |  否  |                排序                           |
|   type   |   int  |  无  |  否  |               0: 菜单 1: 导航 2: 按钮          |
|   show   |   int  |  无  |  否  |               是否显示 0: 不显示 1: 显示        |
|   pid    |   int  |  无  |  否  |               父级Id                          |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 删除权限

`admin/authority/{id}`

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
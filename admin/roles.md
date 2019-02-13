# 菜单管理

## 菜单列表

`/admin/menu`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 1,
    "perms": "system" /*key*/,
    "name": "系统配置" /*名称*/,
    "icon": "system" /*图标*/,
    "url": "" /*跳转地址*/,
    "order": 0 /*排序*/,
    "type": 0 /* 0: 菜单 1: 导航 2: 按钮 */,
    "pid": 0,
    "show": "1",
    "created_at": "2019-01-11 08:06:19",
    "updated_at": "2019-01-11 08:06:19",
    "list": [
      /*子级*/
      {
        "id": 2,
        "key": "system:base:config",
        "name": "基本信息",
        "icon": "base-config",
        "url": "admin/system/base/config",
        "sort": 0,
        "type": 1,
        "pid": 1,
        "show": "1",
        "created_at": "2019-01-11 08:09:09",
        "updated_at": "2019-01-11 08:09:09"
      }
    ]
  }
]
```

**ERROR 返回体**

`无`

## 创建菜单

`/admin/menu/`

**请求方式**

`POST`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明           |
| :-------: | :----: | :--: | :--: | :---------------------: |
|   name    | string |  无  |  是  |        权限名称         |
|   perms   | string |  无  |  是  |        权限 key         |
| parent_id |  int   |  无  |  是  |         父级 ID         |
|   icon    | string |  无  |  否  |          图标           |
|    url    | string |  无  |  否  |        跳转链接         |
|   order   |  int   |  0   |  否  |          排序           |
|   type    |  int   |  无  |  是  | 0: 菜单 1: 导航 2: 按钮 |
|   show    |  int   |  1   |  否  |    1: 显示 0: 不显示    |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

**ERROR 返回体**

```json
{
  "message": "跳转链接不正确"
}
```

## 修改权限

`/admin/menu/{menu}`

**请求方式**

`PUT`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |          说明           |
| :---: | :----: | :--: | :--: | :---------------------: |
| name  | string |  无  |  否  |        权限名称         |
| perms | string |  无  |  否  |        权限 key         |
| icon  | string |  无  |  否  |          图标           |
|  url  | string |  无  |  否  |        跳转链接         |
| order |  int   |  0   |  否  |          排序           |
| type  |  int   |  无  |  是  | 0: 菜单 1: 导航 2: 按钮 |
| show  |  int   |  1   |  否  |    1: 显示 0: 不显示    |

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
  "message": "跳转链接不正确"
}
```

## 删除权限

`/admin/menu/{menu}`

**请求方式**

`DELETE`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "删除成功"
}
```

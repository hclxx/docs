# 通证管理[新增]

## 通证列表

`/admin/users`

**请求方式**

`GET`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |   说明   |
| :--------: | :----: | :--: | :--: | :------: |
|    name    | string |  无  |  否  |   按照通证名称检索   |
|    limit    | integer |  无  |  是  |   条目数   |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "比特币",
            "symbol": "BTC",
            "icon": {
                "id": 1,
                "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FnfnVa3bMngMOBUhDy_It8KjdwuW.jpg"
            },
            "merchat_id": 0,
            "balance": "0.00000000",
            "expend": "0.00000000",
            "created_at": null,
            "updated_at": null
        }
    ],
    "first_page_url": "http://comc-mall-amin.test/admin/project-tokens?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc-mall-amin.test/admin/project-tokens?page=1",
    "next_page_url": null,
    "path": "http://comc-mall-amin.test/admin/project-tokens",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

## 通证添加

`/admin/users`

**请求方式**

`GET`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |   说明   |
| :--------: | :----: | :--: | :--: | :------: |
|    name    | string |  无  |  否  |   通证名称   |
|    icon    | integer |  无  |  是  |   通证图标   |
|    symbol    | string |  无  |  是  |   通证符号   |
|    balance    | number |  无  |  是  |   余额   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
    "message": "创建成功"
}
```

## 通证更新

`/admin/project-tokens/{id}`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |   说明   |
| :--------: | :----: | :--: | :--: | :------: |
|    name    | string |  无  |  否  |   通证名称   |
|    icon    | integer |  无  |  是  |   通证图标   |
|    symbol    | string |  无  |  是  |   通证符号   |
|    balance    | number |  无  |  是  |   余额   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
    "message": "修改成功"
}
```
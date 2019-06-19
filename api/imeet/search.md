# 搜索

## 按手机号/账号搜索好友

**方式**

`GET`

**路径**

`/api/search/user`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| keywords | string |  是  | 搜索关键词，不支持模糊搜索 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 5,/*用户id*/
        "name": "Z63482",/*用户名*/
        "avatar": "xxxx.png" /*头像*/
    }
}
```

## 按群名称/账号搜索社群

**方式**

`GET`

**路径**

`/api/search/groups`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| keywords | string |  是  | 搜索关键词，不支持模糊搜索 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "社群名",
            "avatar": "avarar.png",
            "describe": "描述"
        },
        {
            "id": 2,
            "name": "社群名",
            "avatar": "avarar.png",
            "describe": "描述"
        },
        {
            "id": 3,
            "name": "社群名",
            "avatar": "avarar.png",
            "describe": "描述"
        }
    ]
}
```

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

## 搜索好友

**方式**

`GET`

**路径**

`/api/search/friends`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| keywords | string |  是  | 搜索关键词，支持模糊搜索 |
| includes | string |  是  | 搜索范围 可选:frinend-好友,group-我所在社群用户,community-我所在社区用户,多个使用逗号分隔 `frinend,group,community` |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        /*好友检索结果 无匹配为空数组*/
        "friend_users": [
            {
                "friend_id": 3,
                "group_id": 1,
                /*好友信息*/
                "friend": {
                    "id": 3,
                    "name": "eric",
                    "avatar": null
                },
                /*分组信息*/
                "group": {
                    "id": 1,
                    "name": "我的好友"
                }
            }
        ],
        /*社群用户检索结果 无匹配为空数组*/
        "group_users": [
            {
                "group_id": 1,
                "user_id": 3,
                /*用户信息*/
                "user": {
                    "id": 3,
                    "name": "eric",
                    "avatar": null
                },
                /*社群信息*/
                "group": {
                    "id": 1,
                    "name": "er"
                }
            }
        ],
        /*社区用户检索结果 无匹配为空数组*/
        "community_users": [
            {
                "group_id": 6,
                "user_id": 3,
                /*用户信息*/
                "user": {
                    "id": 3,
                    "name": "eric",
                    "avatar": null
                },
                /*社群信息*/
                "group": {
                    "id": 6,
                    "name": null
                }
            }
        ]
    }
}
```

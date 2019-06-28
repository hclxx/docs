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

## 搜索好友/社群成员/社区成员

**方式**

`GET`

**路径**

`/api/search/friends`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| keywords | string |  是  | 搜索关键词，支持模糊搜索 |
| includes | string |  是  | 搜索范围 可选:friend-好友,group-我所在社群用户,community-我所在社区用户,多个使用逗号分隔 `friend,group,community` |

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


## 首页搜索

**方式**

`GET`

**路径**

`/api/search`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| keywords | string |  是  | 搜索关键词(好友名称，好友imeet账号,好友备注,社群(区)名称,社群(区)号)，支持模糊搜索 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "name": "联系人",
            "list": [
                {
                    "id": 8,
                    "name": "篮球",             //  用户名称
                    "avatar": null,             //  用户头像
                    "group_name": "黑名单"      // 用户分组名称
                } 
            ]
        },
        {
            "name": "社群",
            "list": [
                {
                    "id": 4,
                    "name": "社群",         //  社群名称
                    "avatar": "456",        //  社群头像
                    "user_name": "篮球"     //  搜索的用户名
                }
            ]
        },
        {
            "name": "社区",
            "list": [
                {
                    "id": 4,
                    "name": "社区2",        //  社区名称
                    "avatar": "123",        //  社区头像
                    "user_name": "篮球"     //  搜索的用户名
                }
            ]
        }
    ]
}
```

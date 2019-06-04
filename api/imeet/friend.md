# 好友/通讯录/社群/社区

## 好友

**方式**

`GET`

**路径**

`/api/friend/groups`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*分组id*/
            "name": "我的好友",/*分组名称*/
            "alias": "friend",/*分组别名*/
            "user_id": 5,/*用户id*/
            "user_count": 1,/*用户数量*/
            "friends": [
                {
                    "id": 1,
                    "user_id": 5,
                    "friend_id": 6,
                    "group_id": 1,
                    "alias": "备注",
                    "chat_bgd": null,
                    "dynamic_setting": {
                        "look_me": false,
                        "look_him": false
                    },
                    "friend": {
                        "id": 6,
                        "name": "章三",
                        "avatar": null
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "黑名单",
            "alias": "black",
            "user_id": 5,
            "user_count": 0,
            "friends": []
        }
    ]
}
```


## 通讯录

**方式**

`GET`

**路径**

`/api/friends`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "alias": null,/*好友备注*/
            "friend_id": 2,/*好友id 也是用户id*/
            "dynamic_setting": {
                "look_me": false,/*不让他看我的动态*/
                "look_him": false/*不看他的动态*/
            },
            "friend": {
                "id": 2,/**/
                "name": "章三",/*好友名称*/
                "avatar": null/*好友头像*/
            }
        }
    ]
}
```

## 添加好友

**方式**

`POST`

**路径**

`/api/friends/{friendId}`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "添加好友成功",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 5,
        "friend_id": 6,
        "group_id": 1,
        "alias": null,
        "chat_bgd": null,
        "dynamic_setting": {
            "look_me": 0,
            "look_him": 0
        },
        "friend": {
            "id": 6,
            "name": "章三",
            "avatar": null
        }
    }
}
```

## 删除好友

**方式**

`DELETE`

**路径**

`/api/friends/{friendId}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 设置好友备注

**方式**
`PATCH`

**路径**

`/api/friends/{friendId}/alias`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| name | string |  是  | 备注名称 |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 5,
        "friend_id": 6,
        "group_id": 1,
        "alias": "备注",
        "chat_bgd": null,
        "dynamic_setting": {
            "look_me": 0,
            "look_him": 0
        },
        "friend": {
            "id": 6,
            "name": "章三",
            "avatar": null
        }
    }
}
```
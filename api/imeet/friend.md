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

## 好友分组移动

**方式**
`PATCH`

**路径**

`/api/friends/{friendId}/groups/{gid}`

**响应**

`Status code 200`

```json
{
    "msg": "移动成功",
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

## 好友聊天背景设置

**方式**

`PATCH`

**路径**

`/api/friends/{friendId}/chat-bgd`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| background | string |  是  | 背景图地址 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 2,
        "user_id": 5,
        "friend_id": 6,
        "group_id": 1,
        "alias": "章三",
        "chat_bgd": "chat-background/xxxxx.png",/*背景图地址*/
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
}
```

## 创建好友分组

**方式**
`POST`

**路径**

`/api/friend/groups`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| name | string |  是  | 分组名称 |

**响应**

`Status code 200`

```json
{
    "msg": "移动成功",
    "code": 0,
    "data": {
        "id": 1,/*分组id*/
        "name": "自定义分组",/*分组名称*/
        "alias": "custom",/*分组别名*/
        "user_id": 5,/*用户id*/
        "user_count": 1,/*用户数量*/
        "friends": []
    }
}
```

## 更新分组名称

**方式**

`PATCH`

**路径**

`/api/friend/groups/{id}`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| name | string |  是  | 分组名称 |

**响应**

`Status code 200`

```json
{
    "msg": "移动成功",
    "code": 0,
    "data": {
        "id": 1,/*分组id*/
        "name": "自定义分组",/*分组名称*/
        "alias": "custom",/*分组别名*/
        "user_id": 5,/*用户id*/
        "user_count": 1,/*用户数量*/
        "friends": []
    }
}
```

## 删除分组

**方式**

`DELETE`

**路径**

`/api/friend/groups/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 分组排序

**方式**

`PATCH`

**路径**

`/api/friend/groups/sort`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| groups | array |  是  | 排序好的分组id数组 `[1,2,3]` |

**响应**

`Status code 200`

```json
{
    "msg": "排序成功",
    "code": 0,
    "data": null
}
```

## 获取分组

**方式**

`GET`

**路径**

`/api/friend-groups`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "我的好友",
            "sort": 1
        }
    ]
}
```

## 好友申请列表

**方式**

`GET`

**路径**

`/api/apply`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "target_user_id": 5,
            "status": 0,/*状态: 0-待处理 1-已同意 2-已拒绝*/
            "extend": {
                "alias": "骚军",
                "group": 1,
                "lookme": null,
                "remark": "同意下我的申请啊"/*申请备注*/
            },
            "created_at": "2019-06-19 10:53:14",/*申请时间*/
            "target_user": {/*申请人信息*/
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        }
    ]
}
```

## 添加好友申请

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| alias | string |  否  | 备注 |
| group_id | integer |  是  | 分组ID |
| lookme | integer |  是  | 不让他/她看我动态：0-否 1-是 |
| remark | string |  否  | 验证信息 |
| user_id | integer |  是  | 用户id |

**路径**

`/api/apply`

**响应**

`Status code 200`

```json
{
    "msg": "申请添加好友成功",
    "code": 0,
    "data": null
}
```
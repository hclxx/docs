# 好友

## 分组好友

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

## 好友数量

**方式**

`GET`

**路径**

`/api/friends/count`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": {
        "count": 1
    }
}
```

## 好友详情

**方式**

`GET`

**路径**

`/api/friends/{friendId}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 20,
        "user_id": 1,
        "friend_id": 20,
        "group_id": 1,
        "alias": "备注",
        "chat_bgd": "xxxx.png",
        "tags": "篮球,测试",
        "desc": "这是好友描述",
        "phone": "好友电话",
        "chat_setting": {
            "msg_top": 0,/*消息置顶 0-否 1-是*/
            "msg_disturb": 0,/*消息免打扰 0-否 1-是*/
            "msg_shielding": 0/*消息屏蔽 0-否 1-是*/
        },
        /*好友信息*/
        "friend": {
            "id": 20,
            "name": "26CSRU",
            "avatar": null,
            "numner": "123123213"/*用户IMeet账号*/
        },
        /*分组信息*/
        "group": {
            "id": 1,
            "name": "我的好友",
            "user_count": 2
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

## 更新备注

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
        "friend_id": 3,
        "group_id": 8,
        "alias": "骚军",
        "tags": null,
        "desc": null,
        "phone": null,
        "chat_bgd": null,
        "chat_setting": {
            "msg_top": 0,
            "msg_disturb": 0,
            "msg_shielding": 0
        },
        "friend": {
            "id": 3,
            "name": "eric",
            "avatar": null
        }
    }
}
```

## 更新消息设置

**方式**

`PATCH`

**路径**

`/api/friends/{friendId}/chat-setting`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| msg_top | int |  是  | 消息置顶:0-否 1-是 |
| msg_disturb | int |  是  | 消息免打扰:0-否 1-是 |
| msg_shielding | int |  是  | 消息屏蔽:0-否 1-是 |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 5,
        "friend_id": 3,
        "group_id": 1,
        "alias": "章三",
        "tags": "学生,明星",
        "desc": "测试描述",
        "phone": "18382274309",
        "chat_bgd": "xxx.png",
        "chat_setting": {
            "msg_top": 1,
            "msg_disturb": 1,
            "msg_shielding": 1
        },
        "friend": {
            "id": 3,
            "name": "eric",
            "avatar": null
        }
    }
}
```

## 更新信息

**方式**

`PUT`

**路径**

`/api/friends/{friendId}`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
|  alias| string |  否  | 备注名称 |
|  group_id| int |  否  | 分组ID |
|  desc| string |  否  | 好友描述 |
|  phone| string |  否  | 好友电话 |
|  tags| string |  否  | 好友标签 |
|  lookme| int|  是  | 不让他/她看我的动态 可选 0-否 1-是 |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 5,
        "friend_id": 3,
        "group_id": 8,
        "alias": "骚军",
        "tags": null,
        "desc": null,
        "phone": null,
        "chat_bgd": null,
        "chat_setting": {
            "msg_top": 0,
            "msg_disturb": 0,
            "msg_shielding": 0
        },
        "friend": {
            "id": 3,
            "name": "eric",
            "avatar": null
        }
    }
}
```

## 更新聊天设置

**方式**

`PATCH`

**路径**

`/api/friends/{friendId}/chat-setting`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| msg_top | int |  否  | 消息置顶: 0-否 1-是 |
| msg_disturb | int |  否  | 消息免打扰: 0-否 1-是|
| msg_shielding | int |  否  | 消息屏蔽: 0-否 1-是 |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 5,
        "friend_id": 3,
        "group_id": 1,
        "alias": "章三",
        "tags": "学生,明星",
        "desc": "测试描述",
        "phone": "18382274309",
        "chat_bgd": "xxx.png",
        "chat_setting": {
            "msg_top": 1,
            "msg_disturb": 1,
            "msg_shielding": 1
        },
        "friend": {
            "id": 3,
            "name": "eric",
            "avatar": null
        }
    }
}
```

## 背景设置

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
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 5,
        "friend_id": 3,
        "group_id": 8,
        "alias": "骚军",
        "tags": null,
        "desc": null,
        "phone": null,
        "chat_bgd": "xxxxxxx.png",/*背景*/
        "chat_setting": {
            "msg_top": 0,
            "msg_disturb": 0,
            "msg_shielding": 0
        },
        "friend": {
            "id": 3,
            "name": "eric",
            "avatar": null
        }
    }
}
```

## 创建分组

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

## 更新分组

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

## 申请列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| limit | int |  是  | 条目数 20 |
| offset | int |  是  | 偏移量 0 |

**路径**

`/api/friend/apply`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 5,
            "status": 0,/*状态: 0-待处理 1-已同意 2-已拒绝*/
            "extend": {
                "alias": "骚军",
                "group": 1,
                "lookme": null,
                "remark": "同意下我的申请啊",/*申请备注*/
                "allow_apply": 0,/*是否允许在申请 0-允许 1-不允许*/
            },
            "created_at": "2019-06-19 10:53:14",/*申请时间*/
            "user": {/*申请人信息*/
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        }
    ]
}
```

## 申请添加[单个]

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| alias | string |  否  | 备注 |
| group_id | integer |  是  | 分组ID |
| lookme | integer |  是  | 不让他/她看我动态：0-否 1-是 |
| remark | string |  否  | 验证信息 |
| number | string |  是  | 用户IMeet账号 |
| source | string |  否  | 申请来源: 通过xx社群添加 通过搜索添加 通过扫码添加 通过好友推荐添加 广场推荐添加|

**路径**

`/api/friend/apply`

**响应**

`Status code 200`

```json
{
    "msg": "申请添加好友成功",
    "code": 0,
    "data": null
}
```

## 申请添加[批量]

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| numbers | array |  是  | 用户Imeet账号集合,格式 `[2123213, 3123123, 4123213]` |
| source | string |  否  | 申请来源: 通过xx社群添加 通过搜索添加 通过扫码添加 通过好友推荐添加 广场推荐添加|

**路径**

`/api/friend/apply/batch`

**响应**

`Status code 200`

```json
{
    "msg": "申请成功",
    "code": 0,
    "data": null
}
```

## 审核申请

**方式**

`PATCH`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| status | int |  是  | 接受消息状态: 1-同意 2-拒绝 |
| allow_apply | int |  否  | 拒绝填写必须 是否允许再次申请:0-允许 1-不允许 |

**路径**

`/api/friend/apply/{id}/pass`

**响应**

`Status code 200`

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 申请删除

**方式**

`DELETE`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| allow | int |  是  | 接受消息状态: 0-不再接受请求 1-允许再次接受 |

**路径**

`/api/friend/apply/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 重置申请未读数

**方式**

`POST`

**路径**

`/api/friend/apply/read`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 申请未读数

**方式**

`POST`

**路径**

`/api/friend/apply/count`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "count": 20
    }
}
```

## 申请阅读

**方式**

`PATCH`

**路径**

`/api/friend/apply/{id}/read`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 黑名单列表

**方式**

`GET`

**路径**

`/api/blacklist`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 5,
            "friend_id": 3,
            "group_id": 2,
            "alias": "章三",
            "tags": null,
            "desc": null,
            "phone": null,
            "chat_bgd": null,
            "chat_setting": null,
            "friend": {
                "id": 3,
                "name": "eric",
                "avatar": null
            }
        }
    ]
}
```

## 加入黑名单

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| friend_id | int |  是  | 好友id |

**路径**

`/api/blacklist`

**响应**

`Status code 200`

```json
{
    "msg": "加如黑名单成功",
    "code": 0,
    "data": null
}
```

## 移除黑名单

**方式**

`DELETE`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| friend_id | int |  是  | ID |

**路径**

`/api/blacklist`

**响应**

`Status code 200`

```json
{
    "msg": "加如黑名单成功",
    "code": 0,
    "data": null
}
```

## 获取动态设置

**方式**

`GET`

**路径**

`/api/friends/{friendId}/shieldings`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "look_me": 1, /*不让他看我的动态 0-否 1-是*/
        "look_him": 1/*不看他的动态 0-否 1-是*/
    }
}
```

## 更新动态设置

**方式**

`PATCH`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| lookme | int |  是  | 不让他看我的动态 0-否 1-是 |
| lookhim | int |  是  | 不看他的动态 0-否 1-是 |

**路径**

`/api/friends/{friendId}/shieldings`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "look_me": 1, /*不让他看我的动态 0-否 1-是*/
        "look_him": 1/*不看他的动态 0-否 1-是*/
    }
}
```
# 社群/社区

## 创建社群/社区

**方式**

`POST`

**路径**

`/api/groups`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| type | string |  是  | 群类型: group-社群 community-社区 |
| members | array |  否  | 群成员ID，如 `[1, 2, 3]`,不包含用户本身 |
| name | string |  否  | 群名称 |
| avatar | string |  否  | 群头像 |
| describe | string |  否  | 群描述 |

**响应**

`Status code 200`

```json
{
    "msg": "群创建成功",
    "code": 0,
    "data": {
        "name": null,
        "type": "group",
        "avatar": null,
        "number": 57330844,
        "describe": null,
        "background": null,
        "grade": 1,
        "comm_id": 0,
        "maxadmins": 4,
        "group_count": 0,
        "maxmembers": 500,
        "member_count": 1,
        "owner": 5,
        "updated_at": "2019-06-21 16:00:41",
        "created_at": "2019-06-21 16:00:41",
        "id": 85674574282753,
    }
}
```


## 编辑社群/社区

**方式**

`PATCH`

**路径**

`/api/groups/{id}`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| name | string |  否  | 群名称 |
| avatar | string |  否  | 群头像 |
| describe | string |  否  | 群描述 |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": null
}
```

## 获取社群/社区列表

**方式**

`GET`

**路径**

`/api/groups`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| type | string |  是  | 群类型: group-社群 community-社区 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "name": "置顶社群",
            "list": [
                {
                    "id": 32,
                    "groupid": "85931794169857",
                    "name": "Z63482创建的群聊",/*名称*/
                    "avatar": null,/*头像*/
                    "chat_setting": {
                        "msg_top": 1,/*是否置顶 0-否 1-是*/
                        "msg_disturb": 1,/*消息免打扰 0-否 1-是*/
                        "msg_disturb_options": {
                            "accept": 0,/*接受消息但不提提醒 0-否 1-是*/
                            "shielding": 1/*屏蔽消息 0-否 1-是*/
                        }
                    },
                    "role": 2
                }
            ]
        },
        {
            "name": "我创建的社群",
            "list": [
                {
                    "id": 28,
                    "groupid": "85931672535042",
                    "name": "Z63482创建的群聊",
                    "avatar": null,
                    "chat_setting": {
                        "msg_top": 0,
                        "msg_disturb": 0,
                        "msg_disturb_options": {
                            "accept": 0,
                            "shielding": 0
                        }
                    },
                    "role": 2
                }
            ]
        },
        {
            "name": "我管理的社群",
            "list": [
                {
                    "id": 28,
                    "groupid": "85931672535042",
                    "name": "Z63482创建的群聊",
                    "avatar": null,
                    "chat_setting": {
                        "msg_top": 0,
                        "msg_disturb": 0,
                        "msg_disturb_options": {
                            "accept": 0,
                            "shielding": 0
                        }
                    },
                    "role": 2
                }
            ]
        },
        {
            "name": "我加入的社群",
            "list": [
                {
                    "id": 28,
                    "groupid": "85931672535042",
                    "name": "Z63482创建的群聊",
                    "avatar": null,
                    "chat_setting": {
                        "msg_top": 0,
                        "msg_disturb": 0,
                        "msg_disturb_options": {
                            "accept": 0,
                            "shielding": 0
                        }
                    },
                    "role": 2
                }
            ]
        }
    ]
}
```


## 用户加入的社群

**方式**

`GET`

**路径**

`/api/user/groups`


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "社群名称",/*名称*/
            "avatar": "社群头像",/*头像*/
            "groupid": "85034228842497", /*环信社群号*/
            "role": 1/*角色: 0-普通用户 1-管理员 2-群主*/
        }
    ]
}
```

## 获取社群/社区详情

**方式**

`GET`

**路径**

`/api/groups/{id}`

::: tip
 id 必须是环信 groupid
:::

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 4,
        "name": "IMeet圈",
        "avatar": "xxxx.png",/*头像*/
        "describe": "描述",
        "background": "xxxxx.png",/*背景*/
        "comm_id": 0,
        "group_count": 0,/*如是社区，该字段表示社群数里那个*/
        "member_count": 1,/*成员数*/
        "dynamic_count": 16,/*动态数*/
        /*群主信息*/
        "owner": {
            "id": 5,
            "name": "Z63482",
            "avatar": null
        },
        "number": "123123213", /*群号*/
        "type": "group",/*群类型*/
        "saymsg": 1,/*是否全员禁言:1-是 -0否*/
        "from": 1,/*来源:1-用户自身创建,2-后台创建,3-第三方创建*/
        "excellent": 1,/*是否为优质社区:1-是,0-否*/
        "silence_status": 0,/*自身是否在该群里禁言:0-未被禁言 1-全员禁言 2-单独被禁言*/
        /*成员列表 固定8个成员 按照群主/管理员/成员进行排序*/
        "members": [
            {
                "id": 15,
                "user_id": 5,
                "grade": 0,
                "group_id": 17,
                "nickname": null,/*群呢称 未null 使用user对象的name作为群呢称*/
                "chat_bgd": null,/*背景图*/
                "status": 0,
                "role": 2,/*0-普通成员 1-管理员 2-群主*/
                "chat_setting": {
                    "msg_top": 0,
                    "msg_disturb": 0,
                    "msg_disturb_options": {
                        "accept": 0,
                        "shielding": 0
                    }
                },
                "top": 0,
                "created_at": "2019-06-21 16:03:52",
                "updated_at": "2019-06-21 16:03:52",
                "user": {
                    "id": 5,
                    "name": "Z63482",
                    "avatar": null
                }
            }
        ],
        /*自身群资料信息 为NULL标示未加入群*/
        "member": {
            "id": 16,
            "user_id": 5,
            "group_id": 34,
            "nickname": null,
            "chat_bgd": null,
            "status": 0,
            "role": 2,
            "chat_setting": {
                "msg_top": 0,
                "msg_disturb": 0,
                "msg_disturb_options": {
                    "accept": 0,
                    "shielding": 0
                }
            },
            "created_at": "2019-06-25 14:33:14",
            "updated_at": "2019-06-25 14:33:14"
        },
        "type": "group",/*群类型:group-社群 community-社区*/
        /*用户旗下可以申请加入的社群列表，当 `type` 为 `community` 时 `may_apply_groups` 该字段存在*/
        "may_apply_groups": [
            {
                "id": 86398924292097,/*群id*/
                "name": "我的第一个群",/*群名称*/
                "avatar": null,/*头像*/
                "member_count": 5/*当前成员数*/
            }
        ],
        /*用户已加入的社群列表*/
        "has_joined_groups": [
            {
                "id": 86398924292097,/*群id*/
                "name": "我的第一个群",/*群名称*/
                "avatar": null,/*头像*/
                "member_count": 5/*当前成员数*/
            }
        ],
        /*社区下社群列表 当 `type` 为 `community` 时 `groups` 字段存在 */
         "groups": [
            {
                "id": 123123,
                "comm_id": 123123,
                "name": "zhaoweideaddadasd",
                "avatar": "20190702142933205.png"
            },
        ]
    }
}
```

## 邀请好友进入群聊

**方式**

`POST`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  | 群ID 非groupid |
| friends | array |  是  | 邀请的好友 |

**路径**

`/api/invite/group`

**响应**

`Status code 200`

```json
{
    "msg": "邀请加入成功",
    "code": 0,
    "data": null
}
```


## 社群/社区条件

**方式**

`GET`

**路径**

`/api/groups/conditions`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| type | string |  是  | 条件类型: group-社群 community-社区 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "conditions": [
            {
                "key": "invite",/*标示 方便客户端做引导跳转使用*/
                "name": "直接推荐注册用户5人",/*条件名称*/
                "extra": {
                    "rate": 0 ,/*已完成数量*/
                    "num": 5  /*总要求数量*/
                },
                "status": false,/*完成状态*/
            },
            {
                "key": "level",
                "name": "链乎等级达到白金",
                "extra": {
                    "level": 4,
                    "num": 5000,/*矿力总量*/
                    "rate": 158,/*当前矿力*/
                },            
                "status": false
            },
            {
                "key": "invite:group",
                "name": "直接推荐的注册用户中至少有30人成功创建社群",
                "extra": {
                    "rate": 0 ,
                    "num": 30
                }, 
                "status": false
            },
            {
                "key": "invite:group:member",
                "name": "至少有3个社群符合每个群超过1人",
                "extra": {
                    "rate": "0/3",
                    "num": 3,
                    "members": 1
                },       
                "status": false
            },
            {
                "key": "invite:user:member",
                "name": "推荐用户创建的社群总人数达到200人",
                "extra": {
                    "rate": "0/200",
                    "num": 200
                },
                "status": false
            }
        ],
        "status": false
    }
}
```

## 社群/社区公告列表

**方式**

`GET`

**路径**

`/api/group/notices`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| limit | int |  是  | 条目数 默认20 |
| offset | int |  是  | 偏移量 默认0 |
| group_id | int |  是  | 社群/社区ID |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "title": "测试呢",/*公告标题*/
            "content": "测试测试测试",/*公告内容*/
            "data": {
                "image": {
                    "height": 1,
                    "width": 2,
                    "mime": "png",
                    "filename": "xxxxx.png"
                }
            },
            "group_id": 1,
            "user_id": 5,
            "read_count": 0,/*阅读数量*/
            "created_at": "2019-06-21 13:42:03",/*发布时间*/
            "updated_at": "2019-06-21 13:42:03",
            /*publisher为 null 使用该对象的名称*/
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            "publisher": {/*发布者信息*/
                "id": 2,
                "user_id": 5,
                "grade": 0,
                "group_id": 1,
                "nickname": null,/*呢称非NULL使用nickname作为发布者名称否则使用user对象的name*/
                "chat_bgd": null,
                "status": 0,
                "role": 1,
                "message": null,
                "top": 0,
                "created_at": null,
                "updated_at": null,
                "user": {/*用户信息*/
                    "id": 5,
                    "name": "Z63482",
                    "avatar": null
                }
            }
        }
    ]
}
```

## 社群/社区公告创建

::: tip
 社群/社区管理和创始人才有权限创建公告
:::

**方式**

`POST`

**路径**

`/api/group/notices`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| title | int |  是  | 标题 |
| content | int |  是  | 内容 |
| image | string |  否  | 图片名称 |
| group_id | int |  是  | 群id |

**响应**

`Status code 200`

```json
{
    "msg": "创建公告成功",
    "code": 0,
    "data": {
        "user_id": 5,
        "title": "测试呢",
        "data": {
            "image": {
                "height": 1,
                "width": 2,
                "mime": "png",
                "filename": "xxxxx.png"
            }
        },
        "content": "测试测试测试",
        "group_id": 1,
        "updated_at": "2019-06-21 13:51:57",
        "created_at": "2019-06-21 13:51:57",
        "id": 4
    }
}
```

## 社群/社区公告删除

::: tip
 社群/社区管理和创始人才有权限删除公告
:::

**方式**

`DELETE`

**路径**

`/api/group/notices/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 社群/社区公告阅读

**方式**

`POST`

**路径**

`/api/group/notices/{id}/read`

**响应**

`Status code 200`

```json
{
    "msg": "阅读成功",
    "code": 0,
    "data": null
}
```

## 获取最新未阅读公告

**方式**

`GET`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  | 群id |

**路径**

`/api/group/notices/latest`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "title": "xxxxx",
        "content": "xxxxxx",
        "data": {
            "image": {
                "height": 1,
                "width": 2,
                "mime": "png",
                "filename": "xxxxx.png"
            }
        },
        "group_id": 86398924292097,
        "user_id": 5,
        "read_count": 1,
        "created_at": "2019-06-29 10:28:31",
        "updated_at": "2019-06-29 17:17:55"
    }
}
```

## 社群升级规则列表

**方式**

`GET`

**路径**

`/api/group/upgrade/rule`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| limit | int |  是  | 条目数 默认20 |
| offset | int |  是  | 偏移量 默认0 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "rules": [
            {
                "id": 1,                    //  升级配置id
                "level": 2,                 //  升级配置对应的等级
                "max_members": 1000,        //  社群成员上限
                "max_admins": 10,           //  社群管理员上限
                "coin": "ore",              //  代币类型
                "price": 1000               //  价格
            },
            {
                "id": 2,
                "level": 3,
                "max_members": 1500,
                "max_admins": 15,
                "coin": "ore",
                "price": 1500
            },
            {
                "id": 3,
                "level": 4,
                "max_members": 2000,
                "max_admins": 20,
                "coin": "ore",
                "price": 2000
            }
        ],
        "desc": {
             "upgrade_desc": "this is upgrade rule",       //  升级社群规则描述
             "transfer_desc": "this is transfer rule"      //  转让社群规则描述
        }
    }
}
```

## 升级社群

**方式**

`post`

**路径**

`/api/group/{id}/upgrade`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
|    id    | int |  是  | 升级社群配置id |
| pay_pass | string |  是  | 用户支付密码   |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 社群/社区成员列表

**方式**

`GET`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| limit | int |  否  | 条目数,默认全部或者指定条目数 |
| offset | int |  否  | 偏移量 默认0 |
| group_id | int |  是  | 社区/社群ID,注：主键ID |
| roles | string |  否  | 根据角色筛选: 0-成员 1-管理员 2-群主,多个角色成员用半角逗号分开 如 `1,2` 获取管理员和群主列表 |
| action | string |  否  | unsilence-设置群内禁言时获取可设置用户  silence-群内已禁言的用户 |
| manager | int |  否  | 当前用户所在群的角色，当action=unsilence时必传 1-管理员 2-群主 设置群内禁言时获取可设置用户 |

**路径**

`/api/members`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 23,/*成员ID*/
            "user_id": 5,/*用户ID*/
            "group_id": 25,/*群组ID*/
            "nickname": null,/*群呢称*/
            "chat_bgd": null,/*聊天背景*/
            "role": 2,/*0-成员 1-管理员 2-群主*/
            "chat_setting": {
                "msg_top": 0,/*消息置顶 0-否 1-是*/
                "msg_disturb": 0,/*消息免打扰 0-否 1-是*/
                "msg_disturb_options": {
                    "accept": 0,/*接受但不提醒 0-否 1-是 */
                    "shielding": 0/*屏蔽群消息 0-否 1-是 */
                }
            }
            /*成员用户信息 如nickname不存在 使用user.name值作为呢称*/
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            }
        }
    ]
}
```

## 社群/社区设置聊天背景

**方式**

`PATCH`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| bgd | string |  是  | 背景图 |

**路径**

`/api/members/{id}/chat-bgd`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 社群/社区设置呢称

**方式**

`PATCH`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| nickname | string |  是  | 呢称 |

**路径**

`/api/members/{id}/nickname`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 移除群组成员

**方式**

`POST`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  | 群id |
| members | array |  是  | 成员id集合 非user_id集合 |

**路径**

`/api/members/remove`

**响应**

`Status code 200`

```json
{
    "msg": "移除成功",
    "code": 0,
    "data": null
}
```

## 社群管理设置列表

**方式**

`GET`

**参数**


**路径**

`/api/group/manage`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,                  
            "name": "加群方式"              //  管理项名称
        },
        {
            "id": 2,
            "name": "查找方式"
        }
    ]
}
```


## 社群管理设置详情

**方式**

`GET`

**参数**
| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  |               群id            |

**路径**

`/group/manage/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 6,
            "name": "允许被搜索",                        //  子集管理项名称
            "pid": 2,                                   //  父级管理项id
            "sort": 1,                                  //  排序
            "checked": 0,                           //  是否被选中(1-选中 0-未选中   )
            "child": [
                {
                    "id": 7,
                    "name": "通过群号或关键词",
                    "pid": 6,
                    "sort": 1,
                    "checked": 1,
                    "child": []
                },
                {
                    "id": 8,
                    "name": "仅可通过群号",
                    "pid": 6,
                    "sort": 2,
                    "checked": 0,
                    "child": []
                }
            ]
        }
    ]
}
```

## 设置社群管理

**方式**

`POST`

**参数**
| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  |               群id            |
|    pid   | int |  是  |            父级管理项id            |

**路径**

`/group/manage/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 社区/群 成员聊天设置

**方式**

`PATCH`

**路径**

`/api/members/{id}/chat-setting`

::: tip
 id 必须是环信 用户 id
:::


**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  |     环信id         |
| msg_top | int |  否  |     消息置顶  0-否 1-是          |
| msg_disturb | int |  否  |  消息免打扰    0-否 1-是      |
| accept | int |  否  |  接受消息但不提提醒 0-否 1-是 如 `msg_disturb` 字段存在则该字段必须存在 且值只能是0或1       |
| shielding | int |  否  |  屏蔽消息 0-否 1-是， 如`msg_disturb` 字段存在则该字段必须存在 且值只能是0或1          |


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 更新社区/群主页背景

**方式**

`PATCH`

**路径**

`/api/groups/{id}/background`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| background | string |  是  |     背景图名称          |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 退出/社群或社区

**方式**

`POST`

**路径**

`/api/members/{id}/quit`


**响应**

`Status code 200`

```json
{
    "msg": "退出成功",
    "code": 0,
    "data": null
}
```

## 开启/关闭群内禁言

**方式**

`POST`

**路径**

`/api/group/total/silence/{id}`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": null
}
```

## 设置批量禁言

**方式**

`POST`

**路径**

`/api/group/part/silence/{id}`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| user_ids | array |  是  |     设置禁言的目标用户          |

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": null
}
```

## 取消单个禁言

**方式**

`DELETE`

**路径**

`/api/group/part/silence/{id}`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| user_id | int |  是  |     取消禁言的目标用户          |

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": null
}
```

## 转让社区/群

**方式**

`POST`

**路径**

`/api/groups/{id}/transfer`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| user_id | int |  是  |     转让的目标用户          |

**响应**

`Status code 200`

```json
{
    "msg": "转让成功",
    "code": 0,
    "data": null
}
```

## 申请加社群

**方式**

`POST`

**路径**

`/api/groups/{id}/join`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| from | string |  否  |     来源          |
| remark | string |  否  |     申请备注          |
| group_ids | array |  否  |     社群id集合 如申请加入社区必填          |

**响应**

`Status code 200`

```json
{
    "msg": "申请成功",
    "code": 0,
    "data": null
}
```

## 审核申请加群

**方式**

`POST`

**路径**

`/api/group/join/audit`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| status | int |  是  |     审核状态: 1-通过 2-拒绝 |
| read_id | int |  是  |     消息read_id |
| group_ids | array |  否  |    审核社群加入社区必传 允许通过的社群id集合 |

**响应**

`Status code 200`

```json
{
    "msg": "申请成功",
    "code": 0,
    "data": null
}
```

## 添加管理员

**方式**

`POST`

**路径**

`/api/groups/admins`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  |     群id |
| users | array |  是  |     用户ID集合 `[1,2,3]`|

**响应**

`Status code 200`

```json
{
    "msg": "设置成功",
    "code": 0,
    "data": null
}
```

## 取消管理员

**方式**

`DELETE`

**路径**

`/api/groups/admins`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  |     群id |
| user_id | int |  是  |     用户id|

**响应**

`Status code 200`

```json
{
    "msg": "取消成功",
    "code": 0,
    "data": null
}
```

## 解散社区/群

**方式**

`DELETE`

**路径**

`/api/groups/{id}`


**响应**

`Status code 200`

```json
{
    "msg": "解散成功",
    "code": 0,
    "data": null
}
```

## 社群退出社区

**方式**

`DELETE`

**路径**

`/api/groups/{id}/quit`

`ps: id必须是社区id`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| groups | array |  是  |     社群id集合, `[11111,2222]` |

**响应**

`Status code 200`

```json
{
    "msg": "退出成功",
    "code": 0,
    "data": null
}
```




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
        "id": 16,
        "groupid": "85674574282753"
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
    "data": {
        /*置顶*/
        "tops": [
            {
                "id": 15,
                "groupid": "85674142269441",/*环信群号*/
                "name": "群名称",/*群名*/
                "avatar": "xxxxx.png",/*头像*/
                "top": 0,
                "role": 2
            }
        ],
        /*创建*/
        "creates": [
            {
                "id": 15,
                "groupid": "85674142269441",/*环信群号*/
                "name": "群名称",/*群名*/
                "avatar": "xxxxx.png",/*头像*/
                "top": 0,
                "role": 2
            }
        ],
        /*管理*/
        "manages": [
            {
                "id": 1,
                "groupid": "85674142269441",/*环信群号*/
                "name": "群名称",/*群名*/
                "avatar": "xxxxx.png",/*头像*/
                "top": 0,
                "role": 1
            }
        ],
        /*加入*/
        "joins": [
            {
                "id": 1,
                "groupid": "85674142269441",/*环信群号*/
                "name": "群名称",/*群名*/
                "avatar": "xxxxx.png",/*头像*/
                "top": 0,
                "role": 1
            }
        ]
    }
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
        "is_member": false, /*是否是该成员的成员(true-是 false-否)*/
        "number": "123123213", /*群号*/
        /*成员列表 固定8个成员 按照群主/管理员/成员进行排序*/
        "members": [
            {
                "id": 15,
                "user_id": 5,
                "grade": 0,
                "group_id": 17,
                "nickname": null,
                "chat_bgd": null,
                "status": 0,
                "role": 2,
                "message": null,
                "top": 0,
                "created_at": "2019-06-21 16:03:52",
                "updated_at": "2019-06-21 16:03:52",
                "user": {
                    "id": 5,
                    "name": "Z63482",
                    "avatar": null
                }
            }
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
                "name": "实名认证",/*条件名称*/
                "status": true,/*完成状态*/
                "key": "certification"/*标示 方便客户端做引导跳转使用*/
            },
            {
                "name": "自身等级达到5级",
                "status": true,
                "key": "level"
            },
            {
                "name": "邀请注册至少5名好友建立的社群人数不低于200人",
                "status": true,
                "key": "invite"
            }
        ],
        "status": true /*是否能创建状态*/
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
            "data": [
                {
                    "mime": "image/png",
                    "width": 200,
                    "height": 100,
                    "filename": "xxxxx.png"
                }
            ],
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
| images | object |  是  | 图片附件 |

`images` 参数说明

```json
[
    {
        "mime": "png",/*文件mimetype*/
        "width": 100,/*图片宽度*/
        "height": 200,/*图片高度*/
        "filename": "xxxxx.png"/*文件名*/
    },
]
```

**响应**

`Status code 200`

```json
{
    "msg": "创建公告成功",
    "code": 0,
    "data": {
        "user_id": 5,
        "title": "测试呢",
        "data": [
            {
                "filename": "xxxxx.png",
                "height": 100,
                "width": 200,
                "mime": "image/png"
            }
        ],
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
| limit | int |  是  | 条目数,默认全部或者指定条目数 |
| group_id | int |  是  | 社区/社群ID,注：主键ID |

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

## 获取用户群聊资料信息

**方式**

`GET`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| group_id | int |  是  | 社区/社群ID,注：主键ID |

**路径**

`/api/members/info`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 2,/*成员id*/
        "user_id": 5,/*用户id*/
        "group_id": 28,/*群id*/
        "nickname": null,/*呢称*/
        "chat_bgd": null,/*聊天背景*/
        "status": 0,
        "role": 2,/*0-普通成员 1-管理员 2-群主*/
        "chat_setting": {
            "msg_top": 0,/*消息置顶 0-否 1-是*/
            "msg_disturb": 0,/*消息免打扰 0-否 1-是*/
            "msg_disturb_options": {
                "accept": 0,/*接受但不提醒 0-否 1-是 */
                "shielding": 0/*屏蔽群消息 0-否 1-是 */
            }
        },
        "created_at": "2019-06-24 12:07:09",
        "updated_at": "2019-06-24 12:07:09"
    }
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
| role | int |  是  | 角色类型: 0-普通成员 1-管理员 |

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


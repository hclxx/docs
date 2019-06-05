# 用户

## 用户登录

**方式**

`POST`

**路径**

`/api/auth/login`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| phone | string |  是  |                  手机号                   |
| password | string |  否  |                 密码 如`type`为`pass`必须                  |
| code | string |  否  |                 验证码 如`type`为`code`必须                  |
| type | string |  是  |                 登录方式: `pass`,`code`             |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "token": "xxxxxxxxxx..."
    }
}
```

## 用户注册

**方式**

`POST`

**路径**

`/api/auth/register`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| phone | string |  是  | 手机号 |
| code  | string |  是  |             验证码             |
| password  | string |  是  |             密码             |
| invite_code  | string |  否  |             邀请码             |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "token": "xxxxxxxxxx..."
    }
}
```

## 登录退出

**方式**

`POST`

**路径**

`/api/auth/logout`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "退出成功",
    "code": 0,
    "data": null
}
```

## 用户信息

**方式**

`GET`

**路径**

`/api/user`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 5,
        "name": "Z63482", /*用户名*/
        "phone": "183****4309",/*用户手机*/
        "number": "1295634",/*IMeet账号*/
        "avatar": null,/*头像*/
        "background": null,/*背景*/
        "sex": 0,/*0-未知 1-男 2-女*/
        "birthday": null,/*生日*/
        "easemob_pass": "xxx",/*环信登录密码*/
        "invite_code": "Z63482",/*邀请码*/
        "power": 0,
        "grade": null,
        "parent": null,/*邀请人*/
        "extra": {
            "id": 5,
            "user_id": 5,
            "group_count": 0,/*组统计*/
            "collect_count": 0,/*收藏统计*/
            "comment_count": 0,/*评论统计*/
            "like_count": 0,/*点赞统计*/
            "dynamic_count": 7,/*动态统计*/
            "one_level_invite_count": 0,/*一级邀请用户数量*/
            "two_level_invite_count": 0,/*二级邀请用户数量*/
            "obtain_like_count": 0,/*被点赞数量*/
            "extend": null/*扩展字段*/
        },
        /*用户标签*/
        "tags": [
            {
                "id": 1,/*id*/
                "name": "测试一"/*标签名称*/
            }
        ]
    }
}
```

## 更新信息

**方式**

`PUT`

**路径**

`/api/user`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| bio | string |  否  |  个性签名  |
| avatar | string |  否  |  用户头像  |
| sex | int |  否  | 性别: 0-未知 1-男 2-女 |
| birthday | string |  否  | 出生日期 |
| tags | array |  否  |  用户标签 `[1,2,3]`  |
| name | string |  否  | 名称 |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 5,
        "name": "Z63482",
        "phone": "183****4309",
        "number": "1295634",
        "avatar": null,
        "background": null,
        "sex": 0,
        "birthday": null,
        "easemob_pass": "170fb0898d0df0cf2a33f9b2a8fc604b",
        "invite_code": "Z63482",
        "power": 0,
        "tags": []
    }
}
```

## 用户资产

**方式**

`GET`

**路径**

`/api/wallet/balance`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "balance": "100.00000000",/*余额*/
    }
}
```

## 资产流水

**方式**

`GET`

**路径**

`/api/wallet/logs`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| limit | int |  是  |  条目数 默认 20  |
| offset | int |  是  | 偏移量 默认 0 |
| action | int |  是  | 收支: 0-全部 1-支出 2-收入 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*id*/
            "user_id": 5,
            "target_user_id": 6,
            "type": "digg:ore",/*流水类型*/
            "coin": "ore",/*代币类型*/
            "amount": "0.00000000",/*金额*/
            "action": 1,/*收支动作:1-收入 2-支出*/
            "status": 0,/*0-待处理 1-成功 2-失败*/
            "created_at": "2019-03-12 12:22:33",/*创建时间*/
            "updated_at": "2019-03-12 12:22:33",/*更新时间*/
            /*用户*/
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            /*目标用户*/
            "target_user": {
                "id": 6,
                "name": "章三",
                "avatar": null
            }
        }
    ]
}
```

## 用户设置

**方式**

`GET`

**路径**

`/api/setting`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "user_id": 5,
        "message": {
            /*Imeet 开启*/
            "opened": {
                /*语音提示*/
                "shock": true,
                /*视频提示*/
                "voice": true
            },
            /*Imeet 未开启*/
            "unopened": {
                "new_msg_notify": false,/*新消息通知*/
                "voice_video_remind": true,/*语音和视频提示*/
                "notify_display_details": true/*通知消息显示详情*/
            }
        },
        "privacy": {
            "add_mode": [],/*添加我为好友的方式*/
            "dynamic_range": 0,/*允许朋友查看我的状态 0-全部 3-3天 30-近一个月 180-近半年*/
            "allow_recommend": false,/*是否允许被推荐*/
            "add_friend_check": true/*添加好友是否需要验证*/
        },
        "common": {
            "chat_bgd": null,/*聊天背景*/
            "language": "中文",/*语言*/
            "font_size": 1,/*文字大小*/
            "receiver_mode": false/*听筒模式*/
        }
    }
}
```

## 用户设置修改

**方式**

`PATCH`

**路径**

`/api/setting`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| setting_type | string |  是  |  修改类型：common-通用 privacy-隐私 message-消息 |
| content | object |  是  | 如下 |

**参照如下传参**

```json
{
	"setting_type": "common",
	"content": {
            "chat_bgd": null,
            "language": "中文",
            "font_size": 1,
            "receiver_mode": false
    }
}
{
	"setting_type": "message",
	"content": {
        "opened": {
            "shock": true,
            "voice": true
        },
        "unopened": {
            "new_msg_notify": false,
            "voice_video_remind": true,
            "notify_display_details": true
        }
    }
}
{
	"setting_type": "privacy",
	"content": {
        "add_mode": [],
        "dynamic_range": 0,
        "allow_recommend": false,
        "add_friend_check": true
    }
}
```

**响应**

`Status code 200`

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "user_id": 5,
        "message": {
            "opened": {
                "shock": true,
                "voice": true
            },
            "unopened": {
                "new_msg_notify": false,
                "voice_video_remind": true,
                "notify_display_details": true
            }
        },
        "privacy": {
            "add_mode": [],
            "dynamic_range": 0,
            "allow_recommend": false,
            "add_friend_check": true
        },
        "common": {
            "chat_bgd": null,
            "language": "中文",
            "font_size": 1,
            "receiver_mode": false
        }
    }
}
```


## 获取用户邀请记录

**方式**

`GET`

**路径**

`/api/invite/records`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| level | int |  是  |  邀请级数，仅支持1,2级 |
| limit | int |  是  | 条目数 默认20|
| offset | int |  是  | 偏移量 默认0|


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 4,
            "created_at": "2019-06-05 16:02:26",
            "amount": 2,
            "user": {
                "id": 4,
                "name": "章三",
                "avatar": null
            }
        }
    ]
}
```

## 填写邀请码

**方式**

`POST`

**路径**

`/api/invite/code`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| code | string |  是  |  邀请码|


**响应**

`Status code 200`

```json
{
    "msg": "填写成功",
    "code": 0,
    "data": null
}
```

## 用户矿力数量

**方式**

`GET`

**路径**

`/api/power/number`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "power": 198/*矿力值*/
    }
}
```

## 用户矿力流水记录

**方式**

`GET`

**路径**

`/api/power/logs`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| limit | int |  是  | 条目数 默认20|
| offset | int |  是  | 偏移量 默认0|

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "title": "邀请好友",
            "amount": 2,
            "action": 1,
            "created_at": "2019-06-05 16:02:27"
        },
        {
            "id": 1,
            "title": "填写邀请码",/*标题*/
            "amount": 20,/*金额*/
            "action": 1,/*收入动作: 1-收入 2-支出*/
            "created_at": "2019-06-05 16:02:27"
        }
    ]
}
```

## 用户矿力排行

**方式**

`GET`

**路径**

`/api/power/rank`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        /*排行列表*/
        "list": [
            {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "power": 198,/*矿力值*/
                "rank": 1/*名次*/
            },
            {
                "id": 4,
                "name": "章三",
                "avatar": null,
                "power": 14,
                "rank": 2
            }
        ],
        /*自己的排行*/
        "self": {
            "id": 5,
            "name": "Z63482",
            "avatar": null,
            "power": 198,
            "rank": 1
        }
    }
}
```






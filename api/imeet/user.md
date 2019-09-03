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
| ticket | string |  否  |                 防水墙票据 如`type`为`pass`必须                  |
| randstr | string |  否  |                 防水墙随机串 如`type`为`pass`必须                  |
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
        "token": "xxxxxxxxxx...",
        "sync_status": true /*同步老DAPP资产状态 false-未同步 true-同步*/
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

## 获取用户信息

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
        "grade": {
            "name": "火星",       //  当前等级名称
            "icon": "3",          //  当前等级大图标
            "min": 50,            //  当前等级最小值
            "max": 100,           //  当前等级最大值
            "next_name": "金星"   //  下个等级名称（当下个等级为最大等级时候返回null）
        },
        "parent": null,/*邀请人*/
        "pay_pass_status": false,/*获取支付密码设置状态*/
        "system_notice": [          /*系统消息列表*/
            {
                "id": "111111",
                "name": "系统通知",/*系统消息名称*/
                "type": "system",/*系统消息类型*/
                "top": 1 /*置顶状态 1-置顶 0-未置顶*/ 
            },
            {
                "id": "222222",
                "name": "消息通知",
                "type": "message",
                "top": 1
            },
            {
                "id": "333333",
                "name": "动态通知",
                "type": "dynamic",
                "top": 0
            }
        ],
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
                "name": "测试一",/*标签名称*/
                "cate_id": 3/*分类id*/
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
| avatar | string |  否  | 头像 |

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

## 设置支付密码

**方式**

`patch`

**路径**

`/api/user/pay-pass`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| pay_pass | string |  是  |  支付密码  |
| code | string |  是  |  验证码  |

**响应**

`Status code 200`

```json
{
    "msg": "设置成功",
    "code": 0,
    "data": null
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

## 设置修改

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


## 邀请记录

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

## 矿力数量

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

## 矿力流水记录

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

## 矿力排行

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
        "list": [
            {
                "id": 5,
                "name": "Z63482",
                "avatar": null,
                "sex": 0,/*性别 0-未知 1-男 2-女*/
                "power": 232,/*矿力值*/
                "rank": 1,/*名次*/
                /*等级信息*/
                "grade": {
                    "name": "青铜",
                    "level": "1",
                    "icon": "NULL",
                    "small_icon": "NULL",
                    "min": 0,
                    "max": 500,
                    "next_name": "白银"
                }
            },
            {
                "id": 4,
                "name": "章三",
                "avatar": null,
                "sex": 0,
                "power": 14,
                "rank": 2,
                /*等级信息*/
                "grade": {
                    "name": "青铜",
                    "level": "1",
                    "icon": "NULL",
                    "small_icon": "NULL",
                    "min": 0,
                    "max": 500,
                    "next_name": "白银"
                }
            }
        ],
        /*自身排行信息*/
        "self": {
            "id": 3,
            "name": "eric",
            "avatar": null,
            "power": 0,
            "sex": 0,
            "rank": 3,
            "grade": {
                "name": "青铜",
                "level": "1",
                "icon": "NULL",
                "small_icon": "NULL",
                "min": 0,
                "max": 500,
                "next_name": "白银"
            }
        }
    }
}
```

## 单个用户信息

**方式**

`GET`

**路径**

`/api/users/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 5,/*用户id*/
        "name": "Z63482",/*名字*/
        "number": "1295634",/*IMeet账号*/
        "avatar": null,/*头像*/
        "background": null,/*主页背景*/
        "sex": 0,/*性别*/
        "birthday": null,/*生日*/
        "invite_code": "Z63482",/*邀请码*/
        "power": 206,/*矿力值*/
        "grade": {
            "icon": "xxxxx.png",
            "name": "初级矿工"
        },/**/
        "extra": {
            "id": 5,
            "user_id": 5,
            "group_count": 0,/*社群数*/
            "collect_count": 0,
            "comment_count": 0,
            "like_count": 0,
            "dynamic_count": 36,/*动态数*/
            "one_level_invite_count": 0,
            "two_level_invite_count": 0,
            "obtain_like_count": 3,/*被点赞数*/
            "extend": null/*扩展字段*/
        },
        "tags": [],
        /*屏蔽信息*/
        "shielding": {
            "id": 1,
            "user_id": 4,
            "target_user_id": 5,
            "look_him": 0, /*不看他动态 0-否 1-是*/
            "look_me": 0,/*不让他看我动态 0-否 1-是*/
            "created_at": null,
            "updated_at": null
        }
    }
}
```

## 换绑手机号

**方式**

`PATCH`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| ori_code | string |  是  | 原手机验证码 |
| new_code | string |  是  | 新手机验证码 |
| phone | string |  是  | 新手机号 |

**说明**

换绑成功，旧`token`会失效，需重新登录

**路径**

`/api/binding/phone`

**响应**

`Status code 200`

```json
{
    "msg": "换绑成功",
    "code": 0,
    "data": null
}
```

## 修改登录密码

**方式**

`PATCH`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| old_password | string |  是  | 旧密码 |
| password | string |  是  | 新密码 |
| password_confirmation | string |  是  | 确认新密码 |

**路径**

`/api/user/pass`

**响应**

`Status code 200`

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## 支付密码[设置|修改]

**方式**

`PATCH`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| pay_pass | string |  是  | 密码 |
| code | string |  是  | 验证码 |

**路径**

`/api/user/pay-pass`

**响应**

`Status code 200`

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 修改主页背景

**方式**

`POST`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| bgd | string |  是  | 背景图 filename |

**路径**

`/api/user/background`

**响应**

`Status code 200`

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## 用户等级规则

**方式**

`GET`

**路径**

`/api/grade`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "grade_intro": "this is user grade intro",    //  等级介绍
        "grade_power": [                              //  等级所对应的矿力值
            {
                "id": 1,
                "name": "白银",         //  等级名称
                "small_icon": "",       //  等级小图标
                "min": 10,              //  等级矿力最小值
                "max": 20               //  等级矿力最大值
            },
            {
                "id": 2,
                "name": "黄金",
                "small_icon": "",
                "min": 20,
                "max": 50
            },
            {
                "id": 3,
                "name": "超凡入圣",
                "small_icon": "",
                "min": 50,
                "max": 100
            }
        ],
        "grade_desc": "this is user grade desc"         //  等级其他描述
    }
}
```

## 用户资产信息

**方式**

`GET`

**路径**

`/api/user/balance`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "ore": "0", /*矿石余额*/
        "power": 232 /*矿力值*/
    }
}
```

## 忘记密码

**方式**

`PATCH`

**路径**

`/api/user/forget-pass`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| phone | string |  是  | 手机号 |
| code | string |  是  | 验证码 |
| password | string |  是  | 新密码 |
| password_confirmation | string |  是  | 确认密码 |

**响应**

`Status code 200`

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## 用户列表

**方式**

`GET`

**路径**

`/api/users`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| limit | int |  是  | 条目数 |
| offset | int |  是  | 偏移量 |
| type | string |  是  | dv-大咖 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "name": "351057",
            "sex": 0,
            "avatar": null,
            "big_name": 1,
            "number": null,
            "grade": {
                "name": "青铜",
                "level": "1",
                "icon": "NULL",
                "small_icon": "NULL",
                "min": 0,
                "max": 500,
                "next_name": "白银"
            }
        }
    ]
}
```





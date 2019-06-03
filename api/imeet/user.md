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
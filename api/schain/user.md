# 用户

## 用户登录

**方式**

`POST`

**路径**

`/api/user/login`

**参数**

|   名称   |  类型  | 必须 |            说明             |
| :------: | :----: | :--: | :-------------------------: |
|  phone   | string |  是  |           手机号            |
| password | string |  否  |  密码 如`type`为`pass`必须  |
|   code   | string |  否  | 验证码 如`type`为`code`必须 |
|   type   | string |  是  |   登录方式: `pass`,`code`   |

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

`/api/user/register`

**参数**

|    名称     |  类型  | 必须 |  说明  |
| :---------: | :----: | :--: | :----: |
|    phone    | string |  是  | 手机号 |
|    code     | string |  是  | 验证码 |
|  password   | string |  是  |  密码  |
| invite_code | string |  是  | 邀请码 |

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

`/api/user/logout`

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
    "id": 1,
    "name": "胡昊" /*用户呢称*/,
    "avatar": "acasdasd.png" /*头像*/,
    "gender": 1 /*性别: 0-未知/1-男/2女*/,
    "phone": "183****4309" /*手机*/,
    "code": "SS788A" /*邀请码*/,
    "power": 1 /*矿力数量*/,
    "cllection_time": null,
    "market_id": 0
  }
}
```

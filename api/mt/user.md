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
    "id": 7,
    "name": "0CGLAX",
    "avatar": null,
    "phone": "13822742306",
    "code": "0CGLAX",
    "agency_id": 0,
    "performance": "0.00" /*业绩*/,
    "self_usdt": "0.0000" /*自身贡献USDt数量*/,
    "direct_usdt": "0.0000" /*直推贡献USDT数量*/,
    "self_kj_num": 0 /*自身购买矿机台数*/,
    "sale_kj_num": 0 /*销售矿机台数*/,
    "fil_address": "asds" /*fil提币地址未设置未null*/,
    "erc_address": "asds" /*erc提币地址未设置未null*/,
    "created_at": "2020-11-10 16:55:08",
    "updated_at": "2020-11-10 17:18:58",
    "paypass_status": false,
    "inviter": {
      "id": 1,
      "name": "张测试",
      "avatar": null,
      "created_at": "2020-11-09 16:03:15"
    }
  }
}
```

## 根据手机号获取用户信息

**方式**

`GET`

**参数**

| 名称  |  类型  | 必须 |  说明  |
| :---: | :----: | :--: | :----: |
| phone | string |  是  | 手机号 |

**路径**

`/api/user/info`

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
    "name": "12321",
    "avatar": "sadsa.png",
    "phone": "183****4309"
  }
}
```

## 意见反馈

**方式**

`POST`

**参数**

|  名称   |  类型  | 必须 |   说明   |
| :-----: | :----: | :--: | :------: |
| content | string |  是  | 反馈信息 |
| contact | string |  否  | 联系方式 |

**路径**

`/api/feedback`

**响应**

`Status code 200`

```json
{
  "msg": "反馈成功",
  "code": 0,
  "data": null
}
```

## 修改密码

`修改登录密码后会重置 token`

**方式**

`PATCH`

**参数**

|         名称          |  类型  | 必须 |   说明   |
| :-------------------: | :----: | :--: | :------: |
|     old_password      | string |  是  |  旧密码  |
|       password        | string |  是  |  新密码  |
| password_confirmation | string |  是  | 确认密码 |

**路径**

`/api/user/password`

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 设置/修改支付密码

**方式**

`PATCH`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
|   code   | string |  是  |  验证码  |
| password | string |  是  | 支付密码 |

**路径**

`/api/user/paypassword`

**响应**

`Status code 200`

```json
{
  "msg": "设置成功",
  "code": 0,
  "data": null
}
```

## 忘记密码

**方式**

`POST`

**参数**

|         名称          |  类型  | 必须 |   说明   |
| :-------------------: | :----: | :--: | :------: |
|         code          | string |  是  |  验证码  |
|         phone         | string |  是  |  手机号  |
|       password        | string |  是  |  新密码  |
| password_confirmation | string |  是  | 确认密码 |

**路径**

`/api/user/forget-password`

**响应**

`Status code 200`

```json
{
  "msg": "设置成功",
  "code": 0,
  "data": null
}
```

## 更新用户信息

**方式**

`PATCH`

**参数**

|  名称  |  类型  | 必须 |         说明          |
| :----: | :----: | :--: | :-------------------: |
| gender |  int   |  否  | 性别:0-未知/1-男/2-女 |
|  name  | string |  否  |         呢称          |
| avatar | string |  否  |         头像          |

**路径**

`/api/user`

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": null
}
```

## 绑定提币地址

**方式**

`POST`

**参数**

|  名称   |  类型  | 必须 |  说明   |
| :-----: | :----: | :--: | :-----: |
| address | string |  是  |  地址   |
|  type   | string |  是  | fil/erc |

**路径**

`/api/coin/address`

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": null
}
```

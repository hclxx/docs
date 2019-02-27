# 用户

## 用户注册

**方式**

`POST`

**路径**

`/api/v1/auth/register`

**参数**

|         名称          |  类型  | 必须 |   说明   |
| :-------------------: | :----: | :--: | :------: |
|         phone         | string |  是  |  手机号  |
|       password        | string |  是  |   密码   |
| password_confirmation | string |  是  | 确认密码 |
|         code          | string |  是  |  验证码  |
|      invite_code      | string |  否  |  邀请码  |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "token": "2c2eefe290a452e51ede0253f88d94c3"
  }
}
```

## 用户登录

**方式**

`POST`

**路径**

`/api/v1/auth/login`

**参数**

|   名称   |  类型  | 必须 |                    说明                     |
| :------: | :----: | :--: | :-----------------------------------------: |
|  phone   | string |  是  |                   手机号                    |
|   type   | string |  是  | 登录方式: password-密码登录 code-验证码登录 |
| password | string |  是  |             type-password 必传              |
|   code   | string |  是  |               type-code 必传                |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "token": "2c2eefe290a452e51ede0253f88d94c3"
  }
}
```

## 用户退出

**方式**

`POST`

**路径**

`/api/v1/auth/logout`

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

## 个人中心

**方式**

`GET`

**路径**

`/api/v1/user`

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 1,
    "name": "哈哈哈1",
    "sex": 0,
    "email": null,
    "phone": "183****4309",
    "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg",
    "code": "HHS32J",
    "bio": null,
    "power": 220,
    "inviter": {
      "id": 2,
      "name": "帅哥",
      "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg",
      "invited_at": "2019-01-24 16:28:36"
    },
    "pay_pass_status": true,
    "detail": {
      "user_id": 1,
      "birthday": null,
      "location": null,
      "extend": {
        "iFutureMobile": "138322222"
      },
      "created_at": "2019-01-19 23:31:52",
      "updated_at": "2019-01-25 19:50:23"
    },
    /*默认收货人信息*/
    "consignee": {
      "id": 1,
      "user_id": 1,
      "name": "胡昊",
      "phone": "18382274309",
      "other": "其他",
      "area": "四川省成都市",
      "detail": "武侯区环球中心E2区",
      "tag": "家",
      "default": true
    }
  }
}
```

## 修改头像

**方式**

`POST`

**路径**

`/api/v1/user/avatar`

**参数**

|  名称  | 类型 | 必须 |   说明   |
| :----: | :--: | :--: | :------: |
| avatar | file |  是  | 图片文件 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg"
  }
}
```

## 修改资料

**方式**

`PUT`

**路径**

`/api/v1/user`

**参数**

|   名称   |  类型  | 必须 |          说明          |
| :------: | :----: | :--: | :--------------------: |
|   name   | string |  否  |          呢称          |
|   sex    |  int   |  否  | 性别: 0-保密 1-男 2-女 |
|   bio    | string |  否  |        个性签名        |
| birthday | string |  否  |          生日          |

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": {
    "id": 1,
    "name": "哈哈哈1" /*呢称*/,
    "bio": "没有个性" /*呢称*/,
    "sex": 0 /*性别: 0-保密 1-男 2-女 */,
    "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg" /*头像*/,
    "code": "HHS32J" /*邀请码*/,
    "power": 0 /*矿力*/,
    "details": {
      "user_id": 1,
      "birthday": null /*生日*/,
      "location": null /*位置*/,
      "extend": null /*扩展字段*/,
      "created_at": "2019-01-19 15:31:52",
      "updated_at": "2019-01-19 16:01:34"
    }
  }
}
```

## 修改登录密码

**方式**

`PATCH`

**路径**

`/api/v1/user/password`

**参数**

::: tip
修改成功后，后端会将 token 置为空，APP 重新登录即可
:::

|   名称   |  类型  | 必须 |  说明  |
| :------: | :----: | :--: | :----: |
| old_pass | string |  是  | 原密码 |
| new_pass | string |  是  | 新密码 |

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": []
}
```

## 忘记密码

**方式**

`PATCH`

**路径**

`/api/v1/user/forget/password`

**参数**

|         名称          |  类型  | 必须 |   说明   |
| :-------------------: | :----: | :--: | :------: |
|         phone         | string |  是  |   手机   |
|         code          | string |  是  |  验证码  |
|       password        | string |  是  |   密码   |
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

## 设置支付密码

**方式**

`POST`

**路径**

`/api/v1/user/pay-password`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| pay_pass | string |  是  | 支付密码 |
|   code   | string |  是  |  验证码  |

**响应**

`Status code 200`

```json
{
  "msg": "设置支付密码成功",
  "code": 0,
  "data": null
}
```

## 检测原支付密码

**方式**

`PATCH`

**路径**

`/api/v1/user/pay-password/valid`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
| pay_pass | string |  是  | 支付密码 |

**响应**

`Status code 200`

```json
{
  "msg": "设置支付密码成功",
  "code": 0,
  "data": {
    "status": true
  }
}
```

## 更新支付密码

**方式**

`PATCH`

**路径**

`/api/v1/user/pay-password`

**参数**

|     名称     |  类型  | 必须 |    说明    |
| :----------: | :----: | :--: | :--------: |
| new_pay_pass | string |  是  | 新支付密码 |
| old_pay_pass | string |  是  | 原支付密码 |

**响应**

`Status code 200`

```json
{
  "msg": "修改支付密码成功",
  "code": 0,
  "data": null
}
```

## 忘记支付密码

**方式**

`PATCH`

**路径**

`/api/v1/user/forget/pay-password`

**参数**

|   名称   |  类型  | 必须 |  说明  |
| :------: | :----: | :--: | :----: |
| new_pass | string |  是  | 新密码 |
|   code   | string |  是  | 验证码 |

**响应**

`Status code 200`

```json
{
  "msg": "修改支付密码成功",
  "code": 0,
  "data": null
}
```

## 用户资产

**方式**

`get`

**路径**

`/api/v1/wallets`

**参数**

|   名称   |  类型  | 必须 |        说明        |
| :------: | :----: | :--: | :----------------: |
| currency | string |  否  | comc-comc ore-矿石 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "amount": "99200.00000000" /*string 余额*/,
      "expend_total": "400.00000000",
      "income_total": "0.00000000",
      "waited_total": "0.00000000" /*string 待返还*/,
      "currency": "comc",
      "status": 0
    },
    {
      "id": 2,
      "user_id": 1,
      "amount": "100000.00000000",
      "expend_total": "0.00000000",
      "income_total": "0.00000000",
      "waited_total": "0.00000000",
      "currency": "ore",
      "status": 0
    }
  ]
}
```

## 用户收益

**方式**

`GET`

**路径**

`/api/v1/profits`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "mounth": "0" /*string 本月收益*/,
      "last_mouth": "0" /*string 上月收益*/,
      "total": "0" /*string 总收益*/,
      "currency": "ore" /*sting 货币：comc-comc ore-矿石*/
    },
    {
      "mounth": "0",
      "last_mouth": "0",
      "total": "0",
      "currency": "comc"
    }
  ]
}
```

## 邀请列表

**方式**

`GET`

**路径**

`/api/v1/invite/records`

**参数**

|  名称  | 类型 | 必须 |      说明       |
| :----: | :--: | :--: | :-------------: |
| limit  | int  |  是  | 条目数 默认 10  |
| offset | int  |  是  | 偏移量 默认为 0 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "amount": "100.00000000",
      "target_user_id": 2,
      "created_at": "2019-01-02 12:12:12",
      "currency": "ore" /*string 货币: ore-矿石 comc-comc*/,
      "target_user": {
        "id": 2 /*string 被邀请人信息*/,
        "name": "帅哥" /*string 被邀请人姓名*/,
        "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg" /*string 被邀请人头像*/
      }
    }
  ]
}
```

## 邀请配置

**方式**

`GET`

**路径**

`/api/v1/invite/config`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "postrers": [
      {
        "name": "新年海报",
        "image": "http://p59l6s1jm.bkt.clouddn.com/fcc9effd7b645167633169bba4ee7651.jpeg"
      }
    ],
    "invite": {
      "mode": "邀请方式",
      "rule": "奖励规则",
      "url": "http://youbinglian.com/invite"
    }
  }
}
```

## 资产信息

**方式**

`GET`

**路径**

`/api/v1/user/balance`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "power": {
      "amount": "220" /*矿力数额*/,
      "waited_total": "0" /*矿力待返还*/
    },
    "ore": {
      "amount": "9900.00000000" /*矿石数额*/,
      "waited_total": "0.00000000" /*矿石待返还*/
    },
    "comc": {
      "amount": "99200.00000000" /*comc数额*/,
      "waited_total": "0.00000000" /*comc待返还*/
    }
  }
}
```

## 用户矿力日志

**方式**

`GET`

**路径**

`/api/v1/user/power/notes`

**参数**

|  名称  | 类型 | 必须 |      说明       |
| :----: | :--: | :--: | :-------------: |
| limit  | int  |  是  | 条目数 默认 10  |
| offset | int  |  是  | 偏移量 默认为 0 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "title": "兑换商品",
      "count": 20,
      "action": 1 /*1: 入账 2: 出账*/,
      "created_at": "2019-01-23 14:34:53"
    },
    {
      "title": "兑换商品",
      "count": 10,
      "action": 1,
      "created_at": "2019-01-23 14:27:21"
    }
  ]
}
```

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
    "name": "CAJQCIML" /*名字*/,
    "avatar": null /*名称*/,
    "gender": 1 /*1-男 2-女 0-未知*/,
    "phone": "183****4309" /*手机*/,
    "code": "CAJQCIML" /*邀请码*/,
    "withdraw_address": null /*提币地址*/,
    "state": 0,
    "is_delete": 0,
    "created_at": "2020-08-12 16:59:48",
    "updated_at": "2020-08-12 16:59:48",
    "inviter": null /*邀请人信息*/,
    "paypass_status": false,
    "cer_status": 1
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

## 邀请列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |          说明          |
| :----: | :--: | :--: | :--------------------: |
| level  | int  |  否  | 邀请等级:1-一级/2-二级 |
| limit  | int  |  是  |    条目数 默认为 20    |
| offset | int  |  是  |    条目数 默认为 0     |

**路径**

`/api/invite/records`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "里斯" /*用户呢称*/,
      "avatar": "头像.png" /*头像*/,
      "phone": "1391111111" /*电话号码*/,
      "user_id": 1,
      "created_at": "2020-06-08 12:07:54" /*时间*/,
      "amount": "40.0000" /*认购总数*/
    }
  ]
}
```

## 邀请统计

**方式**

`GET`

**路径**

`/api/invite/count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "direct_count": 0 /*二级*/,
    "indirect_count": 1 /*一级*/
  }
}
```

## 绑定提币地址

**方式**

`PATCH`

**参数**

|  名称   |  类型  | 必须 |   说明   |
| :-----: | :----: | :--: | :------: |
| address | string |  是  | 提币地址 |

**路径**

`/api/user/withdraw-address`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 3,
    "name": "0CGLAS" /*用户呢称*/,
    "avatar": "nnnn.ong" /*头像*/,
    "phone": "183****4309" /*手机号*/,
    "gender": 0 /*性别：0-未知/1-男/2-女*/,
    "code": "0CGLAS" /*邀请码*/,
    "number": "49123453" /*火推号码*/,
    "cer_status": -1 /*是否认证:-1-未认证/0-审核中/1-审核成功/2-审核失败*/,
    "paypass_status": true /*支付密码设置状态*/,
    "withdraw_address": "0xqw3eqweqweqweqweqwdasdasdassad" /*提币地址*/,
    "state": 0,
    "created_at": "2020-06-11 10:13:26",
    "updated_at": "2020-06-11 10:13:26",
    "team_num": 1 /*团队邀请数*/,
    "inviter": null
  }
}
```

## 实名认证检查身份证

**方式**

`POST`

**路径**

`/api/certification-check`

**参数**

|     名称      |  类型  | 必须 |    说明    |
| :-----------: | :----: | :--: | :--------: |
| idcard_number | string |  是  | 身份证号码 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 实名认证银行卡开户行获取

**方式**

`POST`
**路径**

`/api/bankcard-info`

**参数**

|      名称       |  类型  | 必须 |    说明    |
| :-------------: | :----: | :--: | :--------: |
| bankcard_number | string |  是  | 身份证号码 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "bank_name": "农业银行" /*查询失败返回空字符串*/
  }
}
```

## 实名认证验证卡号提交

**方式**

`POST`

**路径**

`/api/certification`

**参数**

|      名称       |  类型  | 必须 |      说明      |
| :-------------: | :----: | :--: | :------------: |
|   idcard_name   | string |  是  | 身份证号码名字 |
|  idcard_number  | string |  是  |   身份证号码   |
| bankcard_number | string |  是  |    银行卡号    |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 获取收款方式列表

**方式**

`GET`

**路径**

`/api/receive-payments`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "name": "收款人" /*名字*/,
      "number": "61231231231231231" /*账号*/,
      "code_pic": null /*收款码*/,
      "bank": "中国银行" /*开户行*/,
      "type": 1 /*收款方式:1-银行卡/2-支付宝/3-USDT*/
    }
  ]
}
```

## 添加/更新收款方式

**方式**

`POST`

**路径**

`/api/receive-payments`

**参数**

|   名称   |  类型  | 必须 |       说明        |
| :------: | :----: | :--: | :---------------: |
|   type   | string |  是  | 收款方式:2-支付宝 |
|   name   | string |  是  |   实名认证姓名    |
|  number  | string |  是  |    支付宝账号     |
| code_pic | string |  是  |      收款码       |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "name": "收款人" /*名字*/,
      "number": "61231231231231231" /*账号*/,
      "code_pic": "asdasdas.png", /*收款码*/,
      "bank": "中国银行" /*开户行*/,
      "type": 1 /*收款方式:1-银行卡/2-支付宝/3-USDT*/
    }
  ]
}
```

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
    "id": 3,
    "name": "0CGLAS" /*用户呢称*/,
    "avatar": "nnnn.ong" /*头像*/,
    "phone": "183****4309" /*手机号*/,
    "gender": 0 /*性别：0-未知/1-男/2-女*/,
    "code": "0CGLAS" /*邀请码*/,
    "number": "49123453" /*火推号码*/,
    "cer_status": -1 /*是否认证:-1-未认证/0-审核中/1-审核成功/2-审核失败*/,
    "paypass_status": true,/*支付密码设置状态*/
    "withdraw_address": "0xqw3eqweqweqweqweqwdasdasdassad" /*提币地址*/,
    "state": 0,
    "created_at": "2020-06-11 10:13:26",
    "updated_at": "2020-06-11 10:13:26",
    "team_num": 1 /*团队邀请数*/,
    "inviter": null
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

|    名称    |  类型  | 必须 |      说明      |
| :--------: | :----: | :--: | :------------: |
|  address   | string |  是  |    提币地址    |

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
    "paypass_status": true,/*支付密码设置状态*/
    "withdraw_address": "0xqw3eqweqweqweqweqwdasdasdassad" /*提币地址*/,
    "state": 0,
    "created_at": "2020-06-11 10:13:26",
    "updated_at": "2020-06-11 10:13:26",
    "team_num": 1 /*团队邀请数*/,
    "inviter": null
  }
}
```

## 实名认证支付

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 |    说明    |
| :----: | :----: | :--: | :--------: |
|  name  | string |  是  | 身份证姓名 |
| number | string |  是  |  身份证号  |

**路径**

`/api/pay-orders`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "result": "zxcascasd" /*支付宝支付信息*/,
    "order_id": 8 /*订单ID*/
  }
}
```

## 检查实名认证支付状态

**方式**

`GET`

**参数**

none

**路径**

`/api/pay-orders/{id}/check`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "status": 1 /*1-支付成功，其他支付未成功*/
  }
}
```

## 获取实名认证 token

**方式**

`POST`

**参数**

|   名称   |  类型  | 必须 |  说明   |
| :------: | :----: | :--: | :-----: |
| order_id |  int   |  是  | 订单 ID |
|   name   | string |  是  |  姓名   |
|  number  | string |  是  | 证件号  |

**路径**

`/api/describe-verify-token`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "verify_token": "xxxadsadasd" /*认证 token*/
  }
}
```

## 检查实名认证结果

**方式**

`POST`

**参数**

|   名称   | 类型 | 必须 |  说明   |
| :------: | :--: | :--: | :-----: |
| order_id | int  |  是  | 订单 ID |

**路径**

`/api/describe-verify-result`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "ok": true /*是否成功: false-失败/true-成功*/
  }
}
```

## 检查实名订单号

**方式**

`GET`

**参数**

none

**路径**

`/api/cer-order-id`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "order_id": 1 /*订单ID，为0代表未支付*/,
    "name": "12312" /*姓名, 未支付为 null*/,
    "number": "asdasdsad" /*证件号, 未支付为 null*/
  }
}
```

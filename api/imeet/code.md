# 验证码

## 发送短信验证码[无需认证登录]

**方式**

`POST`

**路径**

`/api/verification-code`

**参数**

|  名称   |  类型  | 必须 |                                                     说明                                                      |
| :-----: | :----: | :--: | :-----------------------------------------------------------------------------------------------------------: |
|  phone  | string |  是  |                                                    手机号                                                     |
|  scene  | string |  是  | 发送场景,可选:app-pass-login 密码登录,app-code-login 短信验证码登录,app-register 注册,app-login-pass 忘记密码 |
| ticket  | string |  是  |                                                  防水墙票据                                                   |
| randstr | string |  是  |                                                 防水墙随机串                                                  |

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": null
```

## 发送短信验证码[需认证登录]

**方式**

`POST`

**路径**

`/api/auth/verification-code`

**参数**

|  名称   |  类型  | 必须 |                                说明                                 |
| :-----: | :----: | :--: | :-----------------------------------------------------------------: |
|  scene  | string |  是  | 发送场景,可选:app-pay-pass(修改支付密码),app-bind-phone(换绑手机号) |
| ticket  | string |  是  |                             防水墙票据                              |
| randstr | string |  是  |                            防水墙随机串                             |

**响应**

`Status code 200`

```json
{
  "msg": "发送成功",
  "code": 0,
  "data": null
}
```

## 短信验证码检测

**方式**

`POST`

**路径**

`/api/verification-code/check`

**参数**

| 名称  |  类型  | 必须 |   说明   |
| :---: | :----: | :--: | :------: |
| phone | string |  是  |  手机号  |
| scene | string |  是  | 发送场景 |
| code  | string |  是  |  验证码  |

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": {
        "status": false,/*false-通过 true-失败*/
    }
```

## 短信验证码检测[需认证登录]

**方式**

`POST`

**路径**

`/api/verification-code/auth/check`

**参数**

| 名称  |  类型  | 必须 |             说明             |
| :---: | :----: | :--: | :--------------------------: |
| scene | string |  是  | 发送场景可选：app-bind-phone |
| code  | string |  是  |            验证码            |

**响应**

`Status code 200`

```json
{
  "msg": "发送成功",
  "code": 0,
  "data": {
    "status": false /*false-通过 true-失败*/
  }
}
```

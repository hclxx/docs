# 验证码

**场景说明**

`register-注册/login-登录/set-pay-pass-设置支付密码/update-login-pass-更新登录密码`

## 发送验证码

**方式**

`POST`

**路径**

`/api/verification-code`

**参数**

| 名称  |  类型  | 必须 |   说明   |
| :---: | :----: | :--: | :------: |
| phone | string |  否  |  手机号  |
| scene | string |  是  | 发送场景 |

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": null
```

## 短信验证码检测

**方式**

`GET`

**路径**

`/api/verification-code/check`

**参数**

| 名称  |  类型  | 必须 |   说明   |
| :---: | :----: | :--: | :------: |
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

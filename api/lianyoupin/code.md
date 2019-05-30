# 短信验证码

## 验证码

**方式**

`POST`

**路径**

`/api/v1/verification/code`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| number | string |  是  |                   仅支持手机号,已授权用户不需要传手机号                   |
| scene  | string |  是  | 场景: register-注册 forget-pass-忘记密码 login-登录 pay-pass-设置支付密码 cash-提现 |

**响应**

`Status code 200`

```json
{
  "msg": "发送成功",
  "code": 0,
  "data": []
}
```

## 验证码是否有效

**方式**

`POST`

**路径**

`/api/v1/verification/code/valid`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| phone | string |  是  | 手机号，如用户是已登录不需传递 |
| code  | string |  是  |             验证码             |
| scene  | string |  是  |             验证场景             |

**响应**

`Status code 200`

```json
{
  "msg": "发送成功",
  "code": 0,
  "data": {
    "status": true /*bool true-验证成功*/
  }
}
```

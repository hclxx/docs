# 验证码

## 发送短信验证码[无需认证登录]

**方式**

`POST`

**路径**

`/api/verification-code`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| phone | string |  是  |                  手机号                   |
| scene | string |  是  |                 发送场景,可选:app-login,app-register,app-login-pass                  |
| ticket | string |  是  |                防水墙票据        |
| randstr | string |  是  |                 防水墙随机串             |

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

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| scene | string |  是  |                 发送场景,可选:app-pay-pass                  |
| ticket | string |  是  |                防水墙票据        |
| randstr | string |  是  |                 防水墙随机串             |

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": null
}
```
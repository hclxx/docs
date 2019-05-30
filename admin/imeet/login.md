# 管理员登录/登出

## 登入

`admin/auth/login`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |               说明                |
| :------: | :----: | :--: | :--: | :-------------------------------: |
|  email   | string |  无  |  否  |  邮箱登入 phone 字段不存在则必须  |
|  phone   | string |  无  |  否  | 手机号登入 email 字段不存在则必须 |
| password | string |  无  | 必须 |             登入密码              |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
    }
}
```

**ERROR 返回体**

```json
{
    "message": "账号或者密码错误"
}
```

## 登出

`admin/auth/logout`

**请求方式**

`POST`

**SUCCESS 返回体**

```json
{
    "msg": "退出成功",
    "code": 0,
    "data": null
}
```
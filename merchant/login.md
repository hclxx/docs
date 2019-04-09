## 商家登入

`merchant/auth/login`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                   说明                   |
| :------: | :----: | :--: | :--: | :--------------------------------------: |
|  phone   | string |  无  |  否  | 手机号, email 字段不存在时, 此字段不为空 |
|  email   | string |  无  |  否  |  邮箱, phone 字段不存在时, 此字段不为空  |
| password | string |  无  |  是  |                   密码                   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "登入成功"
}
```

**ERROR 返回体**

```json
{
  "message": "账号或者密码错误"
}
```

## 商家登出

`merchant/auth/logout`

**请求方式**

`PUT`

**请求参数**

`无`

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "退出成功"
}
```

**ERROR 返回体**

`无`
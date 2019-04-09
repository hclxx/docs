# 商户端


## 商家信息

`/merchant/info`

**请求方式**

`get`

**请求参数**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "id": 2,
  "name": "名称" /*名称*/,
  "email": "1986513441@qq.com" /*邮箱*/,
  "phone": 18728624681 /*手机号*/,
  "avatar_id": 9 /*头像ID*/,
  "status": "1" /*1: 正常 2: 禁止*/,
  "last_ip": "127.0.0.1",
  "last_time": "2019-01-18 19:18:08",
  "created_at": "2019-01-18 18:34:47",
  "updated_at": "2019-01-18 19:18:08",
  "avatar": {
    "id": 9,
    "file_url": "http://p59l6s1jm.bkt.clouddn.com/16a5bba33d12b7ae7d15c6a87542d43d.jpeg"
  }
}
```

**ERROR 返回体**

`无`



## 商家修改基本信息

`merchant/info`

**请求方式**

`PUT`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   name    | string |  无  |  否  | 用户名称 |
|   email   | string |  无  |  否  |   邮箱   |
|   phone   | string |  无  |  是  |  手机号  |
| avatar_id |  int   |  无  |  否  | 头像 ID  |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "头像已存在"
}
```

## 商家修改登入密码

`merchant/update/login/password`

**请求方式**

`PUT`

**请求参数**

|         名称          |  类型  | 默认 | 必须 |   说明   |
| :-------------------: | :----: | :--: | :--: | :------: |
|     old_password      | string |  无  |  是  |  旧密码  |
|       password        | string |  无  |  是  |  新密码  |
| password_confirmation | string |  无  |  是  | 确认密码 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "新密码不能为空"
}
```

## 商家修改支付密码

`merchant/pay/password`

**请求方式**

`PATCH`

**请求参数**

|         名称          |  类型  | 默认 | 必须 |                 说明                  |
| :-------------------: | :----: | :--: | :--: | :-----------------------------------: |
|       password        | string |  无  |  是  |                新密码                 |
|       verify_code     | int |  无  |  是  |               短信验证码                |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "短信验证码错误"
}
```

## 找回登入密码

`merchant/find/login/password`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |              说明              |
| :------: | :----: | :--: | :--: | :----------------------------: |
|  phone   | string |  无  |  否  | 手机号 `type = sms 此字段必须` |
|  email   | string |  无  |  否  | 邮箱 `type = email 此字段必须` |
|   type   | string |  无  |  是  | sms-手机号验证 email-邮箱验证  |
| password | string |  无  |  是  |              密码              |
|   code   | string |  无  |  是  |             验证码             |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "验证码错误"
}
```

## 找回支付密码

`merchant/find/pay/password`

**请求方式**

`PATCH`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |              说明              |
| :------: | :----: | :--: | :--: | :----------------------------: |
|  phone   | string |  无  |  否  | 手机号 `type = sms 此字段必须` |
|  email   | string |  无  |  否  | 邮箱 `type = email 此字段必须` |
|   type   | string |  无  |  是  | sms-手机号验证 email-邮箱验证  |
| password | string |  无  |  是  |              密码              |
|   code   | string |  无  |  是  |             验证码             |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "验证码错误"
}
```


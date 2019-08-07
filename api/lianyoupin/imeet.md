# iMeet

## 绑定 iMeet 账号

**方式**

`POST`

**路径**

`/api/v1/imeet/bind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  phone  | string |  是  | imeet 账号 |
| password | string |  是  | imeet 密码 |
| code | string |  是  | 短信验证码 |

**响应**

`Status code 200`

```json
{
  "msg": "绑定成功",
  "code": 0,
  "data": null
}
```

## 解除 iMeet 账号

**方式**

`POST`

**路径**

`/api/v1/imeet/unbind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |

**响应**

`Status code 200`

```json
{
  "msg": "解除绑定成功",
  "code": 0,
  "data": null
}
```

## 获取 imeet 用户信息

**方式**

`GET`

**路径**

`/api/v1/imeet/user`

**响应**

`Status code 200`

```json
{
  "msg": "获取成功",
  "code": 0,
  "data": {
    "username": "泥石流", //imeet昵称
    "mobile": "13547899124", //imeet账号
    "balance": "997.000000" //矿石余额
  }
}
```

## 矿石转入商城

**方式**

`POST`

**路径**

`/api/v1/imeet/tanrs`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| number  | int  |  是  | 转入数量 |
| pay_pass  | string  |  是  | 自身应用支付密码 |

**响应**

`Status code 200`

```json
{
  "msg": "转入成功",
  "code": 0,
  "data": null
}
```

## 发送到短信验证码

**方式**

`GET`

**路径**

`/api/v1/imeet/sms`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| phone  | string  |  是  | 手机号 |
| scene  | string  |  是  | 默认值为：third_bind |

**响应**

`Status code 200`

```json
{
    "msg": "请求成功",
    "code": 0,
    "data":null
}
```

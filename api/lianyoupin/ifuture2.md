# iFuture2

## 链优品绑定生态应用列表

**方式**

`GET`

**路径**

`api/v1/bind`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "bind": 0,/*0-未绑定 1-已绑定*/
            "name": "",
            "phone": "",
            "from": "iMeet"
        },
        {
            "bind": 0,
            "name": "",
            "phone": "",
            "from": "iFuture1"
        },
        {
            "bind": 1,
            "name": "BWIN0002",
            "phone": "17602915225",
            "from": "iFuture2"
        }
    ]
}

```


## 绑定 iFuture2 账号

**方式**

`POST`

**路径**

`/api/v1/ifuture2/bind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  mobile  | string |  是  | ifuture2 账号 |
| password | string |  是  | ifuture2 密码 |
| session_id | string |  是  | ifuture2 密码 |
| captcha | string |  是  | 短信验证码 |

**响应**

`Status code 200`

```json
{
  "msg": "绑定成功",
  "code": 0,
  "data": null
}
```

## 解除 iFuture2 账号

**方式**

`POST`

**路径**

`/api/v1/ifuture2/unbind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  mobile  | string |  是  | ifuture2 账号 |

**响应**

`Status code 200`

```json
{
  "msg": "解除绑定成功",
  "code": 0,
  "data": null
}
```

## 获取 ifuture2 用户信息

**方式**

`GET`

**路径**

`/api/v1/ifuture2/user`

**响应**

`Status code 200`

```json
{
  "msg": "获取成功",
  "code": 0,
  "data": {
    "username": "泥石流", //ifuture2昵称
    "mobile": "13547899124", //ifuture2账号
    "balance": "997.000000" //矿石余额
  }
}
```

## 矿石转入商城

**方式**

`POST`

**路径**

`/api/v1/ifuture2/trans`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| num  | int  |  是  | 转入数量 |
| pay_pass  | string  |  是  | 自身应用支付密码 |

**响应**

`Status code 200`

```json
{
  "msg": "转入成功",
  "code": 0,
  "data": {
    "uid": "1", //用户ID
    "mobile ": "13547899124", //ifuture 账号
    "balance ": "997.0000" //矿石余额
  }
}
```

## 发送到短信验证码

**方式**

`POST`

**路径**

`/api/v1/ifuture2/sms`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| mobile  | string  |  是  | 手机号 |

**响应**

`Status code 200`

```json
{
    "msg": "请求成功",
    "code": 0,
    "data": {
        "session_id": "dsadasdasdsa"/*会话id*/
    }
}
```

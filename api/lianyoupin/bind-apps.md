# 绑定生态应用

## 绑定生态应用列表

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

## 绑定 iMeet 账号

**方式**

`POST`

**路径**

`/api/v1/imeet/bind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  mobile  | string |  是  | imeet 账号 |
| password | string |  是  | imeet 密码 |
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

## 获取 iMeet 用户信息

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

## iMeet 矿石转入商城

**方式**

`POST`

**路径**

`/api/v1/imeet/trans`

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
  "data": null
}
```

## iMeet 发送短信验证码

**方式**

`POST`

**路径**

`/api/v1/imeet/sms`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| mobile  | string  |  是  | 手机号 |
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

## 绑定 iFuture 账号

**方式**

`POST`

**路径**

`/api/v1/ifuture/bind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  mobile  | string |  是  | ifuture 账号 |
| password | string |  是  | ifuture 密码 |
| session_id | string |  是  | ifuture 密码 |
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

## 解除 iFuture 账号

**方式**

`POST`

**路径**

`/api/v1/ifuture/cancel/bind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  mobile  | string |  是  | ifuture 账号 |

**响应**

`Status code 200`

```json
{
  "msg": "解除绑定成功",
  "code": 0,
  "data": null
}
```

## 获取 iFuture 用户信息

**方式**

`GET`

**路径**

`/api/v1/ifuture/user`

**响应**

`Status code 200`

```json
{
  "msg": "获取成功",
  "code": 0,
  "data": {
    "username": "泥石流", //ifuture昵称
    "mobile": "13547899124", //ifuture账号
    "balance": "997.000000" //矿石余额
  }
}
```

## iFuture 矿石转入商城

**方式**

`POST`

**路径**

`/api/v1/ifuture/tanrs`

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

## iFuture 发送短信验证码

**方式**

`GET`

**路径**

`/api/v1/ifuture/send-sms`

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

## 获取 iFuture2 用户信息

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

## iFuture2 矿石转入商城

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

## iFuture2 发送短信验证码

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
## 绑定 iWallet 账号

**方式**

`POST`

**路径**

`/api/v1/iwallet/bind`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
|  mobile  | string |  是  | iwallet 账号 |
| password | string |  是  | iwallet登录密码 |
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

## 解除 iWallet 账号绑定

**方式**

`POST`

**路径**

`/api/v1/iwallet/cancel/bind`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "解除绑定成功",
  "code": 0,
  "data": null
}
```

## 获取 iWallet 用户钱包信息

**方式**

`POST`

**路径**

`/api/v1/iwallet/user`

**响应**

`Status code 200`

```json
{
    "msg": "获取成功",
    "code": 0,
    "data": [
        {
            "contract": "0xa5e99ad202bdd71d3518306cf4dd163261981af1", /*合约地址*/
            "currency": "COMC",                                       /*代币简称*/
            "amount": "100"                                         /*可用数量*/
        },
        {
            "contract": "0xff5d24F5e740C4E6Ad47e483a3F4d9bc7b4bd2b9",
            "currency": "CT",
            "amount": "9"
        },
        {
            "contract": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "currency": "USDT",
            "amount": "1000000000000000000"
        }
    ]
}
```

## iWallet 资产转入商城

**方式**

`POST`

**路径**

`/api/v1/iwallet/trans`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| num  | int  |  是  | 转入数量 |
| pay_pass  | string  |  是  | 自身应用支付密码 |
| contract  | string  |  是  | 钱包信息中的代币合约地址 |
| currency  | string  |  是  | 钱包信息中的代币标识 |

**响应**

`Status code 200`

```json
{
    "msg": "转入成功",
    "code": 0,
    "data": true
}
```

## iWallet 发送短信验证码

**方式**

`POST`

**路径**

`/api/v1/iwallet/send-sms`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| mobile  | string  |  是  | 手机号 |

**响应**

`Status code 200`

```json
{
    "msg": "success",
    "code": 0,
    "data": true
}
```
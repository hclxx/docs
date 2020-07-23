# 绑定生态应用

## 绑定生态应用列表

**方式**

`GET`

**路径**

`api/bind`

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
            "from": "iWallet"
        }
    ]
}

```

## 绑定 iWallet 账号

**方式**

`POST`

**路径**

`/api/iwallet/bind`

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
    "data": {
        "userName": "泥石流",
        "account": "13547899124"
    }
}
```

## 解除 iWallet 账号绑定

**方式**

`POST`

**路径**

`/api/iwallet/cancel/bind`

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
# iFuture

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

**响应**

`Status code 200`

```json
{
  "msg": "绑定成功",
  "code": 0,
  "data": null
}
```

## 获取 ifuture 用户信息

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

## 矿石转入商城

**方式**

`POST`

**路径**

`/api/v1/ifuture/tanrs`

**参数**

| 名称 | 类型 | 必须 |   说明   |
| :--: | :--: | :--: | :------: |
| num  | int  |  是  | 转入数量 |

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

## 取消 ifuture 绑定

**方式**

`POST`

**路径**

`/api/v1/ifuture/cancel/bind`

**响应**

`Status code 200`

```json
{
  "msg": "解除绑定成功",
  "code": 0,
  "data": null
}
```

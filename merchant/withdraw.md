# 商家提现信息

## 提现地址列表

`merchant/withdraw/address`

**请求方式**

`GET`

**请求参数**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 5,
    "merchant_id": 2,
    "name": "bbb",      //  开户人姓名
    "address": "bbbb",  //  开户地址
    "type": 2,          //  0: 微信 1: 支付宝 2: 银行卡
    "remark": "456",    //  账户备注
    "created_at": "2019-01-21 16:31:05",
    "updated_at": "2019-01-21 16:31:05"
  }
]
```

**ERROR 返回体**

`无`

## 提现地址创建

`merchant/withdraw/address`

**请求方式**

`POST`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  name   | string |  无  |  是  |   开户人姓名   |
| address | string |  无  |  是  |   账号地址   |
| verifiy_code | string |  无  |  是  |   短信验证码   |
|  type   |  int   |  无  |  是  | 地址分类 | 0: 微信 1: 支付宝 2: 银行卡 |
|  remark   | string |  无  |  是  |   账户备注   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

**ERROR 返回体**

```json
{
  "message": "名称不能为空"
}
```

## 提现地址修改

`merchant/withdraw/address/{address}`

**请求方式**

`PUT`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  name   | string |  无  |  是  |   开户人姓名   |
| address | string |  无  |  是  |   账号地址   |
| verifiy_code | string |  无  |  是  |   短信验证码   |
|  type   |  int   |  无  |  是  | 地址分类 | 0: 微信 1: 支付宝 2: 银行卡 |
|  remark   | string |  无  |  是  |   账户备注   |

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
  "message": "名称不能为空"
}
```

## 提现地址删除

`merchant/withdraw/address/{address}`

**请求方式**

`DELETE`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
| verify_code | string |  无  |  是  |   短信验证码   |

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

`无`

**ERROR 返回体**

`无`


## 提现

`merchant/withdraw`

**请求方法**

`POST`

**请求参数**

|       名称        |  类型  | 必须 |    说明     |
| :---------------: | :----: | :--: | :---------: |
|      amount       | float  |  是  |  提现金额   |
| wallet_address_id |  int   |  否  | 钱包地址 ID |
|   pay_password    | string |  是  |  支付密码   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "提现成功"
}
```
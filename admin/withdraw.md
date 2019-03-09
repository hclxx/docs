# 提现

## 申请列表

`admin/withdraw`

**请求方式**

`GET`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
limit | int | 15 | 否 | 每页条数
target_id | int | 无 | 否 | 商家ID
phone | string | 无 | 否 | 手机号
email | string | 无 | 否 | 邮箱

**返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "merchant_id": 1,
            "address": {
                "id": 1,
                "name": "名称", // 名称
                "address": "18728624682", // 提现地址
                "type": 1 //  1: 支付宝 2: 银行卡
            },
            "amount": "100", // 提现金额
            "charge": "0", // 手续费
            "type": 1,
            "status": "1", // 0: 待处理 1: 成功 2: 失败
            "created_at": "2019-02-14 15:16:18",
            "updated_at": "2019-02-14 15:16:18",
            "name": "商家", // 商家名称
            "phone": "18728624682", // 商家手机号
            "email": "1986513441@qq.com" // 邮箱
        }
    ],
    "first_page_url": "http://comc.com/admin/withdraw?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/withdraw?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/withdraw",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

## 处理提现

`admin/withdraw/{withdraw}`

**请求方式**

`PUT`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
action | int | 无 | 是 | 1: 通过 2: 驳回
remark | string | 无 | 否 | 说明

**返回体**

```json
{
  "message": "操作成功"
}
```


## 用户提现列表

`admin/wallets/cash`

**请求方式**

`GET`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
limit | int | 15 | 否 | 每页条数

**返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 504,
            "title": "提现",
            "user_id": 10,
            "target_user_id": 10,
            "target_type": "cash",
            "target_id": 0,
            "amount": "1100.00000000",/*提现总额:手续费+提现金额*/
            "balance": "93112.00000009",
            "curr_balance": "94212.00000009",
            "currency": "comc",
            "action": 2,
            "status": 0, /*0-待审核 1-完成 2-拒绝*/
            "type": 10,
            "extend": {
                "to": "0x1E2F8c2b4B659732b9D4989Dc28B5EdF1EB253e0",/*提现目标地址*/
                "from": "0x1E2F8c2b4B659732b9D4989Dc28B5EdF1EB253e0",/*提现地址*/
                "amount": 1000,/*提现金额*/
                "charge": 100/*提现手续费*/
            },
            "created_at": "2019-03-09 18:47:44",
            "updated_at": "2019-03-09 18:47:44",
            "user": {/*用户*/
                "id": 10,
                "name": "哈哈",
                "sex": 2,
                "email": null,
                "phone": "18382274309",
                "avatar": "http://szl.qingchuanren.com/f008580517f1a401c525fce3f4d05359.jpeg",
                "code": "S54271",
                "bio": "傻逼",
                "power": 128,
                "last_time": "2019-03-08 00:50:29",
                "last_ip": "182.138.84.60",
                "status": 0,
                "created_at": "2019-01-31 01:49:21",
                "updated_at": "2019-03-09 01:26:48"
            }
        },
    ],
    "first_page_url": "http://shop.igoods.io/admin/wallets/cash?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://shop.igoods.io/admin/wallets/cash?page=1",
    "next_page_url": null,
    "path": "http://shop.igoods.io/admin/wallets/cash",
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
}
```

## 处理用户提现列表

`admin/wallets/cash/:id`

**请求方式**

`PUT`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
status | int | 无 | 是 | 1: 通过 2: 驳回
remark | string | 无 | 否 | 说明status为2必须

**返回体**

```json
{
  "message": "操作成功",
  "status": 2,
}
```

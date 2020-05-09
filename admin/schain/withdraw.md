# 提现管理

## 申请提现列表

`admin/withdraws`

**请求方式**

`GET`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   limit   |  int   |  15  |  是  | 每页条数 |
| page |  int   |  无  |  是  | 当前页数  |
|   status   | int |  无  |  否  |  手机号  |
|   username   | string |  无  |  否  |   邮箱   |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "data": {
            "current_page": 1,
            "data": [
                {
                    "id": 8,
                    "user_id": 4,
                    "amount": "15.00",/*提现金额*/
                    "service_charge": "1.50",/*提现服务费*/
                    "account_type": "alipay",/*提现类型 wechat-微信 alipay-支付宝*/
                    "account_info": {/*提现账户信息*/
                        "name": "卡啊",/*姓名*/
                        "number": "555"/*提现账号*/
                    },
                    "handler_id": 0,/*审核人id*/
                    "status": 0,/*状态:0-待审核 1-通过 2-驳回*/
                    "reason": null,/*驳回原因*/
                    "created_at": "2020-05-09 16:05:29",
                    "updated_at": "2020-05-09 16:05:29",
                    "user": {
                        "id": 4,
                        "name": "NPA6RI",
                        "avatar": null
                    },
                    "handler": null
                },
                {
                    "id": 2,
                    "user_id": 2,
                    "amount": "1.00",
                    "service_charge": "0.10",
                    "account_type": "alipay",
                    "account_info": {
                        "name": "晏凡",
                        "number": "18781601153"
                    },
                    "handler_id": 1,
                    "status": 1,
                    "reason": null,
                    "partner_trade_no": null,
                    "partner_error_info": null,
                    "created_at": "2020-05-08 08:40:32",
                    "updated_at": "2020-05-08 08:44:33",
                    "user": {
                        "id": 2,
                        "name": "浩大哥",
                        "avatar": "20200508115905967.jpg"
                    },
                    "handler": {
                        "id": 1,
                        "name": "超级管理员"
                    }
                }
            ],
            "first_page_url": "https:\/\/cl.chainonedapp.com\/admin\/withdrawals?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "https:\/\/cl.chainonedapp.com\/admin\/withdrawals?page=1",
            "next_page_url": null,
            "path": "https:\/\/cl.chainonedapp.com\/admin\/withdrawals",
            "per_page": 20,
            "prev_page_url": null,
            "to": 7,
            "total": 7
        },
        "total_amount": "165.00",
        "wait_amount": "163.00",
        "success_amount": "1.00",
        "fail_amount": "1.00",
        "today_amount": "163.00",
        "service_charge": "0.10"
    }
}
```

## 同意提现

`admin/withdraws/{withdraw}/argee`

**请求方式**

`PUT`

**返回体**

```json
{
    "msg": "同意成功",
    "code": 0,
    "data": null
}
```

## 驳回提现

`admin/withdraws/{withdraw}/reject`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |      说明       |
| :----: | :----: | :--: | :--: | :-------------: |
| remark | string |  无  |  否  |      说明       |

**返回体**

```json
{
    "msg": "驳回成功",
    "code": 0,
    "data": null
}
```


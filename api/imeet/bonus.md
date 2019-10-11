# 红包

## 发送红包

**方式**

`POST`

**路径**

`/api/bonus/send`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| pay_pass | string |  是  | 支付密码  |
| amount | string |  是  | 红包金额  |
| num | integer |  否  | 红包个数 仅当 `channel` 为 `group` 必填写 |
| channel | string |  是  | 发放渠道: `personal`-个人 `group`-群 |
| target_id | string |  是  | 目标ID，如  `channel` 为  `personal` 为用户id, 如  `channel` 为  `group` 是群id  |
| type | string |  是  | 红包类型: `common`-普通 `luck`-手气,当发送个人红包 `type` 为 `common` |
| remark | string |  是  | 备注  |

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": {
        "bonus_id": 11232 /*红包id*/
    } 
```

## 领取红包

**方式**

`POST`

**路径**

`/api/bonus/:id/receive`

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": {
        "amount": "40",/*领取的金额*/
    } 
```

## 红包详情

**方式**

`GET`

**路径**

`/api/bonus/:id`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 4,
        "amount": "100.00",/*总金额*/
        "num": 2,/*红包总数量*/
        "receive_num": 1,/*已领取数量*/
        "received": false,/*是否领取: true-是 false-否*/
        "receive_amount": "13.50",/*已领取金额*/
        "best_id": 4,/*最佳手气用户id*/
        "target_id": 3,
        "channel": "group",/*发放渠道: group-群 personal-个人*/
        "type": "common",/*红包类型: common-普通 luck-手气*/
        "coin": "ct",/*代币类型: ct-矿石*/
        "remark": "恭喜发财，大吉大利",/*备注*/
        "status": 0,/*0-待领取 1-已领取完 2-过期*/
        "expired_at": "2019-10-10 15:51:47",
        "created_at": "2019-10-10 11:57:29",
        "updated_at": "2019-10-10 11:57:29",
        /*发送者信息*/
        "user": {
            "id": 4,
            "name": "11",
            "avatar": null,
            "sex": 0,
            "big_name": 0,
            "grade": {
                "name": "懵懂小白",
                "level": "1",
                "icon": "aptwckzeh.png",
                "small_icon": "tcacsimxf.png",
                "min": 0,
                "max": 100,
                "next_name": "晶莹玻璃"
            }
        }
    }
}
```

## 领取红包用户

**方式**

`GET`

**路径**

`/api/bonus/:id/users`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| limit | integer |  是  | 条目数 默认20  |
| after | integer |  是  | 最后一条数据ID |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 4,
            "bonus_id": 1,
            "amount": "13.50",
            "created_at": "2019-10-10 11:59:16",/*领取时间*/
            "updated_at": "2019-10-10 11:59:16",
            "is_best": true,/*数否手气最佳:false-否 true-是*/
            /*领取者信息*/
            "user": {
                "id": 4,
                "name": "11",
                "avatar": null,
                "sex": 0,
                "big_name": 0,
                "grade": {
                    "name": "懵懂小白",
                    "level": "1",
                    "icon": "aptwckzeh.png",
                    "small_icon": "tcacsimxf.png",
                    "min": 0,
                    "max": 100,
                    "next_name": "晶莹玻璃"
                }
            }
        }
    ]
}
```

## 收到红包记录

**方式**

`GET`

**路径**

`/api/bonus/received/records`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| limit | integer |  是  | 条目数 默认20  |
| offset | integer |  是  | 偏移量 |
| year | string |  是  | 默认取当前时间年份 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 4,
            "user_id": 4,
            "amount": "50.00",/*金额 单位CT*/
            "bonus_id": 6,
            "created_at": "2019-10-10 13:45:58",/*时间*/
            "bonus": {
                "id": 6,
                "user_id": 4,
                "amount": "100.00",
                "num": 2,/*红包总数*/
                "receive_num": 1,/*已领取数量*/
                "receive_amount": "50.00",/*已领取金额*/
                "best_id": 0,
                "target_id": 3,
                "channel": "group",/*渠道: group-群 personal-个人*/
                "type": "common",/*红包类型: common-普通红包 luck-拼手气红包*/
                "coin": "ct", /*红包代币类型: ct-矿石*/
                "remark": "恭喜发财，大吉大利",
                "status": 0,/*状态： 0-代领取 1-已完成 2-已过期*/
                "expired_at": "2019-10-10 13:45:58",
                "created_at": "2019-10-10 13:45:28",
                "updated_at": "2019-10-10 13:45:28",
                /*红包发送人信息*/
                "user": {
                    "id": 4,
                    "name": "11",
                    "avatar": null,
                    "sex": 0,
                    "big_name": 0,
                    "grade": {
                        "name": "懵懂小白",
                        "level": "1",
                        "icon": "aptwckzeh.png",
                        "small_icon": "tcacsimxf.png",
                        "min": 0,
                        "max": 100,
                        "next_name": "晶莹玻璃"
                    }
                }
            }
        }
    ]
}
```

## 收到红包记录

**方式**

`GET`

**路径**

`/api/bonus/send/records`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| limit | integer |  是  | 条目数 默认20  |
| offset | integer |  是  | 偏移量 |
| year | string |  是  | 默认取当前时间年份 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
        "id": 6,
        "user_id": 4,
        "amount": "100.00",/*红包总额*/
        "num": 2,/*红包总数*/
        "receive_num": 1,/*已领取数量*/
        "receive_amount": "50.00",/*已领取金额*/
        "best_id": 0,
        "target_id": 3,
        "channel": "group",/*渠道: group-群 personal-个人*/
        "type": "common",/*红包类型: common-普通红包 luck-拼手气红包*/
        "coin": "ct", /*红包代币类型: ct-矿石*/
        "remark": "恭喜发财，大吉大利",
        "status": 0,/*状态： 0-代领取 1-已完成 2-已过期*/
        "expired_at": "2019-10-10 13:45:58",
        "created_at": "2019-10-10 13:45:28",
        "updated_at": "2019-10-10 13:45:28",
        /*红包发送人信息*/
        "user": {
            "id": 4,
            "name": "11",
            "avatar": null,
            "sex": 0,
            "big_name": 0,
            "grade": {
                "name": "懵懂小白",
                "level": "1",
                "icon": "aptwckzeh.png",
                "small_icon": "tcacsimxf.png",
                "min": 0,
                "max": 100,
                "next_name": "晶莹玻璃"
            }
        }
        }
    ]
}
```

## 红包统计

**方式**

`GET`

**路径**

`/api/bonus/statistics`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| year | string |  是  | 默认取当前时间年份 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "best_num": 1,/*手气最佳*/
        "send_num": 13,/*发放的红包数量*/
        "send_amount": "1300.00",/*发出去的总金额*/
        "receive_num": 4,/*接收红包数量*/
        "receive_amount": "163.50"/*接收红包总金额*/
    }
}
```
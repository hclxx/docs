# 铉算管理

## 提现列表

`admin/xuansuan/withdrawals`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  username  | string |  无  |  否  |            申请人名称模糊查询                  |
|  status     |  int   |  无  |  否  |       状态:0-待审核 1-已通过 2-已驳回      |
|  limit      |  int   |  20  |  是  |             每页条数                     |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "data": {
            "current_page": 1,
            "data": [
                {
                    "id": 2,
                    "user_id": 2,/*用户id*/
                    "num": "159.00000000",/*提币数量*/
                    "amount": "0.00",/**/
                    "ratio": "0.00000000",/**/
                    "account_type": "exchange",/*类型：exchange-交易所*/
                    "account_info": {/*提现账户信息*/
                        "fee": "0",/*奖励提现手续费*/
                        "type": "unlock",/*提现类型 reward-奖励提现 unlock-解仓提现*/
                        "to_address": "111111",/*提现到钱包地址*/
                        "from_address": "111111",/*提现出钱包地址*/
                        "lock_cabin_id":"1",/*锁仓记录id*/
                        "progress":"0",/*当前提取次数*/
                        "total_progress":"15",/*总共需要提取次数*/
                        "sc_num":"500",/*总共提取数量*/
                    },
                    "coin": "agm",/*提现币种*/
                    "handler_id": 1,/*操作人ID*/
                    "status": 2,/*状态:0-待审核 1-已通过 2-已驳回 */
                    "reason": "不通过",/*驳回原因*/
                    "partner_trade_no": null,/**/
                    "partner_error_info": null,/**/
                    "created_at": "2020-04-02 12:00:00",/*创建时间*/
                    "updated_at": "2020-04-03 11:59:35",/*操作时间*/
                    "user": {/*申请人信息*/
                        "id": 2,
                        "name": "sons",/*姓名*/
                        "avatar": null,/*头像*/
                        "grade": null/**/
                    },
                    "handler": {/*操作人信息*/
                        "id": 1,
                        "name": "admin"/*姓名*/
                    }
                }
            ],
            "first_page_url": "http://imeet-php.name/admin/withdrawals?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://imeet-php.name/admin/withdrawals?page=1",
            "next_page_url": null,
            "path": "http://imeet-php.name/admin/withdrawals",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        },
        "total_num": "259.0000",
        "wait_num": "0.0000",
        "success_num": "0.0000",
        "fail_num": "259.0000",
        "today_num": "100.0000"
    }
}
```


## 审核提现

`admin/xuansuan/withdrawals/{id}`

**请求方式**

`PATCH`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  status     |  int   |  无  |  是  |       状态: 1-已通过 2-已驳回      |
|  reason  | string |  无  |  否  |        驳回原因                            |


**SUCCESS 返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": {/*操作返回该条数据*/
        "id": 2,
        "user_id": 2,/*用户id*/
        "num": "159.00000000",/*提币数量*/
        "amount": "0.00",/**/
        "ratio": "0.00000000",/**/
        "account_type": "exchange",/*类型：exchange-交易所*/
        "account_info": {/*提现账户信息*/
            "fee": "0",/*奖励提现手续费*/
            "type": "unlock",/*提现类型 reward-奖励提现 unlock-解仓提现*/
            "to_address": "111111",/*提现到钱包地址*/
            "from_address": "111111",/*提现出钱包地址*/
            "lock_cabin_id":"1",/*锁仓记录id*/
            "progress":"0",/*当前提取次数*/
            "total_progress":"15",/*总共需要提取次数*/
            "sc_num":"500",/*总共提取数量*/
        },
        "coin": "agm",/*提现币种*/
        "handler_id": 1,/*操作人ID*/
        "status": 2,/*状态:0-待审核 1-已通过 2-已驳回 */
        "reason": "不通过",/*驳回原因*/
        "partner_trade_no": null,/**/
        "partner_error_info": null,/**/
        "created_at": "2020-04-02 12:00:00",/*创建时间*/
        "updated_at": "2020-04-03 11:59:35",/*操作时间*/
        "user": {/*申请人信息*/
            "id": 2,
            "name": "sons",/*姓名*/
            "avatar": null,/*头像*/
            "grade": null/**/
        },
        "handler": {/*操作人信息*/
            "id": 1,
            "name": "admin"/*姓名*/
        }
    }
}
```

## 锁仓记录列表

`admin/xuansuan/lock/cabins`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  username  | string |  无  |  否  |            申请人名称模糊查询                  |
|  status     |  int   |  无  |  否  |       状态:0-待审核 1-已通过 2-已驳回      |
|  limit      |  int   |  20  |  是  |             每页条数                     |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "sc_num": "100.00000000",/*锁仓数量*/
                "jc_num": "6.66000000",/*解仓数量*/
                "withdrawal_address": "111111",/*提现钱包地址*/
                "reward_time": "2020-04-16 00:00:00",/*奖励生效时间*/
                "progress": 1,/*解仓进度 默认分15次*/
                "status": 2,/*状态 0-无效1-有效2-解仓中3-解仓完成*/
                "created_at": "2020-04-16 00:00:00",/*创建时间*/
                "updated_at": "2020-04-15 15:19:57",/**/
                "user": {/*用户信息*/
                    "id": 1,
                    "name": "yanfan",
                    "avatar": null,
                    "grade": null
                }
            }
        ],
        "first_page_url": "http://imeet-php.name/admin/xuansuan/lock/cabins?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet-php.name/admin/xuansuan/lock/cabins?page=1",
        "next_page_url": null,
        "path": "http://imeet-php.name/admin/xuansuan/lock/cabins",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 锁仓下的静态奖励列表

`admin/xuansuan/lock/cabins/{id}/rewards`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  limit      |  int   |  20  |  是  |             每页条数                     |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 6,
                "title": "铉算静态奖励",/*流水标题*/
                "user_id": 1,/*用户id*/
                "target_id": 1,/*目标id*/
                "target_type": "lockcabin",/*目标类型*/
                "amount": "10.00000000",/*数量*/
                "type": "static",/*流水类型*/
                "extend": null,
                "status": 1,/*状态:0-等待 1-成功 2-失败*/
                "action": 1,/*1-收入 2-支出*/
                "created_at": "2020-04-15 15:19:57",
                "updated_at": "2020-04-15 15:19:57",
                "user": {/*用户信息*/
                    "id": 1,
                    "name": "yanfan",
                    "avatar": null,
                    "grade": null
                }
            }
        ],
        "first_page_url": "http://imeet-php.name/admin/xuansuan/lock/cabins/1/rewards?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet-php.name/admin/xuansuan/lock/cabins/1/rewards?page=1",
        "next_page_url": null,
        "path": "http://imeet-php.name/admin/xuansuan/lock/cabins/1/rewards",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 矿池奖励发放

`admin/xuansuan/total/rewards`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  limit      |  int   |  20  |  是  |             每页条数                     |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "price": "0.0300",/*AGM单价*/
                "num": "100.00000000",/*锁仓量*/
                "price_ratio": "0.11000000",/*单价上浮动比例*/
                "num_ratio": "0.22000000",/*锁仓总量浮动比例*/
                "static_num": "100.00000000",/*静态分发量*/
                "dynamic_num": "100.00000000",/*动态分发量*/
                "status": 1,/*是否已分发奖励:0-否1-是*/
                "created_at": null,
                "updated_at": null
            }
        ],
        "first_page_url": "http://imeet-php.name/admin/xuansuan/total/rewards?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet-php.name/admin/xuansuan/total/rewards?page=1",
        "next_page_url": null,
        "path": "http://imeet-php.name/admin/xuansuan/total/rewards",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 团队业绩列表

`admin/xuansuan/team/performances`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  limit      |  int   |  20  |  是  |             每页条数                     |
|  date      |  date   |  无  |  是  |   查询日期(年月日: 2020-04-15)  注: 最新一条记录为昨日   |
|  user      |  string   |  无  |  否  |             用户id 或者 电话号码 精确查询             |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "user_id": 1,/*用户id*/
                "total_sales": "150.00000000",/*总业绩数量*/
                "avatar": null,/*用户头像*/
                "name": "yanfan",/*用户名*/
                "tel":"18781711111",/*用户电话*/
            }
        ],
        "first_page_url": "http://imeet-php.name/admin/xuansuan/team/performances?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet-php.name/admin/xuansuan/team/performances?page=1",
        "next_page_url": null,
        "path": "http://imeet-php.name/admin/xuansuan/team/performances",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 动态奖励列表

`admin/xuansuan/dynamic/rewards`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  limit      |  int   |  20  |  是  |             每页条数                     |
|  date      |  date   |  无  |  否  |             查询日期                     |
|  user      |  string   |  无  |  否  |             用户id 或者 电话号码 精确查询             |



**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 9,
                "title": "铉算动态奖励",/*流水标题*/
                "user_id": 1,/*用户id*/
                "target_id": 1,/*目标id*/
                "target_type": "lockcabin",/*目标类型*/
                "amount": "10.00000000",/*数量*/
                "type": "dynamic",/*流水类型*/
                "extend": null,
                "status": 1,/*状态:0-等待 1-成功 2-失败*/
                "action": 1,/*1-收入 2-支出*/
                "created_at": "2020-04-15 15:19:57",
                "updated_at": "2020-04-15 15:19:57",
                "user": {/*用户信息*/
                    "id": 1,
                    "name": "yanfan",
                    "avatar": null,
                    "grade": null,
                    "tel":"18781571111"
                }
            }
        ],
        "first_page_url": "http://imeet-php.name/admin/xuansuan/lock/cabins/1/rewards?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet-php.name/admin/xuansuan/lock/cabins/1/rewards?page=1",
        "next_page_url": null,
        "path": "http://imeet-php.name/admin/xuansuan/lock/cabins/1/rewards",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 用户直推业绩列表

`admin/xuansuan/user/performances`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  limit      |  int   |  20  |  是  |             每页条数                     |
|  date      |  date   |  无  |  是  |   查询日期(年月日: 2020-04-15)  注: 最新一条记录为昨日   |
|  user_id      |  int   |  无  |  是  |             父级用户id                 |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "user_id": 1,/*用户id*/
                "total_sales": "150.00000000",/*总业绩数量*/
                "avatar": null,/*用户头像*/
                "name": "yanfan"/*用户名*/
            }
        ],
        "first_page_url": "http://imeet-php.name/admin/xuansuan/team/performances?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet-php.name/admin/xuansuan/team/performances?page=1",
        "next_page_url": null,
        "path": "http://imeet-php.name/admin/xuansuan/team/performances",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 锁仓流水列表

`admin/xuansuan/lock/cabins/logs`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  username  | string |  无  |  否  |            用户名称模糊查询                  |
|  type     |  string   |  无  |  是  |       类型:rewrad:lockcabin-余额锁仓 recharge:lockcabin-充值锁仓      |
|  start  | string |  无  |  否  |            开始时间                  |
|  end  | string |  无  |  否  |            结束时间                  |
|  limit      |  int   |  20  |  是  |             每页条数                     |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 76,
                "title": "锁仓-充值",
                "user_id": 208,
                "target_id": "0x7858D02A6C69fcF47AD227e70DBeAf4B24d6c3e2",
                "target_type": "lockcabin",
                "amount": "20000.00000000",
                "type": "recharge:lockcabin",
                "action": 1,
                "extend": "{\"txid\":\"0x7858D02A6C69fcF47AD227e70DBeAf4B24d6c3e2\",\"address\":\"0x7858D02A6C69fcF47AD227e70DBeAf4B24d6c3e2\",\"num\":\"20000\",\"sign\":\"123123\",\"timestamp\":\"21321312\"}",
                "status": 1,
                "created_at": "2020-05-18 14:55:28",
                "updated_at": "2020-05-18 14:55:28",
                "user": {
                    "id": 208,
                    "name": "胡昊",
                    "tel": "18382274309",
                    "avatar": null,
                    "grade": {
                        "name": "懵懂小白",
                        "level": "1",
                        "icon": "fukmncbs1.png",
                        "small_icon": "etva8u9td.png",
                        "min": 0,
                        "max": 100,
                        "next_name": "晶莹玻璃"
                    }
                }
            }
        ],
        "first_page_url": "http://imeet.test/admin/xuansuan/lock/cabins/logs?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/xuansuan/lock/cabins/logs?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/xuansuan/lock/cabins/logs",
        "per_page": 20,
        "prev_page_url": null,
        "to": 18,
        "total": 18
    }
}
```

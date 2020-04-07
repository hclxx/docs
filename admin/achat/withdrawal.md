# 提现管理

## 提现列表

`admin/withdrawals`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  username  | string |  无  |  否  |            申请人名称模糊查询                  |
|  status     |  int   |  无  |  否  |       状态:0-待审核 1-已通过 2-已驳回      |
|  start      |  datetime   |  无  |  否  |            开始时间                |
|  end      |  datetime   |  无  |  否  |            结束时间                |
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
                        "exchange_id": "123456789",/*提现账户交易所ID*/
                    },
                    "coin": "ct",/*提现比中 ct=>AGM*/
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
                },
                {
                    "id": 1,
                    "user_id": 1,
                    "num": "100.00000000",
                    "amount": "0.00",
                    "ratio": "0.00000000",
                    "account_type": "exchange",
                    "account_info": {
                        "exchange_id": "123456789"
                    },
                    "coin": "ct",
                    "handler_id": 1,
                    "status": 2,
                    "reason": "不通过",
                    "partner_trade_no": null,
                    "partner_error_info": null,
                    "created_at": "2020-04-03 12:00:00",
                    "updated_at": "2020-04-03 11:59:35",
                    "user": {
                        "id": 1,
                        "name": "yanfan",
                        "avatar": null,
                        "grade": null
                    },
                    "handler": {
                        "id": 1,
                        "name": "admin"
                    }
                }
            ],
            "first_page_url": "http:\/\/imeet-php.name\/admin\/withdrawals?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http:\/\/imeet-php.name\/admin\/withdrawals?page=1",
            "next_page_url": null,
            "path": "http:\/\/imeet-php.name\/admin\/withdrawals",
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

`admin/withdrawals/audit`

**请求方式**

`PATCH`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  ids     |  array   |  无  |  是  |       需要操作的提现记录id  ([1,2,3])     |
|  status     |  int   |  无  |  是  |       状态: 1-已通过 2-已驳回      |
|  reason  | string |  无  |  否  |        驳回原因                            |


**SUCCESS 返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": {/*操作单条数据返回该条数据  操作多条数据返回最后一条数据*/
         "id": 2,
          "user_id": 2,/*用户id*/
          "num": "159.00000000",/*提币数量*/
          "amount": "0.00",/**/
          "ratio": "0.00000000",/**/
          "account_type": "exchange",/*类型：exchange-交易所*/
          "account_info": {/*提现账户信息*/
              "exchange_id": "123456789"/*提现账户交易所ID*/
          },
          "coin": "ct",/*提现比中 ct=>AGM*/
          "handler_id": 1,/*操作人ID*/
          "status": 2,/*状态:0-待审核 1-已通过 2-已驳回 */
          "reason": "不通过",/*驳回原因*/
          "partner_trade_no": null,/**/
          "partner_error_info": null,/**/
          "created_at": "2020-04-02 12:00:00",/*创建时间*/
          "updated_at": "2020-04-03 11:59:35",/*操作时间*/
    }
}
```

## 导出提现列表

`admin/withdrawals/export`

**请求方式**

`POST`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  username  | string |  无  |  否  |            申请人名称模糊查询                  |
|  status     |  int   |  无  |  否  |       状态:0-待审核 1-已通过 2-已驳回      |
|  start      |  datetime   |  无  |  否  |            开始时间                |
|  end      |  datetime   |  无  |  否  |            结束时间                |
|  ids      |  array   |  无  |  否  |            批量勾选的记录数组（该字段与其他查询条件互斥）                |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "download_url": "http://imeet-php.name/storage/(2020-04-03)-提现记录导出.xlsx"
    }
}
```

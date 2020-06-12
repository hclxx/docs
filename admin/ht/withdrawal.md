# 提现管理

## 提现列表

#### 接口URL
> {{url}}/withdrawals

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| username     | aaa | 选填 | 用户名查询 |
| status     | 1 | 选填 | 状态:0-待审核/1-通过/2-驳回 |
| start     | 2020-05-18 00:00:00 | 选填 | 开始时间 |
| end     | 2020-05-19 00:00:00 | 选填 | 结束时间 |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "data": {
            "current_page": 1,
            "data": [
                {
                    "id": 1,
                    "user_id": 1,
                    "amount": "100.0000",/*提币金额*/
                    "service_charge": "10.0000",/*服务费*/
                    "address": "aaa",/*提币地址*/
                    "hash": null,/*交易hash*/
                    "reason": "拒绝",/*拒绝原因*/
                    "status": 2,/*状态:0-待审核/1-通过/2-驳回*/
                    "handle_id": 1,
                    "created_at": "2020-06-11 16:06:59",
                    "updated_at": "2020-06-11 16:06:59",
                    "user": {/*用户信息*/
                        "id": 1,
                        "name": "yanfan1111",
                        "avatar": null
                    },
                    "handler": {/*操作人信息*/
                        "id": 1,
                        "name": "yanfan1111"
                    }
                },
                 {
                    "id": 2,
                    "user_id": 1,
                    "amount": "100.0000",
                    "service_charge": "10.0000",
                    "address": "aaa",
                    "hash": null,
                    "reason": null,
                    "status": 0,
                    "handle_id": 0,
                    "created_at": "2020-06-11 16:06:59",
                    "updated_at": "2020-06-11 16:06:59",
                    "user": {
                        "id": 1,
                        "name": "yanfan1111",
                        "avatar": null
                    },
                    "handler": null
                  }
            ],
            "first_page_url": "http://ht.test/admin/withdrawals?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://ht.test/admin/withdrawals?page=1",
            "next_page_url": null,
            "path": "http://ht.test/admin/withdrawals",
            "per_page": 20,
            "prev_page_url": null,
            "to": 1,
            "total": 1
        },
        "total_num": "100.0000",
        "wait_num": "0.0000",
        "success_num": "0.0000",
        "fail_num": "100.0000",
        "today_num": "100.0000"
    }
}
```



## 审核提现

#### 接口URL
> {{url}}/withdrawals/{withdrawal}/audit

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| status     | 1|  必填 | 状态:0-待审核/1-通过/2-驳回 |
| reason     | 拒绝原因 |  选填 | 驳回时必传 |
| hash     | 通过后的交易hash |  选填 | 通过时必传 |

#### 成功响应示例
```json
{
	"msg": "审核成功",
	"code": 0,
	"data": null
}
```
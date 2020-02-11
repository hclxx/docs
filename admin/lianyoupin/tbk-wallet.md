# 淘客钱包管理

## 钱包列表

`/admin/tbk/wallets`

**请求方式**

`GET`

**请求参数**

|  名称   |  类型   | 默认 | 必须 |    说明    |
| :-----: | :-----: | :--: | :--: | :--------: |
|  phone  | string  |  无  |  否  | 手机号检索 |
| user_id | integer |  无  |  否  |  用户 id   |
|  limit  | integer |  无  |  是  |   条目数   |
|  page   | integer |  无  |  是  |    页码    |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "user_id": 2 /*用户ID*/,
      "balance": "85.00" /*钱包余额*/,
      "expend_amount": "0.00" /*总支出*/,
      "income_amount": "85.00" /*总收入*/,
      "wait_amount": "18.08" /*待到账*/,
      "created_at": "2020-01-11 16:28:41",
      "updated_at": "2020-01-15 12:32:18",
      /*用户信息*/
      "user": {
        "id": 2,
        "name": "1600001280000",
        "sex": 1,
        "email": "915664508@qq.com",
        "phone": "18382274309",
        "avatar": null,
        "code": "CN2211",
        "bio": null,
        "power": 0,
        "last_time": null,
        "last_ip": null,
        "status": 0,
        "member_id": 2,
        "join_time": "2019-11-21 11:16:53",
        "created_at": "2019-11-21 11:16:53",
        "updated_at": "2019-04-18 17:23:55"
      }
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/tbk/wallets?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/tbk/wallets?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/tbk/wallets",
  "per_page": 20,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

## 钱包列表

`/admin/tbk/wallet/logs`

**请求方式**

`GET`

**请求参数**

|  名称   |  类型   | 默认 | 必须 |                                             说明                                              |
| :-----: | :-----: | :--: | :--: | :-------------------------------------------------------------------------------------------: |
| action  | string  |  无  |  否  |                                 动作: expend-支出 income-收入                                 |
| status  | string  |  无  |  否  |                         状态: wait-待入帐 completed-完成 failure-失败                         |
|  type   | string  |  无  |  否  | 流水类型: order-订单收益 fans:order-粉丝收益 buy:member-粉丝购买会员收益 withdrawal:user-提现 |
| user_id | integer |  无  |  否  |                                            用户 id                                            |
|  limit  | integer |  无  |  是  |                                            条目数                                             |
|  page   | integer |  无  |  是  |                                             页码                                              |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "佣金奖励" /*流水标题*/,
      "user_id": 2,
      "amount": "0.32" /*金额*/,
      "target_user_id": 0,
      "target_type": "order" /*流水类型*/,
      "target_id": 8,
      "action": 1 /*收入动作: 1-收入 2-支出*/,
      "data": null,
      "status": 0 /*收入状态: 0-待入帐 1-完成 2-失败*/,
      "created_at": "2020-01-15 12:31:29",
      "updated_at": "2020-01-15 12:31:29"
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/tbk/wallet/logs",
  "per_page": 20,
  "prev_page_url": null,
  "to": 6,
  "total": 6
}
```

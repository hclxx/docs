# 提现管理

## 申请提现列表

`admin/withdraws`

**请求方式**

`GET`

**请求参数**

|   名称   |  类型  | 默认 |     必须      |   说明   |
| :------: | :----: | :--: | :-----------: | :------: |
|  limit   |  int   |  15  |      是       | 每页条数 |
|   page   |  int   |  无  |      是       | 当前页数 |
|  status  |  int   |  无  |      否       |  手机号  |
| username | string |  无  |      否       |   邮箱   |
| team_id  |  int   |  否  | 团队长用户 id |

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
          "id": 4,
          "user_id": 1,
          "pid": "7c5ff5d28c84ec20b6f25ba01fe5f414" /*PID*/,
          "num": "100.0000" /*提币金额，未扣除fee, 真实到账金额 num - fee*/,
          "fee": "10.0000" /*手续费*/,
          "from_address": "asdasdasd",
          "to_address": "0x1111111111111111111111111111111111111111",
          "currency": "usdt" /*btc/usdt/fil/eth*/,
          "hash": "asdasds" /*交易HASH*/,
          "reason": "reason" /*驳回的原因*/,
          "status": 0 /*状态:0-待审核/1-已审核/2-驳回*/,
          "handler_id": 0,
          "created_at": "2020-11-24 14:37:23",
          "updated_at": "2020-11-24 14:37:23",
          "user": {
            "id": 1,
            "name": "张测试",
            "avatar": null
          },
          "handler": null
        }
      ],
      "first_page_url": "http://mt.test/admin/withdrawals?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://mt.test/admin/withdrawals?page=1",
      "next_page_url": null,
      "path": "http://mt.test/admin/withdrawals",
      "per_page": 20,
      "prev_page_url": null,
      "to": 4,
      "total": 4
    },
    "total_num": "400.0000",
    "wait_num": "400.0000",
    "success_num": "0.0000",
    "fail_num": "0.0000",
    "today_num": "300.0000"
  }
}
```

## 审核提现

`admin/withdraws/{withdraw}/audit`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |                说明                |
| :----: | :----: | :--: | :--: | :--------------------------------: |
|  hash  | string |  无  |  否  | 交易 HASH,如果是 currency.btc 选填 |
| reason | string |  无  |  否  |          驳回的原因，选填          |
| status |  int   |  无  |  是  |           1-通过/2-驳回            |

**返回体**

```json
{
  "msg": "操作成功",
  "code": 0,
  "data": null
}
```

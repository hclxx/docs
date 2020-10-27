# Fil 提现列表

## 列表

**方式**

`GET`

**路径**

`/admin/fil/issue`

**参数**

|     名称      |  类型  | 默认 | 必须 |                     说明                     |
| :-----------: | :----: | :--: | :--: | :------------------------------------------: |
|     limit     |  int   |  无  |  是  |                  每页条目数                  |
|     page      |  int   |  无  |  是  |                     页码                     |
|    status     | string | all  |  否  | 状态(all 全部/wait 待审核/ok 成功/驳回 fail) |
| user_keywords | string |  无  |  否  |         用户检索(支持手机号/用户名)          |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 4,
        "user_id": 1,
        "num": "100.0000" /*Fil 提现金额, 实际到账金额 (num - fee)*/,
        "fee": "10.0000" /*手续费*/,
        "pid": "b0c99ec72abfdee8ba0bc83b934b7cc4" /*流水号*/,
        "from_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq" /*form address*/,
        "to_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq" /*to address*/,
        /*审核成功存在该对象 否则为 null*/
        "data": {
          "id": 0,
          "symbol": "FIL" /*代币符号*/,
          "createTime": "",
          "transHash": "" /*交易HASH*/,
          "fromAddress": "",
          "toAddress": "",
          "fee": 0 /*手续费*/,
          "amount": 0 /*Fil 提现金额, 实际到账金额 (num - fee)*/,
          "pid": ""
        },
        "status": 0 /*0-待审核/1-成功/2-fail*/,
        /*未审核该字段为 null*/
        "admin": {
          "id": 1,
          "name": "审核员"
        },
        "created_at": "2020-10-27 11:21:08",
        "updated_at": "2020-10-27 11:21:08",
        /*提现用户信息*/
        "user": {
          "id": 1,
          "tel": "18382274309",
          "name": "",
          "avatar": null,
          /*姓名认证信息*/
          "certification": {
            "id": 1,
            "user_id": 1,
            "name": "海军",
            "number": "123123123123",
            "fpic": "123123123123",
            "bpic": "123123123123",
            "hpic": "123123123123",
            "admin_id": 0,
            "status": 1,
            "reason": null,
            "created_at": null,
            "updated_at": null
          }
        }
      }
    ],
    "first_page_url": "http://clstore.test/admin/filwithdrawals?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://clstore.test/admin/filwithdrawals?page=1",
    "next_page_url": null,
    "path": "http://clstore.test/admin/filwithdrawals",
    "per_page": 20,
    "prev_page_url": null,
    "to": 4,
    "total": 4
  }
}
```

## 提现通过

`/admin/filwithdrawals/{filWithdrawal}/agree`

**请求方式**

`PUT`

**请求参数**

none

**返回体**

```json
{
  "msg": "审核成功",
  "code": 0,
  "data": null
}
```

## 提现驳回

`/admin/filwithdrawals/{filWithdrawal}/reject`

**请求方式**

`PUT`

**请求参数**

none

**返回体**

```json
{
  "msg": "审核成功",
  "code": 0,
  "data": null
}
```

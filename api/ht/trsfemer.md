# 商户转账

## 转账

**方式**

`POST`

**路径**

`/api/transfer-account`

**参数**

|     名称     |  类型  | 必须 |    说明     |
| :----------: | :----: | :--: | :---------: |
|   user_id    |  int   |  是  | 目标用户 ID |
| pay_password | string |  是  |  支付密码   |
|    amount    | string |  是  |  转账金额   |

**响应**

`Status code 200`

```json
{
    "msg": "转账成功",
    "code": 0,
    "data": null
```

## 收款记录

**方式**

`GET`

**路径**

`/api/transfer-account/logs`

**参数**

|  名称  | 类型 | 必须 |   说明   |
| :----: | :--: | :--: | :------: |
| limit  | int  |  否  | 条目数量 |
| offset | int  |  是  |  偏移量  |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 28,
      "title": "商家收款",
      "user_id": 2,
      "target_user_id": 1,
      "target_id": 0,
      "amount": "100.0000",
      "action": 1,
      "status": 1,
      "currency": "hd",
      "type": "merchant:transfer",
      "extend": null,
      "created_at": "2020-08-03 17:19:43",
      "updated_at": "2020-08-03 17:19:43"
    }
  ]
}
```

# 钱包

## 钱包列表

**方式**

`GET`

**路径**

`/api/wallets`

**参数**

|   名称   |  类型  | 必须 |           说明            |
| :------: | :----: | :--: | :-----------------------: |
| currency | string |  否  | 类型:btc/dfb/eth/fil/usdt |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 9,
      "user_id": 7,
      "balance": "0.0000" /*余额*/,
      "income": "0.0000" /*已释放*/,
      "expend": "0.0000",
      "wait": "0.0000" /*待释放*/,
      "currency": "fil"
    }
  ]
}
```

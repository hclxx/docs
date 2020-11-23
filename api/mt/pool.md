# 矿池

## 矿池详情

**方式**

`GET`

|   名称   |  类型  | 默认 | 必须 |  说明   |
| :------: | :----: | :--: | :--: | :-----: |
| currency | string | eth  |  是  | eth/btc |

**路径**

`/api/pool`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "network_computing_power": "3563.86" /*全网算力*/,
    "current_computing_difficulty": "3431017422418872" /*当前算力难度*/,
    "current_currency_price": "3744.627902107422492" /*当前币价格*/,
    "every_m_output_per_day": "0.00006124" /*当前算力难度*/
  }
}
```

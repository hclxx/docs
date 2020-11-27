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

## 折线图数据

**方式**

`GET`

|   名称   |  类型  | 默认 | 必须 |     说明      |
| :------: | :----: | :--: | :--: | :-----------: |
| currency | string | eth  |  是  |    eth/btc    |
|   date   | string | eth  |  是  | 日期，2020-12 |

**路径**

`/api/pool/line/charts`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "items": [
      {
        "d": "2020-11-11" /*时间*/,
        "a": "333.3332" /*收益*/
      }
    ],
    "income": "0" /*昨日收益*/,
    "dates": ["2020-10", "2020-11"] /*挖矿时间间隔*/
  }
}
```

## 统计

**方式**

`GET`

|   名称   |  类型  | 默认 | 必须 |  说明   |
| :------: | :----: | :--: | :--: | :-----: |
| currency | string | eth  |  是  | eth/btc |

**路径**

`/api/pool/counts`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "usdtPutIn": "0.0000" /*USDT 投入*/,
    "usdtToCnyPutIn": "0.0000" /*USDT投入转cny金额*/,
    "rmbPutIn": "0" /*RMB投入*/,
    "toBeOutput": "0" /*预计待产出*/,
    "produced": "0.0000" /*累计产出/总产出*/,
    "spec": "0" /*T量/算力*/,
    "numberOfMiners": "0" /*矿工数量*/
  }
}
```

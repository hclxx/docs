# 交易

## 配置信息

**方式**

`POST`

**路径**

`/api/trades-config`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "cd_to_cny": "1" /*内盘创豆现金单价*/,
    "num_buy_min": "300" /*按数量购买最低*/,
    "usdt_to_cny": "6" /*内盘USDT现金单价*/,
    "price_buy_min": "30" /*按价格购买最低*/
  }
}
```

# 商品

## 列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |            说明             |
| :----: | :----: | :--: | :-------------------------: |
| limit  |  int   |  是  |      条目数 默认为 20       |
| offset |  int   |  是  |       条目数 默认为 0       |
|  type  | string |  是  | 专区:time-限时/btc/eth/ipfs |

**路径**

`/api/goods`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2 /*商品ID*/,
      "name": "测试矿机1" /*名称*/,
      "images": ["01.png"] /*图片集合,第一张为首图*/,
      "price": "1000.0000" /*售卖价格*/,
      "market_price": "2000.0000" /*市场价*/,
      "stock": 100 /*库存*/,
      "spec": 3 /*T量*/,
      "years": 1 /*年限*/,
      "zone": "fil" /*专区类型*/,
      "end_time": "2020-11-30 11:11:00" /*截止时间*/,
      "rate": "55%-80%" /*产品回报率*/,
      "end_seconds": 1620077 /*结束秒数*/,
      "period": null
    }
  ]
}
```

## 详情

**方式**

`GET`

**路径**

`/api/goods/{id}`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 2 /*商品ID*/,
    "name": "测试矿机1" /*商品名称*/,
    "price": "1000.0000" /*单价*/,
    "market_price": "2000.0000" /*市场价*/,
    "spec": 3 /*T量*/,
    "years": 1 /*年限*/,
    "stock": 100 /*库存*/,
    "limit": 0 /*限制数量 0-无限制*/,
    "images": ["01.png"] /*图片*/,
    "rate": "55%-80%" /*回报率说明*/,
    "power": "240" /*矿机算力(MH/S)*/,
    "power_waste": "240" /*矿机功耗KW*/,
    "daily_output": "0.00001" /*日产出(天/台)*/,
    "before": "30" /*运营维护费回本前(百分比)*/,
    "after": "0" /*运营维护费回本后(百分比)*/,
    "electric_price": "0.60" /*电价(元/度)*/,
    "risk_description": "风险介绍" /*风险说明*/,
    "business_description": "业务说明" /*业务说明*/,
    "period_id": 3,
    "end_time": "2020-11-30 11:11:00" /*限时结束时间*/,
    "is_delete": 0,
    "zone": "fil" /*专区*/,
    "type": "common" /*商品类型:商品类型:common-普通/register-注册可领/novice-新手特供*/,
    "created_at": "2020-11-05 15:06:36",
    "updated_at": "2020-11-05 15:06:36",
    "end_seconds": 1619939 /*结束秒数*/,
    "period": {
      "id": 3,
      "name": "202002" /*期数名称*/
    },
    "electric_days": [90, 180, 360] /*电费包天数*/
  }
}
```

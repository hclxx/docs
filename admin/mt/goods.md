# 商品

## 列表

**方式**

`GET`

**路径**

`/admin/goods`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| keywords  | string |  无  |  否  | 商品名称(支持模糊查询) |
| period_id |  int   |  无  |  否  |        期数 ID         |
|   page    |  int   |  1   |  是  |        当前页数        |
|   limit   |  int   |  20  |  是  |        每页条数        |

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
        "id": 1 /*商品ID*/,
        "name": "测试矿机1" /*商品名称*/,
        "price": "1000.0000" /*商品价格(元)*/,
        "market_price": "2000.0000" /*市场价格(元)*/,
        "spec": 1 /*规格量(T)*/,
        "years": 1 /*年限数量(年)*/,
        "stock": 96 /*库存*/,
        "limit": 0 /*商品数量限制*/,
        "images": ["01.png"] /*图片限制*/,
        "rate": "55%-80%" /*产出回报率说明*/,
        "power": "240" /*矿机算力(MH/S)*/,
        "power_waste": "240" /*矿机功耗KW*/,
        "daily_output": "0.00001" /*日产出(天/台)*/,
        "before": "30" /*运营维护费回本前(百分比)*/,
        "after": "0" /*回本运营维护费回本后(百分比)前*/,
        "electric_price": "0.60" /*电费电价(元/度)*/,
        "risk_description": "风险介绍" /*风险说明*/,
        "business_description": "业务说明" /*业务说明*/,
        "period_id": 2 /*期数*/,
        "end_time": "2020-11-30 11:11:00" /*限时结束时间*/,
        "is_delete": 0 /*是否删除*/,
        "zone": "eth" /*eth/fil/btc*/,
        "type": "register" /*商品类型:common-普通/register-注册可领/novice-新手特供*/,
        "created_at": "2020-11-05 15:06:27",
        "updated_at": "2020-11-11 10:14:32",
        "end_seconds": 1545105,
        "period": {
          "id": 1,
          "name": "20200101" /*期数名称*/
        }
      }
    ],
    "first_page_url": "http://mt.test/admin/goods?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/goods?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/goods",
    "per_page": 20,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  }
}
```

## 创建

**方式**

`POST`

**路径**

`/admin/goods`

**请求参数**

|         名称         |  类型  | 默认 | 必须 |                          说明                          |
| :------------------: | :----: | :--: | :--: | :----------------------------------------------------: |
|         name         | string |  无  |  是  |                        商品名称                        |
|        price         | string |  无  |  是  |                      商品单价(元)                      |
|     market_price     | string |  无  |  否  |                      市场价格(元)                      |
|         spec         |  int   |  无  |  是  |                       规格量(T)                        |
|        years         |  int   |  无  |  是  |                      年限数量(年)                      |
|        stock         |  int   |  无  |  是  |                          库存                          |
|        limit         |  int   |  无  |  是  |                        限购数量                        |
|        images        | array  |  无  |  是  |         图片集合,`[1.png,2.png]`,第一张为首图          |
|         rate         | string |  无  |  是  |                     产出回报率说明                     |
|        power         | string |  无  |  是  |                     矿机算力(MH/S)                     |
|     power_waste      | string |  无  |  是  |                      矿机功耗 KW                       |
|     daily_output     | string |  无  |  是  |                     日产出(天/台)                      |
|        before        | string |  无  |  否  |                运营维护费回本前(百分比)                |
|        after         | string |  无  |  否  |                运营维护费回本后(百分比)                |
|    electric_price    | string |  无  |  否  |                      电价(元/度)                       |
|   risk_description   | string |  无  |  是  |                        风险说明                        |
| business_description | string |  无  |  是  |                        业务说明                        |
|      period_id       |  int   |  无  |  是  |                        期数 ID                         |
|       end_time       | string |  无  |  否  |                    限时优惠结束时间                    |
|         zone         | string |  无  |  是  |                  所属专区:eth/fil/btc                  |
|         type         | string |  无  |  是  | 商品类型:common-普通/register-注册可领/novice-新手特供 |  |

**响应**

`Status code 200`

```json
{
  "msg": "创建成功",
  "code": 0,
  "data": null
}
```

## 修改

**方式**

`PUT`

**路径**

`/admin/goods/{good}`

**请求参数**

|         名称         |  类型  | 默认 | 必须 |                          说明                          |
| :------------------: | :----: | :--: | :--: | :----------------------------------------------------: |
|         name         | string |  无  |  是  |                        商品名称                        |
|        price         | string |  无  |  是  |                      商品单价(元)                      |
|     market_price     | string |  无  |  否  |                      市场价格(元)                      |
|         spec         |  int   |  无  |  是  |                       规格量(T)                        |
|        years         |  int   |  无  |  是  |                      年限数量(年)                      |
|        stock         |  int   |  无  |  是  |                          库存                          |
|        limit         |  int   |  无  |  是  |                        限购数量                        |
|        images        | array  |  无  |  是  |         图片集合,`[1.png,2.png]`,第一张为首图          |
|         rate         | string |  无  |  是  |                     产出回报率说明                     |
|        power         | string |  无  |  是  |                     矿机算力(MH/S)                     |
|     power_waste      | string |  无  |  是  |                      矿机功耗 KW                       |
|     daily_output     | string |  无  |  是  |                     日产出(天/台)                      |
|        before        | string |  无  |  否  |                运营维护费回本前(百分比)                |
|        after         | string |  无  |  否  |                运营维护费回本后(百分比)                |
|    electric_price    | string |  无  |  否  |                      电价(元/度)                       |
|   risk_description   | string |  无  |  是  |                        风险说明                        |
| business_description | string |  无  |  是  |                        业务说明                        |
|      period_id       |  int   |  无  |  是  |                        期数 ID                         |
|       end_time       | string |  无  |  否  |                    限时优惠结束时间                    |
|         zone         | string |  无  |  是  |                  所属专区:eth/fil/btc                  |
|         type         | string |  无  |  是  | 商品类型:common-普通/register-注册可领/novice-新手特供 |  |

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 删除商品

**方式**

`DELETE`

**路径**

`/admin/goods/{good}`

**响应**

`Status code 200`

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

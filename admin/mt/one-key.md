# 一键收取

## 一键挖矿购买订单列表

**方式**

`GET`

**路径**

`/admin/collections`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   start_time   | string  |  无  |  否  |    最早有效期    |
|   end_time     | string  |  无  |  否  | 最迟有效期 |
|   name         | string  |  无  |  否  | 用户姓名 |
|   page        | int  |  无  |  是  | 当前页数 |
|   limit        | int  |  无  |  是  | 当前页面展示数据条数 |

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
                "id": 1,
                "name": "yanfan",
                "avatar": null,
                "gender": 1,
                "phone": "187****1153",
                "code": "BDV81R",
                "power": 0,
                "collection_time": "2020-06-01 00:00:00",
                "market_id": 5,
                "created_at": "2020-05-06 03:25:16",
                "updated_at": "2020-05-06 03:25:16",
                "status": 1,/*1-有效期内 2-已过期*/
            }
        ],
        "first_page_url": "http:\/\/storage.name\/admin\/collections?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http:\/\/storage.name\/admin\/collections?page=1",
        "next_page_url": null,
        "path": "http:\/\/storage.name\/admin\/collections",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```


## 用户购买一键挖矿流水明细

**方式**

`GET`

**路径**

`/admin/collections/{user}`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   page        | int  |  无  |  是  | 当前页数 |
|   limit        | int  |  无  |  是  | 当前页面展示数据条数 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "current_page": 1,
    "data": [
        {
            "id": 33,
            "title": "购买一键挖矿权限",/*标题*/
            "currency": "cny",/*流水类型 cl/cny*/
            "amount": "18.00000000",/*金额*/
            "extend": {
                "month": 3,/*购买月份数*/
                "order_no": "123",/*订单号*/
                "buy_type": "购买",/*续费 or 购买*/
                "collect_time": "2019-10-17 11:21:55",/*到期时间*/
            },
            "created_at": "2019-04-17 13:39:57"
        },
        {
            "id": 33,
            "title": "购买一键挖矿权限",
            "currency": "comc",
            "extend": {
                "month": 1,
                "order_no": "123",
                "buy_type": "续费",
                "collect_time": "2019-10-17 11:21:55"
            },
            "created_at": "2019-04-17 13:39:57"
        }
    ],
    "first_page_url": "http://comc.com/admin/order/16/collection?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/order/16/collection?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/order/16/collection",
    "per_page": 15,
    "prev_page_url": null,
    "to": 4,
    "total": 4
}
```


## 购买一键挖矿总计收入

**方式**

`GET`

**路径**

`/admin/order/collection/amount`

**参数**

`无`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "total_amount": null
        }
    ]
}
```

# 订单

## 订单配置

**方式**

`GET`

**路径**

`admin/order/config`

**参数**

无

**响应**

`Status code 200`

```json
{
  "rece_day": 10, //发货10天后确认收货
  "return_goods": 3 //确认收货后单位天不能维权
}
```

## 修改订单配置

**方式**

`POST`

**路径**

`/admin/order/config`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   rece_day   | int  |  无  |  是  |    确认收货时间    |
| return_goods | int  |  无  |  是  | 确认收货可维权时间 |

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "rece_day": "14",
    "return_goods": "2"
  }
}
```

## 订单导出

**方式**

`POST`

**路径**

`/admin/order/export`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   start_time   | int  |  无  |  否  |    开始时间    |
| end_time | int  |  无  |  否  | 结束时间 |
| order_no | int  |  无  |  否  | 订单号 |
| order_status | int  |  无  |  否  | 订单状态 |

**响应**

`Status code 201`

```json
{
  "download_url": "https://www.test.com/order.xlsx"
}
```

## 一键挖矿购买订单列表

**方式**

`GET`

**路径**

`/admin/order/collection`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   start_time   | datetime  |  无  |  是  |    最早有效期    |
|   end_time     | datetime  |  无  |  是  | 最迟有效期 |
|   name         | string  |  无  |  是  | 用户姓名 |
|   limit        | int  |  无  |  是  | 当前页面展示数据条数 |

**响应**

`Status code 201`

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "用户111",
            "sex": 2,
            "email": "1986513441@qq.com",
            "phone": "18728624682",
            "avatar": null,
            "collection_time": "2019-04-17 16:58:18",   //  到期时间
            "status": 1     //  有效期
        },
        {
            "id": 2,
            "name": "13",
            "sex": 0,
            "email": "1986513442@qq.com",
            "phone": "18728624685",
            "avatar": null,
            "collection_time": "2019-04-17 16:58:18",
            "status": 1   //  有效期
        },
        {
            "id": 16,
            "name": "123",
            "sex": 0,
            "email": null,
            "phone": "18781601153",
            "avatar": null,
            "collection_time": "2019-04-16 16:10:15",
            "status": 2   //  已过期
        }
    ],
    "first_page_url": "http://comc.com/admin/order/collection?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/order/collection?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/order/collection",
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
}
```


## 用户购买一键挖矿流水明细

**方式**

`GET`

**路径**

`/admin/order/{user}/collection`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   limit        | int  |  无  |  是  | 当前页面展示数据条数 |

**响应**

`Status code 201`

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 33,
            "title": "购买一键挖矿权限",
            "currency": "comc",
            "amount": "18.00000000",
            "extend": {
                "month": 3,
                "buy_type": "购买",
                "collect_time": "2019-10-17 11:21:55"
            },
            "created_at": "2019-04-17 13:39:57"
        },
        {
            "id": 33,
            "title": "购买一键挖矿权限",
            "currency": "comc",
            "extend": {
                "month": 1,
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

# 期数管理

## 列表

**方式**

`GET`

**路径**

`/admin/periods`

**参数**

| 名称  | 类型 | 必须 | 说明 |
| :---: | :--: | :--: | :--: |
| page  | int  |  1   |  是  | 当前页数 |
| limit | int  |  20  |  是  | 每页条数 |

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
        "name": "202001" /*周期名称*/,
        "created_at": null,
        "updated_at": null
      }
    ],
    "first_page_url": "http://mt.test/admin/periods?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/periods?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/periods",
    "per_page": 20,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  }
}
```

## 添加

**方式**

`POST`

**路径**

`/admin/periods`

**参数**

| 名称 |  类型  | 必须 |  说明  |
| :--: | :----: | :--: | :----: |
| name | string |  是  | 期名称 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 更新

**方式**

`PUT`

**路径**

`/admin/periods/{id}`

**参数**

| 名称 |  类型  | 必须 |  说明  |
| :--: | :----: | :--: | :----: |
| name | string |  是  | 期名称 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 删除

**方式**

`DELETE`

**路径**

`/admin/periods/{id}`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 分发日志记录

**方式**

`GET`

**路径**

`/admin/periods/logs`

**参数**

| 名称 | 类型 | 必须 | 说明 |
| page | int | 1 | 是 | 当前页数 |
| limit | int | 20 | 是 | 每页条数 |
| period_id | int | 20 | 否 | 期数 ID |

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
        "period_id": 1,
        "order_count": 6 /*T量统计*/,
        "amount": "36.0000" /*分发总量*/,
        "created_at": "2020-11-09 14:49:15",
        "updated_at": "2020-11-09 14:49:15",
        /*分发周期*/
        "period": {
          "id": 1,
          "name": "202001",
          "created_at": null,
          "updated_at": null
        }
      }
    ],
    "first_page_url": "http://mt.test/admin/periods/logs?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/periods/logs?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/periods/logs",
    "per_page": 20,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 分发挖矿

**方式**

`POST`

**路径**

`/admin/periods/mining/distribution`

**参数**

|    名称     |  类型  | 必须 |     说明      |
| :---------: | :----: | :--: | :-----------: |
|   amount    | string |  是  |   分发数量    |
|  period_id  | string |  是  |    期数 ID    |
| order_count | string |  是  | 订单 T 量综合 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

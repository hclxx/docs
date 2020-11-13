# 优惠卷

## 列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |              说明               |
| :----: | :----: | :--: | :-----------------------------: |
| limit  |  int   |  是  |        条目数 默认为 20         |
| offset |  int   |  是  |         条目数 默认为 0         |
| status | string |  是  | 状态:0-未使用/1-待使用/2-已过期 |

**路径**

`/api/coupons`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "user_id": 1,
      "target_user_id": 0,
      "target_id": 0,
      "from_id": 0,
      "title": "新人专享-电费抵扣券" /*标题*/,
      "amount": "200.0000" /*抵扣金额*/,
      "use_status": 0 /*使用状态 0-未使用 1-已使用 2-已过期*/,
      "transfer_status": 0 /*转让状态 0-未转让 1-转让者 2-接受*/,
      "is_delete": 0,
      "currency": "usdt" /*CNY-现金/USDT-USDT*/,
      "expire_date": "2021-05-09 00:00:00" /*过期时间*/,
      "created_at": "2020-11-10 16:52:52",
      "updated_at": "2020-11-10 16:52:52",
      "deductionRatio": "10" /*如是USDT存在该字段，优惠卷 抵扣上限比例*/,
      /*接受者/转让者用户信息*/
      "target_user": {
        "id": 1,
        "name": "avara",
        "avatar": "aaa.png"
      }
    }
  ]
}
```

## 转让

**方式**

`POST`

**参数**

|      名称      | 类型 | 必须 |    说明     |
| :------------: | :--: | :--: | :---------: |
| target_user_id | int  |  是  | 转让目标 ID |

**路径**

`/api/coupons/transfer`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

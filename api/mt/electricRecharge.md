# 电费包

## 下单

**方式**

`POST`

**参数**

|   名称   |  类型  | 必须 |    说明     |
| :------: | :----: | :--: | :---------: |
| pay_type | string |  是  | alipay/bank |

**路径**

`/api/electric/recharge`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "order_id": 7 /*订单ID*/,
    "alipay_info": "" /*支付宝支付信息*/,
    "code": "asdasdas" /*附言码*/
  }
}
```

## 提交凭证

**方式**

`POST`

|    名称    |  类型  | 默认 | 必须 | 说明 |
| :--------: | :----: | :--: | :--: | :--: |
| credential | string |  0   |  是  | 凭证 |

**路径**

`/api/electric/submit`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

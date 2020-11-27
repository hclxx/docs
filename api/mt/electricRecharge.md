# 电费包

## 下单

**方式**

`POST`

**参数**

|     名称     |  类型  | 必须 |           说明            |
| :----------: | :----: | :--: | :-----------------------: |
| pay_password | string |  是  | 支付密码,仅支持 USDT 支付 |

**路径**

`/api/electric/recharge`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 获取电费包释放月数

**方式**

`GET`

**路径**

`/api/dfb/release/days`

**参数**

none

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "months": 8
  }
}
```

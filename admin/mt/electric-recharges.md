# 电费包充值管理

## 列表

**方式**

`GET`

**路径**

`/admin/electric-recharges`

**参数**

|     名称      |  类型  | 默认 | 必须 |                              说明                               |
| :-----------: | :----: | :--: | :--: | :-------------------------------------------------------------: |
|    status     | string |  无  |  是  | 状态:1-待审核 2-释放中 3-已完成 4-驳回，全部(1,2,3,4)以逗号分割 |
|   order_no    | string |  无  |  是  |                         按照订单号检索                          |
|   pay_type    |  int   |  15  |  是  |             支付类型检索:bank-银行卡，alipay-支付宝             |
| user_keywords |  int   |  1   |  是  |              用户关键词检索:支持用户 ID/手机/呢称               |
|     limit     |  int   |  15  |  是  |                           每页条目数                            |
|     page      |  int   |  1   |  是  |                              页码                               |

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
        "id": 61,
        "title": "购买电费包",
        "user_id": 7,
        "target_user_id": 0,
        "target_id": 0,
        "amount": "1000.0000" /*支付金额*/,
        "action": 2,
        "status": 1 /*1-待审核 2-释放中 3-已完成 4-驳回*/,
        "currency": "electric:recharge",
        "type": "electric:recharge",
        "extend": {
          "code": "5fab4a7e89264" /*附言码*/,
          "brief": "1000元即获取220元电费包",
          "price": "1000" /*价格(元)*/,
          "months": "12" /*释放周期*/,
          /*如果pay_type为bank为收款信息*/
          "account": {
            "bank": "中国民生银行股份有限公司西安太白路支行",
            "code_desc": "打款请务必填写附言码，留空会影响订单完成进度",
            "account_name": "陕西蚂蚁集群数字科技有限公司",
            "account_number": "162414068"
          },
          "order_no": "EN59331605061246562" /*订单号*/,
          "pay_type": "bank" /*支付类型:bank-银行/alipay-支付宝*/,
          "released": 0 /*已释放月数*/,
          "credential": "asdasd",
          "give_amount": "2000" /*赠送电费金额(元)*/
        },
        "created_at": "2020-11-11 10:20:46",
        "updated_at": "2020-11-11 10:23:13",
        "user": {
          "id": 7,
          "name": "0CGLAX",
          "phone": "13822742306",
          "avatar": null
        }
      }
    ],
    "first_page_url": "http://mt.test/admin/electric-recharges?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/electric-recharges?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/electric-recharges",
    "per_page": 20,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  }
}
```

## 通过(status=1 才存在驳回和通过按钮)

`admin/electric-recharges/{id}/pass`

**请求方式**

`POST`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "审核通过",
  "code": 0,
  "data": null
}
```

## 驳回(status=1 才存在驳回和通过按钮)

`admin/electric-recharges/{id}/reject`

**请求方式**

`PUT`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "审核通过",
  "code": 0,
  "data": null
}
```

## 充值统计信息

`admin/electric-recharges/counts`

**请求方式**

`GET`

**请求参数**

none

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "pending_num": 1 /*待审核订单数量*/,
    "releasing_num": 1 /*释放中订单数量*/,
    "released_num": 0 /*释放完成数量*/,
    "pending_amount": "1000.0000" /*待审核总金额*/,
    "releasing_amount": "1000.0000" /*正在释放中的订单金额*/,
    "released_amount": "0.0000" /*释放完成订单金额*/
  }
}
```

# 报表

## 订单/提现列表

**方式**

`GET`

**参数**

|    名称    |  类型  | 必须 |               说明               |
| :--------: | :----: | :--: | :------------------------------: |
|   phone    | string |  是  |             用户手机             |
|    type    | string |  是  | 类型:order-订单/withdrawals-提现 |
| start_time | string |  否  |             开始时间             |
|  end_time  | string |  否  |             结束时间             |
|    page    |  int   |  是  |             当前页数             |
|   limit    |  int   |  是  |             每页条数             |

**路径**

`/admin/report/forms`

**响应**

`Status code 200`

**订单数据结构**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "counts": {
      "total_deduct": "12" /*总抵扣(个)*/,
      "total_commission": "1000" /*总佣金(元)*/
    },
    "items": {
      "current_page": 1,
      "data": [
        {
          "id": 1,
          "order_no": "68291602316003761",
          "total_price": "54000.00",
          "pay_price": "100.00",
          "deduct_num": 0,
          "buy_num": 1,
          "specs": 16,
          "order_status": 2,
          "user_id": 2,
          "goods_id": 4,
          "is_delete": 0,
          "close_reason": null,
          "remark": null,
          "pay_time": "2020-10-10 15:46:43",
          "admin_id": 1,
          "created_at": "2020-10-10 15:46:43",
          "updated_at": "2020-10-10 15:46:43",
          "close_seconds": 0,
          "goods": null,
          "sub_commission": {
            "id": 1,
            "title": "代理商收益",
            "user_id": 1,
            "target_user_id": 2,
            "target_id": 1,
            "amount": "8100.0000" /*分佣金额*/,
            "action": 1,
            "status": 1,
            "currency": "cny",
            "type": "promotion",
            "extend": {
              "sale_commission": "15" /*分佣比例(%)*/
            },
            "created_at": "2020-10-11 13:58:36",
            "updated_at": "2020-10-11 13:58:36",
            /*分佣用户信息*/
            "user": {
              "id": 1,
              "name": "",
              "avatar": null,
              "tel": "18382274309"
            },
            "certification": {
              "id": 1,
              "name": "张浩" /*真实姓名*/,
              "idcard_number": "513823199011016131" /*证件号*/
            }
          },
          "certification": {
            "id": 1,
            "name": "张浩" /*真实姓名*/,
            "idcard_number": "513823199011016131" /*证件号*/
          },
          /*下单用户*/
          "user": {
            "id": 2,
            "name": "",
            "avatar": null,
            "tel": "13311293358"
          }
        }
      ],
      "first_page_url": "http://clstore.test/admin/report/forms?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://clstore.test/admin/report/forms?page=1",
      "next_page_url": null,
      "path": "http://clstore.test/admin/report/forms",
      "per_page": "20",
      "prev_page_url": null,
      "to": 4,
      "total": 4
    }
  }
}
```

**提现数据结构**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "user_id": 1,
        "amount": "100.0000" /*提币金额*/,
        "service_charge": "10.0000" /*服务费*/,
        "address": "aaa" /*提币地址*/,
        "currency": "dstt" /*提币类型 cd-创豆 usdt*/,
        "hash": null /*交易hash*/,
        "reason": "拒绝" /*拒绝原因*/,
        "status": 2 /*状态:0-待审核/1-通过/2-驳回*/,
        "handle_id": 1,
        "created_at": "2020-06-11 16:06:59",
        "updated_at": "2020-06-11 16:06:59",
        "user": {
          /*用户信息*/
          "id": 1,
          "name": "yanfan1111",
          "avatar": null
        },
        "handler": {
          /*操作人信息*/
          "id": 1,
          "name": "yanfan1111"
        },
        "log": {
          "id": 163,
          "target_id": 2,
          "balance_type": "trade"
        },
        /*实名认证信息*/
        "certification": {
          "id": 1,
          "name": "张浩" /*真实姓名*/,
          "idcard_number": "513823199011016131" /*证件号*/
        }
      }
    ],
    "first_page_url": "http://clstore.test/admin/report/forms?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://clstore.test/admin/report/forms?page=1",
    "next_page_url": null,
    "path": "http://clstore.test/admin/report/forms",
    "per_page": "20",
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 订单导出

**方式**

`POST`

**参数**

|    名称    |  类型  | 必须 |               说明               |
| :--------: | :----: | :--: | :------------------------------: |
|   phone    | string |  是  |             用户手机             |
|    type    | string |  是  | 类型:order-订单/withdrawals-提现 |
| start_time | string |  否  |             开始时间             |
|  end_time  | string |  否  |             结束时间             |

**路径**

`/admin/report/forms/excel-export`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "filename": "20201012订单导出.xlsx"
  }
}
```

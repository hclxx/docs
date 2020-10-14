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
      "total_amount": "400.00" /*总金额(元)*/,
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
          "payment_voucher": null,
          "accounts_receivable": {
            "bank": "中国工商银行",
            "account_name": "陕西存链科技数据有限公司",
            "account_number": "3700xxxxxxx"
          },
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
            "type": "sale:commission",
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
            }
          },
          "certification": {
            "id": 1,
            "user_id": 1,
            "name": "张浩" /*真实姓名*/,
            "number": "513823199011016131" /*证件号*/,
            "fpic": "20200508115335796.jpg" /*证件正面照片*/,
            "bpic": "20200508115348973.jpg" /*证件反面照片*/,
            "hpic": "20200508115402470.jpg" /*证件手持照片*/,
            "status": 1 /*状态:0-待审核1-成功2-失败*/,
            "admin_id": 1 /**/,
            "reason": null /*审核失败原因*/,
            "created_at": "2020-05-08 03:00:18",
            "updated_at": "2020-05-08 03:54:05"
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
        "user_id": 2,
        "amount": "1000.00" /*提现金额*/,
        "service_charge": "10.00" /*手续费*/,
        "account_type": "alipay" /*提现方式:alipay-支付宝*/,
        /*提现账户信息*/
        "account_info": {
          "name": "zhangsan",
          "account": "11111"
        },
        "handler_id": 1,
        "status": 1,
        "reason": "22",
        "partner_trade_no": null,
        "partner_error_info": null,
        "created_at": "2017-12-12 12:11:11",
        "updated_at": "2017-12-12 12:11:11",
        "user": {
          "id": 2,
          "name": "",
          "avatar": null,
          "gender": 0,
          "phone": "133****3358",
          "tel": "133123123123358",
          "code": "",
          "power": 0,
          "collection_time": null,
          "market_id": 3,
          "permission": 0,
          "created_at": null,
          "updated_at": "2020-10-11 14:26:55"
        },
        /*审核人信息*/
        "handler": {
          "id": 1,
          "name": "超级管理员",
          "phone": "13111111111",
          "email": "root@qq.com",
          "admin_token": "cd1c8024cd6a8ad45a76440e92774c51",
          "state": 1,
          "created_at": "2020-05-19 16:05:56",
          "updated_at": "2020-05-19 16:05:56"
        },
        /*实名认证信息*/
        "certification": {
          "id": 1,
          "user_id": 1,
          "name": "张浩" /*真实姓名*/,
          "number": "513823199011016131" /*证件号*/,
          "fpic": "20200508115335796.jpg" /*证件正面照片*/,
          "bpic": "20200508115348973.jpg" /*证件反面照片*/,
          "hpic": "20200508115402470.jpg" /*证件手持照片*/,
          "status": 1 /*状态:0-待审核1-成功2-失败*/,
          "admin_id": 1 /**/,
          "reason": null /*审核失败原因*/,
          "created_at": "2020-05-08 03:00:18",
          "updated_at": "2020-05-08 03:54:05"
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

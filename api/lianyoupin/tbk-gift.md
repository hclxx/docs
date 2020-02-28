# 会员礼包订单

## 礼包订单列表

`api/v1/taobaoke/members/orders`

**请求方式**

`GET`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
|    limit    |  int   |  是  |   条目数 默认 10       |
|   offset    |  int   |  是  |        偏移量 默认为 0   |
| order_status | int  |  无  |  否  |    订单状态 1-待发货 2-待收货 -3已完成（获取全部订单该字段为''） |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**


```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 5,
            "order_no": "P42071581338569755",/*订单编号*/
            "total_price": "150.00000000",/*订单总价*/
            "token_total_price": "7000.00000000",/*订单通证数量*/
            "token_pay_price": "7000.00000000",/*实际支付通证数量*/
            "pay_price": "150.00000000",/*实际支付价格*/
            "pay_status": 1,/*支付状态 0-未支付 1-已支付*/
            "pay_time": "2020-02-10 20:43:10",/*支付时间*/
            "delivery_status": 0,/*发货状态 0-未发货 1-已发货*/
            "delivery_time": null,/*发货时间*/
            "receipt_status": 1,/*收货状态 0-未收货 1-已收货*/
            "receipt_time": "2020-02-24 11:52:00",/*收货时间*/
            "order_status": 2,/*订单状态 1-待收货 2-待发货 3-已完成*/
            "order_type": 2,/*订单类型 1-原商品订单 2-礼包订单(该接口无需判断 均为礼包订单)*/
            "pay_type": "wxpay",/*支付方式（无需判断）*/
            "currency": "mix",/*支付类型 （无需判断）*/
            "user_id": 4,/*用户id*/
            "express_name": "shunfeng",/*快递编码*/
            "express_code": "顺丰快递",/*快递名称*/
            "express_no": "SF1075269549216",/*快递编号*/
            "created_at": "2020-02-10 20:42:49",
            "updated_at": "2020-02-10 20:43:10",
            "tbk_member_log": {
                "id": 1,
                "user_id": 4,
                "member_id": 2,/*会员id*/
                "order_id": 5,/*订单id*/
                "tbk_gift_id": 2,/*礼包id*/
                "gift": {
                    "id": 2,
                    "member_id": 2,
                    "name": "青铜礼包2",/*礼包名称*/
                    "cover": "https://www.baidu.com",/*礼包封面图*/
                    "detail": "https://www.baidu.com",/*礼包详情图*/
                    "price": 100,/*礼包价格*/
                    "eduction_type": "eoc",/*礼包抵扣通证类型*/
                    "eduction_num": 100,/*礼包通证抵扣数量*/
                    "type": 1,/*礼包类型 1-实体 2-虚拟*/
                    "sort": 1,/*排序*/
                    "created_at": "2020-02-22 22:29:49",
                    "updated_at": "2020-02-23 10:51:58"
                }
            }
        },
        {
            "id": 4,
            "order_no": "P42071581338569744",
            "total_price": "150.00000000",
            "token_total_price": "7000.00000000",
            "token_pay_price": "7000.00000000",
            "pay_price": "150.00000000",
            "pay_status": 1,
            "pay_time": "2020-02-10 20:43:10",
            "delivery_status": 1,
            "delivery_time": "2020-02-24 11:52:00",
            "receipt_status": 1,
            "receipt_time": "2020-02-24 11:52:00",
            "order_status": 3,
            "order_type": 2,
            "pay_type": "wxpay",
            "currency": "mix",
            "user_id": 4,
            "express_name": null,
            "express_code": null,
            "express_no": null,
            "created_at": "2020-02-10 20:42:49",
            "updated_at": "2020-02-10 20:43:10",
            "tbk_member_log": {
                "id": 2,
                "user_id": 4,
                "member_id": 2,
                "order_id": 4,
                "tbk_gift_id": 1,
                "gift": {
                    "id": 1,
                    "member_id": 2,
                    "name": "青铜礼包1",
                    "cover": "https://www.baidu.com",
                    "detail": "https://www.baidu.com",
                    "price": 100,
                    "eduction_type": "eoc",
                    "eduction_num": 100,
                    "type": 2,
                    "sort": 0,
                    "created_at": "2020-02-22 22:23:38",
                    "updated_at": "2020-02-22 22:29:14"
                }
            }
        }
    ]
}
```

## 礼包订单详情

`api/v1/taobaoke/members/orders/{id}`

**请求方式**

`GET`

**请求参数**
无

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**


```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 5,
        "order_no": "P42071581338569755",/*订单编号*/
        "total_price": "150.00000000",/*订单总价*/
        "token_total_price": "7000.00000000",/*订单通证数量*/
        "token_pay_price": "7000.00000000",/*实际支付通证数量*/
        "pay_price": "150.00000000",/*实际支付价格*/
        "pay_status": 1,/*支付状态 0-未支付 1-已支付*/
        "pay_time": "2020-02-10 20:43:10",/*支付时间*/
        "delivery_status": 0,/*发货状态 0-未发货 1-已发货*/
        "delivery_time": null,/*发货时间*/
        "receipt_status": 1,/*收货状态 0-未收货 1-已收货*/
        "receipt_time": "2020-02-24 11:52:00",/*收货时间*/
        "order_status": 2,/*订单状态 1-待收货 2-待发货 3-已完成*/
        "order_type": 2,/*订单类型 1-原商品订单 2-礼包订单(该接口无需判断 均为礼包订单)*/
        "pay_type": "wxpay",/*支付方式（无需判断）*/
        "currency": "mix",/*支付类型 （无需判断）*/
        "user_id": 4,/*用户id*/
        "express_name": "shunfeng",/*快递编码*/
        "express_code": "顺丰快递",/*快递名称*/
        "express_no": "SF1075269549216",/*快递编号*/
        "created_at": "2020-02-10 20:42:49",
        "updated_at": "2020-02-10 20:43:10",
        "tbk_member_log": {
            "id": 1,
            "user_id": 4,
            "member_id": 2,/*会员id*/
            "order_id": 5,/*订单id*/
            "tbk_gift_id": 2,/*礼包id*/
            "gift": {
                "id": 2,
                "member_id": 2,
                "name": "青铜礼包2",/*礼包名称*/
                "cover": "https://www.baidu.com",/*礼包封面图*/
                "detail": "https://www.baidu.com",/*礼包详情图*/
                "price": 100,/*礼包价格*/
                "eduction_type": "eoc",/*礼包抵扣通证类型*/
                "eduction_num": 100,/*礼包通证抵扣数量*/
                "type": 1,/*礼包类型 1-实体 2-虚拟*/
                "sort": 1,/*排序*/
                "created_at": "2020-02-22 22:29:49",
                "updated_at": "2020-02-23 10:51:58"
            }
        },
        "consignee": {/*收货信息*/
            "id": 927,
            "user_id": 4,
            "order_id": 5,
            "name": "晏凡",
            "phone": "18781601111",
            "tag": "",
            "other": "18781601111",
            "area": "四川省成都市锦江区",
            "detail": "环球中心",
            "created_at": "2020-02-24 11:52:00",
            "updated_at": "2020-02-24 11:52:00"
        }
    }
}
```

## 礼包订单物流信息

`api/v1/taobaoke/members/orders/{id}/logistics`

**请求方式**

`GET`

**请求参数**
无

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**



```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "time": "2018-08-15 17:31:22",
      "context": "订单已由本人签收，感谢您在京东购物，欢迎您再次光临！"
    },
    {
      "time": "2018-08-15 15:43:02",
      "context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
    },
    {
      "time": "2018-08-15 15:25:50",
      "context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
    },
    {
      "time": "2018-08-15 15:04:27",
      "context": "货物已分配，等待配送"
    },
    {
      "time": "2018-08-15 12:53:05",
      "context": "货物已完成分拣，离开【成都郫县分拣中心】"
    },
    {
      "time": "2018-08-15 12:26:46",
      "context": "货物已到达【成都郫县分拣中心】"
    },
    {
      "time": "2018-08-15 12:26:46",
      "context": "货物已交付京东物流"
    }
  ]
}
```

## 礼包订单物确认收货

**方式**

`PATCH`

**路径**

`/api/v1/taobaoke/members/orders/{id}/delivery`

**参数**

`兑换参数说明`

无

**响应**

`Status code 200`

```json
{
  "msg": "确认收货成功",
  "code": 0,
  "data": null
}
```

## 查看虚拟礼包领取链接

**方式**

`GET`

**路径**

`/api/v1/taobaoke/members/orders/{id}/link`

**参数**

`兑换参数说明`

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "member_id": 2,
        "link_url": "http:\/\/www.baidu.com",/*虚拟礼包领取链接*/
        "link_code": "GFH345",/*虚拟礼包领取码*/
    }
}
```

# 订单管理

## 订单列表

**方式**

`GET`

**参数**

|      名称       |  类型  | 必须 |                     说明                     |
| :-------------: | :----: | :--: | :------------------------------------------: |
|    order_no     | string |  否  |                    订单号                    |
| user_name_phone | string |  否  |              用户姓名或电话号码              |
|     status      |  int   |  否  | 订单状态:0-待付款 1-待确认 2-已确认 3-已关闭 |
|     level      |  int   |  否  | fil期数 |
|   start_time    | string |  否  |                   开始时间                   |
|    end_time     | string |  否  |                   结束时间                   |
|      page       |  int   |  1   |                      是                      |
|      limit      |  int   |  20  |                      是                      |
|    is_admin     |  int   |  否  |            是否后台导入:1-是/0-否            |

**路径**

`/admin/orders`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 4,
      "order_no": "91717302" /*订单号/附言号*/,
      "total_price": "10000.00" /*订单USDT总价格*/,
      "pay_price": "10000.00" /*实际支付USDT价格*/,
      "deduct_num": 0 /*抵扣的CL数量*/,
      "buy_num": 1 /*购买数量*/,
      "specs": 20 /*T量单位为T*/,
      "order_status": 0 /*1-待确认 2-已完成/托管中 3-交易关闭*/,
      "user_id": 1,
      "goods_id": 1,
      "is_delete": 0,
      "close_reason": "关闭原因" /*关闭原因*/,
      "pay_time": "2020-05-07 15:32:40" /*付款时间*/,
      "fil_level": "1" /*fil期数*/,
      "remark": "订单备注" /*订单备注*/,
      "created_at": "2020-05-07 15:32:40" /*订单创建时间*/,
      "updated_at": "2020-05-07 15:32:40",
      /*商品信息*/
      "goods": {
        "id": 1,
        "name": "CTL-10矿机" /*商品名称*/
      },
      "user": {
        "id": 9,
        "name": "yanfan5" /*用户名称*/,
        "tel": "13929574741" /*用户电话*/
      },
      "admin": {
        "id": 1,
        "name": "超级管理员" /*管理员名称*/
      }
    }
  ]
}
```

## 导出订单列表

**方式**

`POST`

**参数**

|      名称       |  类型  | 必须 |                     说明                     |
| :-------------: | :----: | :--: | :------------------------------------------: |
|    order_no     | string |  否  |                    订单号                    |
| user_name_phone | string |  否  |              用户姓名或电话号码              |
|     status      |  int   |  否  | 订单状态:0-待付款 1-待确认 2-已确认 3-已关闭 |
|   start_time    | string |  否  |                   开始时间                   |
|    end_time     | string |  否  |                   结束时间                   |
|    is_admin     |  int   |  否  |            是否后台导入:1-是/0-否            |

**路径**

`/admin/orders/export/excel`

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

## 订单统计

**方式**

`GET`

**路径**

`/admin/orders/count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "goods_id": 2,
      "price": "196.00" /*单个商品售出总价*/,
      "deduct_num": "4" /*单个商品总抵扣CL数量*/,
      "buy_num": "2" /*单个商品售出总量*/,
      "specs": "40" /*单个商品售出总规格(T)*/,
      "goods": {
        /**/
        "id": 2 /**/,
        "name": "商品2" /*商品名称*/
      }
    },
    {
      "goods_id": 3,
      "price": "198.00",
      "deduct_num": "2",
      "buy_num": "2",
      "specs": "60",
      "goods": {
        "id": 3,
        "name": "商品3"
      }
    },
    {
      "goods_id": 4,
      "price": "196.00",
      "deduct_num": "4",
      "buy_num": "2",
      "specs": "80",
      "goods": {
        "id": 4,
        "name": "商品4"
      }
    }
  ]
}
```

## 奖励详情

**方式**

`GET`

**路径**

`/admin/orders/{order}/reward`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "销售提成奖励" /*流水标题*/,
      "user_id": 8 /*用户id*/,
      "target_id": 3 /*订单id*/,
      "amount": "8.0000" /*奖励金额*/,
      "created_at": "2020-05-08 02:42:22",
      "updated_at": "2020-05-08 02:42:22",
      "user": {
        "id": 8,
        "name": "yanfan4" /*用户姓名*/,
        "tel": "17311113103" /*用户电话*/
      }
    },
    {
      "id": 13,
      "title": "代理商培育奖励",
      "user_id": 6,
      "target_id": 3,
      "amount": "2.0000",
      "created_at": "2020-05-08 03:17:40",
      "updated_at": "2020-05-08 03:17:40",
      "user": {
        "id": 6,
        "name": "yanfan2",
        "avatar": null
      }
    }
  ]
}
```

## 确认订单

**方式**

`PUT`

**路径**

`/admin/orders/{order}/confirm`

**响应**

`Status code 200`

```json
{
  "msg": "确认订单成功",
  "code": 0,
  "data": null
}
```

## 导入订单

**方式**

`POST`

**参数**

|   名称   |  类型  | 必须 |  说明   |
| :------: | :----: | :--: | :-----: |
|  phone   | string | Yes  | 手机号  |
| goods_id |  int   | Yes  | 商品 ID |
|   num    |  int   | Yes  |  数量   |

**路径**

`/admin/orders/import`

**响应**

`Status code 200`

```json
{
  "msg": "确认订单成功",
  "code": 0,
  "data": null
}
```

## 设置订单期数

**方式**

`PUT`

**路径**

`/admin/orders/fil/level`

**参数**

|  名称  |  类型  | 必须 |     说明     |
| :----: | :----: | :--: | :----------: |
| ids | array |  是  | 订单id |
| level | int |  是  | 订单期数(等级) |

**响应**

`Status code 200`

```json
{
  "msg": "设置成功",
  "code": 0,
  "data": null
}
```

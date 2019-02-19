# 商家

## 商家列表

`admin/merchant`

**请求方式**

`admin/merchant`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| limit |  int   |  15  |  否  | 每页条数 |
| phone | string |  无  |  否  |  手机号  |
| email | string |  无  |  否  |   邮箱   |
| name  | string |  无  |  是  |   名称   |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "名称",
      "email": null,
      "phone": "18728624682",
      "avatar_id": null,
      "status": "1",
      "last_ip": null,
      "last_time": null,
      "created_at": "2019-01-18 18:25:24",
      "updated_at": "2019-01-18 18:25:24"
    }
  ],
  "first_page_url": "http://comc.com/admin/merchant?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/merchant?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/merchant",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

**ERROR 返回体**

`无`

## 添加

`admin/merchant`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                   说明                   |
| :------: | :----: | :--: | :--: | :--------------------------------------: |
|   name   | string |  无  |  是  |                   名称                   |
|  phone   | string |  无  |  否  | 手机号, email 字段不存在时, 此字段不为空 |
|  email   | string |  无  |  否  |  邮箱, phone 字段不存在时, 此字段不为空  |
|  status  |  int   |  1   |  否  |             1: 正常 2: 禁用              |
| password | string |  无  |  是  |                   密码                   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

**ERROR 返回体**

```json
{
  "message": "邮箱不存在"
}
```

## 修改商家状态

`/admin/merchant/{merchant}/status`

**请求方式**

`PUT`

**请求参数**

|  名称  | 类型 | 默认 | 必须 |  说明  |
| :----: | :--: | :--: | :--: | :----: |
| status | int  |  无  |  是  | 状态值 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "状态值错误"
}
```

## 商家删除

`admin/merchant/{merchant}`

**请求方式**

`DELETE`

**请求参数**

`无`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

`无`

**ERROR 返回体**

`无`

## 商家登入

`merchant/auth/login`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                   说明                   |
| :------: | :----: | :--: | :--: | :--------------------------------------: |
|  phone   | string |  无  |  否  | 手机号, email 字段不存在时, 此字段不为空 |
|  email   | string |  无  |  否  |  邮箱, phone 字段不存在时, 此字段不为空  |
| password | string |  无  |  是  |                   密码                   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "登入成功"
}
```

**ERROR 返回体**

```json
{
  "message": "账号或者密码错误"
}
```

## 商家信息

`/merchant/info`

**请求方式**

`get`

**请求参数**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "id": 2,
  "name": "名称" /*名称*/,
  "email": "1986513441@qq.com" /*邮箱*/,
  "phone": 18728624681 /*手机号*/,
  "avatar_id": 9 /*头像ID*/,
  "status": "1" /*1: 正常 2: 禁止*/,
  "last_ip": "127.0.0.1",
  "last_time": "2019-01-18 19:18:08",
  "created_at": "2019-01-18 18:34:47",
  "updated_at": "2019-01-18 19:18:08",
  "avatar": {
    "id": 9,
    "file_url": "http://p59l6s1jm.bkt.clouddn.com/16a5bba33d12b7ae7d15c6a87542d43d.jpeg"
  }
}
```

**ERROR 返回体**

`无`

## 商家登出

`merchant/auth/logout`

**请求方式**

`PUT`

**请求参数**

`无`

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "退出成功"
}
```

**ERROR 返回体**

`无`

## 商家修改基本信息

`merchant/info`

**请求方式**

`PUT`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   name    | string |  无  |  否  | 用户名称 |
|   email   | string |  无  |  否  |   邮箱   |
|   phone   | string |  无  |  是  |  手机号  |
| avatar_id |  int   |  无  |  否  | 头像 ID  |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "头像已存在"
}
```

## 商家修改登入密码

`merchant/update/login/password`

**请求方式**

`PUT`

**请求参数**

|         名称          |  类型  | 默认 | 必须 |   说明   |
| :-------------------: | :----: | :--: | :--: | :------: |
|     old_password      | string |  无  |  是  |  旧密码  |
|       password        | string |  无  |  是  |  新密码  |
| password_confirmation | string |  无  |  是  | 确认密码 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "新密码不能为空"
}
```

## 商家修改支付密码

`merchant/update/pay/password`

**请求方式**

`PATCH`

**请求参数**

|         名称          |  类型  | 默认 | 必须 |                 说明                  |
| :-------------------: | :----: | :--: | :--: | :-----------------------------------: |
|     old_password      | string |  无  |  是  | 旧密码 `eg: 无支付密码 该字段为 NULL` |
|       password        | string |  无  |  是  |                新密码                 |
| password_confirmation | string |  无  |  是  |               确认密码                |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "新密码不能为空"
}
```

## 找回登入密码

`merchant/find/login/password`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |              说明              |
| :------: | :----: | :--: | :--: | :----------------------------: |
|  phone   | string |  无  |  否  | 手机号 `type = sms 此字段必须` |
|  email   | string |  无  |  否  | 邮箱 `type = email 此字段必须` |
|   type   | string |  无  |  是  | sms-手机号验证 email-邮箱验证  |
| password | string |  无  |  是  |              密码              |
|   code   | string |  无  |  是  |             验证码             |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "验证码错误"
}
```

## 找回支付密码

`merchant/find/pay/password`

**请求方式**

`PATCH`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |              说明              |
| :------: | :----: | :--: | :--: | :----------------------------: |
|  phone   | string |  无  |  否  | 手机号 `type = sms 此字段必须` |
|  email   | string |  无  |  否  | 邮箱 `type = email 此字段必须` |
|   type   | string |  无  |  是  | sms-手机号验证 email-邮箱验证  |
| password | string |  无  |  是  |              密码              |
|   code   | string |  无  |  是  |             验证码             |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "验证码错误"
}
```

## 提现地址列表

`merchant/withdraw/address`

**请求方式**

`GET`

**请求参数**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 2,
    "merchant_id": 2,
    "name": "微信" /*地址名称*/,
    "address": "18728624682" /*地址*/,
    "created_at": "2019-01-21 16:31:05",
    "updated_at": "2019-01-21 16:31:05"
  }
]
```

**ERROR 返回体**

`无`

## 提现地址创建

`merchant/withdraw/address`

**请求方式**

`POST`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  name   | string |  无  |  是  |   名称   |
| address | string |  无  |  是  |   地址   |
|  type   |  int   |  无  |  是  | 地址分类 | 0: 微信 1: 支付宝 2: 银行卡 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

**ERROR 返回体**

```json
{
  "message": "名称不能为空"
}
```

## 提现地址修改

`merchant/withdraw/address/{address}`

**请求方式**

`PUT`

**请求参数**

|  名称   |  类型  | 默认 | 必须 | 说明 |
| :-----: | :----: | :--: | :--: | :--: |
|  name   | string |  无  |  是  | 名称 |
| address | string |  无  |  是  | 地址 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "名称不能为空"
}
```

## 提现地址删除

`merchant/withdraw/address/{address}`

**请求方式**

`DELETE`

**请求参数**

`无`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

`无`

**ERROR 返回体**

`无`

## 商家商品订单

`/merchant/orders`

**请求方法**

`GET`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |                                  说明                                   |
| :----------: | :----: | :--: | :--: | :---------------------------------------------------------------------: |
|    limit     |  int   |  15  |  否  |                                每页条数                                 |
|     name     | string |  无  |  否  |                                  名称                                   |
| order_status |  int   |  -1  |  否  | 订单状态:0-待付款 1-待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已关闭 |
|   order_no   | string |  无  |  否  |                                 订单号                                  |
|  start_time  | string |  无  |  否  |                                开始时间                                 |
|   end_time   | string |  无  |  否  |                                结束时间                                 |

**SUCCESS 状态码**

```json
{
  "current_page": 1,
  "data": [
    {
      "goods_name": "商品名称", // 商品名称
      "goods_image": 1, // 商品图片
      "num": 1, // 数量
      "specs_properties": null, // 规格
      "id": 1, // ID
      "order_id": 1, // 订单ID
      "goods_price": "100.00000000", // 价钱
      "order_no": "E123123", // 订单号
      "total_price": "1000.00000000", // 总价钱
      "pay_price": "1000.00000000", // 支付价钱
      "pay_time": "2019-01-21 19:33:01", // 支付时间
      "express_name": null, // 快递名称
      "phone": "18728624682", // 买家手机号
      "name": "放纵", // 买家昵称
      "express_code": null, // 快递code
      "express_no": "exdsadsa", // 运单号
      "delivery_time": "2019-01-21 19:48:26", // 发货时间
      "pay_type": null, // 支付类型
      "created_at": "2019-01-21 19:48:26", // 支付时间
      "order_status": 0, // 订单状态:0-待付款 1-待发货 2-已发货 3-已完成 4-已退款 5-已退货 6-已关闭
      "currency": "comc" // 货币类型
    }
  ],
  "first_page_url": "http://comc.com/merchant/orders?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/merchant/orders?page=1",
  "next_page_url": null,
  "path": "http://comc.com/merchant/orders",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

## 发货

`merchant/order/{goodsOrder}`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |  说明   |
| :--------: | :----: | :--: | :--: | :-----: |
| express_id |  int   |  无  |  是  | 快递 ID |
| express_no | string |  是  |  是  | 运单号  |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "发货成功"
}
```

**ERROR 返回体**

```json
{
  "message": "请填写运单号"
}
```

## 获取快递公司列表

`/merchant/express`

**请求方法**

`GET`

**请求参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  否  | 快递名称 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 1, // ID
    "name": "京东", // 名称
    "code": "jindong", // code
    "created_at": "2019-01-28 17:32:34",
    "updated_at": "2019-01-28 17:32:34"
  },
  {
    "id": 2,
    "name": "爱沙尼亚",
    "code": "omniva",
    "created_at": "2019-01-28 17:32:34",
    "updated_at": "2019-01-28 17:32:34"
  }
]
```

## 上传

**方式**

`POST`

**路径**

`/merchant/upload`

**参数**

| 名称 | 类型 | 必须 | 说明 |
| :--: | :--: | :--: | :--: |
| file | file |  是  | 文件 |

**响应**

`Status code 200`

```json
{
  "filename": "fcc9effd7b645167633169bba4ee7651.jpeg", // 文件名
  "file_url": "http://p59l6s1jm.bkt.clouddn.com/fcc9effd7b645167633169bba4ee7651.jpeg", // 文件地址
  "file_id": 1 // 文件id
}
```

## 商家钱包

`merchant/log`

**请求方法**

`GET`

**请求参数**

|  名称  | 类型 | 必须 |         说明         |
| :----: | :--: | :--: | :------------------: |
| limit  | int  |  否  |       每页条数       |
| status | int  |  否  | 0-等待 1-完成 2-失败 |
| action | int  |  否  |    1-收入 2-支出     |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "测试", // 名称
      "merchant_id": 1, // 店铺ID
      "wallet_id": 1, // 钱包ID
      "amount": "100.00000000", // 获取奖励（元）
      "curr_balance": "0.00000000", // 加之前的金额（元）
      "balance": "0.00000000", // 加之后的金额（元）
      "currency": "cash",
      "type": 2, // 日志类型 1-提现 2-商品收益
      "state": 1, // 1-收入 2-支出
      "status": 1, // 0-等待 1-完成 2-失败
      "data": {
        "address": {
          "account_number": "18728624682",
          "name": "支付宝"
        },
        "remark": null
      },
      "created_at": "2019-02-14 10:08:09", // 创建时间
      "updated_at": "2019-02-14 10:08:09"
    }
  ],
  "first_page_url": "http://comc.com/merchant/log?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/merchant/log?page=1",
  "next_page_url": null,
  "path": "http://comc.com/merchant/log",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

`ps: data值 当type == 1`

```json
{
  "address": {
    "account_number": "18728624682",
    "name": "支付宝"
  },
  "remark": null
}
```

`ps: data值 当type == 2`

```json
{
  "goods_name": "商品名称"
}
```

## 提现

`merchant/withdraw`

**请求方法**

`POST`

**请求参数**

|       名称        |  类型  | 必须 |    说明     |
| :---------------: | :----: | :--: | :---------: |
|      amount       | float  |  是  |  提现金额   |
| wallet_address_id |  int   |  否  | 钱包地址 ID |
|   pay_password    | string |  是  |  支付密码   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "提现成功"
}
```

## 验证码

**方式**

`POST`

**路径**

`/verification/code`

**参数**

|  名称  |  类型  | 必须 |                  说明                   |
| :----: | :----: | :--: | :-------------------------------------: |
| number | string |  是  |  仅支持手机号,已授权用户不需要传手机号  |
| scene  | string |  是  | 场景: merchant-forget-password-忘记密码 |

**响应**

`Status code 200`

```json
{
  "message": "发送成功"
}
```

## 获取有赞订单详情

`/merchant/yz/order`

**请求方法**

`GET`

**参数**

| 名称 |  类型  | 必须 |   说明   |
| :--: | :----: | :--: | :------: |
| oid  | string |  是  | 唯一标示 |

**返回体**

```json
{
  "user_id": 9, // 用户ID
  "address_info": {
    // 收货地址信息
    "receiver_tel": "18284583308",
    "address_extra": "{\"areaCode\":\"510107\",\"lon\":104.06982984985923,\"lat\":30.575055523764153}",
    "delivery_city": "成都市",
    "receiver_name": "杨覃",
    "self_fetch_info": "",
    "delivery_address": "天府大道北段1700号 新世纪环球购物中心 E2.    15楼1-3-1508",
    "delivery_district": "武侯区",
    "delivery_province": "四川省",
    "delivery_postal_code": ""
  },
  "goods_name": "福建莆田桂圆干 |  桂圆中的霸王 肉质细腻  甜而不腻 益脾开胃  泡茶 干吃 都不错", // 商品名称
  "cover_img_url": "https://img.yzcdn.cn/upload_files/2018/10/06/FqBcb7LwgEYaUoMOM66XtobcFTWm.jpg", // 商品图片
  "num": 1, // 商品数量
  "tid": "E20190214143853006300039", // 订单号
  "created_time": "2019-02-14 14:38:53", // 创建时间
  "pay_time": "2019-02-14 14:39:09", // 支付时间
  "send_time": "2019-02-15 18:12:31", // 发货时间
  "success_time": null, // 收货时间
  "sku": "[{\"k\": \"规格\", \"v\": \"250g试吃装（4A级）\", \"k_id\": 14, \"v_id\": 26530463}]", // 规格
  "express": {
    "id": 1,
    "no": "3397911642496" // 运单号
  },
  "user": {
    "id": 9,
    "name": "用户名称",
    "phone": "18728612345"
  }
}
```

## 获取订单信息

`/merchant/exchange/order`

**请求方法**

`GET`

**请求参数**

| 名称 |  类型  | 必须 |  说明  |
| :--: | :----: | :--: | :----: |
| tid  | string |  是  | 订单号 |

**返回体**

```json
{
  "id": 16,
  "order_no": "70291550558515550", // 订单号
  "pay_time": "2019-02-19 14:41:55",
  "express_name": null, // 快递名称
  "express_code": null, // 快递code
  "express_no": null, // 运单号
  "delivery_time": null, // 发货时间
  "receipt_time": null, // 收货时间
  "user_id": 13,
  "goods_order": {
    "id": 14,
    "goods_name": "小米6X 全网通 4GB+32GB 流沙金 移动联通电信4G手机 双卡双待 智能手机", // 商品名称
    "goods_image": "http://pm12qeuu3.bkt.clouddn.com/15273966abc3ba3ed4bfdc70cd580fac.jpeg", //商品图片
    "num": 1, // 数量
    "order_id": 16,
    "specs_properties": "[{\"p_id\": 121, \"s_id\": 50, \"p_name\": \"曜石黑\", \"s_name\": \"颜色\"}, {\"p_id\": 126, \"s_id\": 51, \"p_name\": \"4GB 32GB\", \"s_name\": \"版本\"}]" // sku
  },
  "user": {
    "id": 9,
    "name": "用户名称",
    "phone": "18728612345"
  }
}
```

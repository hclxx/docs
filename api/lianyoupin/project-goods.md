# 项目方商品[新增]

## 商品列表[现金新增]

**方式**

`GET`

**路径**

`/api/v1/project/items`

**参数**

|   名称   |  类型  | 默认 | 必须 |                  说明                  |
| :------: | :----: | :--: | :--: | :------------------------------------: |
| currency | string |  无  |  是  | 支付类型: cny-现金 mix-混合 token-通证 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 3,
      "name": "测试项目方",
      "back_id": 2,
      "avatar_id": 2,
      "items": [
        {
          "id": 6,
          "name": "花花公子 高领毛衣 2019秋季新款" /*商品名称*/,
          "image": "http://www.baidu.com" /*商品图*/,
          "price": "100.00000000" /*商品价格*/,
          "token_price": "0.00000000" /*【新增】通证价格，注意当支付类型为mix或token时该才存在有效价格*/,
          "power": 0 /*【新增】矿力奖励*/,
          "token_award": {
            "token_award": "50" /*奖励的通证数量*/,
            "token_symbol": "BTC" /*奖励的通证符*/
          },
          "limit_time": null,
          "currency": "cny" /*【新增】 支付类型: cny-现金 token-通证支付 mix-混合支付(cny+token)*/,
          "stock_num": 61 /*库存*/,
          "token": {
            "id": 4,
            "name": "以太坊" /*【新增】通证名称*/,
            "symbol": "BTC" /*【新增】通证符*/,
            "icon": {
              "id": 3,
              "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FoZuIPpBi2jzgcwUojmxJm0G5O0L.jpg" /*【新增】通证icon*/
            }
          }
        }
      ],
      /*背景*/
      "bgd": {
        "id": 2,
        "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FsXOQvXwWsvvG1GBWbdBI4FIAHvH.jpg"
      },
      /*头像*/
      "avatar": {
        "id": 1,
        "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FnfnVa3bMngMOBUhDy_It8KjdwuW.jpg"
      }
    }
  ]
}
```

## 商品下单[现金新增]

**方式**

`POST`

**路径**

`/api/v1/project/items/{id}/order`

**参数**

|     名称     |  类型  | 默认 | 必须 |                       说明                        |
| :----------: | :----: | :--: | :--: | :-----------------------------------------------: |
|    sku_id    |  int   |  无  |  是  |                    商品 sku_id                    |
|   pay_type   | string |  无  |  是  | 支付类型: wxpay-微信 alipay-支付宝 token-通证支付 |
| consignee_id |  int   |  无  |  是  |                    收获地址 id                    |
|     num      |  int   |  无  |  是  |                     购买数量                      |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    /*支付宝订单信息*/
    "alipay": {
      "order_info": "xxxx"
    },
    /*微信订单信息*/
    "wxpay": {
      "appid": "123123213213",
      "partnerid": "2131231232",
      "prepayid": "asdasd",
      "package": "Sign=WXPay",
      "noncestr": "asdsa",
      "timestamp": 12321323,
      "sign": "asdas"
    },
    /*订单号*/
    "order_no": "19818"
  }
}
```

## 通证列表

**方式**

`GET`

**路径**

`/api/v1/tokens`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "比特币" /*通证名称*/,
      "icon": {
        "id": 2,
        "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FsXOQvXwWsvvG1GBWbdBI4FIAHvH.jpg" /*通证图标*/
      },
      "symbol": "btc" /*通证符号*/,
      "balance": "10.00000000" /*通证余额*/
    }
  ]
}
```

## 检查订单状态接口

**方式**

`GET`

**路径**

`/api/v1/orders/{orderNo}/status`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "status": 0 /*0-待支付 1-已支付*/
  }
}
```

## 手动取消订单

**方式**

`POST`

**路径**

`/api/v1/project/items/{id}/cancle/order`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

# 店铺

## 商品列表

**方式**

`GET`

**路径**

`/api/shop/spus`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "name": "水果店铺" /*店铺名称*/,
      "avatar": "avatar.png" /*店铺头像*/,
      "intro": "这个是店铺介绍" /*店铺介绍*/,
      "spus": [
        {
          "id": 4 /*商品ID*/,
          "name": "iphone12" /*商品名称*/,
          "pics": [
            "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg" /*商品图*/
          ],
          "price": "1000.00",/*售价*/,
          "sales_volume": 8,/*销量*/,
          "merchant_id": 2
        }
      ]
    }
  ]
}
```

## 店铺列表

**方式**

`GET`

**路径**

`/api/shops`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "name": "水果店铺",
      "avatar": "头像.png",
      "intro": "这个是店铺介绍"
    },
    {
      "id": 1,
      "name": "店铺名称",
      "avatar": "头像.png",
      "intro": "这个是店铺介绍"
    }
  ]
}
```

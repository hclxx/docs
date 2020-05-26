# 商品

## 商品列表

**方式**

`GET`

**路径**

`/api/goods`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1 /*商品ID*/,
      "name": "CTL-10矿机" /*商品名称*/,
      "intro": "介绍" /*介绍*/,
      "deduct_num": 20 /*可抵扣CL数量*/,
      "price": "10000.00" /*现金价格*/,
      "images": ["a.png", "b.png"] /*商品图片集合*/,
      "detail": "html 详情说明" /*详情说明*/,
      "sales_num": 1 /*已销售数量*/,
      "reward_power": 0,
      "reward_cl": 0,
      "sort": 0,
      "specs": 20 /*T量,单位为T*/,
      "is_delete": 0,
      "created_at": null,
      "updated_at": null
    }
  ]
}
```

# APP 首页

## 新手特惠

**方式**

`GET`

**参数**

none

**路径**

`/api/goods`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "coupon": {
      "brief": "200元电费优惠卷" /*标题*/,
      "cny_amount": "200" /*优惠卷面额*/,
      "expire_days": "180" /*过期天数*/,
      "usdt_amount_scale": "1" /*比例*/,
      "usdt_deduction_scale": "10" /*USDT最大抵扣数量*/,
      "end": "2021-05-09 00:00:00" /*结束时间*/,
      "start": "2020-11-10 16:55:09" /*开始时间*/,
      "expired": false /*是否过期*/,
      "status": true /*状态:false-未领取 true-已领取*/
    },
    /*新手特供*/
    "novice": {
      "days": "30" /*天数*/,
      "brief": "特供30天优惠套餐" /*标题*/,
      "goods_id": 1 /*绑定的商品ID*/,
      "income_brief": "理论收益15.75% ~ 16.76" /*收入说明*/,
      "daily_output": "0.00" /*日产量*/,
      "dig_remnant_days": 0 /*剩余挖矿天数*/,
      "dig_total_days": 0 /*总挖矿天数*/,
      "status": false /*是否购买*/
    },
    "register": {
      "days": "30" /*赠送天数*/,
      "brief": "送30天1M ETH算力" /*商品描述*/,
      "goods_id": 1 /*商品ID*/,
      "daily_output": "0.00001" /*日产量*/,
      "dig_remnant_days": 30 /*挖矿总天数*/,
      "dig_total_days": 0 /*挖矿剩余天数*/,
      "status": true /*是否领取*/
    },
    "electric_discount": {
      "brief": "1000元即获取220元电费包" /*描述*/,
      "price": "1000" /*价格(元)*/,
      "months": "12" /*释放周期(月)*/,
      "give_amount": "2000" /*赠送电费包金额*/,
      "status": 1 /*1-待审核/2-释放中/3-已结束*/,
      "order": {
        "status": 1,
        "extend": {
          "code": "5fab4a7e89264",
          "brief": "1000元即获取220元电费包",
          "price": "1000",
          "months": "12",
          "account": {
            "bank": "中国民生银行股份有限公司西安太白路支行",
            "code_desc": "打款请务必填写附言码，留空会影响订单完成进度",
            "account_name": "陕西蚂蚁集群数字科技有限公司",
            "account_number": "162414068"
          },
          "order_no": "EN59331605061246562",
          "pay_type": "bank",
          "released": 0 /*已释放天数 注意已释放数量:[(give_amount/months) x released] 保留4位小数**/,
          "credential": "asdasd",
          "give_amount": "2000"
        }
      }
    }
  }
}
```

## 昨日收益

**方式**

`GET`

**路径**

`/api/incomes`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "fil": "0.0000",
    "btc": "0.0000",
    "eth": "0.0000"
  }
}
```

## 币价涨幅

**方式**

`GET`

**路径**

`/api/increases`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "eth": {
      "price": "100",
      "increase": "0.19"
    },
    "btc": {
      "price": "100",
      "increase": "0.19"
    },
    "ipfs": {
      "price": "100",
      "increase": "0.19"
    }
  }
}
```

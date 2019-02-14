# 统计

## 商城统计

`admin/statistics/mall`

**请求方法**

`GET`

**请求参数**

名称 | 类型 | 必须 | 默认 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
type | string | 是 | 无 | cash-现金 exchange-兑换

**返回体**

```json
{
  "goods_count": 0, // 商品数量
  "user_count": 0, // 用户数量
  "order_count": 0, // 订单数量
}
```

## 实时概括

`admin/statistics/survey`

**请求方法**

`GET`

**请求参数**

名称 | 类型 | 必须 | 默认 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
type | string | 是 | 无 | cash-现金 exchange-兑换

**返回体**

```json
{
  "sale": { // 成交额
     'today' : 0,
     'yesterday' : 0
  },
  "pay_order_count": { // 支付订单
      'today' : 0,
      'yesterday' : 0
  },
  "new_user_count": { // 新增用户数
      'today' : 0,
      'yesterday' : 0
  },
  "order_user_count": { // 下单用户数
        'today' : 0,
        'yesterday' : 0
  },
}
```
`or`

```json
{
  "sale": { // 成交额
     'today' : {
        "ore": 0,
        "comc": 0
     },
     'yesterday' : {
       "ore": 0,
       "comc": 0
     },
  },
  "pay_order_count": { // 支付订单
      'today' : {
        "ore": 0,
        "comc": 0
      },
      'yesterday' : {
        "ore": 0,
        "comc": 0
      },
  },
  "new_user_count": { // 新增用户数
      'today' :0,
      'yesterday' :0,
  },
  "order_user_count": { // 下单用户数
        'today' : {
          "ore": 0,
          "comc": 0
        },
        'yesterday' : {
          "ore": 0,
          "comc": 0
        },
  },
}
```

## 统计图

`admin/statistics/map`

**请求方法**

`GET`

**请求参数**

名称 | 类型 | 必须 | 默认 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
type | string | 是 | 无 | cash-现金 exchange-兑换
start_time | string | 是 | 无 | 开始时间
end_time | string | 是 | 无 | 结束时间

`ps: 默认7 天`

**返回体**

```json
{
    "2019-02-08": {
        "amount": 0, // 成交额
        "count": 0 //  成交量
    },
    "2019-02-09": {
        "amount": 0,
        "count": 0
    },
    "2019-02-10": {
        "amount": 0,
        "count": 0
    },
    "2019-02-11": {
        "amount": 0,
        "count": 0
    },
    "2019-02-12": {
        "amount": 0,
        "count": 0
    },
    "2019-02-13": {
        "amount": 0,
        "count": 0
    },
    "2019-02-14": {
        "amount": 0,
        "count": 0
    }
}
```






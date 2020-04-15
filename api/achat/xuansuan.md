# 铉算接口

## 锁仓详情

`api/xuansuan/lockcabin/detail`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "explain": "说明说明说明" /*锁仓说明*/,
    "address": "adasdasdasdasdasdasdas" /*钱包地址*/,
    "need_num": "0" /*激活需要的数量 等于0不做呈现 大于0做呈现*/
  }
}
```

## 余额锁仓

`api/xuansuan/lockcabin`

**请求方法**

`POST`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
|   num    | number |  是  | 锁仓数量 |
| pay_pass | string |  是  | 支付密码 |

**返回体**

```json
{
  "msg": "锁仓成功",
  "code": 0,
  "data": null
}
```

## 解除锁仓

`api/xuansuan/unlockcabin`

**请求方法**

`POST`

**参数**

| 名称 |  类型  | 必须 |  说明   |
| :--: | :----: | :--: | :-----: |
|  id  | number |  是  | 锁仓 ID |

**返回体**

```json
{
  "msg": "解除成功",
  "code": 0,
  "data": null
}
```

## 矿池详情

`api/xuansuan/pool/detail`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "p_count": "0" /*矿池总量*/,
    "d_count": "3.06000000" /*累计分发*/,
    "y_count": "2.04" /*昨日分发*/
  }
}
```

## 矿池详情列表

`api/xuansuan/pool/detail/list`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "static_num": "1.02000000" /*价格增长分发量*/,
      "dynamic_num": "1.02000000" /*矿池增长分发量*/,
      "created_at": "2020-04-13 23:59:59" /*时间*/
    }
  ]
}
```

## 用户业绩列表

`api/xuansuan/performances`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "name": "zhangsan",
      "avatar": "avatar.png",
      "amount": "33.00000000"
    }
  ]
}
```

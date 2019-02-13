# 订单

## 订单配置

**方式**

`GET`

**路径**

`admin/order/config`

**参数**

无

**响应**

`Status code 200`

```json
{
  "rece_day": 10, //发货10天后确认收货
  "return_goods": 3 //确认收货后单位天不能维权
}
```

## 修改订单配置

**方式**

`POST`

**路径**

`/admin/order/config`

**参数**

|     名称     | 类型 | 默认 | 必须 |        说明        |
| :----------: | :--: | :--: | :--: | :----------------: |
|   rece_day   | int  |  无  |  是  |    确认收货时间    |
| return_goods | int  |  无  |  是  | 确认收货可维权时间 |

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "rece_day": "14",
    "return_goods": "2"
  }
}
```

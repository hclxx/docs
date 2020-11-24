# 订单

## 创建订单

**方式**

`POST`

**参数**

|    名称    |  类型  | 必须 |                     说明                      |
| :--------: | :----: | :--: | :-------------------------------------------: |
|  goods_id  |  int   |  是  |                    商品 ID                    |
|    num     |  int   |  是  |                   购买数量                    |
|   pay_password   | string |  是  |                   支付密码              |
|   pay_type   | string |  是  |                   支付方式：usdt,glc,fbb    |
|   deduct_num   | int |  是  |                   抵扣数量：抵扣资产为FLC    |

**路径**

`/api/orders/usdt`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "order_no": "32523393" /*订单号*/
  }
}
```


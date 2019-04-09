## 商家钱包

`merchant/log`

**请求方法**

`GET`

**请求参数**

|  名称  | 类型 | 必须 |         说明         |
| :----: | :--: | :--: | :------------------: |
| limit  | int  |  否  |       每页条数       |
| status | string  |  否  | audit:待审核 settlement：待结算 finished：已完成 failed：已驳回 |
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
      "currency": "cash", // cash 现金 exchange 兑换
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


## 待入账资产统计

`/merchant/settlement/amount`

**请求方法**

`GET`

**请求参数**

无

**返回体**

```json
{
 "amount": 100, /*待入账金额*/
}
```
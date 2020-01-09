# 淘宝客钱包

## 现金钱包

`api/v1/taobaoke/wallet`

**请求方法**

`GET`

**参数**
无

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "user_id": 20,
    "balance": "0.00" /*当前余额*/,
    "expend_amount": "0.00" /*累积支出*/,
    "income_amount": "0.00" /*累积入账*/,
    "wait_amount": "0.00" /*待入帐*/,
    "incomes": {
      "order": "0.00" /*订单收益*/,
      "fans": "0.00" /*粉丝收益*/,
      "bonus": "0.00" /*分红收益*/
    },
    "created_at": "2020-01-09 11:13:11",
    "updated_at": "2020-01-09 11:13:11"
  }
}
```

## 钱包流水列表

`api/v1/taobaoke/wallet/logs`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| limit  | int  |  是  |                    条目数 默认 20                    |
| offset | int  |  是  |                    偏移量 默认 0                     |
|  type  | int  |  是  | 钱包日志类型： fans-粉丝收益 bonus-分红收益 all-全部 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "佣金奖励" /*标题*/,
      "amount": "0.00" /*金额*/,
      "target_user_id": 3,
      "target_type": "fans:order" /*日志类型:fans:order-粉丝下单 buy:member-购买会员 bonus-分红*/,
      "action": 1 /*收支状态: 1-收入 2-支出*/,
      "data": null /*扩展字段*/,
      "status": 0 /*状态:0-等待 1-成功 2-失败*/,
      /*目标用户信息*/
      "target_user": {
        "id": 3,
        "name": "哈哈哈",
        "avatar": null,
        "sex": 0
      },
      "created_at": "2020-01-01 12:22:11",
      "updated_at": "2020-01-01 12:22:11" /*时间*/
    }
  ]
}
```

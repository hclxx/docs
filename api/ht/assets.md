# 资产

## 我的资产

**方式**

`GET`

**路径**

`/api/wallets`

**参数**

|   名称   |  类型  | 必须 |             说明             |
| :------: | :----: | :--: | :--------------------------: |
| currency | string |  是  | 资产类型: hd-火豆，dstt-dstt |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 4,
    "user_id": 3,
    "balance": "0.0000",
    "currency": "hd" /*dstt,hd-火豆*/
  }
}
```

## 资产日志

**方式**

`GET`

**路径**

`/api/wallets/logs`

**参数**

|   名称   |  类型  | 必须 |               说明                |
| :------: | :----: | :--: | :-------------------------------: |
| currency | string |  是  |   资产类型: hd-火豆，dstt-dstt    |
|  action  | string |  否  | 收支动作: income-收入 expend-支出 |
|  limit   |  int   |  是  |         条目数量 默认 20          |
|  offset  |  int   |  是  |           偏移量 默认 0           |
|  types   | string |  否  |      流水类型: 多个用","分割      |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "title": "挖矿" /*标题*/,
      "user_id": 1,
      "target_user_id": 2,
      "target_id": 0,
      "amount": "1.0000" /*金额*/,
      "action": 2 /*收支动作: 1-收入/2-支出*/,
      "status": 1 /*状态:0-待完成/1-成功/2-失败*/,
      "type": "reward" /*打赏-reward,获赏-get:reward,闪兑-ht:to:dstt,新手奖励-rookie:reward,提币-withdrawal，参与活动-activity,一级级邀请-one:invite,二级级邀请-two:invite*/,
      "currency": "sccb" /*cny-现金，scc-sccb*/,
      "extend": {
        "spu_pic": "你要的商品图片.png" /*商品图*/
      },
      "created_at": "2020-05-03 14:46:49",
      "updated_at": "2020-05-03 14:46:49",
      /*目标用户信息*/
      "target_user": {
        "id": 2,
        "name": "张三",
        "avatar": null,
        "gender": 0,
        "phone": "183****4308",
        "code": "",
        "power": 0,
        "cllection_time": null,
        "market_id": 0
      }
    }
  ]
}
```

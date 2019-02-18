# 钱包流水

## 流水列表

**方式**

`POST`

**路径**

`/api/v1/wallet/logs`

**参数**

|   名称   |  类型  | 必须 |        说明         |
| :------: | :----: | :--: | :-----------------: |
|  limit   |  int   |  是  |       条目数        |
|  offset  |  int   |  是  |       偏移量        |
|  action  |  int   |  否  | 动作 0-全部 1-收入 2-支出  |
| currency | string |  否  | ore-矿石, comc-comc |
|  start   | string |  否  |      开始日期       |
|   end    | string |  否  |      结束日期       |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 1,
      "title": "邀请好友" /*标题*/,
      "type": 1 /*1-邀请好友 2-矿石专区兑换商品 3-COMC专区兑换商品 5-购物奖励 6-好友购物奖励*/,
      "amount": "100.00000000" /*金额*/,
      "user_id": 1 /*用户id*/,
      "target_user_id": 2 /*贡献的用户*/,
      "action": 1 /*动作: 1-收入 2-支出*/,
      "extend": null /*扩展字段*/,
      "status": 1 /*0-待处理 1-成功 2-失败*/,
      "created_at": "2019-01-24 16:28:36" /*时间*/,
      "currency": "ore" /*币种*/,
      "target_user": {
        /*用户*/
        "id": 2,
        "name": "帅哥",
        "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg"
      }
    }
  ]
}
```

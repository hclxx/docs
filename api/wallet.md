# 钱包

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
      "type": 1 /*类型: 1-邀请用户 2-兑换商品 3-兑换商品奖励 4-任务奖励 5-现金销售奖励 6-现金市场奖励 7-ifuture转入 8-兑换优惠卷 9-取消订单(兑换区) 10-代币提现 12-代币充值 13-代币提现挖矿奖励*/,
      "amount": "100.00000000" /*金额*/,
      "user_id": 1 /*用户id*/,
      "target_user_id": 2 /*贡献的用户*/,
      "action": 1 /*动作: 1-收入 2-支出*/,
      "extend": {
          "goods": {
              "id": 6,/*商品id*/
              "name": "俞兆林保暖内衣男女士情侣加绒加厚黄金绒圆领套装秋衣秋裤棉质 男-深灰色 XL", /*商品名称*/
              "image": "http://pm12qeuu3.bkt.clouddn.com/fb2a26b37dc871e6f6f9e00df7decb51.jpeg" /*商品图片*/
          }
      },
      "status": 1 /*0-待处理 1-成功 2-失败*/,
      "created_at": "2019-01-24 16:28:36" /*时间*/,
      "currency": "ore" /*币种*/,
      "target_user": {
        /*用户*/
        "id": 2,
        "name": "帅哥",
        "avatar": "http://p59l6s1jm.bkt.clouddn.com/user/avatar/be1d946cc8f89689bf29ff73588f35c0.jpeg"
      },
      /*type=10 该对象存在*/
      "cash": {
          "id": 29,
          "user_id": 95,
          "from": "0x21c2c51f71fc56bbba427d6b2239e9c1f4ca581e",
          "to": "0x1E2F8c2b4B659732b9D4989Dc28B5EdF1EB213e0",
          "charge": "0.10000000",
          "amount": "10.00000000",
          "status": 4,/*0-待审核 1-审核通过 2-驳回 3-待确认 4-成功*/
          "currency": "comc",
          "transaction_id": 51,
          "confirm": 12,/*确认节点数量*/
          "txid": "0xa1c00c8d378178432c3cff472d0a9ec712145fec7297cceef0d35b3714c96be85",
          "remark": "和客户退款",
          "created_at": "2019-03-18 22:53:47",
          "updated_at": "2019-03-18 22:57:03"
      }
    }
  ]
}
```

## 地址列表

**方式**

`GET`

**路径**

`/api/v1/wallet/addresses`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": [
        {
            "hash": "0x53f3cfcc9ace1d93faebe7fcdeda9998795bc57e1", /*hash地址*/
            "tag": "COMC" /*标签*/
        },
        {
            "hash": "0x53f3cfcc9ace1d93faebe7fcdeda9998795bc57e1",
            "tag": "ORE"
        }
    ]
}
```

## 地址添加

**方式**

`POST`

**路径**

`/api/v1/wallet/addresses`

**参数**

|   名称   |  类型  | 必须 |        说明         |
| :------: | :----: | :--: | :-----------------: |
|  hash   |  string   |  是  |       hash地址        |
|  tag  |  string   |  是  |       标签        |

**响应**

`Status code 200`

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "tag": "ORE",
        "hash": "0x53f3cfcc9ace1d93faebe7fcdeda9998795bc57e1",
        "user_id": 5,
        "updated_at": "2019-03-02 11:37:46",
        "created_at": "2019-03-02 11:37:46",
        "id": 4
    }
}
```

## 地址更新

**方式**

`PUT`

**路径**

`/api/v1/wallet/addresses/:address`

**参数**

|   名称   |  类型  | 必须 |        说明         |
| :------: | :----: | :--: | :-----------------: |
|  hash   |  string   |  是  |       hash地址        |
|  tag  |  string   |  是  |       标签        |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "tag": "ORE",
        "hash": "0x53f3cfcc9ace1d93faebe7fcdeda9998795bc57e1",
        "user_id": 5,
        "updated_at": "2019-03-02 11:37:46",
        "created_at": "2019-03-02 11:37:46",
        "id": 4
    }
}
```

## 地址删除

**方式**

`DELETE`

**路径**

`/api/v1/wallet/addresses/:address`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 代币提现

**方式**

`POST`

**路径**

`/api/v1/cash`

**参数**

|   名称   |  类型  | 必须 |        说明         |
| :------: | :----: | :--: | :-----------------: |
|  code   |  int   |  是  |       验证码        |
|  address_id  |  int   |  是  |       钱包地址id        |
|  currency  |  int   |  是  | 货币：目前仅支持`comc`  |
|  amount  |  float   |  是  | 提现金额,手续费计算方式[提现金额 * 手续费比例]如提取1000，手续费比例为0.1，那么手续费就是 100，总金额也就是 1100 |

**响应**

`Status code 200`

```json
{
    "msg": "提现成功",
    "code": 0,
    "data": null
}
```

## 获取代币提现手续费

**方式**

`POST`

**路径**

`/api/v1/cash/ratio`

**参数**

|   名称   |  类型  | 必须 |        说明         |
| :------: | :----: | :--: | :-----------------: |
|  currency  |  int   |  是  | 货币：目前仅支持`comc`  |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "ratio": 0.22
  }
}
```

## 同步充值

**方式**

`GET`

**路径**

`/api/v1/wallet/sync`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "同步成功",
  "code": 0,
  "data": null
}
```

## 获取单个钱包详情

**方式**

`GET`

**路径**

`/api/v1/api/v1/wallet/{currency}/info`

**参数**

`currency 可选 ['comc', 'ore']`

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "id": 19,
        "user_id": 10,
        "amount": "94188.00000009",/* 余额*/
        "expend_total": "7812.00000000",
        "income_total": "1100.00000000",
        "waited_total": "0.00000001",
        "currency": "comc",
        "address": "0x2f996d3813919ccb5ca979fbf0504f79221efc9b",/*钱包地址*/
    }
}
```



# fil 资产

## 我的资产

**方式**

`GET`

**路径**

`/api/fil/wallet`

**参数**
无

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "user_id": 2,
    "income": "120.0000" /*Fil累计收益*/,
    "security": "30.0000" /*保障金余额*/,
    "withdrawable": "30.0000" /*可提现金额*/,
    "withdraw_ing": "0.0000" /*提现中金额*/,
    "withdraw_finish": "0.0000" /*已提现金额*/,
    "lock": "30.0000" /*锁仓金额*/,
    "pawn": "30.0000" /*抵押金额*/,
    "created_at": "2020-10-21 16:13:30",
    "updated_at": "2020-10-21 16:13:30",
    "withdrawal_address": null /*提币地址:null未绑定*/,
    "fil_to_cny": "24205.94", /*资产余额FIl折合RMB*/
    "total_save_power": "0"   /*总存力*/
  }
}
```

## 绑定提币地址

**方式**

`POST`

**路径**

`/api/fil/withdrawal-address`

**参数**

|  名称   |  类型  | 必须 | 说明 |
| :-----: | :----: | :--: | :--: |
| address | string | 必须 | 地址 |
| currency | string | 必须 | fil/eth(钱包类型为 usdt/eoc) |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## FIL提币

**方式**

`POST`

**路径**

`/api/fil/withdrawal`

**参数**

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      | string | 必须 |   数量   |
| pay_password | string | 必须 | 支付密码 |

**响应**

`Status code 200`

```json
{
  "msg": "提现成功",
  "code": 0,
  "data": {
    "id": 4,
    "user_id": 1,
    "num": "100.0000" /*提现数量*/,
    "fee": "10.0000" /*手续费*/,
    "pid": "b0c99ec72abfdee8ba0bc83b934b7cc4" /*订单号*/,
    "from_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq",
    "to_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq",
    "data": null,
    "status": 0 /*0待审核/1成功/2驳回*/,
    "currency": "fil",
    "created_at": "2020-10-27 11:21:08",
    "updated_at": "2020-10-27 11:21:08"
  }
}
```

## ERC提币

**方式**

`POST`

**路径**

`/api/erc/withdrawal`

**参数**

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      | string | 必须 |   数量   |
| pay_password | string | 必须 | 支付密码 |
| currency | string | 必须 | usdt/eoc |

**响应**

`Status code 200`

```json
{
  "msg": "提现成功",
  "code": 0,
  "data": {
    "id": 4,
    "user_id": 1,
    "num": "100.0000" /*提现数量*/,
    "fee": "10.0000" /*手续费*/,
    "pid": "b0c99ec72abfdee8ba0bc83b934b7cc4" /*订单号*/,
    "from_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq",
    "to_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq",
    "data": null,
    "status": 0 /*0待审核/1成功/2驳回*/,
    "currency": "usdt",
    "created_at": "2020-10-27 11:21:08",
    "updated_at": "2020-10-27 11:21:08"
  }
}
```

## 提现配置信息

**方式**

`GET`

**路径**

`/api/api/fil/withdrawal-configs`

**参数**

none

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "fil": {    /*fil提现说明*/
            "fee": "10",/*手续费*/
               "min": "30",/*单次最低提币数量*/
               "limit": "1000",/*每日提现上限*/
               "bind_explain": "",/*绑定地址说明*/
               "drawal_explain": ""/*提现说明*/
        },
        "erc": {    /*erc提现说明*/
            "fee": "10",/*手续费*/
           "min": "30",/*单次最低提币数量*/
           "limit": "1000",/*每日提现上限*/
           "bind_explain": "",/*绑定地址说明*/
           "drawal_explain": ""/*提现说明*/
        }
    }
}

```

# fil资产

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
        "income": "120.0000",   /*Fil累计收益*/
        "security": "30.0000",  /*保障金余额*/
        "withdrawable": "30.0000",  /*可提现金额*/
        "withdraw_ing": "0.0000", /*提现中金额*/
        "withdraw_finish": "0.0000",  /*已提现金额*/
        "lock": "30.0000",  /*锁仓金额*/
        "pawn": "30.0000",  /*抵押金额*/
        "created_at": "2020-10-21 16:13:30",
        "updated_at": "2020-10-21 16:13:30",
        "fil_to_cny": "24205.94" /*资产余额FIl折合RMB*/
    }
}
```
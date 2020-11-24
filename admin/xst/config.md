# 配置管理


## 获取 Fil 钱包分发比例配置

`admin/configs/fil/issue`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 12,
    "key": "fil:issue",
    "value": {
      "archive": "10",  /*封存配比*/
      "lock": "10" /*锁仓金额比例*/,
      "pawn": "20" /*抵押金额比例*/,
      "security": "30" /*保障金额比例*/,
      "total_lock": "300" /*总锁仓金额*/,
      "total_pawn": "100" /*总抵押金额*/,
      "total_enable": "200" /*总可用金额*/,
      "withdrawable": "40" /*提现金额比例*/
    },
    "created_at": "2020-10-21 15:38:44",
    "updated_at": "2020-10-21 16:21:15"
  }
}
```

## 修改 Fil 钱包分发比例配置

`admin/configs/fil/issue`

**请求方式**

`PUT`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |     说明     |
| :----------: | :----: | :--: | :--: | :----------: |
|     archive     | string |  无  |  是  | 封存配比 |
|     lock     | string |  无  |  是  | 锁仓金额比例 |
|     pawn     | string |  无  |  是  | 抵押金额比例 |
|   security   | string |  无  |  是  | 保障金额比例 |
| withdrawable | string |  无  |  是  | 提现金额比例 |
|  total_lock  | string |  无  |  是  |  总锁仓金额  |
|  total_pawn  | string |  无  |  是  |  总抵押金额  |
| total_enable | string |  无  |  是  |  总可用金额  |

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取 erc 提现配置

`/admin/configs/erc/withdrawal`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "fee": "10" /*手续费 int*/,
    "min": "30" /*单词最低提现数额 int*/,
    "limit": "1000" /*单日可申请提现次数 int*/,
    "bind_explain": "" /*绑定地址说明 string*/,
    "drawal_explain": "" /*提现说明 string*/
  }
}
```

## 修改 erc 提现配置

`/admin/configs/erc/withdrawal`

**请求方式**

`PUT`

**请求参数**

```json
{
  "fee": "10" /*手续费 int*/,
  "min": "30" /*单词最低提现数额 int*/,
  "limit": "1000" /*单日可申请提现次数 int*/,
  "bind_explain": "" /*绑定地址说明 string*/,
  "drawal_explain": "" /*提现说明 string*/
}
```

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

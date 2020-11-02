# 配置管理

## 获取邀请配置

`admin/configs/invite`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 3,
    "key": "invite",
    "value": {
      "mode": "1.  点击“复制邀请链接" /*邀请方式*/,
      "url": "https://tapi.igoods.io/share/quick/register/" /*邀请链接*/,
      "rule": "1.【矿力奖励】分享自己的专属二维码给好友" /*邀请规则说明*/,
      "power": "5" /*二级邀请奖励 */
    },
    "created_at": "2019-05-30 07:42:54",
    "updated_at": "2019-05-30 07:46:03"
  }
}
```

## 修改邀请配置

`admin/configs/invite`

**请求方式**

`PUT`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |     说明     |
| :---: | :----: | :--: | :--: | :----------: |
|  url  | string |  无  |  是  |   邀请链接   |
| rule  | string |  无  |  是  | 邀请规则说明 |
| power | string |  无  |  是  | 二级邀请奖励 |
| mode  | string |  无  |  是  |   邀请方式   |

**SUCCESS 返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取一键收取价格配置

`admin/configs/collection`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "month": 1 /*时间*/,
      "price": 3 /*价格*/,
      "my_price": 30 /*MY价格*/
    },
    {
      "month": 3,
      "price": 10,
      "my_price": 30
    },
    {
      "month": 6,
      "price": 20,
      "my_price": 30
    }
  ]
}
```

## 修改一键收取价格配置

`admin/configs/collection`

**请求方式**

`PUT`

**请求参数**

| 名称  | 类型  | 默认 | 必须 |       说明       |
| :---: | :---: | :--: | :--: | :--------------: |
| money | array |  无  |  是  | 一键收取价格配置 |

**money**

```json
{
  "money": [
    { "month": 1, "price": 2, "my_price": 20 },
    { "month": 2, "price": 4, "my_price": 40 },
    { "month": 3, "price": 6, "my_price": 60 }
  ]
}
```

**SUCCESS 返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取一键收取支付方式开关配置

`admin/configs/collection/switch`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 9,
    "key": "one:key:switch",
    "value": {
      "alipay": "on" /*支付宝开关 on-开 off-关*/,
      "wechat": "on" /*微信开关 on-开 off-关*/,
      "my": "on" /*MY开关 on-开 off-关*/
    },
    "created_at": "2020-04-30 06:32:06",
    "updated_at": "2020-04-30 06:32:06"
  }
}
```

## 修改一键收取支付方式开关配置

`admin/configs/collection/switch`

**请求方式**

`PUT`

**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| switch | array |  无  |  是  | 一键收取支付开关配置 |

**money**

```json
{
  "switch": { "alipay": "off", "wechat": "off", "my": "on" }
}
```

**SUCCESS 返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取挖矿配置

`admin/configs/ore`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 10,
    "key": "cl",
    "value": {
      "float": 0.1 /*基数因子*/,
      "ratio": 0.2 /*浮动因子*/,
      "everyday_max": 1 /*挖矿奖励，每天最多上限*/
    },
    "created_at": "2020-04-30 06:32:06",
    "updated_at": "2020-04-30 06:32:06"
  }
}
```

## 设置挖矿配置

`admin/configs/ore`

**请求方式**

`PUT`

**请求参数**

|     名称     | 类型  | 默认 | 必须 |               说明               |
| :----------: | :---: | :--: | :--: | :------------------------------: |
|    ratio     | float |  无  |  是  | 基数因子(保留两位小数, 最大值 1) |
|    float     | float |  无  |  是  | 浮动因子(保留两位小数, 最大值 1) |
| everyday_max | float |  无  |  是  |      挖矿奖励，每天最多上限      |

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取提现配置

`admin/configs/withdrawal`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 13,
    "key": "withdrawal",
    "value": {
      "instr": "提现说明" /*提现说明*/,
      "switch": "on" /*提现开关 on-开启 off-关闭*/,
      "user_min": "100" /*用户最低提现额度 单位(元)*/,
      "user_day_num": "1" /*用户提现次数日上限*/,
      "service_charge": "1" /*提现服务费（百分比）*/,
      "user_day_limit": "0" /*用户提现日上限 单位(元)*/,
      "platform_day_limit": "0" /*平台用户提现日上限额度 单位(元)*/
    },
    "created_at": "2020-05-02 06:53:54",
    "updated_at": "2020-05-02 06:53:54"
  }
}
```

## 修改提现配置

`admin/configs/withdrawal`

**请求方式**

`PUT`

**请求参数**

|        名称        |  类型  | 默认 | 必须 |              说明               |
| :----------------: | :----: | :--: | :--: | :-----------------------------: |
|       instr        | string |  无  |  是  |            提现说明             |
|       switch       | string |  无  |  是  |    提现开关 on-开启 off-关闭    |
|      user_min      | string |  无  |  是  |    用户最低提现额度 单位(元)    |
|    user_day_num    | string |  无  |  是  |       用户提现次数日上限        |
|   service_charge   | string |  无  |  是  |      提现服务费（百分比）       |
|   user_day_limit   | string |  无  |  是  |     用户提现日上限 单位(元)     |
| platform_day_limit | string |  无  |  是  | 平台用户提现日上限额度 单位(元) |

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取 CL 兑换 RMB 单价配置

`admin/configs/cl/price`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 14,
    "key": "cl:to:cny",
    "value": "1",
    "created_at": "2020-05-03 09:21:21",
    "updated_at": "2020-05-03 09:22:05"
  }
}
```

## 修改 CL 兑换 RMB 单价配置

`admin/configs/cl/price`

**请求方式**

`PUT`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |       说明       |
| :---: | :----: | :--: | :--: | :--------------: |
| price | string |  无  |  是  | cl 兑换 cny 价格 |

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取收款账户信息

`admin/configs/account/receivable`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 15,
    "key": "account:receivable",
    "value": {
      "bank": "中国工商银行11",
      "code_desc": "这是附言码说明11",
      "account_name": "陕西存链科技数据有限公司111",
      "account_number": "8581"
    },
    "created_at": "2020-05-07 02:16:44",
    "updated_at": "2020-05-07 02:30:53"
  }
}
```

## 修改收款账户信息

`admin/configs/account/receivable`

**请求方式**

`PUT`

**请求参数**

|      名称      |  类型  | 默认 | 必须 |    说明    |
| :------------: | :----: | :--: | :--: | :--------: |
|  account_name  | string |  无  |  是  |   开户名   |
|      bank      | string |  无  |  是  |   开户行   |
| account_number | string |  无  |  是  |   开户号   |
|   code_desc    | string |  无  |  是  | 附言码说明 |

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

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
      "tips": "温馨提示",
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
|     tips     | string |  无  |  是  | 温馨提示 |
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

## 获取 Fil 提现配置

`/admin/configs/fil/withdrawal`

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

## 修改 Fil 提现配置

`/admin/configs/fil/withdrawal`

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

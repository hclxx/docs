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

## 支付开关配置

`admin/configs/pay/switch`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 2,
    "key": "pay:switch",
    "value": {
      "bank": "on" /*银行支付开关*/,
      "usdt": "on" /*USDT支付开关*/,
      "alipay": "on" /*USDT支付开关, on-开启,off-关闭*/
    },
    "created_at": "2020-11-03 10:44:01",
    "updated_at": "2020-11-03 10:44:01"
  }
}
```

## 修改一键收取支付方式开关配置

`admin/configs/pay/switch`

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
      "fil_fee": "10" /*fil提现手续费比例*/,
      "erc_fee": "10" /*erc提现手续费比例*/,
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
|      fil_fee       | string |  无  |  是  |       fil 提现手续费比例        |
|      erc_fee       | string |  无  |  是  |       erc 提现手续费比例        |
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

## 获取兑换配置

`admin/conversion`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 4,
    "key": "conversion",
    "value": {
      "tips": "tips" /*温馨提示*/,
      "eth_min": "10" /* eth最低兑换数量*/,
      "fil_min": "10" /* fil最低兑换数量*/,
      "eth_to_usdt": "0.1" /* eth 转 usdt 的比例*/,
      "fil_to_usdt": "0.1" /* fil 转 usdt 的比例*/,
      "eth_to_usdt_fee": "10" /* eth 转 usdt 的手续费比例*/,
      "fil_to_usdt_fee": "10" /* fil 转 usdt 的手续费比例*/
    },
    "created_at": "2020-11-03 10:44:01",
    "updated_at": "2020-11-03 10:44:01"
  }
}
```

## 修改兑换配置

`admin/conversion`

**请求方式**

`PUT`

**请求参数**

```json
{
  "tips": "tips",
  "eth_min": "10",
  "fil_min": "10",
  "eth_to_usdt": "0.1",
  "fil_to_usdt": "0.1",
  "eth_to_usdt_fee": "10",
  "fil_to_usdt_fee": "10"
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

## 获取新手特惠数据

`admin/configs/novice-benefits`

**请求方式**

`GET`

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    /*优惠卷*/
    "coupon": {
      "brief": "200元电费优惠卷" /*电费优惠卷说明*/,
      "cny_amount": "200" /*电费优惠君啊抵扣金额*/,
      "expire_days": "180" /*过期时间*/,
      "usdt_amount_scale": "1" /*USDT优惠卷奖励比列*/,
      "usdt_deduction_scale": "10" /*USDT抵扣最大比例*/
    },
    /*新手特供*/
    "novice": {
      "days": "30" /*挖矿天数*/,
      "brief": "特供30天优惠套餐" /*说明*/,
      "goods_id": 1 /*绑定的商品的ID*/,
      "income_brief": "理论收益15.75% ~ 16.76" /*收益说明*/
    },
    /*注册赠送矿机*/
    "register": {
      "days": "30" /*挖矿天数*/,
      "brief": "送30天1M ETH算力" /*说明*/,
      "goods_id": 1 /*绑定的商品ID*/
    },
    /*电费包购买*/
    "electric_discount": {
      "brief": "1000元即获取220元电费包" /*说明*/,
      "price": "1000" /*价格*/,
      "months": "12" /*赠送个数*/,
      "give_amount": "2000" /*赠送价格*/
    }
  }
}
```

## 修改新手福利

`admin/configs/novice-benefits`

**请求方式**

`PUT`

**请求参数**

```json
{
  /*优惠卷*/
  "coupon": {
    "brief": "200元电费优惠卷" /*电费优惠卷说明*/,
    "cny_amount": "200" /*电费优惠君啊抵扣金额*/,
    "expire_days": "180" /*过期时间*/,
    "usdt_amount_scale": "1" /*USDT优惠卷奖励比列*/,
    "usdt_deduction_scale": "10" /*USDT抵扣最大比例*/
  },
  /*新手特供*/
  "novice": {
    "days": "30" /*挖矿天数*/,
    "brief": "特供30天优惠套餐" /*说明*/,
    "goods_id": 1 /*绑定的商品的ID*/,
    "income_brief": "理论收益15.75% ~ 16.76" /*收益说明*/
  },
  /*注册赠送矿机*/
  "register": {
    "days": "30" /*挖矿天数*/,
    "brief": "送30天1M ETH算力" /*说明*/,
    "goods_id": 1 /*绑定的商品ID*/
  },
  /*电费包购买*/
  "electric_discount": {
    "brief": "1000元即获取220元电费包" /*说明*/,
    "price": "1000" /*价格*/,
    "months": "12" /*赠送个数*/,
    "give_amount": "2000" /*赠送价格*/
  }
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

## 关于配置

#### 接口 URL

> {{url}}/configs/about

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 8,
    "key": "about",
    "value": "关于火推" /*关于火推内容*/,
    "created_at": null,
    "updated_at": null
  }
}
```

## 修改关于配置

#### 接口 URL

> {{url}}/configs/about

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数  | 示例值   | 是否必填 | 参数描述 |
| :---- | :------- | :------- | :------- |
| about | 关于火推 | 必填     | 关于火推 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取注册协议

#### 接口 URL

> {{url}}/configs/register

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 7,
    "key": "register",
    "value": "注册协议",
    "created_at": "2020-11-03 10:44:01",
    "updated_at": "2020-11-03 10:44:01"
  }
}
```

## 修改注册协议配置

#### 接口 URL

> {{url}}/configs/register

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数     | 示例值   | 是否必填 | 参数描述 |
| :------- | :------- | :------- | :------- |
| register | 注册协议 | 必填     | 注册协议 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取电费天数/和价格

#### 接口 URL

> {{url}}/admin/configs/electricity

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "days": [10, 20, 30],
    "price": "0.1"
  }
}
```

## 修改电费天数/和价格

#### 接口 URL

> {{url}}/admin/configs/electricity

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数  | 示例值     | 是否必填 | 参数描述        |
| :---- | :--------- | :------- | :-------------- |
| price | 0.6        | 必填     | 电费价格(度/元) |
| days  | [30,60,90] | 必填     | 电费天数集合    |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

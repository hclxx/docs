# 系统配置模块

## 获取版本控制状态

#### 接口 URL

> {{url}}/configs/version

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
    "status": false /*true-开启  false-关闭*/
  }
}
```

## 设置版本控制状态

#### 接口 URL

> {{url}}/configs/version

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数   | 示例值 | 是否必填 | 参数描述                  |
| :----- | :----- | :------- | :------------------------ |
| status | 1      | 必填     | 开启状态：0：关闭 1：开启 |

#### 成功响应示例

```json
{
  "msg": "修改版本成功",
  "code": 0,
  "data": null
}
```

## 获取邀请配置

#### 接口 URL

> {{url}}/configs/invite

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
    "id": 2,
    "key": "invite",
    "value": {
      "url": "http://resource.immeet.com/科创商城/register.html" /*邀请链接*/,
      "mode": "邀请方式" /*邀请方式*/,
      "rule": "邀请说明" /*邀请奖励*/,
      "f_power": "100" /*一级邀请奖励*/,
      "s_power": "100" /*二级邀请奖励*/
    },
    "created_at": "2020-05-19 11:01:46",
    "updated_at": "2020-05-19 11:01:46"
  }
}
```

## 修改邀请配置

#### 接口 URL

> {{url}}/configs/invite

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数    | 示例值                                            | 是否必填 | 参数描述 |
| :------ | :------------------------------------------------ | :------- | :------- |
| url     | http://resource.immeet.com/科创商城/register.html | 必填     | 邀请链接 |
| mode    | 邀请方式,邀请方式                                 | 必填     | 邀请方式 |
| rule    | 邀请说明,邀请说明                                 | 必填     | 邀请奖励 |
| f_power | 20                                                | 必填     | 一级奖励 |
| s_power | 20                                                | 必填     | 二级奖励 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取支付方式开关配置

#### 接口 URL

> {{url}}/configs/pay/switch

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
    "id": 5,
    "key": "pay:switch",
    "value": {
      "alipay": "on" /*支付宝 on-开启 off-关闭*/,
      "card": "on" /*银行卡 on-开启 off-关闭*/,
      "usdt": "on" /*usdt on-开启 off-关闭*/
    },
    "created_at": "2020-05-19 11:01:46",
    "updated_at": "2020-05-19 11:01:46"
  }
}
```

## 修改支付方式开关配置

#### 接口 URL

> {{url}}/configs/collection/switch

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

```json
{
  "switch": {
    "alipay": "off",
    "card": "off",
    "usdt": "off"
  }
}
```

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取提现配置

#### 接口 URL

> {{url}}/configs/withdrawal

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
    "id": 5,
    "key": "withdrawal",
    "value": {
      "instr": "提现说明" /*提现说明*/,
      "switch": "on" /*提现开关*/,
      "user_min": "100" /*用户单次最低提现数量*/,
      "user_day_limit": "1000" /*用户单日提现上限*/
    },
    "created_at": null,
    "updated_at": null
  }
}
```

## 修改提现配置

#### 接口 URL

> {{url}}/configs/withdrawal

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数           | 示例值   | 是否必填 | 参数描述              |
| :------------- | :------- | :------- | :-------------------- |
| instr          | 提现说明 | 必填     | 提现说明              |
| switch         | on       | 必填     | 提现开关 on-开 off-关 |
| fee            | 10       | 必填     | 手续费(10 代表 10%)   |
| user_min       | 100      | 必填     | 用户单次最低提现数量  |
| user_day_limit | 1000     | 必填     | 用户单日提现上限      |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取创豆兑换 usdt 比例配置

#### 接口 URL

> {{url}}/configs/conversion

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
    "id": 4,
    "key": "conversion",
    "value": {
      "min": "10" /*最低兑换数量*/,
      "tips": "这是温馨提示" /*温馨提示*/,
      "cd_to_usdt": "10" /*cd 转 usdt 的比例*/,
      "cd_to_usdt_fee": "0.1" /*cd 转 usdt 的手续费*/
    },
    "created_at": null,
    "updated_at": null
  }
}
```

## 修改 dstt 火豆的转换比例配置

#### 接口 URL

> {{url}}/configs/conversion

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数           | 示例值   | 是否必填 | 参数描述            |
| :------------- | :------- | :------- | :------------------ |
| min            | 10       | 必填     | 最低兑换数量        |
| tips           | 温馨提示 | 必填     | 温馨提示            |
| cd_to_usdt     | 10       | 必填     | cd 转 usdt 的比例   |
| cd_to_usdt_fee | 0.1      | 必填     | cd 转 usdt 的手续费 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 获取关于配置

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
    "value": "关于创业吧" /*关于内容*/,
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
| about | 关于内容 | 必填     | 关于内容 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 注册协议配置

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
    "id": 8,
    "key": "register",
    "value": "注册协议" /*注册协议内容*/,
    "created_at": null,
    "updated_at": null
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

## 用户协议配置

#### 接口 URL

> {{url}}/configs/user

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
    "key": "user",
    "value": "用户协议" /*用户协议内容*/,
    "created_at": null,
    "updated_at": null
  }
}
```

## 修改用户协议配置

#### 接口 URL

> {{url}}/configs/user

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数 | 示例值   | 是否必填 | 参数描述 |
| :--- | :------- | :------- | :------- |
| user | 用户协议 | 必填     | 用户协议 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 创豆资产上限配置

#### 接口 URL

> {{url}}/configs/cd/limit

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
    "key": "cd:limit",
    "value": "8888" /*资产上限*/,
    "created_at": "2020-08-12 11:52:38",
    "updated_at": "2020-08-12 11:52:38"
  }
}
```

## 修改创豆资产上限配置

#### 接口 URL

> {{url}}/configs/cd/limit

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数  | 示例值 | 是否必填 | 参数描述 |
| :---- | :----- | :------- | :------- |
| limit | 8888   | 必填     | 创豆上限 |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 交易配置

#### 接口 URL

> {{url}}/configs/trade

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
    "id": 11,
    "key": "trade",
    "value": {
      "cd_to_cny": "0.05" /*单个创豆现金价格*/,
      "num_buy_min": "300" /*单个USDT现金价格*/,
      "usdt_to_cny": "6.00" /*最低数量购买数*/,
      "price_buy_min": "10" /*最低价格购买金额*/,
      "maximum_float": "5" /*创豆价格上浮比列*/,
      "minimum_float": "1" /*创豆价格下浮比列*/,
      "service_fee": "1" /*交易手续费比例*/
    },
    "created_at": "2020-08-13 10:50:01",
    "updated_at": "2020-08-13 10:50:01"
  }
}
```

## 交易配置

#### 接口 URL

> {{url}}/configs/trade

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数          | 示例值 | 是否必填     | 参数描述                 |
| :------------ | :----- | :----------- | :----------------------- |
| cd_to_cny     | 0.05   | 必填         | 单个创豆现金价格         |
| num_buy_min   | 300    | 必填         | 单个 USDT 现金价格       |
| usdt_to_cny   | 6      | 必填         | 最低数量购买数           |
| price_buy_min | 10     | 必填         | 最低价格购买金额         |
| maximum_float | 5      | 必填（整数） | 创豆价格上浮比列，百分比 |
| minimum_float | 1      | 必填（整数） | 创豆价格下浮比列，百分比 |
| service_fee   | 1      | 必填（整数） | 交易手续费比列，百分比   |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 等量发车配置

#### 接口 URL

> {{url}}/configs/equal/bus

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
    "id": 10,
    "key": "equal:bus",
    "value": {
      "tips": "等量发车规则说明" /*说明*/,
      "tg": "3" /*糖果配比*/,
      "cd": "50" /*创豆配比*/
    },
    "created_at": "2020-08-12 11:52:38",
    "updated_at": "2020-08-12 11:52:38"
  }
}
```

## 修改等量发车配置

#### 接口 URL

> {{url}}/configs/equal/bus

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数 | 示例值           | 是否必填 | 参数描述                        |
| :--- | :--------------- | :------- | :------------------------------ |
| tg   | 3                | 必填     | 糖果配比(只能为整数 最小值为 1) |
| cd   | 50               | 必填     | 创豆配比(只能为整数 最小值为 1) |
| tips | 等量发车规则说明 | 必填     | 等量发车规则说明                |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

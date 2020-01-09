# 配置

## 有赞配置

`admin/yz/config`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "kdt_id": 42440305,
  "pay_link": "https://cashier.youzan.com/pay/wsctrade_pay",
  "client_id": "http://p59l6s1jm.dsadadabkt.clouddn.com",
  "order_detail": "https://h5.youzan.com/wsctrade/order/detail",
  "client_secret": "http://p59l6s1jm.dsadadabkt.clouddn.com",
  "kf_link": "http://baidu.com",
  "channel": "频道",
  "version": 2 // 版本
}
```

## 修改有赞配置

`admin/yz/config`

**请求方法**

`PUT`

**请求参数**

|     名称      |  类型  | 默认 | 必须 |     说明      |
| :-----------: | :----: | :--: | :--: | :-----------: |
|    kdt_id     |  int   |  无  |  否  |    店铺 ID    |
|   client_id   | string |  无  |  否  |   client_id   |
| client_secret | string |  无  |  否  | client_secret |
|   pay_link    | string |  无  |  否  |   支付链接    |
| order_detail  | string |  无  |  否  |   订单详情    |
| order_detail  | string |  无  |  否  |   订单详情    |
|    kf_link    | string |  无  |  否  |   客服链接    |
|    channel    | string |  无  |  否  |   客服频道    |
|    version    | string |  无  |  否  |   客服版本    |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## APP 下载链接配置

`admin/app/download`

**请求方法**

`GET`

**请求参数**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "ios": "", // ios 下载链接
  "android": "" // Android 下载链接
}
```

## 修改 APP 下载链接配置

`admin/app/download`

**请求方法**

`PUT`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |       说明       |
| :-----: | :----: | :--: | :--: | :--------------: |
| android | string |  无  |  否  | android 下载链接 |
|   ios   | string |  无  |  否  |   ios 下载链接   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "ios": "", // ios 下载链接
  "android": "" // Android 下载链接
}
```

**ERROR 返回体**

```json
{
  "message": "ios链接错误"
}
```

## 站点信息

**方式**

`GET`

**路径**

`admin/system/site`

**参数**

无

**响应**

`Status code 200`

```json
{
  "value": {
    "icp": "这个是备案信息", //备案信息
    "name": "优品链", //站点名称
    "describe": "社区链下商城-优品链", //描述
    "keywords": "优品链,商城" //关键字
  }
}
```

## 修改站点信息

**方式**

`POST`

**路径**

`admin/system/site`

**参数**

|   名称   |  类型  | 默认 | 必须 |   说明   |
| :------: | :----: | :--: | :--: | :------: |
|   icp    | string |  无  |  是  | 备案信息 |
|   name   | string |  无  |  是  | 站点名称 |
| describe | string |  无  |  是  |   描述   |
| keywords | string |  无  |  是  |  关键字  |

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "icp": "备案信息",
    "name": "站点名称",
    "describe": "描述",
    "keywords": "关键字"
  }
}
```

## 邮件配置

**方式**

`GET`

**路径**

`admin/system/mail`

**参数**

无

**响应**

`Status code 200`

```json
{
  "driver": "smtp",
  "host": "smtp.mailtrap.io",
  "port": "2525",
  "from": {
    "address": "hello@example.com",
    "name": "Example"
  },
  "encryption": null,
  "username": null,
  "password": null
}
```

## 修改邮件配置

**方式**

`POST`

**路径**

`admin/system/mail`

**参数**

|    名称    |  类型  | 默认 | 必须 |             说明             |
| :--------: | :----: | :--: | :--: | :--------------------------: |
|    host    | string |  无  |  是  |        SMTP 主机地址         |
|    port    | string |  无  |  是  |        SMTP 主机端口         |
|   driver   | string |  无  |  是  |             驱动             |
|  password  | string |  无  |  是  |       SMTP 服务器密码        |
|  username  | string |  无  |  是  |      SMTP 服务器用户名       |
| encryption | string |  无  |  是  | 传输协议加密方式 1.SSL 2.TLS |
|    name    | string |  无  |  是  |           发送名称           |
|  address   | string |  无  |  是  |           邮件地址           |

**响应**

`Status code 201`

```json
{
  "message": "更新成功",
  "data": {
    "host": "smtp.mailgun.org",
    "port": "555",
    "driver": "smtp",
    "password": "12345600000",
    "username": "123",
    "encryption": "SSL",
    "from": {
      "name": "145",
      "address": "hello@example.com"
    }
  }
}
```

## 上传配置

**方式**

`GET`

**路径**

`admin/system/storage`

**参数**

无

**响应**

`Status code 200`

```json
{
  "qiniu": {
    "bucket": "file",
    "domain": "http://pm12qeuu3.bkt.clouddn.com",
    "access_key": "http://p59l6s1jm.dsadadabkt.clouddn.com-lQjW-FH",
    "secret_key": "B-http://p59l6s1jm.dsadadabkt.clouddn.com"
  },
  "max_upload_size": 5120
}
```

## 修改上传配置

**方式**

`POST`

**路径**

`/admin/system/storage`

**参数**

|      名称       |  类型  | 默认 | 必须 |           说明            |
| :-------------: | :----: | :--: | :--: | :-----------------------: |
|     bucket      | string |  无  |  是  |          bucket           |
|     domain      | string |  无  |  是  |         作用域名          |
|   access_key    | string |  无  |  是  |            KEY            |
|   secret_key    | string |  无  |  是  |           秘钥            |
| max_upload_size |  int   |  无  |  是  | 上传文件大小限制，单位 KB |

**响应**

`Status code 201`

```json
{
  "message": "配置成功",
  "data": {
    "qiniu": {
      "bucket": "tokenbook1",
      "domain": "http://p59l6s1jm.dsadadabkt.clouddn.com",
      "access_key": "http://p59l6s1jm.dsadadabkt.clouddn.com",
      "secret_key": "http://p59l6s1jm.dsadadabkt.clouddn.com"
    },
    "max_upload_size": "1024"
  }
}
```

## 现金购买奖励配置

`admin/system/cash`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "sell_rate": 0, // 销售奖励比例
  "bazaar_rate": 0 // 市场奖励比例
}
```

## 修改现金购买奖励配置

`admin/system/cash`

**请求方法**

`PUT`

**请求参数**

|    名称     | 类型  | 默认 | 必须 |   说明   |
| :---------: | :---: | :--: | :--: | :------: |
|  sell_rate  | float |  1   |  否  | 销售奖励 |
| bazaar_rate | float |  1   |  否  | 市场奖励 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## 邀请配置

`admin/system/invite`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "mode": "方式说明说明", // 邀请方式说明
  "rule": "奖励规则说明", // 邀请奖励说明
  "url": "", // 邀请链接
  "parent_power": 0, // 父级矿力奖励
  "grandpa_power": 0 // 父级的父级矿力奖励
}
```

## 修改邀请配置

`admin/system/invite`

**请求方法**

`GET`

**请求参数**

|     名称      |  类型  | 默认 | 必须 |        说明        |
| :-----------: | :----: | :--: | :--: | :----------------: |
|     mode      | string |  无  |  否  |      邀请方式      |
|     rule      | string |  无  |  否  |        规则        |
|      url      | string |  无  |  否  |        链接        |
| parent_power  |  int   |  0   |  否  |    父级矿力奖励    |
| grandpa_power |  int   |  0   |  否  | 父级的父级矿力奖励 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

## 兑换订单配置

`admin/order/config`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "rece_day": 10,
  "return_goods": 3
}
```

## 修改兑换订单配置

`admin/order/config`

**请求方式**

`POST`

**请求参数**

|     名称     | 类型 | 默认 | 必须 |            说明            |
| :----------: | :--: | :--: | :--: | :------------------------: |
|   rece_day   | int  |  0   |  否  | 订单到达几天后自动确认收货 |
| return_goods | int  |  0   |  否  | 确认收货后几天不允许退换货 |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功",
  "data": {
    "rece_day": 1,
    "return_goods": 0
  }
}
```

## 获取购物奖励配置

`/admin/system/buyer/reward`

**请求方法**

`GET`

**请求参数**

`无`

**返回体**

```json
{
  "rate": 1 // 比例
}
```

## 修改购物奖励配置

`/admin/system/buyer/reward`

**请求方法**

`PUT`

**请求参数**

| 名称 | 类型  | 默认 | 必须 |   说明   |
| :--: | :---: | :--: | :--: | :------: |
| rate | float |  1   |  否  | 奖励比例 |

**返回体**

```json
{
  "message": "修改成功"
}
```

## 获取 comc/ore 单价增加点数

`admin/system/currency/float`

**请求方式**

`GET`

**返回体**

```json
{
  "comc_base": 10,
  "comc_float": 10,
  "ore_flaot": 20
}
```

## 设置 comc/ore 单价增加点数

`admin/system/currency/float`

**请求方式**

`PUT`

**请求参数**

|    名称    | 类型 | 默认 | 必须 |         说明          |
| :--------: | :--: | :--: | :--: | :-------------------: |
| comc_float | int  |  无  |  是  | 增加点数(comc 浮动值) |
| ore_float  | int  |  无  |  是  | 增加点数(ore 浮动值)  |
| comc_base  | int  |  无  |  是  |   comc 单价上浮点数   |

**返回体**

```json
{
  "message": "设置成功"
}
```

## 获取挖矿配置

`admin/system/ore`

**请求方式**

`GET`

**返回体**

```json
{
  "ratio": 0.01, // 基数因子
  "float": 0.01 // 浮动因子
}
```

## 设置挖矿配置

`admin/system/ore`

**请求方式**

`PUT`

**请求参数**

|     名称     | 类型  | 默认 | 必须 |               说明               |
| :----------: | :---: | :--: | :--: | :------------------------------: |
|    ratio     | float |  无  |  是  | 基数因子(保留两位小数, 最大值 1) |
|    float     | float |  无  |  是  | 浮动因子(保留两位小数, 最大值 1) |
| everyday_max | float |  无  |  是  |    部分挖矿奖励，每天最多多少    |

**返回体**

```json
{
  "message": "设置成功"
}
```

## 获取提币

`admin/system/withdraw/currency`

**请求方式**

`GET`

**返回体**

```json
{
  "comc_min": 1, // 最小提comc数量
  "comc_ratio": 0.01, //  提como手续费
  "audit_type": "auth" // 提现审核方式: auto-自动，manual-手动
  "cycle"：2，//  提现周期
}
```

## 设置提币配置

`admin/system/withdraw/currency`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |               说明               |
| :--------: | :----: | :--: | :--: | :------------------------------: |
|  comc_min  |  int   |  无  |  是  |         最小值(最小为 0)         |
| comc_ratio | float  |  无  |  是  |   比例(保留两位小数, 最大值 1)   |
| audit_type | string |  无  |  是  | 审核方式: auto-自动, manual-手动 |
|  cycle  |  int   |  0  |  是  |         提现周期         |

**返回体**

```json
{
  "message": "设置成功"
}
```

## 获取协议

`admin/system/protocol`

**请求方式**

`GET`

**返回体**

```json
{
  "register": 1 // 注册协议
}
```

## 设置协议配置

`admin/system/protocol`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |   说明   |
| :------: | :----: | :--: | :--: | :------: |
| register | string |  无  |  是  | 注册协议 |

**返回体**

```json
{
  "message": "设置成功"
}
```

## 获取一键收取支付方式开关配置

`admin/system/collection/switch`

**请求方式**

`GET`

**返回体**

```json
{
    "key": "one:key:switch",
    "value": {
        "comc": "off",  /*comc  off 关闭  on 开启*/
        "alipay": "off",  /*支付宝  off 关闭  on 开启*/
        "wechat": "off" /*微信  off 关闭  on 开启*/
    }
}
```

## 设置一键收取支付方式开关

`admin/system/collection/switch`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |   说明   |
| :------: | :----: | :--: | :--: | :------: |
| switch | array |  无  |  是  | ['comc' => 'on', 'wechat' => 'off', 'alipay' => 'on'] |

**返回体**

```json
{
  "message": "修改成功"
}
```

## 添加/修改订单奖励到账规则

`admin/system/order/rule`

**请求方式**

`post`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |   说明   |
| :------: | :----: | :--: | :--: | :------: |
| notice | string |  无  |  是  | 提示 |
| content | string |  无  |  是  | 规则内容 |

**返回体**

```json
{
  "message": "修改成功"
}
```
## 获取订单奖励到账规则

`admin/system/order/rule`

**请求方式**

`get`

**请求参数**

无

**返回体**

```json
{
    "key": "arrival:account:rule",
    "value": {
        "notice": "都看过你大概都看过那开发都看过",
        "content": "童装和法规及工行卡号可好看"
    }
}
```

## 获取提现规则配置

`admin/system/withdrawal`

**请求方式**

`GET`

**返回体**

```json
{
    "key": "withdrawal",
    "value": {
        "max": "200",/*用户单次提现最大额度*/
        "min": "1000",/*用户自定义最小提现金额(暂定为整数)*/
        "tips": "1.耐心等待 2.马上到账",/*温馨提示*/
        "times": "2",/*用户一天提现次数*/
        "total": "400",/*用户一天提现最大额度*/
        "amount": [/*提现金额*/
            "100",
            "500",
            "1000"
        ],
        "switch": "off",/*开关: on-开 off-关*/
    }
}
```

## 修改提现规则配置

`admin/system/withdrawal`

**请求方式**

`PUT`

**请求参数**

```json
{
    "times": "2",
    "max": "200",
    "total": "400",
    "min": "1000",
    "amount": [
        "100",
        "500",
        "1000"
    ],
    "tips": "1.耐心等待 2.马上到账",
    "switch": "off"
}
```


## 获取会员规则配置

`admin/system/members`

**请求方式**

`GET`

**返回体**

```json
{
    "key": "members",
    "value": "修改文本内容"
}
```

## 修改会员规则配置

`admin/system/members`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |   说明   |
| :------: | :----: | :--: | :--: | :------: |
| content | string |  无  |  是  | 规则内容 |

**返回体**

```json
{
  "message": "修改成功"
}
```

## 获取返佣规则配置

`admin/system/rebate`

**请求方式**

`GET`

**返回体**

```json
{
    "key": "rebate",
    "value": {
        "self": "0.85",/*自身返佣比例*/
        "experience": "0.05",/*发车体验金比例*/
        "direct": "0.1",/*直推奖励比例*/
    }
}
```

## 修改返佣规则配置

`admin/system/rebate`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |   说明   |
| :------: | :----: | :--: | :--: | :------: |
| self | string |  无  |  是  | 自身返佣比例 |
| experience | string |  无  |  是  | 发车体验金比例 |
| direct | string |  无  |  是  | 直推奖励比例 |

**返回体**

```json
{
  "message": "修改成功"
}
```
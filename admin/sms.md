# 短信

## 阿里云短信配置

**方式**

`GET`

**路径**

`admin/sms/config`

**参数**

无

**响应**

`Status code 200`

```json
{
  "sign_name": "TB验证码",
  "access_key": "http://baidu.com",
  "secret_key": "http://baidu.com"
}
```

## 修改阿里云短信配置

**方式**

`post`

**路径**

`admin/sms/config`

**参数**
| 名称 | 类型 | 默认 | 必须 | 说明 |
| :--: | :----: | :--: | :--: | :---------------------: |
| sign_name | string | 无 | 是 | 签名 |
| access_key | string | 无 | 是 | KEY |
| secret_key | string | 无 | 是 | 秘钥 |

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "sign_name": "TB验证码2",
    "access_key": "http://baidu.com",
    "secret_key": "http://baidu.com"
  }
}
```

## 获取短信模板

**方式**

`get`

**路径**

`admin/sms/template`

**参数**

无

**响应**

`Status code 200`

```json
{
  // 短信登录模版
  "login": {
    "code": "SMS_sdsa",
    "switch": true
  },
  // 设置支付密码验证码
  "pay-pass": {
    "code": "SMS_sdsa",
    "switch": true
  },
  // 获取注册验证码
  "register": {
    "code": "SMS_sdsa",
    "switch": true
  },
  // 忘记密码验证码
  "forget-pass": {
    "code": "SMS_sdsa",
    "switch": true
  }
}
```

## 修改短信模板

**方式**

`PATCH`

**路径**

`admin/sms/template`

**参数**

```json
{
  "sms_pay": {
    "code": "SMS_1sdas",
    "switch": false
  },
  "sms_send": {
    "code": "SMS_ssa",
    "switch": true
  },
  "sms_notify": {
    "code": "SMS_sads",
    "switch": false
  },
  "sms_register": {
    "code": "SMS_sdsa",
    "switch": true
  }
}
```

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "sms_pay": {
      "code": "SMS_sdsa",
      "switch": false
    },
    "sms_send": {
      "code": "SMS_sdsa",
      "switch": true
    },
    "sms_notify": {
      "code": "SMS_sdsa",
      "switch": false
    },
    "sms_register": {
      "code": "SMS_sdsa",
      "switch": true
    }
  }
}
```

## 短信列表

**方式**

`get`

**路径**

`admin/sms/list`

**参数**

|  名称  |  类型  | 默认 | 必须 |                                                  说明                                                  |
| :----: | :----: | :--: | :--: | :----------------------------------------------------------------------------------------------------: |
| scene  | string |  无  |  否  | 发送场景 register: 注册,login: 登入,forget-pass: 忘记密码,update-pass: 修改密码,pay-pass: 修改支付密码 |
|  type  | string |  无  |  否  |                                 验证类型: sms-手机短信 email-邮件类型                                  |
| state  | string |  无  |  否  |                                    使用状态: 0-发送失败 1-发送成功                                     |
|  used  | string |  无  |  否  |                                           0-未使用 1-已使用                                            |
| number | string |  无  |  否  |                                                发送账号                                                |
| limit  | string |  无  |  否  |                                                分页条数                                                |

**响应**

`Status code 200`

```json
{
  "current_page": 1,
  "data": [],
  "first_page_url": "http://shop.igoods.com/admin/sms/list?page=1",
  "from": null,
  "last_page": 1,
  "last_page_url": "http://shop.igoods.com/admin/sms/list?page=1",
  "next_page_url": null,
  "path": "http://shop.igoods.com/admin/sms/list",
  "per_page": 15,
  "prev_page_url": null,
  "to": null,
  "total": 0
}
```

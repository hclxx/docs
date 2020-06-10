# 验证码管理

## 验证码列表

#### 接口URL
> {{url}}/verifications

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| scene     | login | 选填 | 短信场景(register-注册,login-登录,update-login-pass-修改登录密码,set-pay-pass-设置/修改支付密码) |
| number     | 1878123222 | 选填 | 手机号 |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "sender": 0,/*发送者*/
                "code": "662901",/*验证码*/
                "scene": "register",/*register-注册,login-登录,update-login-pass-修改登录密码,set-pay-pass-设置/修改支付密码*/
                "type": "sms",/*验证类型: sms-手机短信 email-邮件类型*/
                "state": 1,/*发送状态: 0-发送失败 1-发送成功*/
                "used": 1,/*使用状态:0-未使用 1-已使用*/
                "used_at": "2020-05-07 07:12:23",/*使用时间*/
                "number": "17345773103",/*发送账号*/
                "message": "ok",
                "created_at": "2020-05-07 07:05:56",
                "updated_at": "2020-05-07 07:12:23"
            }
        ],
        "first_page_url": "http:\/\/storage.name\/admin\/verifications?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http:\/\/storage.name\/admin\/verifications?page=1",
        "next_page_url": null,
        "path": "http:\/\/storage.name\/admin\/verifications",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
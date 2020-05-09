# 验证码管理

## 验证码列表

`admin/verifications`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|   scene  |   string |  无  |  否  |       场景       |
|   type  |   string |  无  |  否  |       验证类型: sms-手机短信 email-邮件类型        |
|   state  |   int |  无  |  否  |       发送状态: 0-发送失败 1-发送成功       |
|   used  |   int |  无  |  否  |       使用状态:0-未使用 1-已使用       |
|   number  |   string |  无  |  否  |       发送账号       |
| page  |  int   |  无  |  否  |       当前页数       |
| limit  |  int   |  15  |  是 |       每页条数       |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "sender": 0,
                "code": "662901",
                "scene": "register",/*register-注册,login-登录,update-login-pass-修改登录密码,set-pay-pass-设置/修改支付密码*/
                "type": "sms",
                "state": 1,
                "used": 1,
                "used_at": "2020-05-07 07:12:23",
                "number": "17345773103",
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

# 提现管理

## 提现配置

`api/withdrawals/config`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "获取成功",
    "code": 0,
    "data": {
        "ratio": "0.001",/*ct和rmb之间比列 ct * ratio = rmb  单位(元)*/
        "user_min": "200",/*最低提现额度 单位(元)*/
        "user_day_limit": "2000",/*用户每日限额 单位(元)*/
        "platform_day_limit": "200000"/*平台限额 单位(元)*/
    }
}
```

## 申请提现

`api/withdrawals`

**请求方法**

`POST`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| num | number |  是  |       CT数量               |
| pay_pass | string |  是  |       支付密码               |
| account_info | object |  是  |       账户信息              |

**account_info**

```json
{
    "sex": "", 
    "city": "", 
    "openid": "123123213", 
    "country": "", 
    "nickname": "", 
    "province": "", 
    "privilege": [], 
    "headimgurl": ""
}
```


**返回体**

```json
{
    "msg": "申请成功",
    "code": 0,
    "data": {
        "status": 0,
        "reason": null,
        "handler_id": 0,
        "amount": "200",/*申请提现的RMB金额*/
        "user_id": 4,
        "coin": "ct",
        "ratio": "0.001",
        "num": 200000,/*使用的CT数量*/
        "account_type": "wechat",
        "account_info": {
            "openid": " OPENID",
            "nickname": "asdasd",
            "sex": "1",
            "province": "PROVINCE",
            "city": "CITY",
            "country": "COUNTRY",
            "headimgurl": "adasdsa",
            "privilege": [
                "sadasd",
                "asdsad"
            ],
            "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
        },
        "updated_at": "2019-10-25 16:40:42",/*申请时间*/
        "created_at": "2019-10-25 16:40:42",
        "id": 6
    }
}
```

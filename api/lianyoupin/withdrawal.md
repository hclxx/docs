# 提现

## 获取提现配置信息

**方式**

`GET`

**路径**

`/api/v1/withdrawal/config`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "获取成功",
    "code": 0,
    "data": {
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
        "switch": "off",/*开关: on-开 off-关*/,
        "service_charge": "0.35",/*平台服务费百分比*/
    }
}
```

## 申请提现

**方式**

`POST`

**路径**

`/api/v1/withdrawal`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| amount | integer |  是  |       提现金额（整数）               |
| pay_pass | string |  是  |       支付密码               |
| account_info | object |  是  |       账户信息              |

**account_info**

```json
{
    "sex": "", 
    "city": "", 
    "openid": "123123213", /*必传*/
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
        "id": 6,
        "user_id": 4,
        "amount": "200",/*申请提现的RMB金额*/
        "service_charge": "20",/*服务费*/
        "account_type": "wechat",
        "account_info": {
            "openid": "OPENID",
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
        "handler_id": 0,
        "status": 0,
        "reason": null,
        "updated_at": "2019-10-25 16:40:42",/*申请时间*/
        "created_at": "2019-10-25 16:40:42"
       
    }
}
```


## 申请提现流水记录列表

`api/v1/tbk/wallet/logs`

**请求方法**

`GET`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| limit | int |  是  | 条目数 |
| offset | int |  是  | 偏移量 |
| action | int |  是  | 收支类型:0-所有 1-收入 2-支出  |


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "title": "微信提现",
            "user_id": 20,
            "amount": "100.00",
            "target_user_id": 20,
            "target_type": "withdrawal:user",
            "target_id": 1,
            "action": 2,/*流水状态:0-待处理 1-完成 2-失败*/
            "data": null,
            "status": 0,
            "created_at": "2020-01-09 11:07:52"
        }
    ]
}
```



## 获取单个现金钱包

`api/v1/tbk/wallet`

**请求方法**

`GET`

**参数**
无


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "user_id": 20,
        "balance": "0.00",/*当前余额*/
        "expend_amount": "0.00",/*累积支出*/
        "income_amount": "0.00",/*累积入账*/
        "wait_amount": "0.00",/*待入帐*/
        "created_at": "2020-01-09 11:13:11",
        "updated_at": "2020-01-09 11:13:11"
    }
}
```




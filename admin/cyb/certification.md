# 认证管理

## 认证列表

#### 接口URL
> {{url}}/certifications

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| user_name     | 张三 | 选填 | 用户名或手机号 |
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
                "user_id": 1,
                "name": "hh",     /*收款名字*/
                "number": "1324654131",   /*收款账号*/
                "code_pic": null,     /*收款码图片*/
                "bank": "建行",     /*银行卡开户行*/
                "type": 1,          /*支付方式:1-银行卡/2-支付宝/3-usdt*/
                "created_at": "2020-08-13 14:54:55",
                "updated_at": "2020-08-13 14:54:55",
                "user": {
                    "id": 1,
                    "name": "aa",
                    "avatar": "123.jpg",
                    "tel": "18781600000"
                }
            }
        ],
        "first_page_url": "http://cyb.test/admin/certifications?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://cyb.test/admin/certifications?page=1",
        "next_page_url": null,
        "path": "http://cyb.test/admin/certifications",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
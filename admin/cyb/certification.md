# 认证管理

## 认证列表

#### 接口URL
> {{url}}/certifications

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| user_name     | 张三 | 选填 | 认证用户名 |
| status     | 1 | 选填 | 状态:0-待审核 1-已通过 2-已驳回 |
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
                "idcard_name": "张浩",/*身份证姓名*/
                "idcard_number": "513823199011016131",/*证件号*/
                "bankcard_number": "20200508115335796",/*银行卡号*/
                "bpic": "20200508115348973.jpg",/*证件反面照片*/
                "data": null,/*附加信息*/
                "created_at": "2020-05-08 03:00:18",
                "updated_at": "2020-05-08 03:54:05"
            }
        ],
        "first_page_url": "http:\/\/storage.name\/admin\/certifications?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http:\/\/storage.name\/admin\/certifications?page=1",
        "next_page_url": null,
        "path": "http:\/\/storage.name\/admin\/certifications",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
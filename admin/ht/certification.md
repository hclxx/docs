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
                "name": "张浩",/*真实姓名*/
                "number": "513823199011016131",/*证件号*/
                "fpic": "20200508115335796.jpg",/*证件正面照片*/
                "bpic": "20200508115348973.jpg",/*证件反面照片*/
                "hpic": "20200508115402470.jpg",/*证件手持照片*/
                "status": 1,/*状态:0-待审核1-成功2-失败*/
                "admin_id": 1,/**/
                "reason": null,/*审核失败原因*/
                "created_at": "2020-05-08 03:00:18",
                "updated_at": "2020-05-08 03:54:05",
                "user": {
                    "id": 1,
                    "name": "yanfan",
                    "avatar": null,
                    "phone":"13411118901"
                },
                "admin": {
                    "id": 1,
                    "name": "超级管理员"
                }
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



## 通过认证

#### 接口URL
> {{url}}/certifications/1/pass

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "通过认证成功",
	"code": 0,
	"data": null
}
```



## 驳回认证

#### 接口URL
> {{url}}/certifications/1/reject

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| reason     | 驳回原因 |  必填 | 驳回原因 |

#### 成功响应示例
```json
{
	"msg": "驳回认证成功",
	"code": 0,
	"data": null
}
```
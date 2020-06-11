# 系统消息

## 系统消息列表

#### 接口URL
> {{url}}/messages

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
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
                "content": "发送系统消息",
                "sender_id": 1,
                "extra": null,
                "created_at": "2020-06-11 10:39:36",
                "updated_at": "2020-06-11 10:39:36",
                "admin": {
                    "id": 1,
                    "name": "超级管理员"
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/messages?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/messages?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/messages",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 发送系统消息

#### 接口URL
> {{url}}/messages

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| content     | 111 |  必填 | 消息内容 |

#### 成功响应示例
```json
{
	"msg": "发送成功",
	"code": 0,
	"data": null
}
```
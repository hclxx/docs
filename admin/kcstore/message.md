# 系统消息

## 系统消息列表

#### 接口URL
> {{url}}/messages

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| message_type     | order | 选填 | 消息类型(system: 系统消息 order: 订单消息) |
| receiver_id     | 1 | 选填 | 接受者 ID |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "驳回认证成功",
	"code": 0,
	"data": [
            {
              "id": 1,
              "title": "消息" /*消息标题*/,
              "content": "消息内容" /*消息内容*/,
              "sender": 1 /*发送者ID*/,
              "sender_role": "admin" /*admin 管理员发送 merchant 商家发送*/,
              "receiver": {
                // 为null是是全体成员
                "id": 14,
                "name": "QAZXSW#" /*接受者*/
              },
              "type": "system" /* system 系统 order 订单消息*/,
              "created_at": "2019-01-27 11:57:42",
              "updated_at": "2019-01-27 11:57:44",
              "sender_name": "超级管理员" /*管理员名称*/
            }
           ],
           "first_page_url": "http://comc.com/admin/message?page=1",
           "from": 1,
           "last_page": 1,
           "last_page_url": "http://comc.com/admin/message?page=1",
           "next_page_url": null,
           "path": "http://comc.com/admin/message",
           "per_page": 15,
           "prev_page_url": null,
           "to": 1,
           "total": 1
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
| title     | 111 |  必填 | 消息标题 |
| receiver     | 0 |  选填 | 接受者(0: 全部) |

#### 成功响应示例
```json
{
	"msg": "发送成功",
	"code": 0,
	"data": null
}
```
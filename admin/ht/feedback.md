# 反馈模块

## 反馈列表

#### 接口URL
> {{url}}/feedback

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| start     | 2020-05-18 00:00:00 | 选填 | 开始时间 |
| end     | 2020-05-19 00:00:00 | 选填 | 结束时间 |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "contact": "18382274309" /*联系方式*/,
      "content": "还不错" /*意见内容*/,
      "created_at": "2019-01-20 12:12:12" /*反馈时间*/,
      "updated_at": null,
      "user": {
        /*用户*/
        "id": 1,
        "name": "哈哈哈"
      }
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/feedback?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/feedback?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/feedback",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```
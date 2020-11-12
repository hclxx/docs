# 意见反馈

## 列表

**方式**

`GET`

**路径**

`/admin/feedback`

**参数**

| 名称  | 类型 | 默认 | 必须 |    说明    |
| :---: | :--: | :--: | :--: | :--------: |
| start | string  |  无  |  是  | 每页条目数 |
| end  | string  |  无   |  是  |    页码    |
| limit | int  |  15  |  是  | 每页条目数 |
| page  | int  |  1   |  是  |    页码    |

**响应**

`Status code 200`

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

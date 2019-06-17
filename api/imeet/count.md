# 统计接口

## 用户/社区/社群统计

**方式**

`GET`

**路径**

`/api/statistics`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "user_count": 3,/*用户数*/
        "group_count": 6,/*社群数*/
        "community_count": 0/*社区数*/
    }
}
```
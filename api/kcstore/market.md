# 市场

## 我的市场详情

**方式**

`GET`

**路径**

`/api/market/details`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 3,
        "user_id": 1,
        "preferred": "200",/*优选店业绩*/
        "experience": "200"/*体验店业绩*/
    }
}
```

## 市场业绩列表

**方式**

**路径**

`/api/market/achievements`

**响应**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "name": "李四",/*名称*/
            "avatar": "2020/05/26/01c7b2dd2d5771bfafc9834682dd3dca.png",/*头像*/
            "market": 200,/*业绩数据*/
        },
        {
            "id": 3,
            "name": "0CGLAU",
            "avatar": "20200526151508000.png",
            "market": 200
        }
    ]
}
```
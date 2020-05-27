# 市场

## 市场业绩

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**路径**

`/api/performances`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "self": {
            "user_id": 1,
            "preferred": "200",/*自身优选店业绩*/
            "experience": "200",/*自身体验店业绩*/
        },
        "children": [/*直接推广人*/
            {
                "id": 2,
                "name": "李四",/*名称*/
                "avatar": "2020/05/26/01c7b2dd2d5771bfafc9834682dd3dca.png",/*头像*/
                "market": 200,/*市场业绩额*/
            },
            {
                "id": 3,
                "name": "0CGLAU",
                "avatar": "20200526151508000.png",
                "market": 200
            }
        ]
    }
}
```

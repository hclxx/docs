# 标签

## 用户标签

**方式**

`GET`

**路径**

`/api/user/tags`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 0,
            "name": "推荐",/*分类名称*/
            "tags": [
                {
                    "id": 1,
                    "name": "测试一",/*标签名称*/
                    "cate_id": 1
                }
            ]
        },
        {
            "id": 1,
            "name": "幽默",
            "tags": [
                {
                    "id": 1,
                    "name": "测试一",
                    "cate_id": 1
                }
            ]
        }
    ]
}
```

## 动态标签

**方式**

`GET`

**路径**

`/api/user/tags`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "name": "动态标签"/*标签名称*/
        },
        {
            "id": 3,
            "name": "520"
        }
    ]
}
```

## 添加动态标签

**方式**

`POST`

**路径**

`/api/dynamic/tags`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| name | string |  是  | 标签名称 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "name": "骚军4",
        "type": 2,
        "id": 4/*标签id*/
    }
}
```
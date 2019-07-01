# 推荐

## 用户推荐列表

**方式**

`GET`

**路径**

`/api/recommend/users`

**参数**


|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| offset | int |  是  | 偏移量 默认 0 |
| limit | int |  是  | 条目数 默认 20 |
| type | string |  否  | 类型:`tag`-用户标签 `dynamic`-动态 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "name": "eric",
            "avatar": null,
            "apply_status": false,/*type 为 dynamic 才会存在此字段 好友申请状态: true-申请 false-未申请*/
            "sex": 0
        },
        {
            "id": 4,
            "name": "章三",
            "avatar": null,
            "sex": 0
        }
    ]
}
```

## 社群/社区推荐列表

**方式**

`GET`

**路径**

`/api/recommend/groups`

**参数**


|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| offset | int |  是  | 偏移量 默认 0 |
| limit | int |  是  | 条目数 默认 20 |
| type | string |  否  | 类型:`group`-社群 `community`-社区 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 123,
            "name": "我的第一个群", /*名称*/
            "number": "93154254", /*群组号*/
            "avatar": "xxxx.png"/*头像*/
        }
    ]
}
```
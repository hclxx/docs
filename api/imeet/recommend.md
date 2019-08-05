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
| name | string |  否  | 社区(群)名称  支持模糊查询 |
| sign | string |  否  | `recommend` 推荐  `excellent` 优秀  `from` 官方  查询全部改字段不传或者为空 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 123,
            "name": "Rrrr",
            "number": "21831965",
            "avatar": "20190629154638713.png",
            "describe": "",
            "from": 2,/*来源:1-用户自身创建,2-后台创建,3-第三方创建*/
            "recommend": 1, /*1-推荐 0-未推荐*/
            "excellent": 1,/*1-优秀社区 0-非优秀*/
            "member_count": 1,
            "join_status": 1,/*0-不呈现操作 1-可加入 2-已加入*/
            "member": []
        }
    ]
}
```
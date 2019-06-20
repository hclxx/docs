# 用户任务

## 任务列表

**方式**

`GET`

**路径**

`/api/tasks`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        /*每日任务*/
        "day": [
            {
                "id": 1,
                "name": "邀请好友",
                "describe": "单次奖励2矿力，每日上限20矿力",
                "trigger": "invite:friend",
                "number": 10,
                "reward": 2,
                "type": "day",
                "completed": false,
                "log": null
            }
        ],
        /*一次任务*/
        "once": [
            {
                "id": 4,
                "name": "完善个人资料",
                "describe": "完善基础信息，奖励10矿力",
                "trigger": "perfect:info",
                "number": 1,
                "reward": 10,
                "type": "once",
                "completed": false,
                "log": null
            }
        ]
    }
}
```

## 触发任务[用于特殊任务触发]

**方式**

`POST`

**路径**

`/api/tasks`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----: |
| trigger | string |  是  | 触发器,仅支持: `sign:in`-签到任务 `online`-在线任务 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "reward": 2 /*任务触发奖励值*/
    }
}
```
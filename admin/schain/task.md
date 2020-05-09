# 任务管理

## 任务列表

**方式**

`GET`

**路径**

`/admin/tasks`

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
            "id": 1,
            "name": "注册奖励",/*任务名称*/
            "describe": "首次注册奖励30能量",/*任务描述*/
            "hook": "register",/*任务勾子*/
            "number": 1,/*任务可完成次数*/
            "reward": 30,/*任务完成奖励*/
            "type": "once",/*任务类型 once-一次性任务 day-每日任务*/
            "reward_type": "power",/*奖励类型 power-能量*/
            "sort": 0,/*排序*/
            "status": 0,/*状态 0-开启 1-关闭*/
            "is_delete": 0,
            "created_at": "2020-04-29 03:30:48",
            "updated_at": "2020-04-29 03:30:48"
        },
        {
            "id": 2,
            "name": "填写邀请码",
            "describe": "填写邀请码，奖励20能量",
            "hook": "fill:invite:code",
            "number": 1,
            "reward": 20,
            "type": "once",
            "reward_type": "power",
            "sort": 0,
            "status": 0,
            "is_delete": 0,
            "created_at": "2020-04-29 03:30:48",
            "updated_at": "2020-04-29 03:30:48"
        }
    ]
}
```

## 更新

**方式**

`PUT`

**路径**

`/admin/tasks/{task}`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  name   | string |  是  |                  任务名称                  |
|  describe   |  string   |  是  |                  任务描述                  |
| number  |  int   |  是  |  可完成次数 `type为once number只能为1`  |
| sort |  int   |  是  |                  任务排序                  |
|  state  |  int   |  是  |            状态：0-开启 1-关闭             |
| reward  |  int   |  是  |                任务奖励数量                |

**响应**

`Status code 200`

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": null
}
```

## 任务开启和关闭

**方式**

`PUT`

**路径**

`/admin/tasks/{task}/status`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "切换成功",
    "code": 0,
    "data": null
}
```

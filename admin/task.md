# 任务管理

## 列表

**方式**

`GET`

**路径**

`/admin/tasks`

**参数**

无

**响应**

`Status code 200`

```json
[
  {
    "id": 1,
    "name": "填写邀请码", // 任务名称
    "desc": "描述", // 任务描述
    "trigger": "invite:fill:code", // 任务勾子
    "type": "one-off", // 任务类型 one-off-一次性任务 daily-每日任务
    "number": 1, // 任务可完成次数
    "sort_by": 10, // 排序
    "state": 0, // 状态 0-开启 1-关闭
    "mold": "comc", // 任务奖励类型 como-comc ore-矿石 power-算力
    "reward": 100 // 任务完成奖励
  },
  {
    "id": 2,
    "name": "资讯点赞",
    "desc": "资讯点赞",
    "trigger": "news:like",
    "type": "daily",
    "number": 100,
    "sort_by": 10,
    "state": 0,
    "mold": "comc",
    "reward": 100
  }
]
```

## 添加

**方式**

`POST`

**路径**

`/admin/tasks`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  name   | string |  是  |                  任务名称                  |
|  desc   |  int   |  是  |                  任务描述                  |
| trigger | string |  是  |                  触发勾子                  |
|  type   | string |  是  |                  任务类型                  |
| number  |  int   |  是  |  可完成次数 `type为one-off number只能为1`  |
| sort_by |  int   |  是  |                  任务排序                  |
|  state  |  int   |  是  |            状态：0-开启 1-关闭             |
|  mold   | string |  是  | 任务奖励类型 comc-comc ore-矿石 power-矿力 |
| reward  |  int   |  是  |                任务奖励数量                |

**响应**

`Status code 200`

```json
{
  "message": "添加成功",
  "task": {
    "name": "资讯点赞",
    "desc": "资讯点赞",
    "trigger": "news:like1",
    "type": "daily",
    "number": 100,
    "state": 0,
    "sort_by": 10,
    "mold": "comc",
    "reward": 100,
    "id": 3
  }
}
```

## 更新

**方式**

`PUT`

**路径**

`/admin/tasks/:task`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  name   | string |  是  |                  任务名称                  |
|  desc   |  int   |  是  |                  任务描述                  |
| number  |  int   |  是  |  可完成次数 `type为one-off number只能为1`  |
| sort_by |  int   |  是  |                  任务排序                  |
|  state  |  int   |  是  |            状态：0-开启 1-关闭             |
| reward  |  int   |  是  |                任务奖励数量                |

**响应**

`Status code 200`

```json
{
  "message": "更新成功",
  "task": {
    "name": "资讯点赞",
    "desc": "资讯点赞",
    "trigger": "news:like1",
    "type": "daily",
    "number": 100,
    "state": 0,
    "sort_by": 10,
    "mold": "comc",
    "reward": 100,
    "id": 3
  }
}
```

## 任务开启和关闭

**方式**

`PATCH`

**路径**

`/admin/tasks/:task/state`

**参数**

无

**响应**

`Status code 200`

```json
{
  "message": "开启任务成功",
  "task": {
    "name": "资讯点赞",
    "desc": "资讯点赞",
    "trigger": "news:like1",
    "type": "daily",
    "number": 100,
    "state": 0,
    "sort_by": 10,
    "mold": "comc",
    "reward": 100,
    "id": 3
  }
}
```

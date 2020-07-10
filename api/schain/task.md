# 任务

## 任务列表

**方式**

`GET`

**路径**

`/api/tasks`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    /*单次任务*/
    "once": [
      {
        "id": 1,
        "name": "注册奖励" /*任务名称*/,
        "describe": "首次注册奖励30能量" /*任务描述*/,
        "hook": "register" /*任务触发器*/,
        "number": 1 /*次数为1次*/,
        "reward": 30 /*奖励能力值*/,
        "type": "once",
        "reward_type": "power",
        "sort": 0,
        "status": 0,
        "is_delete": 0,
        "created_at": "2020-04-30 15:26:40",
        "updated_at": "2020-04-30 15:26:40",
        "state": 0 /*任务状态:0-未完成 1-已完成，注:实名认证(real:name:auth)任务存在4个状态【-1-去认证/0-审核中/1-认证完成/2-被驳回*/,
        "progress": 0 /*任务当前进度*/
      },
      {
        "id": 3,
        "name": "完善个人资料",
        "describe": "完善基础信息，奖励10能量",
        "hook": "perfect:info",
        "number": 1,
        "reward": 10,
        "type": "once",
        "reward_type": "power",
        "sort": 0,
        "status": 0,
        "is_delete": 0,
        "created_at": "2020-04-30 15:26:40",
        "updated_at": "2020-04-30 15:26:40",
        "state": 0,
        "progress": 0
      },
      {
        "id": 4,
        "name": "实名认证",
        "describe": "完成实名认证，奖励20矿力",
        "hook": "real:name:auth",
        "number": 1,
        "reward": 20,
        "type": "once",
        "reward_type": "power",
        "sort": 0,
        "status": 0,
        "is_delete": 0,
        "created_at": "2020-04-30 15:26:40",
        "updated_at": "2020-04-30 15:26:40",
        "state": -1,
        "progress": 0
      }
    ],
    /*每日任务*/
    "day": [
      {
        "id": 5,
        "name": "每日签到",
        "describe": "单次奖励2能量，每日上限10能量",
        "hook": "sign:in",
        "number": 1,
        "reward": 2,
        "type": "day",
        "reward_type": "power",
        "sort": 0,
        "status": 0,
        "is_delete": 0,
        "created_at": "2020-04-30 15:26:40",
        "updated_at": "2020-04-30 15:26:40",
        "progress": 0,
        "state": 0
      }
    ]
  }
}
```

## 触发任务

**方式**

`POST`

**路径**

`/api/tasks`

**参数**

| 名称 |  类型  | 必须 |                            说明                             |
| :--: | :----: | :--: | :---------------------------------------------------------: |
| hook | string |  是  | 触发器:share:goods-分享商品/sign:in-签到/read:news-阅读咨询 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "reward": 2 /*奖励的能量值*/
  }
}
```

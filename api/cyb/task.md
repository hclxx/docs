# 任务

## 列表

#### 接口 URL

> /api/tasks

#### 请求方式

> GET

#### 请求 Query 参数

none

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "每日签到1" /*任务签到*/,
      "icon": "123123" /*图标*/,
      "intr": "每日签到" /*介绍*/,
      "frequency": 10 /*次数*/,
      "reward": "1.0000" /*糖果奖励数量*/,
      "mark": "sign" /*任务标记*/,
      "type": "daily" /*每日任务*/,
      "status": 1 /*状态:0-开启/1-关闭*/,
      "sort": 0 /*排序*/,
      "created_at": "2020-10-22 10:06:50",
      "updated_at": "2020-10-22 10:06:50",
      /*log 如为 null,则未做该任务*/
      "log": {
        "id": 1,
        "user_id": 1,
        "task_id": 1,
        "progress": 1 /*已完成次数 当 progress >= frequency 任务即为完成，如未完成剩余次数计算 frequency - progress*/,
        "target_id": 0,
        "created_at": "2020-10-22 18:15:19",
        "updated_at": "2020-10-21 18:15:19"
      }
    }
  ]
}
```

## 提交任务

#### 接口 URL

> api/tasks

#### 请求方式

> POST

#### 请求参数

| 参数 | 示例值 | 是否必填 | 参数描述                                       |
| :--- | :----- | :------- | :--------------------------------------------- |
| mark | sign   | 必填     | 任务标记 仅支持:sign-签到/watch:video-观看视频 |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "reward": "1.0000"
  }
}
```

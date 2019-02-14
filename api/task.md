# 任务

## 任务列表

**方式**

`GET`

**路径**

`/api/v1/tasks`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        /*新手任务*/
        "novice": [
            {
                "id": 1,/*任务id*/
                "name": "填写邀请码",/*任务名称*/
                "desc": "描述",/*任务描述*/
                "trigger": "invite:fill:code",
                "type": "one-off",/*one-off 一次性任务 daily-每日任务*/
                "number": 1,/*完成任务需要总次数*/
                "currency": "power",/*任务奖励类型:power-矿力 ore-矿石 comc-comc*/
                "reward": 1,/*任务奖励金额*/
                "note": {
                    "progress": 1,
                    "reward": 1 /*完成任务已获取奖励*/
                },
                "completed": true /*任务完成状态*/
            }
        ],
        /*每日任务*/
        "daily": [
            {
                "id": 3,
                "name": "资讯点赞",
                "desc": "其他",
                "trigger": "news:like1",
                "type": "daily",
                "number": 3,
                "currency": "power",
                "reward": 1,
                "note": null,
                "completed": false
            }
        ]
    }
}
```

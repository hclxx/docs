# 任务管理

## 任务列表

#### 接口URL
> {{url}}/tasks

#### 请求方式
> GET

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
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



## 更新任务

#### 接口URL
> {{url}}/tasks/1

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 名称 |  选填 | 任务名称 |
| describe     | 描述 |  选填 | 任务描述 |
| number     | 1 |  选填 | 可完成次数(当任务类型为每日任务时，可填写该字段) |
| sort     | - |  选填 | 排序 |
| reward     | - |  选填 | 奖励 |
| status     | 1 |  选填 | 状态:0-显示 1-隐藏 |

#### 成功响应示例
```json
{
	"msg": "修改任务成功",
	"code": 0,
	"data": null
}
```
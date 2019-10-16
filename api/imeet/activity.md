# 活动

## 获取活动

**方式**

`GET`

**路径**

`/api/activities`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "name": "邀请任务",/*活动名称*/
        "title": "邀请任务副标题",/*活动副标题*/
        /*活动插图*/
        "image": {
            "mime": "image/jpeg",
            "width": 720,
            "height": 1280,
            "filename": "20190808104048749.jpg"
        },
        /*活动图标*/
        "icon": {
            "mime": "image/jpeg",
            "width": 720,
            "height": 1280,
            "filename": "20190808104048749.jpg"
        },
        "start_time": "2019-10-15 14:15:00",/*开始时间*/
        "end_time": "2019-11-12 12:00:00",/*结束时间*/
        "rule": "这个是任务的规则",/*不哦动规则*/
        "status": 0,
        "created_at": "2019-10-15 11:23:41",
        "updated_at": "2019-10-15 13:48:40",
        "rank": 1,/*当前用户当前排行*/
        "effective_num": 6,/*当前用户邀请到有限用户数*/
        "regsiter_num": 123123,/**/
        "is_participate": true,/*是否参与*/
        "awards": [
            {
                "id": 1,
                "attr": "yjsq",
                "title": "付费活动免费领取",
                "cate": "num",/*奖励类型: num-邀请数 rank-排行*/
                "total_num": 1000,
                "receive_num": 1,
                "activity_id": 1,
                /*图标*/
                "icon": {
                    "mime": "image/png",
                    "width": 96,
                    "height": 96,
                    "filename": "2019/10/16/f6fe642ba4201270db7b8da9e647acf3.png"
                },
                "created_at": "2019-10-15 11:57:59",
                "updated_at": "2019-10-15 16:15:58",
                "attr_name": "一键收取",/*奖励属性名称*/
                /*总进度*/
                "progress": [
                    5,
                    10,
                    20
                ],
                "curr_progress": 6,/*当前进度*/
                "status": 0/*状态: 0-再接再厉 1-待领取 2-已领取 3-还差一点*/
            },
            {
                "id": 2,
                "attr": "ct",
                "title": "奖励11",
                "cate": "rank",
                "total_num": 1000,
                "receive_num": 1,
                "activity_id": 1,
                "icon": {
                    "mime": "image/jpeg",
                    "width": 720,
                    "height": 1280,
                    "filename": "20190808104048749.jpg"
                },
                "created_at": "2019-10-15 14:07:35",
                "updated_at": "2019-10-16 11:31:50",
                "attr_name": "大额CT",/*奖励属性名称*/
                "curr_rank": 1,/*当前排行*/
                "status": 0
            }
        ]
    }
}
```

## 参与活动

**方式**

`post`

**路径**

`/api/activities/:id/`

**响应**

`Status code 200`

```json
{
    "msg": "参与成功",
    "code": 0,
    "data": null,
}
```

## 邀请排行榜

**方式**

`get`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| limit | int |  是  | 条目数, 默认5 |
| limit | int |  是  | 偏移量 |

**路径**

`/api/activities/:id/rank`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "list": [
            {
                "user_id": 4,/*用户ID*/
                "avatar": null,/*头像*/
                "name": "11",/*名称*/
                "effective_num": 6,/*有效数*/
                "rank": 1/*名次*/
            }
        ],
        "self": {
            "user_id": 4,
            "name": "11",
            "avatar": null,
            "effective_num": 6,
            "rank": 1
        }
    }
}
```

## 领取奖励

**方式**

`post`

**路径**

`/api/activities/:id/awards/:aid`

**响应**

`Status code 200`

```json
{
    "msg": "50CT",/*领取成功使用，msg是奖励的奖品*/
    "code": 0,
    "data": null
}
```

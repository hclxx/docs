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
        "is_participate": true,/*是否参与*/
        "awards": [
            {
                "id": 1,
                "attr": "yjsq",/*奖励类型:yjsq-一键收取 ct-矿石*/
                "title": "奖励11",/*奖励标题*/
                "cate": "num",/*奖励分类: num-邀请数奖励,rank-排行奖励*/
                "total_num": 1000,
                "receive_num": 1,
                "activity_id": 1,
                "icon": {
                    "mime": "image/jpeg",
                    "width": 720,
                    "height": 1280,
                    "filename": "20190808104048749.jpg"
                },
                "condition": [
                    {
                        "num": 5,/*邀请数*/
                        "month": 1/*奖励个月数*/
                    },
                    {
                        "num": 10,/*邀请数*/
                        "month": 3/*奖励个月数*/
                    },
                    {
                        "num": 20,/*邀请数*/
                        "month": 6/*奖励个月数*/
                    }
                ],
                "created_at": "2019-10-15 11:57:59",
                "updated_at": "2019-10-15 16:15:58"
            },
            {
                "id": 3,
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
                "condition": {
                    "valid_num": 5,
                    "partin_rule": [
                        {
                            "num": 10000,
                            "rank": "1",
                            "type": "ranking"
                        },
                        {
                            "num": 5000,
                            "rank": "2",
                            "type": "ranking"
                        },
                        {
                            "num": 3000,
                            "rank": "3",
                            "type": "ranking"
                        },
                        {
                            "num": 1000,
                            "rank": "4,10",
                            "type": "ranking:scope"
                        }
                    ]
                },
                "created_at": "2019-10-15 14:07:35",
                "updated_at": "2019-10-15 16:31:54"
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

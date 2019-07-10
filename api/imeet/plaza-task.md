# 广场任务

## 广场任务分类列表

**方式**

`GET`

**路径**

`/api/plaza/task/cate`

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
            "id": 1, /*广场任务分类id*/
            "name": "注册下载",/*广场任务分类名称*/
            "icon": ""
        },
        {
            "id": 2,
            "name": "关注点赞",
            "icon": ""
        },
        {
            "id": 3,
            "name": "问卷调查",
            "icon": ""
        },
        {
            "id": 4,
            "name": "阅读任务",
            "icon": ""
        },
        {
            "id": 5,
            "name": "内容分享",
            "icon": ""
        },
        {
            "id": 6,
            "name": "答题任务",
            "icon": ""
        },
        {
            "id": 7,
            "name": "其他任务",
            "icon": ""
        }
    ]
}
```

## 分类下的任务列表

**方式**

`GET`

**路径**

`/api/plaza/task`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|  cate_id   |   int  |  是  |                   广场任务分类id                                 |
|  order_by  | string |  是  | 排序字段 created_at-发布时间 end_time-结束时间 unit_price-任务单价 |
| sort_order | string |  是  |               字段排序方式 desc-降序 asc-升序                     |
|    limit   |   int  |  否  |                       当页取出的数量                             |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 6,/*任务id*/                     
            "name": "this is third task", /*任务名称*/                  
            "icon": "123", /*任务图标*/                                
            "unit_price": 2, /*任务单价*/                           
            "residue_times": 100,/* 任务剩余可完成次数*/                          
            "created_at": "2019-06-17 10:18:06",/*任务发布时间*/            
            "end_time": "2019-07-01 14:19:35",/*任务结束时间*/              
            "limit_expire": 72,/*任务完成期限*/   
            "status":1, /*任务状态：1-进行中 2-已结束 3-已退款*/                           
            "get_status": 1 /*当前用户领取任务状态 1-已领取 2-未领取 3-已结束*/    
        },
        {
            "id": 8,
            "name": "this is third task",
            "icon": "123",
            "unit_price": 2,
            "residue_times": 100,  
            "created_at": "2019-06-19 03:12:54",
            "end_time": "2019-07-01 14:19:35",
            "limit_expire": 72,
            "status":1,
            "get_status": 2
        }
    ]
}
```

## 任务详情

**方式**

`GET`

**路径**

`/api/plaza/task/{id}`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 6,/*任务id*/                                
        "name": "this is third task", /*任务名称*/               
        "icon": "123",/*任务图标*/         
        "unit_price": 2,/*任务单价*/ 
        "end_time": "2019-07-01 14:19:35",/*任务结束时间*/
        "limit_times": 1,/*每人可做次数*/
        "limit_expire": 72,/*任务完成期限*/
        "limit_check_time": 72,/*任务完成后的审核时间*/ 
        "residue_times": 2,/*任务剩余次数*/
        "audit_time": 0,/*自动审核时长(s)*/
        "describe": {/*任务描述*/ 
            "text": "任务描述", /*任务描述内容*/
            "images": [/*任务描述图片*/
                {
                    "mime": "jpg",/*图片类型*/
                    "width": 200,/*图片宽度*/
                    "height": 100, /*图片高度*/ 
                    "filename": "filename1"/*图片名称*/ 
                },
                {
                    "mime": "png",
                    "width": 250,
                    "height": 150,
                    "filename": "filename2"
                }
            ]
        },
        "link": {/*任务链接*/ 
            "link_url": "http://www.baidu.com", /*任务链接*/
            "link_name": "跳转链接"/*任务链接名称*/
        },
        "require": {/*任务要求*/
            "text": "任务要求",/*任务要求内容*/
            "images": [/*任务要求图片*/ 
                {
                    "mime": "jpg",
                    "width": 200,
                    "height": 100,
                    "filename": "filename1"
                },
                {
                    "mime": "png",
                    "width": 250,
                    "height": 150,
                    "filename": "filename2"
                }
            ]
        },
        "status": 1,/*任务进行状态：1-进行中 2-已结束 3-已退款*/
        "get_status": 1, /*任务领取状态：1-已领取 2-未领取 3-已结束 4-审核中 5-已完成 6-已驳回*/   
        "submit_logs": [/*任务提交记录*/ 
            {
                "id": 11,/*任务提交记录id*/ 
                "task_id": 6,/*任务id */ 
                "user_id": 1,/*用户id*/
                "user": {
                    "id": 1,                              
                    "name": "yanfan",/*用户名称*/
                    "avatar": null /*用户头像*/
                }
            },
            {
                "id": 10,
                "task_id": 6,
                "user_id": 2,
                "user": {
                    "id": 2,
                    "name": "sons",
                    "avatar": null
                }
            }
        ],
        "submit_count": 2,/*用户提交总数*/
        "category": {/*任务分类*/
                    "id": 1,
                    "name": "注册下载",
                    "audit_way": 2 /*任务审核方式：1-手动审核 2-自动审核*/
                }
    }
}
```


## 领取任务

**方式**

`POST`

**路径**

`/api/plaza/task/{id}`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": null
}
```

## 投诉任务

**方式**

`PUT`

**路径**

`/api/plaza/task/{id}/report`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|  content   |   string  |  是  |                  投诉内容               |


**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": null
}
```


## 我的任务

**方式**

`GET`

**路径**

`/api/plaza/task/owner`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|     type   |   int  |  是  |                   1-待完成 2-已完成(提交)                                |
|    status  |   int  |  否  |    当type=2时候需传该字段  提交审核状态：0-审核中 1-已完成 2-已驳回          |
|    cate_id |   int  |  否  |          广场分类id     |
|    end_time |   string  |  否  |    desc 降序 asc 升序          |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1, /*任务id*/
            "name": "修改广场任务名字11",/*任务名称*/
            "icon": "1",/*任务图标*/
            "unit_price": 10,/*任务单次价格*/
            "residue_times": 50,/*任务剩余次数*/
            "created_at": "2019-06-06 03:58:47",/*任务发布时间*/
            "end_time": "2019-07-07 12:00:00",/*任务结束时间*/
            "limit_expire": 2,/*任务完成期限*/
            "status": 1,/*1为进行中 其余状态均显示已结束*/
        },
        {
            "id": 5,
            "name": "第一个任务",
            "icon": "1",
            "unit_price": 5,
            "residue_times": 50,
            "created_at": "2019-06-06 08:55:20",
            "end_time": "2019-07-07 12:00:00",
            "limit_expire": 2
        }
    ]
}
```


## 任务统计列表

**方式**

`GET`

**路径**

`/api/plaza/task/statistic`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|     role   |     string    |  是  |     comm-社区统计 group-群主统计        |
|    status  |      int      |  是  |     任务状态：1-进行中 2-已结束          |
|   cate_id  |      int      |  否  |              任务分类id                 |
|    end_time |   string  |  否  |    desc 降序 asc 升序          |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*任务id*/
            "name": "修改广场任务名字11",/*任务名称*/
            "icon": "1", /*任务图标*/
            "unit_price": 10, /*任务单次价格*/
            "residue_times": 50,/*任务剩余次数*/
            "end_time": "2019-07-07 12:00:00",/*任务结束时间*/
            "created_at": "2019-06-06 03:58:47",/*任务发布时间*/
            "limit_expire": 2,/*任务完成期限*/
            "submit_time": "2019-06-06 15:44:28",/*任务提交时间*/
            "audit_time": "2019-06-19 09:44:34"/*任务审核时间*/
        }
    ]
}
```


## 任务统计详情

**方式**

`GET`

**路径**

`/api/plaza/task/{id}/statistic`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|     role   |     string    |  是  |     comm-社区统计 group-群主统计        |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data":{
            "id": 1, /*任务id*/
            "name": "修改广场任务名字11",/*任务名称*/
            "icon": "1",/*任务图标*/
            "unit_price": 10,  /*任务单次价格*/
            "residue_times": 50,/*任务剩余次数*/
            "end_time": "2019-07-07 12:00:00",/*任务结束时间*/
            "created_at": "2019-06-06 03:58:47", /*任务发布时间*/
            "limit_expire": 2, /*任务完成期限*/
            /*当role = comm时 groups数据格式*/
            "groups": [
                {
                    "id": 7, /*社群id*/
                    "name": "社群3",/*社群名称*/
                    "avatar": "333",/*社群头像*/
                    "member_count": 22,/* 社群总成员数*/
                    "count": 1 /*社群完成任务次数*/
                },
                {
                    "id": 2,
                    "name": "社群1",
                    "avatar": "222",
                    "member_count": 22,
                    "count": 0
                }
            ],
            /*当role = group时 groups数据格式*/
            "groups": [
                {
                    "id": 2, /*社群id*/ 
                    "name": "社群1",/*社群名称*/
                    "avatar": "222", /*社群头像*/
                    "member_count": 22,/*社群总成员数*/
                    "count": 0, /*社群完成任务次数*/
                    "user": [
                        {
                            "id": 2,/*用户id*/
                            "name": "sons",/*用户名称*/
                            "avatar": null /*用户头像*/
                        }
                    ]
                }
             ]
        }
}
```


## 获取用户角色

**方式**

`GET`

**路径**

`/api/plaza/task/user/role`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "role": "comm"/*comm-社区拥有者  group-群主  user-普通用户*/
    }
}
```


## 获取完成任务的用户

**方式**

`GET`

**路径**

`/api/plaza/task/{id}/finish/user`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|     group_id   |     int    |  是  |     社群id        |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        { 
            "id": 2,/*用户id*/
            "name": "sons",/*用户名称*/
            "avatar": null,/*用户头像*/
            "role": 1 /*用户角色  0-普通成员 1-管理员 2-群主*/
        }
    ]
}
```


## 获取任务下我的社群

**方式**

`GET`

**路径**

`/api/plaza/task/{id}/group`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 7,/* 社群id*/
            "name": "社群3"/*社群名称*/
        }
    ]
}
```

## 提交任务

**方式**

`POST`

**路径**

`/api/plaza/task/{id}/submit`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
|     group_id   |     int    |  是  |     社群id                              |
|      remark    |   string   |  否  |     备注说明                            |
|       type     |     int    |  是  |     提交方式 1-手动提交  2-自动审核       |
|       data     |   array    |  否  |     当type=1时为必传                    |      


```json
{
  "data": [
        {
            "mime": "png",/*文件mimetype*/
            "width": 100,/*图片宽度*/
            "height": 200,/*图片高度*/
            "filename": "xxxxx.png"/*文件名*/
        },
        {
            "mime": "png",/*文件mimetype*/
            "width": 100,/*图片宽度*/
            "height": 200,/*图片高度*/
            "filename": "xxxxx.png"/*文件名*/
        }
        ]
}
```

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": ""
}
```



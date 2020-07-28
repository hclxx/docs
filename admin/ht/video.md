# 视频管理

## 视频列表

#### 接口URL
> {{url}}/videos

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 选填 | 用户名查询 |
| topic     | bb | 选填 | 话题查询 |
| status     | 1 | 选填 | 审核状态:0-待审核 1-审核通过 2-审核不通过 |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "intro": "这是描述",/*视频描述*/
                "url": "http://www.baidu.com",/*视频地址*/
                "cover": "4.jpg",/*封面地址*/
                "width": "1080",/*视频宽度*/
                "height": "1080",/*视频宽度*/
                "reward_num": 0,/*打赏数*/
                "praise_num": 0,/*获赞数*/
                "comment_num": 0,/*评论数*/
                "download_num": 0,/*下载数*/
                "topics": "低调,隐忍",/*话题:多个使用半角‘,’分割*/
                "is_delete": 0,
                "status": 1,/*审核状态:0-待审核 1-审核通过*/
                "created_at": "2020-06-11 14:59:31",
                "updated_at": "2020-06-11 14:59:31",
                "user": {
                    "id": 1,
                    "name": "yanfan1111",
                    "avatar": null
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/videos?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/videos?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/videos",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 发布视频

#### 接口URL
> {{url}}/videos

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| user_id     | 1|  必填 | 用户id |
| intro     | 视频简介 |  必填 | 视频简介 |
| url     | 4.MP4 |  必填 | 视频地址 |
| cover     | 3.jpg |  必填 | 封面地址 |
| width     | 1080 |  必填 | 封面宽度 |
| height     | 1080 |  必填 | 封面高度 |
| topics     | 低调,aaa |  必填 | 话题:多个使用半角‘,’分割 |
| status     | 1 |  必填 | 审核状态:0-待审核 1-审核通过 |

#### 成功响应示例
```json
{
	"msg": "创建成功",
	"code": 0,
	"data": null
}
```


## 修改视频

#### 接口URL
> {{url}}/videos/{video}

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| user_id     | 1|  选填 | 用户id |
| intro     | 视频简介 |  选填 | 视频简介 |
| url     | 4.MP4 |  选填 | 视频地址 |
| cover     | 3.jpg |  选填 | 封面地址 |
| width     | 1080 |  选填 | 封面宽度 |
| height     | 1080 |  选填 | 封面高度 |
| topics     | 低调,aaa |  选填 | 话题:多个使用半角‘,’分割 |
| status     | 1 |  选填 | 审核状态:0-待审核 1-审核通过 |
| praise_num     | 100 |  选填 | 视频点赞数 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```


## 删除视频

#### 接口URL
> {{url}}/videos/{video}

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 成功响应示例
```json
{
	"msg": "删除成功",
	"code": 0,
	"data": null
}
```

## 批量审核视频

#### 接口URL
> {{url}}/videos/batch/review

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| ids     | [1,2]|  选填 | 视频ids 数组 |
| status     | 1 |  选填 | 审核状态:0-待审核 1-审核通过 2-审核不通过 |


#### 成功响应示例
```json
{
	"msg": "操作成功",
	"code": 0,
	"data": null
}
```

## 评论列表

#### 接口URL
> {{url}}/videos/{video}/comments

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 2,
                "content": "视频不好看",/*评论内容*/
                "user_id": 2,
                "video_id": 1,
                "praise_num": 0,/*获赞数*/
                "reply_num": 0,/*回复数*/
                "created_at": "2020-06-11 15:26:17",
                "replies": [/*回复信息*/
                    {
                        "id": 1,
                        "content": "你不管",/*回复内容*/
                        "user_id": 1,
                        "target_user_id": "2",
                        "comment_id": 2,
                        "praise_num": 0,/*获赞数*/
                        "created_at": "2020-06-11 15:28:04",
                        "user": {/*回复人信息*/
                            "id": 1,
                            "name": "yanfan1111",
                            "avatar": null,
                            "gender": 1
                        }
                    }
                ],
                "user": {/*评论人信息*/
                    "id": 2,
                    "name": "yanfan2222",
                    "avatar": null,
                    "gender": 1
                }
            },
            {
                "id": 1,
                "content": "视频真好看",
                "user_id": 1,
                "video_id": 1,
                "praise_num": 0,
                "reply_num": 0,
                "created_at": "2020-06-11 15:25:57",
                "replies": [],
                "user": {
                    "id": 1,
                    "name": "yanfan1111",
                    "avatar": null,
                    "gender": 1
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/videos/1/comments?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/videos/1/comments?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/videos/1/comments",
        "per_page": 20,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```

## 删除评论

#### 接口URL
> {{url}}/videos/{video}/comments/{comment}

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 成功响应示例
```json
{
	"msg": "删除成功",
	"code": 0,
	"data": null
}
```


## 回复列表

#### 接口URL
> {{url}}/videos/{video}/comments/{comment}/replies

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "user_id": 1,/*回复用户id*/
                "target_user_id": "2",/*被回复用户id*/
                "comment_id": 2,/*评论id*/
                "content": "你不管",/*回复内容*/
                "praise_num": 0,/*获赞数*/
                "created_at": "2020-06-11 15:28:04",
                "user": {/*回复用户信息*/
                    "id": 1,
                    "name": "yanfan1111",
                    "avatar": null,
                    "gender": 1
                },
                 "target_user": {/*被回复用户信息*/
                    "id": 2,
                    "name": "yanfan2222",
                    "avatar": null,
                    "gender": 1
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/videos/1/comments/2/replies?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/videos/1/comments/2/replies?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/videos/1/comments/2/replies",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 删除回复

#### 接口URL
> {{url}}/videos/{video}/comments/{comment}/replies/{reply}

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 成功响应示例
```json
{
	"msg": "删除成功",
	"code": 0,
	"data": null
}
```

# 话题管理

## 话题列表

#### 接口URL
> {{url}}/topics

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 选填 | 话题名称查询 |
| hot     | 1 | 选填 | 热门:0-否/1-是 |
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
                "name": "低调",/*话题名称*/
                "count": "0",/*使用量*/
                "sort": 1,/*排序*/
                "hot": 0,/*热门:0-否/1-是*/
                "created_at": "2020-06-11 15:50:55",
                "updated_at": "2020-06-11 15:50:55"
            }
        ],
        "first_page_url": "http://ht.test/admin/topics?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/topics?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/topics",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 创建话题

#### 接口URL
> {{url}}/topics

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 必填 | 话题名称 |
| hot     | 1 | 必填 | 热门:0-否/1-是 |
| sort     | 10 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "创建成功",
	"code": 0,
	"data": null
}
```


## 修改话题

#### 接口URL
> {{url}}/topics/{topic}

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 选填 | 话题名称 |
| hot     | 1 | 选填 | 热门:0-否/1-是 |
| sort     | 10 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```


## 删除话题

#### 接口URL
> {{url}}/topics/{topic}

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

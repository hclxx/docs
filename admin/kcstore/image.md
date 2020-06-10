# 分享海报

## 分享海报列表

#### 接口URL
> {{url}}/poster

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 11 | 选填 | 海报名称(支持模糊查询) |
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
				"name": "分享图名称1",
				"url": "http://www.baidu.com",
				"sort": 2,
				"created_at": "2020-05-18 02:05:06",
				"updated_at": "2020-05-18 02:05:06"
			},
			{
				"id": 1,
				"name": "分享图名称",
				"url": "http://www.baidu.com",
				"sort": 1,
				"created_at": "2020-05-18 02:04:30",
				"updated_at": "2020-05-18 02:04:30"
			}
		],
		"first_page_url": "http://kcstore.test/admin/poster?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/poster?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/poster",
		"per_page": 15,
		"prev_page_url": null,
		"to": 2,
		"total": 2
	}
}
```



## 创建海报

#### 接口URL
> {{url}}/poster

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 分享图名称1 |  必填 | 分享图名称 |
| url     | http://www.baidu.com |  必填 | 分享图链接地址 |
| sort     | 2 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "创建海报成功",
	"code": 0,
	"data": null
}
```



## 删除海报

#### 接口URL
> {{url}}/poster/2

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "删除海报成功",
	"code": 0,
	"data": null
}
```



## 修改海报

#### 接口URL
> {{url}}/poster/1

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 海报 |  选填 | 海报名称 |
| url     | http://www.sina.com |  选填 | 海报链接地址 |
| sort     | 1 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "修改海报成功",
	"code": 0,
	"data": null
}
```
# 广告模块

## 广告列表

#### 接口URL
> {{url}}/ads

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| pos     | app:plaza:top | 选填 | 广告位搜索(从广告位列表去获取name) |
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
				"pos_id": 1,/*广告位id*/
				"image": "aueyj6sw1.jpg",/*广告图片*/
				"url": "http://",/*跳转url链接*/
				"url_type": 1,/*跳转类型:0-静态 1-外部 2-内部*/
				"sort": 1,/*排序*/
				"created_at": "2020-05-18 16:32:45",
				"updated_at": "2020-05-18 16:32:45",
				"pos": {
					"id": 1,
					"name": "APP-广场广告",/*广告位名称*/
					"alias": "app:plaza:top",/*广告位标识*/
					"size": "702px * 320px",/*广告位尺寸大小*/
					"created_at": "2020-05-18 16:25:08",
					"updated_at": "2020-05-18 16:25:08"
				}
			}
		],
		"first_page_url": "http://kcstore.test/admin/ads?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/ads?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/ads",
		"per_page": 15,
		"prev_page_url": null,
		"to": 1,
		"total": 1
	}
}
```



## 广告位列表

#### 接口URL
> {{url}}/ads/pos

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
			"name": "APP-广场广告",/*广告位名称*/
			"alias": "app:plaza:top",/*广告位标识*/
			"size": "702px * 320px",/*广告位尺寸*/
			"created_at": "2020-05-18 16:25:08",
			"updated_at": "2020-05-18 16:25:08"
		},
		{
			"id": 2,
			"name": "APP-推荐广告",
			"alias": "app:recommend:top",
			"size": "702px * 320px",
			"created_at": "2020-05-18 16:25:08",
			"updated_at": "2020-05-18 16:25:08"
		},
		{
			"id": 3,
			"name": "APP-广场任务广告",
			"alias": "app:plaza:task:top",
			"size": "702px * 320px",
			"created_at": "2020-05-18 16:25:08",
			"updated_at": "2020-05-18 16:25:08"
		},
		{
			"id": 4,
			"name": "APP-星球顶部广告",
			"alias": "app:star:top",
			"size": "702px * 320px",
			"created_at": "2020-05-18 16:25:08",
			"updated_at": "2020-05-18 16:25:08"
		},
		{
			"id": 5,
			"name": "APP-启动页广告",
			"alias": "app:start",
			"size": "702px * 320px",
			"created_at": "2020-05-18 16:25:08",
			"updated_at": "2020-05-18 16:25:08"
		}
	]
}
```



## 创建广告

#### 接口URL
> {{url}}/ads

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| pos_id     | 1 |  必填 | 广告位id |
| image     | aueyj6sw1.jpg |  必填 | 广告图 |
| url     | http:// |  选填 | 跳转链接(当url_type=1/2时必填) |
| url_type     | 1 |  必填 | 跳转类型:0-静态 1-外部 2-内部 |
| sort     | 1 |  必填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "创建广告成功",
	"code": 0,
	"data": null
}
```



## 修改广告

#### 接口URL
> {{url}}/ads/2

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| pos_id     | 1 |  选填 | 广告位id |
| image     | aueyj6sw1.jpg |  选填 | 广告图 |
| url     | http:// |  选填 | 跳转链接(当url_type=1/2时必填) |
| url_type     | 0 |  选填 | 跳转类型:0-静态 1-外部 2-内部 |
| sort     | 1 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "修改广告成功",
	"code": 0,
	"data": null
}
```



## 删除接口

#### 接口URL
> {{url}}/ads/2

#### 请求方式
> DELETE


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "删除广告成功",
	"code": 0,
	"data": null
}
```
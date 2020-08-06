# 管理员管理

## 管理员登录

#### 接口URL
> {{url}}/login

#### 请求方式
> POST

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| email     | root@qq.com |  必填 | 登录账号 |
| password     | 111111 |  必填 | 登录密码 |

#### 成功响应示例
```json
{
	"msg": "登录成功",
	"code": 0,
	"data": {
		"id": 2,
		"name": "张三",
		"phone": "18781601112",
		"email": "1112@qq.com",
		"admin_token": "f16af05d99baf1ba10f21c60505cc843", // 登录token    
		"state": 0,
		"created_at": "2020-05-15 08:39:34",
		"updated_at": "2020-05-21 16:02:14",
		"domain": "http://file.chainonedapp.com",    //  文件域名
		"token": "123233" /*上传文件token*/
	}
}
```


## 退出登录

#### 接口URL
> {{url}}/logout

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | 管理员token |


#### 成功响应示例
```json
{
	"msg": "退出登录成功",
	"code": 0,
	"data": null
}
```

## 管理员列表

#### 接口URL
> {{url}}/admins?name=11&phone=11&email=11&state=1&page=1&limit=20

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 11 | 选填 | 名称(支持模糊搜索) |
| phone     | 11 | 选填 | 电话(支持模糊搜索) |
| email     | 11 | 选填 | 邮箱(支持模糊搜索) |
| state     | 1 | 选填 | 状态 0: 正常 1: 禁用 |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | 管理员token |


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
				"name": "超级管理员",
				"phone": "13111111111",
				"email": "root@qq.com",
				"admin_token": "95566da2560d580acde3dfb87dd7e9b5",
				"state": 0,
				"created_at": "2020-05-15 07:43:08",
				"updated_at": "2020-05-15 08:13:36"
			}
		],
		"first_page_url": "http://kcstore.test/admin/admins?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/admins?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/admins",
		"per_page": 15,
		"prev_page_url": null,
		"to": 1,
		"total": 1
	}
}
```



## 新建管理员

#### 接口URL
> {{url}}/admins

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | admin1 |  必填 | 名称 |
| phone     | 18781601111 |  必填 | 手机号 |
| email     | 1111@qq.com |  必填 | 邮箱 |
| state     | 0 |  必填 | 状态 0: 正常 1: 禁用 |
| password     | 123456 |  必填 | 密码 长度 6-16 |

#### 成功响应示例
```json
{
	"msg": "创建管理员成功",
	"code": 0,
	"data": null
}
```

## 修改管理员

#### 接口URL
> {{url}}/admins/2

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 张三 |  选填 | 名称 |
| phone     | 18781601112 |  选填 | 手机号 |
| email     | 1112@qq.com |  选填 | 邮箱 |
| password     | 111111 |  选填 | 密码 长度 6-16 |
| state     | 1 |  必填 | 状态 0: 正常 1: 禁用 |
| roles[]     | 1 |  选填 | 角色（数组格式） |

#### 成功响应示例
```json
{
	"msg": "修改管理员成功",
	"code": 0,
	"data": null
}
```

## 删除管理员

#### 接口URL
> {{url}}/admins/3

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "删除管理员成功",
	"code": 0,
	"data": null
}
```

## 管理员详情

#### 接口URL
> {{url}}/admins/2

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
	"data": {
		"id": 2,
		"name": "张三",
		"phone": "18781601112",
		"email": "1112@qq.com",
		"admin_token": null,
		"state": 1,
		"created_at": "2020-05-15 08:39:34",
		"updated_at": "2020-05-15 08:46:58",
		"roles": [
			{
				"id": 1,
				"name": "超级管理员",
				"alias": "superadmin"
			}
		]
	}
}
```
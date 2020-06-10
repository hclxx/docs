# 商家登录

## 商家登录

#### 接口URL
> {{url}}/login

#### 请求方式
> POST

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| phone     | 18781602222 |  必填 | 登录账号 |
| password     | 123456 |  必填 | 密码 |

#### 成功响应示例
```json
{
	"msg": "登录成功",
	"code": 0,
	"data": {
		"id": 1,
		"name": "一号商家",/*名称*/
		"phone": "18781601111",/*电话*/
		"avatar": "123.jpg",/*头像*/
		"intro": "这是商户介绍",/*介绍*/
		"status": "0",
		"sort": 1,
		"merchant_token": "03a82cf9d0a6d9272282e8b738fbe5b9",/*登录token*/
		"area_code": "",
		"created_at": "2020-05-19 16:03:22",
		"updated_at": "2020-05-25 17:56:00",
		"domain": "http://file.chainonedapp.com",/*七牛域名*/
		"consignee": true/*商家是否填写了退货地址  如果为false 则不允许进行任何操作，只能填写地址后才能进行后续操作*/
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
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "登录成功",
	"code": 0,
	"data": {
		"id": 1,
		"name": "一号商家",/*名称*/
		"phone": "18781601111",/*电话*/
		"avatar": "123.jpg",/*头像*/
		"intro": "这是商户介绍",/*介绍*/
		"status": "0",
		"sort": 1,
		"merchant_token": "03a82cf9d0a6d9272282e8b738fbe5b9",/*登录token*/
		"area_code": "",
		"created_at": "2020-05-19 16:03:22",
		"updated_at": "2020-05-25 17:56:00",
		"domain": "http://file.chainonedapp.com"/*七牛域名*/
	}
}
```



## 修改账号信息

#### 接口URL
> {{url}}

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 修改商家1号 |  选填 | 名称 |
| password     | 111111 |  选填 | 密码 |
| phone     | 18781601111 |  选填 | 电话 |
| avatar     | 123.jpg |  选填 | 头像 |
| intro     | aaaa |  必填 | 简介 |

#### 成功响应示例
```json
{
	"msg": "修改信息成功",
	"code": 0,
	"data": null
}
```
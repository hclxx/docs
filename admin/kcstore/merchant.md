# 商户模块

## 商家列表

#### 接口URL
> {{url}}/merchants

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 选填 | 商户昵称(支持模糊搜索) |
| phone     | 1878111111 | 选填 | 商户手机号 |
| page     | 1 | 必填 | 当前页数 |
| limit     | - | 必填 | 每页条数 |


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
				"name": "一号商家",/*昵称*/
				"phone": "18781601111",/*电话*/
				"avatar": "123.jpg",/*头像*/
				"intro": "这是商户介绍",/*介绍*/
				"password": "$2y$10$OwbNVszSPyK5TEZHuErNDu9wg5W0mZ/HktEqW67TKmnbTnpYLv0ry",
				"pay_password": null,
				"status": "1",/*0-正常 1-禁用*/
				"sort": 1,/*排序*/
				"merchant_token": null,
				"area_code":"110000000000",/*区域码*/
				"area": "北京,东城,东华门",/*区域名称*/
				"created_at": "2020-05-19 16:03:22",
				"updated_at": "2020-05-19 16:03:22"
			}
		],
		"first_page_url": "http://kcstore.test/admin/merchants?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/merchants?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/merchants",
		"per_page": 20,
		"prev_page_url": null,
		"to": 1,
		"total": 1
	}
}
```



## 创建商户

#### 接口URL
> {{url}}/merchants

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 一号商家 |  必填 | 商户昵称 |
| phone     | 18781601111 |  必填 | 商户电话号码 |
| avatar     | 123.jpg |  必填 | 商户头像 |
| intro     | 这是商户介绍 |  必填 | 商户介绍 |
| password     | 123456 |  必填 | 商户密码 |
| status     | 1 |  必填 | 0-正常 1-禁用 |
| sort     | 1 |  必填 | 排序 |
| area_code     | 110101001000 |  必填 | 区域码 |

#### 成功响应示例
```json
{
	"msg": "创建商户成功",
	"code": 0,
	"data": null
}
```



## 修改商户

#### 接口URL
> {{url}}/merchants/1

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 一号商家 |  选填 | 商户昵称 |
| phone     | 18781601111 |  选填 | 商户电话号码 |
| avatar     | 123.jpg |  选填 | 商户头像 |
| intro     | 这是商户介绍 |  选填 | 商户介绍 |
| password     | 123456 |  选填 | 商户密码 |
| status     | 1 |  选填 | 0-正常 1-禁用 |
| sort     | 1 |  选填 | 排序 |
| area_code     | aa |  选填 | 区域码 |

#### 成功响应示例
```json
{
	"msg": "修改商户成功",
	"code": 0,
	"data": null
}
```

## 钱包流水列表

#### 接口URL
> {{url}}/wallets/merchants/1/logs

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| start     | 2020-05-20 00:00:00 | 选填 | 开始时间 |
| end     | 2020-05-21 00:00:00 | 选填 | 结束时间 |
| action     | 1 | 选填 | 1-支出2-收入 |
| currency     | cny | 选填 | sccb-矿石 cny-现金 |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "title": "销售提成奖励" /*流水标题*/,
      "user_id": 2,
      "amount": "0.32" /*金额*/,
      "target_user_id": 0,
      "type": "order" /*流水类型*/,
      "target_id": 8,
      "action": 1 /*收入动作: 1-收入 2-支出*/,
      "currency": "cny"/*cl-矿石 cny-现金*/,
      "status": 0 /*收入状态: 0-待入帐 1-完成 2-失败*/,
      "created_at": "2020-01-15 12:31:29",
      "updated_at": "2020-01-15 12:31:29"
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/tbk/wallet/logs",
  "per_page": 20,
  "prev_page_url": null,
  "to": 6,
  "total": 6
}
```



## 钱包详情

#### 接口URL
> {{url}}/wallets/merchants/1

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
		"cny": {
			"id": 1,
			"merchant_id": 1,
			"balance": "0.0000",    //  可用余额
			"income": "0.0000",     //  总收入
			"expend": "0.0000",     //  总支出
			"wait": "0.0000",       //  待入账
			"currency": "cny"       //  sccb-矿石 cny-现金
		},
		"sccb": {
			"id": 2,
			"merchant_id": 1,
			"balance": "0.0000",
			"income": "0.0000",
			"expend": "0.0000",
			"wait": "0.0000",
			"currency": "sccb"
		}
	}
}
```
# 用户管理

## 用户列表

#### 接口URL
> {{url}}/users

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 选填 | 用户昵称(支持模糊查询) |
| phone     | 18781601111 | 选填 | 用户手机号 |
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
				"name": "张1",/*昵称*/
				"avatar": "123.jpg",/*头像*/
				"gender": 0,
				"phone": "18711111112",/*电话*/
				"code": "0CGLAT",/*邀请码*/
				"power": 30,/*能量值*/
				"collection_time": null,/*一键挖矿到期时间*/
				"permission": 0,/*权限等级:0-无任何权限1-查询被邀请者手机*/
				"area_code":"110000000000",/*区域码*/
				"created_at": "2020-05-19 17:57:05",
				"updated_at": "2020-05-19 17:57:05",
				"area": "北京,东城,东华门,黄图岗"/*用户区域信息*/
			},
			{
				"id": 1,
				"name": "张三",
				"avatar": "123.jpg",
				"gender": 0,
				"phone": "18711111111",
				"code": "0CGLAS",
				"power": 30,
				"collection_time": null,
				"permission": 0,
				"created_at": "2020-05-19 17:56:35",
				"updated_at": "2020-05-19 17:56:35",
				"area": "北京,东城,东华门,黄图岗"
			}
		],
		"first_page_url": "http://kcstore.test/admin/users?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/users?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/users",
		"per_page": 15,
		"prev_page_url": null,
		"to": 2,
		"total": 2
	}
}
```



## 创建用户

#### 接口URL
> {{url}}/users

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 张1 |  必填 | 用户昵称 |
| phone     | 18781601112 |  必填 | 用户手机号 |
| avatar     | 123.jpg |  选填 | 用户头像 |
| password     | 111111 |  必填 | 登录密码 |
| password_confirmation     | 111111 |  必填 | 确认密码 |
| area_code     | 111 |  选填 | 区域码 |

#### 成功响应示例
```json
{
	"msg": "创建成功",
	"code": 0,
	"data": null
}
```


## 修改用户

#### 接口URL
> {{url}}/users/2

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 张11 |  选填 | 用户昵称 |
| avatar     | 123.jpg |  选填 | 用户头像 |
| password     | 111111 |  选填 | 登录密码 |
| power     | 100 |  选填 | 能量值 |
| permission     | 1 |  选填 | 权限等级:0-无任何权限1-查询被邀请者手机 |
| area_code     | aa |  选填 | 区域码 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 查询父级user

#### 接口URL
> {{url}}/users/2/parent

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
        "id": 8,
        "name": "yanfan4",
        "phone": "18781601157",
        "avatar": null
    }
}
```



## 查询子集user

#### 接口URL
> {{url}}/users/2/subset

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
        "items": {
            "pid": 0,/*父级uid*/
            "pname": "",/*父级昵称*/
            "avatar": "",/*父级头像*/
            "child": [
                {
                    "id": 5,
                    "name": "yanfan1",
                    "phone": "18781601154",
                    "avatar": null,
                }
            ]
        },
        "count": 1,/*直接邀请人数*/
        "total_count": 5,/*团队人数*/
    }
}
```

## 钱包列表

#### 接口URL
> {{url}}/wallets/users/1/logs

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
> {{url}}/wallets/users/1

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
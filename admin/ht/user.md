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
| num     | 18781601111 | 选填 | 火推号查询 |
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
                "name": "yanfan1111",
                "avatar": null,
                "phone": "18781611111",
                "code": "0CGLAS",/*邀请码*/
                "number": "34821989",/*火推号*/
                "sign": "11",/*个性签名*/
                "gender": 1,/*用户性别:0-未知 1-男 2-女*/
                "fans_num": 0,/*粉丝数*/
                "follow_num": 0,/*关注数*/
                "praise_num": 0,/*获赞数*/
                "reward_num": 0,/*获赏数*/
                "invite_num": 0,/*邀请数*/
                "state": 0,/*状态:0-正常/1-禁用*/
                "created_at": "2020-06-11 11:49:48",
                "updated_at": "2020-06-11 11:49:48"
            }
        ],
        "first_page_url": "http://ht.test/admin/users?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/users?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/users",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
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
| sign     | 个性签名 |  选填 | 个性签名 |
| gender     | 0 |  必填 | 用户性别:0-未知 1-男 2-女 |

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
| sign     | 个性签名 |  选填 | 个性签名 |
| gender     | 0 |  选填 | 用户性别:0-未知 1-男 2-女 |
| state     | 0 |  选填 | 状态:0-正常/1-禁用 |

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
> {{url}}/users/1/wallet/logs

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| start     | 2020-05-20 00:00:00 | 选填 | 开始时间 |
| end     | 2020-05-21 00:00:00 | 选填 | 结束时间 |
| action     | 1 | 选填 | 1-支出2-收入 |
| currency     | hd | 选填 | dstt-矿石 hd-火豆 |
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
      "extend": null /*扩展字段*/,
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
> {{url}}/users/1/wallet

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
		"dstt": {
			"id": 1,
			"user_id": 1,
			"balance": "0.0000",    //  可用余额
			"currency": "dstt"       //  dstt-矿石 hd-火豆
		},
		"hd": {
			"id": 2,
			"user_id": 1,
			"balance": "0.0000",
			"currency": "hd"
		}
	}
}
```


## 粉丝列表

#### 接口URL
> {{url}}/users/1/fans

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
        "current_page": 1,
        "data": [
            {
                "id": 2,
                "user_id": 2,
                "target_id": 1,
                "target_type": "follow:user",
                "status": 1,
                "created_at": "2020-06-11 13:44:32",
                "updated_at": "2020-06-11 13:44:32",
                "user": {/*粉丝用户信息*/
                    "id": 2,
                    "name": "yanfan2222",
                    "avatar": null,
                    "number": "84197517"
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/users/1/fans?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/users/1/fans?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/users/1/fans",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 关注列表

#### 接口URL
> {{url}}/users/1/follows

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
        "current_page": 1,
        "data": [
            {
                "id": 2,
                "user_id": 2,
                "target_id": 1,
                "target_type": "follow:user",
                "status": 1,
                "created_at": "2020-06-11 13:44:32",
                "updated_at": "2020-06-11 13:44:32",
                "follow": {/*关注用户信息*/
                    "id": 1,
                    "name": "yanfan1111",
                    "avatar": null,
                    "number": "34821989"
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/users/2/follows?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/users/2/follows?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/users/2/follows",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
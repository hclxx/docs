# 用户管理

## 用户列表

#### 接口 URL

> {{url}}/users

#### 请求方式

> GET

#### 请求 Query 参数

| 参数    | 示例值      | 是否必填 | 参数描述               |
| :------ | :---------- | :------- | :--------------------- |
| name    | aa          | 选填     | 用户昵称(支持模糊查询) |
| phone   | 18781601111 | 选填     | 用户手机号             |
| page    | 1           | 必填     | 当前页数               |
| limit   | 20          | 必填     | 每页条数               |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

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
        "phone": "1878****111",
        "tel": "1878160111",
        "code": "0CGLAS" /*邀请码*/,
        "number": "34821989" /*火推号*/,
        "gender": 1 /*用户性别:0-未知 1-男 2-女*/,
        "state": 0 /*状态:0-正常/1-禁用*/,
        "withdraw_address": "0xfjsdklfgjdlk" /*提现地址*/,
        "is_delete": 0,
        "created_at": "2020-06-11 11:49:48",
        "updated_at": "2020-06-11 11:49:48"
      }
    ],
    "first_page_url": "cybtp://cyb.test/admin/users?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "cybtp://cyb.test/admin/users?page=1",
    "next_page_url": null,
    "path": "cybtp://cyb.test/admin/users",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 创建用户

#### 接口 URL

> {{url}}/users

#### 请求方式

> POST

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数                  | 示例值      | 是否必填 | 参数描述                  |
| :-------------------- | :---------- | :------- | :------------------------ |
| name                  | 张 1        | 必填     | 用户昵称                  |
| phone                 | 18781601112 | 必填     | 用户手机号                |
| avatar                | 123.jpg     | 选填     | 用户头像                  |
| password              | 111111      | 必填     | 登录密码                  |
| password_confirmation | 111111      | 必填     | 确认密码                  |
| gender                | 0           | 必填     | 用户性别:0-未知 1-男 2-女 |
| withdraw_address      | 0xfddfjksd  | 选填     | 提现地址                  |

#### 成功响应示例

```json
{
  "msg": "创建成功",
  "code": 0,
  "data": null
}
```

## 修改用户

#### 接口 URL

> {{url}}/users/2

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数                | 示例值     | 是否必填 | 参数描述                  |
| :------------------ | :--------- | :------- | :------------------------ |
| name                | 张 11      | 选填     | 用户昵称                  |
| avatar              | 123.jpg    | 选填     | 用户头像                  |
| password            | 111111     | 选填     | 登录密码                  |
| gender              | 0          | 选填     | 用户性别:0-未知 1-男 2-女 |
| state               | 0          | 选填     | 状态:0-正常/1-禁用        |
| withdraw_address    | 0xfddfjksd | 选填     | 提现地址                  |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 删除用户

#### 接口 URL

> {{url}}/users/2

#### 请求方式

> DELETE

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数 | 示例值 | 是否必填 | 参数描述 |
| :--- | :----- | :------- | :------- |


#### 成功响应示例

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

## 查询父级 user

#### 接口 URL

> {{url}}/users/2/parent

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

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

## 查询子集 user

#### 接口 URL

> {{url}}/users/2/subset

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "items": {
      "pid": 0 /*父级uid*/,
      "pname": "" /*父级昵称*/,
      "avatar": "" /*父级头像*/,
      "child": [
        {
          "id": 5,
          "name": "yanfan1",
          "phone": "18781601154",
          "avatar": null
        }
      ]
    },
    "count": 1 /*直接邀请人数*/,
    "total_count": 5 /*团队人数*/
  }
}
```

## 钱包列表

#### 接口 URL

> {{url}}/users/1/wallet/logs

#### 请求方式

> GET

#### 请求 Query 参数

| 参数     | 示例值              | 是否必填 | 参数描述          |
| :------- | :------------------ | :------- | :---------------- |
| start    | 2020-05-20 00:00:00 | 选填     | 开始时间          |
| end      | 2020-05-21 00:00:00 | 选填     | 结束时间          |
| action   | 1                   | 选填     | 1-支出 2-收入     |
| currency | hd                  | 选填     | dstt-矿石 hd-火豆 |
| page     | 1                   | 必填     | 当前页数          |
| limit    | 20                  | 必填     | 每页条数          |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

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
      "currency": "cd" /*cd-创豆 tg-糖果 usdt*/,
      "status": 0 /*收入状态: 0-待入帐 1-完成 2-失败*/,
      "extend": null /*扩展字段*/,
      "created_at": "2020-01-15 12:31:29",
      "updated_at": "2020-01-15 12:31:29"
    }
  ],
  "first_page_url": "cybtp://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "cybtp://comc-mall-amin.test/admin/tbk/wallet/logs?page=1",
  "next_page_url": null,
  "path": "cybtp://comc-mall-amin.test/admin/tbk/wallet/logs",
  "per_page": 20,
  "prev_page_url": null,
  "to": 6,
  "total": 6
}
```

## 钱包详情

#### 接口 URL

> {{url}}/users/1/wallet

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "usdt": {
      "id": 1,
      "user_id": 1,
      "balance": "0.0000", //  可用余额
      "currency": "usdt" //  cd-创豆 tg-糖果 usdt
    },
    "cd": {
      "id": 2,
      "user_id": 1,
      "balance": "0.0000",
      "currency": "cd"
    },
    "tg": {
      "id": 2,
      "user_id": 1,
      "balance": "0.0000",
      "currency": "tg"
    }
  }
}
```

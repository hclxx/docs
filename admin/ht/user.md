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
| num     | 18781601111 | 选填     | 火推号查询             |
| role_id | 1           | 选填     | 用户角色 id            |
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
        "phone": "18781611111",
        "code": "0CGLAS" /*邀请码*/,
        "number": "34821989" /*火推号*/,
        "sign": "11" /*个性签名*/,
        "gender": 1 /*用户性别:0-未知 1-男 2-女*/,
        "fans_num": 0 /*粉丝数*/,
        "follow_num": 0 /*关注数*/,
        "praise_num": 0 /*获赞数*/,
        "reward_num": 0 /*获赏数*/,
        "invite_num": 0 /*邀请数*/,
        "state": 0 /*状态:0-正常/1-禁用*/,
        "withdraw_address": "0xfjsdklfgjdlk" /*提现地址*/,
        "withdraw_address_qr": "aaa" /*提现二维码*/,
        "is_delete": 0,
        "role_id": 1,
        "created_at": "2020-06-11 11:49:48",
        "updated_at": "2020-06-11 11:49:48",
        "role": {
          /*角色信息*/
          "id": 1,
          "name": "游客11" /*名称*/,
          "icon": "123.jpg" /*图标*/
        }
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
| sign                  | 个性签名    | 选填     | 个性签名                  |
| gender                | 0           | 必填     | 用户性别:0-未知 1-男 2-女 |
| withdraw_address      | 0xfddfjksd  | 选填     | 提现地址                  |
| withdraw_address_qr   | 111         | 选填     | 提现二维码                |
| role_id               | 1           | 必填     | 用户身份 id               |

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
| sign                | 个性签名   | 选填     | 个性签名                  |
| gender              | 0          | 选填     | 用户性别:0-未知 1-男 2-女 |
| state               | 0          | 选填     | 状态:0-正常/1-禁用        |
| withdraw_address    | 0xfddfjksd | 选填     | 提现地址                  |
| withdraw_address_qr | 111        | 选填     | 提现二维码                |
| role_id             | 1          | 选填     | 用户身份 id               |

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
      "currency": "cny" /*cl-矿石 cny-现金*/,
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
    "dstt": {
      "id": 1,
      "user_id": 1,
      "balance": "0.0000", //  可用余额
      "currency": "dstt" //  dstt-矿石 hd-火豆
    },
    "hd": {
      "id": 2,
      "user_id": 1,
      "balance": "0.0000",
      "currency": "hd"
    },
    /*推荐奖励*/
    "invite_reward": {
      "user_id": 2,
      "available_num": "100.0000" /*推荐奖励可领取数量*/,
      "waiting_num": "0.0000" /*待领取数量*/,
      "receive_num": "0.0000" /*已领取数量*/,
      "release_num": "0.0000" /*已释放数量*/,
      "created_at": "2020-07-24 18:11:34",
      "updated_at": "2020-07-24 18:11:34"
    },
    /*新手奖励*/
    "novice_reward": {
      "user_id": 2,
      "amount": "20.00" /*单次领取奖励火豆金额*/,
      "total_num": 40 /*总数量*/,
      "receive_num": 0 /*领取数量*/,
      "valid_num": 0 /*失效数量*/,
      "status": 0,
      "created_at": "2020-07-24 18:11:34",
      "updated_at": "2020-07-24 18:11:34"
    }
  }
}
```

## 粉丝列表

#### 接口 URL

> {{url}}/users/1/fans

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
        "user": {
          /*粉丝用户信息*/
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

#### 接口 URL

> {{url}}/users/1/follows

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
        "follow": {
          /*关注用户信息*/
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

## 每日数据统计

#### 接口 URL

> {{url}}/admin/stats

#### 请求方式

> GET

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |
| page          | 1         | 必填     | 分页     |
| limit         | 1         | 必填     | 条目数   |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "data": {
      "current_page": 1,
      "data": [
        {
          "id": 1,
          "invite_reward_num": "0" /*今日推荐奖励数值*/,
          "novice_reward_num": "0" /*今日新手奖励数值*/,
          "exchange_dstt_num": "0" /*今日兑换DSTT总额统计*/,
          "exchange_hd_num": "0" /*今日兑换HD总额统计*/,
          "exchange_hd_dstt_num": "0" /*今日兑换HD DSTT花费*/,
          "exchange_dstt_hd_num": "0" /*今日兑换DSTT HD花费*/,
          "date": "2020-07-28" /*今日兑换DSTT HD花费*/,
          "created_at": "2020-07-28 17:14:17",
          "updated_at": "2020-07-28 17:14:17"
        }
      ],
      "first_page_url": "http://htapp.test/admin/stats?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://htapp.test/admin/stats?page=1",
      "next_page_url": null,
      "path": "http://htapp.test/admin/stats",
      "per_page": 10,
      "prev_page_url": null,
      "to": 1,
      "total": 1
    },
    "service": {
      "hd_service_fee": "529991" /*火豆总手续费*/
    }
  }
}
```

## 开启用户收款

#### 接口 URL

> {{url}}/admin/users/{id}/open-transfer

#### 请求方式

> POST

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

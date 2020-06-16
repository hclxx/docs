# 用户

## 用户登录

**方式**

`POST`

**路径**

`/api/user/login`

**参数**

|   名称   |  类型  | 必须 |            说明             |
| :------: | :----: | :--: | :-------------------------: |
|  phone   | string |  是  |           手机号            |
| password | string |  否  |  密码 如`type`为`pass`必须  |
|   code   | string |  否  | 验证码 如`type`为`code`必须 |
|   type   | string |  是  |   登录方式: `pass`,`code`   |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "token": "xxxxxxxxxx..."
  }
}
```

## 用户注册

**方式**

`POST`

**路径**

`/api/user/register`

**参数**

|    名称     |  类型  | 必须 |  说明  |
| :---------: | :----: | :--: | :----: |
|    phone    | string |  是  | 手机号 |
|    code     | string |  是  | 验证码 |
|  password   | string |  是  |  密码  |
| invite_code | string |  否  | 邀请码 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "token": "xxxxxxxxxx..."
  }
}
```

## 登录退出

**方式**

`POST`

**路径**

`/api/user/logout`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "退出成功",
  "code": 0,
  "data": null
}
```

## 用户信息

**方式**

`GET`

**路径**

`/api/user`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 3,
    "name": "0CGLAS" /*用户呢称*/,
    "avatar": "nnnn.ong" /*头像*/,
    "phone": "183****4309" /*手机号*/,
    "gender": 0 /*性别：0-未知/1-男/2-女*/,
    "code": "0CGLAS" /*邀请码*/,
    "number": "49123453" /*火推号码*/,
    "sign": "个性签名" /*签名*/,
    "fans_num": 0 /*粉丝数量*/,
    "follow_num": 0 /*关注数量*/,
    "praise_num": 0 /*获赞数量*/,
    "reward_num": 0 /*打赏数量*/,
    "invite_num": 0 /*邀请数量*/,
    "cer_status": -1 /*是否认证:-1-未认证/0-审核中/1-审核成功/2-审核失败*/,
    "state": 0,
    "created_at": "2020-06-11 10:13:26",
    "updated_at": "2020-06-11 10:13:26",
    "inviter": null
  }
}
```

## 获取单个用户信息

**方式**

`GET`

**路径**

`/api/users/:id`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 3,
    "name": "0CGLAS" /*用户呢称*/,
    "avatar": "nnnn.ong" /*头像*/,
    "phone": "183****4309" /*手机号*/,
    "gender": 0 /*性别：0-未知/1-男/2-女*/,
    "code": "0CGLAS" /*邀请码*/,
    "number": "49123453" /*火推号码*/,
    "sign": "个性签名" /*签名*/,
    "fans_num": 0 /*粉丝数量*/,
    "follow_num": 0 /*关注数量*/,
    "praise_num": 0 /*获赞数量*/,
    "reward_num": 0 /*打赏数量*/,
    "invite_num": 0 /*邀请数量*/,
    "is_follow": true /*是否关注*/,
    "state": 0,
    "created_at": "2020-06-11 10:13:26",
    "updated_at": "2020-06-11 10:13:26",
    "inviter": null
  }
}
```

## 根据名称检索用户

**方式**

`GET`

**路径**

`/api/users`

**参数**

|   名称   |  类型  | 必须 |     说明     |
| :------: | :----: | :--: | :----------: |
| username | string |  是  | 用户呢称检索 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 3,
    "name": "0CGLAS" /*用户呢称*/,
    "avatar": "nnnn.ong" /*头像*/,
    "phone": "183****4309" /*手机号*/,
    "gender": 0 /*性别：0-未知/1-男/2-女*/,
    "code": "0CGLAS" /*邀请码*/,
    "number": "49123453" /*火推号码*/,
    "sign": "个性签名" /*签名*/,
    "fans_num": 0 /*粉丝数量*/,
    "follow_num": 0 /*关注数量*/,
    "praise_num": 0 /*获赞数量*/,
    "reward_num": 0 /*打赏数量*/,
    "invite_num": 0 /*邀请数量*/,
    "is_follow": true /*是否关注*/,
    "state": 0,
    "created_at": "2020-06-11 10:13:26",
    "updated_at": "2020-06-11 10:13:26",
    "inviter": null
  }
}
```

## 意见反馈

**方式**

`POST`

**参数**

|  名称   |  类型  | 必须 |   说明   |
| :-----: | :----: | :--: | :------: |
| content | string |  是  | 反馈信息 |
| contact | string |  否  | 联系方式 |

**路径**

`/api/feedback`

**响应**

`Status code 200`

```json
{
  "msg": "反馈成功",
  "code": 0,
  "data": null
}
```

## 修改密码

`修改登录密码后会重置 token`

**方式**

`PATCH`

**参数**

|         名称          |  类型  | 必须 |   说明   |
| :-------------------: | :----: | :--: | :------: |
|     old_password      | string |  是  |  旧密码  |
|       password        | string |  是  |  新密码  |
| password_confirmation | string |  是  | 确认密码 |

**路径**

`/api/user/password`

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 设置/修改支付密码

**方式**

`PATCH`

**参数**

|   名称   |  类型  | 必须 |   说明   |
| :------: | :----: | :--: | :------: |
|   code   | string |  是  |  验证码  |
| password | string |  是  | 支付密码 |

**路径**

`/api/user/paypassword`

**响应**

`Status code 200`

```json
{
  "msg": "设置成功",
  "code": 0,
  "data": null
}
```

## 忘记密码

**方式**

`POST`

**参数**

|         名称          |  类型  | 必须 |   说明   |
| :-------------------: | :----: | :--: | :------: |
|         code          | string |  是  |  验证码  |
|         phone         | string |  是  |  手机号  |
|       password        | string |  是  |  新密码  |
| password_confirmation | string |  是  | 确认密码 |

**路径**

`/api/user/forget-password`

**响应**

`Status code 200`

```json
{
  "msg": "设置成功",
  "code": 0,
  "data": null
}
```

## 更新用户信息

**方式**

`PATCH`

**参数**

|  名称  |  类型  | 必须 |         说明          |
| :----: | :----: | :--: | :-------------------: |
| gender |  int   |  否  | 性别:0-未知/1-男/2-女 |
|  name  | string |  否  |         呢称          |
| avatar | string |  否  |         头像          |
|  sign  | string |  否  |       个性签名        |

**路径**

`/api/user`

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": null
}
```

## 邀请列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |          说明          |
| :----: | :--: | :--: | :--------------------: |
| level  | int  |  否  | 邀请等级:1-一级/2-二级 |
| limit  | int  |  是  |    条目数 默认为 20    |
| offset | int  |  是  |    条目数 默认为 0     |

**路径**

`/api/invite/records`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "里斯" /*用户呢称*/,
      "avatar": "头像.png" /*头像*/,
      "number": "49123452" /*账号*/,
      "user_id": 1,
      "created_at": "2020-06-08 12:07:54" /*时间*/,
      "amount": "40.0000" /*火豆奖励*/
    }
  ]
}
```

## 邀请统计

**方式**

`GET`

**路径**

`/api/invite/count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "direct_count": 0 /*二级*/,
    "indirect_count": 1 /*一级*/
  }
}
```

## 关注用户

**方式**

`POST`

**路径**

`/api/users/:id/follows`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 取消关注

**方式**

`DELETE`

**路径**

`/api/users/:id/follows`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 粉丝/关注列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |            说明            |
| :----: | :----: | :--: | :------------------------: |
|  type  | string |  是  | 类型:fans-粉丝/follow-关注 |
| limit  |  int   |  是  |      条目数 默认为 20      |
| offset |  int   |  是  |      条目数 默认为 0       |

**路径**

`/api/users/:id/follows`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "name": "张三",
      "avatar": null,
      "updated_at": "2020-06-04 17:23:33",
      "is_fans": false /*她/他是否是我粉丝*/,
      "is_follow": true /*是否关注他/她*/
    }
  ]
}
```

## 新手奖励详情

**方式**

`GET`

**路径**

`/api/rookie/details`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "receive_number": 0 /*当前领取次数*/,
    "receive_status": false /*今天领取状态*/,
    "receive_rule": "rule" /*领取规则*/,
    "receive_upper": 40 /*领取次数上限*/
  }
}
```

## 新手奖励领取

**方式**

`POST`

**路径**

`/api/rookie/receive`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 一元购详情

**方式**

`GET`

**路径**

`/api/activities`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "title": "一元购" /*标题*/,
    "num": 100 /*可购买总数*/,
    "buy_num": 10 /*已购买数量*/,
    "max_num": 10 /*购买上限: 0-无限制*/,
    "price": 100 /*价格*/,
    "currency": "hd" /*火豆*/,
    /*奖励信息*/
    "reward": {
      "desc": "商品描述" /*商品描述*/,
      "name": "iphone" /*商品名称*/,
      "cover": "1.jpg" /*商品封面*/
    },
    "rule": "规则" /*规则*/,
    "code": "SDSDS2" /*中奖码*/,
    "user_id": 0 /*中奖用户ID*/,
    "status": 1 /*状态:1-进行中/2-已开奖*/,
    "activity_code": {
      /*用户购买记录*/
      "id": 1,
      "user_id": 3,
      "activity_id": 1,
      "buy_num": 10,
      "codes": [
        "HDZQZLZ",
        "HDZQZYQ",
        "HDZQZYA",
        "HDZQZYP",
        "HDZQZYI",
        "HDZQZYJ",
        "HDZQZYR",
        "HDZQZYS",
        "HDZQZYT",
        "HDZQZZF"
      ],
      "created_at": "2020-06-10 14:25:55",
      "updated_at": "2020-06-10 14:26:19"
    }
  }
}
```

## 获取用户兑换码列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数 默认为 20 |
| offset | int  |  是  | 条目数 默认为 0  |

**路径**

`/api/activities/codes`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "user_id": 3,
      "activity_id": 1,
      "buy_num": 10 /*购买的次数*/,
      "codes": ["HDZQZLZ", "HDZQZYQ"] /*参与的兑换码*/,
      "created_at": "2020-06-10 14:25:55",
      "updated_at": "2020-06-10 14:26:19",
      "activity": {
        "id": 1,
        "title": "一元购",
        "code": "HDZQZLZ" /*中奖码*/,
        "user_id": 0 /*中奖用户ID*/,
        "status": 1 /*状态:1-进行中/2-已开奖*/
      }
    }
  ]
}
```

## 购买一元购

**方式**

`POST`

**参数**

| 名称 |  类型  | 必须 | 说明 |
| :--: | :----: | :--: | :--: |
| num  | string |  是  | 数量 |

**路径**

`/api/activities/:id/buy`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

# 用户管理

## 用户列表

`/admin/users`

**请求方式**

`GET`

**请求参数**

| 名称  |  类型  | 默认 |        必须         |   说明   |
| :---: | :----: | :--: | :-----------------: | :------: |
| name  | string |  无  |         否          |   昵称   |
| phone | string |  无  |         否          |  手机号  |
| role  |  int   |  否  | 0-普通用户 1-团队长 |
| page  |  int   |  1   |         是          | 当前页数 |
| limit |  int   |  20  |         是          | 每页条数 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 9,
        "name": "yanfan5" /*姓名*/,
        "avatar": null /*头像*/,
        "gender": 1 /*性别*/,
        "phone": "187****1158" /*电话*/,
        "code": "OJ9IBC" /*邀请码*/,
        "power": 0 /*能量*/,
        "collection_time": null /*一键收矿到期时间*/,
        "market_id": 1 /*市场代理等级*/,
        "role": 1 /*角色:0-普通/1-团队长*/,
        "belong_to_user": 0 /*团队长的用户id*/,
        "created_at": "2020-05-07 08:21:15",
        "updated_at": "2020-05-08 03:12:54",
        "tel": "18781601158" /*电话*/,
        "permission": 0 /*权限等级:0-无任何权限1-查询被邀请者手机*/,
        "market": {
          /**/
          "id": 1,
          "name": "零售商" /*市场代理名称*/,
          "icon": "http://" /*市场代理图标*/
        },
        /*该字段可能为 NULL */
        "fil_wallets": {
          "id": 1,
          "user_id": 1,
          "income": "0.0000",
          "security": "0.0000",
          "withdrawable": "600.0000",
          "withdraw_ing": "400.0000",
          "withdraw_finish": "0.0000",
          "lock": "0.0000",
          "pawn": "0.0000",
          "withdrawal_address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq" /*提币地址*/,
          "created_at": "2020-10-27 10:29:58",
          "updated_at": "2020-10-27 11:21:08",
          "address": "f1qcypeqpaoechla2ibb7savs6tagnawnsb2vnjlq",
          "secret": "941ce59183794e09b73622f7889e9694"
        }
      }
    ],
    "first_page_url": "http://storage.name/admin/users?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://storage.name/admin/users?page=1",
    "next_page_url": null,
    "path": "http://storage.name/admin/users",
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
  }
}
```

## 创建用户

`/admin/users`

**请求方法**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |          说明          |
| :------: | :----: | :--: | :--: | :--------------------: |
|   name   | string |  无  |  是  |          昵称          |
|  avatar  | string |  无  |  无  |          头像          |
|  phone   | string |  无  |  是  |         手机号         |
|   code   |  int   |  无  |  是  |          性别          |
| password | string |  无  |  否  | 性别: 0-未知 1-男 2-女 |

**返回体**

```json
{
  "msg": "创建成功",
  "code": 0,
  "data": null
}
```

## 用户修改

`/admin/users/{user}`

**请求方式**

`PUT`

**请求参数**

|    名称    |  类型  | 默认 | 必须 |                   说明                   |
| :--------: | :----: | :--: | :--: | :--------------------------------------: |
|    name    | string |  无  |  否  |                   昵称                   |
|   avatar   | string |  无  |  否  |                   头像                   |
| market_id  |  int   |  无  |  否  |             市场代理等级 id              |
| permission |  int   |  无  |  否  | 权限等级:0-无任何权限 1-查询被邀请者手机 |
|    role    |  int   |  无  |  否  |           角色:0-普通/1-团队长           |
|   power    |  int   |  无  |  否  |                用户能量值                |
|  password  | string |  无  |  否  |           密码 长度在 6-20 位            |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 查询父级 user

`/admin/users/{user}/parent`

**请求方法**

`GET`

**请求参数**

`无`

**返回体**

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

`/admin/users/{user}/subset`

**请求方法**

`GET`

**请求参数**

`无`

**返回体**

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
          "avatar": null,
          "market_performance": {
            /*市场业绩(当子集无也业绩时,该字段为null)*/
            "id": 5,
            "user_id": 5,
            "parent_id": 1,
            "self_num": 0 /*自身销售量*/,
            "direct_num": 0 /*直推销售量*/,
            "team_num": 300 /*市场销售量*/,
            "max": 1 /*是否为市场大区 0-否 1-是*/,
            "created_at": "2020-05-08 02:42:21",
            "updated_at": "2020-05-08 03:17:39"
          },
          /*实名认证信息*/
          "certification": {
            "id": 1,
            "user_id": 1,
            "name": "123213" /*真实姓名*/,
            "number": "123213123123213123" /*证件号*/,
            "fpic": "20200508115335796.jpg" /*证件正面照片*/,
            "bpic": "20200508115348973.jpg" /*证件反面照片*/,
            "hpic": "20200508115402470.jpg" /*证件手持照片*/,
            "status": 1 /*状态:0-待审核1-成功2-失败*/,
            "admin_id": 1 /**/,
            "reason": null /*审核失败原因*/,
            "created_at": "2020-05-08 03:00:18",
            "updated_at": "2020-05-08 03:54:05"
          }
        }
      ],
      /*实名认证信息*/
          "certification": {
            "id": 1,
            "user_id": 1,
            "name": "123213" /*真实姓名*/,
            "number": "123213123123213123" /*证件号*/,
            "fpic": "20200508115335796.jpg" /*证件正面照片*/,
            "bpic": "20200508115348973.jpg" /*证件反面照片*/,
            "hpic": "20200508115402470.jpg" /*证件手持照片*/,
            "status": 1 /*状态:0-待审核1-成功2-失败*/,
            "admin_id": 1 /**/,
            "reason": null /*审核失败原因*/,
            "created_at": "2020-05-08 03:00:18",
            "updated_at": "2020-05-08 03:54:05"
          }
      "self_market": {
        /*自身市场业绩*/
        "id": 3,
        "user_id": 1,
        "parent_id": 0,
        "self_num": 0,
        "direct_num": 120,
        "team_num": 304,
        "max": 0,
        "created_at": "2020-05-12 13:51:10",
        "updated_at": "2020-05-13 18:23:53"
      }
    },
    "count": 1 /*直接邀请人数*/,
    "total_count": 5 /*团队人数*/
  }
}
```

## 更新用户 Fil 提币地址

`/admin/users/{user}/filwallet-address`

**请求方法**

`PUT`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |     说明     |
| :-----: | :----: | :--: | :--: | :----------: |
| address | string |  无  |  是  | Fil 提币地址 |

**返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
  }
}
```

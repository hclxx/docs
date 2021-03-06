# 系统配置

## 获取社群绑定说明

**方式**

`GET`

**路径**

`/admin/config/bind/group/explain`

**响应**

`Status code 200`

```json
{
  "msg": "获取成功",
  "code": 0,
  "data": {
    "id": 24,
    "key": "group:bind:explain",
    "value": "asdsadsadasd" /*绑定说明*/,
    "created_at": "2020-04-05 11:07:02",
    "updated_at": "2020-04-05 11:07:35"
  }
}
```

## 更新社群绑定说明

**方式**

`PUT`

**参数**

|  名称   |  类型  | 必须 | 说明 |
| :-----: | :----: | :--: | :--: |
| explain | string |  是  | 说明 |

**路径**

`/admin/config/bind/group/explain`

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": {
    "id": 24,
    "key": "group:bind:explain",
    "value": "asdsadsadasd" /*绑定说明*/,
    "created_at": "2020-04-05 11:07:02",
    "updated_at": "2020-04-05 11:07:35"
  }
}
```

## 获取邀请配置

`admin/config/invite`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 3,
    "key": "invite",
    "value": {
      "mode": "1.  点击“复制邀请链接",
      "url": "https://tapi.igoods.io/share/quick/register/",
      "rule": "1.【矿力奖励】分享自己的专属二维码给好友，好友首次成功注册“链优品APP”后，你将获取10个矿力奖励",
      "power": "5", //  二级邀请奖励
      "self_agm": 10, // 完成实名认证自身 AGM 奖励数量
      "parent_agm": 10, // 完成实名认证邀请人 AGM 奖励数量
      "grandpa_agm": 10 // 完成实名认证邀请人父级 AGM 奖励数量
    },
    "created_at": "2019-05-30 07:42:54",
    "updated_at": "2019-05-30 07:46:03"
  }
}
```

## 修改邀请配置

`admin/config/invite`

**请求方式**

`PUT`

**请求参数**

|    名称     |  类型  | 默认 | 必须 |                      说明                      |
| :---------: | :----: | :--: | :--: | :--------------------------------------------: |
|     url     | string |  无  |  是  |                    邀请链接                    |
|    rule     | string |  无  |  是  |                    邀请奖励                    |
|    power    | string |  无  |  是  |                  二级邀请奖励                  |
|    mode     | string |  无  |  是  |                    邀请方式                    |
|  self_agm   |  int   |  无  |  是  |    完成实名认证自身 AGM 奖励数量，允许 0 值    |
| parent_agm  |  int   |  无  |  是  |   完成实名认证邀请人 AGM 奖励数量，允许 0 值   |
| grandpa_agm |  int   |  无  |  是  | 完成实名认证邀请人父级 AGM 奖励数量，允许 0 值 |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 获取铉算配置

**方式**

`GET`

**路径**

`/admin/config/xuansuan`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 39,
    "key": "xuansuan",
    "value": {
      "intro": "这是铉算说明" /*铉算说明*/,
      "lock_cabin": {
        /*锁仓配置*/
        "min": "1000" /*首次锁仓最低个数*/,
        "intro": "这是锁仓说明" /*锁仓说明*/
      },
      "withdrawal": {
        /*提现配置*/
        "service_charge": "11" /*提现AGM手续费(单位个)*/
      },
      "unlock_cabin": {
        /*解仓配置*/
        "intro": "这是解仓说明" /*解仓说明*/
      },
      "usdt": {
            "intro": "usdt充值说明" /*usdt充值说明*/
      }
    },
    "created_at": "2020-04-14 16:13:28",
    "updated_at": "2020-04-14 16:22:19"
  }
}
```

## 修改铉算配置

**方式**

`PUT`

**参数**

|   名称   | 类型  | 必须 |     说明     |
| :------: | :---: | :--: | :----------: |
| xuansuan | array |  是  | 铉算配置参数 |

**xuansuan**

```json
{
  "intro": "这是铉算说明" /*铉算说明*/,
  "lock_cabin": {
    /*锁仓配置*/
    "min": "1000" /*首次锁仓最低个数*/,
    "intro": "这是锁仓说明" /*锁仓说明*/
  },
  "withdrawal": {
    /*提现配置*/
    "service_charge": "11" /*提现AGM手续费(单位个)*/
  },
  "unlock_cabin": {
    /*解仓配置*/
    "intro": "这是解仓说明" /*解仓说明*/,
    /*新增 解仓手续费配置*/
    "service_charge": [
      {
        "day": "30" /*新增 锁仓天数*/,
        "less_than": "5" /*新增 小于锁仓天数手续费比例为%5*/,
        "greater_than": "3" /*新增 大于锁仓天数手续费比例为%3*/
      },
      {
        "day": "90",
        "less_than": "3" /*新增 小于90锁仓天数手续费比例为%3*/,
        "greater_than": "0" /*新增 大于锁仓天数手续费比例为0%s*/
      }
    ],
    "usdt": {
      "intro": "usdt充值说明" /*usdt充值说明*/
    }
  },
  "mouth_total_num": "1000000" /*新增 月份发总数*/
}
```

**路径**

`/admin/config/xuansuan`

**响应**

`Status code 200`

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": {
    "id": 39,
    "key": "xuansuan",
    "value": {
      "intro": "这是铉算说明" /*铉算说明*/,
      "lock_cabin": {
        /*锁仓配置*/
        "min": "1000" /*首次锁仓最低个数*/,
        "intro": "这是锁仓说明" /*锁仓说明*/
      },
      "withdrawal": {
        /*提现配置*/
        "service_charge": "11" /*提现AGM手续费(单位个)*/
      },
      "unlock_cabin": {
        /*解仓配置*/
        "intro": "这是解仓说明" /*解仓说明*/,
        "service_charge": [
          {
            "day": "30" /*新增 锁仓天数*/,
            "less_than": "5" /*新增 小于锁仓天数手续费比例为%5*/,
            "greater_than": "3" /*新增 大于锁仓天数手续费比例为%3*/
          },
          {
            "day": "90",
            "less_than": "3" /*新增 小于90锁仓天数手续费比例为%3*/,
            "greater_than": "0" /*新增 大于锁仓天数手续费比例为0%s*/
          }
        ]
      },
      "mouth_total_num": "1000000" /*新增 月份发总数*/,
       "usdt": {
            "intro": "usdt充值说明" /*usdt充值说明*/
       }
    },
    "created_at": "2020-04-14 16:13:28",
    "updated_at": "2020-04-14 16:26:07"
  }
}
```


## 获取agm ustd兑换配置

`admin/config/conversion`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 24,
        "key": "conversion",
        "value": {
            "agm_to_usdt": "100", /*agm兑换usdt配置*/
            "usdt_to_agm": "0.2" /*usdt兑换agm配置*/
        },
        "created_at": "2020-06-22 05:33:28",
        "updated_at": "2020-06-22 05:33:45"
    }
}
```

## 修改agm ustd兑换配置

`admin/config/conversion`

**请求方式**

`PUT`

**请求参数**

|    名称     |  类型  | 默认 | 必须 |                      说明                      |
| :---------: | :----: | :--: | :--: | :--------------------------------------------: |
|     agm_to_usdt     | string |  无  |  是  |              agm兑换usdt配置                   |
|    usdt_to_agm     | string |  无  |  是  |                   usdt兑换agm配置                   |

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

# 配置管理

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
            "power": "5"  //  二级邀请奖励
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

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   url   | string |  无  |  是  |             邀请链接                   |
|   rule  | string |  无  |  是  |             邀请奖励                   |
|   power | string |  无  |  是  |             二级邀请奖励               |
|   mode  | string |  无  |  是  |              邀请方式                  |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 获取协议配置

`admin/config/protocol`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "key": "protocol",
        "value": {
            "register": "注册协议"
        },
        "updated_at": "2019-05-30 09:05:54",
        "created_at": "2019-05-30 09:05:54",
        "id": 4
    }
}
```

## 修改协议配置

`admin/config/protocol`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   register   | string |  无  |  是  |            注册协议内容                   |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```
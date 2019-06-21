# 社群/社区

## 创建社群/社区

**方式**

`POST`

**路径**

`/api/groups/conditions`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| type | string |  是  | 群类型: group-社群 community-社区 |
| members | array |  否  | 群成员ID，如 `[1, 2, 3]`,不包含用户本身 |
| name | string |  否  | 群名称 |
| avatar | string |  否  | 群头像 |
| describe | string |  否  | 群描述 |

**响应**

`Status code 200`

```json
{
    "msg": "群创建成功",
    "code": 0,
    "data": {
        "name": null,
        "type": "group",
        "avatar": null,
        "number": 57330844,
        "describe": null,
        "background": null,
        "grade": 1,
        "comm_id": 0,
        "maxadmins": 4,
        "group_count": 0,
        "maxmembers": 500,
        "member_count": 1,
        "owner": 5,
        "updated_at": "2019-06-21 16:00:41",
        "created_at": "2019-06-21 16:00:41",
        "id": 16,
        "groupid": "85674574282753"
    }
}
```

## 更新社群/社区信息


## 解散社群/社区


## 退出社群/社区


## 解散社群/社区

## 解散社群/社区

## 社群/社区条件

**方式**

`GET`

**路径**

`/api/groups/conditions`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| type | string |  是  | 条件类型: group-社群 community-社区 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "name": "实名认证",/*条件名称*/
            "status": true,/*完成状态*/
            "key": "certification"/*标示 方便客户端做引导跳转使用*/
        },
        {
            "name": "自身等级达到5级",
            "status": true,
            "key": "level"
        },
        {
            "name": "邀请注册至少5名好友建立的社群人数不低于200人",
            "status": true,
            "key": "invite"
        }
    ]
}
```

## 社群/社区公告列表

**方式**

`GET`

**路径**

`/api/group/notices`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| limit | int |  是  | 条目数 默认20 |
| offset | int |  是  | 偏移量 默认0 |
| group_id | int |  是  | 社群/社区ID |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "title": "测试呢",/*公告标题*/
            "content": "测试测试测试",/*公告内容*/
            "data": [
                {
                    "mime": "image/png",
                    "width": 200,
                    "height": 100,
                    "filename": "xxxxx.png"
                }
            ],
            "group_id": 1,
            "user_id": 5,
            "read_count": 0,/*阅读数量*/
            "created_at": "2019-06-21 13:42:03",/*发布时间*/
            "updated_at": "2019-06-21 13:42:03",
            /*publisher为 null 使用该对象的名称*/
            "user": {
                "id": 5,
                "name": "Z63482",
                "avatar": null
            },
            "publisher": {/*发布者信息*/
                "id": 2,
                "user_id": 5,
                "grade": 0,
                "group_id": 1,
                "nickname": null,/*呢称非NULL使用nickname作为发布者名称否则使用user对象的name*/
                "chat_bgd": null,
                "status": 0,
                "role": 1,
                "message": null,
                "top": 0,
                "created_at": null,
                "updated_at": null,
                "user": {/*用户信息*/
                    "id": 5,
                    "name": "Z63482",
                    "avatar": null
                }
            }
        }
    ]
}
```

## 社群/社区公告创建

::: tip
 社群/社区管理和创始人才有权限创建公告
:::

**方式**

`POST`

**路径**

`/api/group/notices`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| title | int |  是  | 标题 |
| content | int |  是  | 内容 |
| images | object |  是  | 图片附件 |

`images` 参数说明

```json
[
    {
        "mime": "png",/*文件mimetype*/
        "width": 100,/*图片宽度*/
        "height": 200,/*图片高度*/
        "filename": "xxxxx.png"/*文件名*/
    },
]
```

**响应**

`Status code 200`

```json
{
    "msg": "创建公告成功",
    "code": 0,
    "data": {
        "user_id": 5,
        "title": "测试呢",
        "data": [
            {
                "filename": "xxxxx.png",
                "height": 100,
                "width": 200,
                "mime": "image/png"
            }
        ],
        "content": "测试测试测试",
        "group_id": 1,
        "updated_at": "2019-06-21 13:51:57",
        "created_at": "2019-06-21 13:51:57",
        "id": 4
    }
}
```

## 社群/社区公告删除

::: tip
 社群/社区管理和创始人才有权限删除公告
:::

**方式**

`DELETE`

**路径**

`/api/group/notices/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 社群/社区公告阅读

**方式**

`POST`

**路径**

`/api/group/notices/{id}/read`

**响应**

`Status code 200`

```json
{
    "msg": "阅读成功",
    "code": 0,
    "data": null
}
```


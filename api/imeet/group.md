# 社群/社区

## 创建社群/社区


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


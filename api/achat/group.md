# 社群相关

## 绑定社群

**方式**

`PATCH`

**路径**

`/api/groups/:id/bind`

**响应**

`Status code 200`

```json
{
    "msg": "绑定成功",
    "code": 0,
    "data": null
```

## 用户加入社群

**方式**

`GET`

**路径**

`/api/user/groups`

**参数**

| 名称 |  类型  | 必须 |   说明   |
| :--: | :----: | :--: | :------: |
| name | string |  否  | 名称搜索 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "name": "置顶社群",
      "list": [
        {
          "id": 32,
          "groupid": "85931794169857",
          "name": "Z63482创建的群聊" /*名称*/,
          "avatar": null /*头像*/,
          "is_bind": false /*数否绑定 true-绑定 false-未绑定*/,
          "chat_setting": {
            "msg_top": 1 /*是否置顶 0-否 1-是*/,
            "msg_disturb": 1 /*消息免打扰 0-否 1-是*/,
            "msg_disturb_options": {
              "accept": 0 /*接受消息但不提提醒 0-否 1-是*/,
              "shielding": 1 /*屏蔽消息 0-否 1-是*/
            }
          },
          "role": 2
        }
      ]
    }
  ]
}
```

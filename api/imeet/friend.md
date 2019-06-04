# 好友/通讯录/社群/社区

## 好友

**方式**

`GET`

**路径**

`/api/friend/groups`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*分组id*/
            "name": "我的好友",/*分组名称*/
            "alias": "friend",/*分组别名*/
            "user_id": 5,/*用户id*/
            "user_count": 1,/*用户数量*/
            "friends": [
                {
                    "id": 1,
                    "user_id": 5,
                    "friend_id": 6,
                    "group_id": 1,
                    "alias": "备注",
                    "chat_bgd": null,
                    "dynamic_setting": {
                        "look_me": false,
                        "look_him": false
                    },
                    "friend": {
                        "id": 6,
                        "name": "章三",
                        "avatar": null
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "黑名单",
            "alias": "black",
            "user_id": 5,
            "user_count": 0,
            "friends": []
        }
    ]
}
```

## 通讯录

**方式**

`GET`

**路径**

`/api/friends`

**参数**


**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "alias": null,/*好友备注*/
            "friend_id": 2,/*好友id 也是用户id*/
            "dynamic_setting": {
                "look_me": false,/*不让他看我的动态*/
                "look_him": false/*不看他的动态*/
            },
            "friend": {
                "id": 2,/**/
                "name": "章三",/*好友名称*/
                "avatar": null/*好友头像*/
            }
        }
    ]
}
```

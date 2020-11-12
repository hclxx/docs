# 管理员登录/登出

## 登入

`admin/login`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |               说明                |
| :------: | :----: | :--: | :--: | :-------------------------------: |
|  email   | string |  无  |  否  |  邮箱登入 phone 字段不存在则必须  |
|  phone   | string |  无  |  否  | 手机号登入 email 字段不存在则必须 |
| password | string |  无  | 必须 |             登入密码              |

**SUCCESS 返回体**

```json
{
    "msg": "登录成功",
    "code": 0,
    "data": {
        /*七牛上传文件token*/
        "token": "CHDYA8FH918ZzRv8FAnuyG51n8MpqLRI-lQjW-FH:3YpIhGxHXrywiSlhPPEWQ3JJWww=:eyJyZXR1cm5Cb2R5Ijoie1wiZmlsZW5hbWVcIjpcIiQoa2V5KVwiLFwiaGFzaFwiOlwiJChldGFnKVwiLFwid2lkdGhcIjpcIiQoaW1hZ2VJbmZvLndpZHRoKVwiLFwiaGVpZ2h0XCI6XCIkKGltYWdlSW5mby5oZWlnaHQpXCIsXCJtaW1lXCI6XCIkKG1pbWVUeXBlKVwifSIsInNjb3BlIjoiZmlsZSIsImRlYWRsaW5lIjoxNTg5MDEzNDUxfQ==",
        "admin": {
            "id": 2,
            "name": "新建管理员",
            "state": 0,
            "admin_token": "22b32130b0ed4a8307bd98f215f9e98a",
            "updated_at": "2020-05-09 11:37:30"
        }
    }
}
```


## 登出

`admin/logout`

**请求方式**

`POST`

**SUCCESS 返回体**

```json
{
    "msg": "退出成功",
    "code": 0,
    "data": null
}
```

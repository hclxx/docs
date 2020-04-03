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
      "id": 1,
      "name": "社群名称" /*名称*/,
      "avatar": "社群头像" /*头像*/,
      "groupid": "85034228842497" /*环信社群号*/,
      "role": 1 /*角色: 0-普通用户 1-管理员 2-群主*/,
      "is_bind": false /*是否绑定:true-是 false-否*/
    }
  ]
}
```

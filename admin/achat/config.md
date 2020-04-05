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

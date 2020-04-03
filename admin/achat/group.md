# 群等级管理

## 等级列表

`admin/group/upgrade`

**请求方式**

`GET`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "level": 2 /*等级*/,
      "max_members": 1000 /*成员上限*/,
      "max_admins": 10 /*管理员上限*/,
      "price": {
        "agm": 2000 /*agm 价格*/
      },
      "type": "year",
      "created_at": "2020-03-31 14:12:22",
      "updated_at": "2020-03-31 14:12:22"
    }
  ]
}
```

## 添加等级

`admin/group/upgrade`

**请求方式**

`POST`

**参数**

```json
{
  "max_members": 1 /*成员上限*/,
  "max_admins": 1 /*管理员上限*/,
  "price": { "agm": 1 } /*agm 价格*/,
  "level": 1 /*等级*/
}
```

**SUCCESS 返回体**

```json
{
  "msg": "添加成功",
  "code": 0,
  "data": []
}
```

## 更新等级

`admin/group/upgrade/:id`

**请求方式**

`PUT`

**参数**

```json
{
  "max_members": 1 /*成员上限*/,
  "max_admins": 1 /*管理员上限*/,
  "price": { "agm": 1 } /*agm 价格*/,
  "level": 1 /*等级*/
}
```

**SUCCESS 返回体**

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": []
}
```

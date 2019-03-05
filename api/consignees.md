# 收货人

## 收货人列表

**方式**

`PATCH`

**路径**

`/api/v1/consignees`

**参数**

|     名称     |  类型  | 必须 | 说明  |
| :----------: | :----: | :--: | :---: |
| access_token | string |  是  | token |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 1 /*int id*/,
      "user_id": 1 /* 用户id */,
      "name": "章三" /*string 收货人呢称*/,
      "phone": "18382274309" /*string 手机号*/,
      "other": "",
      "area": "四川设个成都" /*string 区域*/,
      "detail": "四川设个成都" /*string 详细地址*/,
      "tag": "公司" /*string 标签*/,
      "default": true /*bool 是否默认: true-是 false-否*/
    }
  ]
}
```

## 添加收货人

**方式**

`POST`

**路径**

`/api/v1/consignees`

**参数**

|     名称     |  类型  | 必须 |      说明       |
| :----------: | :----: | :--: | :-------------: |
|     name     | string |  是  |   收货人姓名    |
|    phone     | string |  是  |      手机       |
|     area     | string |  是  |      区域       |
|    detail    | string |  是  |    地址详情     |
|     tag      | string |  否  |      标签       |
|   default    |  int   |  是  | 默认: 0-否 1-是 |
|   province   | string |  是  |      省份       |
|     city     | string |  是  |       市        |
|    county    | string |  是  |       区        |
|  area_code   | string |  是  |     区域码      |
| access_token | string |  是  |      token      |

**响应**

`Status code 200`

```json
{
  "msg": "添加成功",
  "code": 0,
  "data": [
    {
      "id": 1 /*int id*/,
      "user_id": 1 /* 用户id */,
      "name": "章三" /*string 收货人呢称*/,
      "phone": "18382274309" /*string 手机号*/,
      "other": "",
      "area": "四川设个成都" /*string 区域*/,
      "detail": "四川设个成都" /*string 详细地址*/,
      "tag": "公司" /*string 标签*/,
      "default": true /*bool 是否默认: true-是 false-否*/
    }
  ]
}
```

## 更新收货人

**方式**

`PUT`

**路径**

`/api/v1/consignees/{id}`

**参数**

|     名称     |  类型  | 必须 |      说明       |
| :----------: | :----: | :--: | :-------------: |
|     name     | string |  是  |   收货人姓名    |
|    phone     | string |  是  |      手机       |
|     area     | string |  是  |      区域       |
|    detail    | string |  是  |    地址详情     |
|     tag      | string |  否  |      标签       |
|   default    |  int   |  是  | 默认: 0-否 1-是 |
|   province   | string |  是  |      省份       |
|     city     | string |  是  |       市        |
|    county    | string |  是  |       区        |
|  area_code   | string |  是  |     区域码      |
| access_token | string |  是  |      token      |

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": [
    {
      "id": 1 /*int id*/,
      "user_id": 1 /* 用户id */,
      "name": "章三" /*string 收货人呢称*/,
      "phone": "18382274309" /*string 手机号*/,
      "other": "",
      "area": "四川设个成都" /*string 区域*/,
      "detail": "四川设个成都" /*string 详细地址*/,
      "tag": "公司" /*string 标签*/,
      "default": true /*bool 是否默认: true-是 false-否*/
    }
  ]
}
```

## 删除收货人

**方式**

`DELETE`

**路径**

`/api/v1/consignees/{id}`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

## 默认收货人

**方式**

`PATCH`

**路径**

`/api/v1/consignees/{id}/default`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "设置成功",
  "code": 0,
  "data": null
}
```

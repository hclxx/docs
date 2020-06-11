# 收货信息

## 列表

**方式**

`GET`

**路径**

`/api/receiving-addresses`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "海军" /*姓名*/,
      "phone": "110" /*手机*/,
      "user_id": 1,
      "area": "四川省成都市区" /*区域*/,
      "address": "环球中心" /*详细地址*/,
      "is_default": 0
    }
  ]
}
```

## 添加

**方式**

`POST`

**路径**

`/api/receiving-addresses`

**参数**

|  名称   |  类型  | 必须 |   说明   |
| :-----: | :----: | :--: | :------: |
|  name   | string |  是  |   姓名   |
|  phone  | string |  否  |   手机   |
|  area   | string |  是  |   区域   |
| address | string |  是  | 详细地址 |

**响应**

`Status code 200`

```json
{
  "msg": "添加成功",
  "code": 0,
  "data": null
}
```

## 更新

**方式**

`PUT`

**路径**

`/api/receiving-addresses/{id}`

**参数**

|  名称   |  类型  | 必须 |   说明   |
| :-----: | :----: | :--: | :------: |
|  name   | string |  是  |   姓名   |
|  phone  | string |  否  |   手机   |
|  area   | string |  是  |   区域   |
| address | string |  是  | 详细地址 |

**响应**

`Status code 200`

```json
{
  "msg": "添加成功",
  "code": 0,
  "data": null
}
```

## 删除

**方式**

`DELETE`

**路径**

`/api/receiving-addresses/{id}`

**响应**

`Status code 200`

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

# 认证

## 提交认证

**方式**

`POST`

**路径**

`/api/certification`

**参数**

|  名称  |  类型  | 必须 |     说明     |
| :----: | :----: | :--: | :----------: |
|  name  | string |  是  |   真实姓名   |
| number | string |  否  |   证件号码   |
|  fpic  | string |  否  |  证件正面照  |
|  bpic  | string |  是  |  证件反面照  |
|  hpic  | string |  是  | 证件手持面照 |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 获取认证

**方式**

`GET`

**路径**

`/api/certification`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "id": 1,
    "user_id": 1,
    "name": "老王",
    "number": "51372219922211111",
    "fpic": "sadasdasd.png",
    "bpic": "sadasdasd.png",
    "hpic": "sadasdasd.png",
    "status": 0 /*0-待审核 1-审核通过 2-驳回*/,
    "reason": null /*驳回原因*/,
    "created_at": null,
    "updated_at": null
  }
}
```

## 更新认证

**方式**

`PUT`

**路径**

`/api/certification`

**参数**

|  名称  |  类型  | 必须 |     说明     |
| :----: | :----: | :--: | :----------: |
|  name  | string |  是  |   真实姓名   |
| number | string |  否  |   证件号码   |
|  fpic  | string |  否  |  证件正面照  |
|  bpic  | string |  是  |  证件反面照  |
|  hpic  | string |  是  | 证件手持面照 |

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": null
}
```

# 实名认证

## 申请认证

**方式**

`POST`

**路径**

`/api/v1/certification`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| front | string |  是  |  证件正面照  |
| back | string |  是  | 证件反面照 |
| hand | string |  是  |  手持证件照  |
| number | string |  是  | 证件号 |
| name | string |  是  | 证件人姓名 |
| type | string |  是  | 证件类型: id-card(身份证)，暂仅支持身份证 |

**响应**

`Status code 200`

```json
{
    "msg": "提交成功，后台管理管理员将在2-3个工作日进行处理",
    "code": 0,
    "data": {
        "examiner": 0,
        "user_id": 1,
        "certification_name": "real_name",
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",/*正面照*/
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",/*反面照*/
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",/*手持照*/
            "number": "5137221993",/*证件号码*/
            "name": "章三",/*证件人姓名*/
            "type": "id-card"/*证件类型:id-card 身份证*/
        },
        "status": 0,/*状态: 0-待审核 1-审核通过 2-被驳回，状态在0或1情况下，不能进行更改*/
        "updated_at": "2019-02-15 16:07:44",
        "created_at": "2019-02-15 16:07:44",
        "id": 2
    }
}
```

## 更新认证

**方式**

`PUT`

**路径**

`/api/v1/certification`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| front | string |  是  |  证件正面照  |
| back | string |  是  | 证件反面照 |
| hand | string |  是  |  手持证件照  |
| number | string |  是  | 证件号 |
| name | string |  是  | 证件人姓名 |
| type | string |  是  | 证件类型: id-card(身份证)，暂仅支持身份证 |

**响应**

`Status code 200`

```json
{
    "msg": "提交成功，后台管理管理员将在2-3个工作日进行处理",
    "code": 0,
    "data": {
        "examiner": 0,
        "user_id": 1,
        "certification_name": "real_name",
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",/*正面照*/
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",/*反面照*/
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",/*手持照*/
            "number": "5137221993",/*证件号码*/
            "name": "章三",/*证件人姓名*/
            "type": "id-card"/*证件类型:id-card 身份证*/
        },
        "status": 0,
        "updated_at": "2019-02-15 16:07:44",
        "created_at": "2019-02-15 16:07:44",
        "id": 2
    }
}
```

## 获取认证

**方式**

`GET`

**路径**

`/api/v1/certification`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "id": 2,
        "certification_name": "real_name",
        "user_id": 1,
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "number": "5137221993",
            "name": "章三",
            "type": "id-card"
        },
        "examiner": 0,
        "status": 0,
        "created_at": "2019-02-15 16:07:44",
        "updated_at": "2019-02-15 16:07:44"
    }
}
```

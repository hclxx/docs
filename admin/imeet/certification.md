# 认证管理

## 认证列表

`admin/certification`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  user_name  | string |  无  |  否  |            认证用户名                    |
|  status     |  int   |  无  |  否  |       状态:0-待审核 1-已通过 2-已驳回      |
|  after      |  int   |  无  |  否  |            从第几条开始取                 |      
|  limit      |  int   |  15  |  是  |             每页条数                     |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 2,
                "certification_name": "real:name",  //  认证类型
                "user_id": 2,
                "data": {
                    "front": "http://szl.qingchuanren.com/e55d0786ee505be16f1ec473f7f6ee86.jpeg",
                    "back": "http://szl.qingchuanren.com/5ce3766fa94f49bd9a3b0e87401e869e.jpeg",
                    "number": "511623199608182535",
                    "name": "李老师",
                    "type": "id-card",
                    "reason": "驳回"
                },
                "examiner": 1,  //  处理人
                "status": 2,    //  状态:0-待审核 1-已通过 2-已驳回
                "created_at": null,
                "updated_at": "2019-05-29 06:43:09",
                "admin": {
                    "id": 1,
                    "name": "root"
                }
            },
            {
                "id": 1,
                "certification_name": "real:name",
                "user_id": 1,
                "data": [],
                "examiner": 1,
                "status": 1,
                "created_at": null,
                "updated_at": "2019-05-29 06:39:38",
                "admin": {
                    "id": 1,
                    "name": "root"
                }
            }
        ],
        "first_page_url": "http://imeet.test/admin/certification?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/certification?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/certification",
        "per_page": 15,
        "prev_page_url": null,
        "to": 3,
        "total": 3
    }
}
```


## 通过认证

`admin/authority/{id}/pass`

**请求方式**

`PUT`


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 驳回认证

`admin/authority/{id}/reject`

**请求方式**

`PUT`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  reason  | string |  无  |  否  |        驳回原因                            |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

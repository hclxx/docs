# Fil钱包分发

## 列表

**方式**

`GET`

**路径**

`/admin/fil/issue`

**参数**

| 名称  | 类型 | 默认 | 必须 |    说明    |
| :---: | :--: | :--: | :--: | :--------: |
| start | string  |  无  |  是  | 每页条目数 |
| end  | string  |  无   |  是  |    页码    |
| limit | int  |  15  |  是  | 每页条目数 |
| page  | int  |  1   |  是  |    页码    |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "total_num": 544,   /*总分发数量*/
                "order_num": 544,   /*分发时对应的总订单数*/
                "admin_id": 1,
                "created_at": "2020-10-21 16:13:30",
                "updated_at": "2020-10-21 16:13:30",
                "admin": {  /*分发管理员信息*/
                    "id": 1,
                    "name": "超级管理员"
                }
            }
        ],
        "first_page_url": "http://storage.test/admin/fil/issue?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://storage.test/admin/fil/issue?page=1",
        "next_page_url": null,
        "path": "http://storage.test/admin/fil/issue",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## Fil钱包分发

`admin/fil/issue`

**请求方式**

`POST`

**请求参数**

|      名称      |  类型  | 默认 | 必须 |    说明    |
| :------------: | :----: | :--: | :--: | :--------: |
|  total_num  | string |  无  |  是  |   分发总数   |

**返回体**

```json
{
  "msg": "分发成功",
  "code": 0,
  "data": null
}
```

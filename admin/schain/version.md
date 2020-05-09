# 版本管理

## 版本列表

`admin/versions`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  1  |  是  |       当前页数      |
| limit  |  int   |  15  |   是 |       每页条数           |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
          {
            "id": 1,
            "type": 1,  //  版本类型 0: android 1: ios
            "version_name": "admin", //  版本名称
            "version_code": "1.0",  //  内部版本号
            "description":"版本说明",  //  版本说明
            "link": "http://www.baidu.com", //  链接地址
            "is_forced":1, //  是否强制更新(1-是 0-否)
            "created_at": "2020-05-08 05:47:19",
            "updated_at": "2020-05-08 05:47:19"
          }
        ],
        "first_page_url": "http://imeet.test/admin/version?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/version?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/version",
        "per_page": 15,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}
```


## 创建版本

`admin/versions`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   type       | string |  无  |  是  |    版本类型 0: android 1: ios           |
| version_name | string |  无  |  是  |          版本名称                       |
| version_code | string |  无  |  是  |          内部版本号                     |
| description  | string |  无  |  是  |          版本说明                       |
|     link     |   int  |  无  |  是  |          链接地址                       |
|   is_forced  |   int  |  无  |  是  |    是否强制更新 0：否 1：是              |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 设置版本控制状态

`admin/configs/status`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   status   | int |  无  |  是  |               开启状态：0：关闭  1：开启                     |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```

## 获取版本控制状态

`admin/configs/status`

**请求方法**

`GET`

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "status": true // 开启  false 关闭
    }
}
```

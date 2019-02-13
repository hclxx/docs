# 版本管理

## 获取版本管理状态

`/admin/app/version/control/status`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "status": false
}
```

**ERROR 返回体**

`无`

## 获取历史版本

`admin/app/version/history`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "type": "android", // 版本类型
      "version_name": "1.0.0", //版本名称
      "version_code": 1, //内部版本号
      "description": "dasdasdas", // 更新说明
      "link": "http://baidu.com", // 下载链接
      "is_forced": 0, // 是否强制更新
      "created_at": "2019-01-24 18:35:51",
      "updated_at": "2019-01-24 18:35:51"
    }
  ],
  "first_page_url": "http://comc.com/admin/app/version/history?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/app/version/history?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/app/version/history",
  "per_page": 15,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

**ERROR 返回体**

`无`

## 创建

`admin/app/version`

**请求方法**

`POST`

**请求参数**

|     名称     |  类型  | 默认 | 必须 |           说明           |
| :----------: | :----: | :--: | :--: | :----------------------: |
|     type     | string |  无  |  是  |         设备类型         |
| version_name | string |  无  |  是  |         版本名称         |
| description  | string |  无  |  否  |         更新说明         |
|     link     | string |  无  |  是  |         下载链接         |
|  is_forced   |  int   |  无  |  是  | 是否强制更新 0: 否 1: 是 |
| version_code |  int   |  无  |  是  |        内部版本号        |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功"
}
```

**ERROR 返回体**

```json
{
  "message": "客户端类型不能为空"
}
```

## 获取当前版本

`/admin/app/version/{android|ios}/current/`

**请求方法**

`POST`

**请求方法**

`无`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "id": 1,
  "type": 0,
  "version_name": "1.0.0",
  "version_code": 1,
  "description": "dasdasdas",
  "link": "http://baidu.com",
  "is_forced": 0,
  "created_at": "2019-01-24 18:35:51",
  "updated_at": "2019-01-24 18:35:51"
}
```

**ERROR 返回体**

`无`

## 修改版本控制状态

`/admin/app/version/control/status`

**请求方法**

`PUT`

**请求参数**

`无`

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "操作成功"
}
```

**ERROR 返回体**

`无`

## 删除

`admin/app//version/{id}`

**请求方式**

`DELETE`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

`无`

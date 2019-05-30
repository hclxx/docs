# 版本控制

## 获取最新版本

`api/v1/version/{android|ios}`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 1,
    "type": 0,
    "version_name": "v1.0.0" /*后台填写的版本*/,
    "version_code": 1 /*版本号，客户端对比该数字进行版本更新*/,
    "description": "123" /*更新说明*/,
    "link": "http://baidu.com" /*下载链接*/,
    "is_forced": 1 /*是否强制更新，0-非强制更新 1-强制更新*/,
    "created_at": "2019-02-18 17:38:04",
    "updated_at": "2019-02-18 17:38:05"
  }
}
```

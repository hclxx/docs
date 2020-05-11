# 版本

## 获取最新版本信息

`api/version/{type}`

**请求方法**

`GET`

**参数**

| 名称 |  类型  | 必须 |         说明         |
| :--: | :----: | :--: | :------------------: |
| type | string |  是  | 版本类型:android/ios |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 1,
    "version_name": "v1.0.0" /*后台填写的版本*/,
    "version_code": 1 /*版本号，客户端对比该数字进行版本更新*/,
    "description": "123" /*更新说明*/,
    "link": "http://baidu.com" /*下载链接*/,
    "is_forced": 1 /*是否强制更新，0-非强制更新 1-强制更新*/
  }
}
```

# 上传

## 上传凭证

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                         说明                          |
| :----: | :----: | :--: | :---------------------------------------------------: |
| policy | string |  是  | 上传策略，默认:default。 说明:default-图片/video-视频 |

**路径**

`/api/upload/token`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "token": "xxxxxxx"
  }
}
```

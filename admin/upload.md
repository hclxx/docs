# 文件管理

## 上传

**方式**

`POST`

**路径**

`/admin/upload`

**参数**

| 名称 | 类型 | 必须 | 说明 |
| :--: | :--: | :--: | :--: |
| file | file |  是  | 文件 |

**响应**

`Status code 200`

```json
{
  "filename": "fcc9effd7b645167633169bba4ee7651.jpeg", // 文件名
  "file_url": "http://p59l6s1jm.bkt.clouddn.com/fcc9effd7b645167633169bba4ee7651.jpeg", // 文件地址
  "file_id": 1 // 文件id
}
```

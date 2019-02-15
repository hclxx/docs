# 附件

## 附件上传

**方式**

`POST`

**路径**

`/api/v1/upload`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| file | file |  是  |  文件  |

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "filename": "070f5b55a5cc0ab08262746e0c46f0f2.jpeg",/*文件名称*/
        "file_url": "http://pm12qeuu3.bkt.clouddn.com/070f5b55a5cc0ab08262746e0c46f0f2.jpeg",/*文件链接*/
        "file_id": 23/*文件id*/
    }
}
```


# 系统配置

## 基础配置

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |

**路径**

`/api/config`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "cdn_domain": "http://img.chainwanjia.com",     
        "register_protocol": "这是正儿八经的注册协议",
        "start_version_control": true,
        "business": {/*商务合作*/
            "qq": "132",
            "email": "123@qq.com",
            "imeet": "60608333",
            "wechat": "1234556"
        }
    }
}
```


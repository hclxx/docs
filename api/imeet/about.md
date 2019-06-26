# 关于imeet

## 详情

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |              说明                          |
| :----: | :----: | :--: | :----------------------------------------------------------: |
| key | string |  是  |  about-关于 user:protocol:用户协议 contact-联系我们   |

**路径**

`/api/about`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "about": "this is about imeet"    //  关于imeet
    }
}
```

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "register": "这是用户协议"      //  用户协议
    }
}
```

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "tel": "123456",                 // 电话
        "work_time": "9.30-5.30"         // 工作时间
    }
}
```

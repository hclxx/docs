# 其他

## 意见反馈

**方式**

`POST`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| content | string |  是  | 反馈信息|
| contact | string |  否  | 联系方式 |

**路径**

`/api/feedbacks`

**响应**

`Status code 200`

```json
{
    "msg": "反馈成功",
    "code": 0,
    "data": null
}
```


## 商务合作

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |

**路径**

`/api/business`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "qq": "132",/*QQ号*/
        "email": "123@qq.com",/*邮箱*/
        "imeet": "60608333",/*链乎号*/
        "wechat": "1234556",/*微信号*/
    }
}
```


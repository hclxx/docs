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
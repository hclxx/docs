# 意见反馈

## 意见反馈

**方式**

`POST`

**路径**

`/api/v1/feedback`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| content | string |  是  |  内容  |
| contact | string |  否  | 联系人 |

**响应**

`Status code 200`

```json
{
  "msg": "反馈成功",
  "code": 0,
  "data": null
}
```

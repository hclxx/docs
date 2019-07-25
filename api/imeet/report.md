# 资源举报

## 添加举报

**方式**

`POST`

**路径**

`/api/report`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :----: |
| target_id | int |  是  | 目标ID |
| target_type | int |  是  | 目标类型,仅支持：dynamic-动态 user-用户 comment-评论 reply-回复 task-任务 user-用户 group-群组 |
| content | string |  是  | 举报内容说明 |
| contact | string |  否  | 联系方式 |

**响应**

`Status code 200`

```json
{
    "msg": "提交举报成功",
    "code": 0,
    "data": null
}
```

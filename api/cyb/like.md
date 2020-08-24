# 点赞

## 点赞

**方式**

`POST`

**路径**

`/api/likes`

**参数**

|    名称     |  类型  | 必须 |                          说明                          |
| :---------: | :----: | :--: | :----------------------------------------------------: |
|  target_id  |  int   |  否  |                        目标 ID                         |
| target_type | string |  是  | 类型:回复-like:reply/评论-like:comment/视频-like:video |

**响应**

`Status code 200`

```json
{
    "msg": "点赞成功",
    "code": 0,
    "data": null
```

## 取消点赞

**方式**

`DELETE`

**路径**

`/api/likes`

**参数**

|    名称     |  类型  | 必须 |                          说明                          |
| :---------: | :----: | :--: | :----------------------------------------------------: |
|  target_id  |  int   |  否  |                        目标 ID                         |
| target_type | string |  是  | 类型:回复-like:reply/评论-like:comment/视频-like:video |

**响应**

`Status code 200`

```json
{
    "msg": "点赞成功",
    "code": 0,
    "data": null
```

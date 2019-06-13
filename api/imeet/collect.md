# 收藏

## 收藏列表

**方式**

`POST`

**路径**

`/api/collects`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| limit | int |  是  |             条目数 默认20                      |
| offset | int |  是  |             偏移量                      |
| keywords | string |  是  |          关键词搜索                         |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 5,
            "keywords": "测试测试",
            "target_user_id": 3,
            "target_type": "text",
            "target_id": 0,
            "data": "测试测试",
            "created_at": "2019-06-13 18:18:40",
            "updated_at": "2019-06-13 18:18:40",
            "target_user": {
                "id": 3,
                "name": "asdas",
                "avatar": null
            }
        }
    ]
}
```

## 收藏资源

**方式**

`POST`

**路径**

`/api/collects`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| data | object |  是  |             收藏的内容                      |
| type | int |  是  |             收藏类型: dynamic-动态,image-图片,text-文本,chat-聊天记录,location-位置,video-视频,file-文件,link-连接                      |
| keywords | string |  是  |          关键词搜索                         |
| target_user | string |  是  |          目标用户                         |

**响应**

`Status code 200`

```json
{
    "msg": "收藏成功",
    "code": 0,
    "data": null
}
```

## 删除收藏

**方式**

`DELETE`

**路径**

`/api/collects/{id}`

**响应**

`Status code 200`

```json
{
    "msg": "收藏成功",
    "code": 0,
    "data": null
}
```
# 收藏

## 收藏列表

**方式**

`GET`

**路径**

`/api/collects`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| limit | int |  是  |             条目数 默认20                      |
| offset | int |  是  |             偏移量                      |
| keywords | string |  是  |          关键词搜索                         |
| type | string |  否  |             收藏类型: dynamic-动态,image-图片,text-文本|

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
| data | object or string |  是  |             收藏的内容                      |
| type | string |  是  |             收藏类型: dynamic-动态,image-图片,text-文本,chat-聊天记录,location-位置,video-视频,file-文件,link-连接                      |
| keywords | string |  是  |          关键词搜索                         |
| target_user | string |  是  |          目标用户                         |

**(data)参数说明**

`动态`

```json
data: {
    "id": 37,
    "user_id": 10,
    "content": "分享你的想法",
    "location": null,
    "images": [
        {
            "mime": "png",
            "width": "106",
            "height": "106",
            "filename": "20190617102734576.png"
        }
    ],
    "video": null,
    "type": 4,
    "comment_count": 0,
    "like_count": 1,
    "collect_count": 0,
    "created_at": "2019-06-17 02:28:04",
    "is_liked": false,
    "is_collected": false,
    "tags": [],
    "user": {
        "id": 10,
        "name": "V5G32O",
        "avatar": null,
        "sex": 0
    }
}
```

`图片`

data: "xxxxxx.png"

`文本`

data: "xxxxxxxxxxx"


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
    "msg": "取消收藏成功",
    "code": 0,
    "data": null
}
```
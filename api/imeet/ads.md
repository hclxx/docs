# 广告

## 广告位列表

**方式**

`GET`

**路径**

`/api/ad/pos`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*广告位ID*/
            "name": "APP-广场广告",
            "alias": "app:plaza:top"/*广告位标示*/
        },
        {
            "id": 2,
            "name": "APP-推荐广告",
            "alias": "app:recommend:top"/*广告位标示*/
        },
        {
            "id": 3,
            "name": "APP-广场任务广告",
            "alias": "app:plaza:task:top"/*广告位标示*/
        }
    ]
}
```

## 广告列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| pos_id | int |  是  |                 广告位id                |

**路径**

`/api/ad`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "image": "xxxxx",/*广告图地址*/
            "url": null,/*跳转目标*/
            "url_type": "0"/*跳转类型:0-静态广告仅做展示 1-外部则url字段为一个网页连接地址使用webview进行加载 2-内部连接 根绝规定进行跳转*/
        },
        {
            "id": 2,
            "image": "xxxxx",
            "url": "http://xxx.ads.com",
            "url_type": "1"
        },
        {
            "id": 3,
            "image": "xxxxx",
            "url": "dynamic|20",
            "url_type": "2"
        }
    ]
}
```


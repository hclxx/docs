# 广告

## 广告位

**方式**

`GET`

**路径**

`/api/v1/adspaces`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 1 /*广告位id*/,
      "space": "app:boot" /*广告位标示*/,
      "alias": "APP启动广告"
    },
    {
      "id": 2,
      "space": "app:comc:top",
      "alias": "APP-COMO兑换区顶部广告"
    },
    {
      "id": 3,
      "space": "app:comc:goods:list:top",
      "alias": "APP-COMO兑换区商品列表顶部广告"
    },
    {
      "id": 4,
      "space": "app:ore:top",
      "alias": "APP-矿石兑换区顶部广告"
    },
    {
      "id": 5,
      "space": "app:ore:goods:list:top",
      "alias": "APP-矿石兑换区商品列表顶部广告"
    }
  ]
}
```

## 广告列表

**方式**

`GET`

**路径**

`/api/v1/adspaces/{id}/ads`

**参数**

|  名称  |  类型  | 必须 |                                   说明                                    |
| :----: | :----: | :--: | :-----------------------------------------------------------------------: |
| id | int |  否  |                   专栏顶部广告[app:special:top] 需传 id                  |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "title": "",
      "image": "http://p59l6s1jm.bkt.clouddn.com/09e626788bc7cfec71d64fdbe36ea0e4.jpeg" /*广告图*/,
      "time": 0 /*时间单位秒,0-无限制*/,
      "link": "http://p59l6s1jm.bkt.clouddn.com/09e626788bc7cfec71d64fdbe36ea0e4.jpeg" /*跳转地址,null-无跳转*/,
      "link_type": "outside" /*outside-外部跳转, inside-内部跳转*/
    }
  ]
}
```

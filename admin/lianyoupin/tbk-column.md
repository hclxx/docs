# tbk爆品栏目

## 获取tbk首页栏目

`/admin/tbk/columns`

**请求方式**

`GET`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| cate | string  |  无  |  是  |        栏目分类(activity-活动,coupon-淘客券,column-栏目,special-专区)       |
| name     | string  |  无  |  否  |         栏目名称（支持模糊查询）         |
| status | int  |  无  |  否  |         状态:0-关闭 1-开启         |
| limit | int  |  无  |  是  |         当前页面展示数据条数         |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**


```json
{
    "current_page": 1,
    "data": [
        {
            "id": 7,
            "name": "乐淘券-必撸的券",
            "icon": null,
            "bg_img": "http:\/\/www.baidu.com",
            "bg_color": null,
            "pid": 0,
            "target_id": null,
            "ad_ids": null,
            "is_recommend": 0,
            "recommend_cover": null,
            "activity_desc":null,
            "type": "material",
            "cate": "coupon",
            "sort": 0,
            "status": 1,
            "is_delete": 0,
            "created_at": "2020-03-09 11:00:09",
            "updated_at": "2020-03-09 11:00:09"
        },
        {
            "id": 8,
            "name": "好券直播",/*栏目名称*/
            "icon": null,/*栏目图标*/
            "bg_img": "http:\/\/www.baidu.com",/*栏目背景图*/
            "bg_color": null,/*栏目背景色*/
            "pid": 7,/*栏目父级id*/
            "target_id": "123456",/*目标id 如：物料id, 活动id*/
            "ad_ids": "56,57,58",/*广告图 以,分割的字符串*/
            "is_recommend": 0,/*是否被推荐 0-否 1-是*/
            "recommend_cover": null,/*推荐活动封面图*/
            "activity_desc":null,/*活动描述*/
            "type": "material",/*栏目类型:library-选品库,material-物料,time-限时,activity-活动*/
            "cate": "coupon",/*栏目分类:activity-活动,coupon-淘客券,column-栏目,special-专区*/
            "sort": 10,/*排序*/
            "status": 1,/*状态:0-关闭 1-开启*/
            "is_delete": 0,/*删除状态:0-否 1-是*/
            "created_at": "2020-03-09 11:01:09",
            "updated_at": "2020-03-09 11:01:09",
            "ads": [/**/
                {
                    "id": 56,
                    "title": "广告图1",/*广告名称*/
                    "image": "http://szl.qingchuanren.com/ce1db341b42f18bdd1f12287ce19f028.jpg",/*广告图*/
                    "time": 0,/*广告持续时间*/
                    "link": "$Vnql12iI47e$",/*跳转链接*/
                    "link_type": "tbk",/*跳转类型:inside-外部 outside-内部 tbk-淘宝客*/
                    "space_id": 19,/*广告位id*/
                    "target_type": null,/*目标类型*/
                    "target_id": null,/*目标id*/
                    "sort": 123,/*排序*/
                    "start_time": null,/*有效期开始时间*/
                    "end_time": null,/*有效期结束时间*/
                    "created_at": "2020-01-15 18:55:51",
                    "updated_at": "2020-01-17 14:21:57"
                },
                {
                    "id": 57,
                    "title": "广告图2",
                    "image": "http:\/\/szl.qingchuanren.com\/7d0170b3454ffaed7b392fa2f310bf25.png",
                    "time": 0,
                    "link": "tbk|4",
                    "link_type": "inside",
                    "space_id": 19,
                    "target_type": null,
                    "target_id": null,
                    "sort": 0,
                    "is_delete": 0,
                    "browse_count": 0,
                    "start_time": null,
                    "end_time": null,
                    "created_at": "2020-01-08 10:04:59",
                    "updated_at": "2020-01-15 11:07:24"
                },
                {
                    "id": 58,
                    "title": "广告图3",
                    "image": "http:\/\/szl.qingchuanren.com\/99b21fd7b283a79e7fa2c2910d9e11b4.jpg",
                    "time": 0,
                    "link": "http:\/\/www.baidu.com",
                    "link_type": "outside",
                    "space_id": 19,
                    "target_type": null,
                    "target_id": null,
                    "sort": 0,
                    "is_delete": 0,
                    "browse_count": 0,
                    "start_time": "2019-11-20 00:00:00",
                    "end_time": "2019-11-23 00:00:00",
                    "created_at": "2019-11-20 16:00:59",
                    "updated_at": "2019-11-21 15:47:42"
                }
            ]
        },
        {
            "id": 9,
            "name": "品牌券",
            "icon": null,
            "bg_img": "http:\/\/www.baidu.com",
            "bg_color": null,
            "pid": 7,
            "target_id": "123456",
            "ad_ids": "56,57,58",
            "is_recommend": 0,
            "recommend_cover": null,
            "type": "material",
            "cate": "coupon",
            "sort": 9,
            "status": 1,
            "is_delete": 0,
            "created_at": "2020-03-09 11:02:39",
            "updated_at": "2020-03-09 11:02:39",
            "ads": [
                {
                    "id": 56,
                    "title": "广告图1",
                    "image": "http:\/\/szl.qingchuanren.com\/ce1db341b42f18bdd1f12287ce19f028.jpg",
                    "time": 0,
                    "link": "$Vnql12iI47e$",
                    "link_type": "tbk",
                    "space_id": 19,
                    "target_type": null,
                    "target_id": null,
                    "sort": 123,
                    "is_delete": 0,
                    "browse_count": 6,
                    "start_time": null,
                    "end_time": null,
                    "created_at": "2020-01-15 18:55:51",
                    "updated_at": "2020-01-17 14:21:57"
                },
                {
                    "id": 57,
                    "title": "广告图2",
                    "image": "http:\/\/szl.qingchuanren.com\/7d0170b3454ffaed7b392fa2f310bf25.png",
                    "time": 0,
                    "link": "tbk|4",
                    "link_type": "inside",
                    "space_id": 19,
                    "target_type": null,
                    "target_id": null,
                    "sort": 0,
                    "is_delete": 0,
                    "browse_count": 0,
                    "start_time": null,
                    "end_time": null,
                    "created_at": "2020-01-08 10:04:59",
                    "updated_at": "2020-01-15 11:07:24"
                },
                {
                    "id": 58,
                    "title": "广告图3",
                    "image": "http:\/\/szl.qingchuanren.com\/99b21fd7b283a79e7fa2c2910d9e11b4.jpg",
                    "time": 0,
                    "link": "http:\/\/www.baidu.com",
                    "link_type": "outside",
                    "space_id": 19,
                    "target_type": null,
                    "target_id": null,
                    "sort": 0,
                    "is_delete": 0,
                    "browse_count": 0,
                    "start_time": "2019-11-20 00:00:00",
                    "end_time": "2019-11-23 00:00:00",
                    "created_at": "2019-11-20 16:00:59",
                    "updated_at": "2019-11-21 15:47:42"
                }
            ]
        }
    ],
    "first_page_url": "http:\/\/mall-admin.name\/admin\/tbk\/columns?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http:\/\/mall-admin.name\/admin\/tbk\/columns?page=1",
    "next_page_url": null,
    "path": "http:\/\/mall-admin.name\/admin\/tbk\/columns",
    "per_page": 20,
    "prev_page_url": null,
    "to": 3,
    "total": 3
}
```

## 创建tbk首页栏目

`/admin/tbk/columns`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| name | string  |  无  |  是  |         栏目名称        |
| icon | string  |  无  |  否  |         栏目图标        |
| bg_img | string  |  无  |  否  |         栏目背景图       |
| bg_color | string  |  无  |  否  |         栏目背景颜色        |
| pid | int  |  无  |  否  |         栏目父级 0-顶级        |
| target_id | int  |  无  |  否  |         所属目标ID        |
| ad_ids | string  |  无  |  否  |         所关联的广告:多个以","分割(1,2,3)        |
| activity_desc | string  |  无  |  否  |      活动描述       |
| type | string  |  无  |  是  |      栏目类型:library-选品库,material-物料,time-限时,activity-活动  |
| cate | string |  无  |  是  | 栏目分类:activity-活动,coupon-淘客券,column-栏目,special-专区 |
| sort | int |  无  |  否  | 排序数值越大排序越靠前 |

### keys 说明:

- ad_ids 需要通过原广告列表获取  "space=`app:bomb:any`"

- 除name、type、cate必传字段以外，
- 当cate=column 顶级栏目icon必传 子集栏目icon非必传 type=material/activity target_id必传
- 当cate=activity 顶级栏目bg_img/bg_color必传 子集栏目icon(首页图标)/bg_img(中转页面背景图)/desc(中转界面活动描述)/target_id/bg_color必传
- 当cate=coupon 顶级栏目bg_img必传 子集栏目 bg_img/bg_color/target_id/ad_ids必传
- 当cate=special bg_img/target_id/ad_ids必传

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功",
}
```

## 修改tbk首页栏目

`/admin/tbk/columns/{column}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| name | string  |  无  |  否  |         栏目名称        |
| icon | string  |  无  |  否  |         栏目图标        |
| bg_img | string  |  无  |  否  |         栏目背景图       |
| bg_color | string  |  无  |  否  |         栏目背景颜色        |
| pid | int  |  无  |  否  |         栏目父级 0-顶级        |
| target_id | int  |  无  |  否  |         所属目标ID        |
| ad_ids | string  |  无  |  否  |  所关联的广告:多个以","分割(1,2,3)  需要通过原广告列表获取  "space=`app:bomb:any`"        |
| activity_desc | string  |  无  |  否  |      活动描述       |
| type | string  |  无  |  否  |      栏目类型:library-选品库,material-物料,time-限时,activity-活动  |
| cate | string |  无  |  否  | 栏目分类:activity-活动,coupon-淘客券,column-栏目,special-专区 |
| sort | int |  无  |  否  | 排序数值越大排序越靠前 |

### keys 说明:

- ad_ids 需要通过原广告列表获取  "space=`app:bomb:any`"

- 除name、type、cate必传字段以外，
- 当cate=column 顶级栏目icon必传 子集栏目icon非必传 type=material/activity target_id必传
- 当cate=activity 顶级栏目bg_img/bg_color必传 子集栏目icon(首页图标)/bg_img(中转页面背景图)/desc(中转界面活动描述)/target_id/bg_color必传
- 当cate=coupon 顶级栏目bg_img必传 子集栏目 bg_img/bg_color/target_id/ad_ids必传
- 当cate=special bg_img/target_id/ad_ids必传

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功",
}
```

## 删除tbk首页栏目

`/admin/tbk/columns/{column}`

**请求方式**

`DELETE`

**请求参数**

无

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

无

## 设置/取消推荐活动

`/admin/tbk/columns/{column}/recommend`

**请求方式**

`PATCH`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| recommend_status | int  |  无  |  是  |      推荐活动状态 0-取消推荐 1-推荐  |
| recommend_cover | string  |  无  |  否  |      推荐活动封面图(当设置为推荐状态时必传 取消推荐不传)  |


**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "设置成功",
}
```

## 设置开启/关闭状态

`/admin/tbk/columns/{column}/status`

**请求方式**

`PATCH`

**请求参数**

无

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "设置成功",
}
```

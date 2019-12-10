# 淘宝客

## 分组列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |                  说明                   |
| :----: | :----: | :--: | :-------------------------------------: |
| client | string |  是  | 推广位客户端类型: android-安卓 ios-苹果 |

**路径**

`/api/v1/taobaoke/favorites`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "favorites_id": "20065676" /*选品库id*/,
      "favorites_title": "特卖" /*选品组名称*/,
      "type": "1" /*选品库类型，1：普通类型，2高佣金类型*/
    }
  ]
}
```

## 商品列表

**方式**

`GET`

**路径**

`/api/v1/taobaoke/favorites/items`

**参数**

|     名称     |  类型  | 必须 |                  说明                   |
| :----------: | :----: | :--: | :-------------------------------------: |
|    client    | string |  是  | 推广位客户端类型: android-安卓 ios-苹果 |
|  page_size   |  int   |  是  |             条目数 默认 20              |
|   page_no    |  int   |  是  |               页码 默认 1               |
| favorites_id |  int   |  是  |                  组 id                  |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "event_end_time": "1970-01-01 00:00:00",/*招商活动开始时间；如果该宝贝取自普通选品组，则取值为1970-01-01 00:00:00；*/
            "event_start_time": "1970-01-01 00:00:00",/*招行活动的结束时间；如果该宝贝取自普通的选品组，则取值为1970-01-01 00:00:00*/
            "item_url": "http://item.taobao.com/item.htm?id=42033204746",/*商品地址*/
            "nick": "凯易为家居专营店",/*卖家昵称*/
            "num_iid": "42033204746",/*商品ID*/
            "pict_url": "https://img.alicdn.com/tfscom/i1/660750378/O1CN01WzWy4P1EfAHyUBrj9_!!660750378-0-pixelsss.jpg",/*商品主图*/
            "provcity": "天津",/*宝贝所在地*/
            "reserve_price": "198.00",/*商品一口价格*/
            "seller_id": "660750378",/*卖家id*/
            "shop_title": "凯易为家居专营店",
            "small_images": {
                "string": "https://img.alicdn.com/tfscom/i2/660750378/O1CN01FwqS5p1EfAGU6Rx3E_!!660750378.jpg"/*商品小图列表*/
            },
            "status": "1",/*宝贝状态，0失效，1有效；注：失效可能是宝贝已经下线或者是被处罚不能在进行推广*/
            "title": "hellokitty拼装积木旋转木马益智女孩公主樂高玩具儿童圣诞礼物",/*商品标题*/
            "tk_rate": "3.03",/*收入比例，举例，取值为20.00，表示比例20.00%*/
            "type": "4",/*宝贝类型：1 普通商品； 2 鹊桥高佣金商品；3 定向招商商品；4 营销计划商品;*/
            "user_type": "1",/*卖家类型，0表示集市，1表示商城*/
            "volume": "69",/*30天销量*/
            "zk_final_price": "99.00",/*商品折扣价格*/
            "zk_final_price_wap": "99.00",/*无线折扣价，即宝贝在无线上的实际售卖价格。*/
            "click_url": "https://s.click.taobao.com/t?asdasd",/*淘客地址*/,
      "coupon_click_url": "https://uland.taobao.com/coupon/edetail?e=123123",/*商品优惠券推广链接*/
            "coupon_end_time": "2019-12-11",/*优惠券结束时间*/
            "coupon_info": "满3元减2元",/*优惠券面额*/
            "coupon_remain_count": "4500",/*优惠券剩余量*/
            "coupon_start_time": "2019-12-03",/*优惠券开始时间*/
            "coupon_total_count": "10000",/*优惠券总量*/
        }
    ]
}
```

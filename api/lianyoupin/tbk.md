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
      "event_end_time": "1970-01-01 00:00:00" /*招商活动开始时间；如果该宝贝取自普通选品组，则取值为1970-01-01 00:00:00；*/,
      "event_start_time": "1970-01-01 00:00:00" /*招行活动的结束时间；如果该宝贝取自普通的选品组，则取值为1970-01-01 00:00:00*/,
      "item_url": "http://item.taobao.com/item.htm?id=42033204746" /*商品地址*/,
      "nick": "凯易为家居专营店" /*卖家昵称*/,
      "num_iid": "42033204746" /*商品ID*/,
      "pict_url": "https://img.alicdn.com/tfscom/i1/660750378/O1CN01WzWy4P1EfAHyUBrj9_!!660750378-0-pixelsss.jpg" /*商品主图*/,
      "provcity": "天津" /*宝贝所在地*/,
      "reserve_price": "198.00" /*商品一口价格*/,
      "seller_id": "660750378" /*卖家id*/,
      "shop_title": "凯易为家居专营店",
      "small_images": {
        "string": "https://img.alicdn.com/tfscom/i2/660750378/O1CN01FwqS5p1EfAGU6Rx3E_!!660750378.jpg" /*商品小图列表*/
      },
      "status": "1" /*宝贝状态，0失效，1有效；注：失效可能是宝贝已经下线或者是被处罚不能在进行推广*/,
      "title": "hellokitty拼装积木旋转木马益智女孩公主樂高玩具儿童圣诞礼物" /*商品标题*/,
      "tk_rate": "3.03" /*收入比例，举例，取值为20.00，表示比例20.00%*/,
      "type": "4" /*宝贝类型：1 普通商品； 2 鹊桥高佣金商品；3 定向招商商品；4 营销计划商品;*/,
      "user_type": "1" /*卖家类型，0表示集市，1表示商城*/,
      "volume": "69" /*30天销量*/,
      "zk_final_price": "99.00" /*商品折扣价格*/,
      "zk_final_price_wap": "99.00" /*无线折扣价，即宝贝在无线上的实际售卖价格。*/,
      "click_url": "https://s.click.taobao.com/t?asdasd" /*淘客地址*/,
      "coupon_click_url": "https://uland.taobao.com/coupon/edetail?e=123123" /*商品优惠券推广链接*/,
      "coupon_end_time": "2019-12-11" /*优惠券结束时间*/,
      "coupon_info": "满3元减2元" /*优惠券面额*/,
      "coupon_remain_count": "4500" /*优惠券剩余量*/,
      "coupon_start_time": "2019-12-03" /*优惠券开始时间*/,
      "coupon_total_count": "10000" /*优惠券总量*/
    }
  ]
}
```

## 商品检索

**方式**

`GET`

**路径**

`/api/v1/taobaoke/goods/query`

**参数**

|   名称    |  类型  | 必须 |                  说明                   |
| :-------: | :----: | :--: | :-------------------------------------: |
|  client   | string |  是  | 推广位客户端类型: android-安卓 ios-苹果 |
| page_size |  int   |  是  |             条目数 默认 20              |
|  page_no  |  int   |  是  |               页码 默认 1               |
|     q     |  int   |  是  |               搜索关键词                |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "category_id": "50008628" /*商品信息-叶子类目id*/,
      "category_name": "兔肉干/兔丁" /*商品信息-叶子类目名称*/,
      "commission_rate": "300" /*商品信息-佣金比率。1550表示15.5%*/,
      "commission_type": "MKT" /*商品信息-佣金类型。MKT表示营销计划，SP表示定向计划，COMMON表示通用计划*/,
      "coupon_amount": "2" /*优惠券（元） 若属于预售商品，该优惠券付尾款可用，付定金不可用*/,
      "coupon_end_time": "2019-12-20" /*优惠券信息-优惠券结束时间*/,
      "coupon_id": "d2c0c7fc90db421292548bd255958e8b" /*优惠券信息-优惠券id*/,
      "coupon_info": "满24.00元减2元" /*优惠券信息-优惠券满减信息*/,
      "coupon_remain_count": "4993" /*优惠券信息-优惠券剩余量*/,
      "coupon_share_url": "xxxxxx" /*链接-宝贝+券二合一页面链接*/,
      "coupon_start_fee": "24.00" /*优惠券信息-优惠券起用门槛，满X元可用。如：满299元减20元*/,
      "coupon_start_time": "2019-12-13" /*优惠券信息-优惠券开始时间*/,
      "coupon_total_count": "5000" /*优惠券信息-优惠券总量*/,
      "include_dxjh": "true" /*商品信息-是否包含定向计划*/,
      "include_mkt": "true" /*商品信息-是否包含营销计划*/,
      "info_dxjh": "{}" /*商品信息-定向计划信息*/,
      "item_description": "1袋3个兔头，麻辣、五香可选" /*商品信息-宝贝描述(推荐理由)*/,
      "item_id": "531944772894" /*商品信息-宝贝id*/,
      "item_url": "https://detail.tmall.com/item.htm?id=531944772894" /*链接-宝贝地址*/,
      "level_one_category_id": "50002766" /*商品信息-一级类目ID*/,
      "level_one_category_name": "零食/坚果/特产" /*商品信息-一级类目名称*/,
      "nick": "川香蜀汇食品专营店" /*店铺信息-卖家昵称*/,
      "num_iid": "531944772894" /*商品信息-宝贝id(该字段废弃，请勿再用)*/,
      "pict_url": "https://img.alicdn.com/bao/uploaded/i1/2132494498/O1CN01EUTHQ41j683tPkpke_!!0-item_pic.jpg" /*商品信息-商品主图*/,
      "provcity": "四川 成都" /*商品信息-宝贝所在地*/,
      "real_post_fee": "0.00" /*商品邮费*/,
      "reserve_price": "73.5" /*商品信息-商品一口价格*/,
      "seller_id": "2132494498" /*店铺信息-卖家id*/,
      "shop_dsr": "48472" /*店铺信息-店铺dsr评分*/,
      "shop_title": "川香蜀汇食品专营店" /*店铺信息-店铺名称*/,
      "short_title": "四川成都特产蜀粹坊双流兔头礼包" /*商品信息-商品短标题*/,
      "small_images": {
        "string": "https://img.alicdn.com/i3/2132494498/TB2k9pGAJ0opuFjSZFxXXaDNVXa_!!2132494498.jpg" /*商品信息-商品小图列表*/
      },
      "title": "四川成都特产蜀粹坊双流兔头268克麻辣五香味礼包零食冷吃兔脑壳" /*商品信息-商品标题*/,
      "tk_total_commi": "30.59" /*商品信息-月支出佣金(该字段废弃，请勿再用)*/,
      "tk_total_sales": "7" /*商品信息-淘客30天推广量*/,
      "url": "//s.click.taobao.com/t?asdasd" /*链接-宝贝推广链接*/,
      "user_type": "1" /*店铺信息-卖家类型。0表示集市，1表示天猫*/,
      "volume": "37" /*商品信息-30天销量*/,
      "white_image": "https://img.alicdn.com/bao/uploaded/TB1sKzrVmrqK1RjSZK9XXXyypXa.png" /*商品信息-商品白底图*/,
      "x_id": "EDmKlOIgryBp0tcqnBO9vrESV73KkUCcblZbmHY8kXr6L5MukrLuN6bypZxHSNnaLVpyMxrMQ1hQbU3Slc1DYG" /*链接-物料块id(测试中请勿使用)*/,
      "zk_final_price": "36.8" /*折扣价（元） 若属于预售商品，付定金时间内，折扣价=预售价*/
    }
  ]
}
```
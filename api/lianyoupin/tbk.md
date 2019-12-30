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

## 商品详情

**方式**

`GET`

**路径**

`/api/v1/taobaoke/goods/detail`

**参数**

|   名称   |  类型  | 必须 |               说明               |
| :------: | :----: | :--: | :------------------------------: |
|   para   | string |  是  | 商品 ID，商品列表中的 `num_iid`  |
| shoptype | string |  是  | 店铺类型:B-天猫 C-淘宝，必须大写 |

**shoptype 说明**

商品列表中 当 `user_type` 值为 0 表示是淘宝商品，对应 `shoptype=C`

商品列表中 如果 `user_type` 值为 1 表示天猫商城，则 `shoptype=B`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "item_detail": [
      "http://img.alicdn.com/imgextra/i1/1653945210/O1CN01nR58N51oME30nhnP9_!!1653945210.jpg" /*商品详情图片集合 没有则为空数组*/
    ],
    "video": [
      "http://img.alicdn.com/imgextra/i1/1653945210/O1CN01nR58N51oME30nhnP9_!!1653945210.jpg" /*商品详情视频集合 没有则为空数组*/
    ]
  }
}
```

## 通用转链

**方式**

`GET`

**路径**

`/api/v1/taobaoke/tbkl/exchange`

**参数**

|  名称  |  类型  | 必须 |                              说明                              |
| :----: | :----: | :--: | :------------------------------------------------------------: |
|  para  | string |  是  |              支持产品 ID 或淘口令或链接等各种参数              |
| detail | string |  否  | 是否需要商品详情信息包含(主图、标题等信息) 1-需要 不需要则不传 |
| client | string |  是  |                    客户端标识：android，ios                    |

**para 说明**

（1）淘宝产品 id：比如 557662422568 或直接产品链接 //item.taobao.com/item.htm?id=...

（2）二合一链接：比如 https://uland.taobao.com/coupon/edetail?e=...

（3）s.click.taobao.com 长和短链接，比如 https://s.click.taobao.com/M9CMYLw

（4）天猫的喵口令 如 http://zmnxbc.com/s/YJk6Z

（5）手淘 APP 的分享链接：http://m.tb.cn/h.WDXp8bv

（6）别人的淘口令：如 ￥ 40pM0yyztET ￥，或手淘分享链接文本直接传参数。

（7）新浪短网址，百度短网址封装的淘宝链接：http://t.cn/E6jP2DJ

（8）其它十几种不常见的淘客链接，如淘小铺、以及多类型的点击串解析：如 $j5WW1aZsqQi$

（9）手淘上分享的内容直接做参数传参数。 如：

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "category_id": "50016349" /*商品信息-叶子类目id*/,
    "coupon_click_url": "https://uland.taobao.com/coupon/edetail?asdasd" /*商品优惠券推广链接*/,
    "coupon_end_time": "2019-12-30" /*优惠券结束时间*/,
    "coupon_info": "满11元减10元" /*优惠券面额*/,
    "coupon_remain_count": "99876" /*优惠券剩余量*/,
    "coupon_start_time": "2019-12-23" /*优惠券开始时间*/,
    "coupon_total_count": "100000" /*优惠券总量*/,
    "coupon_type": "3",
    "commission_rate": "6.00" /*商品信息-佣金比率。1550表示15.5%*/,
    "num_iid": "597268451113" /*商品ID*/,
    "zk_final_price": "18.9" /*商品折扣价格*/,
    "volume": "320" /*30天销量*/,
    "user_type": "0" /*卖家类型，0表示集市，1表示商城*/,
    "tmall_play_activity_start_time": "0",
    "tmall_play_activity_end_time": "0",
    "title": "【防烫夹+取碗器】厨房夹盘器防烫夹取碗夹菜蒸夹端提盘子碟夹子0" /*商品标题*/,
    "small_images": [
      "https://img.alicdn.com/i4/1653945210/O1CN01skUhyI1oME3A49OXj_!!1653945210.jpg" /*商品小图列表*/,
      "https://img.alicdn.com/i2/1653945210/O1CN012SiQJv1oME30UgTZp_!!1653945210.jpg",
      "https://img.alicdn.com/i1/1653945210/O1CN01YBvYLe1oME4OrcYO9_!!1653945210.jpg",
      "https://img.alicdn.com/i4/1653945210/O1CN01qMyeEH1oME4NL4UvT_!!1653945210.jpg"
    ],
    "seller_id": "1653945210",
    "reserve_price": "18.9" /*商品一口价格*/,
    "presale_tail_start_time": "0",
    "presale_tail_end_time": "0",
    "presale_start_time": "0",
    "presale_end_time": "0",
    "presale_deposit": "0",
    "pict_url": "https://img.alicdn.com/bao/uploaded/i3/1653945210/O1CN017EVULL1oME4Km79fP_!!1653945210.jpg" /*商品主图*/,
    "nick": "瞬间心动的多情喵" /*卖家昵称*/,
    "item_url": "https://item.taobao.com/item.htm?id=597268451113" /*商品地址*/,
    "cat_name": "厨房/烹饪用具",
    "cat_leaf_name": "微波炉手套",
    "tbk_pwd": "￥adkd10YkmYQ￥" /*淘口令*/,
    "coupon_short_url": "https://s.click.taobao.com/iose5sv" /*优惠卷短链接*/
  }
}
```

## 收入信息

**方式**

`GET`

**路径**

`/api/v1/taobaoke/wallet`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "wait": "0.00" /*即将到账*/,
    "income": "0.00" /*累积到账*/
  }
}
```

## 订单列表

**方式**

`GET`

**路径**

`/api/v1/taobaoke/orders`

**参数**

|  名称  |  类型  | 必须 |                                  说明                                  |
| :----: | :----: | :--: | :--------------------------------------------------------------------: |
| limit  |  int   |  是  |                                 条目数                                 |
| offset |  int   |  是  |                                 偏移量                                 |
| status | string |  是  | `wait`-即将到账、 `invalid`-无效、 `arrive`-已到账、 全部不传 `status` |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "pub_share_pre_fee": "0.05" /*佣金金额:订单结算前使用*/,
      "pub_share_fee": "0.00" /*佣金金额:订单结算后使用*/,
      "tk_status": 12 /*12-付款，13-关闭，14-确认收货，3-结算成功;*/,
      "item_link": "http://item.taobao.com/item.htm?id=600076287632" /*商品地址*/,
      "item_id": "600076287632" /*商品id*/,
      "item_title": "加厚塑料面包箱收纳大方盘浅盘子长方形白色食品盘面包盆豆腐盒" /*商品名称*/,
      "tb_paid_time": "2019-12-26 14:05:46" /*商品下单时间*/,
      "item_num": 1 /*购买数量*/,
      "item_price": "10" /*商品单价，总价 item_num * item_price*/,
      "item_img": "//img.alicdn.com/bao/uploaded/i4/2201050586712/O1CN01jEjRFQ1zS8wWIanI4_!!0-item_pic.jpg" /*商品图地址*/,
      "id": 1 /*订单id*/
    }
  ]
}
```

## 订单删除

**方式**

`DELETE`

**路径**

`/api/v1/taobaoke/orders/{id}`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 结账规则

**方式**

`GET`

**路径**

`/api/v1/taobaoke/rule`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "notice": "注意：测试文档" /*规则注意*/,
    "content": "注意：测试文档注意：测试文档注意：测试文档注意：测试文档注意：测试文档" /*规则内容*/
  }
}
```

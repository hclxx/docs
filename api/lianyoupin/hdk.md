# 好单库

## 获取热门搜索

**方式**

`GET`

**参数**

无

**路径**

`/api/v1/taobaoke/hot/search`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "keyword": "洗手液" /*string 关键词*/
    }
  ]
}
```

## 今日热卖

**方式**

`GET`

**参数**

无

**路径**

`/api/v1/taobaoke/today/hots`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "product_id": "16085948" /*产品ID*/,
      "itemid": "601328272323" /*宝贝ID*/,
      "seller_id": "10317" /*seller_id*/,
      "itemtitle": "【阡陌花开】网红麦芽夹心饼干咸蛋黄味办公室休闲早餐代餐小零食" /*宝贝标题*/,
      "itemshorttitle": "【阡陌花开】蛋黄夹心饼干5大包" /*宝贝短标题*/,
      "itemdesc": "【拍5件】网红爆款夹心饼干！7种口味，都好吃！咸蛋黄的香味和饼干的奶香融合，脆脆香香，有嚼劲不沾牙~" /*宝贝推荐语*/,
      "itemprice": "40.00" /*在售价*/,
      "itemsale": "29300" /*宝贝月销量*/,
      "itemsale2": "595" /*宝贝近2小时跑单*/,
      "todaysale": "980" /*当天销量*/,
      "itempic": "http://img.alicdn.com/imgextra/i4/2206493921352/O1CN01gNGUWL1LrG2US1Art_!!2206493921352.jpg" /*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/,
      "itempic_copy": "0_601328272323_1577267571.jpg" /*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/,
      "fqcat": "11" /*商品类目：
1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物*/,
      "itemendprice": "16.88" /*宝贝券后价*/,
      "shoptype": "B" /*店铺类型：天猫（B）淘宝店（C）*/,
      "tktype": "营销计划" /*佣金计划：隐藏 营销*/,
      "tkrates": "50.00" /*佣金比例*/,
      "cuntao": "1",
      "tkmoney": "8.44" /*预计可得（宝贝价格 * 佣金比例 / 100）*/,
      "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2206493921352&activityId=24434122e89f42a193cf39e3f408d0e0" /*优惠券链接*/,
      "couponmoney": "10" /*优惠券金额*/,
      "couponsurplus": "98692" /*优惠券剩余量*/,
      "couponreceive": "1308" /*优惠券领取量*/,
      "couponreceive2": "0" /*当天优惠券领取量*/,
      "todaycouponreceive": "1308" /*今日优惠券领取量*/,
      "couponnum": "100000" /*优惠券总数量*/,
      "couponexplain": "单笔满30.0元可用" /*优惠券使用条件*/,
      "couponstarttime": "1584633600" /*优惠券开始时间*/,
      "couponendtime": "1584806399" /*优惠券结束时间*/,
      "start_time": "1584633600" /*活动开始时间*/,
      "end_time": "1584806399" /*活动结束时间*/,
      "starttime": "1584633600" /*发布时间*/,
      "isquality": null /*举报处理条件 0未举报 1为待处理 2为忽略 3为下架*/,
      "report_status": "0",
      "is_brand": "0" /*是否为品牌产品：1为是*/,
      "is_live": "0" /*是否为直播产品：1为是*/,
      "guide_article": "【拍5件】网红爆款夹心饼干！7种口味，都好吃！咸蛋黄的香味和饼干的奶香融合，脆脆香香，有嚼劲不沾牙~" /*推广导购文案*/,
      "videoid": "0" /*商品视频ID（id大于0的为有视频单，视频拼接地址  http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/+videoid+.mp4）*/,
      "activity_type": "普通活动" /*活动类型 普通活动 聚划算 淘抢购*/,
      "general_index": "358" /*好单指数*/,
      "planlink": null /*营销计划链接*/,
      "seller_name": "唐朝联盟" /*放单人名号*/,
      "userid": "2206493921352" /*店主的userid*/,
      "sellernick": "阡陌花开食品旗舰店" /*店铺掌柜名*/,
      "shopname": "阡陌花开食品旗舰店",
      "online_users": "0",
      "original_img": "",
      "original_article": "",
      "discount": "7.50" /*折扣力度*/,
      "is_explosion": "1",
      "me": null,
      "activityid": "24434122e89f42a193cf39e3f408d0e0",
      "coupon_condition": "30.00",
      "taobao_image": "http://img.alicdn.com/imgextra/i2/2206493921352/O1CN01UybBWF1LrG3sJOzLS_!!2206493921352.jpg,http://img.alicdn.com/imgextra/i4/2206493921352/O1CN01lnoefp1LrG3nV2fq2_!!2206493921352.jpg,http://img.alicdn.com/imgextra/i2/2206493921352/O1CN01zvYikA1LrG3gA69I8_!!2206493921352.jpg,http://img.alicdn.com/imgextra/i4/2206493921352/O1CN01gNGUWL1LrG2US1Art_!!2206493921352.jpg,http://img.alicdn.com/imgextra/i1/2206493921352/O1CN01i9ynCf1LrG2U0Y6gj_!!2206493921352.jpg" /*商品图集合*/,
      "shopid": "472702786",
      "son_category": "124304001",
      "down_type": "0",
      "deposit": "0.00" /*双十一定金*/,
      "deposit_deduct": "0.00" /*双十一定金抵扣金额*/,
      "ysyl_tlj_face": "0.00",
      "is_shipping": "-1",
      "presale_start_time": 0,
      "presale_end_time": 0,
      "presale_tail_start_time": 0,
      "presale_tail_end_time": 0
    }
  ]
}
```

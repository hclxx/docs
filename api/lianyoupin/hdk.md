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

## 精选低价包邮专区

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  type  | int  |  是  | 类型：1.精选专区；2. 9.9专区；3. 6.9专区；4. 3.9专区 |
|  order  | int  |  是  | 自定义排序 1.综合；2.券后价从高到低；3.券后价从低到高；4.销量从高到低；5.销量价从低到高 |
|  min_id  | int  |  是  | 当前页码的参数值 |

**路径**

`/api/v1/taobaoke/lowprice/pinkage`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "product_id": "16115602",/*产品ID*/
                "itemid": "613109852972",/*宝贝ID*/
                "seller_id": "16488",/*放单人ID*/
                "itemtitle": "【试听后赠杂志】编程猫零基础少儿编程体验课 锻炼逻辑思维能力",/*宝贝标题*/
                "itemshorttitle": "少儿编程体验课免费送编程书",/*宝贝短标题*/
                "itemdesc": "【零基础可学，听课后免费发教程书一本】3.0课程体系从幼儿到高中全覆盖，联合百校名师研制，打造终身学习体系，孩子学编程，越学越聪明，学习更自信。1元体验编程课，划算！！上课赠送书籍一本！！！",/*宝贝推荐语*/
                "itemprice": "3.00",/*在售价*/
                "itemsale": "80",/*宝贝月销量*/
                "itemsale2": "1",/*宝贝近2小时跑单*/
                "todaysale": "0",/*当天销量*/
                "itempic": "https://img.alicdn.com/imgextra/i2/4035220278/O1CN01gvuBQN1DvMgsBKwpm_!!4035220278.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                "itempic_copy": "0_613109852972_1584754381.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                "fqcat": "14",/*商品类目：
1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物*/
                "itemendprice": "1.00",/*宝贝券后价*/
                "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                "tktype": "营销计划",/*佣金计划：隐藏 营销*/
                "tkrates": "90.00",/*佣金比例*/
                "cuntao": "1",/**/
                "tkmoney": "0.90",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=4035220278&activityId=bca426872dab405ab1c133a5484625ac",/*优惠券链接*/
                "couponmoney": "2",/*优惠券金额*/
                "couponsurplus": "9867",/*优惠券剩余量*/
                "couponreceive": "133",/*优惠券领取量*/
                "couponreceive2": "0",/*2小时内优惠券领取量*/
                "todaycouponreceive": "88",/*今日优惠券领取量*/
                "couponnum": "10000",/*优惠券总数量*/
                "couponexplain": "单笔满3.0元可用",/*优惠券使用条件*/
                "couponstarttime": "1584720000",/*优惠券开始时间*/
                "couponendtime": "1585324799",/*优惠券结束时间*/
                "start_time": "1584752400",/*活动开始时间*/
                "end_time": "1585324799",/*活动结束时间*/
                "starttime": "1584752400",/*发布时间*/
                "isquality": null,/**/
                "report_status": "0",/*举报处理条件 0未举报 1为待处理 2为忽略 3为下架*/
                "is_brand": "0",/*是否为品牌产品（1是）*/
                "is_live": "0",/*是否为直播产品（1是）*/
                "guide_article": "【零基础可学，听课后免费发教程书一本】3.0课程体系从幼儿到高中全覆盖，联合百校名师研制，打造终身学习体系，孩子学编程，越学越聪明，学习更自信。1元体验编程课，划算！！上课赠送书籍一本！！！",/*推广导购文案*/
                "videoid": "0",/*商品视频ID（id大于0的为有视频单，视频拼接地址http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/+videoid+.mp4）*/
                "activity_type": "普通活动",/*活动类型： 普通活动 聚划算 淘抢购*/
                "general_index": "134",/*好单指数*/
                "planlink": null,/*营销计划链接*/
                "seller_name": "帮购精品联盟",/**/
                "userid": "4035220278",/*店主的userid*/
                "sellernick": "编程猫教育旗舰店",/*店铺掌柜名*/
                "shopname": "编程猫教育旗舰店",/*店铺名*/
                "online_users": "0",/**/
                "original_img": "",/**/
                "original_article": "",/**/
                "discount": "3.30",/**/
                "is_explosion": "0",/**/
                "me": null,/**/
                "activityid": "bca426872dab405ab1c133a5484625ac",/**/
                "coupon_condition": "3.00",/**/
                "taobao_image": "http://img.alicdn.com/imgextra/i3/4035220278/O1CN01Sx9F2J1DvMh8eJUCm_!!4035220278.jpg",/**/
                "shopid": "328310673",/**/
                "son_category": "50026361",/**/
                "down_type": "0",/**/
                "deposit": "0.00",/**/
                "deposit_deduct": "0.00",/**/
                "ysyl_tlj_face": "0.00",/**/
                "is_shipping": "1",/**/
            },
            {
                "product_id": "16117937",
                "itemid": "611284865419",
                "seller_id": "11159",
                "itemtitle": "【试听后赠】编程猫7-16岁零基础专业少儿编程试听课 上课赠杂志",
                "itemshorttitle": "编程猫7-16岁零基础专业少儿编",
                "itemdesc": "领取仅需1元，快来抢购，零基础电脑编程体验课一节。7-16岁少儿学习编程的入门启蒙课，和2000万编程猫学员一起成长。赶紧行动吧。",
                "itemprice": "3.00",
                "itemsale": "137",
                "itemsale2": "1",
                "todaysale": "6",
                "itempic": "http://img.alicdn.com/imgextra/i3/4035220278/O1CN01iYUKKT1DvMgonNQgW_!!4035220278.jpg",
                "itempic_copy": "0_611284865419_1584177265.jpg",
                "fqcat": "14",
                "itemendprice": "1.00",
                "shoptype": "B",
                "tktype": "营销计划",
                "tkrates": "90.00",
                "cuntao": "1",
                "tkmoney": "0.90",
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=4035220278&activityId=6a0df314893b4483a931fe4639019c3e",
                "couponmoney": "2",
                "couponsurplus": "99830",
                "couponreceive": "170",
                "couponreceive2": "0",
                "todaycouponreceive": "95",
                "couponnum": "100000",
                "couponexplain": "单笔满3.0元可用",
                "couponstarttime": "1584720000",
                "couponendtime": "1585324799",
                "start_time": "1584756000",
                "end_time": "1585324799",
                "starttime": "1584756000",
                "isquality": null,
                "report_status": "0",
                "is_brand": "0",
                "is_live": "0",
                "guide_article": "领取仅需1元，快来抢购，零基础电脑编程体验课一节。7-16岁少儿学习编程的入门启蒙课，和2000万编程猫学员一起成长。赶紧行动吧。",
                "videoid": "0",
                "activity_type": "普通活动",
                "general_index": "194",
                "planlink": null,
                "seller_name": "希晴丨团队",
                "userid": "4035220278",
                "sellernick": "编程猫教育旗舰店",
                "shopname": "编程猫教育旗舰店",
                "online_users": "0",
                "original_img": "",
                "original_article": "",
                "discount": "3.30",
                "is_explosion": "0",
                "me": null,
                "activityid": "6a0df314893b4483a931fe4639019c3e",
                "coupon_condition": "3.00",
                "taobao_image": "http://img.alicdn.com/imgextra/i3/4035220278/O1CN01CfQGNI1DvMh6Iehss_!!4035220278.jpg,http://img.alicdn.com/imgextra/i3/4035220278/O1CN01iYUKKT1DvMgonNQgW_!!4035220278.jpg,http://img.alicdn.com/imgextra/i2/4035220278/O1CN01obL5dW1DvMh37VTj8_!!4035220278.jpg",
                "shopid": "328310673",
                "son_category": "124692004",
                "down_type": "0",
                "deposit": "0.00",
                "deposit_deduct": "0.00",
                "ysyl_tlj_face": "0.00",
                "is_shipping": "1"
            }
        ]
    }
}
```

## 偏远地区包邮商品

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  cat_id  | int  |  是  | 商品类目： 0全部，1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物 |
|  order  | int  |  是  | 自定义排序 1.综合；2.券后价从高到低；3.券后价从低到高；4.销量从高到低；5.销量价从低到高 |
|  min_id  | int  |  是  | 当前页码的参数值 |
|  keyword  | string  |  否  | 偏远地区包邮商品关键词搜索 |

**路径**

`/api/v1/taobaoke/free/shipping`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "product_id": "16184733",/*产品ID*/
                "itemid": "574374652772",/*宝贝ID*/
                "seller_id": "31818",/*放单人ID*/
                "itemtitle": "蕾丝伞裙半身裙黑色a字裙高腰短裙女蓬蓬裙大摆裙裙子半裙春季",/*宝贝标题*/
                "itemshorttitle": "夏季蕾丝半身裙黑色a字裙高腰短裙",/*宝贝短标题*/
                "itemdesc": "显腿长，修身显瘦，性感不失小清新，时尚百搭，高腰包臀，优雅修身，动人曲线~【赠运费险】",/*宝贝推荐语*/
                "itemprice": "3.00",/*在售价*/
                "itemsale": "80",/*宝贝月销量*/
                "itemsale2": "1",/*宝贝近2小时跑单*/
                "todaysale": "0",/*当天销量*/
                "itempic": "https://img.alicdn.com/imgextra/i2/4035220278/O1CN01gvuBQN1DvMgsBKwpm_!!4035220278.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                "itempic_copy": "0_613109852972_1584754381.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                "fqcat": "14",/*商品类目：
1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物*/
                "itemendprice": "1.00",/*宝贝券后价*/
                "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                "tktype": "营销计划",/*佣金计划：隐藏 营销*/
                "tkrates": "90.00",/*佣金比例*/
                "cuntao": "1",/**/
                "tkmoney": "0.90",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=4035220278&activityId=bca426872dab405ab1c133a5484625ac",/*优惠券链接*/
                "couponmoney": "2",/*优惠券金额*/
                "couponsurplus": "9867",/*优惠券剩余量*/
                "couponreceive": "133",/*优惠券领取量*/
                "couponreceive2": "0",/*2小时内优惠券领取量*/
                "todaycouponreceive": "88",/*今日优惠券领取量*/
                "couponnum": "10000",/*优惠券总数量*/
                "couponexplain": "单笔满3.0元可用",/*优惠券使用条件*/
                "couponstarttime": "1584720000",/*优惠券开始时间*/
                "couponendtime": "1585324799",/*优惠券结束时间*/
                "start_time": "1584752400",/*活动开始时间*/
                "end_time": "1585324799",/*活动结束时间*/
                "starttime": "1584752400",/*发布时间*/
                "isquality": null,/**/
                "report_status": "0",/*举报处理条件 0未举报 1为待处理 2为忽略 3为下架*/
                "is_brand": "0",/*是否为品牌产品（1是）*/
                "is_live": "0",/*是否为直播产品（1是）*/
                "guide_article": "【零基础可学，听课后免费发教程书一本】3.0课程体系从幼儿到高中全覆盖，联合百校名师研制，打造终身学习体系，孩子学编程，越学越聪明，学习更自信。1元体验编程课，划算！！上课赠送书籍一本！！！",/*推广导购文案*/
                "videoid": "0",/*商品视频ID（id大于0的为有视频单，视频拼接地址http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/+videoid+.mp4）*/
                "activity_type": "普通活动",/*活动类型： 普通活动 聚划算 淘抢购*/
                "general_index": "134",/*好单指数*/
                "planlink": null,/*营销计划链接*/
                "seller_name": "帮购精品联盟",/**/
                "userid": "4035220278",/*店主的userid*/
                "sellernick": "编程猫教育旗舰店",/*店铺掌柜名*/
                "shopname": "编程猫教育旗舰店",/*店铺名*/
                "online_users": "0",/**/
                "original_img": "",/**/
                "original_article": "",/**/
                "discount": "3.30",/*折扣力度*/
                "is_explosion": "0",/**/
                "me": null,/**/
                "activityid": "bca426872dab405ab1c133a5484625ac",/**/
                "coupon_condition": "3.00",/**/
                "taobao_image": "http://img.alicdn.com/imgextra/i3/4035220278/O1CN01Sx9F2J1DvMh8eJUCm_!!4035220278.jpg",/**/
                "shopid": "328310673",/**/
                "son_category": "50026361",/**/
                "down_type": "0",/**/
                "deposit": "0.00",/*双十一定金*/
                "deposit_deduct": "0.00",/*双十一定金抵扣金额*/
                "ysyl_tlj_face": "0.00",/*预估淘礼金*/
                "is_shipping": "1",/**/
            },
            {
                "product_id": "16117937",
                "itemid": "611284865419",
                "seller_id": "11159",
                "itemtitle": "【试听后赠】编程猫7-16岁零基础专业少儿编程试听课 上课赠杂志",
                "itemshorttitle": "编程猫7-16岁零基础专业少儿编",
                "itemdesc": "领取仅需1元，快来抢购，零基础电脑编程体验课一节。7-16岁少儿学习编程的入门启蒙课，和2000万编程猫学员一起成长。赶紧行动吧。",
                "itemprice": "3.00",
                "itemsale": "137",
                "itemsale2": "1",
                "todaysale": "6",
                "itempic": "http://img.alicdn.com/imgextra/i3/4035220278/O1CN01iYUKKT1DvMgonNQgW_!!4035220278.jpg",
                "itempic_copy": "0_611284865419_1584177265.jpg",
                "fqcat": "14",
                "itemendprice": "1.00",
                "shoptype": "B",
                "tktype": "营销计划",
                "tkrates": "90.00",
                "cuntao": "1",
                "tkmoney": "0.90",
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=4035220278&activityId=6a0df314893b4483a931fe4639019c3e",
                "couponmoney": "2",
                "couponsurplus": "99830",
                "couponreceive": "170",
                "couponreceive2": "0",
                "todaycouponreceive": "95",
                "couponnum": "100000",
                "couponexplain": "单笔满3.0元可用",
                "couponstarttime": "1584720000",
                "couponendtime": "1585324799",
                "start_time": "1584756000",
                "end_time": "1585324799",
                "starttime": "1584756000",
                "isquality": null,
                "report_status": "0",
                "is_brand": "0",
                "is_live": "0",
                "guide_article": "领取仅需1元，快来抢购，零基础电脑编程体验课一节。7-16岁少儿学习编程的入门启蒙课，和2000万编程猫学员一起成长。赶紧行动吧。",
                "videoid": "0",
                "activity_type": "普通活动",
                "general_index": "194",
                "planlink": null,
                "seller_name": "希晴丨团队",
                "userid": "4035220278",
                "sellernick": "编程猫教育旗舰店",
                "shopname": "编程猫教育旗舰店",
                "online_users": "0",
                "original_img": "",
                "original_article": "",
                "discount": "3.30",
                "is_explosion": "0",
                "me": null,
                "activityid": "6a0df314893b4483a931fe4639019c3e",
                "coupon_condition": "3.00",
                "taobao_image": "http://img.alicdn.com/imgextra/i3/4035220278/O1CN01CfQGNI1DvMh6Iehss_!!4035220278.jpg,http://img.alicdn.com/imgextra/i3/4035220278/O1CN01iYUKKT1DvMgonNQgW_!!4035220278.jpg,http://img.alicdn.com/imgextra/i2/4035220278/O1CN01obL5dW1DvMh37VTj8_!!4035220278.jpg",
                "shopid": "328310673",
                "son_category": "124692004",
                "down_type": "0",
                "deposit": "0.00",
                "deposit_deduct": "0.00",
                "ysyl_tlj_face": "0.00",
                "is_shipping": "1"
            }
        ]
    }
}
```

## 抖货商品

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  cat_id  | int  |  是  | 抖货商品类目：0热门，1百变穿搭，2时尚潮男，3舒适好物，4美妆达人，5魅力配饰，6步履不停，7包罗万象，8萌娃驾到，9宝妈神器，10居家好物，11吃货专区，12数码达人，13用电能手，15伴你前行，16学习娱乐，17萌宠世界，14其他 |
|  order  | int  |  是  | 自定义排序 1.好单指数；2.今日销量；3.两小时销量 |
|  min_id  | int  |  是  | 当前页码的参数值 |
|  keyword  | string  |  否  | 偏远地区包邮商品关键词搜索 |

**路径**

`/api/v1/taobaoke/trill`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "product_id": "16185242",/*产品ID*/
                "itemid": "585930208380",/*宝贝ID*/
                "seller_id": "0",/*放单人ID*/
                "itemtitle": "眼镜布擦眼镜纸湿巾一次性手机屏幕擦镜纸镜头清洁眼睛酒精擦拭纸",/*宝贝标题*/
                "itemshorttitle": "手机屏幕显微镜擦镜纸眼睛镜头清洁",/*宝贝短标题*/
                "itemsale": "2014",/*宝贝月销量*/
                "itemsale2": "0",/*宝贝近2小时跑单*/
                "itemprice": "16.80",/*在售价*/
                "itemdesc": "【亚美嘉】，亚美嘉专业擦眼镜纸，纸质柔软细腻，单片独立包装，安全卫生，方便携带，擦完干净透亮不留痕迹，贴心呵护您的镜片！",/*宝贝推荐语*/
                "itempic_copy": "0_585930208380_1574144161.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                "is_foreshow": "0",/**/
                "videoid": "0",/*商品视频ID（id大于0的为有视频单，视频拼接地址http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/+videoid+.mp4）*/
                "activityid": "619cf997c30a44d983b9f321272534b7",/**/
                "activity_type": "普通活动",/*活动类型： 普通活动 聚划算 淘抢购*/
                "fqcat": "5",/*商品类目：1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物*/
                "shopid": "195233274",/**/
                "userid": "2200639561294",/*店主的userid*/
                "shopname": "亚美嘉旗舰店",/*店铺名*/
                "tkrates": "20.00",/*佣金比例*/
                "tkmoney": "2.96",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2200639561294&activityId=619cf997c30a44d983b9f321272534b7",/*优惠券链接*/
                "couponmoney": "2",/*优惠券金额*/
                "couponsurplus": "5000",/*优惠券剩余量*/
                "couponreceive": "0",/*优惠券领取量*/
                "couponnum": "5000",/*优惠券总数量*/
                "couponstarttime": "1584979200",/*优惠券开始时间*/
                "itemendprice": "14.80",/*宝贝券后价*/
                "couponendtime": "1585497600",/*优惠券结束时间*/
                "general_index": "153",/*好单指数*/
                "grade_avg": "0.00",/**/
                "rate_total": "0",/**/
                "todaysale": "0",/*当天销量（选择昨日爆单榜没有该字段）*/
                "stock": "0",/**/
                "itempic": "http://img.alicdn.com/imgextra/i3/2200639561294/O1CN01hFTp9n1LQh0Fmy9e7_!!2200639561294.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                "discount": "8.80",/*折扣力度*/
                "seller_name": "",/*放单人名号*/
                "report_status": "0",/**/
                "down_type": "0",/**/
                "activity_plan": "0",/**/
                "dy_trill_id": "607237",/*抖音商品ID*/
                "dy_video_url": "http://video.haodanku.com/37251d4ce441f5a479b975be09552883.mp4?attname=1585034750.mp4",/*抖音视频地址*/
                "dy_video_like_count": "45",/*抖音视频点赞数*/
                "dy_video_share_count": "0",/*抖音视频分享量*/
                "dy_video_title": "再也不用担心擦掉镜片上的镀膜了@抖音小助手",/*抖音视频标题*/
                "first_frame": "https://p9-dy.byteimg.com/img/tos-cn-p-0015/7c61ee6f07a348608705c8a34c2bf342~c5_300x400.jpeg",/*视频第一帧图片地址*/
                "dynamic_image": "http://video.haodanku.com/95b802125eac22b7f0fc0abcc6914fa0.gif",/*视频缩略图（动态）*/
            },
            {
                "product_id": "16184681",
                "itemid": "44950230820",
                "seller_id": "7610",
                "itemtitle": "蜂花檀香皂  玫瑰皂 茉莉皂 檀香皂125g*6块组合装 国货上海香皂",
                "itemshorttitle": "蜂花【6块】玫瑰茉莉檀香皂",
                "itemsale": "7845",
                "itemsale2": "30",
                "itemprice": "30.99",
                "itemdesc": "超值7块装【送上海硫磺皂1块】超市同款，正统香方，老上海的味道，经典国货，优雅芳香，九道工序手工包装，安神檀香，全家共享。轻松解决肌肤各类问题~【赠运费险】",
                "itempic_copy": "0_44950230820_1583993905.jpg",
                "shoptype": "B",
                "is_foreshow": "0",
                "videoid": "0",
                "activityid": "e84427a7ea8e42898696d762edf653ce",
                "activity_type": "普通活动",
                "fqcat": "10",
                "shopid": "119076609",
                "userid": "2400292596",
                "shopname": "上海香皂旗舰店",
                "tkrates": "30.00",
                "tkmoney": "6.30",
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2400292596&activityId=e84427a7ea8e42898696d762edf653ce",
                "couponmoney": "10",
                "couponsurplus": "100000",
                "couponreceive": "0",
                "couponnum": "100000",
                "couponstarttime": "1584979200",
                "itemendprice": "20.99",
                "couponendtime": "1585497599",
                "general_index": "201",
                "grade_avg": "4.90",
                "rate_total": "39144",
                "todaysale": "117",
                "stock": "348",
                "itempic": "https://img.alicdn.com/imgextra/i4/3226952177/O1CN01lNwmrM1Rx6oegDqd9_!!3226952177.jpg",
                "discount": "6.80",
                "seller_name": "甘岛联盟",
                "report_status": "0",
                "down_type": "0",
                "activity_plan": "324",
                "dy_trill_id": "389781",
                "dy_video_url": "http://video.haodanku.com/bcd86cfe77d0bf8d4440a4e1a8db29ce.mp4?attname=1585034750.mp4",
                "dy_video_like_count": "11",
                "dy_video_share_count": "0",
                "dy_video_title": "让你自带体香的方法，你get了吗？#好物分享 #平价好物推荐 @电商小助手 @抖音小助手",
                "first_frame": "https://p3-dy.byteimg.com/aweme/300x400/2ab87000459d53005e971.jpeg",
                "dynamic_image": "https://p3-dy.byteimg.com/aweme/300x400/2ab87000459d53005e971.jpeg"
            }
        ]
    }
}
```

## 品牌列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  brandcat  | int  |  是  | 品牌分类：0全部分类，1是母婴童品，2百变女装，3是食品酒水，4是居家日用，5是美妆洗护，6是品质男装，7是舒适内衣，8是箱包配饰，9是男女鞋靴，10是宠物用品，11是数码家电，12是车品文体 |
|  min_id  | int  |  是  | 当前页码的参数值 |

**路径**

`/api/v1/taobaoke/brands`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "id": "3",/*品牌自增ID*/
                "tb_brand_name": "南极人",/*淘宝品牌名称*/
                "fq_brand_name": "南极人",/*蜂擎品牌名称*/
                "brand_logo": "http://img04.taobaocdn.com:80/tfscom/TB1yXj2DpzqK1RjSZFCXXbbxVXa",/*品牌logo*/
                "brandcat": "6",/*品牌类目*/
                "introduce": "南极人，成立于1998年，是中国最早成立的内衣企业之一,首创保暖内衣产品开创了中国内衣行业发展的新道路，并逐渐发展成为家喻户晓的保暖内衣品牌；从2008年开始，开启品牌授权商业模式；2015年完成借壳上市，成为A股上市公司。\n经过20年的发展，南极人目前已经成为横跨内衣、家纺、男女装、母婴用品等超多品类，囊括了海量极具性价比的日常生活所需产品，并更符合国人消费习惯的全民家庭大品牌。",/*品牌简介*/
                "item": [
                    {
                        "itemid": "609941640388",/*商品id*/
                        "itemtitle": "电热蚊香液无味婴儿孕妇无香液体家用驱蚊液插电式电蚊器灭蚊液水",/*宝贝标题*/
                        "itemshorttitle": "南极人蚊香液3液+1器",/*宝贝短标题*/
                        "itemdesc": "拍立减3元！春眠不觉晓，处处蚊子咬~趁活动秒杀价9.9！南极人大牌，蚊香液3液+1器囤起来！销量突破2658+万瓶！法国进口配方，温和驱蚊，孕婴适用，每瓶驱蚊长达240小时！3瓶可以用3个多月！",/*宝贝推荐语*/
                        "itemprice": "22.90",/*在售价*/
                        "couponmoney": "10",/*优惠券金额*/
                        "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2206560209171&activityId=c481cc7a077940c6b871f70dc455add1",/*优惠券链接*/
                        "brand_name": "南极人",/*品牌名称*/
                        "itempic": "http://img.haodanku.com/oimg_609941640388_1583723832.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如http://img.alicdn.com/imgextra/i2/2923059281/O1CN012IQkLhBE8AFo0Lo_!!2923059281.jpg.jpg_310x310.jpg）*/
                        "tktype": "营销计划",/*佣金计划：隐藏 营销*/
                        "tkrates": "59.99",/*佣金比例*/
                        "itemendprice": "9.90",/*宝贝券后价*/
                        "itemsale": "347265",/*宝贝月销量*/
                        "itemsale2": "6007",/*宝贝近2小时跑单*/
                        "todaysale": "43262",/*当天销量（选择昨日爆单榜没有该字段）*/
                        "itempic_copy": "0_609941640388_1583723828.jpg",/*推广长图（带http://img.haodanku.com/0_575092904353_1546066517.jpg-600进行访问）*/
                        "shoptype": "B",/*店铺类型：天猫（B） 淘宝店（C）*/
                        "tkmoney": "5.94",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                        "couponexplain": "单笔满19.0元可用",/*优惠券使用条件*/
                        "couponstarttime": "1584892800",/*优惠券开始时间*/
                        "couponendtime": "1585238399",/*优惠券结束时间*/
                        "start_time": "1584932400",/*活动开始时间*/
                        "end_time": "1585238399",/*活动结束时间*/
                        "general_index": "434",/*好单指数*/
                        "sellernick": "南极人御源专卖店",/*店铺掌柜名*/
                        "activity_type": "普通活动",/*活动类型：普通活动 聚划算 淘抢购*/
                        "shopid": "242060766",/*店铺id*/
                        "userid": "2206560209171",/**/
                        "shopname": "南极人御源专卖店",/*店铺名称*/
                        "son_category": "50018987",/**/
                    },
                    {
                        "itemid": "588864698765",
                        "itemtitle": "南极人女士内裤女纯棉100%全棉裆抗菌中腰大码妈妈高腰收腹三角裤",
                        "itemshorttitle": "南极人女士内裤女纯棉100%全棉",
                        "itemdesc": "【累计热销50万+盒】天猫店13万好评！AAA级抗菌内裤，抗菌率高达99%！中高腰设计，95%优质精梳棉，舒适亲肤，柔软透气，质量非常好，经典纯色设计，简约又舒服呀【赠运费险】",
                        "itemprice": "39.90",
                        "couponmoney": "10",
                        "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2420696060&activityId=20f724a007914888a55d171144d68690",
                        "brand_name": "南极人",
                        "itempic": "https://img.alicdn.com/imgextra/i3/681736544/O1CN01wEOGMw1yDCQdCaRfk_!!681736544.jpg",
                        "tktype": "营销计划",
                        "tkrates": "20.10",
                        "itemendprice": "29.90",
                        "itemsale": "191801",
                        "itemsale2": "706",
                        "todaysale": "22967",
                        "itempic_copy": "0_588864698765_1576034643.jpg",
                        "shoptype": "B",
                        "tkmoney": "6.01",
                        "couponexplain": "单笔满39.0元可用",
                        "couponstarttime": "1584979200",
                        "couponendtime": "1585411199",
                        "start_time": "1584979200",
                        "end_time": "1585411199",
                        "general_index": "388",
                        "sellernick": "南极人拉斐特专卖店",
                        "activity_type": "聚划算",
                        "shopid": "116690892",
                        "userid": "2420696060",
                        "shopname": "南极人拉斐特专卖店",
                        "son_category": "50008882"
                    },
                ],
                "presale_start_time": 0,
                "presale_end_time": 0,
                "presale_tail_start_time": 0,
                "presale_tail_end_time": 0,
                "presale_discount_fee_text": ""
            },
            {
                "id": "856",
                "tb_brand_name": "Gainreel/歌瑞尔",
                "fq_brand_name": "歌瑞尔",
                "brand_logo": "http://img.haodanku.com/FiOnbDHTTflW_TWCNDHRypM3K-mN",
                "brandcat": "7",
                "introduce": "2008年歌瑞尔品牌诞生，时尚的设计风格，汇聚都市潮人钟爱的时尚元素,以精益求精的品质要求与时尚个性的设计，成为都市达人追寻潮流的方向。品牌创始人Charles荣获“2009全球十大网商”奖项。",
                "item": [
                    {
                        "itemid": "613889779051",
                        "itemtitle": "【单件文胸】歌瑞尔旗下性感内衣女时尚舒适甜美文胸罩ABB20001",
                        "itemshorttitle": "歌瑞尔 舒适无钢圈性感内衣",
                        "itemdesc": "无钢圈柔软舒适设计，性感聚拢，上薄下厚，可以帮助更好的定型，减少文胸移位情况，不管是款式还是颜色，都超级春夏季，少女感十足。",
                        "itemprice": "99.00",
                        "couponmoney": "60",
                        "couponurl": "https://uland.taobao.com/quan/detail?sellerId=92592768&activityId=ba0917caba054367bb95deba8fb96acd",
                        "brand_name": "Gainreel/歌瑞尔",
                        "itempic": "http://img.alicdn.com/imgextra/i3/92592768/O1CN01ojSHOF1WJmtlDS71C_!!92592768-0-lubanu-s.jpg",
                        "tktype": "营销计划",
                        "tkrates": "20.00",
                        "itemendprice": "39.00",
                        "itemsale": "60051",
                        "itemsale2": "6253",
                        "todaysale": "60029",
                        "itempic_copy": "0_613889779051_1584980051.jpg",
                        "shoptype": "B",
                        "tkmoney": "7.80",
                        "couponexplain": "单笔满99.0元可用",
                        "couponstarttime": "1584979200",
                        "couponendtime": "1585238399",
                        "start_time": "1584979200",
                        "end_time": "1585238399",
                        "general_index": "426",
                        "sellernick": "gainreel歌瑞尔内衣旗舰店",
                        "activity_type": "普通活动",
                        "shopid": "57299727",
                        "userid": "92592768",
                        "shopname": "gainreel歌瑞尔内衣旗舰店",
                        "son_category": "50008883"
                    },
                    {
                        "itemid": "610093271920",
                        "itemtitle": "【单件文胸】歌瑞尔旗下甜美可爱内衣女春夏季时尚舒适女士文胸罩",
                        "itemshorttitle": "歌瑞尔甜美可爱性感内衣",
                        "itemdesc": "小胸仙女看过来~Acup变Bcup，弹力丝滑面料，柔软清爽，立体杯模，一秒聚拢，无钢圈罩杯，摆脱束缚感，时刻舒适自在！享受被柔软环绕的舒适感！",
                        "itemprice": "99.00",
                        "couponmoney": "60",
                        "couponurl": "https://uland.taobao.com/quan/detail?sellerId=92592768&activityId=14c4661766e2455f9acb69ea967b8957",
                        "brand_name": "Gainreel/歌瑞尔",
                        "itempic": "https://img.alicdn.com/imgextra/i1/92592768/O1CN01x1Bx631WJmtGujRng_!!0-item_pic.jpg",
                        "tktype": "营销计划",
                        "tkrates": "16.00",
                        "itemendprice": "39.00",
                        "itemsale": "2856",
                        "itemsale2": "188",
                        "todaysale": "321",
                        "itempic_copy": "0_610093271920_1577842547.jpg",
                        "shoptype": "B",
                        "tkmoney": "6.24",
                        "couponexplain": "单笔满99.0元可用",
                        "couponstarttime": "1584979200",
                        "couponendtime": "1585238399",
                        "start_time": "1585029600",
                        "end_time": "1585238399",
                        "general_index": "411",
                        "sellernick": "gainreel歌瑞尔内衣旗舰店",
                        "activity_type": "普通活动",
                        "shopid": "57299727",
                        "userid": "92592768",
                        "shopname": "gainreel歌瑞尔内衣旗舰店",
                        "son_category": "50008883"
                    },
                ],
                "presale_start_time": 0,
                "presale_end_time": 0,
                "presale_tail_start_time": 0,
                "presale_tail_end_time": 0,
                "presale_discount_fee_text": ""
            }
        ]
    }
}
```

## 品牌信息(某个分类下的品牌信息)

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  brandcat  | int  |  是  | 品牌分类：0全部分类，1是母婴童品，2百变女装，3是食品酒水，4是居家日用，5是美妆洗护，6是品质男装，7是舒适内衣，8是箱包配饰，9是男女鞋靴，10是宠物用品，11是数码家电，12是车品文体 |
|  min_id  | int  |  是  | 当前页码的参数值 |

**路径**

`/api/v1/taobaoke/brands/info`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,
        "items": [
            {
              "id": "1",/*品牌自增ID*/
              "tb_brand_name": "Three Squirrels/三只松鼠",/*淘宝品牌名称*/
              "fq_brand_name": "三只松鼠",/*蜂擎品牌名称*/
              "brand_logo":"http://img02.taobaocdn.com:80/tfscom/TB1jsD.DxjaK1RjSZFAXXbdLFXa",/*品牌logo*/
              "inside_logo":"http://img02.taobaocdn.com:80/tfscom/TB1idzWDrvpK1RjSZPiXXbmwXXa",/*内页logo*/
              "rounded_logo":"http://img02.taobaocdn.com:80/tfscom/TB1p5vCXkWE3KVjSZSyXXXocXXa",/**/
              "brandcat": "3",/*品牌类目*/
              "introduce": "三只松鼠，互联网坚果销量冠军品牌，致力于生产天然新鲜、非过度加工的健康食品，誓将卖萌服务与极致用户体验进行到底，数百万消费者的不二选择，值得信赖！",/*品牌简介*/
            },
            {
              "id": "2",
              "tb_brand_name": "BE＆CHEERY/百草味",
              "fq_brand_name": "百草味",
              "brand_logo": "http://img02.taobaocdn.com:80/tfscom/TB1JCfSDwTqK1RjSZPhXXXfOFXa",
              "inside_logo": "http://img03.taobaocdn.com:80/tfscom/TB1Nmr5DAzoK1RjSZFlXXai4VXa",
              "rounded_logo": "http://img03.taobaocdn.com:80/tfscom/TB13EHBXoCF3KVjSZJnXXbnHFXa",
              "brandcat": "3",
              "introduce": "百草味，品质零食领导品牌。 坚持以最真实诚恳的态度，将大自然赐予的美味传递给每一位热爱美食的顾客。 十二年专注，品质卓越非凡。人生百味，尽在百草味。"
            }
        ]
    }
}
```

## 单个品牌详情

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  id  | int  |  是  | 品牌ID |
|  min_id  | int  |  是  | 当前页码的参数值 |
|  order  | int  |  是  | 自定义排序 1.最新, 2.销量（高到低, 3.销量（低到高, 4.价格(低到高), 5.价格（高到低), 6.佣金比例（高到低） |

**路径**

`/api/v1/taobaoke/brands/single`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": {
            "id": "1",/*品牌自增ID*/
              "tb_brand_name": "Three Squirrels/三只松鼠",/*淘宝品牌名称*/
              "fq_brand_name": "三只松鼠",/*蜂擎品牌名称*/
              "brand_logo":"http://img02.taobaocdn.com:80/tfscom/TB1jsD.DxjaK1RjSZFAXXbdLFXa",/*品牌logo*/
              "inside_logo":"http://img02.taobaocdn.com:80/tfscom/TB1idzWDrvpK1RjSZPiXXbmwXXa",/*内页logo*/
              "rounded_logo":"http://img02.taobaocdn.com:80/tfscom/TB1p5vCXkWE3KVjSZSyXXXocXXa",/**/
              "brandcat": "3",/*品牌类目*/
              "introduce": "三只松鼠，互联网坚果销量冠军品牌，致力于生产天然新鲜、非过度加工的健康食品，誓将卖萌服务与极致用户体验进行到底，数百万消费者的不二选择，值得信赖！",/*品牌简介*/
            "items": [
                {
                    "id": "16159949",/*品牌自增ID*/
                    "itemid": "597498921434",/*商品id*/
                    "itemtitle": "【三只松鼠水果干大礼包】休闲零食蜜饯果干组合芒果干草莓干网红",/*宝贝标题*/
                    "itemshorttitle": "【2件38.8】三只松鼠果干礼包",/*宝贝短标题*/
                    "itemdesc": "【拍两份券后到手仅38.8元！赠蜂蜜梅丹】三只松鼠水果干大礼包组合装，一次吃过瘾，办公零食小吃，来满足你的味蕾，原汁原味，锁住营养，抛开所有不开心~美味从指尖到心里！",/*宝贝推荐语*/
                    "itemprice": "79.80",/*在售价*/
                    "couponmoney": "5",/*优惠券金额*/
                    "couponurl": "https://uland.taobao.com/quan/detail?sellerId=880734502&activityId=c9e7edc3f9a743bd880685cf464c9d52",/*优惠券链接*/
                    "brand_name": "Three Squirrels/三只松鼠",/*品牌名称*/
                    "itempic": "http://img.alicdn.com/imgextra/i3/880734502/O1CN014rf7cP1j7xePzVOGg_!!880734502.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                    "tktype": "营销计划",/*佣金计划：隐藏 营销*/
                    "tkrates": "15.00",/*佣金比例*/
                    "itemendprice": "38.80",/*宝贝券后价*/
                    "itemsale": "80",/*宝贝月销量*/
                    "itemsale2": "1",/*宝贝近2小时跑单*/
                    "todaysale": "0",/*当天销量*/
                    "itempic_copy": "0_597498921434_1584952167.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                    "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                    "tkmoney": "5.82",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                    "couponexplain": "单笔满3.0元可用",/*优惠券使用条件*/
                    "couponstarttime": "1584720000",/*优惠券开始时间*/
                    "couponendtime": "1585324799",/*优惠券结束时间*/
                    "start_time": "1584752400",/*活动开始时间*/
                    "end_time": "1585324799",/*活动结束时间*/
                    "general_index": "134",/*好单指数*/
                    "seller_name": "帮购精品联盟",/**/
                    "userid": "4035220278",/*店主的userid*/
                    "sellernick": "编程猫教育旗舰店",/*店铺掌柜名*/
                    "activity_type": "聚划算",/*活动类型 普通活动 聚划算 淘抢购*/
                    "shopid": "71720200",/*店主的userid*/
                    "shopname": "三只松鼠旗舰店",/*店铺名*/
                    "son_category": "50013080",
                    "deposit_deduct": "0.00",/*双十一定金抵扣金额*/
                    "deposit": "0.00",/*双十一定金*/
                    "presale_start_time": 0,
                    "presale_end_time": 0,
                    "presale_tail_start_time": 0,
                    "presale_tail_end_time": 0,
                    "presale_discount_fee_text": ""
                },
                {
                    "id": "16151787",
                    "itemid": "558587300390",
                    "itemtitle": "【三只松鼠_零食大礼包】休闲食品吃货坚果充饥夜宵网红小吃饼干",
                    "itemshorttitle": "【三只松鼠】网红零食大礼包一箱",
                    "itemdesc": "三只松鼠零食百宝箱，满满的零食，满满的幸福，多款套餐，百变多选，任性挑，好吃不胖，身体倍棒！松鼠给你想要的吃货的幸福！",
                    "itemprice": "59.90",
                    "couponmoney": "5",
                    "couponurl": "https://uland.taobao.com/quan/detail?sellerId=880734502&activityId=90d33a2ab65044929d825f793be3b26c",
                    "brand_name": "Three Squirrels/三只松鼠",
                    "itempic": "https://img.alicdn.com/imgextra/i1/880734502/O1CN01dRZ3jT1j7xZ6j5y02_!!0-item_pic.jpg",
                    "tktype": "营销计划",
                    "tkrates": "15.00",
                    "itemendprice": "32.90",
                    "itemsale": "237224",
                    "itemsale2": "559",
                    "todaysale": "2351",
                    "itempic_copy": "0_558587300390_1584934361.jpg",
                    "shoptype": "B",
                    "tkmoney": "4.94",
                    "couponexplain": "单笔满37.0元可用",
                    "couponstarttime": "1584892800",
                    "couponendtime": "1585065599",
                    "start_time": "1584936000",
                    "end_time": "1585065599",
                    "general_index": "464",
                    "sellernick": "三只松鼠旗舰店",
                    "activity_type": "聚划算",
                    "shopid": "71720200",
                    "userid": "880734502",
                    "shopname": "三只松鼠旗舰店",
                    "son_category": "50010535",
                    "deposit_deduct": "0.00",
                    "deposit": "0.00",
                    "presale_start_time": 0,
                    "presale_end_time": 0,
                    "presale_tail_start_time": 0,
                    "presale_tail_end_time": 0,
                    "presale_discount_fee_text": ""
                },

            ]
        }
    }
}
```

## 各大榜单

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  sale_type  | int  |  是  | 榜单类型：sale_type=1是实时销量榜（近2小时销量）, sale_type=2是今日爆单榜，sale_type=3是昨日爆单榜，sale_type=4是出单指数版 |
|  cid  | int  |  是  | 商品类目：0全部，1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物 |
|  min_id  | int  |  是  | 当前页码的参数值 |
|  item_type  | int  |  是  | 是否只获取营销返利商品，1是，0否 |

**路径**

`/api/v1/taobaoke/sales/list`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "product_id": "16178002",/*产品ID*/
                "itemid": "602415106993",/*宝贝ID*/
                "seller_id": "12588",/*放单人ID*/
                "itemtitle": "云南三七牙膏去黄去口臭牙垢亮白美去渍口气清新家庭实惠装2支装",/*宝贝标题*/
                "itemshorttitle": "【云南三七】多效植物牙膏2支装",/*宝贝短标题*/
                "itemdesc": "【第二件才4元，拍2件13.9元共发4支】专注中药牙膏57年，三七原液萃取，两种香型，护龈清火！解决牙龈肿胀，口腔上火，洁白牙齿、清新口气效果达86%！居家必备，不嫌多~",/*宝贝推荐语*/
                "itemprice": "29.90",/*在售价*/
                "itemsale": "84558",/*宝贝月销量*/
                "itemsale2": "14709",/*宝贝近2小时跑单*/
                "todaysale": "15593",/*当天销量（选择昨日爆单榜没有该字段）*/
                "yesterdaysale": "15593",/*昨日销量（选择昨日爆单榜才有该字段）*/
                "itempic": "https://img.alicdn.com/imgextra/i2/2643296737/O1CN01UdhXbv1zdapRvduat_!!2643296737.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                "itempic_copy": "0_602415106993_1584946413.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                "fqcat": "10",/*商品类目：1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物 */
                "itemendprice": "9.90",/*宝贝券后价*/
                "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                "tktype": "营销计划",/*佣金计划：隐藏 营销*/
                "tkrates": "45.00",/*佣金比例*/
                "cuntao": "1",/**/
                "tkmoney": "4.46",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                "couponurl": "http://uland.taobao.com/quan/detail?sellerId=2201314571834&activityId=55918a76f9fc4a869400a38e53fe30c3",/*优惠券链接*/
                "couponmoney": "20",/*优惠券金额*/
                "couponsurplus": "55000",/*优惠券剩余量*/
                "couponreceive": "45000",/*优惠券领取量*/
                "couponreceive2": "3000",/*2小时内优惠券领取量*/
                "todaycouponreceive": "41000",/*今日优惠券领取量*/
                "couponnum": "100000",/*优惠券总数量*/
                "couponexplain": "单笔满29.0元可用",/*优惠券使用条件*/
                "couponstarttime": "1584979200",/*优惠券开始时间*/
                "couponendtime": "1585238399",/*优惠券结束时间*/
                "start_time": "1584979200",/*活动开始时间*/
                "end_time": "1585238399",/*活动结束时间*/
                "starttime": "1584979200",/*发布时间*/
                "isquality": null,/**/
                "report_status": "0",/*举报处理条件 0未举报 1为待处理 2为忽略 3为下架*/
                "is_brand": "0",/*是否为品牌产品（1是）*/
                "is_live": "0",/*是否为直播产品：1为是*/
                "guide_article": "【第二件才4元，拍2件13.9元共发4支】专注中药牙膏57年，三七原液萃取，两种香型，护龈清火！解决牙龈肿胀，口腔上火，洁白牙齿、清新口气效果达86%！居家必备，不嫌多~",/*推广导购文案*/
                "videoid": "0",/*商品视频ID（id大于0的为有视频单，视频拼接地址http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/+videoid+.mp4）*/
                "activity_type": "普通活动",/*活动类型：普通活动 聚划算 淘抢购*/
                "general_index": "337",/*好单指数*/
                "planlink": null,/*营销计划链接*/
                "seller_name": "【精推】联盟",/*放单人名号*/
                "userid": "2201314571834",/**/
                "sellernick": "三宅新妍旗舰店",/*店铺掌柜名*/
                "shopname": "三宅新妍旗舰店",/*店铺名*/
                "online_users": "0",/**/
                "original_img": "",/**/
                "original_article": "",/**/
                "discount": "3.30",/*折扣力度*/
                "is_explosion": "0",/**/
                "me": null,/**/
                "activityid": "55918a76f9fc4a869400a38e53fe30c3",/**/
                "coupon_condition": "29.00",/**/
                "taobao_image": "http://img.alicdn.com/imgextra/i3/2201314571834/O1CN01PVSmVb1PQ0yOXispo_!!2201314571834.jpg,http://img.alicdn.com/imgextra/i2/2201314571834/O1CN01XuWCAY1PQ0yMsJKw5_!!2201314571834.jpg,http://img.alicdn.com/imgextra/i4/2201314571834/O1CN01dKE0gM1PQ0yO5ZeZi_!!2201314571834.jpg,http://img.alicdn.com/imgextra/i1/2201314571834/O1CN01kJtF6V1PQ0yKKCHzo_!!2201314571834.jpg,http://img.alicdn.com/imgextra/i3/2201314571834/O1CN01HmrfCd1PQ0yMsKPQ8_!!2201314571834.jpg",/**/
                "shopid": "373493800",/**/
                "son_category": "213203",/**/
                "down_type": "0",/**/
                "deposit": "0.00",/*双十一定金*/
                "deposit_deduct": "0.00",/*双十一定金抵扣金额*/
                "ysyl_tlj_face": "0.00",/**/
                "is_shipping": "-1",/**/
                "presale_start_time": 0,/**/
                "presale_end_time": 0,/**/
                "presale_tail_start_time": 0,/**/
                "presale_tail_end_time": 0,/**/
                "presale_discount_fee_text": ""/**/
            },
            {
                "product_id": "16144367",
                "itemid": "613671927677",
                "seller_id": "21357",
                "itemtitle": "志高灭蚊灯家用灭蚊神器室内驱蚊器吸捕蚊子婴儿卧室插电诱捉蚊虫",
                "itemshorttitle": "【志高！】高颜值黑科技灭蚊灯",
                "itemdesc": "【4.8超高评分！】高端大气的物理灭蚊，安全高效。高颜值，好效果，特殊时期，病毒这么多，及时消灭蚊子也一定要注意哦！数量有限，厂家直发，一年换新，抓不到蚊子可退！【赠运费险】",
                "itemprice": "34.90",
                "itemsale": "29630",
                "itemsale2": "13894",
                "todaysale": "16722",
                "itempic": "http://img.alicdn.com/imgextra/i4/3078737450/O1CN01KDtY1j24u9H7SXnVr_!!3078737450.jpg",
                "itempic_copy": "0_613671927677_1585050292.jpg",
                "fqcat": "10",
                "itemendprice": "9.90",
                "shoptype": "B",
                "tktype": "营销计划",
                "tkrates": "40.00",
                "cuntao": "1",
                "tkmoney": "3.96",
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=3078737450&activityId=7299b2f42d114fa9bdd81c6478ac7a3c",
                "couponmoney": "25",
                "couponsurplus": "61000",
                "couponreceive": "39000",
                "couponreceive2": "10000",
                "todaycouponreceive": "34000",
                "couponnum": "100000",
                "couponexplain": "单笔满34.0元可用",
                "couponstarttime": "1585065600",
                "couponendtime": "1585324799",
                "start_time": "1585065600",
                "end_time": "1585324799",
                "starttime": "1585065600",
                "isquality": "0",
                "report_status": "0",
                "is_brand": "3",
                "is_live": "0",
                "guide_article": "【4.8超高评分！】高端大气的物理灭蚊，安全高效。高颜值，好效果，特殊时期，病毒这么多，及时消灭蚊子也一定要注意哦！数量有限，厂家直发，一年换新，抓不到蚊子可退！【赠运费险】",
                "videoid": "0",
                "activity_type": "普通活动",
                "general_index": "331",
                "planlink": null,
                "seller_name": "饺子部队联盟",
                "userid": "3078737450",
                "sellernick": "志高中腾专卖店",
                "shopname": "志高中腾专卖店",
                "online_users": "0",
                "original_img": "",
                "original_article": "",
                "discount": "2.80",
                "is_explosion": "0",
                "me": null,
                "activityid": "7299b2f42d114fa9bdd81c6478ac7a3c",
                "coupon_condition": "34.00",
                "taobao_image": "http://img.alicdn.com/imgextra/i3/3078737450/O1CN0186DEi324u9HQnYiZK_!!3078737450.png,http://img.alicdn.com/imgextra/i3/3078737450/O1CN01fciqAM24u9HIcmVnG_!!3078737450.png,http://img.alicdn.com/imgextra/i2/3078737450/O1CN01yJAMZC24u9HIFerUC_!!3078737450.jpg,http://img.alicdn.com/imgextra/i4/3078737450/O1CN011XAtQZ24u9HIFeBvu_!!3078737450.jpg,http://img.alicdn.com/imgextra/i4/3078737450/O1CN01KDtY1j24u9H7SXnVr_!!3078737450.jpg",
                "shopid": "336888531",
                "son_category": "50004421",
                "down_type": "0",
                "deposit": "0.00",
                "deposit_deduct": "0.00",
                "ysyl_tlj_face": "-1.00",
                "is_shipping": "-1",
                "presale_start_time": 0,
                "presale_end_time": 0,
                "presale_tail_start_time": 0,
                "presale_tail_end_time": 0,
                "presale_discount_fee_text": ""
            }
        ]
    }
}
```

## 达人说

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  talentcat  | int  |  是  | 大家都在逛类目，文章类别（0.全部，1.好物,2.潮流,3.美食,4.生活） |

**路径**

`/api/v1/taobaoke/talent/info`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 1,/*作为请求地址中获取下一页的参数值*/
        "items": {
            "topdata": [/*置顶文章数组*/
                {
                    "id": "9873",/*文章id*/
                    "name": "学生党日常元气穿搭记，助你美美开学",/*文章标题*/
                    "shorttitle": "春日美腻穿搭大赏",/*文章短标题*/
                    "image": "https://img.alicdn.com/imgextra/i1/3653604595/O1CN01KTyXwY1joYVhGoI2g_!!0-item_pic.jpg",/*文章商品主图*/
                    "app_image": "http://img.haodanku.com/FmhFnA4bTMZZpuPtO27zRPeTXqw2",/*置顶图片*/
                    "label": "#学生党#,#学院风#,#超美开学穿搭#",/*文章标签*/
                    "tk_item_id": "613208327930,564760237919,613642614869,613257008916,543544648408,546359967912,553400668622,583517921433,596390373607,605813863443",/*文章包含商品的id*/
                    "article_banner": "http://img.haodanku.com/FqlBeXSJy4AslEyxZWiQORxynxrD",/*文章banner*/
                    "highquality": "1",/*文章置顶1是，0否*/
                    "compose_image": "http://img.haodanku.com/FoBjAFBVBuHzWEY8wN5jPwb_5AQH",/*APP信息流主图*/
                    "readtimes": "6326",/*浏览量*/
                    "talent_name": "半夏微凉",/*达人名号*/
                    "article": "我国的防疫战已进入尾声阶段，各地高校都正在逐步开启开学计划，你学校有通知几号开学吗？大学也开学在即，学生党们又",/*正文简介*/
                    "talentcat": "2",/*文章类别（1.好物,2.潮流,3.美食,4.生活）*/
                    "talent_id": "9",/**/
                    "itemnum": "11",/*文章包含商品的数量*/
                },
                {
                    "id": "9852",
                    "name": "滴~周末宅模式开启，追剧零食来报道~",
                    "shorttitle": "周末宅家追剧零食",
                    "image": "https://img.alicdn.com/imgextra/i1/1689979208/TB2jg52v0FopuFjSZFHXXbSlXXa_!!1689979208.jpg",
                    "app_image": "http://img.haodanku.com/FsxXqm9Qf2THbc3xnOHCBUZ0slh6",
                    "label": "#吃货最爱#",
                    "tk_item_id": "572322905915,576894837008,551996420540,585888839090,573094499875,601128216813,595463069199,608428280862,557650114058,603321071140,605209745882,552797431312,613151246344,559960228288",
                    "article_banner": "http://img.haodanku.com/Fm9CeKmwUKTPGUa9XuUM3cWVpLew",
                    "highquality": "1",
                    "compose_image": "http://img.haodanku.com/FgHjG8VmhV7p93wIJS4m76XUmLXk",
                    "readtimes": "5090",
                    "talent_name": "沐渔橙风",
                    "article": "今天是周五啊，明天不上班哈哈，各位亲爱的小伙伴们，美好的周末，又来啦~&nbsp;睡觉睡到自然醒，醒了赖床赖到",
                    "talentcat": "3",
                    "talent_id": "76",
                    "itemnum": "14"
                },
            ],
            "newdata": [/*最新文章数组*/
                {
                    "id": "9900",
                    "name": "你好，夏天！入夏必备清凉好物趁早囤",
                    "shorttitle": "入夏实用好物合集",
                    "image": "https://img.alicdn.com/i2/2219652732/O1CN013GlnV71W3IdgFNybw_!!2219652732.jpg",
                    "app_image": null,
                    "label": "#入夏必备#,#清凉降温#,#缓解闷热天气#",
                    "tk_item_id": "597466603466,613245721045,549985296806,608957838880,591135776306,546711127405,583515483022,613068621242,609147145380,613582750132,614196790077,613421771379,590251555095,594349798475,588059058145,612627535849,597802603065,613719342489,612124207914,571884233859,588133774777,530499678381,612456272286,567532225686,590081887925,612818312224",
                    "article_banner": "http://img.haodanku.com/Fhj_04dZMDsub3n35vRcs-Tu6xk-",
                    "highquality": "0",
                    "compose_image": "http://img.haodanku.com/FssjN6J6WtHkIsEfsV3NWiQ8q6yS",
                    "readtimes": "1156",
                    "talent_id": "9",
                    "talent_name": "半夏微凉",
                    "head_img": "http://img.haodanku.com/FoJtOF0ufi3bcCSJ1nEgMtJfu_n4",
                    "article": "「哈喽，大家好！你们的魔鬼小编又上线啦~」距离四月还有一个星期炎热的天气已经提前靠近在这忽冷忽热的季节比起突如",
                    "talentcat": "1",
                    "itemnum": "26"
                },
                {
                    "id": "9887",
                    "name": "适合女生小酌的微醺小酒，有颜好喝又平价",
                    "shorttitle": "适合女生喝的小甜酒",
                    "image": "https://img.alicdn.com/imgextra/i2/752144829/O1CN01isSeYC1lXjBt3hiUF_!!752144829.jpg",
                    "app_image": null,
                    "label": "#适合女生喝的酒#,#起泡酒#,#微醺果酒#",
                    "tk_item_id": "612587361628,598114565099,606490028500,602562110924,610733941838,608355992824,597784053544,534522990366,602338814672,602552324113,557250416986,602358999907,563992401730,591317001476,608357328295,588394522956,608101773772",
                    "article_banner": "http://img.haodanku.com/FiXIJ6NOM4WRDGdya3lvftevZ-CC",
                    "highquality": "0",
                    "compose_image": "http://img.haodanku.com/Fr1T__vQ1gFPfa2zJuL04Y9Cptdz",
                    "readtimes": "1955",
                    "talent_id": "9",
                    "talent_name": "半夏微凉",
                    "head_img": "http://img.haodanku.com/FoJtOF0ufi3bcCSJ1nEgMtJfu_n4",
                    "article": "我国有很深的酒文化当今社会，由于工作压力大酒不再是男士的专属女生们也喜欢喝点小酒来释放一下压抑的情绪不过像白酒",
                    "talentcat": "3",
                    "itemnum": "17"
                }
            ],
            "clickdata": [/*阅读量降序排列的文章信息*/
                {
                    "id": "9753",
                    "name": "今年刷屏的“心机穿搭”，简直太！可！了！",
                    "shorttitle": "复工“心机穿搭”",
                    "image": "http://img.alicdn.com/imgextra/i2/2206798425970/O1CN01qe6pKQ1tyJ65mnBtA_!!0-item_pic.jpg",
                    "app_image": null,
                    "label": "#玩转高级色#,#透视元素#,#打造可人style#",
                    "tk_item_id": "613146039571,607029178422,611387259105,612942815662,609982357132,591690581152,611521511198,591443880983,589263883952,586667822524,602987038279,611735219897,604613516592,599265780214,599391053359",
                    "article_banner": "http://img.haodanku.com/FlWhOS2w_K-NK-z1Hqu4dYiLNRfX",
                    "highquality": "0",
                    "compose_image": "http://img.haodanku.com/FjdGVaNb_nstWgnaIGs9cv2Y3Lxa",
                    "readtimes": "11809",
                    "talent_name": "半夏微凉",
                    "head_img": "http://img.haodanku.com/FoJtOF0ufi3bcCSJ1nEgMtJfu_n4",
                    "article": "俗话说得好：“世上没有丑女人，只有懒女人”这句话用在穿搭上也是很合适的复工第N天相信不少人已经从“宅家模式”调",
                    "talentcat": "2",
                    "talent_id": "9",
                    "itemnum": "15"
                },
                {
                    "id": "9554",
                    "name": "今年流行的ins小众包包，你还没拔草吗？",
                    "shorttitle": "时髦小众包包都在这",
                    "image": "http://img.alicdn.com/imgextra/i3/2064967170/O1CN01N9kBSS22puNOwGXbq_!!2064967170.jpg",
                    "app_image": "http://img.haodanku.com/FkCyLDaObrWx-DPf2zO40sVPnICg",
                    "label": "#“包”治百病#,#ins爆款#,#不撞款#",
                    "tk_item_id": "596421506069,601579158564,610618225803,558046387556,598519576894,606995292074,598658165707,594117455737,573057930975,556663704034,567201686044,599764195855,602199085923,601207790273",
                    "article_banner": "http://img.haodanku.com/FtMpZcDG_39sRafDofhbKhfslC-0",
                    "highquality": "1",
                    "compose_image": "http://img.haodanku.com/FqtLmeu8ynr1VIT_tuqfPovDFCDh",
                    "readtimes": "11083",
                    "talent_name": "半夏微凉",
                    "head_img": "http://img.haodanku.com/FoJtOF0ufi3bcCSJ1nEgMtJfu_n4",
                    "article": "最近天气变热加上陆陆续续开始复工不知道大家是不是像小编一样购物欲都变得很强了呢？！想买鞋子，想买衣服，想买包包",
                    "talentcat": "2",
                    "talent_id": "9",
                    "itemnum": "14"
                }
            ],
            "talent_Category": {/**/
                "1": "好物",
                "2": "潮流",
                "3": "美食",
                "4": "生活"
            }
        }
    }
}
```

## 达人说文章详情

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  id  | int  |  是  | 文章ID |

**路径**

`/api/v1/taobaoke/talent/article`

###  特别说明:

- 达人文章内的商品格式需引入css文件渲染  下载地址：`https://pan.baidu.com/s/1RVGlM3Hijpg7BWt0m1HsZA#list/path=%2F`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 1,/*作为请求地址中获取下一页的参数值*/
        "items": {
            "id": "9873",/*文章id*/
            "name": "学生党日常元气穿搭记，助你美美开学",/*文章标题*/
            "shorttitle": "春日美腻穿搭大赏",/*文章短标题*/
            "compose_image": "http://img.haodanku.com/FoBjAFBVBuHzWEY8wN5jPwb_5AQH",/*APP信息流主图*/
            "app_image": "http://img.haodanku.com/FmhFnA4bTMZZpuPtO27zRPeTXqw2",/*置顶图片*/
            "label": "#学生党#,#学院风#,#超美开学穿搭#",/*文章标签*/
            "addtime": "1584871483",/**/
            "itemid_str": "613208327930,564760237919,613642614869,613257008916,543544648408,546359967912,553400668622,583517921433,596390373607,605813863443,610323400885",/*文章包含商品的id*/
            "article_banner": "http://img.haodanku.com/FqlBeXSJy4AslEyxZWiQORxynxrD",/*文章banner*/
            "highquality": "1",/*文章置顶1是，0否*/
            "checktime": "1584871537",
            "talent_name": "半夏微凉",/*达人名号*/
            "head_img": "http://img.haodanku.com/FoJtOF0ufi3bcCSJ1nEgMtJfu_n4",/*达人头像*/
            "readtimes": "6326",/*浏览量*/
            "followtimes": "20",/*点赞量*/
            "talent_id": "9",/**/
            "article": " &lt;p&gt;我国的防疫战已进入尾声阶段，各地高校都正在逐步开启开学计划，你学校有通知几号开学吗？&lt;br/&gt;&lt;br/&gt;&lt;/p&gt;&lt;div style=&quot;text-align: center;&quot;&gt;&lt;img src=&quot;http://img.fqapps.com/FjDmj7N9zd5SAHduwc9QMoQETwu7-600&quot; _src=&quot;http://img.fqapps.com/FjDmj7N9zd5SAHduwc9QMoQETwu7-600&quot; style=&quot;width: 328.011px; height: 303.011px;&quot;/&gt;&lt;/div&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;大学也开学在即，学生党们又要回归熟悉的校园生活，是该换下松松垮垮的睡衣，好好装扮一下自己了&lt;br/&gt;&lt;br/&gt;&lt;/p&gt;&lt;div style=&quot;text-align: center;&quot;&gt;&lt;img src=&quot;http://img.fqapps.com/FlpR-o4qVzY8E4mO9EEl2vs1nEP3-600&quot; _src=&quot;http://img.fqapps.com/FlpR-o4qVzY8E4mO9EEl2vs1nEP3-600&quot; style=&quot;width: 330.011px; height: 333.011px;&quot;/&gt;&lt;/div&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;今天为集美们带来一些日常元气穿搭，供大家参考，助你们美美哒开学&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;&lt;",/*带标签的文章正文*/
            "autograph": "你啥都不懂？关注我啥都懂了！喜欢分享购物",/**/
            "items": [/*商品数组*/
                {
                    "itemid": "543544648408",/*商品ID*/
                    "itemshorttitle": "【比丽福】春夏打底裤小脚魔术裤",/*商品短标题*/
                    "itemtitle": "魔术黑色打底裤女裤外穿春秋薄款小脚2020新款高腰显瘦百搭小黑裤",/*商品标题*/
                    "itemendprice": "35.00",/*券后价*/
                    "tkrates": "20.00",/*佣金比例*/
                    "couponmoney": "20",/*优惠券面额*/
                    "itemsale": "122944",/*总销量*/
                    "tkmoney": "7.00",/*预估佣金*/
                    "couponurl":"http://uland.taobao.com/quan/detail?sellerId=2098049097&activityId=21be246e907644ddaf2498ec62f20351",/*优惠券链接*/
                    "itempic": "http://img.haodanku.com/oimg_543544648408_1582892311.jpg",/*商品主图链接*/
                    "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                    "shopname": "比丽福旗舰店",/*店铺名*/
                    "itemprice": "55.00",/*在售价*/
                },
                {
                    "itemid": "546359967912",
                    "itemshorttitle": "2020春季新款纯色圆领卫衣女",
                    "itemtitle": "2020春季新款纯色圆领卫衣女学生休闲上衣 韩版宽松套头粉色外套",
                    "itemendprice": "29.90",
                    "tkrates": "30.00",
                    "couponmoney": "70",
                    "itemsale": "36",
                    "tkmoney": "8.97",
                    "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2930349020&activityId=d3c70c2d5e244db1bf7cf25201dcfabf",
                    "itempic": "https://img.alicdn.com/imgextra/i3/2378443470/O1CN017n2eCk1bVIw7fGSDO_!!2378443470.jpg",
                    "shoptype": "B",
                    "shopname": "宝薇洛旗舰店",
                    "itemprice": "99.90"
                }
            ]
        }
    }
}
```

## 朋友圈(发现-精选单品)

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  min_id  | int  |  是  | 当前页码的参数值 |

**路径**

`/api/v1/taobaoke/selected/item`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "edit_id": "48828",/*单品id*/
                "itemid": "604787360943",/**/
                "itempic": [/*多张宝贝图片，含实拍图（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                    "http://img03.taobaocdn.com:80/tfscom/TB1_0nRzrj1gK0jSZFuXXcrHpXa",
                    "http://img01.taobaocdn.com:80/tfscom/TB1dlPOzrH1gK0jSZFwXXc7aXXa",
                    "http://img03.taobaocdn.com:80/tfscom/TB1GqYPzAT2gK0jSZPcXXcKkpXa",
                    "http://img02.taobaocdn.com:80/tfscom/TB193fKzuL2gK0jSZPhXXahvXXa",
                    "http://img03.taobaocdn.com:80/tfscom/TB1xfjQzq61gK0jSZFlXXXDKFXa",
                    "http://img02.taobaocdn.com:80/tfscom/TB1iYfOzAL0gK0jSZFxXXXWHVXa",
                    "http://img01.taobaocdn.com:80/tfscom/TB13EzOzuL2gK0jSZFmXXc7iXXa",
                    "http://img01.taobaocdn.com:80/tfscom/TB1_sTKzpT7gK0jSZFpXXaTkpXa",
                    "http://img01.taobaocdn.com:80/tfscom/TB1JZrQzAT2gK0jSZFkXXcIQFXa"
                ],
                "title": "【美粮坊】原味手抓饼25片",/*宝贝标题*/
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2200627858497&activityId=13ff3fb5e8ba4b3dbac983730306cca7",/*优惠券链接*/
                "copy_content": "你看，方便又好吃😍&lt;br&gt;ta蕞爱的❤手抓饼&lt;br&gt;足足25片💰16.9元&lt;br&gt;🌹搭上鸡蛋火腿酱料&lt;br&gt;一次能吃两张呢✌",/*导购文案复制内容，含表情*/
                "comment": "$淘口令$",/*朋友圈评论内容（表情未处理），多条评论用“|”做区分*/
                "add_time": "1585106992",/**/
                "show_time": "1585106992",/*展示时间戳*/
                "itemendprice": "16.90",/*宝贝券后价*/
                "couponmoney": "10.00",/*优惠券金额*/
                "sola_image": "https://img.alicdn.com/imgextra/i3/2200627858497/O1CN01JEyStJ2CdfwkjLPaW_!!0-item_pic.jpg",/**/
                "dummy_click_statistics": "483",/*该商品被分享次数*/
                "tkrates": "20.00",/*佣金比例*/
                "itemprice": "29.90",/*在售价*/
                "content": "你看，方便又好吃$emoji表情[5]$\r\nta蕞爱的$emoji表情[39]$手抓饼\r\n足足25片$emoji表情[158]$16.9元\r\n$emoji表情[287]$搭上鸡蛋火腿酱料\r\n一次能吃两张呢$emoji表情[60]$",/*单品导购内容（表情未处理）*/
                "show_content": "你看，方便又好吃&lt;img src='http://img.haodanku.com/1_bqfh6.png' data-emoji='5'&gt;&lt;br&gt;ta蕞爱的&lt;img src='http://img.haodanku.com/1_bqfh171.png' data-emoji='39'&gt;手抓饼&lt;br&gt;足足25片&lt;img src='http://img.haodanku.com/3_bqfh76.png' data-emoji='158'&gt;16.9元&lt;br&gt;&lt;img src='http://img.haodanku.com/2_bqfh67.png' data-emoji='287'&gt;搭上鸡蛋火腿酱料&lt;br&gt;一次能吃两张呢&lt;img src='http://img.haodanku.com/1_bqfh110.png' data-emoji='60'&gt;",/*导购文案展示内容，含表情*/
                "copy_comment": "$淘口令$",/*朋友圈评论复制内容，含表情，多条评论用“|”做区分*/
                "show_comment": "$淘口令$",/*朋友圈评论展示内容，含表情，多条评论用“|”做区分*/
                "itemtitle": "【美粮坊】原味手抓饼25片",/*宝贝标题*/
                "advise_time": "1585106992",/**/
            },
            {
                "edit_id": "48810",
                "itemid": "601760340859",
                "itempic": [
                    "http://img03.taobaocdn.com:80/tfscom/TB18frGzrj1gK0jSZFuXXcrHpXa",
                    "https://img.alicdn.com/imgextra/i2/704957370/O1CN01LNqbBo24JVaLKMzcv_!!704957370.jpg",
                    "https://img.alicdn.com/imgextra/i1/704957370/O1CN01W5Apw724JVaLcxDvC_!!704957370.jpg",
                    "http://img01.taobaocdn.com:80/tfscom/TB1jnvAzEY1gK0jSZFMXXaWcVXa"
                ],
                "title": "【飞科】全身水洗智能充电式剃须刀",
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=704957370&activityId=11d2a718c72e4b45ae5bdcf519dd9f64",
                "copy_content": "飞科剃须刀你值得拥有😏&lt;br&gt;⭕3D独立浮动刀头设计&lt;br&gt;券后仅49.9💰&lt;br&gt;👉顺滑触感，劲爽剃须&lt;br&gt;赶紧给男票、老爸换上👀",
                "comment": ".\r\nfuzhi@$淘口令$进入【Tao宝】",
                "add_time": "1585101340",
                "show_time": "1585105200",
                "itemendprice": "49.90",
                "couponmoney": "20.00",
                "sola_image": "https://gw.alicdn.com/imgextra/i2/704957370/O1CN011pqRH224JVatqSlAY_!!704957370-0-pixelsss.jpg",
                "dummy_click_statistics": "419",
                "tkrates": "30.00",
                "itemprice": "69.90",
                "content": "飞科剃须刀你值得拥有$emoji表情[14]$\r\n$emoji表情[393]$3D独立浮动刀头设计\r\n券后仅49.9$emoji表情[158]$\r\n$emoji表情[66]$顺滑触感，劲爽剃须\r\n赶紧给男票、老爸换上$emoji表情[107]$",
                "show_content": "飞科剃须刀你值得拥有&lt;img src='http://img.haodanku.com/1_bqfh56.png' data-emoji='14'&gt;&lt;br&gt;&lt;img src='http://img.haodanku.com/5_bqfh136.png' data-emoji='393'&gt;3D独立浮动刀头设计&lt;br&gt;券后仅49.9&lt;img src='http://img.haodanku.com/3_bqfh76.png' data-emoji='158'&gt;&lt;br&gt;&lt;img src='http://img.haodanku.com/1_bqfh116.png' data-emoji='66'&gt;顺滑触感，劲爽剃须&lt;br&gt;赶紧给男票、老爸换上&lt;img src='http://img.haodanku.com/1_bqfh101.png' data-emoji='107'&gt;",
                "copy_comment": ".&lt;br&gt;fuzhi@$淘口令$进入【Tao宝】",
                "show_comment": ".&lt;br&gt;fuzhi@$淘口令$进入【Tao宝】",
                "itemtitle": "【飞科】全身水洗智能充电式剃须刀",
                "advise_time": "1585105200"
            }
        ]
    }
}
```

## 精编文案

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  min_id  | int  |  是  | 当前页码的参数值 |

**路径**

`/api/v1/taobaoke/excellent/editor`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 2,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "product_id": "32798813",/*自增ID*/
                "itemid": "608721946165",/*宝贝ID*/
                "text": "&lt;item&gt;&lt;cw&gt;&lt;br&gt;牙刷用久&lt;img src='http://img.haodanku.com/4_bqfh71.png'&gt;该换就要换！&lt;br&gt;居家必备&lt;img src='http://img.haodanku.com/1_bqfh91.png'&gt;家庭装牙刷&lt;br&gt;细柔软毛，柔韧护龈&lt;img src='http://img.haodanku.com/1_bqfh169.png'&gt;&lt;br&gt;6支装，券后仅10.9&lt;img src='http://img.haodanku.com/3_bqfh76.png'&gt;&lt;br&gt;比超市买划算多了&lt;img src='http://img.haodanku.com/1_bqfh6.png'&gt;&lt;br&gt;",/*文案展示内容*/
                "time": "1585117800",/*发布时间时间戳*/
                "couponmoney": "20",/*优惠券金额*/
                "itemprice": "30.90",/*在售价*/
                "itemendprice": "10.90",/*宝贝券后价*/
                "discount": "3.50",/*折扣力度*/
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2206608670122&activityId=6043a24c66e748b7a48f2455e2f921d3",/*优惠券链接*/
                "itempic": "https://img.alicdn.com/imgextra/i3/2206608670122/O1CN01cdF5O51CluuUzMbip_!!0-item_pic.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i4/716824265/TB29otVd7fb_uJkHFrdXXX2IVXa_!!716824265.jpg_310x310.jpg）*/
                "itempic_copy": "http://img04.taobaocdn.com:80/tfscom/TB1so6Rzrj1gK0jSZFOXXc7GpXa",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问) */
                "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                "tkrates": "40.00",/*佣金比例*/
                "tkmoney": "4.36",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                "itemshorttitle": "刷牙大师麦纤维竹炭牙刷6只装",/*宝贝短标题*/
                "copy_text": "牙刷用久⚠该换就要换！&lt;br&gt;居家必备✨家庭装牙刷&lt;br&gt;细柔软毛，柔韧护龈💜&lt;br&gt;6支装，券后仅10.9💰&lt;br&gt;比超市买划算多了😍&lt;br&gt;——————————&lt;br&gt;",/*文案复制内容*/
                "original_text": "牙刷用久$emoji表情[448]$该换就要换！&lt;br&gt;居家必备$emoji表情[43]$家庭装牙刷&lt;br&gt;细柔软毛，柔韧护龈$emoji表情[36]$&lt;br&gt;6支装，券后仅10.9$emoji表情[158]$&lt;br&gt;比超市买划算多了$emoji表情[5]$&lt;br&gt;——————————&lt;br&gt;",/*文案展示内容,表情未处理*/
                "itemdesc": "",/*宝贝推荐语*/
            },
            {
                "product_id": "32799771",
                "itemid": "37784438290",
                "text": "&lt;item&gt;&lt;cw&gt;&lt;br&gt;卫生间/厨房/房门地毯&lt;img src='http://img.haodanku.com/1_bqfh92.png'&gt;&lt;br&gt;厚实柔软&lt;img src='http://img.haodanku.com/2_bqfh107.png'&gt;踩上去很舒服&lt;br&gt;40*60cm 券后仅5&lt;img src='http://img.haodanku.com/3_bqfh76.png'&gt;&lt;br&gt;吸水性好&lt;img src='http://img.haodanku.com/1_bqfh96.png'&gt;乳胶防滑底&lt;br&gt;隔断潮气，除泥刮沙&lt;img src='http://img.haodanku.com/1_bqfh108.png'&gt;&lt;br&gt;——————————&lt;br&gt;&lt;cw&gt;&lt;item&gt;",
                "time": "1585118700",
                "couponmoney": "5",
                "itemprice": "10.00",
                "itemendprice": "5.00",
                "discount": "5.00",
                "couponurl": "https://uland.taobao.com/quan/detail?sellerId=721190952&activityId=96c9817e70f442138ad0513baf8f246d",
                "itempic": "https://img.alicdn.com/imgextra/i1/721190952/O1CN01CkJr4r1Iu3djxjtgg_!!0-item_pic.jpg",
                "itempic_copy": "http://img03.taobaocdn.com:80/tfscom/TB1o623zET1gK0jSZFrXXcNCXXa",
                "shoptype": "B",
                "tkrates": "30.00",
                "tkmoney": "1.50",
                "itemshorttitle": "【斯美儿】家用吸水地垫",
                "copy_text": "&lt;br&gt;卫生间/厨房/房门地毯🌟&lt;br&gt;厚实柔软☁踩上去很舒服&lt;br&gt;40*60cm 券后仅5💰&lt;br&gt;吸水性好💦乳胶防滑底&lt;br&gt;隔断潮气，除泥刮沙👊&lt;br&gt;——————————&lt;br&gt;",
                "original_text": "&lt;br&gt;卫生间/厨房/房门地毯$emoji表情[44]$&lt;br&gt;厚实柔软$emoji表情[246]$踩上去很舒服&lt;br&gt;40*60cm 券后仅5$emoji表情[158]$&lt;br&gt;吸水性好$emoji表情[50]$乳胶防滑底&lt;br&gt;隔断潮气，除泥刮沙$emoji表情[58]$&lt;br&gt;——————————&lt;br&gt;",
                "itemdesc": ""
            }
        ]
    }
}
```

## 好货专场

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  min_id  | int  |  是  | 当前页码的参数值 |

**路径**

`/api/v1/taobaoke/subject/hot`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "min_id": 1585044000,/*作为请求地址中获取下一页的参数值*/
        "items": [
            {
                "subject_id": "9898",/*专场id*/
                "name": "火爆牛货",/*专场短标题*/
                "content": "都爆了！爆了！爆了！\n真正的牛货$emoji表情[263]$\n趁有券$emoji表情[65]$赶紧入手~",/*专场导购内容*/
                "app_hot_image": "http://img.haodanku.com/FtsTlJNkcx4vfC1D9CDB4KIyzpDy-600",/**/
                "addtime": "1585030063",/**/
                "activity_start_time": "1585108800",/*专场开始时间戳*/
                "activity_end_time": "1585238399",/*专场结束时间戳*/
                "share_times": "4638",/*专场商品被分享次数*/
                "item_type": "1",/**/
                "show_text": "都爆了！爆了！爆了！&lt;br&gt;真正的牛货&lt;img src='http://img.haodanku.com/2_bqfh12.png' data-emoji='263'&gt;&lt;br&gt;趁有券&lt;img src='http://img.haodanku.com/1_bqfh115.png' data-emoji='65'&gt;赶紧入手~",/*导购文案展示内容，含表情*/
                "copy_text": "都爆了！爆了！爆了！&lt;br&gt;真正的牛货🐮&lt;br&gt;趁有券👇赶紧入手~",/*导购文案复制内容，含表情*/
                "item_data": [/**/
                    {
                        "product_id": "11423608",/*自增ID*/
                        "subject_id": "9898",/*专场id*/
                        "itemid": "599535127646",/*宝贝ID*/
                        "itemtitle": "Missface面部精华安瓶套装补水保湿祛痘精华淡化皱纹滋润修护正品",/*宝贝标题*/
                        "itemshorttitle": "Missface面部精华安瓶套装",/*宝贝短标题*/
                        "itemdesc": "【屈臣氏有售！拍三件，第二件，第三件0元！】由法国嘉法狮GATTEFOSSE提供的原料及配方！高纯度小分子玻尿酸，美白精华烟酰胺；美白滋润，肉眼可见的皮肤变得水润紧致一天一抹，越活越年轻，令你突破年龄",/*宝贝推荐语*/
                        "itemprice": 408,/*在售价*/
                        "itemsale": "203110",/*宝贝月销量*/
                        "itemsale2": "3148",/*宝贝近2小时跑单*/
                        "todaysale": "3910",/*当天销量*/
                        "itempic": "https://img.alicdn.com/imgextra/i3/2677460978/O1CN01fP4mj61J5xu4CFF1T_!!2677460978.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                        "itempic_copy": "0_599535127646_1577761422.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                        "itempic_type": "0",/**/
                        "fqcat": "4",/*商品类目：1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物*/
                        "itemendprice": 38,/*宝贝券后价*/
                        "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                        "couponurl": "http://uland.taobao.com/quan/detail?sellerId=1029624918&activityId=3df4dee680c240cf9610588692987319",/*优惠券链接*/
                        "couponstarttime": "1585065600",/*优惠券开始时间*/
                        "couponendtime": "1585238399",/*优惠券结束时间*/
                        "couponmoney": "370",/*优惠券金额*/
                        "is_brand": "0",/*是否为品牌产品（1是）*/
                        "is_live": "0",/*是否为直播产品（1是）*/
                        "guide_article": "【屈臣氏有售！拍三件，第二件，第三件0元！】由法国嘉法狮GATTEFOSSE提供的原料及配方！高纯度小分子玻尿酸，美白精华烟酰胺；美白滋润，肉眼可见的皮肤变得水润紧致一天一抹，越活越年轻，令你突破年龄",/*推广导购文案*/
                        "videoid": "0",/*商品视频ID（id大于0的为有视频单，视频拼接地址http://cloud.video.taobao.com/play/u/1/p/1/e/6/t/1/+videoid+.mp4）*/
                        "activity_type": "普通活动",/*活动类型：普通活动 聚划算 淘抢购*/
                        "clickurl": "",/**/
                        "tkrates": 0.3,/*佣金比例*/
                        "son_category": "50011993",/**/
                        "activityid": null,/**/
                    },
                    {
                        "product_id": "11423611",
                        "subject_id": "9898",
                        "itemid": "612416875757",
                        "itemtitle": "好运花山茶橄榄食用油5L山茶籽调和油物理压榨橄榄油非转基因包邮",
                        "itemshorttitle": "好运花山茶橄榄食用油5L",
                        "itemdesc": "【极速发货】PICC质保产品，橄榄用调和油5L，物理压榨工艺，物理压油、美食享受，点滴浓香，均衡营养，绿色健康，吃放心的好油！",
                        "itemprice": 79.8,
                        "itemsale": "4099",
                        "itemsale2": "1943",
                        "todaysale": "2146",
                        "itempic": "http://img.alicdn.com/imgextra/i3/2207402031858/O1CN01jjZQqI1Pb0TTmAVfS_!!0-item_pic.jpg",
                        "itempic_copy": "0_612416875757_1583719474.jpg",
                        "itempic_type": "0",
                        "fqcat": "11",
                        "itemendprice": 54.8,
                        "shoptype": "B",
                        "couponurl": "https://uland.taobao.com/quan/detail?sellerId=2207402031858&activityId=b3c3a1f2655a4162ad99d46a58e91b17",
                        "couponstarttime": "1585065600",
                        "couponendtime": "1585411199",
                        "couponmoney": "25",
                        "is_brand": "0",
                        "is_live": "0",
                        "guide_article": "【极速发货】PICC质保产品，橄榄用调和油5L，物理压榨工艺，物理压油、美食享受，点滴浓香，均衡营养，绿色健康，吃放心的好油！",
                        "videoid": "0",
                        "activity_type": "普通活动",
                        "clickurl": "",
                        "tkrates": 0.2,
                        "son_category": "50050381",
                        "activityid": null
                    }
                ]
            },
            {
                "subject_id": "9893",
                "name": "万金油百搭小白鞋",
                "content": "万金油百搭小白鞋$emoji表情[77]$\n没有什么衣服不能配吧！\n休闲范、清爽又养眼$emoji表情[43]$\n$emoji表情[293]$一双就能度过一春一夏~\n$emoji表情[285]$也可以入两双换着穿哦~",
                "app_hot_image": "http://img.haodanku.com/FtDXa_9_OX-0VxOMDZxSVY9LJyCq-600",
                "addtime": "1585021741",
                "activity_start_time": "1585105200",
                "activity_end_time": "1585238399",
                "share_times": "5079",
                "item_type": "1",
                "show_text": "万金油百搭小白鞋&lt;img src='http://img.haodanku.com/1_bqfh132.png' data-emoji='77'&gt;&lt;br&gt;没有什么衣服不能配吧！&lt;br&gt;休闲范、清爽又养眼&lt;img src='http://img.haodanku.com/1_bqfh91.png' data-emoji='43'&gt;&lt;br&gt;&lt;img src='http://img.haodanku.com/2_bqfh77.png' data-emoji='293'&gt;一双就能度过一春一夏~&lt;br&gt;&lt;img src='http://img.haodanku.com/2_bqfh65.png' data-emoji='285'&gt;也可以入两双换着穿哦~",
                "copy_text": "万金油百搭小白鞋👯&lt;br&gt;没有什么衣服不能配吧！&lt;br&gt;休闲范、清爽又养眼✨&lt;br&gt;🌴一双就能度过一春一夏~&lt;br&gt;🌷也可以入两双换着穿哦~",
                "item_data": [
                    {
                        "product_id": "11423421",
                        "subject_id": "9893",
                        "itemid": "582797953182",
                        "itemtitle": "特步板鞋女鞋2020春季新款空军一号男鞋小白鞋女休闲鞋女运动鞋子",
                        "itemshorttitle": "2020新款特步经典情侣潮流板鞋",
                        "itemdesc": "【特步官方直营】经典百搭板鞋，做工精细，舒适透气、自带增高效果，耐穿让你享受青春自由行走，舒适穿着体验与当下潮流结合，青春活力又不乏鲜活时尚格调。各种风格都能轻松驾驭，多色可选！【赠运费险】",
                        "itemprice": 129,
                        "itemsale": "4055",
                        "itemsale2": "109",
                        "todaysale": "178",
                        "itempic": "http://img.alicdn.com/imgextra/i2/405119695/O1CN0110tYku2LUMRdT5jT5_!!405119695.jpg",
                        "itempic_copy": "0_582797953182_1584980116.jpg",
                        "itempic_type": "0",
                        "fqcat": "6",
                        "itemendprice": 109,
                        "shoptype": "B",
                        "couponurl": "http://uland.taobao.com/quan/detail?sellerId=405119695&activityId=598073335ad74e71adec6cb04ee1bbc6",
                        "couponstarttime": "1584979200",
                        "couponendtime": "1585583999",
                        "couponmoney": "20",
                        "is_brand": "3",
                        "is_live": "0",
                        "guide_article": "【特步官方直营】经典百搭板鞋，做工精细，舒适透气、自带增高效果，耐穿让你享受青春自由行走，舒适穿着体验与当下潮流结合，青春活力又不乏鲜活时尚格调。各种风格都能轻松驾驭，多色可选！【赠运费险】",
                        "videoid": "0",
                        "activity_type": "普通活动",
                        "clickurl": "",
                        "tkrates": 0.2,
                        "son_category": "50012043",
                        "activityid": null
                    },
                    {
                        "product_id": "11423416",
                        "subject_id": "9893",
                        "itemid": "608281426102",
                        "itemtitle": "小白鞋女ins2020春季新款百搭韩版ulzzang鞋子运动休闲网红板鞋潮",
                        "itemshorttitle": "小白鞋女ins2020春季新款百",
                        "itemdesc": "【夏季小仙女必备小白鞋，多款任选！】面料柔软细腻，耐磨强势升级，韧性强穿着舒适柔软，加绒内里稳固后跟符合人体受力，【无差评，天猫九年老店，品质信得过】七天无理由退换!",
                        "itemprice": 59.9,
                        "itemsale": "45",
                        "itemsale2": "0",
                        "todaysale": "0",
                        "itempic": "https://img.alicdn.com/imgextra/i1/2378443470/O1CN01akH1Wp1bVIwEav7eh_!!2378443470.jpg",
                        "itempic_copy": "0_608281426102_1584980709.jpg",
                        "itempic_type": "0",
                        "fqcat": "6",
                        "itemendprice": 54.9,
                        "shoptype": "B",
                        "couponurl": "https://uland.taobao.com/quan/detail?sellerId=745738500&activityId=23b0a1f90536405cbb765a13059f53ab",
                        "couponstarttime": "1584892800",
                        "couponendtime": "1585497599",
                        "couponmoney": "5",
                        "is_brand": "0",
                        "is_live": "0",
                        "guide_article": "【夏季小仙女必备小白鞋，多款任选！】面料柔软细腻，耐磨强势升级，韧性强穿着舒适柔软，加绒内里稳固后跟符合人体受力，【无差评，天猫九年老店，品质信得过】七天无理由退换!",
                        "videoid": "0",
                        "activity_type": "普通活动",
                        "clickurl": "",
                        "tkrates": 0.2,
                        "son_category": "50012027",
                        "activityid": null
                    }
                ]
            }
        ]
    }
}
```



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
                    "couponurl": "https:\/\/uland.taobao.com\/quan\/detail?sellerId=880734502&activityId=c9e7edc3f9a743bd880685cf464c9d52",/*优惠券链接*/
                    "brand_name": "Three Squirrels\/三只松鼠",/*品牌名称*/
                    "itempic": "http:\/\/img.alicdn.com\/imgextra\/i3\/880734502\/O1CN014rf7cP1j7xePzVOGg_!!880734502.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
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
                    "couponurl": "https:\/\/uland.taobao.com\/quan\/detail?sellerId=880734502&activityId=90d33a2ab65044929d825f793be3b26c",
                    "brand_name": "Three Squirrels\/三只松鼠",
                    "itempic": "https:\/\/img.alicdn.com\/imgextra\/i1\/880734502\/O1CN01dRZ3jT1j7xZ6j5y02_!!0-item_pic.jpg",
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

## 各大榜单

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
|  sale_type  | int  |  是  | 榜单类型：sale_type=1是实时销量榜（近2小时销量），type=2是今日爆单榜，type=3是昨日爆单榜，type=4是出单指数版 |
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
                "itempic": "https:\/\/img.alicdn.com\/imgextra\/i2\/2643296737\/O1CN01UdhXbv1zdapRvduat_!!2643296737.jpg",/*宝贝主图原始图像（由于图片原图过大影响加载速度，建议加上后缀_310x310.jpg，如https://img.alicdn.com/imgextra/i2/3412518427/TB26gs7bb7U5uJjSZFFXXaYHpXa_!!3412518427.jpg_310x310.jpg）*/
                "itempic_copy": "0_602415106993_1584946413.jpg",/*推广长图（带http://img.haodanku.com/0_553757100845_1509175123.jpg-600进行访问）*/
                "fqcat": "10",/*商品类目：1女装，2男装，3内衣，4美妆，5配饰，6鞋品，7箱包，8儿童，9母婴，10居家，11美食，12数码，13家电，14其他，15车品，16文体，17宠物 */
                "itemendprice": "9.90",/*宝贝券后价*/
                "shoptype": "B",/*店铺类型：天猫（B）淘宝店（C）*/
                "tktype": "营销计划",/*佣金计划：隐藏 营销*/
                "tkrates": "45.00",/*佣金比例*/
                "cuntao": "1",/**/
                "tkmoney": "4.46",/*预计可得（宝贝价格 * 佣金比例 / 100）*/
                "couponurl": "http:\/\/uland.taobao.com\/quan\/detail?sellerId=2201314571834&activityId=55918a76f9fc4a869400a38e53fe30c3",/*优惠券链接*/
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
                "taobao_image": "http:\/\/img.alicdn.com\/imgextra\/i3\/2201314571834\/O1CN01PVSmVb1PQ0yOXispo_!!2201314571834.jpg,http:\/\/img.alicdn.com\/imgextra\/i2\/2201314571834\/O1CN01XuWCAY1PQ0yMsJKw5_!!2201314571834.jpg,http:\/\/img.alicdn.com\/imgextra\/i4\/2201314571834\/O1CN01dKE0gM1PQ0yO5ZeZi_!!2201314571834.jpg,http:\/\/img.alicdn.com\/imgextra\/i1\/2201314571834\/O1CN01kJtF6V1PQ0yKKCHzo_!!2201314571834.jpg,http:\/\/img.alicdn.com\/imgextra\/i3\/2201314571834\/O1CN01HmrfCd1PQ0yMsKPQ8_!!2201314571834.jpg",/**/
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
                "itempic": "http:\/\/img.alicdn.com\/imgextra\/i4\/3078737450\/O1CN01KDtY1j24u9H7SXnVr_!!3078737450.jpg",
                "itempic_copy": "0_613671927677_1585050292.jpg",
                "fqcat": "10",
                "itemendprice": "9.90",
                "shoptype": "B",
                "tktype": "营销计划",
                "tkrates": "40.00",
                "cuntao": "1",
                "tkmoney": "3.96",
                "couponurl": "https:\/\/uland.taobao.com\/quan\/detail?sellerId=3078737450&activityId=7299b2f42d114fa9bdd81c6478ac7a3c",
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
                "taobao_image": "http:\/\/img.alicdn.com\/imgextra\/i3\/3078737450\/O1CN0186DEi324u9HQnYiZK_!!3078737450.png,http:\/\/img.alicdn.com\/imgextra\/i3\/3078737450\/O1CN01fciqAM24u9HIcmVnG_!!3078737450.png,http:\/\/img.alicdn.com\/imgextra\/i2\/3078737450\/O1CN01yJAMZC24u9HIFerUC_!!3078737450.jpg,http:\/\/img.alicdn.com\/imgextra\/i4\/3078737450\/O1CN011XAtQZ24u9HIFeBvu_!!3078737450.jpg,http:\/\/img.alicdn.com\/imgextra\/i4\/3078737450\/O1CN01KDtY1j24u9H7SXnVr_!!3078737450.jpg",
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

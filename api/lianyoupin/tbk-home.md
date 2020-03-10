# 淘客首页

## 淘客首页

`api/v1/taobaoke/home`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        /*栏目集合 columns-栏目 activities-活动 coupons-淘客劵 specials-特色专区 snapup-抢购 */
        "columns": [
            {
                "id": 1,
                "name": "9块9",/*栏目名称*/
                "icon": "http://file.chainonedapp.com/f999dadb2e4c3efad243bb30f6a15a8a.png",/*栏目图标*/
                "bg_img": null,/*背景图*/
                "bg_color": null,/*背景颜色*/
                "pid": 0,/*0-为订单栏目*/
                "target_id": null,/*type 为 library 该值为选品库id, material-该值为物料id，time-跳转到抢购详情该值无效,activity-该值为物料活动id*/
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,/*描述*/
                "type": "library",/*栏目类型:library-选品库,material-物料,time-限时,activity-活动*/
                "cate": "column",/*栏目分类:activity-活动,coupon-淘客券,column-栏目,special-专区*/
                "sort": 0,
                "children": []/*子栏目*/
            },
            {
                "id": 2,
                "name": "限时秒杀",
                "icon": "http://file.chainonedapp.com/10e7fba6714d9fcfe58913254fc8c6c3.png",
                "bg_img": null,
                "bg_color": null,
                "pid": 0,
                "target_id": null,
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "time",
                "cate": "column",
                "sort": 0,
                "children": []
            },
            {
                "id": 3,
                "name": "高佣热销",
                "icon": "http://file.chainonedapp.com/d6ed1ecb3fb9c75b56ba746cf7945595.png",
                "bg_img": null,
                "bg_color": null,
                "pid": 0,
                "target_id": "13366",
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "material",
                "cate": "column",
                "sort": 0,
                "children": []
            },
            {
                "id": 4,
                "name": "吃喝玩乐",
                "icon": "http://file.chainonedapp.com/5b7123bbf132b9ef9f3e147991d56ea4.png",
                "bg_img": null,
                "bg_color": null,
                "pid": 0,
                "target_id": "30443",
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "material",
                "cate": "column",
                "sort": 0,
                "children": [
                    {
                        "id": 5,
                        "name": "电影代金券",
                        "icon": null,
                        "bg_img": null,
                        "bg_color": null,
                        "pid": 4,
                        "target_id": "19812",
                        "ad_ids": null,
                        "recommend_cover": null,
                        "desc": null,
                        "type": "material",
                        "cate": "column",
                        "sort": 0
                    },
                    {
                        "id": 6,
                        "name": "视频年卡",
                        "icon": null,
                        "bg_img": null,
                        "bg_color": null,
                        "pid": 4,
                        "target_id": "28636",
                        "ad_ids": null,
                        "recommend_cover": null,
                        "desc": null,
                        "type": "material",
                        "cate": "column",
                        "sort": 0
                    },
                    {
                        "id": 7,
                        "name": "酒店",
                        "icon": null,
                        "bg_img": null,
                        "bg_color": null,
                        "pid": 4,
                        "target_id": "27913",
                        "ad_ids": null,
                        "recommend_cover": null,
                        "desc": null,
                        "type": "material",
                        "cate": "column",
                        "sort": 0
                    },
                    {
                        "id": 8,
                        "name": "生活服务",
                        "icon": null,
                        "bg_img": null,
                        "bg_color": null,
                        "pid": 4,
                        "target_id": "28888",
                        "ad_ids": null,
                        "recommend_cover": null,
                        "desc": null,
                        "type": "material",
                        "cate": "column",
                        "sort": 0
                    },
                    {
                        "id": 9,
                        "name": "家政服务",
                        "icon": null,
                        "bg_img": null,
                        "bg_color": null,
                        "pid": 4,
                        "target_id": "19814",
                        "ad_ids": null,
                        "recommend_cover": null,
                        "desc": null,
                        "type": "material",
                        "cate": "column",
                        "sort": 0
                    }
                ]
            },
            {
                "id": 10,
                "name": "饿了么",
                "icon": "http://file.chainonedapp.com/19635de6dfd4577f84fef12ad722e39f.png",
                "bg_img": null,
                "bg_color": null,
                "pid": 0,
                "target_id": "1571715733668",
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "activity",
                "cate": "column",
                "sort": 0,
                "children": []
            }
        ],
        /*活动集合*/
        "activities": [
            {
                "id": 11,
                "name": "3.8妇女节",/*活动名称*/
                "icon": null,
                "bg_img": "http://file.chainonedapp.com/50502ce7a390955cddedad4ed3238f0f.png",
                "bg_color": "#FFAF01",
                "pid": 0,
                "target_id": null,
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "activity",
                "cate": "activity",
                "sort": 10,
                "children": [
                    {
                        "id": 12,
                        "name": "健康好物速享 春季防护指南\n",
                        "icon": null,
                        "bg_img": "http://file.chainonedapp.com/65f9510bc5076c504af62aa882b584dc.png",
                        "bg_color": null,
                        "pid": 11,
                        "target_id": "1580723222945",
                        "ad_ids": null,
                        "recommend_cover": "http://file.chainonedapp.com/50502ce7a390955cddedad4ed3238f0f.png",
                        "desc": null,
                        "type": "activity",
                        "cate": "activity",
                        "sort": 10
                    },
                    {
                        "id": 13,
                        "name": "聚划算-日常-运动户外\n",
                        "icon": null,
                        "bg_img": "http://file.chainonedapp.com/416e0f1512ce7c725398f11912b590d1.png",
                        "bg_color": null,
                        "pid": 11,
                        "target_id": "1578880439423",
                        "ad_ids": null,
                        "recommend_cover": null,
                        "desc": null,
                        "type": "activity",
                        "cate": "activity",
                        "sort": 9
                    }
                ]
            }
        ],
        "coupons": {
            "id": 14,
            "name": "乐淘券-必撸的券",
            "icon": null,
            "bg_img": "http://file.chainonedapp.com/245fe81b79708c24adbda87d02b34ab1.png",
            "bg_color": null,
            "pid": 0,
            "target_id": null,
            "ad_ids": null,
            "recommend_cover": null,
            "desc": null,
            "type": "material",
            "cate": "coupon",
            "sort": 0,
            "children": [
                {
                    "id": 15,
                    "name": "好券直播",
                    "icon": null,
                    "bg_img": "http://file.chainonedapp.com/856d9c5993895b1752b5564675d14ac8.png",
                    "bg_color": null,
                    "pid": 14,
                    "target_id": "3756",
                    "ad_ids": "58,58,58",
                    "recommend_cover": null,
                    "desc": null,
                    "type": "material",
                    "cate": "coupon",
                    "sort": 10,
                    "ads": [
                        {
                            "id": 58,
                            "title": "好券直播",
                            "image": "http://file.chainonedapp.com/73a0adf0bd77a83af2b410d57f8328f3.png",
                            "link": null,
                            "link_type": null
                        }
                    ]
                },
                {
                    "id": 16,
                    "name": "品牌券",
                    "icon": null,
                    "bg_img": "http://file.chainonedapp.com/73c8e93743205b8a509fc269961f158c.png",
                    "bg_color": null,
                    "pid": 14,
                    "target_id": "3786",
                    "ad_ids": "59",
                    "recommend_cover": null,
                    "desc": null,
                    "type": "material",
                    "cate": "coupon",
                    "sort": 9,
                    "ads": [
                        {
                            "id": 59,
                            "title": "品牌券",
                            "image": "http://file.chainonedapp.com/0cc08648632cbdccad33600b25c4f138.png",
                            "link": null,
                            "link_type": null
                        }
                    ]
                },
                {
                    "id": 17,
                    "name": "大额券",
                    "icon": null,
                    "bg_img": "http://file.chainonedapp.com/db17adc6849d6c9e8dfa3fe234f006d2.png",
                    "bg_color": null,
                    "pid": 14,
                    "target_id": "9660",
                    "ad_ids": "60",
                    "recommend_cover": null,
                    "desc": null,
                    "type": "material",
                    "cate": "coupon",
                    "sort": 9,
                    "ads": [
                        {
                            "id": 60,
                            "title": "大额神券",
                            "image": "http://file.chainonedapp.com/d493d9229dc7a48042389e543e994101.png",
                            "link": null,
                            "link_type": null
                        }
                    ]
                }
            ]
        },
        "specials": [
            {
                "id": 18,
                "name": "这有好货",
                "icon": null,
                "bg_img": "http://file.chainonedapp.com/4b98961838c16a07c7b4765b0f2c71f9.png",
                "bg_color": null,
                "pid": 0,
                "target_id": "4092",
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "material",
                "cate": "special",
                "sort": 10,
                "goods": [
                    {
                        "category_id": 50012010,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3Dkn5XGkaE92lw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUsxor5pcBORC7r6IBFBHiUiD9Umq014SDkwvzM5HMQuXQXsK0qWz7Qcysi3lX92Y3VEAyWWXZnQv1qkK7jJRXH3iiZ%2BQMlGz6FQ%3D%3D&scm=1007.19011.107453.0_4092&pvid=4f114722-19cf-438c-bc63-28acb66f29fc&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;originalFloorId:4092;pvid:4f114722-19cf-438c-bc63-28acb66f29fc;app_pvid:59590_11.88.143.75_726_1583822564234&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a74%4001",
                        "commission_rate": "0.20",
                        "coupon_amount": 5,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=PulFKRr%2FJOkNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u77pUdoGmvnMTho1uMQLTEsbpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyd72QWd8knOHzeDPiN%2FxgpEa3%2FNVb8aVvg6Y0BkYBd6K2yyKL%2FuyTAI%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a74%4001",
                        "coupon_end_time": "1585929599000",
                        "coupon_remain_count": 9343,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=PulFKRr%2FJOkNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u77pUdoGmvnMTho1uMQLTEsbpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyd72QWd8knOHzeDPiN%2FxgpEa3%2FNVb8aVvg6Y0BkYBd6K2yyKL%2FuyTAI%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a74%4001",
                        "coupon_start_fee": "6.0",
                        "coupon_start_time": "1580745600000",
                        "coupon_total_count": 10000,
                        "item_description": "",
                        "item_id": 557221190060,
                        "level_one_category_id": 50006842,
                        "level_one_category_name": "箱包皮具/热销女包/男包",
                        "nick": "孤独与寂寞11",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i3/655156018/TB2TJp5X_1GJuJjSZFKXXaQtpXa_!!655156018.jpg",
                        "seller_id": 655156018,
                        "shop_title": "懒更依",
                        "title": "2020新款单肩包女韩版文艺小清新帆布包白色百搭学院风女士手提包",
                        "user_type": 0,
                        "volume": "125",
                        "white_image": "https://img.alicdn.com/imgextra/i3/655156018/TB2hmiclInI8KJjSspeXXcwIpXa_!!655156018.jpg",
                        "zk_final_price": "28",
                        "pict_list": [
                            "//img.alicdn.com/i1/655156018/TB2qK0.XzLlJKJjSsppXXXqgFXa_!!655156018.jpg",
                            "//img.alicdn.com/i3/655156018/TB2Sq83XWaIJuJjSZFLXXbcTXXa_!!655156018.jpg",
                            "//img.alicdn.com/i1/655156018/TB2MF3FXsaCJuJjy1zcXXXPgFXa_!!655156018.jpg",
                            "//img.alicdn.com/i3/655156018/TB2hmiclInI8KJjSspeXXcwIpXa_!!655156018.jpg"
                        ]
                    },
                    {
                        "category_id": 1629,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3D2jcYAX%2FTucZw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs3dEVTrjB0GUEsI43RfmcHH9Umq014SDkwvzM5HMQuXQ93y8W7A2h%2FZfnm3%2FHYQV8kAyWWXZnQv1qkK7jJRXH3iiZ%2BQMlGz6FQ%3D%3D&scm=1007.19011.107453.0_4092&pvid=4f114722-19cf-438c-bc63-28acb66f29fc&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;originalFloorId:4092;pvid:4f114722-19cf-438c-bc63-28acb66f29fc;app_pvid:59590_11.88.143.75_726_1583822564234&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a75%4001",
                        "commission_rate": "0.10",
                        "coupon_amount": 30,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=XcIJC4I2lTENfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u7401cZlGaWzFl7aqxxX%2B%2BkPpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyaw59oZEUuOsQrorRQgzrsjj%2FljXQL3fk0A965ShR8Uk2yyKL%2FuyTAI%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a75%4001",
                        "coupon_end_time": "1586707199000",
                        "coupon_remain_count": 950,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=XcIJC4I2lTENfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u7401cZlGaWzFl7aqxxX%2B%2BkPpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyaw59oZEUuOsQrorRQgzrsjj%2FljXQL3fk0A965ShR8Uk2yyKL%2FuyTAI%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a75%4001",
                        "coupon_start_fee": "198.0",
                        "coupon_start_time": "1582992000000",
                        "coupon_total_count": 1000,
                        "item_description": "",
                        "item_id": 591397751806,
                        "level_one_category_id": 16,
                        "level_one_category_name": "女装/女士精品",
                        "nick": "宝宝宜mm",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/540036312/O1CN01cOyv301wUwTprzNxF_!!540036312.jpg",
                        "seller_id": 540036312,
                        "shop_title": "纤颜大码女装",
                        "title": "洋气连衣裙大码女装胖妹妹mm春夏装韩版雪纺印花显瘦仙女度假长裙",
                        "user_type": 0,
                        "volume": "17",
                        "white_image": "https://img.alicdn.com/imgextra/i3/540036312/O1CN01OZahjf1wUwV17fGVC_!!540036312.jpg",
                        "zk_final_price": "198",
                        "pict_list": [
                            "//img.alicdn.com/i1/540036312/O1CN01XWg5FH1wUwTkEVHp0_!!540036312.jpg",
                            "//img.alicdn.com/i3/540036312/O1CN01tIq5j41wUwTrKPFI9_!!540036312.jpg",
                            "//img.alicdn.com/i4/540036312/O1CN01E3N7HG1wUwTsJJujK_!!540036312.jpg",
                            "//img.alicdn.com/i3/540036312/O1CN01OZahjf1wUwV17fGVC_!!540036312.jpg"
                        ]
                    },
                    {
                        "category_id": 50012960,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3DCyCQMLNG4QNw4vFB6t2Z2ueEDrYVVa64Dne87AjQPk9yINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs5qPMURQNA57n8o1yb1iUumMHuv7RoNv0cDr3R%2F7QRWeYZk%2FfpE8sgtWKoIwZ4H8TH2tmL8opKjEqp44rer%2FIlrGJe8N%2FwNpGw%3D%3D&scm=1007.19011.107453.0_4092&pvid=4f114722-19cf-438c-bc63-28acb66f29fc&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;originalFloorId:4092;pvid:4f114722-19cf-438c-bc63-28acb66f29fc;app_pvid:59590_11.88.143.75_726_1583822564234&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a76%4001",
                        "commission_rate": "0.03",
                        "coupon_amount": 30,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=W8QJsY8SdX8NfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u7wRhGa84Oan7UaTEaNogzFTpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyflgKldjstw9giue2ylHVQsOSTZD3VW1kbsd25R1tHDXZQUWDPdEFUc%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a76%4001",
                        "coupon_end_time": "1585670399000",
                        "coupon_remain_count": 9915,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=W8QJsY8SdX8NfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u7wRhGa84Oan7UaTEaNogzFTpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyflgKldjstw9giue2ylHVQsOSTZD3VW1kbsd25R1tHDXZQUWDPdEFUc%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a76%4001",
                        "coupon_start_fee": "138.0",
                        "coupon_start_time": "1583337600000",
                        "coupon_total_count": 10000,
                        "item_description": "智能恒温 整机冲洗 美国涂层 收藏送礼包",
                        "item_id": 602459691687,
                        "level_one_category_id": 50012082,
                        "level_one_category_name": "厨房电器",
                        "nick": "欧汇旗舰店",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/2978642515/O1CN01lXZc9h1URuezESAtt_!!0-item_pic.jpg",
                        "seller_id": 2978642515,
                        "shop_title": "欧汇旗舰店",
                        "title": "欧汇宿舍锅学生锅电煮锅小火锅锅多功能锅家用电炒蒸煮一体电炒锅",
                        "user_type": 1,
                        "volume": "117",
                        "white_image": "https://img.alicdn.com/imgextra/TB1JTXMprY1gK0jSZTEXXXDQVXa.png",
                        "zk_final_price": "149",
                        "pict_list": [
                            "//img.alicdn.com/i2/2978642515/O1CN01tWc5Ch1URugMO5MEV_!!2978642515.jpg",
                            "//img.alicdn.com/i2/2978642515/O1CN011oXcoD1URuf6hoKfC_!!2978642515.jpg",
                            "//img.alicdn.com/i2/2978642515/O1CN01KVrYqq1URuf4eYI0r_!!2978642515.jpg",
                            "//img.alicdn.com/i1/2978642515/O1CN01wIQuls1URuf3nxpom_!!2978642515.jpg"
                        ]
                    },
                    {
                        "category_id": 50012032,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3Ddvkhnxv42ONw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs%2FohxpUwGqzUPsU5I8XltDvlTBm6mOhvTy%2FeXe5PtN%2B1%2Bv5GjHJRsEyRNYwK0uht%2F6fb4BXMHv9Uff1DNXX2LsRxKmPmpIKZsA%3D%3D&scm=1007.19011.107453.0_4092&pvid=4f114722-19cf-438c-bc63-28acb66f29fc&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;originalFloorId:4092;pvid:4f114722-19cf-438c-bc63-28acb66f29fc;app_pvid:59590_11.88.143.75_726_1583822564234&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a77%4001",
                        "commission_rate": "0.03",
                        "coupon_amount": 30,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=I6aYq7Sw8kANfLV8niU3R5TgU2jJNKOfU1BGIDN741Ez0BKd%2F02MBtYUXgYx689dSptd1aXrTrJa4rBpq3tSHYOFQt%2F3puQ7PiGj9K29yKVgcK6iYH005391Ao%2BVKPIafN1bjh3fMKhNLi0lBPiBHcURCvQwngvrE5xa8xF8TZNZCbLr7cFuWaDMcCTQGbCRA4sfsHSs2SBS2QXoMOn9se7IEmTbFGhJ1g6l2AT3YQMZao0HO%2FvX0w%3D%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a77%4001",
                        "coupon_end_time": "1583855999000",
                        "coupon_remain_count": 35000,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=I6aYq7Sw8kANfLV8niU3R5TgU2jJNKOfU1BGIDN741Ez0BKd%2F02MBtYUXgYx689dSptd1aXrTrJa4rBpq3tSHYOFQt%2F3puQ7PiGj9K29yKVgcK6iYH005391Ao%2BVKPIafN1bjh3fMKhNLi0lBPiBHcURCvQwngvrE5xa8xF8TZNZCbLr7cFuWaDMcCTQGbCRA4sfsHSs2SBS2QXoMOn9se7IEmTbFGhJ1g6l2AT3YQMZao0HO%2FvX0w%3D%3D&&app_pvid=59590_11.88.143.75_726_1583822564234&ptl=floorId:4092;app_pvid:59590_11.88.143.75_726_1583822564234;tpp_pvid:4f114722-19cf-438c-bc63-28acb66f29fc&union_lens=lensId%3AMAPI%401583822564%400b588f4b_0e41_170c32e6c0f_9a77%4001",
                        "coupon_start_fee": "138.0",
                        "coupon_start_time": "1583683200000",
                        "coupon_total_count": 70000,
                        "item_description": "",
                        "item_id": 587442961474,
                        "level_one_category_id": 50006843,
                        "level_one_category_name": "女鞋",
                        "nick": "cindy506",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/67285531/O1CN01WpwifI1qjF8okUZbd_!!67285531.jpg",
                        "seller_id": 67285531,
                        "shop_title": "妙侣MIAOLV",
                        "title": "妙侣平底绑带罗马鞋女韩版2019新款低跟包头凉鞋女夏百搭仙女的鞋",
                        "user_type": 0,
                        "volume": "19",
                        "white_image": "https://img.alicdn.com/imgextra/i2/67285531/O1CN01hdsEXN1qjF8g0xmtI_!!67285531.jpg",
                        "zk_final_price": "158",
                        "pict_list": [
                            "//img.alicdn.com/i2/67285531/O1CN01M6qmDK1qjF9HsMrLg_!!67285531.jpg",
                            "//img.alicdn.com/i1/67285531/O1CN01NWCsGR1qjF94COYBu_!!67285531.jpg",
                            "//img.alicdn.com/i4/67285531/O1CN01iny7oN1qjF96hm1x1_!!67285531.jpg",
                            "//img.alicdn.com/i2/67285531/O1CN01hdsEXN1qjF8g0xmtI_!!67285531.jpg"
                        ]
                    }
                ]
            },
            {
                "id": 19,
                "name": "潮流范儿",
                "icon": null,
                "bg_img": "http://file.chainonedapp.com/ac38a24b5df1ca31b38befa7cf1230d3.png",
                "bg_color": null,
                "pid": 0,
                "target_id": "4093",
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "material",
                "cate": "special",
                "sort": 9,
                "goods": [
                    {
                        "category_id": 50013878,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3DoDdfph7vZF5w4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs9uUPQwgfyLfYmUXiBFPCsyMHuv7RoNv0cDr3R%2F7QRWe2F%2FkPRdW%2BnAHvzYflZr6C32tmL8opKjEqp44rer%2FIlrGJe8N%2FwNpGw%3D%3D&scm=1007.19011.107457.0_4093&pvid=3648d177-6c35-458f-ab0a-49c0690af071&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;originalFloorId:4093;pvid:3648d177-6c35-458f-ab0a-49c0690af071;app_pvid:59590_11.11.34.86_40691_1583822564458&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e0%4001",
                        "commission_rate": "0.20",
                        "coupon_amount": 3,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=8lOhY%2FRFRDMNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u78AyugKtMXwrKJAX4Y4Zx7%2FpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqycCCs1ro8waewBr2ReayMmejdmzoDxp2zqop%2FtflKRJiGWqNBzv719M%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e0%4001",
                        "coupon_end_time": "1584287999000",
                        "coupon_remain_count": 100000,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=8lOhY%2FRFRDMNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u78AyugKtMXwrKJAX4Y4Zx7%2FpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqycCCs1ro8waewBr2ReayMmejdmzoDxp2zqop%2FtflKRJiGWqNBzv719M%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e0%4001",
                        "coupon_start_fee": "15.0",
                        "coupon_start_time": "1583683200000",
                        "coupon_total_count": 100000,
                        "item_description": "",
                        "item_id": 561836737281,
                        "level_one_category_id": 50013864,
                        "level_one_category_name": "饰品/流行首饰/时尚饰品新",
                        "nick": "小花sarang",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/2244590022/O1CN01lidBzj1C27FeYnehD_!!0-item_pic.jpg",
                        "seller_id": 2244590022,
                        "shop_title": "GUKUA  LI 小姐设计品牌",
                        "title": "581gukuali手工古风饰品黑色丝绒个性气质发绳发圈发带发饰纱头饰",
                        "user_type": 0,
                        "volume": "238",
                        "white_image": "",
                        "zk_final_price": "17.99",
                        "pict_list": [
                            "//img.alicdn.com/i2/2244590022/TB2u.NAfxPI8KJjSspfXXcCFXXa_!!2244590022.jpg",
                            "//img.alicdn.com/i1/TB1tPIZbgjN8KJjSZFkYXGboXXa_M2.SS2",
                            "//img.alicdn.com/i4/TB1L.gEazgy_uJjSZLeYXGPlFXa_M2.SS2",
                            "//img.alicdn.com/i1/2244590022/O1CN01gP896Z1C27GzKDD2k_!!2244590022.jpg"
                        ]
                    },
                    {
                        "category_id": 50010850,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3DJ4ROGgGZBIZw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs%2FtfnbtFRD%2BuFqsn%2BB03apL9Umq014SDk46%2BSOeTfXnPs9rrIbHAOhTsSn8IBR1ju%2FEQ%2FeISnZnlz2TFFEd9SqY%3D&scm=1007.19011.107457.0_4093&pvid=3648d177-6c35-458f-ab0a-49c0690af071&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;originalFloorId:4093;pvid:3648d177-6c35-458f-ab0a-49c0690af071;app_pvid:59590_11.11.34.86_40691_1583822564458&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e1%4001",
                        "commission_rate": "0.05",
                        "coupon_amount": 50,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=5QQv67Q9efYNfLV8niU3R5TgU2jJNKOfU1BGIDN741GUV%2BXZNWcI1Qj60xte5hGEuG1ZaNECU%2FRQvqYFIWu0JZ4o2nHA0JTu1MTAISfI%2BZAWzzg19WtoVP4Zf1P%2FTuxDcQeZ%2F3KAdon%2BGKlKvQqZlmzaMjRBe9ygIh%2BELkS1JfEE%2BdAb1JoOOt3tMbtUO%2FRd2glJhRWSEkrh0wv1jNC302uFqp8TFaHMa6FwRT%2BqM%2Fg%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e1%4001",
                        "coupon_end_time": "1583855999000",
                        "coupon_remain_count": 9000,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=5QQv67Q9efYNfLV8niU3R5TgU2jJNKOfU1BGIDN741GUV%2BXZNWcI1Qj60xte5hGEuG1ZaNECU%2FRQvqYFIWu0JZ4o2nHA0JTu1MTAISfI%2BZAWzzg19WtoVP4Zf1P%2FTuxDcQeZ%2F3KAdon%2BGKlKvQqZlmzaMjRBe9ygIh%2BELkS1JfEE%2BdAb1JoOOt3tMbtUO%2FRd2glJhRWSEkrh0wv1jNC302uFqp8TFaHMa6FwRT%2BqM%2Fg%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e1%4001",
                        "coupon_start_fee": "51.0",
                        "coupon_start_time": "1583596800000",
                        "coupon_total_count": 10000,
                        "item_description": "",
                        "item_id": 601013522394,
                        "level_one_category_id": 16,
                        "level_one_category_name": "女装/女士精品",
                        "nick": "xuhaidongshang",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/194667887/O1CN01dgg896288IK77eB4B_!!194667887.jpg",
                        "seller_id": 194667887,
                        "shop_title": "第五季名品馆",
                        "title": "短袖宽松大码连衣裙2019秋季新款女装韩版拼接显瘦打底针织中长裙",
                        "user_type": 0,
                        "volume": "32",
                        "white_image": "https://img.alicdn.com/imgextra/i3/194667887/O1CN01GTZagV288IK9f85Ug_!!194667887.jpg",
                        "zk_final_price": "299",
                        "pict_list": [
                            "//img.alicdn.com/i3/194667887/O1CN01vEBfND288IK7UaIPV_!!194667887.jpg",
                            "//img.alicdn.com/i4/194667887/O1CN01ZjFEIM288IKiCLq8b_!!194667887.jpg",
                            "//img.alicdn.com/i4/194667887/O1CN01jq5P1z288IKdYPb7q_!!194667887.jpg",
                            "//img.alicdn.com/i3/194667887/O1CN01GTZagV288IK9f85Ug_!!194667887.jpg"
                        ]
                    },
                    {
                        "category_id": 162116,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3DY6dMsRXKbk5w4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs%2FtfnbtFRD%2BuFqsn%2BB03apL9Umq014SDk46%2BSOeTfXnPBcf4VEfIUOzRqiWvTDYT2PEQ%2FeISnZnlz2TFFEd9SqY%3D&scm=1007.19011.107457.0_4093&pvid=3648d177-6c35-458f-ab0a-49c0690af071&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;originalFloorId:4093;pvid:3648d177-6c35-458f-ab0a-49c0690af071;app_pvid:59590_11.11.34.86_40691_1583822564458&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e2%4001",
                        "commission_rate": "0.05",
                        "coupon_amount": 50,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=1c%2F2yVSAPV0NfLV8niU3R5TgU2jJNKOfU1BGIDN741GUV%2BXZNWcI1Qj60xte5hGEuG1ZaNECU%2FS17G1sopgmK4cM2njCDUMcxC%2B4M8ItoHcWzzg19WtoVP4Zf1P%2FTuxDcQeZ%2F3KAdon%2BGKlKvQqZlmzaMjRBe9ygIh%2BELkS1JfEGQASttHIRqV%2FW1w85PFJ5KXTLkNzLI9Th0wv1jNC302uFqp8TFaHMa6FwRT%2BqM%2Fg%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e2%4001",
                        "coupon_end_time": "1583855999000",
                        "coupon_remain_count": 9000,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=1c%2F2yVSAPV0NfLV8niU3R5TgU2jJNKOfU1BGIDN741GUV%2BXZNWcI1Qj60xte5hGEuG1ZaNECU%2FS17G1sopgmK4cM2njCDUMcxC%2B4M8ItoHcWzzg19WtoVP4Zf1P%2FTuxDcQeZ%2F3KAdon%2BGKlKvQqZlmzaMjRBe9ygIh%2BELkS1JfEGQASttHIRqV%2FW1w85PFJ5KXTLkNzLI9Th0wv1jNC302uFqp8TFaHMa6FwRT%2BqM%2Fg%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e2%4001",
                        "coupon_start_fee": "51.0",
                        "coupon_start_time": "1583596800000",
                        "coupon_total_count": 10000,
                        "item_description": "",
                        "item_id": 579050291185,
                        "level_one_category_id": 16,
                        "level_one_category_name": "女装/女士精品",
                        "nick": "xuhaidongshang",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i3/194667887/O1CN01288IEVLUnp4gSi9_!!194667887.jpg",
                        "seller_id": 194667887,
                        "shop_title": "第五季名品馆",
                        "title": "圆领中长款打底衫女长袖2019新款秋冬时尚百搭网纱拼接镶钻上衣",
                        "user_type": 0,
                        "volume": "10",
                        "white_image": "https://img.alicdn.com/imgextra/i2/194667887/O1CN018XVP8A288IF9PYQvG_!!194667887.jpg",
                        "zk_final_price": "239",
                        "pict_list": [
                            "//img.alicdn.com/i1/194667887/O1CN01288IEVLTOY49rZ7_!!194667887.jpg",
                            "//img.alicdn.com/i2/194667887/O1CN01288IEd82lOquFy5_!!194667887.jpg",
                            "//img.alicdn.com/i3/194667887/O1CN01288IEa3dGEUX5kS_!!194667887.jpg",
                            "//img.alicdn.com/i2/194667887/O1CN018XVP8A288IF9PYQvG_!!194667887.jpg"
                        ]
                    },
                    {
                        "category_id": 50013878,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3DvJTTEiwnB8Fw4vFB6t2Z2ueEDrYVVa64juWlisr3dOdyINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs9uUPQwgfyLfYmUXiBFPCsyMHuv7RoNv0cDr3R%2F7QRWe6gg%2BPxOn9CfaEpBkKlioF32tmL8opKjEqp44rer%2FIlrGJe8N%2FwNpGw%3D%3D&scm=1007.19011.107457.0_4093&pvid=3648d177-6c35-458f-ab0a-49c0690af071&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;originalFloorId:4093;pvid:3648d177-6c35-458f-ab0a-49c0690af071;app_pvid:59590_11.11.34.86_40691_1583822564458&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e3%4001",
                        "commission_rate": "0.20",
                        "coupon_amount": 3,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=XvyTsVSU0wUNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u76Jht2mXoB82cTQe%2BOiJrKfpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyax1SZXNJGhcJxytjSfEaQSjdmzoDxp2zqop%2FtflKRJiGWqNBzv719M%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e3%4001",
                        "coupon_end_time": "1584287999000",
                        "coupon_remain_count": 100000,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=XvyTsVSU0wUNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u76Jht2mXoB82cTQe%2BOiJrKfpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyax1SZXNJGhcJxytjSfEaQSjdmzoDxp2zqop%2FtflKRJiGWqNBzv719M%3D&&app_pvid=59590_11.11.34.86_40691_1583822564458&ptl=floorId:4093;app_pvid:59590_11.11.34.86_40691_1583822564458;tpp_pvid:3648d177-6c35-458f-ab0a-49c0690af071&union_lens=lensId%3AMAPI%401583822564%400b0b2256_0e98_170c32e6c8b_e2e3%4001",
                        "coupon_start_fee": "15.0",
                        "coupon_start_time": "1583683200000",
                        "coupon_total_count": 100000,
                        "item_description": "",
                        "item_id": 608099484654,
                        "level_one_category_id": 50013864,
                        "level_one_category_name": "饰品/流行首饰/时尚饰品新",
                        "nick": "小花sarang",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/2244590022/O1CN01QVnkO81C27HqXvDMB_!!2244590022.jpg",
                        "seller_id": 2244590022,
                        "shop_title": "GUKUA  LI 小姐设计品牌",
                        "title": "GUKUA LI小姐原创手工珍珠流苏抓夹气质优雅发饰夹子发夹网红头饰",
                        "user_type": 0,
                        "volume": "77",
                        "white_image": "",
                        "zk_final_price": "17.99",
                        "pict_list": [
                            "//img.alicdn.com/i2/2244590022/O1CN01halALK1C27HqPBZJw_!!2244590022.jpg",
                            "//img.alicdn.com/i1/2244590022/O1CN01D3pNSl1C27HrpwBY2_!!2244590022.jpg",
                            "//img.alicdn.com/i1/2244590022/O1CN01FDR45v1C27HsPdkCJ_!!2244590022.jpg",
                            "//img.alicdn.com/i3/2244590022/O1CN01omQAw91C27Hovnfu0_!!2244590022.jpg"
                        ]
                    }
                ]
            },
            {
                "id": 20,
                "name": "历史新低",
                "icon": null,
                "bg_img": "http://file.chainonedapp.com/4161e019a92398b630dfa9518ec6c5cf.png",
                "bg_color": null,
                "pid": 0,
                "target_id": "4094",
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "material",
                "cate": "special",
                "sort": 9,
                "goods": [
                    {
                        "category_id": 50012042,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3DU%2Fo09gZDWnRw4vFB6t2Z2ueEDrYVVa64Dne87AjQPk9yINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUswIHd3AbiO40iqcDF5uYxRGySbHmSI7wOtef%2FroYqRldXH5t%2B8W%2BDyUUKXa0D4ZAzy1d8wk0rMbfff1DNXX2LsRxKmPmpIKZsA%3D%3D&scm=1007.19011.107455.0_4094&pvid=707bd803-e78c-40d7-848a-733a8d31f3ee&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;originalFloorId:4094;pvid:707bd803-e78c-40d7-848a-733a8d31f3ee;app_pvid:59590_11.186.137.142_635_1583822564595&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678d%4001",
                        "commission_rate": "0.20",
                        "coupon_amount": 30,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=IeIJTE5Zo%2FQNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u76cAVPwdgs%2B7n0NTCXfDjnzpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqycMLsrjcaZVBYJDYTzuFTE%2BIurO7mqoyG%2FZCYiWJ6kIv5M0kZg5qGOw%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678d%4001",
                        "coupon_end_time": "1583942399000",
                        "coupon_remain_count": 98000,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=IeIJTE5Zo%2FQNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u76cAVPwdgs%2B7n0NTCXfDjnzpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqycMLsrjcaZVBYJDYTzuFTE%2BIurO7mqoyG%2FZCYiWJ6kIv5M0kZg5qGOw%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678d%4001",
                        "coupon_start_fee": "40.0",
                        "coupon_start_time": "1583683200000",
                        "coupon_total_count": 100000,
                        "item_description": "",
                        "item_id": 606837871001,
                        "level_one_category_id": 50006843,
                        "level_one_category_name": "女鞋",
                        "nick": "雅鹿女鞋旗舰店",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/2200737287731/O1CN01ARAo1n26yqZVumR4T_!!2200737287731-0-pixelsss.jpg",
                        "seller_id": 2200737287731,
                        "shop_title": "雅鹿女鞋旗舰店",
                        "title": "雅鹿官方旗舰店女鞋2020新款春季日系小白鞋森女系百搭学生帆布鞋",
                        "user_type": 1,
                        "volume": "387",
                        "white_image": "https://img.alicdn.com/imgextra/O1CN01UXRLTC26yqYFU2zvU_!!2-item_pic.png",
                        "zk_final_price": "75",
                        "pict_list": [
                            "//img.alicdn.com/i4/2200737287731/O1CN01yb1K1F26yqYEA57RL_!!2200737287731.jpg",
                            "//img.alicdn.com/i1/2200737287731/O1CN01iF33D726yqYIVKWJg_!!2200737287731.jpg",
                            "//img.alicdn.com/i2/2200737287731/O1CN01Ljxmjq26yqYFns672_!!2200737287731.jpg",
                            "//img.alicdn.com/i3/2200737287731/O1CN012hWgds26yqYK3bJap_!!2200737287731.jpg"
                        ]
                    },
                    {
                        "category_id": 50008881,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3D%2BVaRNBhbFkZw4vFB6t2Z2ueEDrYVVa64Dne87AjQPk9yINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs4WPNpYpXCTwwmx78MEHgLv9Umq014SDkwvzM5HMQuXQvHmRFupI9j3J40hEh3beT0AyWWXZnQv1qkK7jJRXH3iiZ%2BQMlGz6FQ%3D%3D&scm=1007.19011.107455.0_4094&pvid=707bd803-e78c-40d7-848a-733a8d31f3ee&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;originalFloorId:4094;pvid:707bd803-e78c-40d7-848a-733a8d31f3ee;app_pvid:59590_11.186.137.142_635_1583822564595&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678e%4001",
                        "commission_rate": "0.15",
                        "coupon_amount": 30,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=5GniqEP7oqoNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u7wYtGQQVzA5plU9jWzKK603pIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyRe3edoBQQCAWWY6nriCM1yU6mDw7HaDTHLoWjIFR8c6VW6yqqeGJ%2FI%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678e%4001",
                        "coupon_end_time": "1585670399000",
                        "coupon_remain_count": 97331,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=5GniqEP7oqoNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u7wYtGQQVzA5plU9jWzKK603pIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyRe3edoBQQCAWWY6nriCM1yU6mDw7HaDTHLoWjIFR8c6VW6yqqeGJ%2FI%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678e%4001",
                        "coupon_start_fee": "50.0",
                        "coupon_start_time": "1582473600000",
                        "coupon_total_count": 100000,
                        "item_description": "",
                        "item_id": 600734659257,
                        "level_one_category_id": 1625,
                        "level_one_category_name": "女士内衣/男士内衣/家居服",
                        "nick": "新客旗舰店",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i4/679559267/O1CN01xaz6Ga2IKKvezi7oV_!!679559267.jpg",
                        "seller_id": 679559267,
                        "shop_title": "新客旗舰店",
                        "title": "【原创设计】1/2半罩杯聚拢内衣女无钢圈调整型小胸平胸专用文胸",
                        "user_type": 1,
                        "volume": "67",
                        "white_image": "https://img.alicdn.com/imgextra/TB1oKKzdq61gK0jSZFlXXXDKFXa.png",
                        "zk_final_price": "75",
                        "pict_list": [
                            "//img.alicdn.com/i2/679559267/O1CN01b2qquP2IKKtOE8abh_!!679559267.jpg",
                            "//img.alicdn.com/i1/679559267/O1CN010rnbIY2IKKtRQdIH2_!!679559267.jpg",
                            "//img.alicdn.com/i4/679559267/O1CN01gk9RcR2IKKtPiHoak_!!679559267.jpg",
                            "//img.alicdn.com/i4/679559267/O1CN01bmiiFf2IKKtQ9lHAu_!!679559267.jpg"
                        ]
                    },
                    {
                        "category_id": 50023320,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3D8%2B%2FDcoYVYIVw4vFB6t2Z2ueEDrYVVa64Dne87AjQPk9yINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUszW3NfAyGqRFCs9jLpx71EmMHuv7RoNv0cDr3R%2F7QRWe7cqOGmoUWQoM5qc8MKfoWX2tmL8opKjEqp44rer%2FIlrGJe8N%2FwNpGw%3D%3D&scm=1007.19011.107455.0_4094&pvid=707bd803-e78c-40d7-848a-733a8d31f3ee&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;originalFloorId:4094;pvid:707bd803-e78c-40d7-848a-733a8d31f3ee;app_pvid:59590_11.186.137.142_635_1583822564595&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678f%4001",
                        "commission_rate": "0.20",
                        "coupon_amount": 10,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=yHQrf5K%2Fzp4NfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u74qYiRcT9gdC7GLOQsc%2BpCTpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyWBMKcu5f6ivowRE5YooXMV%2BKW9WMVUMPcz6LjV7dULPZQUWDPdEFUc%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678f%4001",
                        "coupon_end_time": "1584201599000",
                        "coupon_remain_count": 98425,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=yHQrf5K%2Fzp4NfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u74qYiRcT9gdC7GLOQsc%2BpCTpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyWBMKcu5f6ivowRE5YooXMV%2BKW9WMVUMPcz6LjV7dULPZQUWDPdEFUc%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_678f%4001",
                        "coupon_start_fee": "22.0",
                        "coupon_start_time": "1583596800000",
                        "coupon_total_count": 100000,
                        "item_description": "测量精准 自动夜光 可坐可挂 闹钟 1年换新",
                        "item_id": 574002770166,
                        "level_one_category_id": 50020485,
                        "level_one_category_name": "五金/工具",
                        "nick": "凯然居家日用旗舰店",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i1/2962721078/O1CN01fs7wg71JplXPSQiV4_!!0-item_pic.jpg",
                        "seller_id": 2962721078,
                        "shop_title": "凯然居家日用旗舰店",
                        "title": "室内温度计家用精准高精度室温表干湿婴儿房温湿度计电子时钟夜光",
                        "user_type": 1,
                        "volume": "713",
                        "white_image": "https://img.alicdn.com/imgextra/TB14lXGqNv1gK0jSZFFXXb0sXXa.png",
                        "zk_final_price": "25",
                        "pict_list": [
                            "//img.alicdn.com/i1/2962721078/TB2aOwRahnaK1RjSZFBXXcW7VXa_!!2962721078.jpg",
                            "//img.alicdn.com/i1/2962721078/O1CN01aMb8gK1JplUNQDXQZ_!!0-item_pic.jpg",
                            "//img.alicdn.com/i4/2962721078/TB2zuyrlBsmBKNjSZFsXXaXSVXa_!!2962721078.jpg",
                            "//img.alicdn.com/i2/2962721078/O1CN01OdVoZl1JplVHwvDZD_!!2962721078.jpg"
                        ]
                    },
                    {
                        "category_id": 50008881,
                        "click_url": "//s.click.taobao.com/t?e=m%3D2%26s%3D9n4GdRqn%2FEpw4vFB6t2Z2ueEDrYVVa64Dne87AjQPk9yINtkUhsv0AvMSDNbmQpCa93HoE%2BR6GcWMAcoALkyVsOZ8P1IJEEm7ZMdQjZNT6tYeIHQMasnH7KGcA73gIqugvUNyyJS1KL3%2BWMkG3VUs4WPNpYpXCTwwmx78MEHgLv9Umq014SDkwvzM5HMQuXQ8SN4isNOZQ4wS6aCGT0n30AyWWXZnQv1qkK7jJRXH3iiZ%2BQMlGz6FQ%3D%3D&scm=1007.19011.107455.0_4094&pvid=707bd803-e78c-40d7-848a-733a8d31f3ee&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;originalFloorId:4094;pvid:707bd803-e78c-40d7-848a-733a8d31f3ee;app_pvid:59590_11.186.137.142_635_1583822564595&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_6790%4001",
                        "commission_rate": "0.15",
                        "coupon_amount": 30,
                        "coupon_click_url": "//uland.taobao.com/coupon/edetail?e=NB%2Fj%2BWIkDyUNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u76ddCcAZaDH8Zj7zYd3LNsvpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyYrtudc0cByOtoMp7ITBgnuU6mDw7HaDTHLoWjIFR8c6VW6yqqeGJ%2FI%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_6790%4001",
                        "coupon_end_time": "1585670399000",
                        "coupon_remain_count": 97331,
                        "coupon_share_url": "//uland.taobao.com/coupon/edetail?e=NB%2Fj%2BWIkDyUNfLV8niU3R5TgU2jJNKOfU1BGIDN741G0%2Bc5Gzwi6geKSfLX1rbqQLGbJes29FQq2QeBl4W2u76ddCcAZaDH8Zj7zYd3LNsvpIdv7ItN3cCKiXjxNZP4527DxdZgG9t3k0iMxS7ZepkgM2heCjyWJY946QEMvwnojPB6wO%2BEqyYrtudc0cByOtoMp7ITBgnuU6mDw7HaDTHLoWjIFR8c6VW6yqqeGJ%2FI%3D&&app_pvid=59590_11.186.137.142_635_1583822564595&ptl=floorId:4094;app_pvid:59590_11.186.137.142_635_1583822564595;tpp_pvid:707bd803-e78c-40d7-848a-733a8d31f3ee&union_lens=lensId%3AMAPI%401583822564%400bba898e_0e66_170c32e6d12_6790%4001",
                        "coupon_start_fee": "50.0",
                        "coupon_start_time": "1582473600000",
                        "coupon_total_count": 100000,
                        "item_description": "",
                        "item_id": 606177403987,
                        "level_one_category_id": 1625,
                        "level_one_category_name": "女士内衣/男士内衣/家居服",
                        "nick": "新客旗舰店",
                        "pict_url": "//gw.alicdn.com/bao/uploaded/i2/679559267/O1CN01Qvn5NO2IKKvfONjAo_!!679559267.jpg",
                        "seller_id": 679559267,
                        "shop_title": "新客旗舰店",
                        "title": "【原创设计】红色内衣女小胸聚拢性感本命年结婚无钢圈文胸套装",
                        "user_type": 1,
                        "volume": "55",
                        "white_image": "https://img.alicdn.com/imgextra/TB1JF9Jllv0gK0jSZKbXXbK2FXa.png",
                        "zk_final_price": "76",
                        "pict_list": [
                            "//img.alicdn.com/i2/679559267/O1CN01BiVkE52IKKuYVGn7z_!!679559267.jpg",
                            "//img.alicdn.com/i4/679559267/O1CN01hTmPlx2IKKuPeUEIF_!!679559267.jpg",
                            "//img.alicdn.com/i3/679559267/O1CN01MirX5Y2IKKuS1wY40_!!679559267.jpg",
                            "//img.alicdn.com/i1/679559267/O1CN01CuEQvZ2IKKuNiUGBb_!!679559267.jpg"
                        ]
                    }
                ]
            }
        ]
    }
}
```

## 首页抢购

`api/v1/taobaoke/home/snapuptime`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "curr_timestamp": 1583826798,/*当前时间戳*/
        "time_interval": [
            {
                "type": 1,/*1-今日 2-明日*/
                "time": 1583820000,
                "goods": [
                    {
                        "category_name": "居家百货",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3Dej7V6dikSuEcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0kMtTqoJhIvnD2fV4uwthA%2Bbgz7fsdD1Y9sBMd5pHrbVAMlll2Z0L9apCu4yUVx94omfkDJRs%2BhU%3D&union_lens=lensId:0b835ffa_0d8d_170c36f0829_9467",
                        "end_time": "2020-03-11 14:59:59",
                        "num_iid": 603538218470,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju3.alicdn.com/tps/i3/O1CN01j5Fyyi25NScoDAWx8_!!0-juitemmedia.jpg",
                        "reserve_price": "11.96",
                        "sold_num": 69,
                        "start_time": "2020-03-10 15:00:00",
                        "title": "袖珍水果刀迷你小菜刀手工小刀",
                        "total_amount": 5500,
                        "zk_final_price": "5.6"
                    },
                    {
                        "category_name": "家纺家居",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DzXmwpCcE0AkcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ01CnuhACAb5C%2FfCOmbuOARBYEOKFN6ZL7zUmqq4y2ZbfmVIRhgZILAsYMXU3NNCg%2F&union_lens=lensId:0b835ffa_0d8d_170c36f0829_9468",
                        "end_time": "2020-03-11 14:59:59",
                        "num_iid": 577723419668,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju2.alicdn.com/tps/i3/3420618994/O1CN01S74Qkh2GJIhtgtSow_!!0-item_pic.jpg",
                        "reserve_price": "29.90",
                        "sold_num": 276,
                        "start_time": "2020-03-10 15:00:00",
                        "title": "条纹拖鞋女夏浴室家居家用洗澡",
                        "total_amount": 9000,
                        "zk_final_price": "7.9"
                    },
                    {
                        "category_name": "手表配饰",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DC4gsJt8QOKUcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0hTKBVE9qGIMN67EPYX36s8TFj%2BSRweKFwfGepD1tchuTgBnj0AkzWSGFCzYOOqAQ&union_lens=lensId:0b835ffa_0d8d_170c36f0829_9469",
                        "end_time": "2020-03-11 14:59:59",
                        "num_iid": 598260741035,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju2.alicdn.com/tps/TB1IcfYsKbviK0jSZFNXXaApXXa.jpg",
                        "reserve_price": "10.60",
                        "sold_num": 20,
                        "start_time": "2020-03-10 15:00:00",
                        "title": "PU皮暗黑哥特风项圈链条奴隶牵",
                        "total_amount": 7000,
                        "zk_final_price": "8.52"
                    }
                ]
            },
            {
                "type": 1,
                "time": 1583827200,
                "goods": [
                    {
                        "category_name": "车品旅行",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DRFGkUdtiB2gcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0L0NjKrsj1pXJrRlMlJD5c7SjVgulyAIBoQG5CWgOjyB9%2FUM1dfYuxHEqY%2Bakgpmw&union_lens=lensId:0b1af702_0cd6_170c36f08ca_e1d8",
                        "end_time": "2020-03-11 16:59:59",
                        "num_iid": 604545768910,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju1.alicdn.com/tps/i3/O1CN01ctGEu91bgkpqfcbWi_!!0-juitemmedia.jpg",
                        "reserve_price": "4.60",
                        "sold_num": 0,
                        "start_time": "2020-03-10 17:00:00",
                        "title": "卓贴 五星红旗地图反光车贴",
                        "total_amount": 11000,
                        "zk_final_price": "3.4"
                    },
                    {
                        "category_name": "个护家清",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DoLRt0XZhMJMcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0wKT0JcmkwZnFsa9RJcoOr6otWBRIEFq1Q7rUKVxFl%2FDmVIRhgZILAsYMXU3NNCg%2F&union_lens=lensId:0b1af702_0cd6_170c36f08ca_e1d9",
                        "end_time": "2020-03-11 16:59:59",
                        "num_iid": 541448190617,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju1.alicdn.com/tps/i4/O1CN01f0qVqh1f0OfWoljb5_!!0-juitemmedia.jpg",
                        "reserve_price": "11.90",
                        "sold_num": 0,
                        "start_time": "2020-03-10 17:00:00",
                        "title": "买5送1 腰酸腿疼颈肩暖宫艾叶",
                        "total_amount": 6500,
                        "zk_final_price": "7.9"
                    },
                    {
                        "category_name": "数码电器",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DIy3dE%2FGJzyYcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0YwOmtzV%2FoRaMi76zt6QHuTVzkvZrQcI%2FiOyfeET3tuDmVIRhgZILAsYMXU3NNCg%2F&union_lens=lensId:0b1af702_0cd6_170c36f08ca_e1da",
                        "end_time": "2020-03-11 16:59:59",
                        "num_iid": 607666867272,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju1.alicdn.com/tps/i3/O1CN01PembuE2LCxOKcCjpY_!!0-juitemmedia.jpg",
                        "reserve_price": "28.00",
                        "sold_num": 0,
                        "start_time": "2020-03-10 17:00:00",
                        "title": "玉桂狗手机壳iphonexs 5S硅胶",
                        "total_amount": 5000,
                        "zk_final_price": "10.8"
                    }
                ]
            },
            {
                "type": 1,
                "time": 1583834400,
                "goods": [
                    {
                        "category_name": "数码电器",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DI9WC0XdA85EcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0bp1xlgyYoAFC0%2FhhnS8LgyTyNG2cPYGDaDyeDihGVLNAMlll2Z0L9apCu4yUVx94omfkDJRs%2BhU%3D&union_lens=lensId:0b152649_15fd_170c36f0971_7f13",
                        "end_time": "2020-03-11 18:59:59",
                        "num_iid": 607592469406,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju4.alicdn.com/tps/i2/O1CN01UmuYK91GINpWIrZHY_!!2-juitemmedia.png",
                        "reserve_price": "6.90",
                        "sold_num": 0,
                        "start_time": "2020-03-10 19:00:00",
                        "title": "A5笔记本子B5软面抄日记本",
                        "total_amount": 5092,
                        "zk_final_price": "2.81"
                    },
                    {
                        "category_name": "母婴童装",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DT2caf%2BUhMJEcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0XAn8%2Bz0yVQ4GmbQx6Rftvc0pRCIOv%2BzH3U2U1%2BUjFILmVIRhgZILAsYMXU3NNCg%2F&union_lens=lensId:0b152649_15fd_170c36f0971_7f14",
                        "end_time": "2020-03-11 18:59:59",
                        "num_iid": 566471942684,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju4.alicdn.com/tps/i4/O1CN01qXusvH1fm1rJUNfR9_!!0-juitemmedia.jpg",
                        "reserve_price": "19.80",
                        "sold_num": 0,
                        "start_time": "2020-03-10 19:00:00",
                        "title": "智力儿童大号七巧板 小学生一",
                        "total_amount": 5000,
                        "zk_final_price": "7.9"
                    },
                    {
                        "category_name": "居家百货",
                        "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3D9jkCFXAkRvkcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMTpI5DOSX02HMMgx22UI05Z53auEe5GkJYTrbiGTNDL0P%2Fgx%2F7tULLPhg9p%2F%2BToRyHe4n7TGWcUBIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0DflzBnNbjj31tQb9F5oV5hxALpJ33R6WhTaBq7i4om59%2FUM1dfYuxHEqY%2Bakgpmw&union_lens=lensId:0b152649_15fd_170c36f0971_7f15",
                        "end_time": "2020-03-11 18:59:59",
                        "num_iid": 586695442880,
                        "pic_url": "http://img4.tbcdn.cn/tfscom///gju3.alicdn.com/tps/TB1amj9O7zoK1RjSZFlSuui4VXa.jpg",
                        "reserve_price": "15.80",
                        "sold_num": 0,
                        "start_time": "2020-03-10 19:00:00",
                        "title": "洋桔梗花种籽子室内洋桔梗种子",
                        "total_amount": 1400,
                        "zk_final_price": "7.9"
                    }
                ]
            }
        ]
    }
}
```

## 抢购详情

`api/v1/taobaoke/snapuptime`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "curr_timestamp": 1583827086,/*当前时间戳*/
        "time_interval": [
            {
                "type": 1,/*1-今日 2-明日*/
                "time": 1583805600/*当前时段时间戳*/
            },
            {
                "type": 1,
                "time": 1583812800
            },
            {
                "type": 1,
                "time": 1583820000
            },
            {
                "type": 1,
                "time": 1583827200
            },
            {
                "type": 1,
                "time": 1583834400
            },
            {
                "type": 1,
                "time": 1583841600
            },
            {
                "type": 1,
                "time": 1583848800
            },
            {
                "type": 2,
                "time": 1583892000
            },
            {
                "type": 2,
                "time": 1583899200
            },
            {
                "type": 2,
                "time": 1583906400
            },
            {
                "type": 2,
                "time": 1583913600
            }
        ]
    }
}
```

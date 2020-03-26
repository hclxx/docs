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
        /*栏目集合 columns-栏目 activities-活动 coupons-淘客劵 specials-特色专区 snapup-抢购 trill-抖音好货 */
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
                "type": "library",/*栏目类型:library-选品库,material-物料,time-限时,activity-活动,gas-一键加油,365panning-365淘券,low:price-特价,free:shipping-包邮,brand-大牌,talent:show-达人说,discover-发现,list-榜单*/
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
            },
            {
                "id": 39,
                "name": "一键加油",
                "icon": "http://file.chainonedapp.com/4938d31b0132534f960087436d2763ff.png",
                "bg_img": null,
                "bg_color": null,
                "pid": 0,
                "target_id": null,
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "gas",
                "cate": "column",
                "sort": 1,
                "children": []
            },
            {
                "id": 40,
                "name": "365淘券",
                "icon": "http://file.chainonedapp.com/4f84d382133865349dca7dd9e528b956.png",
                "bg_img": null,
                "bg_color": null,
                "pid": 0,
                "target_id": null,
                "ad_ids": null,
                "recommend_cover": null,
                "desc": null,
                "type": "365panning",
                "cate": "column",
                "sort": 1,
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
                    }
                ]
            }
        ],
        /*抖音好货*/
        "trill": [
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
                "product_id": "16221388",
                "itemid": "597195332564",
                "seller_id": "31092",
                "itemtitle": "然萃多喝沙棘320ml*6瓶装 沙棘汁饮品果味果汁饮料",
                "itemshorttitle": "补充维C沙棘果汁饮料*6瓶",
                "itemsale": "1775",
                "itemsale2": "0",
                "itemprice": "59.90",
                "itemdesc": "【抗病毒就要多补充VC】维生素C满满，甘肃特产野生沙棘果汁饮料，马云尝过说好喝的沙棘汁！酸酸甜甜，果汁很浓，补VC增强肌体防御能力，限时优惠速抢！",
                "itempic_copy": "0_597195332564_1573528096.jpg",
                "shoptype": "B",
                "is_foreshow": "0",
                "videoid": "0",
                "activityid": "e3ef7b28af69438dbef647ae944299ce",
                "activity_type": "普通活动",
                "fqcat": "11",
                "shopid": "576305801",
                "userid": "2201546683533",
                "shopname": "然萃食品旗舰店",
                "tkrates": "20.00",
                "tkmoney": "6.98",
                "couponurl": "https:\/\/uland.taobao.com\/quan\/detail?sellerId=2201546683533&activityId=e3ef7b28af69438dbef647ae944299ce",
                "couponmoney": "25",
                "couponsurplus": "100000",
                "couponreceive": "0",
                "couponnum": "100000",
                "couponstarttime": "1585152000",
                "itemendprice": "34.90",
                "couponendtime": "1585843199",
                "general_index": "176",
                "grade_avg": "4.90",
                "rate_total": "4799",
                "todaysale": "0",
                "stock": "8024",
                "itempic": "http:\/\/img.haodanku.com\/oimg_597195332564_1570067024.jpg",
                "discount": "5.80",
                "seller_name": "穿越联盟-火线军团",
                "report_status": "0",
                "down_type": "0",
                "activity_plan": "-1",
                "dy_trill_id": "2470644",
                "dy_video_url": "http:\/\/video.haodanku.com\/7087c044d3094a9f6ff12f9d081fb2af.mp4?attname=1585191472.mp4",
                "dy_video_like_count": "58",
                "dy_video_share_count": "0",
                "dy_video_title": "一口气喝了三瓶，我赌你没喝过??#好物推荐 #上热门 #美到颤抖",
                "first_frame": "https:\/\/p3-dy.byteimg.com\/img\/tos-cn-p-0015\/3751c6948c1a4a48bff7ada5623c96c6~c5_300x400.jpeg",
                "dynamic_image": "http:\/\/video.haodanku.com\/a09b791968244d5b03bc302fb4b2bd7d.gif"
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

## 获取推荐活动

`api/v1/taobaoke/recommend/activities`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 12,
            "name": "健康好物速享 春季防护指南",
            "icon": null,
            "bg_img": "http://file.chainonedapp.com/65f9510bc5076c504af62aa882b584dc.png",/*活动中转背景*/
            "bg_color": null,
            "pid": 11,
            "target_id": "1580723222945",/*活动id*/
            "ad_ids": null,
            "recommend_cover": "http://file.chainonedapp.com/65f9510bc5076c504af62aa882b584dc.png",/*推荐图地址*/
            "type": "activity",
            "desc": "活动描述",/*活动描述*/
            "cate": "activity",
            "sort": 10
        }
    ]
}
```

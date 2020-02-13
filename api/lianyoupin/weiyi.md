# 维易淘宝接口

## 爆品热销爆款

`api/v1/weiyi/hot`

**请求方法**

`GET`

**参数**
| 名称 | 类型 | 必须 | 说明 |
| :----: | :--: | :--: | :--------------------------------------------------: |
| sort | string | 否 | 排序 默认为 total_sales_des 销量倒序 |
| page | int | 否 | 页码 默认为 1 |
| pagesize | int | 否 | 每页条数 默认 20 |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "num_iid": "588164073345",  //产品ID
            "title": "南京同仁堂菊花决明子茶枸杞金银花茶组合小包装胎菊桂花茶叶茶包",
            "pict_url": "http://img.alicdn.com/bao/uploaded/i1/4251273531/O1CN01ff1u691bxF54Egfv0_!!0-item_pic.jpg",
            "seller_id": "4251273531",//卖家ID
            "user_type": "1", //1表示天猫，0表示淘宝产品
            "volume": "16503", //30天销量
            "item_description": "买2发3 买3发5",
            "zk_final_price": "59.90",  //折后价，注意不是券后价
            "commission_rate": "60.00", //佣金率
            "coupon_amount": "20.00",  //优惠券面额
            "coupon_start_fee": "59.00", //优惠券起用门槛，满X元可用
            "coupon_total_count": "100000",  //券总量
            "coupon_remain_count": "96000",  //优惠券剩余量
            "coupon_start_time": "1580400000", //优惠券开始时间
            "coupon_end_time": "1581436799",   //结束时间
            "shop_title": "乐家老铺逸优专卖店"
        },
        {
            "num_iid": "543574320825",
            "title": "荷叶茶冬瓜荷叶茶叶纯干玫瑰花茶袋泡花草茶包组合天然决明正品子",
            "pict_url": "http://img.alicdn.com/bao/uploaded/i4/2112920217/O1CN01MwV3ev1DTQWoN286A_!!0-item_pic.jpg",
            "seller_id": "2112920217",
            "user_type": "1",
            "volume": "26177",
            "item_description": "品质花草茶 冬瓜荷叶茶",
            "zk_final_price": "29.90",
            "commission_rate": "50.00",
            "coupon_amount": "20.00",
            "coupon_start_fee": "29.00",
            "coupon_total_count": "60000",
            "coupon_remain_count": "35400",
            "coupon_start_time": "1580745600",
            "coupon_end_time": "1581350399",
            "shop_title": "九州树叶旗舰店"
        }
    ]
}
```

## 获取 9.9 包邮分类

`api/v1/weiyi/bargain/config`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": "bargain|cate" //按照 “|” 拆分使用
}
```

## 9.9包邮 商品列表

`api/v1/weiyi/bargain`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| sort  | string  |  否  |     排序            |
| para | string  |  是  |        9.9 包邮分类 名称             |
|  coupon  | int  |  否  | 默认搜索包含无券产品，当传coupon=1时则搜索有券产品 默认：1 |
|  freeship  | int  |  否  | 是否只查包邮产品，默认值 1。 |
|  client  | string  |  是  | 客户端标识 android ， ios |
|  page  | int  |  否  | 页码 默认值：1 |
|  pagesize  | int  |  否  | 每页条数 默认值：20 |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "category_id": 50003854,
            "category_name": "创意礼盒/礼品套组",
            "commission_rate": "25.00",
            "coupon_amount": "1",
            "coupon_end_time": "2020-02-26",
            "coupon_id": "efc55d5e178c43c19a977224fe4304f6",
            "coupon_info": "满10元减1元",
            "coupon_remain_count": 45785,
            "coupon_start_fee": "10",
            "coupon_start_time": "2019-12-28",
            "coupon_total_count": 50000,
            "item_description": "",
            "item_id": 579729327360,
            "item_url": "https://item.taobao.com/item.htm?id=579729327360",
            "level_one_category_id": 122950001,
            "level_one_category_name": "节庆用品/礼品",
            "nick": "颖可涵",
            "num_iid": 579729327360,
            "pict_url": "https://img.alicdn.com/bao/uploaded/i1/835499728/O1CN012LjTOTKcG6rfUrp_!!835499728.jpg",
            "provcity": "浙江 温州",
            "real_post_fee": "0.00",
            "reserve_price": "44.9",
            "seller_id": 835499728,
            "shop_dsr": 48187,
            "shop_title": "可涵创意家居用品",
            "short_title": "创意懒人礼物家居家实用生活日用品",
            "title": "创意懒人礼物家居家实用生活日用品小百货卫生间收纳抖音热门神器",
            "tk_total_commi": "105.64",
            "tk_total_sales": "16",
            "user_type": 0,
            "volume": 128,
            "white_image": "",
            "zk_final_price": "23.9",
            "small_images": [
                "https://img.alicdn.com/i1/835499728/O1CN012LjTOUlh5PjU9yI_!!835499728.png",
                "https://img.alicdn.com/i4/835499728/O1CN012LjTOVPV1aLGmr2_!!835499728.png",
                "https://img.alicdn.com/i1/835499728/O1CN012LjTOUlfwhffF38_!!835499728.png",
                "https://img.alicdn.com/i1/835499728/O1CN012LjTOVPWEQkphZZ_!!835499728.jpg"
            ]
        },
        {
            "category_id": 50003854,
            "category_name": "创意礼盒/礼品套组",
            "commission_rate": "25.00",
            "coupon_amount": "1",
            "coupon_end_time": "2020-02-26",
            "coupon_id": "efc55d5e178c43c19a977224fe4304f6",
            "coupon_info": "满10元减1元",
            "coupon_remain_count": 45785,
            "coupon_start_fee": "10",
            "coupon_start_time": "2019-12-28",
            "coupon_total_count": 50000,
            "item_description": "",
            "item_id": 579398044646,
            "item_url": "https://item.taobao.com/item.htm?id=579398044646",
            "level_one_category_id": 122950001,
            "level_one_category_name": "节庆用品/礼品",
            "nick": "颖可涵",
            "num_iid": 579398044646,
            "pict_url": "https://img.alicdn.com/bao/uploaded/i2/835499728/O1CN012LjTOXz3HmeAp3D_!!835499728.jpg",
            "provcity": "浙江 温州",
            "real_post_fee": "0.00",
            "reserve_price": "25.85",
            "seller_id": 835499728,
            "shop_dsr": 48187,
            "shop_title": "可涵创意家居用品",
            "short_title": "创意懒人家居家实用生活日用品韩国",
            "title": "创意懒人家居家实用生活日用品韩国卫生间宿舍收纳小百货商品神器",
            "tk_total_commi": "55.9",
            "tk_total_sales": "12",
            "user_type": 0,
            "volume": 99,
            "white_image": "",
            "zk_final_price": "15.85",
            "small_images": [
                "https://img.alicdn.com/i1/835499728/O1CN012LjTOXElyalmZUl_!!835499728.png",
                "https://img.alicdn.com/i3/835499728/O1CN012LjTOWPlncvhvJW_!!835499728.png",
                "https://img.alicdn.com/i4/835499728/O1CN012LjTOThP66KqAel_!!835499728.png",
                "https://img.alicdn.com/i2/835499728/O1CN012LjTOWBWIRgjjgI_!!835499728.png"
            ]
        }
    ]
}
```

## 淘宝二级分类

`api/v1/weiyi/category`

**请求方法**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "0": [
            {
                "cat_name": "女装",
                "cat_icon": "https://img.alicdn.com/imgextra/i1/2053469401/TB2oX82HL9TBuNjy0FcXXbeiFXa-2053469401.png",
                "category_id": "16",
                "parent_cid": 0
            },
            .......
            {
                "cat_name": "户外运动",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/TB2rrnsHH9YBuNjy0FgXXcxcXXa-2053469401.png",
                "category_id": "2512",
                "parent_cid": 0
            }
        ],
        "16": [
            {
                "cat_name": "外套",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN012JJhsoAOrYNlKbb-2053469401.jpg",
                "category_id": "50010548",
                "parent_cid": "16"
            },
            {
                "cat_name": "棉衣/棉服",
                "cat_icon": "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01Z8HerC2JJhtfK4DoP-2053469401.png",
                "category_id": "50008900",
                "parent_cid": "16"
            }
        ],
        "50008075": [
            {
                "cat_name": "方便速食",
                "cat_icon": "https://img.alicdn.com/imgextra/i1/2053469401/TB2gO5rtr1YBuNjSszhXXcUsFXa-2053469401.png",
                "category_id": "50025689",
                "parent_cid": "50008075"
            },
            {
                "cat_name": "保健食品",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01ExxFcs2JJhtiDQWaI-2053469401.png",
                "category_id": "50026800",
                "parent_cid": "50008075"
            }
        ],
        "50010788": [
            {
                "cat_name": "基础护肤",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/TB26D9ytAOWBuNjSsppXXXPgpXa-2053469401.png",
                "category_id": "50011993",
                "parent_cid": "50010788"
            },
            {
                "cat_name": "香氛精油",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/TB2uEk6kZuYBuNkSmRyXXcA3pXa-2053469401.png",
                "category_id": "216505",
                "parent_cid": "50010788"
            }
        ],
        "21": [
            {
                "cat_name": "纸品湿巾",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/TB2blM6kZuYBuNkSmRyXXcA3pXa-2053469401.png",
                "category_id": "50010895",
                "parent_cid": "21"
            },
            ....
            {
                "cat_name": "萌宠用品",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/TB2fO9jtruWBuNjSszgXXb8jVXa-2053469401.png",
                "category_id": "121466037",
                "parent_cid": "21"
            }
        ],
        "30": [
            {
                "cat_name": "外套",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN012JJhsokZpWGP7iV-2053469401.jpg",
                "category_id": "50010548",
                "parent_cid": "30"
            },
            ....
            {
                "cat_name": "商务装",
                "cat_icon": "https://img.alicdn.com/imgextra/i1/2053469401/TB2ziGqtr1YBuNjSszhXXcUsFXa-2053469401.png",
                "category_id": "50011130",
                "parent_cid": "30"
            }
        ],
        "50012906": [
            {
                "cat_name": "单鞋",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/TB2DRVQtrSYBuNjSspiXXXNzpXa-2053469401.png",
                "category_id": "124738018",
                "parent_cid": "50012906"
            },
            ....
            {
                "cat_name": "男鞋",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01ZeStzq2JJhutLI2sv-2053469401.png",
                "category_id": "50011740",
                "parent_cid": "50012906"
            }
        ],
        "50019790": [
            {
                "cat_name": "耳机",
                "cat_icon": "https://img.alicdn.com/imgextra/i2/2053469401/TB2AWDVk5CYBuNkHFCcXXcHtVXa-2053469401.png",
                "category_id": "1205",
                "parent_cid": "50019790"
            },
            ....
            {
                "cat_name": "加湿器",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01QNge1u2JJhtijqvst-2053469401.png",
                "category_id": "350407",
                "parent_cid": "50019790"
            }
        ],
        "50014512": [
            {
                "cat_name": "婴童服饰",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01xW99ck2JJhthg0TNO-2053469401.png",
                "category_id": "50010537",
                "parent_cid": "50014512"
            },
           ....
        ],
        "50006842": [
            {
                "cat_name": "斜挎包",
                "cat_icon": "https://img.alicdn.com/imgextra/i3/2053469401/TB2aw1knBmWBuNkSndVXXcsApXa-2053469401.png",
                "category_id": "50012410",
                "parent_cid": "50006842"
            },
           ....

        ],
        "121404028": [
            {
                "cat_name": "车饰车品 ",
                "cat_icon": "https://img.alicdn.com/imgextra/i2/2053469401/TB2khNBlm8YBeNkSnb4XXaevFXa-2053469401.png",
                "category_id": "50018699",
                "parent_cid": "121404028"
            },
            .....
        ],
        "50005484": [
            {
                "cat_name": "耳饰项链",
                "cat_icon": "https://img.alicdn.com/imgextra/i2/2053469401/TB280Kntv9TBuNjy1zbXXXpepXa-2053469401.png",
                "category_id": "50013865",
                "parent_cid": "50005484"
            },
           ....
            {
                "cat_name": "其他饰品",
                "cat_icon": "https://img.alicdn.com/imgextra/i1/2053469401/TB2vlF8trGYBuNjy0FoXXciBFXa-2053469401.png",
                "category_id": "50013869",
                "parent_cid": "50005484"
            }
        ],
        "1625": [
            {
                "cat_name": "文胸",
                "cat_icon": "https://img.alicdn.com/imgextra/i2/2053469401/TB2YQuxtr9YBuNjy0FgXXcxcXXa-2053469401.png",
                "category_id": "50008881",
                "parent_cid": "1625"
            },
           ....
        ],
        "50008779": [
            {
                "cat_name": "四件套",
                "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/TB2goMYk5CYBuNkSnaVXXcMsVXa-2053469401.png",
                "category_id": "50000512",
                "parent_cid": "50008779"
            },
           ......
        ],
        "2512": [
            {
                "cat_name": "健身装备 ",
                "cat_icon": "https://img.alicdn.com/imgextra/i2/2053469401/TB27Bmltv9TBuNjy1zbXXXpepXa-2053469401.png",
                "category_id": "121410016",
                "parent_cid": "2512"
            },
            ....
        ]
    }
}
```

**说明**
分类列表2天更新一次，获取分类列表之后请进行本地存储，
data 中 key 为 parent_cid ，顶级分类的 parent_cid 为 0.
获取各个下级分类集合，可直接根据parent_cid 获取类目集合


## 获取分类商品列表

`api/v1/weiyi/goods/list`

**请求方法**

`GET`

**参数**

|     名称     | 类型 | 必须 |           说明           |
| :----------: | :--: | :--: | :----------------------: |
|  cate_id   | int  |  是  |       商品分类 category_id         |
| sort | string  |  否  | 排序方式 综合： tk_total_sales_des（降序）,
                                         tk_total_sales_asc（升序）,
                                    销量：total_sales_des（销量降序）,
                                         total_sales_asc（销量升序）,
                                    最省： tk_rate_des（淘客佣金比率降序）,
                                          tk_rate_asc（淘客佣金比率升序）,
                                    价格： price_des（价格降序）,
                                          price_asc（价格升序）|
| page | int  |  否  | 页码 |
| pagesize | int  |  否  | 每页条数 |


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "category_id": 121410016,
            "category_name": "运动护具",
            "commission_rate": "20.04",
            "coupon_amount": "40",
            "coupon_end_time": "2020-02-09",
            "coupon_id": "fc0869df04bf44b387012df12e050939",
            "coupon_info": "满148元减40元",
            "coupon_remain_count": 6000,
            "coupon_start_fee": "148",
            "coupon_start_time": "2020-02-03",
            "coupon_total_count": 50000,
            "item_description": "",
            "item_id": 599780266738,
            "item_url": "https://item.taobao.com/item.htm?id=599780266738",
            "level_one_category_id": 50010728,
            "level_one_category_name": "运动/瑜伽/健身/球迷用品",
            "nick": "gs运动定制衣橱",
            "num_iid": 599780266738,
            "pict_url": "https://img.alicdn.com/bao/uploaded/i3/2201197781567/O1CN01Sqo8tY1NRjDesVikZ_!!2201197781567.jpg",
            "provcity": "广东 广州",
            "real_post_fee": "0.00",
            "reserve_price": "296",
            "seller_id": 2201197781567,
            "shop_dsr": 48434,
            "shop_title": "奔跑吧尼卡",
            "short_title": "运动健身束腰带女塑身衣护腰带",
            "small_images": [
                "https://img.alicdn.com/i3/2201197781567/O1CN01d6da7u1NRjD5J0KF2_!!2201197781567.jpg",
                "https://img.alicdn.com/i2/2201197781567/O1CN01FnZejA1NRjCfsY848_!!2201197781567.jpg",
                "https://img.alicdn.com/i3/2201197781567/O1CN01lO1ZOA1NRjCi1VQlk_!!2201197781567.jpg",
                "https://img.alicdn.com/i1/2201197781567/O1CN01Q0VPYL1NRjDdkeA3a_!!2201197781567.jpg"
            ],
            "title": "运动健身束腰带女 神器塑腰束腹束缚护腰带塑身衣 收腹带",
            "tk_total_commi": "912595",
            "tk_total_sales": "32090",
            "user_type": 0,
            "volume": 26791,
            "white_image": "https://img.alicdn.com/bao/uploaded/i1/2201197781567/O1CN01Q0VPYL1NRjDdkeA3a_!!2201197781567.jpg",
            "zk_final_price": "148"
        },
        {
            "category_id": 121410016,
            "category_name": "运动护具",
            "commission_rate": "2.00",
            "coupon_id": "",
            "coupon_info": "",
            "coupon_remain_count": 0,
            "coupon_total_count": 0,
            "item_description": "硅胶防滑  腕带加压  舒适透气",
            "item_id": 610724285872,
            "item_url": "https://detail.tmall.com/item.htm?id=610724285872",
            "level_one_category_id": 50010728,
            "level_one_category_name": "运动/瑜伽/健身/球迷用品",
            "nick": "rexchi旗舰店",
            "num_iid": 610724285872,
            "pict_url": "https://img.alicdn.com/bao/uploaded/i1/3308388212/O1CN01CKKlWY2AX94iOrFEa_!!0-item_pic.jpg",
            "provcity": "上海",
            "real_post_fee": "0.00",
            "reserve_price": "59",
            "seller_id": 3308388212,
            "shop_dsr": 48886,
            "shop_title": "rexchi旗舰店",
            "short_title": "健身房男防滑半指锻炼防起茧女手套",
            "small_images": [
                "https://img.alicdn.com/i2/3308388212/O1CN01xKaWqP2AX94dgEFb2_!!3308388212.jpg",
                "https://img.alicdn.com/i3/3308388212/O1CN011BkdWP2AX94a4IhGY_!!3308388212.jpg",
                "https://img.alicdn.com/i1/3308388212/O1CN01lmqssQ2AX94Xqncen_!!3308388212.jpg",
                "https://img.alicdn.com/i3/3308388212/O1CN01ZQwz3Q2AX94Xqlg3R_!!3308388212.jpg"
            ],
            "title": "健身房手套男运动防滑半指单杠锻炼防起茧护腕女器械训练引体向上",
            "tk_total_commi": "44027.2",
            "tk_total_sales": "7117",
            "user_type": 1,
            "volume": 572,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01YQB4XV2AX94Runvdl_!!2-item_pic.png",
            "zk_final_price": "29.8"
        }
    ]
}
```

## 官方活动转链

`api/v1/weiyi/activity`

**请求方法**

`POST`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| activityId  | string  |  是  |     官方活动ID            |
| client  | string  |  是  |     客户端标识 ：android ，ios            |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "activity_link": "https://s.click.taobao.com/t?e=m%3D2%26s%3DVhNdS1CtyTkcQipKwQzePCperVdZeJviyK8Cckff7TVRAdhuF14FMb%2BcrKyx2iI7xq3IhSJN6GR53auEe5GkJQlI5bsQ2wDUBuNI3BmizRcDkcA2rWPwyGkn4rd2JjTlpXXbv1mizeOdzyyO9CIkVU0PUbK0m8lKotYzDcQ4SzIk3ajAyOG5%2FNZAcBtK7CKQwmwBo7yXhWJmHJLC6FpInCzFyapdkDnSjPobR%2B9Wl%2BoDZZ8w6LKUEUtRIy3Y8lGD8HTPyqWu%2F6PwMt9dWfmoAJJcxXijM%2Bwnlqcl7XHxbCq%2Br0KkMB%2Fc8nKhArxj0XL1OHzmmticWbu%2FMqT4SeHHMMPTJcc0AHXTq3%2Fq%2BU1TTLdi6%2FKCtV55YueWClVZqtTxWBIX83bU20jGDF1NzTQoPw%3D%3D&pvid=25016850&union_lens=lensId:0b01c1f1_0c0a_1702419ede1_46af"
    }
}
```

## 淘抢购--新增

`api/v1/taobaoke/tqg`

**请求方法**

`GET`

**参数**

|  名称  | 类型 | 必须 |                         说明                         |
| :----: | :--: | :--: | :--------------------------------------------------: |
| start_time  | string  |  是  |如：2020-02-12 12:00:00     开始抢购时间           |
| end_time  | string  |  是  | 如：2020-02-12 14:00:00      抢购结束时间           |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "category_name": "数码电器", //类目名称
            "click_url": "https://s.click.taobao.com/t?e=m%3k%21bf2",//商品链接
            "end_time": "2020-02-12 23:59:59", //结束时间
            "num_iid": 612394675742, //商品ID
            "pic_url": "http://img4.tbcdn.cn/tfscom///gju1.alicdn.com/tps/i2/O1CN01fbHCr41Vj9Ct7yGVL_!!2-juitemmedia.png",//商品主图
            "reserve_price": "118.00", //商品原价
            "sold_num": 0,  //已抢购数量
            "start_time": "2020-02-12 12:00:00", //开团时间
            "title": "无线蓝牙耳机",   //商品标题
            "total_amount": 10,      //总库存
            "zk_final_price": "2"   //淘抢购活动价
        },
        {
            "category_name": "数码电器",
            "click_url": "https://s.click.taobao.com/t?e=m%3D2%26s%3DWgEu%2BmFYTHIcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMUCVgEK9%2F%2FOBxq3IhSJN6GR53auEe5GkJSJBvFbH6biTKKSuu9Jm8SpvBkdSxIgC0Sj%2BnQ986zxVIWLb4DzFlElvJrMBQHqrMC5iLofPfeZ0m74pls8anFHYOc%2FB%2BEcH0q9Aw7PEaTBS2olD96butl7aHr7qYCcv5%2BiBT%2B0GzqBTomfkDJRs%2BhU%3D&union_lens=lensId:0b01eea0_0d67_170331b08e8_dbf3",
            "end_time": "2020-02-12 23:59:59",
            "num_iid": 611984198751,
            "pic_url": "http://img4.tbcdn.cn/tfscom///gju2.alicdn.com/tps/i2/2206614523620/O1CN01ZSUOSg1cc0LJwDJmf_!!0-item_pic.jpg",
            "reserve_price": "129.00",
            "sold_num": 0,
            "start_time": "2020-02-12 12:00:00",
            "title": "蓝牙耳机无线运动入",
            "total_amount": 6,
            "zk_final_price": "2"
        }
    ]
}
```

# 聚合充值

## 话费充值列表

**方式**

`GET`

**路径**

`/api/v1/gather/telephone-rates`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": [
        "1", /*充值面额 单位[元]*/
        "20",
        "30",
        "50",
        "100",
        "200",
        "300",
        "500"
    ]
}
```

## 话费充值提交

**方式**

`POST`

**路径**

`/api/v1/gather/telephone-rates`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| phone | string |  是  | 手机号 |
| cardnum  | string |  是  |             充值的面额             |
| comc_price  | string |  是  |             根据面额计算出来的COMC价格 `含小数向上取整` 公式 `面额 / COMC` 结果向上取整           |
| type  | string |  是  |             充值类型，可选：cmcc-rate[移动充值],cucc-rate[联通充值],ctcc-rate[电信]             |

**响应**

`Status code 200`

```json
{
  "msg": "充值成功",
  "code": 0,
  "data": {
    "order_id": 1,
  }
}
```

## 流量充值列表

**方式**

`GET`

**路径**

`/api/v1/gather/telephone-traffics`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| phone | string |  是  | 手机号 |

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": [
        {
            "id": "3", /*套餐ID*/
            "p": "10M", /*套餐流量名称*/
            "v": "10", /*	套餐流量值*/
            "inprice": "2.985" /*价格单位[元] 根据该值计算 comc 价格  价格 / comc 向上取整*/
        },
        {
            "id": "4",
            "p": "30M",
            "v": "30",
            "inprice": "4.975"
        },
        {
            "id": "5",
            "p": "70M",
            "v": "70",
            "inprice": "9.950"
        },
        {
            "id": "49",
            "p": "100M",
            "v": "100",
            "inprice": "9.950"
        },
        {
            "id": "6",
            "p": "150M",
            "v": "150",
            "inprice": "19.900"
        },
        {
            "id": "50",
            "p": "300M",
            "v": "300",
            "inprice": "19.900"
        },
        {
            "id": "7",
            "p": "500M",
            "v": "500",
            "inprice": "29.850"
        },
        {
            "id": "26",
            "p": "1G",
            "v": "1024",
            "inprice": "49.750"
        },
        {
            "id": "27",
            "p": "2G",
            "v": "2048",
            "inprice": "69.650"
        }
    ]
}
```

## 流量充值提交

**方式**

`POST`

**路径**

`/api/v1/gather/telephone-traffics`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| phone | string |  是  | 手机号 |
| proid | string |  是  | 套餐ID |
| comc_price | string |  是  | 根据面额计算出来的COMC价格 `含小数向上取整` 公式 `价格 / COMC` 结果向上取整    |
| type | string |  是  | 充值类型，可选：cmcc-traffic[移动流量充值],cucc-traffic[联通流量充值],ctcc-traffic[电信流量充值] |

**响应**

`Status code 200`

```json
{
  "msg": "充值成功",
  "code": 0,
  "data": {
    "order_id": 1,
  }
}
```

## 文娱充值列表

**方式**

`GET`

**路径**

`/api/v1/gather/account-businesses`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": [
        {
            "type": "video",/*类型*/
            "name": "视频",/*类型名称*/
            "items": [
                {
                    "type": "aiqiyi-tv",/*视频类型*/
                    "name": "爱奇艺",/*视频名称*/
                    "items": [
                        {
                            "proid": "50015",/*套餐ID*/
                            "name": "爱奇艺直充月卡",/*套餐类型*/
                            "saleprice": "16.830",/*销售价格*/
                            "perprice": "19.80",/*真实价格 COMC价格根据该值进行计算 perprice / comc 向上取整*/
                            "unit": "月",/*单位*/
                            "maxnums": "1"/*单笔交易量*/
                        }
                    ]
                },
                {
                    "tye": "tencent-tv",
                    "name": "腾讯视频",
                    "items": [
                        {
                            "proid": "50024",
                            "name": "腾讯视频直充会员月卡",
                            "saleprice": "17.600",
                            "perprice": "20.00",
                            "unit": "月",
                            "maxnums": "1"
                        }
                    ]
                },
                {
                    "type": "mg-tv",
                    "name": "芒果TV",
                    "items": [
                        {
                            "proid": "50027",
                            "name": "芒果TV移动PC端月卡直充",
                            "saleprice": "15.200",
                            "perprice": "20.00",
                            "unit": "月",
                            "maxnums": "1"
                        }
                    ]
                },
                {
                    "type": "souhu-tv",
                    "name": "搜狐",
                    "items": [
                        {
                            "proid": "50031",
                            "name": "搜狐直充会员季卡",
                            "saleprice": "37.500",
                            "perprice": "50.00",
                            "unit": "季",
                            "maxnums": "1"
                        }
                    ]
                },
                {
                    "type": "youku-tv",
                    "name": "优酷",
                    "items": [
                        {
                            "proid": "50034",
                            "name": "优酷直充黄金周卡",
                            "saleprice": "7.650",
                            "perprice": "9.00",
                            "unit": "周",
                            "maxnums": "1"
                        }
                    ]
                },
                {
                    "type": "leshi-tv",
                    "name": "乐视",
                    "items": [
                        {
                            "proid": "50038",
                            "name": "乐视直充会员周卡",
                            "saleprice": "6.300",
                            "perprice": "9.00",
                            "unit": "周",
                            "maxnums": "1"
                        },
                    ]
                }
            ]
        },
        {
            "type": "qq",
            "name": "QQ充值",
            "items": [
                {
                    "type": "qq-qb",
                    "name": "Q币充值",
                    "items": [
                        {
                            "proid": "50001",
                            "name": "Q币1元直充",
                            "saleprice": "0.985",
                            "perprice": "1.00",
                            "unit": "元",
                            "maxnums": "500"
                        }
                    ]
                },
                {
                    "type": "qq-vip",
                    "name": "QQ会员",
                    "items": [
                        {
                            "proid": "50012",
                            "name": "QQ会员1个月",
                            "saleprice": "9.650",
                            "perprice": "10.00",
                            "unit": "月",
                            "maxnums": "12"
                        }
                    ]
                },
                {
                    "type": "qq-super-vip",
                    "name": "超级会员",
                    "items": [
                        {
                            "proid": "50007",
                            "name": "QQ超级会员SVIP1个月",
                            "saleprice": "19.300",
                            "perprice": "20.00",
                            "unit": "月",
                            "maxnums": "12"
                        }
                    ]
                },
                {
                    "type": "qq-yellow-diamond",
                    "name": "QQ黄钻",
                    "items": [
                        {
                            "proid": "50008",
                            "name": "QQ黄钻贵族1个月",
                            "saleprice": "9.650",
                            "perprice": "10.00",
                            "unit": "月",
                            "maxnums": "12"
                        }
                    ]
                },
                {
                    "type": "qq-blue-diamond",
                    "name": "QQ蓝钻",
                    "items": [
                        {
                            "proid": "50010",
                            "name": "QQ蓝钻贵族1个月",
                            "saleprice": "9.650",
                            "perprice": "10.00",
                            "unit": "月",
                            "maxnums": "12"
                        }
                    ]
                }
            ]
        },
        {
            "type": "music",
            "name": "音乐",
            "items": [
                {
                    "type": "qq-music",
                    "name": "QQ音乐",
                    "items": [
                        {
                            "proid": "50042",
                            "name": "QQ音乐直充绿钻豪华版月卡",
                            "saleprice": "15.000",
                            "perprice": "15.00",
                            "unit": "月",
                            "maxnums": "1"
                        }
                    ]
                },
                {
                    "type": "kugou-music",
                    "name": "酷狗音乐",
                    "items": [
                        {
                            "proid": "50060",
                            "name": "WY酷狗音乐豪华会员12个月直充",
                            "saleprice": "180.000",
                            "perprice": "180.00",
                            "unit": "月",
                            "maxnums": "1"
                        }
                    ]
                }
            ]
        }
    ]
}
```

## 文娱充值提交

**方式**

`POST`

**路径**

`/api/v1/gather/account-businesses`

**参数**

| 名称  |  类型  | 必须 |              说明              |
| :---: | :----: | :--: | :----------------------------: |
| account | string |  是  | 充值的账号 |
| proid | string |  是  | 套餐ID |
| comc_price | string |  是  | 根据面额计算出来的COMC价格 `含小数向上取整` 公式 `价格 / COMC` 结果向上取整    |
| type | string |  是  | 充值类型 |

**响应**

`Status code 200`

```json
{
  "msg": "充值成功",
  "code": 0,
  "data": {
    "order_id": 1,
  }
}
```

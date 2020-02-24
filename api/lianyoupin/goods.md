# 商品

## 商品分类

**方式**

`GET`

**路径**

`/api/v1/goods/categories`

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
      "id": 1 /*int 分类id*/,
      "name": "热门推荐" /*string 分类名称*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd9.jpeg" /*string 分类图*/
    }
  ]
}
```

## 商品列表[现金修改]

**方式**

`GET`

**路径**

`/api/v1/items`

**参数**

|    名称     |  类型  | 必须 |                                                说明                                                 |
| :---------: | :----: | :--: | :-------------------------------------------------------------------------------------------------: |
|    limit    |  int   |  是  |                                           条目数 默认 10                                            |
|   offset    |  int   |  是  |                                           偏移量 默认为 0                                           |
|  currency   | string |  是  | 货币类型: comc-comc,ore-矿石,cny-现金 mix-混合(token+cny) token-通证 eoc:cny:deduction-ECO 抵扣专区 |
| merchant_id |  int   |  否  |                                               商户 id                                               |
|  order_by   | string |  否  |                      排序：id_desc-最新 price_asc-价格升序 price_desc-价格降序                      |
|    name     | string |  否  |                                          名称筛选,模糊搜索                                          |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 9,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL" /*商品名称*/,
      "currency": "ore" /*【新增】 货币类型: cny-现金 token-通证支付 mix-混合支付(cny+token) eoc:cny:deduction-EOC抵扣专区*/,
      "category_id": 1 /*分类id*/,
      "price": "30.00000000" /*价格*/,
      "token_price": "0.00000000" /*【新增】通证价格，注意当支付类型为mix或token时该才存在有效价格，如果 currency 为 eoc:cny:deduction 该为 EOC 抵扣上限值 */,
      "power": 0 /*【新增】矿力奖励*/,
      "stock_num": 0 /*总库存:  0-售罄*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": "2019-01-21 16:30:24" /*限购截止时间*/,
      "surplu_second": -76694 /*限购结束秒数*/,
      "deduction_price": "70" /*【新增】 最省价格*/,
      "line_price": "100" /*划线价格*/,
      "eoc_price": "0.3" /*eoc单价*/,
      "token": {
        "id": 4,
        "name": "以太坊" /*【新增】通证名称*/,
        "symbol": "BTC" /*【新增】通证符*/,
        "icon": {
          "id": 3,
          "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FoZuIPpBi2jzgcwUojmxJm0G5O0L.jpg" /*【新增】通证icon*/
        }
      },
      "token_award": {
        "token_award": "50" /*奖励的通证数量*/,
        "token_symbol": "btc" /*奖励的通证符*/
      }
    }
  ]
}
```

## 商品详情[现金修改]

`GET`

**路径**

`/api/v1/items/{id}`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "id": 5,
    "name": "【懒人必备 全能扫地机 轻松清扫】二合一手推式 扫地拖地机 家用扫把簸箕一体机 懒人扫帚 无线不用电",
    "image": "https://img.yzcdn.cn/upload_files/2018/03/02/FhSHwiFk0WnOE9OUwQYYgtmd9RO_.jpg",
    "ore": "0.00",
    "power": 0,
    "spec_type": 2,
    "token_price": "123123" /*【新增】通证价格*/,
    "detail": "这个是商品介绍 沙雕",
    "price": "200.00",
    "limit_num": 0,
    "goods_id": 5,
    "limit_time": null,
    "currency": "comc",
    "stock_num": 898,
    "end_second": null,
    "share_url": "https://api.igoods.io/share/quick/register/O1L8K5",
    "deduction_price": "70" /*【新增】 最省价格*/,
    "line_price": "100" /*划线价格*/,
    "eoc_price": "0.3" /*eoc单价*/,
    "token": {
      "id": 4,
      "name": "以太坊" /*【新增】通证名称*/,
      "symbol": "BTC" /*【新增】通证符*/,
      "icon": {
        "id": 3,
        "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FoZuIPpBi2jzgcwUojmxJm0G5O0L.jpg" /*【新增】通证icon*/
      }
    },
    "images": [
      {
        "id": 84,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FhSHwiFk0WnOE9OUwQYYgtmd9RO_.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FhSHwiFk0WnOE9OUwQYYgtmd9RO_.jpg"
      },
      {
        "id": 85,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FtKXFsrzZKcjTBsUunCRztyM3qXb.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FtKXFsrzZKcjTBsUunCRztyM3qXb.jpg"
      },
      {
        "id": 86,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FgdZEED4ofIesl-Cr3gltA8KK0Vs.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FgdZEED4ofIesl-Cr3gltA8KK0Vs.jpg"
      },
      {
        "id": 87,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FpM4Mx6u1MSHxs_ccOI0S_CFQnRA.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FpM4Mx6u1MSHxs_ccOI0S_CFQnRA.jpg"
      },
      {
        "id": 88,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FqqHwdvezPWjm62MsGbLT1IDnf9L.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FqqHwdvezPWjm62MsGbLT1IDnf9L.jpg"
      },
      {
        "id": 89,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FqgkQK8iLvpAwKyePme4rz4aomsT.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FqgkQK8iLvpAwKyePme4rz4aomsT.jpg"
      },
      {
        "id": 90,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FpJnQAKRPi3K5rrH9C_zc0xpkBwF.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FpJnQAKRPi3K5rrH9C_zc0xpkBwF.jpg"
      },
      {
        "id": 91,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FuRRIqV8eYKQOyrk6Xo54bh-v5YP.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FuRRIqV8eYKQOyrk6Xo54bh-v5YP.jpg"
      },
      {
        "id": 92,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FrgnSDqxuQF9ksN0EgBOONvraW4E.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FrgnSDqxuQF9ksN0EgBOONvraW4E.jpg"
      },
      {
        "id": 93,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/Fj_1XT5Z9WNuiLglYVBez4zskrl1.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/Fj_1XT5Z9WNuiLglYVBez4zskrl1.jpg"
      },
      {
        "id": 94,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/Fq55jefSfk2fJGKAKJ_HA6tyrG4S.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/Fq55jefSfk2fJGKAKJ_HA6tyrG4S.jpg"
      },
      {
        "id": 95,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FkfM_ytX3Pa1jf_13o4uWZHlHEEp.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FkfM_ytX3Pa1jf_13o4uWZHlHEEp.jpg"
      },
      {
        "id": 96,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/Ftc7fGwaSURWN4x-jTmvSajJcXcA.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/Ftc7fGwaSURWN4x-jTmvSajJcXcA.jpg"
      },
      {
        "id": 97,
        "filename": "https://img.yzcdn.cn/upload_files/2018/03/02/FntvPiTiLQEPx-XTTWdCG-EGm8fz.jpg",
        "file_url": "https://img.yzcdn.cn/upload_files/2018/03/02/FntvPiTiLQEPx-XTTWdCG-EGm8fz.jpg"
      }
    ],
    "skus": [
      {
        "id": 46,
        "stock_num": 198,
        "sales_num": 2,
        "cost_price": "39.00",
        "price": "200.00000000",
        "sale_price": "0.00",
        "image": null,
        "properties": "46",
        "power": 1 /*【新增】矿力奖励 */,
        "token_price": "123123" /*【新增】通证价格，如果 currency 为 eoc:cny:deduction 该为 EOC 抵扣上限值*/,
        "deduction_price": "70" /*【新增】最省价格*/,
        "specs_properties": [
          {
            "p_id": 46,
            "s_id": 10,
            "p_name": "柠檬黄",
            "s_name": "颜色"
          }
        ],
        "token_award": {
          "token_award": "50",
          "token_symbol": "btc"
        },
        "target_type": "item",
        "target_id": 5
      }
    ],
    "specs": [
      {
        "id": 10,
        "name": "颜色",
        "target_id": 5,
        "target_type": "item",
        "properties": [
          {
            "id": 46,
            "target_type": "item",
            "name": "柠檬黄",
            "specs_id": 10
          },
          {
            "id": 47,
            "target_type": "item",
            "name": "孔雀蓝",
            "specs_id": 10
          },
          {
            "id": 48,
            "target_type": "item",
            "name": "玫瑰金黑面",
            "specs_id": 10
          },
          {
            "id": 49,
            "target_type": "item",
            "name": "黑色黑面",
            "specs_id": 10
          },
          {
            "id": 50,
            "target_type": "item",
            "name": "白色黑面",
            "specs_id": 10
          },
          {
            "id": 51,
            "target_type": "item",
            "name": "玫红黑面",
            "specs_id": 10
          },
          {
            "id": 52,
            "target_type": "item",
            "name": "高端灰黑面",
            "specs_id": 10
          }
        ]
      }
    ]
  }
}
```

## 获取某个专栏商品列表

**方式**

`GET`

**路径**

`/api/v1/special/{id}/items`

**参数**

|   名称   |  类型  | 必须 |                           说明                            |
| :------: | :----: | :--: | :-------------------------------------------------------: |
|  limit   |  int   |  是  |                      条目数 默认 10                       |
|  offset  |  int   |  是  |                      偏移量 默认为 0                      |
| order_by | string | 排序 | 排序：id_desc-最新 price_asc-价格升序 price_desc-价格降序 |

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 9,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL" /*商品名称*/,
      "currency": "ore" /*货币类型: comc-comc,ore-矿石*/,
      "category_id": 1 /*分类id*/,
      "price": "30.00000000" /*价格*/,
      "stock_num": 0 /*总库存:  0-售罄*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": "2019-01-21 16:30:24" /*限购截止时间*/,
      "surplu_second": -76694 /*限购结束秒数*/
    },
    {
      "id": 10,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "currency": "ore",
      "category_id": 1,
      "price": "30.00000000",
      "stock_num": 0 /*总库存:  0-售罄*/,
      "image": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "limit_time": null,
      "surplu_second": null
    }
  ]
}
```

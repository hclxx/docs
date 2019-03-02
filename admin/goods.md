# 商品管理

## 列表

**方式**

`GET`

**路径**

`/admin/goods`

**参数**

|    名称     |  类型  | 默认 | 必须 |              说明               |
| :---------: | :----: | :--: | :--: | :-----------------------------: |
|    name     | string |  无  |  否  |              名称               |
|   status    |  int   |  无  |  否  | 商品状态 0-待审核 1-上架 2-下架 |
| category_id |  int   |  无  |  否  |            分类名称             |
|    limit    |  int   |  15  |  否  |            每页条数             |
|  currency   | string | 所有 |  否  |     货币:comc-comc,ore-矿石     |

**响应**

`Status code 200`

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "intro": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "detail": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
      "category_id": 1,
      "currency": "comc",
      "merchant_id": 0,
      "power": 100,
      "ore": "10.000000000",
      "limit_time": null,
      "limit_num": 0,
      "type": 2,
      "spec_type": 2,
      "virt_num": 0,
      "sales_num": 0,
      "cost_price": 1.1,
      "stock_num": 0,
      "comment_count": 0,
      "collect_count": 0,
      "weight": null,
      "share_url": null,
      "sort": 0,
      "hot": 0,
      "recommend": null,
      "status": 0,
      "return_goods": 1,
      "created_at": "2019-01-16 13:43:45",
      "updated_at": "2019-01-16 14:01:41",
      "category": {
        "id": 1,
        "name": "数码",
        "image": null,
        "pid": 0,
        "level": 0,
        "path": "",
        "paths": "",
        "sort": 0
      }
      /**"currency": {
        "id": 1,
        "name": "矿石",
        "alias": "ore",
        "icon": "",
        "state": 0
      }**/
    }
  ],
  "first_page_url": "http://comc-mall-amin.test/admin/goods?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc-mall-amin.test/admin/goods?page=1",
  "next_page_url": null,
  "path": "http://comc-mall-amin.test/admin/goods",
  "per_page": 15,
  "prev_page_url": null,
  "to": 5,
  "total": 5
}
```

## 添加

**方式**

`POST`

**路径**

`/admin/goods`

**参数**

```json
{
  "name": "花花公子 高领毛衣 2018秋季新款", // 商品名称 必填
  "intro": "花花公子 高领毛衣 2018秋季新款", // 商品简述或卖点 必填
  "detail": "花花公子 高领毛衣 2018秋季新款", // 商品详情 必填
  "limit_num": 12, // 购买限量 非必填
  "limit_time": "2019-01-30 12:12:11", // 购买限时 非必填
  "category_id": 1, // 分类id 必须
  "currency": "ore", // ore-矿石 comc-comc
  "stock_num": 0, // 总库存 非必须
  "recommend": 0, // 推荐 0-否 1-是
  "power": 100, // 矿力 必须填写
  "ore": 10, // 矿石 非必须 如currency_id为2必须填写
  "type": 2, // 1-虚拟商品 2-实体商品
  "spec_type": 1, // 1-单规格 2-多规格
  "virt_num": 0, // 虚拟销售量 非必填
  "sales_num": 0, // 真实销售量 非必须
  "status": 0, // 状态 0-待审核 1-上架 2-下架 必填
  "sort": 0, // 排序 必填
  "cost_price": 111.1, // 成本价
  "hot": 0, // 是否热门 0-否 1-是 必填
  "price": "100", // 商品价格 多个sku取最小值，单个sku取sku price值
  "image": 0, // 商品主图地址, 获取第一张商品图片地址
  "return_goods": 1, // 是否支持退换货 1-支持 0-否
  "images": [1, 2, 3, 4], // 图片id
  "merchant_id": 0, // 商家ID
  "specs_properties": [
    {
      // 如spec_type为2必传，须按照此格式传递
      "name": "颜色", // 规格
      "properties": ["红色", "蓝色"] // 规格属性
    },
    {
      "name": "尺寸",
      "properties": ["S", "M"]
    }
  ],
  "skus": [
    {
      "price": 100, // 单个sku价格
      "weight": 10, // 重量 非必填
      "stock_num": 1000, // 库存 必填
      "number": "SSSNNNN", // 单个sku编号 非必填
      "sales_num": 0, // 销售量 非必填
      "line_price": 90, // 划线价格 非必填
      "properties": "红色-S", // 单个sku的属性串 如spec_type为2必传，按照此格式传递
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "specs_properties": [
        // 单个sku的规格属性 如spec_type为2必传，按照此格式传递
        {
          "s_name": "颜色", // 规格名称
          "p_name": "红色" // 规格属性
        },
        {
          "s_name": "尺寸",
          "p_name": "S"
        }
      ]
    },
    {
      "price": 100,
      "weight": 10,
      "stock_num": 1000,
      "number": "SSSNNNN",
      "sales_num": 0,
      "line_price": 90,
      "properties": "红色-M",
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
      "specs_properties": [
        {
          "s_name": "颜色",
          "p_name": "红色"
        },
        {
          "s_name": "尺寸",
          "p_name": "M"
        }
      ]
    },
    {
      "price": 100,
      "weight": 10,
      "stock_num": 1000,
      "number": "SSSNNNN",
      "sales_num": 0,
      "line_price": 90,
      "properties": "蓝色-S",
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
      "specs_properties": [
        {
          "s_name": "颜色",
          "p_name": "蓝色"
        },
        {
          "s_name": "尺寸",
          "p_name": "S"
        }
      ]
    },
    {
      "price": 100,
      "weight": 10,
      "stock_num": 1000,
      "number": "SSSNNNN",
      "sales_num": 0,
      "line_price": 90,
      "properties": "蓝色-M",
      "image": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg",
      "specs_properties": [
        {
          "s_name": "颜色",
          "p_name": "蓝色"
        },
        {
          "s_name": "尺寸",
          "p_name": "M"
        }
      ]
    }
  ]
}
```

**响应**

`Status code 200`

```json
{
  "message": "添加商品成功"
}
```

## 详情

**方式**

`GET`

**路径**

`/admin/goods/:good`

```json
{
  "id": 3,
  "name": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
  "intro": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
  "detail": "花花公子 高领毛衣 2018秋季新款 毛衣男修身打底针织衫学生翻领毛线衣 XL17630 深蓝 XL",
  "category_id": 1,
  "currency": 1,
  "merchant_id": 0,
  "power": 100,
  "ore": "10.000000000",
  "limit_time": null,
  "limit_num": 0,
  "type": 2,
  "spec_type": 1,
  "virt_num": 0,
  "sales_num": 0,
  "cost_price": 11.1,
  "stock_num": 0,
  "comment_count": 0,
  "collect_count": 0,
  "weight": null,
  "share_url": null,
  "sort": 0,
  "hot": 0,
  "recommend": 0,
  "status": 0,
  "return_goods": 1,
  "created_at": "2019-01-16 15:03:26",
  "updated_at": "2019-01-16 15:16:21",
  "images": [
    {
      "id": 1,
      "filename": "0fa1d338bbc64caf5b57d61af9db167a.jpeg",
      "file_url": "http://p59l6s1jm.bkt.clouddn.com/0fa1d338bbc64caf5b57d61af9db167a.jpeg"
    },
    {
      "id": 2,
      "filename": "7b0c24fd90024a6dcf666bdd3f03524e.jpeg",
      "file_url": "http://p59l6s1jm.bkt.clouddn.com/7b0c24fd90024a6dcf666bdd3f03524e.jpeg"
    },
    {
      "id": 3,
      "filename": "16ddf9eef740c6585a219908dbb2b791.jpeg",
      "file_url": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg"
    },
    {
      "id": 4,
      "filename": "8cbff1aee9397d5ad535d6476cd76c18.jpeg",
      "file_url": "http://p59l6s1jm.bkt.clouddn.com/8cbff1aee9397d5ad535d6476cd76c18.jpeg"
    }
  ],
  "skus": [
    {
      "id": 9,
      "goods_id": 3,
      "number": "GB123213",
      "stock_num": 1000,
      "sales_num": 0,
      "price": "100.00000000",
      "line_price": "90.00000000",
      "image_id": 1,
      "weight": null,
      "properties": null,
      "specs_properties": null
    }
  ],
  /**"currency": {
    "id": 1,
    "name": "矿石",
    "alias": "ore",
    "icon": "",
    "state": 0
  },**/
  "category": {
    "id": 1,
    "name": "数码",
    "image": null,
    "pid": 0,
    "level": 0,
    "path": "",
    "paths": "",
    "sort": 0
  }
}
```

## 编辑

**方式**

`PUT`

**路径**

`/admin/goods/:goods`

**响应**

`Status code 200`

```json
{
  "message": "编辑商品成功"
}
```

## 删除

**方式**

`DELETE`

**路径**

`/admin/goods/:goods`

**响应**

`Status code 204`

## 获取 comc 价格

**方式**

`DELETE`

**路径**

`/admin/comc/price`

**响应**

`Status code 200`

```json
{
  "price": "0.2954" /*comc单价单位元*/
}
```

## 同步有赞商品到兑换区

`admin/yzgoods/:goods/sync`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 | 说明                                    |
| :------: | :----: | :--: | :--: | --------------------------------------- |
| currency | string |  无  |  是  | 兑换区: comc-comc 兑换区 ore-矿石兑换区 |

**返回体**

```json
{
  "currency": "comc",
  "power": 0,
  "ore": 0,
  "type": 2,
  "sort": 0,
  "hot": 0,
  "recommend": 0,
  "virt_num": 0,
  "return_goods": 0,
  "merchant_id": 0,
  "spec_type": 2,
  "status": 1,
  "limit_num": 0,
  "limit_time": null,
  "cost_price": 0,
  "name": "【随手一贴 解放双手】Monkey Grip 魔力胶卷  强力防滑 纳米无痕 不伤墙面",
  "detail": "测试",
  "price": 1366,
  "image": "https://img.yzcdn.cn/upload_files/2019/02/25/FtUDwmnFz-f3ym-eM673w4zOqfin.jpg",
  "stock_num": 949,
  "sales_num": 4162,
  "skus": [
    {
      "weight": 0,
      "line_price": 0,
      "image": "",
      "price": 2481,
      "stock_num": 49,
      "sales_num": 2716,
      "properties": ["单卷5M"],
      "number": "45394814236276198",
      "specs_properties": [
        {
          "s_name": "规格",
          "p_name": "单卷5M"
        }
      ]
    },
    {
      "weight": 0,
      "line_price": 0,
      "image": "",
      "price": 1366,
      "stock_num": 900,
      "sales_num": 1446,
      "properties": ["单卷1M"],
      "number": "45394814236276199",
      "specs_properties": [
        {
          "s_name": "规格",
          "p_name": "单卷1M"
        }
      ]
    }
  ],
  "intro": "【随手一贴 解放双手】Monkey Grip 魔力胶卷  强力防滑 纳米无痕 不伤墙面",
  "category_id": 0,
  "images": [
    {
      "id": 204,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FtUDwmnFz-f3ym-eM673w4zOqfin.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FtUDwmnFz-f3ym-eM673w4zOqfin.jpg"
    },
    {
      "id": 205,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FlgzRG5VmVlhc6KPb-MxeUDz4JIb.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FlgzRG5VmVlhc6KPb-MxeUDz4JIb.jpg"
    },
    {
      "id": 206,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/Fmxa0BWV7hKVaBNwVX1gDifWhcy6.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/Fmxa0BWV7hKVaBNwVX1gDifWhcy6.jpg"
    },
    {
      "id": 207,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FvbMHgw9saF5HrUmMZOhXqLmAjaG.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FvbMHgw9saF5HrUmMZOhXqLmAjaG.jpg"
    },
    {
      "id": 208,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FulR1VgGTa0_69BechdqxW5wBwo6.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FulR1VgGTa0_69BechdqxW5wBwo6.jpg"
    },
    {
      "id": 209,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FqCuKFE04-Is6Wo4jmOpIXNmH2i3.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FqCuKFE04-Is6Wo4jmOpIXNmH2i3.jpg"
    },
    {
      "id": 210,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/Fh8UAQ_M_GMRXKFnLK8FXiue-Ro2.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/Fh8UAQ_M_GMRXKFnLK8FXiue-Ro2.jpg"
    },
    {
      "id": 211,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/Fof-b8R8Tgv_a5UN59_aLtEJz_J6.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/Fof-b8R8Tgv_a5UN59_aLtEJz_J6.jpg"
    },
    {
      "id": 212,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FhvaE7x2BPwbW4pDhbJUGS2GpqFa.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FhvaE7x2BPwbW4pDhbJUGS2GpqFa.jpg"
    },
    {
      "id": 213,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FsvQWi13EuzVbqmuVPJEZdYkG5Io.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FsvQWi13EuzVbqmuVPJEZdYkG5Io.jpg"
    },
    {
      "id": 214,
      "filename": "https://img.yzcdn.cn/upload_files/2019/02/25/FszehFY-0ieowPYxcbGBSUK3De0T.jpg",
      "file_url": "https://img.yzcdn.cn/upload_files/2019/02/25/FszehFY-0ieowPYxcbGBSUK3De0T.jpg"
    }
  ],
  "specs_properties": [
    {
      "name": "规格",
      "properties": ["单卷5M", "单卷1M"]
    }
  ]
}
```

## 修改商品上下架

`/admin/goods/{goods}/display`

**请求方法**

`PUT`

**请求参数**

|  名称  | 类型 | 必须 | 默认 |      说明       |
| :----: | :--: | :--: | :--: | :-------------: |
| status | int  |  是  |  无  | 1: 上架 2: 下架 |

**返回体**

```json
{
  "message": "修改成功"
}
```

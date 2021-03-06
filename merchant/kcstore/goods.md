# 商品管理

## 商品列表

#### 接口URL
> {{url}}/products/spus

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | aa | 选填 | 商品名称(支持模糊查询) |
| cate_id     | 1 | 选填 | 分类id |
| status     | 1 | 选填 | 状态:0-待审核/1-上架/2-下架 |
| page     | 1 | 选填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "ok",
	"code": 0,
	"data": {
		"current_page": 1,
		"data": [
			{
				"id": 1,
				"name": "iphone12", //  商品名称
				"intro": "2020最新款苹果手机",   //  商品描述
				"pics": [   //  商品主图
					"http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg"
				],
				"cate_id": 1,   //  分类id
				"merchant_id": 0,   //  商户id
				"price": "1000.00", //  展示价格
				"sales_volume": 0,  //  销量
				"details": "花花公子 高领毛衣 2018秋季新款",    //  商品详情
				"zone": 1,  //  商品所属专区:1-爆品/2-体验店/3-优选店/4-特惠
				"status": 1,    //  状态:0-待审核/1-上架/2-下架
				"sort": 1,  //  排序
				"created_at": "2020-05-21 10:36:35",
				"updated_at": "2020-05-21 10:58:23",
				"category": {
					"id": 1,
					"name": "数码", //  分类名称
					"pic_url": null //  分类图标
				}
			}
		],
		"first_page_url": "http://kcstore.test/admin/products/spus?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/products/spus?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/products/spus",
		"per_page": 15,
		"prev_page_url": null,
		"to": 1,
		"total": 1
	}
}
```



## 创建商品

#### 接口URL
> {{url}}/products/spus

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
  "name": "iphone12", // 商品名称 必填
  "intro": "2020最新款苹果手机", // 商品简述或卖点 必填
  "pics": ['http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg'], // 商品主图地址, 获取第一张商品图片地址 必填
  "cate_id":1, // 分类id 选填
  "price": 1000, // 展示价格 必填
  "details": "花花公子 高领毛衣 2018秋季新款", // 商品详情 必填
  "zone":1, // 商品所属专区:1-爆品/2-体验店/3-优选店/4-特惠 必填
  "sort":1, // 排序 选填
  
  "attrs": [    //  规格属性
    {
      "name": "颜色", // 规格属性名
      "value": ["红色", "蓝色"] // 规格属性值
    },
    {
      "name": "内存大小",
      "value": ["64G", "128G"]
    }
  ],
  "skus": [
    {
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "红色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "64G"
        }
      ]
    },
    {
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "红色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "128G"
        }
      ]
    },
{
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "蓝色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "64G"
        }
      ]
    },
    {
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "蓝色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "128G"
        }
      ]
    }
  ]
}
```

#### 成功响应示例
```json
{
	"msg": "创建商品成功",
	"code": 0,
	"data": null
}
```



## 修改商品

#### 接口URL
> {{url}}/products/spus/3

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
  "name": "iphone13", // 商品名称 必填
  "intro": "2020最新款苹果手机", // 商品简述或卖点 必填
  "pics": ['http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg'], // 商品主图地址, 获取第一张商品图片地址 必填
  "cate_id":1, // 分类id 选填
  "price": 1000, // 展示价格 必填
  "details": "花花公子 高领毛衣 2018秋季新款", // 商品详情 必填
  "zone":1, // 商品所属专区:1-爆品/2-体验店/3-优选店/4-特惠 必填
  "sort":1, // 排序 选填
  
  "attrs": [    //  规格属性
    {
      "name": "颜色", // 规格属性名
      "value": ["红色", "蓝色"] // 规格属性值
    },
    {
      "name": "内存大小",
      "value": ["64G", "128G"]
    }
  ],
  "skus": [
    {
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "红色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "64G"
        }
      ]
    },
    {
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "红色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "128G"
        }
      ]
    },
{
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "蓝色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "64G"
        }
      ]
    },
    {
      "stock": 100, // 库存
      "price": 100, // 销售价
      "pic": "http://p59l6s1jm.bkt.clouddn.com/16ddf9eef740c6585a219908dbb2b791.jpeg", // 图片地址
      "attrs": [
        // 单个sku的规格属性
        {
          "name": "颜色", // 规格属性名
          "value": "蓝色" // 规格属性值
        },
        {
          "name": "内存大小",
          "value": "128G"
        }
      ]
    }
  ]
}
```

#### 成功响应示例
```json
{
	"msg": "修改商品成功",
	"code": 0,
	"data": null
}
```



## 删除商品

#### 接口URL
> {{url}}/products/spus/3

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "删除商品成功",
	"code": 0,
	"data": null
}
```



## 批量下架/重新审核商品

#### 接口URL
> {{url}}/products/spus/batch/status

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
  "status": 1, // 状态:1-上架/0-重新审核 必填
  "sup_ids": [1], // 商品主图地址, 获取第一张商品图片地址 必填
}
```

#### 成功响应示例
```json
{
	"msg": "创建商品成功",
	"code": 0,
	"data": null
}
```
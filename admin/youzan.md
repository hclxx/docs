# 有赞

## 有赞商品

`admin/yz/goods`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 | 说明     |
| :---: | :----: | :--: | :--: | -------- |
| limit |  int   |  15  |  否  | 每页条数 |
| title | string |  无  |  否  | 名称     |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 5, // id
      "yz_good_id": 451527784, // 有赞商品ID
      "merchant_id": 0, // 商家ID
      "title": "测试商品四1", // 商品名称
      "price": 0.01, // 商品价格
      "cover_url": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png!120x120.jpg", // 商品图片
      "comc_num": 0, // comc奖励数量
      "comc_rate": "0.000", // comc奖励比例
      "cost_price": 0.0, // 成本价
      "power": 0, // 算力奖励数量
      "is_display": 1, // 1: 上架 2: 下家
      "created_at": "2019-01-24 14:52:36",
      "updated_at": "2019-01-24 14:53:17"
    }
  ],
  "first_page_url": "http://comc.com/admin/yz/goods?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://comc.com/admin/yz/goods?page=1",
  "next_page_url": null,
  "path": "http://comc.com/admin/yz/goods",
  "per_page": 15,
  "prev_page_url": null,
  "to": 4,
  "total": 4
}
```

## 设置商品 comc 奖励

`admin/yz/goods/{goods}/comc`

**请求方法**

`PUT`

**请求参数**

| 名称  |   类型    | 默认 | 必须 | 说明                 |
| :---: | :-------: | :--: | :--: | -------------------- |
|  key  |  string   |  无  |  是  | num: 数量 rate: 比例 |
| value | int/float |  无  |  否  | 值                   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

```json
{
  "message": "数量必须正整数"
}
```

## 设置商品算力奖励

`admin/yz/goods/{goods}/power`

**请求方法**

`PUT`

**请求参数**

| 名称  | 类型 | 默认 | 必须 | 说明 |
| :---: | :--: | :--: | :--: | ---- |
| power | int  |  0   |  否  | 值   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

`无`

## 设置商品成本价

`admin/yz/goods/{goods}/cost/price`

**请求方法**

`PUT`

**请求参数**

| 名称  | 类型  | 默认 | 必须 | 说明 |
| :---: | :---: | :--: | :--: | ---- |
| price | float |  0   |  否  | 值   |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功"
}
```

**ERROR 返回体**

`无`

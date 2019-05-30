# 优惠卷、优惠码

## 优惠卷、优惠码列表

`admin/discount`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
name | string | 无 | 否 | 名称
limit | int | 无 | 否 | 每页条数

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

````json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "部分商品优惠卷", // 优惠卷/优惠码名称
            "alias": "6gvflx54", // 优惠卷别名
            "price": "0.00000000", // 兑换价格
            "yz_id": 3705781, // 有赞优惠卷/优惠码ID
            "provide_num": 1000, // 优惠卷/优惠码发放数量
            "residue_num": 999, // 剩余数量
            "apply_type": 1, // 适用类型 0-全部可用 1-部分可用
            "is_limit": 0, // 没人限领 0: 无限制
            "range_type": "part", // 适用商品类型 excluded:商品不可用 part: 部分商品可用 all: 全部可用
            "denominations": 1, // 面额（单位分）
            "condition": 0, // 满减 分
            "random_discount": 0, // 随机优惠(单位分) 0-不随机
            "discount": 0, // 折扣
            "discount_attr": 1, // 优惠属性 1-表示优惠 2-表示折扣
            "end_at": "2019-02-13 00:00:00", // 优惠卷/优惠码生效结束时间
            "start_at": "2019-02-12 17:31:26", // 优惠卷/优惠码生效开始时间
            "show": 0, // 呈现 0-不呈现 1-呈现
            "type": 0, // 类型 0-优惠卷 1-优惠码
            "created_at": "2019-02-13 14:58:20",
            "updated_at": "2019-02-13 14:58:20"
        }
    ],
    "first_page_url": "http://comc.com/admin/discount?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/discount?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/discount",
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
}
````

## 修改兑换价

`admin/discount/{discount}/exchange/`

**请求方法**

`PUT`

**SUCCESS 状态码**

`200`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
price | float | 无 | 否 | 价钱(小数点后4位)

**SUCCESS 返回体**

```json
{
    "message": "设置成功"
}
``` 

## 设置呈现

`admin/discount/{discount}/show/`

**请求方法**

`PUT`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "message": "设置成功"
}
``` 


## 优惠卷、优惠码可用商品

`admin/discount/{discount}/goods/`

**请求方法**

`GET`


**请求参数**

名称 | 类型 | 默认 | 必须 | 说明
:--------:|:--------:|:--------:|:--------:|:--------:|
name | string | 无 | 否 | 名称
limit | int | 无 | 否 | 每页条数

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 2,
            "yz_good_id": 451894956,
            "merchant_id": 0,
            "title": "测试商品1大萨达撒",
            "price": 0.01,
            "cover_url": "https://img.yzcdn.cn/upload_files/2019/01/27/43e71ae5e620f9f06378f80a7ae7f568.jpg!120x120.jpg",
            "comc_num": 0,
            "comc_rate": "0.000",
            "cost_price": "0.00",
            "power": 0,
            "is_display": 1,
            "created_at": "2019-02-13 18:32:21",
            "updated_at": "2019-02-13 18:32:39"
        },
        {
            "id": 3,
            "yz_good_id": 451527784,
            "merchant_id": 0,
            "title": "测试商品四1",
            "price": 0.01,
            "cover_url": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png!120x120.jpg",
            "comc_num": 0,
            "comc_rate": "0.000",
            "cost_price": "0.00",
            "power": 0,
            "is_display": 1,
            "created_at": "2019-02-13 18:32:21",
            "updated_at": "2019-02-13 18:32:40"
        }
    ],
    "first_page_url": "http://comc.com/admin/discount/4/goods?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/discount/4/goods?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/discount/4/goods",
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
}
``` 
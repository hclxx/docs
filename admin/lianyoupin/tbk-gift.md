# 会员礼包

## 会员礼包列表

`/admin/tbk/gifts`

**请求方式**

`GET`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| member_id | int  |  无  |  否  |         获取某个会员等级下的礼包         |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**


```json
[
    {
        "id": 2,
        "member_id": 2,/*会员等级*/
        "name": "青铜礼包2",/*会员礼包名称*/
        "cover": "https:\/\/www.baidu.com",/*会员礼包封面*/
        "detail": "https:\/\/www.baidu.com",/*会员礼包详情*/
        "image": "https:\/\/www.baidu.com",/*会员礼包详情头图*/
        "price": 100,/*会员礼包售卖价格*/
        "cost_price": 10,/*会员礼包成本价*/
        "eduction_type": "eoc",/*会员礼包抵扣类型*/
        "eduction_num": 100,/*会员礼包抵扣数量*/
        "type": 1,/*会员礼包类型 1-实体 2-虚拟*/
        "is_delete": 0,
        "sort": 1,/*会员礼包排序*/
        "link_url": "http:\/\/www.baidu.com",/*虚拟礼包领取链接*/
        "link_code": "GFH345",/*虚拟礼包领取码*/
        "created_at": "2020-02-22 22:29:49",
        "updated_at": "2020-02-22 22:29:49"
    },
    {
        "id": 1,
        "member_id": 2,
        "name": "青铜礼包1",
        "cover": "https:\/\/www.baidu.com",
        "detail": "https:\/\/www.baidu.com",
        "price": 100,
        "cost_price": 10,
        "eduction_type": "eoc",
        "eduction_num": 100,
        "type": 1,
        "is_delete": 0,
        "sort": 0,
        "created_at": "2020-02-22 22:23:38",
        "updated_at": "2020-02-22 22:29:14"
    }
]
```

## 创建礼包

`/admin/tbk/gifts`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| member_id | int  |  无  |  是  |         会员等级id        |
| name | string  |  无  |  是  |         礼包名称        |
| cover | string  |  无  |  是  |         礼包封面       |
| detail | string  |  无  |  是  |         礼包详情        |
| image | string  |  无  |  是  |         礼包详情头图        |
| price | int  |  无  |  是  |         礼包售卖价格        |
| cost_price | int  |  无  |  是  |         礼包售卖成本价格        |
| eduction_type | string  |  无  |  是  |         礼包允许抵扣货币的类型        |
| eduction_num | int  |  无  |  是  |         礼包抵扣货币数量上限        |
| type | int  |  无  |  是  |         礼包类型 1-实体 2-虚拟         |
|   sort   | int |  无  |  否  | 权重数值，数值越大排序越靠前 |
|   link_url   | string |  无  |  否  | 虚拟礼包领取链接 |
|   link_code   | string |  无  |  否  | 虚拟礼包领取码 |


**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "创建成功",
}
```

## 修改礼包

`/admin/tbk/gifts/{gift}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| member_id | int  |  无  |  否  |         会员等级id        |
| name | string  |  无  |  否  |         礼包名称        |
| cover | string  |  无  |  否  |         礼包封面       |
| detail | string  |  无  |  否  |         礼包详情        |
| image | string  |  无  |  否  |         礼包详情头图        |
| price | int  |  无  |  否  |         礼包售卖价格        |
| cost_price | int  |  无  |  否  |         礼包售卖成本价格        |
| eduction_type | string  |  无  |  否  |         礼包允许抵扣货币的类型        |
| eduction_num | int  |  无  |  否  |         礼包抵扣货币数量上限        |
| type | int  |  无  |  否  |         礼包类型 1-实体 2-虚拟         |
|   sort   | int |  无  |  否  | 权重数值，数值越大排序越靠前 |
|   link_url   | string |  无  |  否  | 虚拟礼包领取链接 |
|   link_code   | string |  无  |  否  | 虚拟礼包领取码 |


**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "修改成功",
}
```

## 删除礼包

`/admin/tbk/gifts/{gift}`

**请求方式**

`DELETE`

**请求参数**

无

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

无

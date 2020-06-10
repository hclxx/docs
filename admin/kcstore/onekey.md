# 一键挖矿模块

## 一键挖矿购买订单列表

#### 接口URL
> {{url}}/collections

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| start     | 2020-05-18 00:00:00 | 选填 | 开始时间 |
| end     | 2020-05-18 00:00:00 | 必填 | 结束时间 |
| name     | aa | 选填 | 用户名搜索(支持模糊查询) |
| page     | 1 | 必填 | 当前页数 |
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
                "name": "yanfan",
                "avatar": null,
                "gender": 1,
                "phone": "187****1153",
                "code": "BDV81R",
                "power": 0,
                "collection_time": "2020-06-01 00:00:00",
                "created_at": "2020-05-06 03:25:16",
                "updated_at": "2020-05-06 03:25:16",
                "status": 1,/*1-有效期内 2-已过期*/
            }
        ],
        "first_page_url": "http:\/\/storage.name\/admin\/collections?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http:\/\/storage.name\/admin\/collections?page=1",
        "next_page_url": null,
        "path": "http:\/\/storage.name\/admin\/collections",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 用户购买一键挖矿流水明细

#### 接口URL
> {{url}}/collections/1

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
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
    "current_page": 1,
    "data": [
        {
            "id": 33,
            "title": "购买一键挖矿权限",/*标题*/
            "currency": "cny",/*流水类型 cl/cny*/
            "amount": "18.00000000",/*金额*/
            "extend": {
                "month": 3,/*购买月份数*/
                "order_no": "123",/*订单号*/
                "buy_type": "购买",/*续费 or 购买*/
                "collect_time": "2019-10-17 11:21:55",/*到期时间*/
            },
            "created_at": "2019-04-17 13:39:57"
        },
        {
            "id": 33,
            "title": "购买一键挖矿权限",
            "currency": "comc",
            "extend": {
                "month": 1,
                "order_no": "123",
                "buy_type": "续费",
                "collect_time": "2019-10-17 11:21:55"
            },
            "created_at": "2019-04-17 13:39:57"
        }
    ],
    "first_page_url": "http://comc.com/admin/order/16/collection?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/order/16/collection?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/order/16/collection",
    "per_page": 15,
    "prev_page_url": null,
    "to": 4,
    "total": 4
}
```



## 购买一键挖矿总计收入

#### 接口URL
> {{url}}/collections/amount

#### 请求方式
> GET


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "ok",
	"code": 0,
	"data": [
		{
			"total_amount": null
		}
	]
}
```
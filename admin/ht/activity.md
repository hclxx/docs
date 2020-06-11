# 活动(一元购)管理

## 活动列表

#### 接口URL
> {{url}}/activities

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| status     | 1 | 选填 | 0-未开启/1-进行中/2-完成 |
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
                "title": "一元购",/*活动名称*/
                "num": 200,/*兑换总数量*/
                "buy_num": 0,/*已购买总数量*/
                "max": 1,/*单个用户兑换上限:0-无上限*/
                "price": 1,/*兑换单价*/
                "currency": "dstt",/*兑换方式:hd-火豆,dstt-dstt*/
                "reward": {/*奖励信息*/
                   "desc": "商品描述",/*商品描述*/
                   "name": "iphone",/*商品名称*/
                   "cover": "1.jpg",/*商品封面*/
                },
                "rule": "奖励规则",/*活动规则*/
                "code": null,/*中奖码*/
                "user_id": 0,/*中奖用户ID*/
                "status": 1,/*0-未开启/1-进行中/2-完成*/
                "is_delete": 0,
                "created_at": "2020-06-11 14:38:36",
                "updated_at": "2020-06-11 14:38:36"
            }
        ],
        "first_page_url": "http://ht.test/admin/activities?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/activities?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/activities",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 创建活动

#### 接口URL
> {{url}}/activities

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| title     | 活动名称|  必填 | 活动名称 |
| num     | 200 |  必填 | 兑换总数量 |
| max     | 10 |  必填 | 单个用户兑换上限:0-无上限 |
| price     | 1 |  必填 | 单个价格 |
| currency     | dstt |  必填 | 兑换方式:hd-火豆,dstt-dstt |
| reward     | ['name'=>'商品名称','cover'=>'商品图标','desc'=>'商品描述'] |  必填 | 奖励信息 |
| rule     | 活动规则 |  必填 | 活动规则 |
| status     | 1 |  必填 | 0-未开启/1-进行中/2-完成 |

#### 成功响应示例
```json
{
	"msg": "创建成功",
	"code": 0,
	"data": null
}
```

## 修改活动

#### 接口URL
> {{url}}/activities/{activity}

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| title     | 活动名称|  选填 | 活动名称 |
| num     | 200 |  选填 | 兑换总数量 |
| max     | 10 |  选填 | 单个用户兑换上限:0-无上限 |
| reward     | ['name'=>'商品名称','cover'=>'商品图标','desc'=>'商品描述'] |  选填 | 奖励信息 |
| rule     | 活动规则 |  选填 | 活动规则 |
| status     | 1 |  选填 | 0-未开启/1-进行中/2-完成 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 删除活动

#### 接口URL
> {{url}}/activities/{activity}

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 成功响应示例
```json
{
	"msg": "删除成功",
	"code": 0,
	"data": null
}
```

## 用户购买活动记录列表

#### 接口URL
> {{url}}/{activity}/buy/logs

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
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
                "user_id": 1,
                "activity_id": 1,/*活动id*/
                "buy_num": 1,/*购买数量*/
                "codes": ['123'],/*中奖码集合:["abc","bcd"]*/
                "created_at": "2020-06-11 14:45:26",
                "updated_at": "2020-06-11 14:45:26",
                "user": {
                    "id": 1,
                    "name": "yanfan1111",
                    "avatar": null,
                    "number": "34821989"
                }
            }
        ],
        "first_page_url": "http://ht.test/admin/activities/1/buy/logs?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ht.test/admin/activities/1/buy/logs?page=1",
        "next_page_url": null,
        "path": "http://ht.test/admin/activities/1/buy/logs",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

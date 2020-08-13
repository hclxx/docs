# 等量发车

## 列表

#### 接口URL
> {{url}}/buses

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| start_time     | 2020-05-18 00:00:00 | 选填 | 开始时间 |
| end_time     | 2020-05-19 00:00:00 | 选填 | 结束时间 |
| status     | 1 | 选填 | 车次状态:1-检票中 2-行驶中 3-结算中 4-已完成 |
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
                "max_num": 300, /*最大上车人数*/
                "has_num": 0, /*已上车人数*/
                "cd_num": 0,  /*创豆总数*/
                "tg_num": 0,  /*糖果总数*/
                "cycle": 90,  /*周期*/
                "status": 1,  /*车次状态:1-检票中 2-行驶中 3-结算中 4-已完成*/
                "sort": 10,   /*排序*/
                "is_delete": 0,
                "created_at": "2020-08-13 11:27:06",
                "updated_at": "2020-08-13 11:27:06"
            },
            {
                "id": 2,
                "max_num": 600,
                "has_num": 0,
                "cd_num": 0,
                "tg_num": 0,
                "cycle": 90,
                "status": 1,
                "sort": 10,
                "is_delete": 0,
                "created_at": "2020-08-13 11:27:15",
                "updated_at": "2020-08-13 11:27:15"
            }
        ],
        "first_page_url": "http://cyb.test/admin/buses?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://cyb.test/admin/buses?page=1",
        "next_page_url": null,
        "path": "http://cyb.test/admin/buses",
        "per_page": 15,
        "prev_page_url": null,
        "to": 3,
        "total": 3
    }
}
```



## 创建

#### 接口URL
> {{url}}/buses

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| max_num     | 30 | 必填 | 上车最大人数 |
| cycle     | 90 | 必填 | 周期 |
| sort     | 10 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "创建成功",
	"code": 0,
	"data": null
}
```


## 修改

#### 接口URL
> {{url}}/buses/{bus}

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| max_num     | 30 | 选填 | 上车最大人数 |
| cycle     | 90 | 选填 | 周期 |
| sort     | 10 |  选填 | 排序 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 删除

#### 接口URL
> {{url}}/buses/{bus}

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |

#### 成功响应示例
```json
{
	"msg": "删除成功",
	"code": 0,
	"data": null
}
```


## 等量发车订单列表

#### 接口URL
> {{url}}/buses/{bus}/orders

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| start_time     | 2020-05-18 00:00:00 | 选填 | 开始时间 |
| end_time     | 2020-05-19 00:00:00 | 选填 | 结束时间 |
| name     | aa | 选填 | 用户名称筛选 |
| phone     | 18781601111 | 选填 | 用户电话筛选 |
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
                "bus_id": 1,
                "remain_cycle": 90,   /*剩余天数*/
                "tg_num": "10.0000",  /*糖果数量*/
                "cd_num": "500.0000", /*创豆数量*/
                "status": 1,          /*车次状态:1-检票中 2-行驶中 3-结算中 4-已完成*/
                "data": {     /*车辆信息*/
                      "id": 1,
                      "max_num": 300, /*最大上车人数*/
                      "has_num": 0, /*已上车人数*/
                      "cd_num": 0,  /*创豆总数*/
                      "tg_num": 0,  /*糖果总数*/
                      "cycle": 90,  /*周期*/
                      "status": 1,  /*车次状态:1-检票中 2-行驶中 3-结算中 4-已完成*/
                      "sort": 10,   /*排序*/
                      "is_delete": 0,
                      "created_at": "2020-08-13 11:27:06",
                      "updated_at": "2020-08-13 11:27:06"
                },
                "created_at": "2020-08-13 11:44:03",
                "updated_at": "2020-08-13 11:44:03",
                "user": {   /*用户信息*/
                    "id": 1,
                    "name": "aa",
                    "avatar": "123.jpg",
                    "tel": "1871601111"
                }
            }
        ],
        "first_page_url": "http://cyb.test/admin/buses/1/orders?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://cyb.test/admin/buses/1/orders?page=1",
        "next_page_url": null,
        "path": "http://cyb.test/admin/buses/1/orders",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



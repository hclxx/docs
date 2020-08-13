# 节点认购

## 列表

#### 接口URL
> {{url}}/nodes

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |

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
            "id": 1,
            "num": "300",   /*认购数量*/
            "static_income": "3", /*静态收益*/
            "dynamic_income": "10", /*动态收益*/
            "cycle": "90",    /*周期*/
            "sort": 1,    /*排序*/
            "is_delete": 0,
            "created_at": "2020-08-13 13:49:07",
            "updated_at": "2020-08-13 13:49:07"
        }
    ]
}
```



## 创建

#### 接口URL
> {{url}}/nodes

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| num     | 30 | 必填 | 认购数量 |
| static_income     | 2 | 必填 | 静态收益 |
| dynamic_income     | 10 |  必填 | 动态收益 |
| cycle     | 10 |  必填 | 周期 |
| sort     | 1 |  选填 | 排序 |

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
> {{url}}/nodes/{node}

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| num     | 30 | 选填 | 认购数量 |
| static_income     | 2 | 选填 | 静态收益 |
| dynamic_income     | 10 |  选填 | 动态收益 |
| cycle     | 10 |  选填 | 周期 |
| sort     | 1 |  选填 | 排序 |

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
> {{url}}/nodes/{node}

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


## 节点认购订单列表

#### 接口URL
> {{url}}/nodes/{node}/orders

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
                "id": 2,
                "user_id": 1,
                "node_id": 1,
                "remain_cycle": 90,   /*剩余周期*/
                "status": 1,    /*状态:1-进行中 2-已完成*/
                "type": 1,      /*类型:1-自动续期 2-到期赎回*/
                "data": {
                    "id": 1,
                    "num": "300",   /*认购数量*/
                    "sort": 1,    
                    "cycle": "90",  /*周期*/
                    "is_delete": 0,
                    "created_at": "2020-08-13 13:49:07",
                    "updated_at": "2020-08-13 13:49:07",
                    "static_income": "3",   /*静态奖励*/
                    "dynamic_income": "10"  /*动态奖励*/
                },
                "created_at": "2020-08-13 13:56:39",
                "updated_at": "2020-08-13 13:56:39",
                "user": {   /*用户信息*/
                    "id": 1,
                    "name": "aa",
                    "avatar": "123.jpg",
                    "tel": "1871601111"
                }
            }
        ],
        "first_page_url": "http://cyb.test/admin/nodes/1/orders?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://cyb.test/admin/nodes/1/orders?page=1",
        "next_page_url": null,
        "path": "http://cyb.test/admin/nodes/1/orders",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



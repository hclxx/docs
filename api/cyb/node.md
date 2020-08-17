# 节点认购

## 认购节点列表

#### 接口URL
> {{url}}/nodes/all

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
|  limit   |  int   |  是  |         条目数量 默认 20          |
|  offset  |  int   |  是  |           偏移量 默认 0           |

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
            "id": 2,
            "num": "600",
            "static_income": "6",
            "dynamic_income": "20",
            "cycle": "90",
            "sort": 2,
            "is_delete": 0,
            "is_buy": false,
            "created_at": "2020-08-13 13:49:20",
            "updated_at": "2020-08-13 13:51:04"
        },
        {
            "id": 1,
            "num": "300",   /*认购数量*/
            "static_income": "3", /*静态收益*/
            "dynamic_income": "10", /*动态收益*/
            "cycle": "90",    /*周期*/
            "sort": 1,    /*排序*/
            "is_delete": 0,
             "is_buy": true,  /*true-已购买 false-未购买*/
            "created_at": "2020-08-13 13:49:07",
            "updated_at": "2020-08-13 13:49:07"
        }
    ]
}
```

## 我的认购节点列表

#### 接口URL
> {{url}}/nodes/my

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
|  status   |  int   |  否 |         状态:1-进行中 2-已完成          |
|  limit   |  int   |  是  |         条目数量 默认 20          |
|  offset  |  int   |  是  |           偏移量 默认 0           |

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
            "id": 2,
            "user_id": 1,
            "node_id": 1,
            "remain_cycle": 90,   /*剩余周期*/
            "status": 1,    /*状态:1-进行中 2-已完成*/
            "type": 1,      /*类型:1-自动续期 2-到期赎回*/
            "static_income": "10",    /*静态总奖励*/
            "dynamic_income": "10.5", /*动态总奖励*/
            "data": {
                "id": 1,
                "num": "300",   /*认购数量*/
                "sort": 1,    
                "cycle": "90",
                "is_delete": 0,
                "created_at": "2020-08-13 13:49:07",
                "updated_at": "2020-08-13 13:49:07",
                "static_income": "3",  
                "dynamic_income": "10"
            },
            "created_at": "2020-08-13 13:56:39",  /*认购日期*/
            "updated_at": "2020-08-13 13:56:39",
            "expire_date": "2020-11-11 13:56:39"    /*到期时间*/
        }
    ]
}
```

## 节点认购统计

#### 接口URL
> {{url}}/nodes/statistics

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
    "data": {
        "static_income": "20",    /*静态总收益*/
        "dynamic_income": "25",   /*动态总收益*/
        "num": "600"              /*认购总数*/
    }
}
```


## 节点认购

#### 接口URL
> {{url}}/nodes/{node}

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| type     | 1 | 必填 | 类型:1-自动续期 2-到期赎回 |
| pay_pass     | 123 | 必填 | 支付密码 |

#### 成功响应示例
```json
{
	"msg": "购买成功",
	"code": 0,
	"data": null
}
```

## 修改认购类型

#### 接口URL
> {{url}}/nodes/{node}

#### 请求方式
> PATCH

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| type     | 1 | 必填 | 类型:1-自动续期 2-到期赎回 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



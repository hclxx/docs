# 退款地址

## 退款地址详情

#### 接口URL
> {{url}}/consignee

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
	"data": {
		"id": 2,
		"merchant_id": 2,
		"consignee": "张三",/*收货人*/
		"tel": "18781601111",/*收货人电话*/
		"address": "四川省成都市",/*收货人地址*/
		"description": "123",/*注意事项*/
		"created_at": null,
		"updated_at": null
	}
}
```



## 修改平台退货地址信息

#### 接口URL
> {{url}}/consignee

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| consignee     | 张三 |  必填 | 收货人 |
| tel     | 18781601111 |  必填 | 收货人电话 |
| address     | 四川省成都市 |  必填 | 收货地址 |
| description     | 123 |  必填 | 注意事项 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```
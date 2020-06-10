# 订单模块

## 订单列表

#### 接口URL
> {{url}}/orders?user_where=0CG

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| limit     | 20 | 必填 | 条目数 |
| page     | 1 | 必填 | 分页码 |
| zone     | 1 | 选填 | 订单区域: 1-爆品区/2-体验店/3-优选店/4-特惠 |
| order_no     | N65011590054165865 | 选填 | 订单号检索 |
| spu_name     | 手机 | 选填 | 商品名称检索 |
| status     | wait | 选填 | 状态检索:wait-待支付/paid-已支付等待发货/shipped-已发货/completed-已完成/closed-关闭/apply-售后 |
| user_where     | 0CG | 选填 | 用户手机号/姓名检索 |
| merchant_name     | 店铺 | 选填 | 店铺名称检索 |
| start     | 2020-05-27 00:00:00 | 选填 | 开始时间 |
| end     | 2020-05-28 00:00:00 | 选填 | 结束时间 |


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
				"id": 5,
				"order_no": "N65011590054165865",/*订单号*/
				"user_id": 1,/*用户ID*/
				"merchant_id": 0,/*商户ID*/
				"total_price": "100.00",/*订单总价*/
				"pay_price": "100.00",/*订单实际支付价格*/
				"token": "0.00",/
				"paid_at": "2019-09-02 12:12:12",/*支付时间*/
				"pay_type": "alipay",/*支付方式:alipay-支付宝/wxpay-微信/sccb-sccb代币支付*/
				"receiving_address": {
					"area": "四川省成都市区",/*收货区域*/
					"name": "胡昊",/*收货人信息*/
					"phone": "18382274309",/*手机号*/
					"address": "环球中心"/*详细地址*/
				},
				"remark": "订单备注",/*订单备注*/
				"refund_status": 0,/*售后状态:0-未申请/1-已申请/2-同意/3-驳回*/
				"refund_at": "2019-09-02 12:12:12",/*申请时间*/
				"refund_info": {/*退换货原因*/
				    "reason": "退换货原因",
				    "remark": "退换货备注",
				    "vouchers": ["凭证图.png"],
				    "reason": "驳回理由"
				},
				"logistics": null,
				"send_at": "2019-09-02 12:12:12",/*发货时间*/
				"receipt_at": "2019-09-02 12:12:12",/*确认收货时间*/
				"is_delete": 0,/*是否删除:0-否/1-是*/
				"express_code": "jd",/*物流方式编码*/
				"express_name": "京东",/*物流公司名称*/
				"express_no": "123123123",/*物流单号*/
				"status": 0,/*状态检索:wait-待支付/paid-已支付等待发货/shipped-已发货/completed-已完成/closed-关闭/apply-售后*/
				"extra": null,
				"close_reason": "订单关闭原因",/*订单关闭原因*/
				"created_at": "2020-05-21 17:42:45",
				"updated_at": "2020-05-21 17:42:45",
				"close_seconds": 0,
				"spu_order": {
					"id": 5,
					"spu_id": 4,
					"sku_id": 1,
					"order_id": 5,
					"spu_name": "iphone12",/*购买的商品名称*/
					"spu_pic": "16ddf9eef740c6585a219908dbb2b791.jpeg",/*商品图*/
					"zone": "1",/*订单区域: hot-爆品区/experience-体验店/quality-优选店/preferential-特惠*/
					"attrs": [
						{
							"n_id": 1,
							"name": "颜色",
							"v_id": 2,
							"value": "红色"
						},
						{
							"n_id": 2,
							"name": "内存大小",
							"v_id": 4,
							"value": "64G"
						}
					],
					"num": 1,/*购买的数量*/
					"price": "1000.00",/*商品单价*/
					"token": "0.00",/*单个商品奖励的SCCB数量*/
					"created_at": "2020-05-21 17:42:45",
					"updated_at": "2020-05-21 17:42:45"
				},
				"user": {/*用户信息*/
					"id": 1,
					"name": "张三",
					"phone": "18382274309",
				},
				"merchant": {/*店铺信息*/
					"id": 1,
					"name": "店铺名称",
					"phone": "18382274309",
				}
			}
		],
		"first_page_url": "http://kcstore.test/admin/orders?page=1",
		"from": 1,
		"last_page": 1,
		"last_page_url": "http://kcstore.test/admin/orders?page=1",
		"next_page_url": null,
		"path": "http://kcstore.test/admin/orders",
		"per_page": "20",
		"prev_page_url": null,
		"to": 1,
		"total": 1
	}
}
```



## 快递列表

#### 接口URL
> {{url}}/express

#### 请求方式
> GET


#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 中通 | 选填 | 快递名称检索 |
| code     | zhongtong | 选填 | 快递code检索 |


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
			"name": "京东",/*快递名称*/
			"code": "jingdong",/*快递编号*/
			"created_at": "2020-05-27 13:58:53",
			"updated_at": "2020-05-27 13:58:53"
		},
		{
			"id": 2,
			"name": "顺丰",
			"code": "shunfeng",
			"created_at": "2020-05-27 13:58:53",
			"updated_at": "2020-05-27 13:58:53"
		},
		{
			"id": 3,
			"name": "申通",
			"code": "shentong",
			"created_at": "2020-05-27 13:58:53",
			"updated_at": "2020-05-27 13:58:53"
		}
	]
}
```



## 查询物流信息

#### 接口URL
> {{url}}/orders/1/ship

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
			"time": "2018-08-15 17:31:22",
			"context": "订单已由本人签收，感谢您在京东购物，欢迎您再次光临！"
		},
		{
			"time": "2018-08-15 15:43:02",
			"context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
		},
		{
			"time": "2018-08-15 15:25:50",
			"context": "配送员开始配送，请您准备收货，配送员，郑学超，手机号，13730834230或17360166072"
		},
		{
			"time": "2018-08-15 15:04:27",
			"context": "货物已分配，等待配送"
		},
		{
			"time": "2018-08-15 12:53:05",
			"context": "货物已完成分拣，离开【成都郫县分拣中心】"
		},
		{
			"time": "2018-08-15 12:26:46",
			"context": "货物已到达【成都郫县分拣中心】"
		},
		{
			"time": "2018-08-15 12:26:46",
			"context": "货物已交付京东物流"
		}
	]
}
```



## 订单发货

#### 接口URL
> {{url}}/orders/1/ship

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| express_code     | shentong |  必填 | 快递编号 |
| express_name     | 申通 |  必填 | 快递名称 |
| express_no     | 123465 |  必填 | 快递单号 |

#### 成功响应示例
```json
{
	"msg": "发货成功",
	"code": 0,
	"data": null
}
```



## 修改物流信息

#### 接口URL
> {{url}}/orders/1/ship

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| express_code     | shentong |  必填 | 快递编号 |
| express_name     | 申通 |  必填 | 快递名称 |
| express_no     | 123465 |  必填 | 快递单号 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 处理退款

#### 接口URL
> {{url}}/orders/1/refund

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| refund_status     | 2 |  必填 | 2-同意 3-驳回 |
| reason     | 不同意 |  选填 | 驳回时必传该参数 |

#### 成功响应示例
```json
{
	"msg": "处理成功",
	"code": 0,
	"data": null
}
```
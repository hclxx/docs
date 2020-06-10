# 系统配置模块

## 服务器信息

#### 接口URL
> {{url}}/configs/server

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
          "php_version": "7.2.14", //PHP版本
          "os": "WINNT", //操作系统
          "server": "Apache/2.4.37 (Win64) PHP/7.2.14", //运行环境
          "db": "mysql", //数据库
          "port": "80", //端口号
          "root": "D:/wamp/wamp64/www/mall-admin/public", //网站跟目录
          "agent": "PostmanRuntime/7.6.0", //你使用的浏览器
          "protocol": "HTTP/1.1", //通信协议
          "method": "GET", //请求方式
          "laravel_version": "5.7.19", //laravel框架版本
          "max_upload_size": "1024", //最大上传限制
          "execute_time": "120秒", //最大执行时间
          "server_date": "2019年1月16日 10:53:47", //服务器时间
          "local_date": "2019年1月16日 18:53:47", //本地时间
          "domain_ip": "shop.igoods.com [ 192.168.0.112 ]", //域名/IP
          "user_ip": "192.168.0.112", //你的IP
          "disk": "946235.47M" //服务器剩余磁盘空间
        }
}
```



## 获取版本控制状态

#### 接口URL
> {{url}}/configs/version

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
		"status": false /*true-开启  false-关闭*/
	}
}
```



## 设置版本控制状态

#### 接口URL
> {{url}}/configs/version

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| status     | 1 |  必填 | 开启状态：0：关闭 1：开启 |

#### 成功响应示例
```json
{
	"msg": "修改版本成功",
	"code": 0,
	"data": null
}
```



## 获取站点信息

#### 接口URL
> {{url}}/configs/site

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
		"id": 1,
		"key": "site",
		"value": {
			"icp": "科创商城备案信息",/*备案信息*/
			"name": "科创商城",/*站点名称*/
			"describe": "科创商城",/*站点描述*/
			"keywords": "科创,商城"/*关键字*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改站点信息

#### 接口URL
> {{url}}/configs/site

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| icp     | 科创商城备案信息 |  必填 | 备案信息 |
| name     | 科创商城 |  必填 | 站点名称 |
| describe     | 科创商城科创商城 |  必填 | 站点描述 |
| keywords     | 科创,商城,科创,商城 |  必填 | 关键字 |

#### 成功响应示例
```json
{
	"msg": "ok",
	"code": 0,
	"data": {
		"id": 1,
		"key": "site",
		"value": {
			"icp": "科创商城备案信息",/*备案信息*/
			"name": "科创商城",/*站点名称*/
			"describe": "科创商城",/*站点描述*/
			"keywords": "科创,商城"/*关键字*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 获取邀请配置

#### 接口URL
> {{url}}/configs/invite

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
		"key": "invite",
		"value": {
			"url": "http://resource.immeet.com/科创商城/register.html",/*邀请链接*/
			"mode": "邀请方式",/*邀请方式*/
			"rule": "邀请说明",/*邀请奖励*/
			"power": "10"/*二级奖励*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改邀请配置

#### 接口URL
> {{url}}/configs/invite

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| url     | http://resource.immeet.com/科创商城/register.html |  必填 | 邀请链接 |
| mode     | 邀请方式,邀请方式 |  必填 | 邀请方式 |
| rule     | 邀请说明,邀请说明 |  必填 | 邀请奖励 |
| power     | 20 |  必填 | 二级奖励 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 获取订单相关配置

#### 接口URL
> {{url}}/configs/order

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
		"id": 3,
		"key": "order",
		"value": {
			"refund": 7,    /*退款有效期天数*/
			"receipt": 7    /*自动确认收货天数*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改订单相关配置

#### 接口URL
> {{url}}/configs/order

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| refund     | 8 |  必填 | 退款有效期天数 |
| receipt     | 8 |  必填 | 自动确认收货天数 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 获取挖矿奖励比例配置

#### 接口URL
> {{url}}/configs/ore

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
		"id": 6,
		"key": "sccb",
		"value": {
			"float": 0.1,   /*浮动比例*/
			"ratio": 0.2,   /*挖矿基数*/
			"everyday_max": 1   /*每日限量*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改挖矿奖励比例配置

#### 接口URL
> {{url}}/configs/ore

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| float     | 0.2 |  必填 | 浮动比例 |
| ratio     | 0.3 |  必填 | 挖矿基数 |
| everyday_max     | 10 |  必填 | 每日限量 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 获取一键收取价格配置

#### 接口URL
> {{url}}/configs/collection

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
			"month": 1, /*月份*/
			"price": 3  /*金额*/
		},
		{
			"month": 3,
			"price": 10
		},
		{
			"month": 6,
			"price": 20
		}
	]
}
```



## 修改一键收取价格配置

#### 接口URL
> {{url}}/configs/collection

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
	"money": [
		{
			"month": 1,
			"price": 2
		},
		{
			"month": 2,
			"price": 4
		},
		{
			"month": 3,
			"price": 6
		}
	]
}
```

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 获取一键收取支付方式开关配置

#### 接口URL
> {{url}}/configs/collection/switch

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
		"id": 5,
		"key": "one:key:switch",
		"value": {
			"alipay": "on", /*支付宝 on-开启 off-关闭*/
			"wechat": "on"  /*微信宝 on-开启 off-关闭*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改一键收取支付方式开关配置

#### 接口URL
> {{url}}/configs/collection/switch

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
	"switch": {
		"alipay": "off",
		"wechat": "off"
	}
}
```

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 获取订单退款原因

#### 接口URL
> {{url}}/configs/refund/reasons

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
		"id": 8,
		"key": "refund:reason",
		"value": [
			"尺寸不符",
			"颜色与商品不符",
			"做工粗糙/有瑕疵",
			"质量问题",
			"少发/漏发"
		],
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改订单退款原因

#### 接口URL
> {{url}}/configs/refund/reasons

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
	"reasons": [
		"尺寸不符",
		"颜色与商品不符",
		"做工粗糙/有瑕疵",
		"质量问题",
		"少发/漏发",
		"我不想要了"
	]
}
```

#### 成功响应示例
```json
{
	"msg": "ok",
	"code": 0,
	"data": {
		"id": 8,
		"key": "refund:reason",
		"value": [
			"尺寸不符",
			"颜色与商品不符",
			"做工粗糙/有瑕疵",
			"质量问题",
			"少发/漏发"
		],
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```

## 获取购物SCCB提成

#### 接口URL
> {{url}}/configs/shopping?aa=

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
		"tyd": {    //  体验店
			"shop": "40",   //  店铺奖励
			"user": "30"    //  用户奖励
		},
		"yxd": {    //  优选店
			"user": "20"    //  用户奖励
		}
	}
}
```



## 修改购物SCCB提成

#### 接口URL
> {{url}}/configs/shopping

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
    "tyd": {    //  体验店
		"shop": "40",   //  店铺奖励
		"user": "30"    //  用户奖励
	},
	"yxd": {        //  优选店
		"user": "20"    //  用户奖励
	}
}
```

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```



## 获取代理提成

#### 接口URL
> {{url}}/configs/agent

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
		"city": "2.5",  //  市提成
		"shop": "50",   //  店铺提成
		"district": "2.5",  //  区(县)提成
		"province": "2.5"   //  省提成
	}
}
```



## 修改代理提成

#### 接口URL
> {{url}}/configs/agent

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

```json
{
	"city": "2.6",  //  市提成
	"shop": "51",   //  店铺提成
	"district": "2.6",  //  区(县)提成
	"province": "2.6"   //  省提成
}
```

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 获取平台退货地址信息

#### 接口URL
> {{url}}/configs/consignee

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
		"id": 1,
		"merchant_id": 0,
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
> {{url}}/configs/consignee

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
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
			"f_power": "100",/*一级邀请奖励*/
            "s_power": "100"/*二级邀请奖励*/
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
| f_power     | 20 |  必填 | 一级奖励 |
| s_power     | 20 |  必填 | 二级奖励 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```


## 获取奖励配置

#### 接口URL
> {{url}}/configs/reward

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
        "key": "reward",
        "value": {
            "num": "1",/*单次领取火豆个数*/
            "rule": "这是奖励规则说明",/*奖励规则*/
            "upper": "40"/*奖励领取上限次数*/
        },
        "created_at": null,
        "updated_at": null
    }
}
```



## 修改奖励配置

#### 接口URL
> {{url}}/configs/reward

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| num     | 1 |  必填 | 单次领取火豆个数 |
| rule     | 奖励规则 |  必填 | 奖励规则 |
| upper     | 40 |  必填 | 奖励领取上限次数 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```


## 获取支付方式开关配置

#### 接口URL
> {{url}}/configs/pay/switch

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
		"key": "pay:switch",
		"value": {
			"alipay": "on", /*支付宝 on-开启 off-关闭*/
			"wechat": "on",  /*微信宝 on-开启 off-关闭*/
			"dstt": "on"  /*dstt on-开启 off-关闭*/
		},
		"created_at": "2020-05-19 11:01:46",
		"updated_at": "2020-05-19 11:01:46"
	}
}
```



## 修改支付方式开关配置

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
		"wechat": "off",
		"dstt": "off"
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


## 获取提现配置

#### 接口URL
> {{url}}/configs/withdrawal

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
        "key": "withdrawal",
        "value": {
            "instr": "提现说明",/*提现说明*/
            "switch": "on",/*提现开关*/
            "user_min": "100",/*用户单次最低提现数量*/
            "user_day_limit": "1000",/*用户单日提现上限*/
        },
        "created_at": null,
        "updated_at": null
    }
}
```



## 修改提现配置

#### 接口URL
> {{url}}/configs/withdrawal

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| instr     | 提现说明 |  必填 | 提现说明 |
| switch     | on |  必填 | 提现开关 on-开 off-关 |
| user_min     | 100 |  必填 | 用户单次最低提现数量 |
| user_day_limit     | 1000 |  必填 | 用户单日提现上限 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 获取dstt 火豆的转换比例配置

#### 接口URL
> {{url}}/configs/conversion

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
        "id": 4,
        "key": "conversion",
        "value": {
            "min": "10",/*最低闪兑数量*/
            "tips": "这是温馨提示",/*温馨提示*/
            "dstt_to_hd": "10",/*dstt转换火豆比例*/
            "hd_to_dstt": "0.1",/*火豆转换dstt比例*/
            "hd_to_dstt_fee":"10",/*火豆转换dstt手续费比例*/
            "dstt_to_hd_fee":"10",/*dstt转换火豆手续费比例*/
            "hd_to_eth_min" : "100",/*火豆转eth最小数量*/
            "hd_to_eth": "0.1",/*火豆转eth比例*/
            "hd_to_eth_fee": "10",/*火豆转eth手续费比例*/
            "hd_to_usdt_min": "100",/*火豆转usdt最小数量*/
            "hd_to_usdt": "0.1",/*火豆转usdt比例*/
            "hd_to_usdt_fee": "10"/*火豆转usdt手续费比例*/
        },
        "created_at": null,
        "updated_at": null
    }
}
```



## 修改dstt 火豆的转换比例配置

#### 接口URL
> {{url}}/configs/conversion

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| min     | 10 |  必填 | 最低闪兑数量 |
| tips     | on |  温馨提示 | 温馨提示 |
| hd_to_dstt     | 10 |  必填 | dstt购买火豆比例 |
| dstt_to_hd     | 0.1 |  必填 | 火豆兑换dstt比例 |
| hd_to_dstt_fee     | 10 |  必填 | 火豆转换dstt手续费比例 |
| dstt_to_hd_fee     | 0.1 |  必填 | dstt转换火豆手续费比例 |
| hd_to_eth_min     | 10 |  必填 | 火豆转eth最小数量 |
| hd_to_eth     | 0.1 |  必填 | 火豆转eth比例 |
| hd_to_eth_fee     | 10 |  必填 | 火豆转eth手续费比例 |
| hd_to_usdt_min     | 0.1 |  必填 | 火豆转usdt最小数量 |
| hd_to_usdt     | 0.1 |  必填 | 火豆转usdt比例 |
| hd_to_usdt_fee     | 0.1 |  必填 | 火豆转usdt手续费比例 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 获取关于火推配置

#### 接口URL
> {{url}}/configs/about

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
        "key": "about",
        "value": "关于火推",/*关于火推内容*/
        "created_at": null,
        "updated_at": null
    }
}
```

## 修改关于火推配置

#### 接口URL
> {{url}}/configs/about

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| about     | 关于火推 |  必填 | 关于火推 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 获取规则制度配置

#### 接口URL
> {{url}}/configs/rule

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
        "key": "about",
        "value": "规章制度",/*规则制度内容*/
        "created_at": null,
        "updated_at": null
    }
}
```

## 修改规则制度配置

#### 接口URL
> {{url}}/configs/rule

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| rule     | 规章制度 |  必填 | 规章制度 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 注册协议配置

#### 接口URL
> {{url}}/configs/register

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
        "key": "register",
        "value": "注册协议",/*注册协议内容*/
        "created_at": null,
        "updated_at": null
    }
}
```

## 修改注册协议配置

#### 接口URL
> {{url}}/configs/register

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| register     | 注册协议 |  必填 | 注册协议 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 用户协议配置

#### 接口URL
> {{url}}/configs/user

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
        "key": "user",
        "value": "用户协议",/*用户协议内容*/
        "created_at": null,
        "updated_at": null
    }
}
```

## 修改用户协议配置

#### 接口URL
> {{url}}/configs/user

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| user     | 用户协议 |  必填 | 用户协议 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## dstt购买火豆数量配置

#### 接口URL
> {{url}}/configs/hd/num

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
        "id": 12,
        "key": "hd:num",
        "value": [
            "10",
            "50",
            "100",
            "200"
        ],
        "created_at": null,
        "updated_at": null
    }
}
```

## 修改dstt购买火豆数量配置

#### 接口URL
> {{url}}/configs/hd/num

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| hd_num     | ["1", "100", "200"] |  必填 | hd数量(array) |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

## 实名认证配置

#### 接口URL
> {{url}}/configs/certification

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
        "id": 12,
        "key": "certification",
        "value": {
            "price": "0.01",/*价格*/
            "intro": "这是说明",/*说明*/ 
        },
        "created_at": null,
        "updated_at": null
    }
}
```

## 修改实名认证配置

#### 接口URL
> {{url}}/configs/certification

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| price     | 0.01 |  必填 |价格(string) |
| intro     | 这是说明 |  必填 | 说明 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```

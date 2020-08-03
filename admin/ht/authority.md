# 权限管理

## 权限列表

#### 接口URL
> {{url}}/menus

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 角色列表 | 选填 | 权限名称 |
| alias     | role | 选填 | 权限别名 |

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
            "name": "角色列表",/*权限名称*/
            "alias": "role:list",/*权限别名*/
            "icon": null,/*权限图标*/
            "url": "/role",/*跳转地址*/
            "sort": 0,/*排序*/
            "type": 1,/*0: 菜单 1: 导航 2: 按钮*/
            "pid": 0,/*父级ID*/
            "show": 1,/*是否显示 0: 不显示 1: 显示*/
            "list": null
        },
        {
            "id": 3,
            "name": "权限列表",
            "alias": "authority:list",
            "icon": "image",
            "url": "/authority",
            "sort": 0,
            "type": 1,
            "pid": 0,
            "show": 1,
            "list": [
                {
                    "id": 5,
                    "name": "删除权限",
                    "alias": "authority:delete",
                    "icon": null,
                    "url": null,
                    "sort": 0,
                    "type": 2,
                    "pid": 3,
                    "show": 1,
                    "list": null
                }
            ]
        }
    ]
}
```



## 创建权限

#### 接口URL
> {{url}}/menus

#### 请求方式
> POST

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 角色列表2 |  必填 | 权限名称 |
| alias     | menu1 |  必填 | 权限别名 |
| url     | /menu |  必填 | 跳转地址 |
| sort     | 1 |  必填 | 排序 |
| show     | 1 |  必填 | 是否显示 0: 不显示 1: 显示 |
| type     | 2 |  必填 | 0: 菜单 1: 导航 2: 按钮 |
| icon     | menu |  必填 | 权限图标 |
| pid     | 0 |  必填 | 父级Id |

#### 成功响应示例
```json
{
	"msg": "创建权限成功",
	"code": 0,
	"data": null
}
```



## 修改权限

#### 接口URL
> {{url}}/menus/1

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 角色列表1 |  选填 | 权限名称 |
| alias     | menu |  选填 | 权限别名 |
| url     | /menu |  选填 | 跳转地址 |
| sort     | 1 |  选填 | 排序 |
| show     | 1 |  选填 | 是否显示 0: 不显示 1: 显示 |
| type     | 2 |  选填 | 0: 菜单 1: 导航 2: 按钮 |
| icon     | menu |  选填 | 权限图标 |
| pid     | 0 |  选填 | 父级Id |

#### 成功响应示例
```json
{
	"msg": "创建权限成功",
	"code": 0,
	"data": null
}
```



## 删除权限

#### 接口URL
> {{url}}/menus/2

#### 请求方式
> DELETE

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "删除权限成功",
	"code": 0,
	"data": null
}
```



## 权限详情

#### 接口URL
> {{url}}/menus/1

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
		"name": "角色列表1",
		"alias": "menu",
		"icon": "menu",
		"url": "/menu",
		"sort": 0,
		"type": 2,
		"pid": 0,
		"show": 1
	}
}
```
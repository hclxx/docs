# 角色管理

## 角色列表

#### 接口URL
> {{url}}/roles

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 超级 | 选填 | 角色名称(支持模糊查询) |
| alias     | super | 选填 | 角色别名(支持模糊查询) |


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
			"name": "超级管理员",
			"alias": "superadmin",
			"permissions": [],/*权限数组*/
		}
	]
}
```



## 创建角色

#### 接口URL
> {{url}}/roles

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 管理员 |  必填 | 角色名称 |
| alias     | manager |  必填 | 角色别名 |

#### 成功响应示例
```json
{
	"msg": "创建角色成功",
	"code": 0,
	"data": null
}
```



## 修改角色

#### 接口URL
> {{url}}/roles/2

#### 请求方式
> PUT

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| name     | 管理员 |  选填 | 角色名称 |
| alias     | manager |  选填 | 角色别名 |
| permissions[]     | 1 |  选填 | 权限Ids |

#### 成功响应示例
```json
{
	"msg": "修改角色成功",
	"code": 0,
	"data": null
}
```



## 删除角色

#### 接口URL
> {{url}}/roles/2

#### 请求方式
> DELETE


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
	"msg": "删除角色成功",
	"code": 0,
	"data": null
}
```



## 角色详情

#### 接口URL
> {{url}}/roles/1

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
        "name": "总管理员",
        "alias": "admin",
        "permissions": [
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
            }
        ]
    }
}
```
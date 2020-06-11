# 版本控制模块

## 版本控制列表

#### 接口URL
> {{url}}/versions

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
            "type": 1,  //  版本类型 0: android 1: ios
            "version_name": "admin", //  版本名称
            "version_code": "1.0",  //  内部版本号
            "description":"版本说明",  //  版本说明
            "link": "http://www.baidu.com", //  链接地址
            "is_forced":1, //  是否强制更新(1-是 0-否)
            "created_at": "2020-05-08 05:47:19",
            "updated_at": "2020-05-08 05:47:19"
          }
        ],
        "first_page_url": "http://imeet.test/admin/version?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "http://imeet.test/admin/version?page=1",
        "next_page_url": null,
        "path": "http://imeet.test/admin/version",
        "per_page": 15,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}
```


## 创建版本

#### 接口URL
> {{url}}/versions

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| type     | 1 |  必填 | 版本类型 0: android 1: ios |
| version_name     | v1.1.0 |  必填 | 版本名称 |
| version_code     | 1 |  必填 | 内部版本号 |
| description     | 1 |  必填 | 更新说明 |
| link     | 132.jpg |  必填 | 链接地址 |
| is_forced     | 0 |  必填 |  是否强制更新(1-是 0-否) |

#### 成功响应示例
```json
{
	"msg": "创建版本成功",
	"code": 0,
	"data": null
}
```
# 帮助中心

## 列表

#### 接口 URL

> admin/helps

#### 请求方式

> GET

#### 请求 Query 参数

| 参数  | 示例值 | 是否必填 | 参数描述 |
| :---- | :----- | :------- | :------- |
| page  | 1      | 必填     | 当前页数 |
| limit | 20     | 必填     | 每页条数 |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

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
        "title": "测试？" /*标题*/,
        "content": "测试" /*内容*/,
        "sort": 0,
        "is_delete": 0,
        "created_at": null,
        "updated_at": null
      }
    ],
    "first_page_url": "http://mt.test/admin/helps?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://mt.test/admin/helps?page=1",
    "next_page_url": null,
    "path": "http://mt.test/admin/helps",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 添加

#### 接口 URL

> admin/helps

#### 请求方式

> POST

#### 请求 Query 参数

| 参数    | 示例值 | 是否必填 | 参数描述 |
| :------ | :----- | :------- | :------- |
| title   | 123    | 必填     | 标题     |
| content | 123213 | 必填     | 内容     |
| sort    | 20     | 必填     | 排序     |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 更新

#### 接口 URL

> admin/helps/{center}

#### 请求方式

> PUT

#### 请求 Query 参数

| 参数    | 示例值 | 是否必填 | 参数描述 |
| :------ | :----- | :------- | :------- |
| title   | 123    | 必填     | 标题     |
| content | 123213 | 必填     | 内容     |
| sort    | 20     | 必填     | 排序     |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 删除

#### 接口 URL

> admin/helps/{center}

#### 请求方式

> DELETE

#### 请求 Query 参数

none

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

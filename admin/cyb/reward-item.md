# 道具管理

## 道具列表

#### 接口 URL

> {{url}}/reward/items

#### 请求方式

> GET

#### 请求 Query 参数

| 参数  | 示例值 | 是否必填 | 参数描述     |
| :---- | :----- | :------- | :----------- |
| name  | aa     | 选填     | 道具名称查询 |
| page  | 1      | 必填     | 当前页数     |
| limit | 20     | 必填     | 每页条数     |

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
        "name": "飞机",
        "icon": "3.jpg" /*图标*/,
        "currency": "cd" /*道具支付的类型 tg-创豆*/,
        "price": 10 /*道具单价*/,
        "sort": 1 /*排序*/,
        "created_at": "2020-06-11 15:59:53",
        "updated_at": "2020-06-11 15:59:53"
      }
    ],
    "first_page_url": "http://ht.test/admin/reward/items?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://ht.test/admin/reward/items?page=1",
    "next_page_url": null,
    "path": "http://ht.test/admin/reward/items",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}
```

## 创建道具

#### 接口 URL

> {{url}}/reward/items

#### 请求方式

> POST

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数     | 示例值 | 是否必填 | 参数描述               |
| :------- | :----- | :------- | :--------------------- |
| name     | aa     | 必填     | 道具名称               |
| icon     | 3.jpg  | 必填     | 道具图标               |
| currency | hd     | 必填     | 道具支付的类型 tg-创豆 |
| price    | 10     | 必填     | 道具单价               |
| sort     | 10     | 选填     | 排序                   |

#### 成功响应示例

```json
{
  "msg": "创建成功",
  "code": 0,
  "data": null
}
```

## 修改道具

#### 接口 URL

> {{url}}/reward/items/{item}

#### 请求方式

> PUT

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求 Body 参数

| 参数     | 示例值 | 是否必填 | 参数描述               |
| :------- | :----- | :------- | :--------------------- |
| name     | aa     | 选填     | 道具名称               |
| icon     | 3.jpg  | 选填     | 道具图标               |
| currency | hd     | 选填     | 道具支付的类型 cd-创豆 |
| price    | 10     | 选填     | 道具单价               |
| sort     | 10     | 选填     | 排序                   |

#### 成功响应示例

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```

## 删除道具

#### 接口 URL

> {{url}}/reward/items/{item}

#### 请求方式

> DELETE

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "删除成功",
  "code": 0,
  "data": null
}
```

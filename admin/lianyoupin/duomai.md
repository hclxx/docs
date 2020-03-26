# 多麦返利管理

## 栏目列表

`/admin/duomai/cates`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
[
  {
    "id": 1,
    "name": "商城集合",
    "icon": "",
    "explain": "",
    "pid": 0,
    "ratio_explain": null,
    "order_time_explain": null,
    "receipt_time_explain": null,
    "special_explain": "",
    "remark": "",
    "sort": 0,
    "hot": 0,
    "status": 1,
    /*子栏目集合*/
    "children": [
      {
        "id": 3 /*栏目ID*/,
        "name": "淘宝商城" /*栏目名称*/,
        "icon": "http://static.app.com/adasdsadasd.png" /*栏目图标*/,
        "explain": "京东商城说明" /*栏目说明*/,
        "pid": 1 /*栏目ID，0-顶级栏目 pid > 0为二级栏目*/,
        "ratio_explain": "最高返0.6%" /*返利比例说明*/,
        "order_time_explain": "10分钟" /*生成订单时间说明*/,
        "receipt_time_explain": "2个月" /*结账时间周期说明*/,
        "special_explain": "拖货无返利说明" /*退货无返利说明*/,
        "remark": "注意事项" /*注意事项*/,
        "sort": 22 /*排序ID*/,
        "hot": 0 /*热门推荐：0-否 1-是*/,
        "status": 1 /*状态: 0-隐藏 1-显示*/
      }
    ]
  }
]
```

## 添加栏目

`/admin/duomai/cates`

**请求方法**

`POST`

**请求参数**

**注: 顶级栏目，只需要传 name 和 pid 字段， 其他字段非必须。最多支持二级栏目**

|         名称         |  类型  | 默认 | 必须 |                   说明                   |
| :------------------: | :----: | :--: | :--: | :--------------------------------------: |
|         name         | string |  无  |  是  |                 栏目名称                 |
|         icon         | string |  无  |  是  |                 栏目图标                 |
|       explain        | string |  0   |  是  |                 栏目说明                 |
|         pid          |  int   |  0   |  是  | 栏目父 ID，0-顶级栏目 pid > 0 为二级栏目 |
|    ratio_explain     | string |  0   |  是  |               返利比例说明               |
|  order_time_explain  | string |  0   |  是  |             生成订单时间说明             |
| receipt_time_explain | string |  0   |  是  |             结账时间周期说明             |
|   special_explain    | string |  0   |  是  |              退货无返利说明              |
|        remark        | string |  0   |  是  |                 注意事项                 |
|         sort         |  int   |  0   |  是  |                 排序权值                 |
|         hot          |  int   |  0   |  是  |           热门推荐：0-否 1-是            |
|        status        |  int   |  0   |  是  |           状态: 0-隐藏 1-显示            |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "添加成功"
}
```

## 栏目更新

`/admin/duomai/cates/{id}`

**请求方法**

`PUT`

**请求参数**

**注: 无需传递所有字段，变更某字段则提交该字段**

|         名称         |  类型  | 默认 | 必须 |                   说明                   |
| :------------------: | :----: | :--: | :--: | :--------------------------------------: |
|         name         | string |  无  |  否  |                 栏目名称                 |
|         icon         | string |  无  |  否  |                 栏目图标                 |
|       explain        | string |  无  |  否  |                 栏目说明                 |
|         pid          |  int   |  无  |  否  | 栏目父 ID，0-顶级栏目 pid > 0 为二级栏目 |
|    ratio_explain     | string |  无  |  否  |               返利比例说明               |
|  order_time_explain  | string |  无  |  否  |             生成订单时间说明             |
| receipt_time_explain | string |  无  |  否  |             结账时间周期说明             |
|   special_explain    | string |  无  |  否  |              退货无返利说明              |
|        remark        | string |  无  |  否  |                 注意事项                 |
|         sort         |  int   |  无  |  否  |                 排序权值                 |
|         hot          |  int   |  无  |  否  |           热门推荐：0-否 1-是            |
|        status        |  int   |  无  |  否  |           状态: 0-隐藏 1-显示            |

**SUCCESS 状态码**

`201`

**SUCCESS 返回体**

```json
{
  "message": "编辑成功"
}
```

## 删除栏目

**注: 存在子级栏目不能直接删除，接口做了限制**

`/admin/duomai/cates/{id}`

**请求方法**

`DELETE`

**请求参数**

`无`

**SUCCESS 状态码**

`204`

**SUCCESS 返回体**

```json
{
  "message": "删除成功"
}
```

## 多麦配置

`/admin/system/duomai`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "amid": "269075" /*安卓媒体ID*/,
  "imid": "269071" /*IOS媒体ID*/,
  "aappkey": "1231" /*安卓媒体APPKEY*/,
  "iappkey": "123123" /*苹果媒体APPkey*/
}
```

## 更新多麦配置

`/admin/system/duomai`

**请求方法**

`PUT`

**请求参数**

|  名称   |  类型  | 默认 | 必须 |      说明       |
| :-----: | :----: | :--: | :--: | :-------------: |
|  amid   | string |  无  |  是  |   安卓媒体 ID   |
|  imid   | string |  无  |  是  |   IOS 媒体 ID   |
| aappkey | string |  无  |  是  | 安卓媒体 APPKEY |
| iappkey | string |  无  |  是  | 苹果媒体 APPkey |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "更新成功"
}
```

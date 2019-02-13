# 商品分类

## 列表

**方式**

`GET`

**路径**

`/admin/goods/categories`

**参数**

| 名称 |  类型  | 默认 | 必须 |   说明   |
| :--: | :----: | :--: | :--: | :------: |
| name | string |  无  |  是  | 分类名称 |

**响应**

`Status code 200`

```json
[
  {
    "id": 1, // 分类id
    "name": "数码", // 分类名称
    "image": null, // 分类图片地址
    "pid": 0, // 父id
    "level": 0, // 深度
    "path": "", // 路径
    "paths": "", // 全路径
    "sort": 0 // 排序
  }
]
```

## 添加

**方式**

`POST`

**路径**

`/admin/goods/categories`

**参数**

| 名称  |  类型  | 必须 |        说明         |
| :---: | :----: | :--: | :-----------------: |
| name  | string |  是  |         否          | 分类名称 |
|  pid  |  int   |  是  | 父级分类 0-顶级分类 |
| image | string |  是  |     分类图地址      |

**响应**

`Status code 200`

```json
{
  "level": 0,
  "path": "0",
  "paths": "0,",
  "pid": 0,
  "name": "键盘",
  "image": "http://static.io/sasdsadas.jpg",
  "id": 2
}
```

## 修改

**方式**

`PUT`

**路径**

`/admin/goods/categories/:category`

**参数**

| 名称  |  类型  | 必须 |        说明         |
| :---: | :----: | :--: | :-----------------: |
| name  | string |  是  |         否          | 分类名称 |
|  pid  |  int   |  是  | 父级分类 0-顶级分类 |
| image | string |  是  |     分类图地址      |

**响应**

`Status code 200`

```json
{
  "level": 0,
  "path": "0",
  "paths": "0,",
  "pid": 0,
  "name": "键盘",
  "image": "http://static.io/sasdsadas.jpg",
  "id": 2
}
```

## 删除

**方式**

`DELETE`

**路径**

`/admin/goods/categories/:category`

**参数**

无

**响应**

`Status code 204`

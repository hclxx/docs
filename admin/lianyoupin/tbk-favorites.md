# 淘宝联盟选品库管理

## 淘宝联盟选品库列表

**方式**

`GET`

**路径**

`/admin/tbk/index`

**参数**

无

**响应**

`Status code 200`

```json
[
    {
        "favorites_id": 20086185, /*选品库id*/
        "favorites_title": "女装",/*选品库名称*/
        "type": 1                 /*选品库类型 1：普通选品组 2：高佣选品组*/
    },
    {
        "favorites_id": 20071263,
        "favorites_title": "男装",
        "type": 1
    }
]
```

## 添加自有分类选品库

**方式**

`POST`

**路径**

`/admin/tbk/store`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  favorites_id   | int |  是  |                  选品库ID             |
|  favorites_title   |  string   |  是  |                  选品库名称  |
| type  |  int   |  是  |  类型 1：购物区 2：严选区  |
| sort |  int   |  是  |                 排序  默认为0                |
|  status  |  int   |  是  |            状态：1-开启 0-关闭            |

**响应**

`Status code 200`

```json
{
    "id": 3,                        /*记录ID*/
    "favorites_id": 200712638,      /*选品库id*/
    "favorites_title": "童装",      /*选品库名称*/
    "type": 1,                       /*类型 1：购物区 2：严选区*/
    "status": 1,                  /*状态：1-开启 0-关闭*/
    "sort": 5                      /*排序：数字越大越靠前*/
}
```

## 选品库分类列表

**方式**

`GET`

**路径**

`/admin/tbk/list`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
| type  |  int   |  是  |  类型 1：购物区 2：严选区  |
|  status  |  int   |  是  |            状态：1-开启 0-关闭            |

**响应**

`Status code 200`

```json
[
    {
        "id": 1,
        "favorites_id": 20086185,
        "favorites_title": "女装",
        "type": 1,
        "status": 1,
        "sort": 5
    },
    {
        "id": 2,
        "favorites_id": 20071263,
        "favorites_title": "男装",
        "type": 1,
        "status": 1,
        "sort": 5
    },
    {
        "id": 3,
        "favorites_id": 200712638,
        "favorites_title": "童装",
        "type": 1,
        "status": 0,
        "sort": 5
    }
]
```

## 更新（编辑）选品库

**方式**

`POST`

**路径**

`/admin/tbk/update/{tbkFavorites}`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  favorites_id   | int |  是  |                  选品库ID             |
|  favorites_title   |  string   |  是  |          选品库名称  |
| type  |  int   |  是  |  类型 1：购物区 2：严选区  |
| sort |  int   |  是  |                 排序  默认为0                |
|  status  |  int   |  是  |            状态：1-开启 0-关闭            |

**响应**

`Status code 201`

```json
{
    "id": 1,
    "favorites_id": "20086185",
    "favorites_title": "女装",
    "type": "2",
    "status": "1",
    "sort": "5"
}
```

## 删除选品库

**方式**

`delete`

**路径**

`/admin/tbk/delete/{tbkFavorites}`

**参数**

无

**响应**

`Status code 204`

```json
[]
```
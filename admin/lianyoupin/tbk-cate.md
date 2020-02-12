# 淘客商品分类管理

## 分类列表

`/admin/tbk/cates`

**请求方式**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

`注：列表为降序排序好的结果集`

```json
[
  {
    "id": 19 /*分类 id*/,
    "cat_name": "分类名称" /*string 分类名称*/,
    "cat_icon": "https://img.alicdn.com/imgextra/i4/2053469401/TB2PFV2HL9TBuNjy0FcXXbeiFXa-2053469401.png" /*string 分类图标地址*/,
    "category_id": "111" /*strijng 淘宝分类id*/,
    "parent_cid": "0" /*string 淘宝分类父级id,注:0-为顶级分类*/,
    "show": 1 /*integer 显示状态: 0-隐藏 1-显示*/,
    "sort": 23 /*integer 权重值*/,
    /*二级分类集合列表*/
    "children": [
      {
        "id": 20,
        "cat_name": "分类id",
        "cat_icon": "https://img.alicdn.com/imgextra/i1/2053469401/TB2gO5rtr1YBuNjSszhXXcUsFXa-2053469401.png",
        "category_id": "222",
        "parent_cid": "11",
        "show": 1,
        "sort": 0
      }
    ]
  }
]
```

## 更新分类

`/admin/tbk/cates/{id}`

**请求方式**

`PUT`

**请求参数**

`注: 分类名称不支持更新`

|   名称   |  类型   | 默认 | 必须 |             说明             |
| :------: | :-----: | :--: | :--: | :--------------------------: |
| cat_icon | string  |  无  |  否  |         分类图标地址         |
|   sort   | integer |  无  |  否  | 权重数值，数值越大排序越靠前 |
|   show   | integer |  无  |  否  | 分类显示状态: 0-隐藏 1-显示  |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "更新成功",
  "cate": {
    "id": 1,
    "cat_name": "女装",
    "cat_icon": "https://img.alicdn.com/imgextra/i1/2053469401/TB2oX82HL9TBuNjy0FcXXbeiFXa-2053469401.png",
    "category_id": "16",
    "parent_cid": "0",
    "show": 1,
    "sort": 21,
    "created_at": "2020-02-12 15:23:40",
    "updated_at": "2020-02-12 15:45:13"
  }
}
```

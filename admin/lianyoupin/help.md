# 帮助&问答

## 添加帮助文案

**方式**

`POST`

**路径**

`admin/help`

**参数**

|  名称   |  类型  | 默认 | 必须 |               说明                |
| :-----: | :----: | :--: | :--: | :-------------------------------: |
|  name   | string |  无  |  是  |               名称                |
|  image  | string |  无  |  是  |             首图路径              |
| content | string |  无  |  是  | type 为 1:图文 type 为 2:视频路径 |
|  type   |  int   |  无  |  是  |           1:图文 2:视频           |
|  sort   |  int   |  无  |  否  |           排序 默认为:0           |

**响应**

`Status code 201`

```json
{
  "message": "添加成功",
  "data": {
    "id": 3,
    "name": "新手引导3",
    "image": "http://shop.igoods.com/admin/help1",
    "content": "电话费将根据国家非公开3",
    "type": 1,
    "sort": 0
  }
}
```

## 修改帮助文案

**方式**

`put`

**路径**

`admin/help/{help}`

**参数**
| 名称 | 类型 | 默认 | 必须 | 说明 |
| :--: | :----: | :--: | :--: | :---------------------: |
| name | string | 无 | 是 | 名称 |
| image | string | 无 | 是 | 首图路径 |
| content | string | 无 | 是 | type 为 1:图文 type 为 2:视频路径 |
| type | int | 无 | 是 | 1:图文 2:视频 |
| sort | int | 无 | 否 | 排序 默认为:0 |

**响应**

`Status code 201`

```json
{
  "message": "添加成功",
  "data": {
    "id": 1,
    "name": "新手引导1",
    "image": "http://shop.igoods.com/admin/help1",
    "content": "电话费将根据国家非公开134",
    "type": "1",
    "sort": 0
  }
}
```

## 删除帮助文案

**方式**

`delete`

**路径**

`admin/help/{help}`

**参数**

无

**响应**

`Status code 201`

```json
{
  "message": "删除成功"
}
```

## 帮助文案列表

**方式**

`get`

**路径**

`admin/help/`

**参数**

| 名称  |  类型  | 默认 | 必须 |        说明         |
| :---: | :----: | :--: | :--: | :-----------------: |
| name  | string |  无  |  否  |        名称         |
| type  |  int   |  无  |  否  |    1:图文 2:视频    |
| limit |  int   |  无  |  否  | 分页条数 默认:15 条 |

**响应**

`Status code 200`

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 4,
      "name": "新手引导4",
      "image": "http://shop.igoods.com/admin/help1",
      "content": "电话费将根据国家非公开3",
      "type": 1,
      "sort": 0
    },
    {
      "id": 3,
      "name": "新手引导3",
      "image": "http://shop.igoods.com/admin/help1",
      "content": "电话费将根据国家非公开3",
      "type": 1,
      "sort": 0
    },
    {
      "id": 5,
      "name": "新手引导5",
      "image": "http://shop.igoods.com/admin/help1",
      "content": "电话费将根据国家非公开3",
      "type": 1,
      "sort": 0
    }
  ],
  "first_page_url": "http://shop.igoods.com/admin/help?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://shop.igoods.com/admin/help?page=1",
  "next_page_url": null,
  "path": "http://shop.igoods.com/admin/help",
  "per_page": 15,
  "prev_page_url": null,
  "to": 3,
  "total": 3
}
```

## 添加问答分类

**方式**

`post`

**路径**

`admin/help/cate/create`

**参数**

| 名称  |  类型  | 默认 | 必须 |               说明                |
| :---: | :----: | :--: | :--: | :-------------------------------: |
| name  | string |  无  |  是  |               名称                |
| sort  |  int   |  无  |  否  |           排序 默认为 0           |
| state |  int   |  无  |  否  | 显示状态 1:显示 0:不显示 默认为 1 |

**响应**

`Status code 201`

```json
{
  "message": "添加成功",
  "data": {
    "id": 1,
    "name": "新手引导",
    "sort": 1,
    "count": 0, //分类问答总数
    "state": 1
  }
}
```

## 修改问答分类

**方式**

`post`

**路径**

`admin/help/cate/{cate}`

**参数**

| 名称  |  类型  | 默认 | 必须 |               说明                |
| :---: | :----: | :--: | :--: | :-------------------------------: |
| name  | string |  无  |  是  |               名称                |
| sort  |  int   |  无  |  是  |           排序 默认为 0           |
| state |  int   |  无  |  是  | 显示状态 1:显示 0:不显示 默认为 1 |

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "id": 1,
    "name": "新手引导1",
    "sort": "1",
    "count": 0,
    "state": "1"
  }
}
```

## 删除问答分类

**方式**

`delete`

**路径**

`admin/help/cate/{cate}`

**参数**

| 名称  |  类型  | 默认 | 必须 |               说明                |
| :---: | :----: | :--: | :--: | :-------------------------------: |
| name  | string |  无  |  是  |               名称                |
| sort  |  int   |  无  |  是  |           排序 默认为 0           |
| state |  int   |  无  |  是  | 显示状态 1:显示 0:不显示 默认为 1 |

**成功响应**

`Status code 204`

```json
{
  "message": "删除成功"
}
```

**失败响应**

`Status code 500`

```json
{
  "message": "删除失败，请先删除该分类下的回答"
}
```

## 分类列表

**方式**

`get`

**路径**

`admin/help/cate/`

**参数**

| 名称  | 类型 | 默认 | 必须 |           说明           |
| :---: | :--: | :--: | :--: | :----------------------: |
| state | int  |  无  |  否  | 是否展示 1:展示 0:不展示 |
| limit | int  |  15  |  否  |         分页条数         |

**响应**

`Status code 200`

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "新手引导1",
      "sort": 1,
      "count": 0,
      "state": 1
    },
    {
      "id": 2,
      "name": "新手引导2",
      "sort": 0,
      "count": 0,
      "state": 1
    }
  ],
  "first_page_url": "http://shop.igoods.com/admin/help/cate?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://shop.igoods.com/admin/help/cate?page=1",
  "next_page_url": null,
  "path": "http://shop.igoods.com/admin/help/cate",
  "per_page": 15,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

## 添加问答

**方式**

`post`

**路径**

`admin/help/answers`

**参数**

|   名称    |  类型  | 默认 | 必须 |            说明             |
| :-------: | :----: | :--: | :--: | :-------------------------: |
|  cate_id  |  int   |  无  |  是  |           分类 ID           |
| questions | string |  无  |  是  |            问题             |
|  answers  | string |  无  |  是  |            答案             |
|  is_hot   |  int   |  0   |  否  | 热门 1:热门 0:默认 默认为 0 |
|   sort    |  int   |  0   |  否  |        排序 默认为 0        |

**响应**

`Status code 201`

```json
{
  "message": "添加成功",
  "data": {
    "id": 3,
    "cate_id": 1,
    "questions": "这个是怎么回事?",
    "answers": "这个是这样的勒",
    "is_hot": 1, //是否热门
    "sort": 100 //排序
  }
}
```

## 修改问答

**方式**

`post`

**路径**

`admin/help/answers/{answers}`

**参数**

|   名称    |  类型  | 默认 | 必须 |            说明             |
| :-------: | :----: | :--: | :--: | :-------------------------: |
|  cate_id  |  int   |  无  |  是  |           分类 ID           |
| questions | string |  无  |  是  |            问题             |
|  answers  | string |  无  |  是  |            答案             |
|  is_hot   |  int   |  无  |  是  | 热门 1:热门 0:默认 默认为 0 |
|   sort    |  int   |  无  |  是  |        排序 默认为 0        |

**响应**

`Status code 201`

```json
{
  "message": "修改成功",
  "data": {
    "id": 1,
    "cate_id": "1",
    "questions": "这个是怎么回事?",
    "answers": "这个是这样的勒",
    "is_hot": "0",
    "sort": "10"
  }
}
```

## 删除问答

**方式**

`delete`

**路径**

`admin/help/answers/{answers}`

**参数**

无

**响应**

`Status code 201`

```json
{
  "message": "删除成功"
}
```

## 问答列表

**方式**

`get`

**路径**

`admin/help/answers/`

**参数**

|  名称   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| is_hot  | int  |  无  |  否  | 是否热门 |
| cate_id | int  |  无  |  否  |   分类   |
|  limit  | int  |  15  |  否  | 分页条数 |

**响应**

`Status code 200`

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 3,
      "cate_id": 1,
      "questions": "这个是怎么回事?",
      "answers": "这个是这样的勒",
      "is_hot": 1,
      "sort": 100,
      "cate": {
        "id": 1,
        "name": "新手引导1",
        "sort": 1,
        "count": 2,
        "state": 1
      }
    },
    {
      "id": 1,
      "cate_id": 1,
      "questions": "这个是怎么回事?",
      "answers": "这个是这样的勒",
      "is_hot": 0,
      "sort": 10,
      "cate": {
        "id": 1,
        "name": "新手引导1",
        "sort": 1,
        "count": 2,
        "state": 1
      }
    },
    {
      "id": 4,
      "cate_id": 2,
      "questions": "这个是怎么回事?",
      "answers": "这个是这样的勒?",
      "is_hot": 0,
      "sort": 10,
      "cate": {
        "id": 2,
        "name": "新手引导2",
        "sort": 0,
        "count": 3,
        "state": 1
      }
    },
    {
      "id": 5,
      "cate_id": 2,
      "questions": "这个是怎么回事?",
      "answers": "这个是这样的勒?",
      "is_hot": 0,
      "sort": 10,
      "cate": {
        "id": 2,
        "name": "新手引导2",
        "sort": 0,
        "count": 3,
        "state": 1
      }
    },
    {
      "id": 2,
      "cate_id": 1,
      "questions": "这个是怎么回事?",
      "answers": "这个是这样的勒",
      "is_hot": 0,
      "sort": 0,
      "cate": {
        "id": 1,
        "name": "新手引导1",
        "sort": 1,
        "count": 2,
        "state": 1
      }
    }
  ],
  "first_page_url": "http://shop.igoods.com/admin/help/answers?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://shop.igoods.com/admin/help/answers?page=1",
  "next_page_url": null,
  "path": "http://shop.igoods.com/admin/help/answers",
  "per_page": 15,
  "prev_page_url": null,
  "to": 5,
  "total": 5
}
```

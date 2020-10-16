# 市场代理级别管理

## 市场代理级别

**方式**

`GET`

**路径**

`/admin/markets/agency`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 1,
      "name": "零售商" /*代理商级别名称*/,
      "mark": "dealer" /*代理商级别标识*/,
      "icon": "http://" /*代理商级别图标*/,
      "condition": {
        /*晋升条件*/
        "self_num": "1" /*自身购买单位T*/,
        "direct_num": "1" /*直推购买单位T*/
        "desc": "描述",
      },
      "sales_commission": "8" /*销售提成*/,
      "created_at": "2020-05-06 09:37:29",
      "updated_at": "2020-05-06 09:54:20"
    }
  ]
}
```

## 修改市场代理 2 级别

**方式**

`PUT`

**路径**

`/admin/markets/agency2/{agency}`

**参数**

|       名称       |  类型  | 必须 |      说明      |
| :--------------: | :----: | :--: | :------------: |
|       name       | string |  是  | 代理商级别名称 |
|       mark       | string |  是  | 代理商级别标识 |
|       icon       | string |  是  | 代理商级别名称 |
|    condition     | array  |  是  |    晋升条件    |
| sales_commission |  int   |  是  |    销售提成    |

**condition**

```json
{
  /*晋升条件*/
  "self_num": "1" /*自身购买单位T*/,
  "direct_num": "1" /*直推购买单位T*/
  "desc": "描述",
}
```

**响应**

`Status code 200`

```json
{
  "msg": "更新成功",
  "code": 0,
  "data": null
}
```

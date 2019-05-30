# 有赞

## 登入

`api/v1/yz/login`

**请求方法**

`POST`

**请求参数**

`无`

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "access_token": "06d04b80146134f585e947734b61730f",
    "cookie_key": "open_cookie_000711ca7639ac976c",
    "cookie_value": "YZ538029325287497728YZYdHHuGQW"
  }
}
```

## 登出

`api/v1/yz/logout`

**请求方式**

`DELETE`

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": "登出成功"
}
```

## 购物车

`api/v1/yz/cart/count`

**请求方式**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |    说明    |
| :---: | :----: | :--: | :--: | :--------: |
| token | string |  无  | 必须 | 登入 token |

**返回体**

```json
{
  "msg": "",
  "code": 0,
  "data": {
    "count": 0
  }
}
```

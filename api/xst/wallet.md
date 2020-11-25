# 获取充值记录

## 获取充值记录

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |               说明               |
| :----: | :----: | :--: | :------------------------------: |
| currency | string | 必须 | usdt/glc/fbb/flc |

**路径**

`/api/recharge/records`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```
## 获取币价

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |               说明               |
| :----: | :----: | :--: | :------------------------------: |
| currency | string | 否 | usdt/glc/fbb/flc |

**路径**

`/api/cnyprice`

**响应**

`Status code 200`

::: tip

传递 currency 参数 则 data只会返回对应币种价格

如： currency = flc

返回：
"data": {
      "flc": "12.00" 
    }

不传递 currency 参数 则返回所有

"data": {
      "fbb": "12.00", 
      "flc": "12.00" ,
      "usdt": "12.00" ,
      "glc": "12.00" 
    }

:::

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
      "fbb": "12.00", 
      "flc": "12.00" ,
      "usdt": "12.00" ,
      "glc": "12.00" 
    }
}
```
# 市场代理级别管理

## 市场代理级别列表

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
            "name": "零售商",/*代理商级别名称*/
            "mark": "dealer",/*代理商级别标识*/
            "icon": "http:\/\/",/*代理商级别图标*/
            "condition": {/*晋升条件*/
                "desc": "个人购买或销售任意一台存储器",/*条件描述*/
                "self": "1",/*自身销售最小值*/
                "direct": "1",/*直推最小是*/
                "market": "0"/*市场最小值*/
            },
            "sales_commission": "8",/*销售提成*/
            "custody_reward": "0",/*托管费奖励*/
            "agent_reward": "0",/*市场培育奖励*/
            "created_at": "2020-05-06 09:37:29",
            "updated_at": "2020-05-06 09:54:20"
        },
        {
            "id": 2,
            "name": "代理商",
            "mark": "agent",
            "icon": "http:\/\/xxx",
            "condition": {
                "desc": "个人购买+直接销售20T,市场销售了50T",
                "self": "1",
                "direct": "20",
                "market": "50"
            },
            "sales_commission": "12",
            "custody_reward": "0",
            "agent_reward": "0",
            "created_at": "2020-05-06 09:37:29",
            "updated_at": "2020-05-06 09:37:29"
        },
        {
            "id": 3,
            "name": "运营中心",
            "mark": "center",
            "icon": "http:\/\/xxx",
            "condition": {
                "desc": "去掉最大市场,其他市场销售了200T",
                "self": "0",
                "direct": "0",
                "market": "200"
            },
            "sales_commission": "16",
            "custody_reward": "3",
            "agent_reward": "2",
            "created_at": "2020-05-06 09:37:29",
            "updated_at": "2020-05-06 09:37:29"
        },
        {
            "id": 4,
            "name": "分公司",
            "mark": "branch",
            "icon": "http:\/\/xxx",
            "condition": {
                "desc": "去掉最大市场,其他市场销售了500T",
                "self": "0",
                "direct": "0",
                "market": "500"
            },
            "sales_commission": "21",
            "custody_reward": "4",
            "agent_reward": "2",
            "created_at": "2020-05-06 09:37:29",
            "updated_at": "2020-05-06 09:37:29"
        },
        {
            "id": 5,
            "name": "运营大区",
            "mark": "region",
            "icon": "http:\/\/xxx",
            "condition": {
                "desc": "去掉最大市场,其他市场销售了1000T",
                "self": "0",
                "direct": "0",
                "market": "1000"
            },
            "sales_commission": "25",
            "custody_reward": "5",
            "agent_reward": "2",
            "created_at": "2020-05-06 09:37:29",
            "updated_at": "2020-05-06 09:37:29"
        }
    ]
}
```

## 修改市场代理级别

**方式**

`PUT`

**路径**

`/admin/markets/agency/{agency}`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  name   | string |  是  |                  代理商级别名称                 |
|  mark   |  string   |  是  |                  代理商级别标识                 |
| icon  |  string   |  是  |  代理商级别名称  |
| condition |  array   |  是  |                  晋升条件                 |
|  sales_commission  |  int   |  是  |            销售提成             |
| custody_reward  |  int   |  是  |                托管费奖励                |
| agent_reward  |  int   |  是  |                代理商培育奖励               |

**condition**

```json
{
  "desc": "个人购买或销售任意一台存储器",/*条件描述*/
  "self": "1",/*自身销售最小值*/
  "direct": "1",/*直推最小是*/
  "market": "0"/*市场最小值*/
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

# 提现管理

## 获取提现列表

**方式**

`GET`

**路径**

`/admin/cash/withdrawal`

**请求参数**
| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| limit |  int   |  15  |  是  | 每页条数 |
| username |  string   |  无  |  否  | 用户名称检索 |
| status |  int   |  无  |  否  | 状态检索：0-待审核 1-已通过 2-已驳回 |


**响应**

`Status code 200`

```json
{
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "amount": "100.00",/*提现金额*/
                "service_charge": "10.00",/*提现服务费*/
                "account_type": "wechat",/*提现方式 wechat-微信*/
                "account_info": {/*提现用户信息 可不展示*/
                    "sex": "",
                    "city": "",
                    "openid": "o0WRl1l-ZIXEIMR3gjDyhj7MZ-2k",
                    "country": "",
                    "nickname": "",
                    "province": "",
                    "privilege": [],
                    "headimgurl": ""
                },
                "handler_id": 1,/*处理人id*/
                "status": 0,/*审核状态:0-待审核 1-已通过 2-已驳回*/
                "reason": null,/*拒绝原因*/
                "partner_trade_no": "M10000",/*订单号*/
                "partner_error_info": null,/*提现失败原因*/
                "created_at": "2020-01-08 14:46:46",/*申请时间*/
                "updated_at": "2020-01-08 14:46:47",/*处理时间*/
                "user": {/*提现用户信息*/
                    "id": 1,
                    "name": "用户111",
                    "avatar": "http://szl.qingchuanren.com/59ccae9ca7343be98d392d85114692c8.png"
                },
                "handler": {/*处理人信息*/
                    "id": 1,
                    "name": "超级管理员"
                }
            }
        ],
        "first_page_url": "http://comc.com/admin/withdrawal?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://comc.com/admin/withdrawal?page=1",
        "next_page_url": null,
        "path": "http://comc.com/admin/withdrawal",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    },
    "total_amount": "100.00",/*总金额*/
    "wait_amount": "100.00",/*带入账金额*/
    "success_amount": "0.00",/*成功金额*/
    "fail_amount": "0.00",/*失败金额*/
    "today_amount": "100.00"/*今天提现金额*/
}
```

## 通过提现

**方式**

`PATCH`

**路径**

`/admin/cash/withdrawal/{withdrawal}/agree`

**请求参数**
无

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "通过成功"
}
```

## 驳回提现

**方式**

`PATCH`

**路径**

`/admin/cash/withdrawal/{withdrawal}/reject`

**请求参数**
| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| reason |  string   |  无  |  是  | 驳回原因 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "message": "驳回成功"
}
```



# 红包

## 发送红包

**方式**

`POST`

**路径**

`/api/bonus/send`

**参数**

|  名称  |  类型  | 必须 | 说明 |
| :----: | :----: | :--: | :-----------: |
| pay_pass | string |  是  | 支付密码  |
| num | integer |  否  | 红包个数 仅当 `channel` 为 `group` 必填写 |
| channel | string |  是  | 发放渠道: `personal`-个人 `group`-群 |
| target_id | string |  是  | 目标ID，如  `channel` 为  `personal` 为用户id, 如  `channel` 为  `group` 是群id  |
| type | string |  是  | 红包类型: `common`-普通 `luck`-手气,当发送个人红包 `type` 为 `common` |
| remark | string |  是  | 备注  |

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": {
        "bonus_id": 11232 /*红包id*/
    } 
```

## 领取红包

**方式**

`POST`

**路径**

`/api/bonus/:id/receive`

**响应**

`Status code 200`

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": {
        "amount": "40",/*领取的金额*/
    } 
```
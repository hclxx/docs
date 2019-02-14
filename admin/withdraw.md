# 提现

## 申请列表

`admin/withdraw`

**请求方式**

`GET`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明 
:--------:|:--------:|:--------:|:--------:|:--------:|
limit | int | 15 | 否 | 每页条数
target_id | int | 无 | 否 | 商家ID
phone | string | 无 | 否 | 手机号
email | string | 无 | 否 | 邮箱

**返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "merchant_id": 1,
            "address": {
                "id": 1,
                "name": "名称", // 名称
                "address": "18728624682", // 提现地址
                "type": 1 //  1: 支付宝 2: 银行卡
            },
            "amount": "100", // 提现金额
            "charge": "0", // 手续费
            "type": 1, 
            "status": "1", // 0: 待处理 1: 成功 2: 失败
            "created_at": "2019-02-14 15:16:18", 
            "updated_at": "2019-02-14 15:16:18",
            "name": "商家", // 商家名称
            "phone": "18728624682", // 商家手机号
            "email": "1986513441@qq.com" // 邮箱
        }
    ],
    "first_page_url": "http://comc.com/admin/withdraw?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc.com/admin/withdraw?page=1",
    "next_page_url": null,
    "path": "http://comc.com/admin/withdraw",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

## 处理提现

`admin/withdraw/{withdraw}`

**请求方式**

`PUT`

**请求参数**

名称 | 类型 | 默认 | 必须 | 说明 
:--------:|:--------:|:--------:|:--------:|:--------:|
action | int | 无 | 是 | 1: 通过 2: 驳回
remark | string | 无 | 否 | 说明

**返回体**

```json
{
  "message": "操作成功"
}
```
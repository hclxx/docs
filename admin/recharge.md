# 充值管理

## 充值列表

`admin/wallets/transactions`

**请求方式**

`GET`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   limit   |  int   |  15  |  否  | 每页条数 |
|   user   | string |  无  |  否  |   按照用户进行模糊匹配   |

**返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "user_id": 2,
            "txid": "SADASDSADSADASD",/*交易ID*/
            "fee": 0,
            "from": "SADASDSADSADASD",
            "to": "SADASDSADSADASD",
            "amount": "100.000000",/*充值金额单位（元）*/
            "propid": 0,
            "addtime": 0,
            "block": 7877788,
            "blocktime": 0,
            "confirms": 10,
            "status": 2,
            "contract": "SADASDSADSADASD",
            "currency": "COMC",/*代币*/
            "collected": 0,/*是否归集： 0-未归集 1-已归集*/
            "type": 2,
            "created_at": null,/*时间*/
            "updated_at": null,
            "user": {
                "id": 2,
                "name": "123123", /*用户名称*/
                "sex": 1,
                "email": "915664508@qq.com",
                "phone": "18382274309", /*手机号*/
                "avatar": null,
                "code": "",
                "bio": null,
                "power": 0,
                "last_time": null,
                "last_ip": null,
                "status": 0,
                "created_at": null,
                "updated_at": "2019-03-14 18:22:25"
            }
        }
    ],
    "first_page_url": "http://comc-mall-amin.test/admin/wallets/transactions?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc-mall-amin.test/admin/wallets/transactions?page=1",
    "next_page_url": null,
    "path": "http://comc-mall-amin.test/admin/wallets/transactions",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```
